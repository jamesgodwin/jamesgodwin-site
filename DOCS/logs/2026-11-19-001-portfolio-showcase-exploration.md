# Portfolio showcase exploration

## Summary

19 November 2026: James requested a fuller representation of his apps and client work, thoughts on a slider/gallery, a plan and a couple of mockups. Reviewed the current homepage, targeted project briefs/handoffs and public product surfaces. Created a draft inventory/plan and two independent image-generated homepage concepts. Recommended the product gallery as the starting point for making breadth visible. No direction has been accepted and no product code was changed.

## Files Touched

- `DOCS/specs/portfolio-showcase.md`: draft problem, inventory, direction comparison, story shape, evidence boundaries and proposed implementation/acceptance slices.
- `DOCS/specs/assets/portfolio-showcase/`: six browser captures, three copied source assets, two downloaded official store images, two generated concepts and a provenance manifest.
- `DOCS/next-day.md`: latest requested exploration and next review step; earlier completed publication remains linked.
- Backlog unchanged because this remains exploratory. Existing modifications to `DOCS/logs/2026-11-04-001-mac-storage-article-preparation.md` and `DOCS/runbooks/publish-writing.md` were present before this task and left untouched.

## Verification

- Read current homepage/story/apps source and observed live homepage. Four stories exist; two represent the same roofing client and scoring is initially selected.
- Inspected live GratefulFor, TapScribe, True Essence, Taoist Breath and AI Ching public surfaces; saved screenshots. Did not create accounts, submit content, run clinical workflows or access private databases.
- Reviewed eight app projects plus Roof Ops, CapeVision and the osteopathy application's purpose/current context. Existing public Plumbline story establishes collaboration with IIIMPACT, not permission for other client disclosures.
- Confirmed Between Breaths source identity under `/Users/nitro/code/pause`. App Store web extraction and official lookup API identify Between Breaths 1.0.0 and Harmonic Echo 1.0.1. Browser App Store rendering failed; initial Python image retrieval failed with SSL EOF, then bounded curl downloads succeeded. Both store images visually inspected.
- Inspected all five references attached to each image-generation call. Exactly two independent concepts generated and displayed in order: featured shelf, product gallery. Reviewed layout output; documented decorative mountain/caption drift in first mock and requirement to use original screenshots when building.
- Actual source image provenance distinguishes live pages, fictional Debug Library capture, a Flutter golden fixture and TypeScoop marketing illustration. No exact current-release or installed-device evidence claimed.
- Product build, design check and tests not run: no runtime code was changed and no implementation/build claim is made. Documentation paths, asset existence and diff whitespace checked before handoff.

## Decisions

No accepted product or architecture decision. Proposed broader maker positioning, lead apps TapScribe/GratefulFor/AI Ching/TypeScoop, supporting collection for four other apps, and distinct client/collaboration attribution. TypeScoop must remain visibly in development. Prefer manual browsing with visible projects; no autoplay if a slider is selected.

## Follow-ups

- James to review the two compositions; refine the chosen direction before implementation.
- IIIMPACT disclosure question asked asynchronously; unanswered at this checkpoint. Anonymous labels used in concepts.
- Prepare current TypeScoop command imagery, demo-data client screens and precise personal contributions before publication.
- Update the stale GratefulFor map description as part of any authorised portfolio implementation; not changed during this exploration.

### Subsequent scope clarification — 19 November 2026

James answered the pending question: the additional IIIMPACT section will be added later, when he supplies material. It no longer blocks or needs a disclosure decision for the current app exploration. He plans to point to Taoist Breath and Between Breaths. Confirmed the already-discovered local files `/Users/nitro/code/breath/src/App.jsx` and `/Users/nitro/code/pause/lib/app.dart` exist; compare his forthcoming pointers before assuming different source versions. Updated draft scope and handoff, with no implementation or backlog change. The earlier unanswered checkpoint above is superseded by this reply.


### Selected direction and execution plan — 19 November 2026

This checkpoint supersedes the earlier unselected/exploration-only state. James chose the first slider, explicitly preserved the “get it over the line” service hero, and supplied a screenshot selecting image-card navigation. Verified the current LinkedIn headline/About through the browser and reviewed the 32-page historical portfolio, including rendered pages and larger shortlisted project views. Updated the alignment spec to distinguish verified current profile wording from older uncertainty.

James then requested his own paintings near the hero. Reviewed his linked DeviantArt gallery and downloaded the observed Swartvlei Beach and Bearded man media. Extracted the cover landscape from his PDF; painting title remains unconfirmed. Existing local artwork thumbnails are only 60×60. Produced three placement studies; James selected the underlay, then requested alternate paintings and mobile examples and confirmed the direction. Added two desktop examples and two corrected mobile studies. First mobile drafts drifted into incorrect names/text selectors or an extra featured-card carousel, so these were revised; retained examples use the specified image-card rail. Generated painting pixels differ from originals and are labelled interpretive. Final implementation must use original art, not generated website screenshots.

Captured James's first-hand motivations for all eight apps, TapScribe's interaction challenge, GratefulFor's mobile-driven pivot, TypeScoop's filename/URL cleanup example, and unfinished Harmonic Echo/Between Breaths ideas. Read Between Breaths notification/settings/presence source without executing it. Fixed reminder choices and an active-count request exist in source; live notifications and shared breathing remain unverified. Do not equate presence with phase synchronisation. A tentatively remembered book title for True Essence remains unnamed.

James explicitly requested backlog/spec preparation for execution. Added one parent In Progress item and six demonstrable slices covering the app collection, responsive artwork hero, carousel, first stories, wider work and exact-build/release review. Each has dependencies and observable acceptance, including image/storage/no-JavaScript failures, mobile layouts, keyboard selection and route preservation. Final paintings may follow while independent content work starts. No backlog item authorises deployment.

Created `output/pdf/homepage-portfolio-brief.pdf`, a nine-page illustrated snapshot; authoring script is beside it under ignored output. It contains the selected desktop/mobile examples and edited first-hand story drafts. PDF pages were rendered and visually inspected; two overlong headings were shortened after detecting overlap, and the final changed pages were re-rendered and checked. Text extraction and page count checked. No product tests, build or design check run because product source is unchanged; these checks are defined for execution, not claimed as completed.

Additional files touched: `DOCS/BACKLOG.md`, `DOCS/specs/linkedin-site-alignment.md`, the existing portfolio spec/assets/manifest and handoff. Updated current decisions rather than reopening them. Unrelated pre-existing publishing/runbook edits remain untouched. Documentation local links, image provenance file existence/decoding and `git diff --check` were checked. No commit, push, publication, client contact or other repository edits.

Follow-up: begin the eight-app content/index and TapScribe draft; review real captures and James's painting shortlist in the responsive local preview. Client roles/screens require a focused later conversation. No unanswered origin-story question remains.


### Supplied originals incorporated — 19 November 2026

James provided `/Users/nitro/Desktop/artwork/`. Read all 24 JPEGs, inspected a labelled contact sheet, recorded dimensions and source hashes, and copied the originals unchanged under `DOCS/specs/assets/portfolio-showcase/artwork/`. SHA-256 comparisons match every supplied file. Added `artwork-manifest.json` with source attribution and initial desktop/mobile display guidance; all paintings are supplied for site use. Only the 382×425 cheetah source needs a small presentation rather than hero enlargement. The 2027×2457 beach and 2048×1152 mountain source supersede smaller exploratory sources for later implementation. No source artwork was edited.

Updated spec/handoff to remove the now-resolved painting-selection dependency. Extended the illustrated brief to ten pages with the actual supplied-artwork collection; re-rendered and visually inspected the changed cover, plan and new collection page. Verified final PDF page count, source copies, image decoding, local links and whitespace. The complete app origins and TypeScoop cleanup example are recorded, so no origin question remains pending. No product implementation or deployment was performed.


### Local implementation and artwork revision

Implemented the first local homepage/app collection with original WebP artwork derivatives and manual eight-app selection. James's screenshots exposed overlapping underlay text and cream strips. At his request changed the hero to separate grid columns, whole-image containment and a compact stacked phone treatment. Removed unused mask tokens. Desktop browser visual review confirmed separate copy/art. `npm run build` (including design check) passed; mobile runtime and full interaction acceptance remain pending. Server remains running at port 3000. No deployment.

Added requested rounded painting corners, light shadow and floating filename-title/linked-credit caption. Browser visual review confirms treatment; build/design check passes. No deployment.

Added a circular-arrow “Show another painting” button inside the caption. It preloads a different image, updates title/alt/announcement together, retains the old image on failure, and works if storage is unavailable. Browser click verified Brown Eagle changed to Cheeta cub without navigation. Design/build checks pass.

Caption correction requested by James: retain the title/artist pill; put a separate matching icon-only pill to its right with a 16px SVG. Removed the visible repeated status text. Refresh now reloads the page as explicitly requested; initial selection excludes the stored previous painting. Build/design checks pass.

James requested the caption below the artwork, with the desktop image bottom aligned to the bottom of the product CTA. Moved caption/refresh pills outside the image area and aligned the image to the hero copy bottom; phone caption remains in normal flow below its compact image. Build/design checks pass; exact visual alignment remains for local review.

Implemented consistent feature/media geometry, rail spacing and horizontal-only scrolling after James reported jarring size changes. Switched TapScribe to existing HUD asset; added seven local app-story pages and sitemap entries, and named the three client systems on the homepage. Build/design verification executed; image/background refinement, full responsive interaction review and detailed client pages remain open.

James requested client systems in the same carousel. Collection now has eleven entries: eight own apps plus Roof Ops, CapeVision and the osteopathy practice. Each keeps ownership labels and a local story destination. Removed the separate systems block so Essays follows the showcase. CapeVision/osteopathy use honest typographic previews until screenshots are supplied; no private screens accessed. Artwork preparation will proceed project by project using genuine screenshots, preserving HUD corners and creating phone compositions where appropriate. Existing imagery remains provisional. Build/design checks pass.

TapScribe artwork: integrated James’s transparent tap1/tap2 screenshots as lossless WebP. Library is the main feature with the recording HUD layered at its lower right; thumbnail mirrors the arrangement. Original rounded alpha edges retained, no rectangular background added. Desktop browser composition inspected; build/design checks pass. Homepage copy review and dedicated-page content are next, as James requested.

TapScribe page: added reusable ProjectCaseStudy composition with logo, summary, contribution, main screenshot, narrative sections, supporting HUD and product/contact/return links. Extended the existing /work/tapscribe destination using James’s supplied motivations and interaction challenge; no invented metrics. Alpha-following drop shadow now gives homepage screenshots depth. Build/design checks and 19 Vitest tests pass; local desktop header/content inspected. Mobile exact-layout review remains open.

Corrected ineffective button selector by adding an explicit action wrapper with 24px top padding. Centred supporting screenshot figures and constrained HUD captions to image-scale width so they wrap below the image. Design check passes. Earlier selector-based spacing claim did not match rendered buttons; superseded by this correction.

GratefulFor artwork: James supplied IMG_3996/3997, real iPhone gratitude and planting screens. Converted to WebP (135KB/75KB), retaining complete screens. Homepage feature presents two CSS phone frames, with a single reading phone in the thumbnail. No speculative garden overview or fabricated product pixels. Dedicated GratefulFor story remains for a later step. Build/design checks executed.

GratefulFor correction: constrained thumbnail phones absolutely within the common 3:2 preview so portrait content cannot stretch the rail; two equal-sized phones now match the feature composition. Updated homepage copy from James’s origins and current garden language. Replaced the short GratefulFor placeholder with the shared case-study template: giving back, witnessing thanks, mobile-driven map pivot and planting flow. Old AboutPage marketing still described the map, so did not reuse those stale product claims. Portrait screenshots are bounded on story pages.

Added optional phone presentation to ProjectCaseStudy and enabled it for both GratefulFor screenshots. Frames share dimensions; captions are centred, wrap to a restrained width and have 20px top spacing. Build/design checks pass.

AI Ching app: James supplied real dark-mode library and Creative interpretation iPhone screenshots (IMG_3998/3999). Optimised to WebP and used in equal-sized phone pairs for feature/thumbnail. Label now explicitly AI Ching app, with portable-library copy. James requested app and website as separate stories; website entry, imagery, stats review and app-specific detailed story are still pending. Build/design check passes.

AI Ching detail page now uses ProjectCaseStudy with rounded latest iOS AppIcon (1024px source converted losslessly), supplied phone screenshots, personal book-collection origin, library/reading design and role. Existing /work/ai-ching route preserved; website remains separate planned story. Download destination corrected against website source to /download-aiching-app. Local route returned 200; build/design checks passed before link correction.

Captured requested AI Ching website SEO/audience-growth angle in the spec, with dated Search Console/analytics evidence and specific ranking examples to verify during that case study. No unverified numerical or ranking claim published.

Added AI Ching website as the twelfth showcase entry with its own /work/ai-ching-website case study using the supplied home/casting screenshots. Read current website index/data source for guided readings, library/guides, language routes and structured-data content. Describes technical SEO foundations without adding unverified traffic/ranking claims. Asked James which growth decision/challenge mattered most; evidence review remains open. Sitemap uses shared collection. Build/design checks passed.

James supplied website-growth background: original intent targeted demand for online I Ching readings; PostHog audience observations from Spanish-speaking countries prompted Spanish translation, then Brazilian Portuguese. He reports substantial traffic increases after each; magnitude and causation remain to verify against dated analytics/Search Console. Updated narrative without invented numbers. Website/app share core readings; app adds journaling and further paid-value features under development. French mentioned as possible screenshot, but current route/support status not verified; no French support claim added. Spanish/Portuguese screenshots could illustrate audience-led localisation when supplied.

Added supplied Spanish and Brazilian Portuguese screenshots as optimised WebP in two substantial localisation sections on the AI Ching website story. Explains audience observation, prioritisation and carrying language through the reading journey. User stresses depth for all case studies: retain motivation, decisions, contribution, evidence and current state rather than short generic summaries. Traffic increase attributed to James’s observation; quantitative trend remains unverified.

Search growth chart: read saved property-level Search*/Chart.csv and Filters.csv exports. Deduplicated overlapping daily rows by date using later dated export, verified contiguous coverage. Complete-month daily click averages March–October: 228.6,192.9,202.4,230.3,229.3,295.2,393.4,346.0. March–October +51.4%; September–October decline retained. Created accessible SVG and JSON provenance and added to website case study. Not unique visitors, current live analytics, or causal evidence for translations. Partial February/November excluded.

Traffic-chart verification: Astro build completed (79 pages); design check passed (103 source files, zero violations). Visually reviewed the rendered SVG in the local browser: labels, month sequence and September–October dip are legible. No deployment performed.

Growth presentation refinement: added a prominent +51% metric with period and daily-click definition. Website case-study captures and chart share rounded corners and media shadows, with 24px caption spacing; homepage direct-image previews now use shared depth. Build/design checks passed and local browser visual review confirmed metric and graph elevation. No deployment.

TypeScoop case study: reused current typescoop-launch HUD/capture demo posters and native branding icon; retained original capture illustration at James’s request. Homepage thumbnail/feature uses the newer command-menu poster. Added /work/typescoop using the shared case template, with in-development status, personal origin, copy/transform flow and separate capture/HUD keyboard graphics. Capture Command–Shift–2 and HUD Control–Option–Command–H verified against native source/PROJECT. No public download or trial claim; demo art labelled.

TypeScoop verification: build/design passed, 79 pages emitted. Browser confirmed detailed route, both shortcut groups, development status and capture image/shadow. No publication or source-app edits.

Owner review supersedes previous TypeScoop hierarchy: restored capture art to homepage/hero, added visible Command–Shift–2 keys, changed headline/copy to capture first. Subpage feature sequence now capture, HUD, piping, CLI, then personal origin/demo/status.

Embedded TypeScoop capture film: desktop playback observed successfully in browser. Both wide/portrait MP4s and VTT copied from launch site; no autoplay. Removed ownership labels across portfolio/index and detailed pages; retained client-system identification.

True Essence: supplied IMG_4006.PNG and Screenshot 2026-11-19 at 14.30.56.png converted to quality-90 WebP without cropping. Homepage feature and thumbnail now use two equal phone frames; dedicated /work/true-essence uses shared phone case template and owner-provided origin, daily practice and Sage screenshots. Shadows and centered spaced captions reused. Build/design passed; desktop browser reviewed framed Sage screenshot and caption. No release or deployment.

Painting border cleanup: reviewed all 24 supplied artworks in contact sheet and inspected cropped portraits. Removed full-width near-white margins from an-african-smile (83px top/217px bottom) and andrew (53px top) web derivatives. Original JPGs unchanged. Exact bounds in artwork-crops.json; white within the painting retained to avoid cutting into subjects.

Painting sizing correction after owner screenshots: apparent cream bands on landscape paintings were CSS letterboxing, not source pixels. Removed height:100% from hero image and update width/height attributes to each loaded painting’s natural dimensions. Rounded edges/shadow now follow actual image bounds. Browser verified bee image natural1291×714 against rendered500.86×277.01 (same aspect), visibly no top/bottom bands. Build/design passed. Earlier two source-margin crops remain separate.

Harmonic Echo: owner-supplied transparent phone composition is now the thumbnail and showcase image, contained without extra phone framing. Dedicated /work/harmonic-echo uses current source icon, supplied six-artwork collage and shared alpha-aware drop shadows; captions spaced 24px. Originals retained at Desktop paths; WebP derivatives preserve alpha. Read current app contract/project/handoff and humming_facts.dart; unsupported health statistics were not republished. Copy focuses on personal motivation, comfortable humming, on-device creative interaction and ongoing visual refinement. Browser reviewed artwork elevation. No source-app changes or deployment.

Taoist Breath: supplied IMG_4001/4002/4003 PNGs optimised to WebP. Thumbnail uses one framed breathing-circle screen; main showcase and /work/taoist-breath hero use all three equally sized phones (start, active breath, practice selector). Added shared PhoneScreens composition with width-aware proportional sizing, shared border/shadows and spaced captions. Detailed copy uses owner’s student/practice origin and visible interface, without adding health promises. Desktop composition visually reviewed. Original screenshots unchanged.

Queued owner-requested /apps thumbnail-and-copy rows after completing all apps; no index layout change now. Taoist Breath build/design passed (79 pages).

Between Breaths: converted owner IMG_4004/4005 to WebP, added single-phone thumbnail and paired-phone showcase/detail hero using shared frames, shadows and captions. Created /work/between-breaths with shared-presence theme in lead copy and 9am example. Source confirms local-time reminders and global active count (visible above one, refreshed every45s), not breathing-phase synchronisation; no invented participant count or location map. Browser reviewed paired artwork. Live presence backend/device behaviour not tested; source-backed description only.

Roof Ops: supplied mobile PWA scoring screenshots converted to WebP and framed in thumbnail, showcase and dedicated /work/roof-ops. Story reuses current ben.js/quality.js evidence: Ben’s AI prototype, James’s workflow/calculations/auth/deployment, first team release, then editable QC templates and evidence records. Preserved scoring/QC deep links. No invented outcomes/metrics. Source screenshots include owner-supplied visible names; publication remains outside scope. Browser reviewed paired scoring screens. Build/design passed, 79 pages.

Roof Ops review: removed the two extra scoring/quality-control story links from the overview at James’s request; existing routes retained. Verified removal in source.

Cape Vision: owner authorised fictional illustrated workflow because patient screenshots cannot be shared. Created SVG patient-record/WhatsApp/follow-up composition and neutral illustrative message icon using Case shelf cream/forest colours, layered shadows and a phone; no real patient information or claimed automatic confirmations. Homepage feature/thumbnail and explicit /work/capevision use the illustration. Story uses owner facts: client AI-built reminder prototype, James’s WhatsApp integration and connected patient CRM. Source diagram is labelled fictional, not client interface. Existing slug retained; metadata and collection-driven sitemap remain intact. Browser visually reviewed illustration; build/design passed (79 pages). No client-system access or deployment.

Osteopathy practice: owner supplied appointment-to-invoice story and approved fictional workflow illustration. Created layered SVG appointment, invoice with explicitly fictional medical-aid reference placeholders, and email panels; same Case shelf palette and shadows as Cape Vision. Thumbnail, showcase and explicit /work/osteopathy-practice now use it. No real patient data, fee amounts, medical codes, insurer acceptance or payment automation claimed. Browser reviewed illustration and labels. Routes preserved; build/design passed before final collection-copy alignment, then rebuilt. No publication.

IIIMPACT: owner authorised showcase-only consulting entry, no dedicated route. Reused energy/enterprise sector artwork from https://iiimpact.ai/ (provenance iiimpact-sources.json), optimised WebP and composed cream/forest artwork with shared shadows. Copy attributes James’s contract senior UX/frontend work in oil/gas, engineering, cybersecurity and startups; no agency metrics or client outcomes attributed to him. Thumbnail selects summary; CTA and /apps entry link directly to https://iiimpact.ai/. External entries excluded from dynamic work routes and local sitemap. Browser verified selection, count13 and CTA href; build/design passed (79 pages). No deployment.

IIIMPACT thumbnail revision: replaced paired sector images with the website’s1200×630 social-card portrait (og.jpg?v=6), a single black/red full-bleed image with legible agency label and shared shadow. Browser checked actual rail and feature; external CTA remains iiimpact.ai. Build/design passed.

IMB early-career entry: James says he co-founded IMB following airtime-distribution and debit-order systems, then digital wallets needing deposits/top-ups for airtime and other products. Preserve his account of pioneering early South African digital wallets; no independently ranked “first bank” or founding date claimed. Added fourteen-entry collection item with official current IMB logo thumbnail and homepage brand artwork, depth, and external imb.co CTA; no dedicated subpage in this slice. Current artwork is not historical work attributed to James. Browser reviewed thumbnail, summary and href. Build/design passed79pages; no deployment. Asset provenance imb-sources.json.

Career expansion: external-only Lobster Ink, JUMO and SwiftVEE showcase entries now follow IMB; current brand artwork, shared shadows and direct company CTAs. Live LinkedIn inspected read-only: Lobster UX/engineering Dec2013–Sep2014; JUMO CTO Oct2014–Oct2016; StraTech consulting Oct2016–Dec2017; PrivySeal Jun2018–Jan2019; SwiftVee co-founder/UIUX Jan2019–Dec2021. James estimates about45 engineers across SA/Kenya by JUMO departure. Public Google sources confirm JUMO2017 and SwiftVEE2018 accelerator selection, not prize wins. Owner requested two-company credibility highlighted; added sourced startup-background line above showcase. JUMO recognition after tenure; Swift2018 selection predates listed2019role. Detailed dated research/provenance stored in jumo-research.md, swiftvee-research.md and lobster-ink-sources.json under assets. No exact founding/title timeline invented beyond owner/profile. Browser reviewed SwiftVEE feature, thumbnail,17count and source links. Build/design passed79pages. No commit/push/deploy.

Apps index completed: shared PortfolioThumbnail extracted from homepage, AppsIndex19rows with left media/right title/story/Action, stacked phone layout. Career order fixed per owner; painting rotation remains independent. Added PrivySeal LeanUX consulting and StraTech UX consulting with current site artwork/logo and external CTAs. Build/design79pages and19tests/9files passed. Browser reviewed desktop and390px rows, image loading/overflow, all19entry content and order. Backlog item moved Done; no deployment.


### FROM Digital / Algoworks — 19 November

Added external-only twentieth entry to shared homepage and Apps collection, beside IIIMPACT. James corrected the relationship: FROM engagement was through IIIMPACT while contracted there, not earlier employment. Copy covers catheter products, university AI training platforms, damp-proofing capture tools and client wireframes without identifying clients. Official June2025 merger announcement verifies current Algoworks identity. Replaced mistakenly selected Salesforce partner badge with inspected official green/black Algoworks social artwork, using shared depth/shadow treatment. Provenance: assets/portfolio-showcase/from-digital-sources.json. Browser confirms corrected copy, external button and brand image on /apps; build/design passes79pages. No deployment.


### Star120 — 19 November

Added earliest career entry, after IMB in newest-first shared homepage/Apps collection (21 entries). Owner account: built South African debit-order collections to fund wallet top-ups before IMB; still serves clients. No national market-first claim, transaction volume or date inferred. Official website logo inspected and optimised to lossless WebP, rendered with existing logo-card depth/shadow. Direct Star120 website CTA, no new local route. Provenance in assets/portfolio-showcase/star120-sources.json. Browser reviewed actual logo/copy/button on Apps page; build/design passes79pages. No deployment.


### Content review and fixed arrival order — 19 November

Reviewed shared21-entry collection, all12 new case-study sources, About/Now/help and Work discovery. Confirmed fixed project array and current=0; browser reload returns TapScribe selected, only TapScribe panel visible,01/21. Painting rotation remains separate. Removed stale future-tense website-story wording from AI Ching app, added reciprocal website-story link, replaced journal-sync implementation commentary with reader-focused journal copy. Reduced repeated localisation background and connected translation discussion to existing dated chart without claiming causation. Work now links to full collection; About points to combined Roof Ops story; help describes broader Apps scope.

Broader verification initially exposed outdated four-story build assertions and four oversized assets. Updated maintained assertions for current single-heading case pages, retained three-chapter legacy routes, removed ownership labels and fixed career ordering; corrected thumbnail test to read the button’s final project label rather than embedded artwork label. Optimised PrivySeal, Kokerboom painting derivative and Harmonic Echo artwork; resized TypeScoop icon derivative to256px. Originals untouched. Final build/design passed79pages; Vitest19/19 and built-route/SEO9/9 passed, including internal URL existence, image formats/sizes and sitemap. No external link uptime sweep or full responsive acceptance claimed. No commit/push/deployment.


### Dan Tian practice and product story — 19 November

Owner requested detailed background connecting Tai Chi/Taoism since early twenties to teaching, philosophy and products. Added /work/dan-tian with five sections: beginnings/lineage, attention and design, teaching website, related products, continuing practice. Firsthand account and existing Taoism/philosophy sources, no invented career dates, health outcomes or SEO gains. Actual teaching photo and logo copied from Dantian website codebase, WebP derivative optimised. Shared artwork depth/shadows reused for thumbnail/showcase, new entry after Between Breaths;22entries, TapScribe first, career order unchanged. Shared case-study sections support structured links. Reciprocal links from Taoism/philosophy, links to books and six product stories. Dynamic sitemap/Apps/output consume shared collection; explicit page excluded from generic route; public llms guide now includes all internal case studies. Source provenance assets/portfolio-showcase/dantian-sources.json.

Build/design passes80pages;19 Vitest and9 built-route/SEO tests pass. Browser reviewed detailed-page text, photo treatment, logo and cross-links on desktop. Whole-site responsive acceptance still separate. No commit/push/deployment.


### Mobile review — 19 November

Reviewed homepage, Apps index and all16 case-study routes at390×844 and320×740 in IAB browser. Routes: tapscribe, gratefulfor, ai-ching, ai-ching-website, typescoop, true-essence, harmonic-echo, taoist-breath, between-breaths, dan-tian, roof-ops, capevision, osteopathy-practice, crew-scores, quality-control, plumbline. DOM checks found no page overflow or broken completed images at either width. Visually reviewed full content on non-vh pages and normal viewport phone artwork; full-page capture expands vh-dependent phone frames artificially, so normal viewport observations establish their actual sizing. Reviewed all three chapters of legacy scoring/QC/Plumbline via their chapter links. Clicked all22 carousel choices at320px: one visible panel each, every active artwork loaded, no page overflow, order unchanged.

Refinements: removed mobile showcase-copy minimum height and reduced visual padding/height for less empty space; compact keycap padding/font keeps TypeScoop four-key HUD shortcut on one line even at320px; structured case links now a spaced mobile list with44px targets, no orphan arrow glyphs. Two-phone compositions use90cqw allowance while three-phone compositions retain60cqw, making pairs larger without overflow or uneven phone sizes. Images retain shared shadows and natural aspect ratios.

Final normal viewport screenshots reviewed phone heroes for GratefulFor/AI Ching/True Essence/Taoist Breath/Between Breaths/Roof Ops; rechecked final homepage TapScribe composition. Final320px sweep18pages has no overflow/broken completed images, shortcut key top coordinates match per row. Build/design80pages,19 Vitest and9 route/SEO checks pass. Browser viewport reset. Browser emulation only, not physical iPhone/Safari acceptance. No publication.


Owner naming correction: Dantian is one word. Updated all authored source labels, story text, image labels, cross-links and metadata; retained existing /work/dan-tian URL to preserve destinations. Build/design passed80pages.

Owner artwork-label correction: replaced Dantian photo overlay with “Teaching Tai Chi” in shared thumbnail and homepage showcase. Product name stays Dantian. Build/design passed80pages.

Further owner emphasis correction: Teaching is now a small lead-in above larger bold Tai Chi, with opaque dark panel/shared shadow. Applied to feature and thumbnail using optional labelLead prop, scoped styles preserve other artwork. Desktop Apps visual review and build/design passed.

Now page updated19November2026 from established current work: client finishing/Plumbline, TapScribe/TypeScoop, AI Ching analytics/localisation, portfolio, latest essay and Dantian/Harmonic Echo. Updated route description. Build/design80pages and19+9checks passed. User asks whether to remove /work; recommendation only, no removal or redirect implemented.

Owner requested removal of public pricing. Removed workflow-audit/care-plan amounts and fixed-price language from Systems and its hero facts; retained workflow/contact information. Updated conversion assertions to enforce no currency/pricing claim. Updated Project constraint to reflect owner’s superseding instruction. Build/design80pages and19tests pass. Legal agreement terms retained as terms, not an advertised price. No deployment.

Owner selected in-place painting swap. Another painting now calls existing preload-and-swap function rather than location.reload, updates image/alt/title together, excludes current image, disables during loading and retains current image on error. Click-triggered swap restores handler-entry scroll position; carousel state untouched. Browser two swaps verified, including scroll105→105 and selectedGratefulFor retained; build/design80pages passed. Books fix also verified all6 heading/cover top differences0px, build/design passed. No deployment.

Contact: removed Other ways to connect divider; retained email→WhatsApp→telephone→professional LinkedIn then added X @j_r_s_g with correct external destination and analytics method. Added X SVG and WhatsApp Simple Icons SVG (cdn.simpleicons.org/whatsapp, monochrome to match existing icons), replacing generic phone for WhatsApp only. Browser verified order/link and WhatsApp appearance. Build/design80pages,19tests and9routechecks pass. No messages sent/deployment.


### Homepage navigation consolidation and About — 19 November

Owner confirmed retire old Work page and duplicate scoring/QC pages, retain other sections. Removed three source pages and added301redirects in Astro plus Cloudflare _redirects: /work→/#work, crew-scores/quality-control→/work/roof-ops. Header/footer Work and legacy back links lead to homepage anchor; updated service/Note related-work links and thank-you link. Removed retired metadata from sitemap/public guide. Distinct Plumbline retained with direct IIIMPACT showcase link, so it is reachable from home. Apps index remains useful collection, as authorised. Build tests assert redirects/noindex rather than removed duplicate chapters. Browser verified all3redirect destinations.

About rewritten from owner’s latest firsthand account: vision, shaping ideas, comfort with startup uncertainty, connecting product/team, problem-solving and bringing ideas into use; technical skills support that work. Heading Helping ideas become real, updated lede/metadata. Historical examples limited to established IMB/LobsterInk/JUMO/SwiftVEEroles, no invented metrics. Tai Chi and service links retained. Also removed stale fixed-price phrase from Systems metadata. Build/design77pages plus3redirects,19Vitest+9route/SEO checks pass. No publication.

Homepage positioning expanded by owner request: Shape the idea / Bring it into use. Lead gives equal space to shaping ideas and bringing them to fruition, and getting existing prototypes/stuck builds over the line. Supporting line covers product direction, UX and hands-on development from concept to working product. Updated default metadata description, matching metadata assertions and public llms guide; project order and interactions unchanged. Build/design77pages plus3redirects and19+9checks passed.

About career paragraph now links IMB, Lobster Ink, JUMO and SwiftVEE directly to their established company destinations, opening a separate tab with noopener/noreferrer. Owner asked for linked names; no new local pages. Build/design passes.


### Return to Stillness and stronger workshop story — 19 November

Renamed Executive State Diagnostic to Return to Stillness, with new /return-to-stillness canonical and301old-URL redirect in Astro/Cloudflare. Updated About/footer/navigation/help/reflection/contact names and legacy client mapping; internal diagnostic enquiry key retained for compatible URLs/events. Existing45minuteone-to-onevideo format retained; no prices. Rewrote both practice pages from James’s latest firsthand material: Tai Chi since early twenties; lunchtime practice/teaching at JUMO in his forties; colleagues noticing calm; reading Search Inside Yourself and recognising the value of roughly20yearspractice; own Just Inside programme; sensations as cues before reactions; student holding shoulder/arm tension despite feeling relaxed; ordinary driving/trolley reminders; noticing/returning without perfection. Workshop emphasises team listening/communication and comfortable Qigong movement; private session personal exploration.

Source check: https://siyli.org/about verifies programme began at Google; https://siybook.com/ verifies book/author and mindfulness/emotional-intelligence focus. Linked sources on both pages; no implied Google affiliation/certification for James. Unverified3of5star-performer number and simplified amygdala/prefrontal switch omitted, experience attributed personally. Latest programme name Just Inside supersedes earlier Just Being wording for now. No new essay or publication.

Contact runtime check found existing label/intro UI stuck atGeneralEnquiry while bundled analytics dependencies loaded. Extracted UI into src/contact-ui.js, loaded independently by ContactPage; analytics listeners remain in site-client. Browser now confirms Return to Stillness enquiry label/introduction, old route redirect and390pxpageheaders with no overflow. Content/metadata tests updated to current copy; baseline route test preserves former URL via redirect, SEO checks exclude its noindex redirect. Build/design77pages plus4redirects,19Vitest+9routechecks pass. No commit/push/deploy.

EQ research clarification19November: owner requested stronger teachable-EQ/performance finding. Located primary book excerpt https://siybook.com/excerpts/ which explicitly lists SIXcompetencies, FOURemotional/TWOintellectual, not recalled5/3. Added attributed finding and paraphrased six-item list to private page, shorter sourced version to workshops. Both explicitly connect trainableEQ to mindfulness/meditation and James’s realisation; no claimGoogleestablishedIQirrelevant. Supersedes earlier omission due unverifiednumber. Build/design and19tests pass.

Engineering/EQ source review19November: reviewed Tan’s published book excerpt and Wharton author interview, Goleman’s authorised workplace-theory book chapter, consortium training-report reference, and2021SIYstudy. Research note assets/portfolio-showcase/emotional-intelligence-research.md records source scope, six/four versus five domains, and limits: no original six-factor study independently located; later123employee self-report/no-control SIYstudy shows awareness changes, not demonstrated engineering performance. Both pages now explicitly state James developed Just Inside at JUMO to help train engineers, with experiential aims and no invented course results. Workshop adds learned-competence point attributed to Goleman. Build/design77pages plus4redirects,19+9checks pass.


### Owner corrections and copy review, 19 November

Correction to earlier checkpoints, the programme is **Just Being** and the private session lasts **one hour**. Simplified the Return to Stillness book/JUMO passage and removed the six-item list while retaining the attributed six/four research point. Updated offer facts, metadata and research note. The workshop rewrite is explicitly deferred until James approves this text, with only name, route and punctuation corrections applied there.

Moved Dantian to `/dantian` at James’s request. Updated its page imports, internal slug, canonical metadata, shared portfolio links and relevant output-module cross-links. Added Astro and Cloudflare redirects from `/work/dan-tian`, and extended existing route checks. Sitemap and public guide derive the corrected destination from the shared collection.

Reviewed built text across all pages for colons and long dashes. Edited prose individually to preserve meaning and avoid comma splices, including case-study paragraphs, service copy, book labels, 13 essay files, accessible labels, pagination and editable SVG captions. Syntax inside URLs, code and times was preserved, as were original screenshots. External published essays were not changed. Owner punctuation preference and programme-name correction were saved as memory extension notes.

Verification passed design/build, 19 Vitest checks, nine built-route/SEO checks and six essay/import checks. The generated-copy audit has no authored prose, title, description or accessible-label matches; four distinct matches are Astro-generated redirect notices. Browser confirmed Dantian redirect and the updated one-hour/Just Being copy before the final punctuation pass. Diff whitespace check passed. Source changes are local and unpublished. No new copy-only tests added; route assertions extended for the Dantian migration.

Follow-up remains James’s approval of the private-page text before rewriting workshops. See the latest spec checkpoint for scope.


### Owner-supplied private-page text, 19 November

Placed James’s complete replacement Return to Stillness body in src/outputs/diagnostic.js, preserving his wording and turning the parenthetical URLs into links. Kept one hour and Just Being. The shared page shell remains. This does not authorise the workshop rewrite or publication.

Verified build/design, 19 Vitest and nine route/SEO checks, plus browser-rendered body and first viewport. Opened the page visibly and marked it to remain available for owner review. No new tests, commit, push or deployment.


### Supplied Stillness Under Pressure copy, 19 November

James explicitly authorised the workshop update by supplying its complete replacement text. Updated src/outputs/workshops.js with his wording, preserving headings, paragraphs, list and formats; converted the supplied references to links and kept internal destinations relative. Updated the hero fact in src/pagePresentation.js from Integration series to Short series. The previous approval dependency for the workshop rewrite is resolved.

Build/design, 19 Vitest checks and nine built-route/SEO checks passed. Browser verified rendered copy and links, and the workshop page was left open for James. No new tests, commit, push or publication. Backlog and handoff now reflect both supplied practice-page texts being implemented locally.


### Supplied About page revision, 19 November

Replaced src/outputs/about.js with James’s supplied body and updated the hero introduction in src/pagePresentation.js. Preserved the how-i-work anchor, supplied career/product links, grouped services and contact route. Updated About metadata to match the new introductory sentence. All wording, including his latest Roof Ops account and True Essence description, is owner-supplied.

Build/design and nine route/SEO checks passed. The first Vitest run found an obsolete exact About-description assertion; updated it and the existing opening-copy assertion to the authorised text. Final 19 Vitest checks passed. Browser confirmed the new heading, introduction, body and links, and About remains open for James’s review. No new tests, commit, push or deployment.


### Final cross-links, owner refinements and mobile verification, 19 November

Updated About, Dantian, Taoism and Philosophy with natural links to both practice offerings. Added reciprocal context links across Books/Little Panda, Workflow Systems, Roof Ops, Taoist Breath and True Essence. Now links directly to the live George Tai Chi page. Paintings links Procreate and includes “No AI, just me and plenty of undo.” Shortened the homepage credit to “Painted by me” with an unbroken link. Moved the single Google Launchpad credibility paragraph beneath the homepage introduction at James’s request. Source changes are in the relevant output modules, three project pages, Dantian, PortfolioShowcase and its shared caption CSS.

Design/build, 19 Vitest and nine built-route/SEO checks passed. Full generated HTML audit covers 2,316 internal link occurrences, with zero broken page/fragment targets or retired-route links. Checked the new George destination live and Procreate’s official page. Existing published essays and source claims were not independently re-researched during this copy/navigation review. Retained utility/compatibility routes, no architecture migration.

Playwright CLI on Chromium checked 32 routes at 320px and390px, with no page overflow or broken loaded images across 64 checks. The only offscreen-image flags were expected scrollable rail thumbnails. Visually reviewed the main-page and case-study captures. Exercised all22showcase selections, in-place painting refresh, and Dantian→private session→workshop→Taoism→workshop contact, preserving the contact intent. Final homepage checked at1280,390and320px. Initial screenshot harness assumed a hero on Plumbline and timed out; corrected harness and completed layout/flow checks. Initial case-sensitive TapScribe assertion was corrected for CSS uppercase display. Stale local Vite dependency responses cleared by restarting the project’s development server.

Local evidence in output/playwright/final-mobile-review/, with layout-audit.json, flow-audit.json and screenshots. No new test files. Physical-device/Safari acceptance remains unverified. No commit, push, publication or external messages.

## Authorised portfolio release

James authorised production deployment on 19 November and requested sitemap lastmod. Sitemap now uses stable 19 November dates for revised portfolio routes and frontmatter revision dates for writing, falling back to publication dates for unchanged writing. Updated changed essay/Note revision dates. Clean index export at `/tmp/jamesgodwin-release-20261119` passed npm ci, design/build (77 pages plus redirects), 19 Vitest tests, 9 route/SEO checks, 6 essay checks, 2 Notes checks and 7 design guard tests. XML parsed and retired scoring URL remains excluded. Deployment verification follows below. Unrelated publishing runbook and older Mac article log edits are excluded from this release.

Cloudflare production deployment `c2e549b0-d8cf-4db2-840c-93fd3ea6c0d6` succeeded for `05cc31bf119ddd266e6501c0b4559ef89d9c885b`. Remote main matches. Live sitemap exactly matches candidate,73URLs with67lastmod entries. Curl checks passed all73canonical URLs, five retired-route redirects, About/private/workshop revised copy, robots and llms output. Python urllib received403responses while curl succeeded, so repeated HTTP checks with curl and recorded results in ignored output/portfolio-live-release-checks.json. Prior local mobile interaction review remains the visual evidence; physical-device review and new hosted analytics event acceptance were not repeated. Search indexing is not established by this release.
