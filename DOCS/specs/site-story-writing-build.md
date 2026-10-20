# First story, writing and aligned site

20 October 2026. James explicitly asked to build the website from the documented direction, ship the first story into the working site, complete writing and align/create the other pages. This authorises replacing the local homepage and extending the selected theme across local routes. Public hosting/cutover remains a separate release action.

## Outcome and boundaries

A visitor understands James's product-design and full-stack work, reads Ben's story of getting help, explores the writing and reaches every existing destination through one coherent website.

Build only the first case story, Ben's crew scores. The other three cases remain exploratory material, outside the main site's navigation and content. Supporting screens are static. Story/chapter navigation works, but there are no score inputs, forms, sample app actions or simulations.

The cream/forest Case shelf theme, Manrope/Inter typography, shared action recipes and original article imagery are the selected visual direction. Keep design values in tokens.css and recipes in patterns.js/patterns.css. Preserve existing route/output architecture, authored service copy/prices, verified contact methods, GA/Kit/PostHog and useful metadata.

## Slices and acceptance

1. **Shared site shell and Ben's story.** Replace the local `/` with a concise work-led homepage and one selected case. `/work` introduces the work and links to the existing service pages. `/work/crew-scores` presents The situation / How I helped / What changed, with native links and a small progressive enhancement for chapter switching. Every chapter is in rendered HTML; without JS the full story remains readable. Back/Forward, invalid hashes, focus and contact access work. No other case is advertised.
2. **Writing.** Build `/essays` newest-first and `/essays/<slug>` from an Astro content collection. Backfill the three selected published articles used in the mockup, with their original covers, original bodies, publication dates, reading time, author, canonical/social metadata, Article/Person schema and original LinkedIn links. `/writing` redirects to `/essays`. Add a repeatable Source importer that extracts only the Article section, reconciles publication Log against stale source Status, excludes announcements/editorial sections, protects locally edited bodies using hashes and reports conflicts. Preserve words; do not rewrite articles. Drafts appear in no public HTML or sitemap.
3. **Other pages.** Use one shared header/footer, type, spacing, content and action system across every existing route, including About, Contact, apps, books, practice, legal and 404. Preserve route-backed trusted output modules and substantive copy. Add full-stack breadth to About/Product Clarity introductions where needed. Footer exposes the complete site; no dead menu items or mockup pages in normal navigation.
4. **Qualification and handoff.** Run design guard before build claims; tests cover original URL/content/metadata continuity, Ben-only/static story output, publication/draft boundaries, importer idempotence and edit conflicts, schema/order/images and internal links. Browser checks cover homepage → story → writing → article → About/Contact, desktop/mobile overflow, chapter history/focus/keyboard and no console errors. Check PostHog configuration/event continuity locally; keep production verification separate.

## Implementation seams

- Shared SiteLayout owns document metadata, header/footer, fonts, token/styles and existing analytics/integrations.
- New content compositions reuse the actual CaseVisual/Action/content patterns rather than copy visual values.
- Existing `[page].astro` still maps routes/output modules. New work/story/writing routes join metadata, sitemap, redirects and help/discovery links.
- Source collection entries are portable Markdown; source ID, verified original URL, publication status and hashes live in frontmatter. Selection manifest makes the first backfill explicit.
- A new shared browser module owns contact events/intent and narrative navigation; preserve the existing legacy command handlers where still relevant without reintroducing public terminal UI.

## Evidence and open decisions

Case facts and limits: [case evidence](homepage-case-studies.md). Writing dates/images: [asset provenance](homepage-assets.md). Broader migration/publishing requirements: [Essays plan](essays-home-and-agent-readiness.md). Existing prototype remains a reference, not a competing main site.

No content approval is inferred for unpublished essays. The selected three were already published on LinkedIn; this work prepares their local website rendering. Deployment, domain changes, commits/pushes, spending and outbound communication are outside this build. Review the working local site before a public cutover decision.

## Verification checkpoint

All four slices are implemented locally and ready for James's review. `npm run check:design` passes across 76 files with zero violations; normal build emits 26 HTML pages. 18 Vitest tests, four route/site checks, three importer/essay checks and seven design-guard tests pass. Catalogue and opt-in concept builds/checks pass. Importing twice leaves the second run unchanged; conflict/draft guards and original-body boundaries are tested.

Browser qualification covered 1440×1000, 390×844 and selected 320×740 views. Homepage → story → writing → article → About/Contact works. All 16 internal footer destinations opened with an H1 and no horizontal overflow at 390px. Chapter Back/Forward, keyboard focus, skip link, contact intent, writing alias, workshop alias and built 404 page were exercised. Story visuals contain no inputs or buttons. Console warnings/errors were empty. All chapters exist in built HTML; JavaScript-disabled browser rendering was not separately exercised.

Visual comparisons and actual desktop/mobile captures were reviewed, including the writing index, article and Contact. Article width/type, index spacing and named image links were corrected. See `design-qa.md`; captures are ignored under `output/site-build/`. Local PostHog pageview ingestion was confirmed using the exact verification-run label; this does not qualify production analytics or real visitors.

No deployment, production cutover, commit, push or external publication. Existing generic social artwork is retained; article sharing uses each original cover. Public hosting and user acceptance remain separate from local implementation qualification.

## Ben story context revision, 20 October 2026

James supplied the coffee-shop introduction, budget constraint, local prototype limits and subsequent business experimentation. Revised the three short chapters and shared homepage summary to show AI helping Ben clarify the brief, James connecting staff/calculations/authentication/supervisor access/deployment, and a first release enabling affordable testing of further improvements. Existing static panels now name the access/deployment pieces and the learning cycle. No new interactive screens or measured savings claims. Build/design guard and four route checks pass; desktop/mobile contribution chapter and mobile outcome/navigation were checked.

## Quality-control extension, 20 October 2026

James authorised the second story and homepage selector, retaining the same client and static screens. This supersedes the original Ben-only boundary: publish only the two built stories in the local site, default to scoring, switch the one featured panel using keyboard-accessible native buttons, and link each to three chapters. With JavaScript unavailable both story panels remain readable and linked. TapScribe and Plumbline remain out of the main site until built individually.

Verified Roof Ops current Project, model and inspection form against `multi-area-inspection-visit.md` and the existing case evidence. Code confirms per-section photos, explicit Yes/No answers, draft/submitted states and all-questions validation. Visit grouping is a proposal, not a claim in this story. No inspection certification, automated email, measured savings or separately invented client. Roof Ops files were read only.

Implementation reuses existing choice/panel recipes and StoryReader with a story prop. New `/work/quality-control` metadata joins the generated sitemap; Work/help discovery updated. Normal build/design guard and all four route checks pass, including static QC output and internal links. Browser verified default scoring, QC selection, Look closer, all three chapters, desktop/mobile visual layout and Enter-key selection. At 390px no horizontal overflow; story visuals contain zero app controls. Local only.

## QC procedure and photo refinement, 20 October 2026

James clarified the prior paper checklists, smartphone photos, emails and laptop collation; the scoring release prompted exploring QC. Editable templates per roofing procedure are central. Supervisors select the procedure, capture section checks/photos and submit a coherent record for office review/sharing. Story supports the human sign-off process; it does not claim an in-app client signature or automated emailing. Template/section/question admin controllers and supervisor template selector confirm the implementation seam.

Updated the three concise chapters, homepage summary, static waterproofing checklist and metadata. Replaced synthetic flashing art with a licensed real waterproofing reference photo; source/licence in the asset register. One photo credit replaces repeated illustrative labels. Reference provenance remains explicit; the record is an example. No new design values or interactive screens.

Refinement verification: build/design guard and four route checks pass. Desktop/mobile review confirms one caption, readable template context and no 390px overflow. Screenshot `output/site-build/qc-waterproofing-desktop.jpg`.

## TapScribe third-story scope, 20 October 2026

James authorised the coach-origin story as the third homepage/Work choice, replacing the earlier recovery-state angle for this product. Three concise chapters cover QuickTime → audio extraction → Python/Whisper, bringing recording/transcription into one Mac app, and local recordings/transcripts in the Library. Use genuine existing app captures with fictional sample content, not the earlier Figma reconstruction. Keep the supporting workflow/screens static. Clearly label it James’s own product, not another client engagement. Local capture/transcription is the privacy boundary; sharing with another AI service remains a separate choice. No new usage or time-saving metrics.

Acceptance: scoring remains default; TapScribe can be selected by keyboard and opens its own three-chapter route; all app captures are images without controls. Add route metadata/sitemap/help, retain writing flow and shared recipes. Verify design/build, built route/image/static-content tests and desktop/mobile selection/chapter flow. Plumbline remains outside the main site.

TapScribe implementation checkpoint: added `/work/tapscribe`, shared selector/Work/help/metadata/sitemap discovery, genuine Library and recording captures, three static workflow panels and three short chapters. Shared selector is now three columns desktop, two at mobile widths; scoring remains default. Normal build/design guard and four route checks pass. Browser verified Enter selection, Look closer, all chapters, focus and loaded screenshots, zero app controls and no 390px overflow. Captures in `output/site-build/tapscribe-selector.jpg` and `tapscribe-library-story.jpg`.

## TapScribe graphic/copy revision, 20 October 2026

James flagged awkward “around a meeting” wording and missing upper corners on the isolated HUD. Replaced copy with “before or during a meeting”. Reused the existing shared recovery composition and static panels to show Record → Transcribe → Keep beside the actual capture. The HUD image now has its own constrained box, so the shared radius clips the bitmap rather than a wide object-fit container. Source screenshot remains unchanged. No new design tokens or interactive app controls. Build/design guard and four route checks pass; desktop/390px visual check passed without overflow. Capture: `output/site-build/tapscribe-connected-workflow.jpg`.

## Plumbline fourth-story scope, 20 October 2026

James authorised the fourth homepage/Work choice with IIIMPACT and In progress explicit. Use the AI Ching website, James’s own project, as a concrete test case: historical audit/retrofit records show repeated styling values, then approved tokens/components and a design build check. Do not describe counts of styling values as bugs or components, reproduce client material, or claim Plumbline has completed broader rollout. Three concise chapters with static examples; no functioning component editor or controls. Scoring remains default; four selectors on desktop and two columns on mobile. Add story route/metadata/help/sitemap and verify all chapters, keyboard selection, desktop/mobile layouts and normal-build/static-output checks.

Plumbline implementation checkpoint: `/work/plumbline` and four-choice homepage/Work shelf implemented. Metadata joins generated sitemap; help/discovery updated. Example corner values 1.25rem/1.3rem/1.35rem and their shared role come from AI Ching’s `design-system/RETROFIT-LOG.md` Step 4; current `BLUEPRINT.md` and `src/components/ui-recipes.ts` establish tokens/recipes. These are historical audit examples, not fresh performance measurements. Read Plumbline Project/backlog/handoff and census code; no client content copied and neither source repository modified. Reused synthetic neutral selector artwork and existing shared panels; code samples are plain static text. Normal build/design guard and four route tests pass. Browser verified default scoring, Enter selection, Look closer, all chapters/focus, four choices at mobile width, zero controls inside examples, no overflow at 390px and no console warnings/errors. Screenshots: `output/site-build/plumbline-selector.jpg`, `plumbline-connected-rules.jpg`.

## Plumbline source-of-truth clarification, 20 October 2026

James approved the title “One design system. Across the tools.” and a revised story sequence: mismatch across design tools and product libraries; codify the client codebase first; project that source into design tools and developer plugins. AI Ching now illustrates chapter two’s concrete codebase work. Client code stays the master; projections/plugins are explicitly In progress and With IIIMPACT. Static neutral tool/source examples reuse existing shared panels. No universal claim that Claude Design always uses one library. Metadata/homepage summary updated with the narrative.

Clarification verification: build/design guard and all four route checks passed. Browser confirmed new homepage title, three revised chapters/focus and explicit projection/plugin status; desktop and 390px reviewed with no overflow. Screenshot `output/site-build/plumbline-projections.jpg`.

## Site-wide editorial review, 20 October 2026

James authorised a copy review across the whole website to sharpen its professional tone and make his contribution clear. This extends the earlier copy-preservation boundary for site and service copy. Published essay bodies, quotations, prices, contact destinations and the static-screen contract remain intact.

Reviewed the homepage, Work, all twelve story chapters and their visual labels, About, service pages, Apps, Now, practice/creative pages, contact/confirmation/404 copy, writing introductions and published essays, navigation and metadata. Changes make product design and full-stack development explicit, remove repetition and inflated or abstract wording, and connect service examples to the actual stories. About, Product Clarity and Workflow Systems body copy are approximately a quarter shorter. Apps now includes TapScribe; Now reflects the current work described by James on 20 October rather than the old pilot snapshot. Plumbline retains IIIMPACT attribution and explicit in-progress projections/plugins.

Corrected Product Clarity’s older denial of an AI-assisted origin to match James’s account of Ben’s prototype. Privacy copy now names the already-configured PostHog analytics/error reporting alongside Google Analytics. This was a factual content correction, not a legal-policy redesign or compliance review. Published essays remain byte-for-byte unchanged.

Verification: design guard passes across 82 files; build emits 29 pages; all 18 Vitest, four route and three essay/import checks pass; `git diff --check` passes. Existing copy assertions updated to the revised wording; route checks retain original canonical URLs while checking current metadata, rather than requiring obsolete migration-era descriptions. The latter test emits Node’s module-type warning but passes. No new test suite or runtime interaction added.

Browser review covered desktop homepage/Product Clarity and 20 main/supporting routes at 390px, plus all twelve story chapters through their Next links. No horizontal overflow or app controls; page image checks and browser console checks were clear. Original article rendering/import tests pass. Captures and the bounded before/after copy snapshot remain ignored under `output/copy-review/`. Local changes only; user acceptance and public cutover remain separate.

## Final content review before hosting, 20 October 2026

James asked for a complete content review before Cloudflare setup. Retained the established positioning, design and published essay wording. Clarified why Ben needed staff scoring and what the first release enabled; explained Plumbline's planned connections in plain language while preserving IIIMPACT/in-progress status. Tightened Product Clarity, Now, the essay contact link and relevant metadata. Story paragraphs remain under 50 words. The earlier social image is an optional visual refresh.

Design/build, all 25 unit/route/essay checks, internal fragment checks and desktop/mobile browser review passed. All public copy was reviewed, including personal/practice pages; this does not constitute a legal compliance review or production qualification. [Review evidence](../logs/2026-10-20-021-final-content-review.md). Cloudflare preparation is recorded in the [hosting spec](essays-home-and-agent-readiness.md#hosting-preparation-after-content-review-20-october-2026); no deployment, commit or push.
