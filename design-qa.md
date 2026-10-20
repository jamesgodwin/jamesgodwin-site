# Main website qualification

Date: 20 October 2026. Final local result: passed; James's visual/content review remains open.

The current main website implements the selected Case shelf direction with Ben only, a real writing index, three full essays and aligned existing pages. Source boards: `output/homepage-concepts/case-study-iteration/01-case-shelf.png`, `writing/01-writing-index.png` and `writing/02-writing-article.png` under the same concepts directory. The first is 1448×1086; comparisons use the relevant panels rather than treating a multi-screen storyboard as one viewport.

Actual captures are under `output/site-build/`: home-desktop, story-result, writing-desktop, article-desktop, about-desktop, home-mobile, writing-mobile, article-mobile, contact-mobile, about-mobile, books-320 and story-320 (JPG). Desktop CSS viewport 1440×1000, mobile 390×844 and narrow checks 320×740, density 1. Full-page screenshots extend beyond viewport height.

Reviewed combined images `comparison-home.jpg`, `comparison-writing.jpg` and `comparison-article.jpg`. Home compares the source opening with the actual top 800px, scaled to 720px panels. Writing source crop x29/y54/w1034/h998 compares with actual x100/w1240/top1450. Article source x26/y48/w1002/h874 compares with actual x100/w1240/top1400. Full actual desktop/mobile captures and focused article/contact mobile tops were also inspected.

Five fidelity surfaces checked: cream/forest palette and quiet borders; Manrope/Inter hierarchy and serif long-form reading; shared spacing and responsive composition; original article imagery/static story records; native navigation/action treatments and keyboard focus. Intentional differences: one story instead of four, explicit full-stack positioning, original cover aspect ratios, complete site footer and real source article bodies. No interactive app simulation.

Iterations corrected overly wide article headings/covers, writing-index spacing and unnamed image links. Article header/body now have a readable 760px maximum; cover has a separate 900px maximum. Mobile header links remain visible. No outstanding actionable layout issue was found in the reviewed views. Existing generic social artwork is retained; individual articles use original covers.

All 16 internal footer destinations, main story/writing journey, chapter history/keyboard focus, skip link, contact intent and aliases were exercised. No horizontal overflow in checked views; no console warnings/errors. Automated qualification and exact limits are in `DOCS/specs/site-story-writing-build.md`. No production deployment or production acceptance is implied.

## Historical prototype qualification

The following entries describe earlier prototype states. They do not override the current main-site scope.

# Current story-first correction QA

Date: 20 October 2026.
Final result: passed

James’s latest direction supersedes the app-demo interpretation below. The experience tells the story of helping someone. Screens are static supporting illustrations. Only site/story/chapter navigation is interactive.

Source visual truth: `output/homepage-concepts/case-study-iteration/01-case-shelf.png` (1448×1086 storyboard), amended by James’s explicit narrative correction. Current implementation captures: `output/homepage-poc/story-static-opening.jpg` and `story-static-desktop.jpg`, CSS viewport and pixels 1440×1000, density 1. Mobile captures `story-static-mobile.jpg` and `story-static-scoring-mobile.jpg`, 390px CSS/pixel width, density 1.

Combined full-view comparison: `output/homepage-poc/comparison-static-story.jpg`, source chapter panel crop x25/y604/w680/h438 beside current implementation, both scaled to 720px wide. Current full-size desktop/mobile captures were also opened to read the supporting records and controls. No invented device art or interactive form is needed to explain the story.

Required surfaces: Manrope/Inter typography and cream/forest semantic tokens retained; shared spacing, panels and chapter controls retained; original/synthetic raster assets and their labels preserved. Copy now leads with Ben’s paper-record difficulty, James’s help and the resulting workflow. QC and local transcription are described through the person’s need. Chapter wording is The situation / How I helped / What changed.

Current checks: concept build/design guard, build isolation and 18 tests pass. Browser shows zero forms/inputs and zero buttons within case visual regions for scoring, QC, TapScribe and Plumbline. All four stories and chapter controls were exercised; 390px scoring/recovery had no horizontal overflow. Console returned no warnings/errors. The app simulation state and its two tests were removed. Writing boards remain pending review.

No actionable P0/P1/P2 findings for this correction. No deployment or publication. Earlier visual comparisons and app-demo qualification below are historical and do not authorise reintroducing that behaviour.

## Superseded interactive-build QA

# Case shelf prototype QA

Date: 20 October 2026.
Historical result: passed

## Visual truth and capture

- Source: `output/homepage-concepts/case-study-iteration/01-case-shelf.png`, 1448×1086 storyboard.
- Implementation: `http://127.0.0.1:4176/concept/`, local built Astro output.
- Desktop CSS viewport 1440×1000. Screenshots are 1 image pixel per CSS pixel. `desktop-home.jpg` is 1440×1038 full-page; `desktop-scoring.jpg` is 1440×1000.
- Source home panel crop: x25/y40/w681/h513; source scoring step crop: x25/y604/w680/h438. The source is a four-panel storyboard, not a 1440px browser screenshot. Remove its canvas, labels and click annotations before comparing.
- Combined comparisons in `output/homepage-poc/comparison-home.jpg` and `comparison-scoring.jpg`: source panel and implementation content crop each scaled to 720px width, source left, implementation right. This is a composition/typography comparison, not a pixel-diff assertion.
- Focused readable controls comparison: `output/homepage-poc/comparison-controls.jpg`. Source score controls/report and implemented live inputs/totals are together in one image.
- Responsive captures: `mobile-home.jpg` 390×1495; `mobile-scoring.jpg` 390×1785; `tablet-scoring.jpg` 768×1024. Also checked 320×740 CSS viewport for scoring, home, inspection and recovery.

## Findings and comparison history

1. **P2, fixed: story thumbnail height overrode the recipe.** Initial generic image rule expanded the four cards, pushing Look closer down. Evidence `desktop-before.jpg` and `comparison-before.jpg`. Lowered the reset selector specificity; 100px desktop / 64px small-screen recipe heights now apply. Re-captured and compared in `comparison-home.jpg`.
2. **P2, fixed: step-two heading and explanation were too tall.** The initial two-line heading and longer copy weakened the compact walkthrough. Restored one natural heading and “I connected daily capture, reporting and deployment.” Re-captured in `desktop-scoring.jpg`, `comparison-scoring.jpg`, and the controls comparison.
3. **P2, fixed: mobile progress actions had inconsistent widths.** Legacy outline recipe expanded Previous while Next stayed short. Both actions now fill the row below 700px; tablet/desktop use balanced auto widths. Final `mobile-scoring.jpg` and `tablet-scoring.jpg`, with DOM width checks, confirm the correction.
4. **P1 behaviour, fixed: saved sample values did not carry into the next panel.** Scores now persist through the page journey, including repeat saves without double-counting. QC drafts restore, No answers remain No in the final record, submitted controls lock and Reset example restarts the sample. Verified in the actual browser, not inferred from source.
5. **P1 isolation, fixed: omitted routes still emitted media in a normal build.** A failing built-output assertion caught Astro copying imported media. Conditional route injection now prevents compilation of the prototype dependency graph in default builds. The same check passes after the fix.

No actionable P0/P1/P2 findings remain for the local demonstration scope.

## Required fidelity surfaces

- **Fonts and typography:** Manrope 700 headings and Inter 400/600 body/controls are explicitly loaded. Computed heading family is Manrope; visible hierarchy and weight match the selected direction. The storyboard has no declared CSS viewport, so its typographic scale is interpreted responsively. The first headline keeps its two-line treatment; the scoring change heading fits one line on desktop and wraps cleanly on mobile. Georgia is deliberately confined to the testimonial, matching the source's serif quote.
- **Spacing/layout:** Four-selector shelf, selected feature, optional reader, three-panel scoring explanation and named progress are retained. Mobile stacks the explanation into readable sections with normal vertical scrolling. No horizontal overflow at 320, 390, 768 or 1440 in the checked states. 44px actions and input targets were measured.
- **Colour/tokens:** Ivory, forest and muted grey-green come from the scoped shared token theme. Calculated ratios: body/canvas 14.09:1, muted/canvas 5.52:1, white/forest action 9.81:1. Decorative borders are not the only selected or interactive cue. Native focus remains visible.
- **Images:** Paper, roof and synthetic component artwork are individual generated raster assets, not CSS/SVG art. TapScribe uses the original public product screenshot. Crops are sharp at the displayed sizes. Writing boards use supplied published covers. All reconstructed imagery and sample-data stages are identified.
- **Copy/content:** Full-stack identity and capability line follow James's latest request. Cases distinguish the same roofing client, own product and work with IIIMPACT in progress. Current source arithmetic replaces invented storyboard names/numbers. Commission remains outside the app. No quantified business outcome or completed Plumbline rollout is claimed.

Intentional differences: working form/report UI replaces the storyboard's non-interactive phone bezel and ambiguous table; the original paper artwork remains a raster asset. Current score values and real save behaviour communicate the connection. Source user amendments add the full-stack identity, explicit skills and a direct contact path. The desktop story thumbnails use detail crops. These are bounded implementation/content decisions, not claims of pixel-perfect replication.

## Interactions and accessibility

Browser-tested: all four story selections and 12 narrative steps; named step/Next/Previous; disabled first Previous; All stories selection/focus; keyboard Enter selection; browser Back/Forward; direct/invalid hashes; skip link retaining reader state and focusing main; 4→5 score change producing 16/73; repeat save; final report continuity; QC missing-answer rejection, draft restore, explicit No, submit lock and reset; TapScribe download/retry/reset illustration; writing navigation; system-reference selection and progress examples.

Browser console errors/warnings: none returned in the tested tab. Reduced-motion rule exists and no automatic motion is used. This is bounded keyboard/semantic/contrast/responsive qualification, not a full screen-reader or production accessibility certification.

## Follow-up polish and limits

- P3: James may choose a stronger headline scale or different artwork crops after using the live prototype.
- Writing listing/article are raster proposals awaiting sign-off; their review page is not a finished responsive blog.
- Sample state lasts for the current page session. Reload resets it. No backend, actual download, payroll or stored inspection data.
- No installed-app qualification, conversion research, analytics verification, production publication or deployment is implied.

## Implementation checklist

- [x] Correct shelf height and headline rhythm; repeat combined visual comparison.
- [x] Verify final mobile/tablet action sizing.
- [x] Verify arithmetic, recovery and cross-step data continuity.
- [x] Verify default-build exclusion, including media.
- [x] Keep preview open and save the lower-model handoff.
