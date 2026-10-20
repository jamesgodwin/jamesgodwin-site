# Homepage visual concepts

## Summary

Generated and showed two local image concepts using Product Design ideation and the built-in Image Gen tool. Personal Studio was displayed first, Personal Journal second. No layout selected or homepage implementation authorised.

## Files Touched

- `DOCS/specs/homepage-visual-exploration.md`: review checkpoint, artefact references and limitations.
- `DOCS/next-day.md`, `DOCS/BACKLOG.md`: awaiting concept selection/refinement.
- Ignored `output/homepage-concepts/`: two PNGs and full generation prompts.

## Verification

Inspected actual desktop/mobile homepage and reflection screenshots, apps/books references and circle artwork. Attached real homepage/artwork references to both generations. Both returned images were visually inspected and displayed; each includes work, writing and practice. Confirmed output directory is ignored. No source implementation changes, tests or builds; raster concepts cannot establish font fidelity, responsive behaviour, accessibility, analytics or runtime acceptance. Existing uncommitted migration/design-system changes and DMG removal preserved.

## Decisions

No direction accepted. Generated prose and essay titles are concept material; use verified public content when refining. Studio filled action needs reconciliation with existing outlined recipe if chosen. No new tokens or recipes created.

## Follow-ups

James chooses a direction or combination to refine. Agree implementation scope afterwards. Keep PostHog continuity in any later implementation. No deployment, publication, commit or push.

## Round-two checkpoint · 20 October 2026

James found the initial concepts too wordy and unclear about his actual work. Reviewed the live LinkedIn profile, About and public activity, then targeted Source strategy, voice, published writing and client testimonial documents. Created and displayed three new independent Image Gen concepts in order: Over the Line, The Work Speaks, An Open Index. Real circle artwork grounds all three; the second also uses the public TapScribe screenshot as evidence of James's own making. New headlines remain draft copy; essay/post titles are verified published titles.

Saved PNGs and exact prompts under ignored `output/homepage-concepts/round-two/`. Updated the exploration brief, project overview, backlog and handoff. Visual inspection confirmed substantially reduced copy, complete compositions and the three strands. Raster images do not prove font/token fidelity, responsive accessibility or working interactions. No app source, Source documents, live profile, deployed site or analytics changed. No builds/tests needed for image/document exploration. `git diff --check` passed. Await selection/refinement from the latest three-image set.

## Experience-reset checkpoint · 20 October 2026

James rejected all three round-two designs and asked to ignore the existing visual attempts. Discussed a fresh experience, with an optional real-work walkthrough as a proposal rather than an accepted plan. Inspected current primary web references for product examples, interactive explanation and project-led presentation. Updated spec/backlog/handoff so later sessions do not ask James to select an already-rejected image. No source code or new visual artefacts. No build or runtime checks required for this discussion; documentation whitespace check passed.

## Storyboard checkpoint · 20 October 2026

James authorised visual storyboards with screens/clicks and fresh typography without the existing circles, then replaced TapScribe with Ben's roofing app as the preferred example. Asked for the original situation; James supplied firsthand context about paper daily scores, month-end tallying for commission and a partly working vibe-coded build.

Read the Roof Ops operating contract/current docs and narrowly inspected score capture/model/reporting code. The current implementation has four categories scored 0–5, unlike the five categories scored 1–5 James recalled. Reporting totals and CSV support downstream commission review; commission calculation is explicitly outside the app. Re-read the Source testimonial. No client app, production data or database was run or modified.

Generated and displayed three independent Image Gen storyboards in order: Find your starting point, Inside the work, A real project looked at closely. Each shows four screens. The first two illustrate general approaches and were drafted before the origin account arrived; the third uses that account, current code and Ben's verified quote. All app UI is reconstructed, visibly labelled and free of actual worker data. Saved three 1448 × 1086 PNGs and exact prompts under ignored `output/homepage-concepts/storyboards/`.

Visual inspection confirmed legible main screens/actions and bounded evidence. The third's generated desk decoration and sample dates are concept material; remove/replace in refinement. Recommended developing the third journey, but James has not selected it. Updated exploration brief, project constraint, backlog and handoff; preserved all pre-existing source changes. `git diff --check` passed and `git check-ignore` confirmed all four storyboard artefacts are ignored. No implementation, builds or runtime tests for this image/document phase. No commit, push, deployment or publication.

## Selected design and implementation checkpoint · 20 October 2026

Correction to the earlier status above: James preferred the third Ben storyboard, requested four real stories, then selected **The case shelf**, the first of three further refinements. He requested explicit full-stack positioning, a documented design system, writing mockups with original LinkedIn images, and explicitly answered **“Also build the local proof of concept now.”** Earlier “no implementation authorised” notes describe earlier phases only.

### Summary

Saved the implementation brief before code. Built the selected direction in existing Astro, with four selectable stories and three-step readers, sample scoring that carries into totals, QC draft/validation/submit/reset, and an explicit local-model recovery illustration. Added the full-stack role/capability copy. Generated individual synthetic paper/roof/component assets; retained the original TapScribe product screenshot. Scoring and QC remain the same client; Plumbline is with IIIMPACT and in progress.

Generated writing index/article boards using original published LinkedIn covers and original article paragraphs. Corrected the related-reading card to a different essay. A local review page displays these boards; no importer or article publication. Original sources, prompts and evidence boundaries are documented.

### Files Touched

- `DOCS/specs/homepage-proof-of-concept.md`, `homepage-case-studies.md`, `homepage-assets.md`: build contract, case evidence, asset/publication provenance and lower-model resumption.
- Existing exploration/project/backlog/handoff/runbook docs reconciled to the selected and implemented direction.
- `astro.config.mjs`, package scripts: conditional prototype route injection and separate build/preview.
- `src/concept/`, `src/components/concept/`, `src/layouts/ConceptLayout.astro`: data, state, browser interactions and reusable rendering.
- Shared tokens, recipe registry/styles and font loader: scoped Case shelf theme; existing default theme preserved. Existing catalogue includes new recipes.
- `src/assets/concept/`: actual/synthetic source media and review boards.
- `scripts/check-concept-build.mjs`, three state tests, root `design-qa.md`; ignored screenshots/comparisons.

### Verification

- Design guard: 61 source files, zero violations. Default and concept builds pass. 20 Vitest tests, three route checks, seven guard tests pass. Catalogue build/check pass.
- Three state tests initially failed because the module was absent, then passed. Prototype-output check initially failed because Astro emitted media for omitted routes; conditional integration registration fixed the dependency inclusion. Default output now omits prototype routes and media.
- Browser verified four stories/all 12 steps, button/keyboard selection, named progress, browser history, retained selection/focus, deep/invalid hashes and skip link. Score 4→5 produces daily 16 and month 73; repeat saves do not double count, final report preserves the value.
- QC rejects unanswered checks, saves/restores draft values, accepts explicit No, preserves it in the report, locks submitted controls and resets. TapScribe simulated download → explicit retry → completion/reset works without actual downloads.
- Responsive checks at 1440/768/390/320; no horizontal overflow in checked states. Mobile actions/inputs meet 44px; contrast ratios recorded in QA. No browser console warnings/errors returned.
- Combined reference/implementation visual review corrected thumbnail height, step heading/copy and mobile action widths. Full-view and focused comparisons saved; `design-qa.md` result passed.
- Writing and component review routes opened; real shared controls work. Image generation/raster review does not establish a finished blog or full accessibility certification. No production/analytics/installed-app verification was performed in this local scope.

### Decisions

Existing Astro is retained; no second starter app. `SITE_POC=true` injects `/concept/` and its review pages, with no tracking integrations. Build output is isolated under `output/homepage-poc/build/`. The normal homepage/route architecture remains. Synthetic client illustrations are labelled; no client DB/app was run.

### Follow-ups

Built preview remains at `http://127.0.0.1:4176/concept/`, marked as a browser deliverable. James reviews it and the Writing boards. Lower-model continuation starts from the brief/handoff, not earlier rejected concepts. No commit, push, deployment, publication, spending or outbound communication.


## Story-first correction · 20 October 2026

### Summary

James clarified that the screens should not be interactive; their purpose is to expose a story about helping someone. The previous app-demo interpretation was too literal. Removed scoring inputs/save, inspection radios/draft/submit/reset and simulated model-download/retry actions. All case visuals are static. Kept story selection, chapter navigation, history and focus. Rewrote the narrative around the person’s situation, James’s help and what changed. Ben’s paper-record and small-budget context now leads his case.

### Files Touched

CaseVisual, story content, navigation controller/state, chapter reference and recipe example; removed two now-irrelevant demo business-rule tests. Added a built-output assertion rejecting forms/inputs/demo actions. Reconciled active brief, case evidence, project/backlog/handoff and QA so later models do not restore demos.

### Verification

Concept build and design guard pass, 18 Vitest tests pass, prototype-output checks pass. Browser confirms zero forms/inputs and zero buttons inside case visual regions for QC and TapScribe, while chapter/story controls work. Desktop scoring and mobile recovery captures saved under `output/homepage-poc/story-static-*`. Mobile recovery has no horizontal overflow. No public release or live changes.

### Decisions

The story is the experience. Screens are supporting evidence, not miniature usable apps. Only site/story/chapter navigation remains interactive. Writing mockup review remains separate.

### Follow-ups

Review whether a visitor can explain who needed help, why and how James helped. Do not add app demos or simulation state.
