# Design-system foundations

## Summary

James authorised tokens, shared patterns and a local catalogue before Essays, preserving the current appearance. Work is local; no deployment, commit or push.

## Files Touched

- Token authority in `src/styles/tokens.css`; migrated existing CSS declarations and extracted owned styles into `src/styles/patterns.css`.
- `src/design-system/` holds shared recipe exports and catalogue parsing; `src/components/ui/` holds Action, TextLink, LinkCard, PageHero and ContentProse. Product markup and browser-created reflection actions use them.
- Shared Fonts component; opt-in catalogue page and catalogue-only CSS.
- Build configuration/package scripts, robots exclusion, design guard and regression tests.
- Active design spec, project brief, backlog, handoff and `DOCS/runbooks/use-design-system.md`.

## Verification

- Baseline build, 30 computed-style cases and screenshots retained under ignored `output/design-system/baseline/`.
- Token comparison caught an inherited footer leading mismatch, corrected before pattern verification. After tokens and component extraction, all 30 light/dark mobile/desktop cases had zero computed-style or element-rectangle differences against baseline, across Home, About, Systems, Contact, Books, Little Panda, Apps and reflection state.
- Design guard tests prove raw values and token-valid appearance overrides fail; current source scan passes with zero violations and no allowlist.
- At this checkpoint: default build, 17 Vitest tests and 3 route tests passed. Catalogue build succeeds in a separate ignored output directory. Final catalogue browser checks and interaction/analytics verification are ongoing.

## Decisions

Preserve baseline values and compatibility roles rather than consolidate visually. Public dark-mode controls and accessibility polish remain outside this pass. The catalogue uses real exports, is noindex, excludes analytics/Kit, requires explicit build flag and has separate output so it cannot replace the normal build. Existing output HTML stays trusted; no user input enters HTML.

## Follow-ups

Complete catalogue browser checks, default-build exclusion and product interactions/analytics checks. Reconcile completion in the existing spec/backlog/handoff. Essays remains unimplemented.

## Final verification checkpoint

All approved foundation acceptance criteria are met locally. No visual consolidation or new public mode was introduced.

- Final `npm run check:design`: 50 source files, zero violations, no allowlist. Shared styles use semantic colours; token authority preserves compatibility mappings, including the existing body.dark specificity case. An undefined catalogue dimension was caught by the guard and replaced with an existing token rather than adding another visual value.
- `npm run build` and `npm run build:catalogue`: passed. The latter writes to `output/design-system/catalogue-build/`; normal output remains `dist/`.
- `npm test`: 17 tests in seven files passed, including recipe attribute ownership and real-token catalogue alias/cycle checks. `npm run test:routes`: all three passed. `npm run test:design`: six passed; observed red/green for raw styles, token-valid CSS overrides and raw spacing/named colours; the other cases verify the direct-prop and token-authority safeguards. `npm run test:catalogue`: passed.
- Final comparisons captured independently at 390×844 and 1280×720 in light/dark, covering Home, About, Systems, Contact, Books, Little Panda and Apps, plus the work reflection at both sizes. All 30 computed-style and rectangle cases exactly match the retained pre-tokenisation Astro build.
- Settled screenshot comparison (animations disabled): 27/30 pixel-identical. Three Books samples differ in paint: 191 of 5,721,600 pixels on each desktop sample; 6,607 of 2,616,120 on mobile light. Their computed style/geometry records are identical. Detail crops were inspected and show no intentional design difference. Do not describe the whole set as pixel-identical. Artifacts/results remain ignored under `output/design-system/`.
- Catalogue browser tests: 200 on opt-in preview; 404 on regular preview. Light/dark controls work at both sizes; no horizontal overflow, unexpected page errors or requests to PostHog/GA/Kit. All nine action recipes render; catalogue build tests also enumerate both link recipes and both card treatments. Inspected mobile catalogue and compared product detail crops visually.
- Product browser checks passed: four reflection paths/focus restoration and Browse/Escape at both sizes; nine themes, retained theme across navigation, breathing open/dismiss, two easter eggs, six contact intents, workshop continuation and real missing-page response. No unexpected page errors.
- PostHog raw ingestion confirmed the `design-foundations-20261020` run: three pageviews (home, Product Clarity, Contact), all four custom events with the expected work/product-clarity/email properties, and three interaction logs. Event timestamps around 10:46:14–10:46:20 UTC; log timestamps around 10:46:14–10:46:15 UTC. Browser responses were also 200. This run did not deliberately throw another exception; exception capture code was unchanged from the previously verified migration. Email launch was prevented, and no contact/form submission occurred.
- `npm audit --omit=dev`: zero vulnerabilities. `git diff --check` passed. Local screenshots/output remain ignored; no staging, commit, push or deployment.

Catalogue commands account for Astro 7's per-project server lock: `--ignore-lock` permits the catalogue on its own loopback port alongside the normal preview. Built catalogue is available at `http://127.0.0.1:4175/design-system/`; dev catalogue uses port 3001. Repeated values and compatibility entries are centralised, not claimed as visually simplified; numeric/source counts are not rendered-combination counts.

Next work is Essays using the shared patterns and verified Source publication state. Public dark-mode contrast/link/icon fixes, a user-facing mode control and any consolidation of values remain separate future scope. Live production remains unchanged.
