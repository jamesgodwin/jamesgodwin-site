# Project

Purpose, users, stack, and constraints for this repository. Operating rules live in `AGENTS.md`. Active work lives in `DOCS/BACKLOG.md`.

## Purpose

This repository powers James Godwin's personal portfolio site at the public destination used for his work, writing, Taoist practice, apps, books, workshops, and contact paths. It presents those paths through the selected Case shelf design system with route-backed pages and an Astro writing collection. The Astro site is live on Cloudflare Pages at jamesgodwin.me after James’s domain cutover on 20 October 2026.

## Intended User and Problem

Known from the live site and the 6 September 2026 LinkedIn/site review, not from invented personas:

- Founders and product teams arriving from LinkedIn whose fast-built or AI-assisted products still have UX, accessibility, or implementation gaps. LinkedIn currently leads with this problem; the site has historically led with leadership-regulation language, so those visitors must translate before recognising the same person and service.
- Operators of service businesses whose operational knowledge lives with the owner and scattered handoffs. `/systems` already addresses this with a fixed-scope offer.
- Curious visitors exploring reflective, creative, and Taoist work without having to identify as buyers.

James is the author and maintainer. This is a personal site, not a multi-user product. Distinguish that evidence from later conversion or traffic claims; those metrics are not established here.

## First Success Signal

Enduring signal: a visitor can recognise James, reach a relevant destination, and find a direct contact method without a site rebuild.

Current goal: verify Search Console ownership, sitemap status and indexing. Hosted analytics acceptance is complete, including the controlled automatic exception ([evidence](logs/2026-10-20-028-hosted-posthog-verification.md)). The selected site has all four stories, real writing and aligned pages; primary live checks pass. [Build scope](specs/site-story-writing-build.md), [live verification](logs/2026-10-20-023-live-cloudflare-verification.md). The eight-person visitor exercise from [the alignment plan](specs/linkedin-site-alignment.md) remains separate product evidence.

## Stack

Implementation: Astro 7, static output with plain browser JavaScript and no React runtime, live on Cloudflare Pages. James performed the custom-domain cutover. James confirmed deleting the Netlify account on 20 October 2026. It is retired and is not an available rollback target; use a previous successful Cloudflare Pages production deployment for recovery. [Migration and publishing scope](specs/essays-home-and-agent-readiness.md). The selected design has four stories (two for the same client, TapScribe and Plumbline with IIIMPACT) and 15 published essays.

- Design authority: `src/styles/tokens.css` owns preserved values and light/dark mappings; `src/design-system/patterns.js` owns supported recipes; `src/styles/patterns.css` owns their styling. `src/index.css` supplies resets/inheritance, `src/NewSite.css` inherited layout and retained historical circle composition. [Usage](runbooks/use-design-system.md).
- `src/siteMetadata.js` owns route/social/indexability metadata; `src/routes.js` binds commands, headings, presentation and trusted output modules. `src/pages/sitemap.xml.js` lists indexable canonical URLs; `src/pages/llms.txt.js` generates the public context guide from metadata and published essays. `public/robots.txt` references the sitemap. [Image/SEO publication](logs/2026-10-20-025-image-seo-deployment.md) is live; [www routing](logs/2026-10-20-026-www-redirect-repair.md) is repaired and verified.
- `src/layouts/SiteLayout.astro` owns shared document metadata, font loading, GA, ConvertKit and navigation.
- Deployed archive: 15 essays with static 12-per-page pagination at `/essays` and `/essays/page/<number>`; visible navigation uses Essays. The 12-article backfill is published and verified ([release](logs/2026-10-20-032-article-pagination-release.md)). [Pagination evidence](logs/2026-10-20-031-essay-pagination.md).

- `src/pages/index.astro` presents the four-story selector and writing, defaulting to Ben’s scoring story. `[page].astro` preserves all 17 existing inner routes; Work/story and Essays routes are explicit. Sitemap includes published essays and new sections. `404.astro` is aligned with the shell.
- `src/site-client.js` owns contact intent/tracking and progressively enhanced chapter navigation. All story chapters are rendered in HTML; app illustrations have no controls. The earlier circle/private-command implementation remains in source as historical reference and is not mounted by the new shell.
- `src/posthog.js` and `src/posthog-logs.js` preserve the existing project, events, exceptions and browser logs. Local and Pages-hosted verification traffic is labelled; the run label follows navigation within the session.
- `src/themes.js` supplies image-theme artwork. The [design-system foundations](specs/design-system-foundations.md) are implemented, consolidated and deployed, preserving the selected visual language and layout. Action, TextLink, LinkCard, PageHero and ContentProse are shared by product and catalogue; retained historical browser reflection actions use the same recipes but are not mounted in the public Case shelf. Standard outlined actions now share one treatment; public dark-mode controls remain later work.
- `legacy/` retains the CRA source/manifests and original prerender script for migration comparison. It is not shipped by Astro or a second maintained application.

### Adding a route-backed page

Keep `siteMetadata.js`, the route/output/presentation mapping, navigation/help where appropriate, redirects and sitemap in sync. Astro must emit readable HTML and route-specific canonical/social metadata. Preserve command-backed content architecture without restoring a public terminal.

## Key Constraints

- Preserve existing public routes, service prices, contact paths and the selected Case shelf design. Four static stories and 15 original illustrated essays are live; earlier circle/terminal artwork is historical reference.
- Trusted HTML only in `src/outputs/`; never interpolate visitor input into `set:html` or reflection HTML.
- Keep existing Google Analytics and ConvertKit (`data-uid="0da6b662ba"`) working alongside PostHog.
- The obsolete `public/tapscribe/TapScribe-Pilot.dmg` was removed at James's request on 20 October and now returns 404 on the live Cloudflare site. Do not restore it or add replacement download hosting.
- Do not merge or resume the parked `lookup` branch without James lifting the hold.
- James authorised the GitHub push and performed the Pages deployment/domain cutover on 20 October. James subsequently confirmed deleting the Netlify account. Unpublished essay publication, outbound contact and spending remain separate.

## Non-Goals

No CMS, multi-user product, new tracking system, changed service offers or edits to linked external products. Terminal restoration, agent tools and the opening question are parked. Twelve selected LinkedIn Notes have a separate local implementation; general feed import remains outside scope. Public dark-mode UI remains deferred, separate from migration parity.

## Environment

- `npm start` / `npm run dev`: Astro at `http://127.0.0.1:3000`.
- `npm run build`: runs `check:design`, then writes static output to `dist/`.
- `npm run preview`: local built site at `http://127.0.0.1:4173`.
- `npm test`: Vitest content, metadata, contact-intent, log-export and design-system contract tests. Build first for the static-template metadata assertion.
- `npm run test:routes`: built HTML/metadata, image-path and retired-download checks; build first.
- `.env.example` documents `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_HOST`; ignored `.env` has the local configuration. These are browser project settings, not management/API credentials. Hosting configuration must be supplied and verified separately.
- Google Analytics ID: `G-0TCHNH6DEP`.
- Cloudflare Pages: Astro preset, repository root, `main`, `npm run build`, `dist`; Node 22.22.1. Main HTML output uses file format for slashless canonical URLs; opt-in prototype/catalogue builds retain directory format. `public/_headers` applies noindex only to Pages hosts, `_redirects` owns legacy aliases and `404.html` preserves missing-route status. [Deployment procedure](runbooks/deploy-cloudflare-pages.md).
- Baseline and browser QA artifacts stay ignored under `output/migration-baseline/`.

### Main story and writing build

- Main review URL: `http://127.0.0.1:4173/`. `/work/crew-scores`, `/work/quality-control`, `/work/tapscribe` and `/work/plumbline` contain the four narratives, selected through the homepage shelf; `/essays` contains 15 selected published articles, paginated 12 per page.
- `npm run import:essays -- <Source posts folder>` reads selected ARTICLE bodies and the publication Log; conflicts preserve local edits. `npm run test:essays` checks importer and built output.
- Collection: `src/content/essays/`; original covers: `src/assets/writing/`; selection/reconciliation manifest: `scripts/essay-selection.mjs`. Synthetic draft fixture never ships.
- Local follow-up: twelve edited short pieces at `/notes` and `/notes/<slug>`, separate from the 15 essays, with original artwork and adaptation/source attribution. `src/content/notes/`, `src/assets/notes/`, `scripts/note-selection.mjs`; `npm run test:notes` checks built discovery, metadata and draft exclusion. [Scope and evidence](specs/selected-linkedin-notes.md). This follow-up is not deployed yet.

### Local Case shelf prototype

- `npm run build:concept` / `npm run preview:concept`: `http://127.0.0.1:4176/concept/`. Development uses `npm run dev:concept` at port 3002.
- `SITE_POC=true` conditionally injects the route from `src/concept/Page.astro`; output goes to ignored `output/homepage-poc/build/`.
- Four stories with static supporting screens and chapter navigation, writing mockup review and the scoped component reference are noindex and load no analytics or form integrations. Normal builds omit the routes and their media. `npm run test:concept` checks both outputs.
- [Brief and handoff](specs/homepage-proof-of-concept.md). The prototype remains a historical reference; main Writing is implemented at `/essays`.

### Local design catalogue

- `npm run dev:catalogue`: opt-in live catalogue at `http://127.0.0.1:3001/design-system/`.
- `npm run build:catalogue` then `npm run preview:catalogue`: built catalogue at `http://127.0.0.1:4175/design-system/`, written separately to ignored `output/design-system/catalogue-build/`.
- Default builds omit `/design-system/`; it is noindex, excluded from sitemap/navigation and loads no analytics or form scripts. `npm run test:catalogue` verifies the two built outputs.
- `npm run check:design` checks tokens and recipe ownership; `npm run test:design` tests the guard, including planted violations. Commands and maintenance contracts: [use the design system](runbooks/use-design-system.md).
