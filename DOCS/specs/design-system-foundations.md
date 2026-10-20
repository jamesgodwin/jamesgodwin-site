# Design-system foundations

## Current applicability, 20 October 2026

Foundations and consolidation power the deployed cream/forest Case shelf. Token/recipe authority and opt-in catalogue contracts remain current. Original preservation-only exploration and pre-deployment observations below are historical; public dark-mode controls remain deferred. See the [documentation index](README.md) for current authority and release evidence.

## Original scope and chronological amendments

Date: 2026-10-20.
Status: Foundations and authorised consolidation implemented and verified locally on 20 October 2026. Current contracts are in the runbook; the consolidation result at the end supersedes the initial preservation-only vocabulary. No deployment, public dark-mode control or homepage redesign implemented. James subsequently authorised [two homepage concepts](homepage-visual-exploration.md) before Essays. The observations below are historical baselines.

## Aim

A small system that preserves this site's character, makes Essays easy to build consistently, and allows a later public dark mode without restyling every page. Astro migration parity remains a separate acceptance gate. Reference the current implemented contract in `/Users/nitro/code/ai_ching_web/design-system/BLUEPRINT.md`, not its superseded historical option lists. Reuse its process and enforcement principles; this site keeps its own typography, shapes and monochrome identity.

## Observed baseline

- `src/NewSite.css` is 2,403 lines, mixing the current circles and route pages with dormant terminal, overlay, hero and card rules. `src/App.css` is an unimported CRA template stylesheet.
- `src/index.css` and `src/NewSite.css` define overlapping theme vocabularies. The former still supplies resets and inherited colour; it cannot simply be deleted. There are 32 distinct custom-property names across current source.
- A source census of `src/` excluding tests found seven declared font-family stack spellings, 23 font-size values, 18 line-height values, 12 tracking values, seven radius values and two shadow recipes. It found 37 raw colour spellings across 98 occurrences, including token definitions, dormant CSS and unused theme-object properties. These are source counts, not 37 rendered colours or 23 necessary typography roles. SVG/raster artwork and `legacy/` are excluded.
- At 1280×720, computed typography sampled from visible headings, paragraphs, links, buttons and list items on Home, About, Systems, Contact and Books produced 20 unique family/size/weight/line-height/tracking combinations. Light and dark samples used the same typography. This is a sample, not a complete responsive census.
- Intentional typography is clear: EB Garamond for expressive headings, Karla for readable prose, IBM Plex Mono for navigation, controls and labels. Breathing text uses Courier New; body/code fallbacks add more declarations.
- An existing `.dark` palette and ring-image inversion already work. This is a foundation, not a finished dark-mode product. The dark Contact screenshot shows browser-default blue links and nearly invisible black SVG icons. Those need explicit text/icon roles; changing background variables alone will not fix them.
- `src/themes.js` repeats text/input colours and button assets that the current client does not consume; it currently supplies background artwork paths. Image themes need their own legibility verification and must not be mistaken for a second design system.

Evidence: ignored `output/migration-baseline/design-census.json`, `computed-design-result.txt`, home screenshots and `contact-dark.png`. Migration checks found desktop/mobile light appearance matched and homepage Lighthouse accessibility remained 100; that does not qualify every dark page.

## Recommended candidates, in order

### 1. One token authority with semantic light/dark mappings

Files: proposed `src/styles/tokens.css`, current `index.css`, `NewSite.css`, `themes.js` and `Breathe.css`.

Move existing values first, retaining compatibility aliases until consumers migrate. Define roles by purpose: canvas, surface, surface-hover, text, text-muted, line, line-hover, action-fill, action-text, link, link-hover, focus-ring and scrim. A role may share today's resolved value with another role without losing its distinct purpose. Themes override these mappings, not individual components.

Typography roles should include display, page-title, section-title, lead, body, small, control, label and wordmark, each owning family, responsive size, weight, line-height and tracking together. Preserve the three intentional families. Inventory actual usage before choosing exact role counts or merging values.

Add a compact spacing scale plus explicit reading/page widths, target heights, radius, elevation and motion tokens. Retain 4px controls, 6px reflection actions and 8px menus initially where currently used; do not silently merge them. Circles remain geometry, not a card-radius variant. Dormant 12/20px treatments must be proven unused before retirement. Colour contrast and any visual consolidation need a separate reviewed proposal.

Benefit: dark mode becomes a palette mapping with explicit link/icon/surface contracts. Verification seam: computed light-style comparison, contrast and focus checks in both themes. Risk: global inheritance and similarly named aliases; mitigate by migrating one role family at a time. Recommendation: Strong.

### 2. Small components with owned recipes

Files: Astro layout/page components, `client.js`, current route output HTML and CSS.

Start with `Action` (primary/secondary/quiet/icon), `TextLink`, `PageHero` and `ContentProse`. Extract a card only where repeated content actually needs a panel or link card; do not put the whole editorial site into boxes. Book/media rows can remain a distinct composition. Keep the circle encounter bespoke.

Component recipes own typography, colour, border, radius, focus and internal spacing. Callers own content and outer layout. Use semantic anchors for navigation and buttons for actions. The same recipe must support server-rendered Astro markup and dynamically created reflection buttons without copied class strings. Treat prose generated from trusted output modules and future Markdown as real consumers of the system.

Benefit: fewer independent decisions at each call site. Verification seam: real labels, long titles, keyboard states, mobile wrapping and unchanged event properties. Risk: an overly flexible Card/Button API recreates the existing variation. Recommendation: Strong, after token mapping.

### 3. Local living catalogue and drift check

Propose an opt-in `/design-system/` generated from real token/component exports, showing aliases, resolved light/dark colours, typography, radii, supported variants and interaction states. Include real site copy. Default production builds must omit it; no sitemap or product navigation entry. Keep screenshots local and ignored.

Add `npm run check:design` before the build: reject new raw colour/typography/radius values outside token authority, flag component appearance overrides and permit only narrow documented legacy exceptions while migration proceeds. Verify the guard by planting a failing value in a test fixture. Do not copy the AI Ching checker unchanged; this project uses CSS and authored HTML rather than Tailwind.

Benefit: future edits stay consistent and reviewable. Verification seam: catalogue production exclusion and a regression test proving token bypasses fail. Risk: a broad allowlist becomes permission to ignore drift. Recommendation: Strong after actual contracts exist.

### 4. Public dark-mode behaviour, later

Once token/component parity is accepted, decide system preference, explicit light/dark control, persistence and precedence relative to image themes. Apply the chosen theme before paint; verify navigation, reload, keyboard state, contrast, SVG icons, artwork and reduced motion. Do not ship a theme toggle merely because `.dark` exists.

Benefit: a finished accessible theme experience. Risk: confusing image-theme and colour-mode state or introducing a flash on load. Recommendation: Later; tokenisation prepares it.

## Original recommendation (implemented below)

After the local Astro baseline is accepted, map the active typography/colour consumers to proposed semantic roles and show the exact values and any visible differences for review. Then implement foundations and a small catalogue before building the Essays layouts. Keep consolidation, public dark-mode behaviour and migration acceptance distinct. The implementation authorisation below supersedes this initial proposal; terminal/agent/Notes work remains parked.

## Approved implementation and acceptance

1. Capture the current Astro build, light/dark desktop/mobile computed styles and screenshots. Centralise existing colour, typography, radius, shadow and motion values in `src/styles/tokens.css`, with semantic roles for live components and compatibility mappings for retained styles. Add a spacing/dimension foundation without changing existing measurements. Preserve image themes and assets.
2. Extract shared Action, TextLink, PageHero and ContentProse patterns and the existing work-link card. Use the same action recipes in Astro and browser-created reflection buttons. Preserve semantics, content, keyboard/focus, link destinations and PostHog data attributes. No new visual variants or theme switcher.
3. Build a local-only catalogue from the real token and recipe sources. Cover light/dark mappings, typography roles, shape/spacing/motion, all supported component variants, hover/focus and real copy. Require `DESIGN_SYSTEM_CATALOG=true` to emit the route; exclude it from default builds, sitemap and public navigation and mark it noindex. Do not load analytics or external form scripts in the catalogue.
4. Add `npm run check:design` before builds, with tests that prove raw design values and appearance overrides cannot bypass the patterns. Prefer migrating existing declarations over a broad allowlist. Compare computed styles/screenshots to the baseline and rerun relevant route, interaction and analytics contract checks. Record any exceptions explicitly; do not silently redesign to pass.

Done means the current light/dark look and interaction contracts remain intact on the sampled pages at 390×844 and 1280×720; all existing route checks pass; the local catalogue is usable and absent from a normal build; the design guard rejects planted violations; and documentation explains the token/component authority and how to run the catalogue. Public dark-mode accessibility improvements remain a separate later change.

## Implementation and verification result

Complete locally. Usage/contracts: [runbook](../runbooks/use-design-system.md). Evidence: [session log](../logs/2026-10-20-004-design-system-foundations.md).

- Existing values were extracted rather than visually consolidated. Token authority now includes semantic light/dark mappings, complete typography roles with responsive values, spacing/size scales, corner geometry, two elevations, CSS motion values and explicit compatibility aliases. Shared pattern styles use semantic colours directly; existing compatibility consumers remain supported. No public dark-mode switcher or new palette was introduced.
- Action, TextLink, LinkCard, PageHero and ContentProse are implemented. Nine action recipes, two link recipes and two work-link card treatments are exported from one registry. Browser-created reflection controls use the same recipe attributes. Authored HTML and future rendered Markdown are styled by ContentProse; the circle experience stays bespoke.
- The catalogue is opt-in, uses real token parsing and component exports, has light/dark preview and authored hover/focus examples, and is built to a separate ignored directory. Normal build route returns 404. No analytics/Kit scripts are loaded there.
- Source drift guard passes with zero findings and no allowlist. It rejects raw colour/typography/radius/shadow/spacing values outside token authority, unknown token references, direct appearance props and targeted token-valid recipe overrides. It is not a complete analyser of arbitrary dynamically generated CSS.
- Both builds, 17 Vitest tests, three built-route checks, six guard regression tests and catalogue-output checks passed. Mobile/desktop catalogue checks had no overflow or page errors. Existing product interactions and PostHog delivery were verified.
- All 30 final computed-style/layout cases matched baseline exactly. 27/30 settled screenshots were pixel-identical; the three Books screenshots had small paint differences (191 pixels on each desktop sample and 6,607 on the 390px light sample) with identical computed geometry/type/colours. Detail crops were visually inspected with no intentional appearance change. This is recorded as a comparison limitation, not an all-pixel identity claim.

No Essays implementation, Cloudflare deployment, publication, commit or push occurred. The next content slice is Essays, using these shared patterns. Public dark-mode contrast/icon improvements and visual consolidation require their own scope.

## Standardisation review, 20 October 2026

James requested a consolidation review before Essays after seeing the catalogue's large token inventory. The foundation preserved legacy values successfully, but extraction alone did not produce a sufficiently small design vocabulary. The following is a proposal, not an implemented consolidation or a new visual baseline.

### Findings

A fresh source audit found **410 base custom-property names**, excluding repeated dark/responsive declarations. The total includes 160 fields for 32 typography roles, 46 spacing tokens, 54 dimensions, 40 colour tokens, 32 compatibility aliases, 28 font-family/size primitives, 18 leading values, 12 tracking values, seven radii, six motion values, five weight definitions and two shadows. This is a count of implementation names, not 410 independent design choices.

Following `var()` dependencies through all theme/responsive definitions, **81 names are unreachable from product source**: 67 typography fields and 14 old colour/compatibility definitions. Catalogue/test-only use is excluded. This identifies removal candidates, not rendered-state proof; CSS consumers can themselves be dormant. Removing all 81 would leave 329 names before further CSS retirement or consolidation.

Several colour groups have identical light AND dark values: line/control-line/menu-line/terminal-line; text-muted/body-muted/surface-text/menu-text; heading/section-heading; control-surface/terminal-surface/menu-surface; and three obsolete compatibility accent roles. Equal values alone do not prove equal purpose. In particular surface, text and border roles must remain independently themeable where their contracts differ.

The font request loads eight family/weight pairs: Garamond 400/500, IBM Plex Mono 400/500/600 and Karla 400/500/600. Existing 30-case browser evidence across seven routes and reflection states shows Garamond 400, Mono 400/500 and Karla 400/700. It does not qualify every route/state. Karla's computed bold 700 has no matching requested 700 face; the requested 600 may be substituted or synthesised. Font downloads must not be reduced from this sample alone. Semibold/bold declarations remain in retained offer/terminal/overlay styles and require a complete consumer census.

Page primary and secondary action recipes currently share the same authored visual rules. Several other recipes express a particular location rather than a distinct reusable treatment. Seven radius definitions include circles and old panel treatments; they are not seven necessary card variants.

Reproducible audit and detailed results are local/ignored under `output/design-system/standardization/`. Prior browser evidence is `output/design-system/final/computed.json`; it is reused evidence, not a new browser run.

### Recommended changes, in order

1. **Retire unused CSS and definitions first. Strong.** Files: `NewSite.css`, `tokens.css`, catalogue parser. Remove the 81 unreachable definitions after validating references, then prove retired terminal/overlay/offer selectors absent from route markup and client-created states before deleting them and their now-unreachable dependencies. This reduces both vocabulary and stylesheet complexity while preserving current appearance. Verification: default/catalogue builds, design guard, routes/interactions and light/dark responsive computed-style comparisons. Risk: dynamically generated states and alias inheritance. Keep the circle/reflection/breathing experience.
2. **Make typography a small set of complete, applied recipes. Strong.** Files: `tokens.css`, `patterns.css`, `NewSite.css`, `Fonts.astro`. Aim for roughly 10–12 reusable roles covering display, page title, section heading, lead, body, small, label, control, wordmark and caption; retain bespoke ring/breath exceptions only where demonstrated. This is a proposed target, not a verified final count. Keep the three intentional brand families. Census all routes, navigation, reflections and breathing at mobile, short desktop and tall desktop; explicitly define prose emphasis. Request only family/weight pairs actually required, with no accidental synthetic bold. Merging near-equal sizes/leading or changing the bold face can alter appearance and needs side-by-side review. Do not publish unused recipe fields as supported choices.
3. **Unify scales and shared treatments. Strong after the census.** Files: token/pattern authority and registry. Start with a spacing scale of 4/8/12/16/24/32/48/64px as a proposal, with named page-fit exceptions for circle layout; do not round existing measurements automatically. Separate layout dimensions from spacing. Preserve 4/6/8px current active corners in the first cleanup and retire unused shapes; a single corner is a later visible choice. Share one underlying page-action treatment where styles are identical while preserving link semantics and analytics. Map equal-purpose colours to shared primitives; preserve separate semantic roles where dark-mode behaviour may diverge. Verify responsive fit, hover/focus, contrast and route events. Risk: small spacing/type changes can alter wrapping and the one-screen home composition.
4. **Enforce the smaller vocabulary and simplify the catalogue. Strong.** Files: catalogue, design checker and runbook. Show approved semantic roles and real components first, with raw primitives/compatibility details secondary. Add checks for unused tokens, duplicate resolved type recipes across breakpoints, and unapproved font weights; report same-valued colours for review rather than automatically rejecting them. Existing checks prevent raw-value drift but do not detect these forms of inflation. Add a failing fixture for each new enforcement rule. A smaller catalogue must reflect fewer supported choices, not merely conceal the same redundant source.

Recommended rollout: nonvisual retirement first; typography/font reconciliation second; review any visible spacing/type consolidation third; then Essays. Dark-mode launch, Cloudflare cutover and parked features remain separate. No source cleanup or visual changes were made during this review.

## Approved consolidation implementation

James authorised local cleanup and standardisation before Essays, preserving the current look. Treat equal-purpose controls as one pattern; retain exceptions only for demonstrated layout, hierarchy, reading or interaction needs. This supersedes the review-only status of the preceding proposal.

Acceptance and slices:

1. Retire CSS proven absent across built route markup and browser-created states; remove unreachable definitions and compatibility aliases. Preserve artwork, content, routes, theme behaviour and analytics attributes. Verify all route layouts at mobile, short desktop and tall desktop, both colour modes, plus navigation/reflections/breathing.
2. Simplify typography and pattern APIs by actual design purpose. Share family/weight primitives, remove unused role fields and identical location-named recipes; consolidate identical page actions. Retain meaningful display/body/label distinctions and responsive geometry. Avoid arbitrary rounding solely to achieve a token count. Reconcile requested font weights against actual use while preserving rendered faces.
3. Catalogue documents supported design choices and justified exceptions. Guard detects unused definitions and duplication/drift where enforceable, with a regression fixture. Existing guard, builds, content/route checks, catalogue exclusion, local keyboard interactions and analytics contract remain passing. Record any visual differences and limits explicitly.

No Essays implementation, release, commit or push is authorised by this slice.


## Consolidation result

Complete locally. [Usage and design reasons](../runbooks/use-design-system.md); [verification evidence](../logs/2026-10-20-006-design-system-consolidation.md).

- Base token names reduced from **410 to 187**. Typography roles reduced from **32 to 11**, with 40 actually consumed role fields rather than 160 speculative fields. Removed all 32 compatibility aliases, retired terminal/overlay/offer CSS, unused keyframes, dead menu-bar shapes and shadowed reset/breathing declarations. Colours reduced from 40 to 13; corners from seven to three. Shared values remain aliases where they describe a real semantic contract, not duplicate independent choices.
- Action recipes reduced from nine to six. Both page CTAs and the primary reflection action use `outline`; supporting reflection/home actions use `text`. `quiet`, `back`, menu rows and the menu icon have documented navigation/interaction reasons. Filled/outlined work cards preserve the existing hierarchy. Book covers share one base style with the existing mobile cover constraint retained.
- Font requests reduced from eight to five family/weight pairs: Garamond 400, Mono 400/500, Karla 400/700. Bold prose now loads its requested 700 face. The 11 typography roles are display, page-title, section-title, lead, body, label, control, caption, wordmark, ring and breath. Retained page-fit sizes/spacing are not interchangeable new variants. The catalogue highlights the eight core spacing steps and keeps technical measurements separate.
- Design checks now reject unused token definitions through a dependency graph that includes dark and media mappings. The new regression was observed failing before implementation and passing afterward. Raw values and appearance overrides remain prohibited, without an allowlist.
- Layout/artwork/content/navigation/analytics contracts remain intact. Intentional visible changes: reflection buttons adopt the shared 44px minimum height, 4px corners and standard border/padding; supporting actions share 14px type and 2px underline padding; auxiliary browse uses 13px; standard outline labels have explicit 21px leading and centred alignment. Loaded Karla bold has slightly different text metrics (sampled label widths around 1–2px wider). These are bounded consistency changes, not a claim of pixel identity.
- Both builds, 17 Vitest tests, three built-route tests, seven design-guard tests and catalogue-output checks pass. A 126-case computed-style comparison covered 18 page/404 cases at three viewport sizes in both modes, plus navigation/reflection/breathing states. 52 cases matched exactly; remaining differences were examined and attributable to the intended controls/font metrics and one pointer-hover state. Final keyboard/interaction checks and screenshots passed; the page/reflection outline recipe computes identically for type, leading, padding, border, corners and minimum height. Catalogue has no overflow/page errors or analytics requests; normal build returns 404. Labelled local contact/reflection events and logs received PostHog HTTP 200 responses; no remote record-count query was completed in this slice.

Existing dark link/icon contrast remains unqualified for a public dark-mode launch. No Essays work, deployment, publication, commit or push. After discussing the overall visual design, James authorised [two local homepage concepts](homepage-visual-exploration.md) bringing work, writing and practice together while retaining the typography and circles. No layout has been selected or homepage redesign implemented. The consolidated system remains the foundation for that exploration and any later agreed implementation.
