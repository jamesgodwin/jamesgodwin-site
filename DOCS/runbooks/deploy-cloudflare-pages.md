# Deploy to Cloudflare Pages

This procedure prepares and verifies the reviewed static Astro site. A GitHub push, a Pages deployment and the custom-domain cutover are separate checkpoints. Keep the working Netlify site until the new domain is verified and retirement is authorised.

## Configure the application

| Field | Value |
|---|---|
| Repository | `jamesgodwin/jamesgodwin-site` |
| Project | `jamesgodwin-site` |
| Production branch | `main` |
| Framework preset | Astro |
| Root directory | Blank, meaning repository root |
| Build command | `npm run build` |
| Build output | `dist` |
| Build environment | `NODE_VERSION=22.22.1`, `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST` |

Use the existing website’s public PostHog project token, not a personal API key. The current ingestion host is `https://us.i.posthog.com`. Configure variables for Production and Preview builds. Keep actual tokens in Cloudflare/ignored local environment files. GA and Kit are already configured in the layout. Do not set the opt-in `SITE_POC` or `DESIGN_SYSTEM_CATALOG` flags in hosting.

Cloudflare Pages builds the root Astro project directly. There is no Wrangler deploy command or server adapter. [Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## Prepare a GitHub candidate

1. Run `npm ci` on a clean exported candidate, then `npm run build`, `npm test`, `npm run test:routes`, `npm run test:essays` and `npm run test:design`. The build includes the design guard. Check normal output excludes catalogue/prototype routes, drafts and the retired pilot DMG.
2. Inspect the staged file list and diff. Exclude `.env*` values, `.dev.vars*`, `.wrangler/`, `node_modules/`, build output, browser artifacts and project MCP credentials. `.env.example` contains placeholders only. The retained `legacy/` source is comparison material and does not enter `dist`.
3. Commit the reviewed candidate with `[skip netlify]` in the message and push normally to `origin/main`. Do not force push. This avoids triggering the existing Netlify deployment; later pushes without the marker can still trigger it until builds are disabled. [Netlify skip-deploy behaviour](https://docs.netlify.com/deploy/manage-deploys/manage-deploys-overview#skip-a-deploy).
4. Verify the remote `main` SHA matches the local candidate. Record the SHA and checks in the current session log/handoff. James can then select **Save and Deploy** in Pages, or confirm the Git-triggered Pages build uses that SHA.

## Verify the Pages address

Main output uses `build.format: 'file'`, for example `about.html`. Pages serves this at `/about` and redirects `/about/` to the slashless URL, keeping existing canonicals consistent. Directory output introduced an extra trailing-slash redirect in the local Pages emulator, so it is retained only for the opt-in local reference builds. [Astro output formats](https://docs.astro.build/en/reference/configuration-reference/#buildformat).

`public/_redirects` preserves `/writing` → `/essays` and `/workshop-enquiry` → `/contact?about=workshop`, including slash variants. It also preserves the old AI Ching PNG, GratefulFor SVG and pressure-rings PNG addresses with redirects to optimised WebP files. Top-level `404.html` keeps unknown routes as real 404s rather than a SPA fallback. `public/_headers` sets `X-Robots-Tag: noindex` for the temporary project address and branch/version Pages addresses, with no such rule on the custom domain. [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/).

Check the exact hosted candidate:

- All original routes, `/work`, four stories and `/essays` plus its three published articles render, with production-domain canonicals and loaded assets.
- Verify `/robots.txt`, `/sitemap.xml` and `/llms.txt` return the expected text/XML rather than HTML fallbacks. Compare hosted sitemap URL sets with the candidate, check `/og-case-shelf.png` and its metadata, plus all three image compatibility redirects. Search Console indexing/submission is a separate account check.
- Both legacy aliases redirect correctly; missing URLs and `/tapscribe/TapScribe-Pilot.dmg` return 404. Check slash variants for loops.
- Confirm noindex on Pages URLs, sitemap content and original article social images. Drafts, private editorial content, local reference routes and mockup assets stay absent.
- Exercise homepage selection, all chapters, Back/Forward, writing → article, contact intent and email/WhatsApp links on desktop/mobile. No app controls inside story screens.
- Verify actual PostHog delivery for pageviews, contact events, exceptions/logs as needed. Pages hosts must carry `traffic_type=verification` and `verification_run=cloudflare-preview` unless an explicit verification-run label is supplied. Confirm real custom-domain traffic is not assigned those preview properties.

Local emulator evidence supports preparation, not hosted acceptance. It can be reproduced without installing a project dependency using `WRANGLER_SEND_METRICS=false npx wrangler@4 pages dev dist --ip 127.0.0.1 --port 4174 --compatibility-date 2026-10-20`.

## Custom-domain cutover

After hosted acceptance and James’s authorisation, inspect current Netlify domain settings and DNS. Record the working Netlify target/deployment and exact DNS rollback values before changing anything. Attach `jamesgodwin.me` to Pages, agree the `www` redirect, verify HTTPS, routing, assets and live analytics. Do not retire Netlify until those checks pass and retirement is authorised. A Pages address labelled “Production” in the dashboard does not itself mean the public custom domain has moved.
