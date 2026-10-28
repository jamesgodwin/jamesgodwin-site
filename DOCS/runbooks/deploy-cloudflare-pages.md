# Deploy to Cloudflare Pages

The static Astro site is live on Cloudflare Pages. A GitHub push, successful Pages deployment and live verification are separate checkpoints. James confirmed deleting Netlify on 20 October 2026; do not rely on it for recovery. The current DNS and redirect configuration is documented below.

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
| Build environment | `NODE_VERSION=22.23.4`, `PUBLIC_POSTHOG_KEY`, `PUBLIC_POSTHOG_HOST` |

Use the existing website’s public PostHog project token, not a personal API key. The current ingestion host is `https://us.i.posthog.com`. Configure variables for Production and Preview builds. Keep actual tokens in Cloudflare/ignored local environment files. GA and Kit are already configured in the layout. Do not set the opt-in `SITE_POC` or `DESIGN_SYSTEM_CATALOG` flags in hosting.

Cloudflare Pages builds the root Astro project directly. There is no Wrangler deploy command or server adapter. [Pages build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).

## Prepare a GitHub candidate

1. Run `npm ci` on a clean exported candidate, then `npm run build`, `npm test`, `npm run test:routes`, `npm run test:essays`, `npm run test:notes` and `npm run test:design`. The build includes the design guard. Check normal output excludes catalogue/prototype routes, drafts and the retired pilot DMG.
2. Inspect the staged file list and diff. Exclude `.env*` values, `.dev.vars*`, `.wrangler/`, `node_modules/`, build output, browser artifacts and project MCP credentials. `.env.example` contains placeholders only. The retained `legacy/` source is comparison material and does not enter `dist`.
3. With publication authority, commit the reviewed candidate and push normally to `origin/main`. Do not force push. For documentation-only commits, prefix the commit subject with `[CF-Pages-Skip]` to omit the Cloudflare deployment, as requested by James. Website copy, Notes/Essays content, images, metadata and code changes still require a normal deployment to become visible. Other main pushes trigger the connected Cloudflare Pages build. [Cloudflare commit-message skip support](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/#skipping-a-build-via-a-commit-message).
4. Verify the remote `main` SHA matches the local candidate. Record the SHA and checks in the current session log/handoff. For a deployable candidate, confirm the Git-triggered Pages build succeeds for that SHA before checking the hosted output. For a documentation-only skip commit, verify the remote SHA and marker and check that no Cloudflare check run/deployment was created; the production revision intentionally remains the last successful application release.

## Verify the Pages address

Main output uses `build.format: 'file'`, for example `about.html`. Pages serves this at `/about` and redirects `/about/` to the slashless URL, keeping existing canonicals consistent. Directory output introduced an extra trailing-slash redirect in the local Pages emulator, so it is retained only for the opt-in local reference builds. [Astro output formats](https://docs.astro.build/en/reference/configuration-reference/#buildformat).

`public/_redirects` preserves `/writing` → `/essays` and `/workshop-enquiry` → `/contact?about=workshop`, including slash variants. It also preserves the old AI Ching PNG, GratefulFor SVG and pressure-rings PNG addresses with redirects to optimised WebP files. Top-level `404.html` keeps unknown routes as real 404s rather than a SPA fallback. `public/_headers` sets `X-Robots-Tag: noindex` for the temporary project address and branch/version Pages addresses, with no such rule on the custom domain. [Pages headers](https://developers.cloudflare.com/pages/configuration/headers/).

Check the exact hosted candidate:

- All original routes, `/work`, four stories and `/essays`, `/notes` plus all selected published essays and notes and generated archive pagination pages render, with production-domain canonicals and loaded assets.
- Verify `/robots.txt`, `/sitemap.xml` and `/llms.txt` return the expected text/XML rather than HTML fallbacks. Compare hosted sitemap URL sets with the candidate, check `/og-case-shelf.png` and its metadata, plus all three image compatibility redirects. Search Console indexing/submission is a separate account check.
- Both legacy aliases redirect correctly; missing URLs and `/tapscribe/TapScribe-Pilot.dmg` return 404. Check slash variants for loops.
- Confirm noindex on Pages URLs, sitemap content and original article social images. Drafts, private editorial content, local reference routes and mockup assets stay absent.
- Exercise homepage selection, all chapters, Back/Forward, writing → article, contact intent and email/WhatsApp links on desktop/mobile. No app controls inside story screens.
- Verify actual PostHog delivery for pageviews, contact events, exceptions/logs as needed. Pages hosts must carry `traffic_type=verification` and `verification_run=cloudflare-preview` unless an explicit verification-run label is supplied. Confirm real custom-domain traffic is not assigned those preview properties.

Local emulator evidence supports preparation, not hosted acceptance. It can be reproduced without installing a project dependency using `WRANGLER_SEND_METRICS=false npx wrangler@4 pages dev dist --ip 127.0.0.1 --port 4174 --compatibility-date 2026-10-20`.

## Current hosting and recovery

The apex CNAME is `jamesgodwin-site.pages.dev`, Proxied, Auto TTL. The www configuration below is also required. Netlify account deletion is owner-reported; the old `jamesgodwin.netlify.app` target is historical evidence, not a usable recovery destination.

For an authorised application rollback, open the Pages project’s **Deployments**, find a previous successful **production** deployment, open its actions menu and choose **Rollback to this deployment**. Preview deployments are not rollback targets. Record the selected deployment/revision, verify the live routes and assets again, and reconcile GitHub main before the next release. Inspect DNS/redirect settings separately if the fault is routing; an application rollback does not repair an incorrect hostname record. [Cloudflare rollback procedure](https://developers.cloudflare.com/pages/configuration/rollbacks/).

## Current www redirect

As verified on 20 October 2026, `www` is a proxied CNAME to `jamesgodwin.me` with Auto TTL. Keep it. Cloudflare Single Redirect `Redirect www to jamesgodwin.me` matches `(http.host eq "www.jamesgodwin.me")`, dynamically targets `concat("https://jamesgodwin.me", http.request.uri.path)`, status 301, Preserve query string enabled. This handles both HTTP and HTTPS before origin routing, without an additional www Pages binding. Do not disable the proxy or delete www while relying on this edge redirect. [Repair/rollback evidence](../logs/2026-10-20-026-www-redirect-repair.md).

## Post-launch search and analytics checks

1. Open Google Search Console and select or verify the `jamesgodwin.me` property. A Google verification TXT record was present during the DNS inspection, but that alone does not establish current account ownership or indexing. Preserve existing verification records. [Ownership verification](https://support.google.com/webmasters/answer/9008080).
2. Check the sitemap report for `https://jamesgodwin.me/sitemap.xml`. Submit it if absent; inspect any fetch/parse errors and record the submission/status date. Use URL Inspection for the homepage, a story and an essay to compare Google’s crawl/index/canonical status with the live page. A reachable sitemap is not proof of indexing or ranking. [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
3. Separately verify the existing PostHog project receives controlled contact events and any required log/exception checks on the hosted build. Use labelled synthetic traffic, avoid actual outbound contact and exclude verification runs from visitor reporting. On 20 October, hosted pageviews, both contact events and interaction logs were confirmed on Pages and the custom domain; automatic hosted uncaught-error capture was subsequently confirmed on Pages after James disabled Brave Shields for testing ([evidence](../logs/2026-10-20-028-hosted-posthog-verification.md)). Verification labels are only applied on localhost/Pages hosts. A production URL query label alone does not tag later events: isolate that synthetic session by its recorded distinct ID and time window.
4. Once the technical/account checks are reconciled, use the existing eight-person visitor exercise to test comprehension of the offer and stories. Do not infer product outcomes from build or HTTP checks.
