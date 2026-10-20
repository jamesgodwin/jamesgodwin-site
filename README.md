# James Godwin's website

Astro implementation of jamesgodwin.me, hosted on Cloudflare Pages. James connected the custom domain on 20 October 2026; the reviewed site is live and primary production checks pass. [Release verification](DOCS/logs/2026-10-20-025-image-seo-deployment.md) and [www repair](DOCS/logs/2026-10-20-026-www-redirect-repair.md) pass. James confirmed deleting the Netlify account on 20 October 2026; Cloudflare is the current hosting and recovery path.

Read [AGENTS.md](AGENTS.md), [project context](DOCS/PROJECT.md), [backlog](DOCS/BACKLOG.md) and [handoff](DOCS/next-day.md) before making changes.

Current build: cream/forest site, four static case stories and three illustrated essays. See the [build brief](DOCS/specs/site-story-writing-build.md), [design-system guide](DOCS/runbooks/use-design-system.md) and [writing import guide](DOCS/runbooks/import-essays.md).

## Local development

Use Node.js 22.22.1 (`.nvmrc`). Install dependencies with `npm ci`, then copy `.env.example` to ignored `.env` and supply the existing PostHog project token and host.

```sh
npm start
```

Open http://127.0.0.1:3000. Local and `*.pages.dev` PostHog traffic is labelled `traffic_type=verification`; exclude it from production reporting.

## Verification

```sh
npm run build
npm test
npm run test:routes
npm run test:essays
npm run test:design
npm run preview
```

The build writes `dist/`; preview serves it at http://127.0.0.1:4173. Browser checks and live PostHog ingestion evidence are recorded in [the migration log](DOCS/logs/2026-10-20-003-local-astro-migration.md). CRA source in `legacy/` is a retained comparison snapshot and is not shipped.

## Cloudflare Pages

Use the Astro preset, `main`, repository root, `npm run build`, and output directory `dist`. Set `NODE_VERSION=22.22.1`, `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_HOST` in Cloudflare’s build environment. No Wrangler deploy command or SSR adapter is required. Main output uses `route.html` files so Pages serves the existing slashless URLs. `public/_redirects` preserves aliases; top-level `404.html` prevents SPA fallback; host-specific `public/_headers` keeps Pages addresses out of search without blocking the custom domain.

Follow [deploy to Cloudflare Pages](DOCS/runbooks/deploy-cloudflare-pages.md) for releases, live verification, www configuration and recovery using a previous successful Pages production deployment. Netlify skip markers are no longer required. Keep the proxied www CNAME and enabled edge redirect. Hosted analytics acceptance is complete; Search Console remains the next follow-up; see [the handoff](DOCS/next-day.md).

## Local design reference

The [design-system foundations and consolidation](DOCS/specs/design-system-foundations.md) are implemented; [usage and catalogue commands](DOCS/runbooks/use-design-system.md) describe the contracts. The earlier [homepage exploration](DOCS/specs/homepage-visual-exploration.md) is historical reference.

Run `npm run build:catalogue` and `npm run preview:catalogue` to open the opt-in catalogue at http://127.0.0.1:4175/design-system/. For live editing, use `npm run dev:catalogue` at port 3001. Normal builds omit that route.
