# Astro, Cloudflare and Essays with PostHog

## Current applicability, 20 October 2026

Astro, all four Case shelf stories, three original essays and the image/SEO update are live on Cloudflare Pages. www is repaired; James reports the Netlify account deleted. Search Console remains open; hosted pageviews, both contact events, interaction logs and automatic uncaught-error receipt are confirmed. The initial preservation/single-story/local-only phases and completed hosting amendments below are chronological history; they do not supersede this state. See the [documentation index](README.md) for current authority and release evidence.

## Original scope and chronological amendments

Date: 2026-10-15. Scope revised by James on 2026-10-20.
Status: Slice 1 complete locally. James has now authorised the selected Case shelf as the main site, Ben's first story, writing and aligned pages. Slice 2 is implemented locally for the three explicitly selected published essays and a reusable importer; final qualification is recorded in [current build scope](site-story-writing-build.md). Earlier exploration/preservation language below is historical where it conflicts with this later direction. Cloudflare cutover and public publication remain separate.
Decision: [essays canonical home and Astro migration](../decisions/2026-10-15-essays-canonical-home-and-astro-migration.md).

## Current outcome and boundaries

Move the existing site from Create React App to Astro, move hosting from Netlify to Cloudflare, and provide an Essays publishing path while keeping PostHog working. Preserve the current circle experience, visual language, existing URLs, services, prices and contact paths. Source remains the authoring workspace; this site owns rendering and canonical essay URLs.

The migration and consolidation preservation gates are complete locally. James subsequently authorised homepage composition exploration while retaining typography and circles. Explore and review two concepts before slice 2; that exploration does not change the current homepage or approve a replacement interaction. Keep PostHog and existing route/contact requirements through any later agreed implementation.

Terminal restoration, agent tools/MCP, the opening question and Notes curation/import are parked. The letter to agents, expanded `/now`, Markdown twins, `llms-full.txt`, crawler-specific work and new guided audio are outside this focused release too. Preserve existing `/now` and `breathe`. Original proposals are retained in [the deferred plan](../archive/2026-10-20-agent-readiness-proposals.md); they are not dependencies or automatically scheduled follow-ups.

The rationale is ownership of the writing archive, accessible HTML, stable URLs and reader experience. No search ranking or AI-citation outcome is guaranteed.

## 20 October handoff amendment — overrides earlier dates/source assumptions

James will finish the Astro website and Essays publishing path before resuming article writing in Source. The 26/27 October target and the proposed new six-week article cycle are suspended; no deadline is implied by the older dates below. Source remains the authoring workspace, not a replacement website CMS. The existing implementation slices remain the scope authority; this amendment adds no feature scope.

- Source root: `/Users/nitro/Library/CloudStorage/Dropbox/Source/`. Read `WRITING_STYLE.md` for James’s spoken-first authoring method. Article bodies live in `Runbooks/LinkedIn Posts/Output/Posts/*ARTICLE*.md`, excluding announcement files. Read current Status and `Runbooks/LinkedIn Posts/Log.md` instead of assuming the old count or that a scheduled date means published. Keep unpublished files as drafts until James explicitly approves publication.
- Preserve James’s wording, opinions, cadence, uncertainty and actual experience. Import essay bodies without turning them into new AI-written essays. Image hooks, prompts, editorial notes, private project material and internal source metadata must not become public article text.
- Website-first full essays; a short LinkedIn announcement links home after publication. Native Pulse republication is optional, not a second weekly obligation. Source owns queue and confirmed publication state; site owns published rendering/canonical URL. Return the exact live essay URL to Source when publication is actually confirmed; no task-to-task messaging is implied.
- Source’s current pause and eventual restart rules: `Business/Growth Strategy/LinkedIn Article Cycle/Programme.md`. On James’s return, choose fresh cycle dates/baseline; no automatic restart when a build passes.
- The earlier claim that all LinkedIn articles are unreadable by search engines/assistants is too broad. Official LinkedIn visibility guidance allows public off-platform discovery. The supported rationale is control of the archive, accessibility, URLs and reader experience, not guaranteed search rankings or AI citations.
- This is a documentation handoff only. No implementation, deployment, Search Console action or essay publication occurred here. Existing explicit local implementation authority remains; release/publication boundaries are unchanged.

## Scope and rollout

### Slice 1 — Astro migration with URL parity

Intended behaviour: the live site renders identically enough that no visitor notices, every existing URL resolves to the same content, and the codebase is Astro 5+ with content collections, no React runtime for static pages.

Technical approach:

- New Astro project at the repository root (move the CRA tree to `legacy/` during migration, delete after parity is verified; keep git history). Tailwind is optional; the existing `NewSite.css` custom properties and themes can port as-is.
- Routes to preserve, from `src/siteMetadata.js`: `/`, `/about`, `/executive-state-diagnostic`, `/systems`, `/workshops`, `/workshop-enquiry`, `/apps`, `/books`, `/little-panda`, `/contact`, `/taoism`, `/now`, `/paintings`, `/philosophy`, `/uxui`, `/sanctuary`, `/legal`, `/thank-you`. Port each `src/outputs/*.js` HTML string into a `.astro` page or a Markdown entry; keep headings, copy, prices and contact paths byte-for-byte unless a later slice changes them.
- Preserve `public/_redirects`, the sitemap (now generated), social images, ConvertKit form `data-uid`, GA and the existing PostHog integration (analytics, custom events, exception capture and browser logs). James authorised removal of the obsolete public TapScribe pilot DMG on 20 October; it is excluded from the migration.
- The homepage circle encounter and authored reflections port as a small vanilla client script, preserving the interaction without a React runtime. Theme switching and `breathe` port as small client scripts. Keep the easter eggs `return` and `unlearn`.
- Prerendering script `scripts/prerender-route-metadata.js` is retired; Astro emits metadata per page from frontmatter.

Acceptance: a crawl of the old `build/` and the new `dist/` yields the same set of URLs with 200; titles and descriptions match `siteMetadata.js`; the circle encounter works at 390×844 and 1280×720 with no console errors; `breathe` and theme commands work; Lighthouse accessibility score does not drop; CRA tests that cover content (`contentQuality.test.js`, `conversionRoutes.test.js`, `siteMetadata.test.js`, `contactIntent.test.js`) are ported or replaced by equivalent Astro-side checks.

### PostHog continuity within slice 1

Use the existing PostHog project and ingestion host. Adapt CRA environment configuration to Astro public environment variables and initialise the browser SDK through the shared layout. Preserve existing event names and properties: `pressure_path_selected`, `pressure_reflection_cta_clicked`, `contact_cta_clicked`, `contact_method_selected`. Preserve current exception capture and browser log delivery. Keep existing GA during migration; removing it is not part of this scope.

Acceptance: direct visits and internal navigation produce one pageview per page visit; each existing interaction sends its expected event and properties; browser logs arrive; a controlled exception verifies exception capture. Confirm delivery in PostHog, not only in browser requests. Check repeat navigation for duplicate initialisation. Keep preview/test traffic identifiable and separate from production reporting. Record local, preview and production evidence separately; missing credentials or live checks remain explicit open gates.

### Slice 2 — Essays collection and backfill

Provide `/essays/` newest first and `/essays/<slug>/` with title, publication date, reading time, lead, original body, author, canonical URL, contact path and an original-publication link where verified. Use Astro content collections and build-time rendering. Include Article JSON-LD on essays and Person author data, suitable social metadata, sitemap entries and ordinary crawler access.

Implement `scripts/import-essays.mjs` with the Source folder passed as an argument. Read ARTICLE files, excluding announcements, and reconcile Status against the publication log. Do not assume the historical sixteen/two split. Import only the article body; exclude image hooks/prompts, editorial notes and private metadata from all public build outputs. Unpublished work stays draft until James explicitly approves publication.

Keep title, date, article ID where available, verified LinkedIn URL, lead and draft status in frontmatter. Track source hashes so repeated imports are stable and site-edited bodies are protected; report conflicts instead of overwriting them.

Acceptance: every verified published source selected for backfill renders with its original wording; index ordering and canonical metadata are correct; drafts appear in neither public HTML, generated public data nor sitemap. Two unchanged imports produce no diff; changed source and locally edited body produce a visible conflict without data loss. Verify essay rendering at mobile and desktop sizes, keyboard navigation, schema and PostHog pageviews. Review the initial backfill before any public deployment. No Notes, Markdown twins or agent files are required.

### Slice 3 — Cloudflare preview and production cutover

Cloudflare Pages replaces Netlify, keeping pages prerendered. James selected the Git-backed Pages setup on 20 October; this supersedes the original Workers preference. No MCP endpoint or server-rendered content is required. Audit existing Netlify redirects, environment variables, headers, forms and asset handling rather than copying configuration blindly. The obsolete TapScribe pilot download is removed by James’s instruction; no replacement download hosting is required.

After explicit deployment authorisation, deploy a Cloudflare preview. Verify all 18 existing routes plus Essays, trailing-slash/canonical behaviour, redirects, real 404 responses, sitemap, social images, contact/ConvertKit paths, absence of retired pilot downloads, mobile interactions and PostHog delivery. Preview canonical URLs must point to the intended production domain; keep preview content out of search indexing.

Before a separately authorised production cutover, record DNS/custom-domain configuration and a rollback procedure. Keep the working Netlify deployment available. After cutover, verify HTTPS, redirects, assets, an approved essay and real PostHog delivery on the production domain. Retire Netlify only after production verification and explicit authorisation. A passing local build does not complete hosting migration.

## Publishing after readiness

Source owns drafting, queue and confirmed publication state. James approves each unpublished essay for publication; no date or build automatically changes a draft to public. Publish the full essay on the website first; a manually published LinkedIn announcement can link home. Native Pulse republication is optional. Return the exact verified live URL to Source through the normal handoff. Search Console connection is a separate James action when the first essay is live.

## Next action

Verify Search Console property access, sitemap status and indexing for the live site. Hosted PostHog acceptance is complete. The build, publication, www repair and Netlify retirement are already recorded; do not restart the cutover. Current priorities are in [the backlog](../BACKLOG.md).

## 20 October local implementation checkpoint

Slice 1 evidence: [migration log](../logs/2026-10-20-003-local-astro-migration.md). Astro 7 emits all 18 routes and readable HTML with the original metadata; current content text and default home appearance were compared against the retained CRA build. Browser checks cover four reflection paths and focus return at mobile/desktop sizes, navigation Escape handling, contact intent, themes including navigation persistence, breathing, easter eggs and real 404 responses. Homepage Lighthouse accessibility was 100 for both builds. Existing content/contact/metadata coverage was ported; new log-export and image-path checks demonstrated failure before correction.

PostHog ingestion was confirmed for pageviews, all four event names, a controlled exception and three interaction-log bodies, with verification labels. This is local browser evidence only; Cloudflare preview and production verification remain required in slice 3. Source/public assets are preserved except the explicitly retired TapScribe DMG. Legacy source is retained for review; no terminal interface was restored.

James also requested a [design-system/tokenisation review](design-system-foundations.md). Foundations and consolidation are now implemented and verified locally, preserving the current look; see the design-system spec and usage runbook. The subsequent [homepage exploration](homepage-visual-exploration.md) is authorised for two concepts before Essays, with no selected layout, replacement homepage implementation or public dark-mode switcher yet.

## Hosting preparation after content review, 20 October 2026

The selected four-story site and writing archive have completed a further local content/route review. [Evidence](../logs/2026-10-20-021-final-content-review.md). This supersedes earlier statements that the homepage direction is unselected. The following is preparation for slice 3, not evidence of a configured or deployed Cloudflare project.

- Keep static Astro output on Cloudflare Pages using the Astro preset. No SSR adapter or Wrangler deployment command is needed. [Build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/).
- Build from the repository root with `npm run build`; serve `dist`. Node 22.22.1 is now pinned in `.nvmrc` and should match the build environment. Leave the opt-in local reference flags unset.
- Main output now uses `build.format: 'file'` so Pages serves existing slashless canonical URLs directly. Top-level `404.html` keeps missing paths as 404 responses. The opt-in local reference builds retain directory format. Local Pages emulation caught the former directory/slash mismatch before this correction.
- `_redirects` now preserves both `/writing` → `/essays` and `/workshop-enquiry` → `/contact?about=workshop`, including slash variants. Keep the retired pilot path missing. Verify again on the hosted candidate.
- Set `PUBLIC_POSTHOG_KEY` and `PUBLIC_POSTHOG_HOST` at build time, then confirm delivery. SDK properties now identify localhost and `*.pages.dev` visits as verification traffic. Host-specific `_headers` applies noindex to Pages addresses without blocking custom-domain indexing. Production canonicals, GA and Kit are preserved.
- Inspect the actual Netlify environment, domain/DNS and any platform-level rules before cutover. The repository contains no Netlify configuration file; that does not prove the dashboard has no settings. Keep the working deployment and record its rollback destination before changing DNS.

Preview qualification still needs all public routes, original aliases, real 404s, assets, sitemap, mobile story navigation, contact paths and observed PostHog ingestion on the hosted build. The generic social image still uses the earlier visual style and can be refreshed independently. Account configuration, external preview publication, production domain changes and Netlify retirement have not occurred.

### Pages GitHub handoff, 20 October 2026

James confirmed adding the Cloudflare variables and authorised preparing, committing and pushing the reviewed site so he can deploy it. This extends the previous local-only boundary to the GitHub handoff, not the domain cutover. The [deployment runbook](../runbooks/deploy-cloudflare-pages.md) owns exact setup and verification steps. Use `[skip netlify]` in pushed preparation commits to preserve the existing deployment. Hosted acceptance remains open even after all local checks and GitHub push succeed.

### Owner deployment and live verification, 20 October 2026

James deployed and connected the domain himself. The reviewed Astro HTML/client now match live bytes at https://jamesgodwin.me/. Live route, asset, canonical, alias, TLS, www, indexability and desktop/mobile smoke checks pass. PostHog has received an actual custom-domain Astro pageview without preview labels, and a Pages-address pageview with verification labels. [Detailed evidence and limits](../logs/2026-10-20-023-live-cloudflare-verification.md).

This supersedes earlier pending-deployment/cutover descriptions. Exact old-host rollback information and deeper hosted contact-event/log/exception checks remain outstanding; no Netlify retirement was performed. No new code or infrastructure change was made during this verification.

### Image and SEO preparation before Netlify retirement, 20 October 2026

James requested image optimisation, a Case shelf social image, sitemap/robots checks and an LLM guide before deleting Netlify. This explicitly brings `llms.txt` into scope, superseding its earlier deferral. James subsequently said he will remove the account himself; no account deletion is delegated to the agent.

Acceptance for this local slice: rendered raster content uses appropriately sized WebP, small vector icons remain SVG, image dimensions/alt attributes are present, the new 1200×630 social card matches the current design, and canonical metadata/social assets resolve. The sitemap must list exactly the indexable canonical pages, omit redirects/utility pages and parse as XML. `robots.txt` must permit the public site and reference that sitemap; `llms.txt` must contain accurate public context and working links. Existing article wording/covers, static stories and painting layout remain intact.

Implemented and locally qualified. The generic card uses the existing site headline, Manrope/Inter and token palette. PNG is the crawler-facing social image, with a WebP sibling; the PNG favicon and small SVGs are intentional format exceptions. The sitemap has 25 unique canonical pages. Thank-you, redirect output and the real 404 are noindex; the existing Pages-host noindex rules remain. WebSite/Person schema complements existing Article schema. No rankings, Google indexing, Search Console submission or account-wide Netlify safety are established by local tests.

Source changes remain uncommitted/unpushed. Production still has the earlier assets and no llms.txt (live 404 observed). Netlify CLI listSites returned Unauthorized. Current source has no Netlify services/forms endpoints, and public NS/MX use Cloudflare, but other Netlify sites, domain registrations, saved form submissions and rollback details remain uninspected. [Checks and asset evidence](../logs/2026-10-20-024-images-social-seo.md).

### Image/SEO publication authorised, 20 October 2026

James approved the new social image and explicitly requested pushing the image/SEO candidate to GitHub for Cloudflare deployment, followed by live verification. This lifts the local-only publication boundary for this candidate. Netlify account deletion remains James’s own action. Live acceptance must compare hosted sitemap/llms/assets/metadata with the candidate, check aliases/404/noindex and exercise the rendered site. [Publication evidence](../logs/2026-10-20-025-image-seo-deployment.md).

### Image/SEO release result, 20 October 2026

App revision `83b1155` is pushed and Cloudflare reports success. Primary production metadata/assets/sitemap/llms/browser checks pass. `www.jamesgodwin.me` separately returns Netlify 404; it remains a hosting blocker rather than an image/SEO implementation gap. No DNS/account changes were made. [Full checks, exact revision and access limitation](../logs/2026-10-20-025-image-seo-deployment.md).

### www repair completed, 20 October 2026

James opened Cloudflare DNS for the repair. The stale Netlify CNAME is replaced by proxied `www` → `jamesgodwin.me`, with an enabled host-specific edge 301 preserving path/query. All 46 live URL checks, 91 assets and 11 additional redirect checks pass. This supersedes the www blocker above. Keep the www record; no further DNS deletion is required. [Exact configuration, rollback and evidence](../logs/2026-10-20-026-www-redirect-repair.md).

### Netlify retirement confirmed, 20 October 2026

James reports deleting the Netlify account after the verified Cloudflare release and www repair. Treat Netlify as retired and unavailable for rollback. The old skip-marker/retain-Netlify instructions above are historical. Future recovery uses a previous successful Cloudflare Pages production deployment and the current Cloudflare DNS/redirect configuration. Search Console indexing/submission and deeper hosted PostHog delivery remain unverified. [Documentation reconciliation](../logs/2026-10-20-027-hosting-documentation-reconciliation.md).


### Hosted analytics receipt — 20 October 2026

Actual Pages and custom-domain browser sessions produced received pageviews, both contact events and interaction logs in website PostHog project 631540. Pages verification labels were confirmed; production synthetic traffic must be excluded by the recorded URL/session/time window. No source change was needed. Automatic hosted uncaught-error receipt is also verified on the Pages build after James disabled Brave Shields for testing. The exact labelled error arrived as an unhandled `$exception`; no manual capture API was used. Slice 3 is complete against the existing release checks; Search Console remains separate. [Evidence and limits](../logs/2026-10-20-028-hosted-posthog-verification.md).


### Full published-article backfill — 20 October 2026

After reviewing the 12 additional articles and original covers, James authorised bringing all 12 across. Local scope: 15 total published essays, original published titles/dates/links/covers and live-text fidelity; the three unpublished drafts remain excluded. Preserve the current design and chronological ordering, canonical/schema/sitemap/llms behaviour, conflict protection and repeat-import stability. This does not restart Source authoring or publish the unpublished drafts. The 12-article candidate is locally qualified; GitHub push and hosted acceptance remain separate. [Implementation and checks](../logs/2026-10-20-030-full-article-backfill.md).


### Essay pagination and naming — 20 October 2026

James requested 12 essays per archive page to support future imports and proposed Work · Essays · About · Contact for the header. The accepted local implementation uses that naming consistently across navigation, homepage section, archive, reading links, metadata, footer and public help/llms labels. Existing `/writing` remains a redirect to `/essays`.

Acceptance: the newest 12 entries appear at `/essays`, including the featured essay; remaining entries appear at static `/essays/page/2` and later pages as needed. Every published essay appears exactly once across the archive pages in chronological order; drafts remain excluded. Ordinary Previous/Next links work without JavaScript, include current page/range context, and omit unavailable directions. Page one has no duplicate `/page/1` route; ungenerated pages return 404. Each generated page has a unique title, self canonical and sitemap entry. Reuse the selected tokens and existing Action recipe. The local 15-essay candidate splits 12/3. [Checks and evidence](../logs/2026-10-20-031-essay-pagination.md).


### Article release authorised — 20 October 2026

James approved the local articles/pagination candidate and explicitly requested commit/push to GitHub and live verification after Cloudflare deploys. This lifts the local-only release boundary for the 12-article backfill, 12-per-page pagination and consistent Essays naming. [Release evidence](../logs/2026-10-20-032-article-pagination-release.md).
