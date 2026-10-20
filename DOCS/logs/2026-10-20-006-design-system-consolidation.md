# Local design-system consolidation

## Summary

Implemented James's authorised cleanup before Essays, applying one treatment per control purpose and preserving page composition/artwork. Reduced tokens 410 to 187, type roles 32 to 11, action recipes nine to six and requested font/weight pairs eight to five. Main CSS bundle reduced from 60,432 to 26,568 bytes. No release or homepage redesign.

## Files Touched

- `src/styles/tokens.css`, `patterns.css`, `catalogue.css`, `src/NewSite.css`, `src/index.css`, `src/components/Breathe.css`: retired CSS/aliases, shared values and control recipes.
- Pattern registry and its test; Action/PageHero/PressureEncounter, client and Fonts: updated consumers, one outlined button and explicit font coverage.
- Catalogue page/parser test: supported roles, optional field previews, core spacing and real recipes.
- Design checker/tests: unused-token dependency graph; updated override fixture for the canonical class.
- Foundation spec, runbook, project/backlog/handoff: final contracts, exceptions and evidence. Unrelated migration changes remain untouched.

## Verification

- Before-cleanup dist preserved under ignored `output/design-system/cleanup-before/build/`.
- Selector/font census visited local routes at 390×844, 1280×720 and 1440×1000, navigation and reflection/breathing/theme states; checked client source before retiring dynamic selectors. Image-theme background rules retained deliberately.
- Both builds passed; design guard passed 50 source files/zero violations. Vitest 17/17, route tests 3/3, guard tests 7/7 and catalogue checks passed. New unused-token test first failed because the function was absent, then passed; existing override fixture was updated for the new canonical class.
- Source guard caught a lost mobile cover-width consumer during consolidation; restored the existing 190px constraint before successful builds. No known cover-layout regression remains.
- `standardization/before-all.json`, `after-all.json`, `comparison.json` record 126 computed-style cases. 52 exact; other cases differed in shared actions, their resulting container heights, loaded bold metrics, and one incidental hover state. No broad layout or colour redesign. This is not pixel-parity evidence. The comprehensive after capture preceded a final equivalent-value reset/breathing cleanup; final browser flow/screenshots exercised that cleanup.
- Final product checks passed both widths: four reflection paths/focus return, browse/Escape, nine themes, persistence, breathing dismissal, two easter eggs, six contact intents, workshop alias and 404. No page errors. Page/reflection outline computed values matched for family/size/weight/leading/border/padding/corners/min-height. Home/contact/apps/books/reflection screenshots saved locally; home desktop and mobile reflection inspected.
- Catalogue separately verified in an isolated browser context: 200, default-build 404, both widths/modes, no overflow/errors/analytics, six supported action recipes. An initial combined capture included a departing product page's pending analytics request; the isolated run removes that ambiguity.
- Label `design-consolidation-20261020`: exercised reflection → Product Clarity → contact CTA → email (prevented mail client launch). PostHog event and log endpoints returned 200, no page errors or console errors. No deliberate exception injected. Remote record read-back was not completed; an obsolete query-tool lookup failed and no record-count claim is made.

## Decisions

One standard outline replaces location-specific page/reflection buttons. Text action and auxiliary/return/menu controls retain distinctions for hierarchy or interaction. Three corners remain: 4px control, 8px menu/media, circle geometry. Five brand font/weight pairs explicitly cover actual use; old semibold downloads removed. Documented page-fit measurements remain to avoid unrequested reflow.

## Follow-ups

Essays remains planned. James's latest visual question is opinion/exploration only: recommend stronger homepage hierarchy and work evidence while retaining the site's character; no redesign scope accepted. Public dark-mode link/icon contrast and hosting release remain separate. No deployment, publication, commit or push.
