# Case shelf proof of concept

Current main-site implementation and qualification: [first story, writing and aligned site](site-story-writing-build.md). Earlier prototype checkpoints below are historical. The main site now includes Ben only and three full illustrated essays.

20 October 2026. James selected the first Case shelf design and authorised a local build. His latest correction is the governing direction: **tell the story of helping someone; do not make the illustrated app screens interactive.** The earlier app-demo interpretation was rejected.

## Outcome

A visitor recognises someone who needed help, understands where they were stuck, sees James's contribution and what became possible. Screens and artefacts illustrate that story. The visitor does not operate a sample client app.

The selected target remains `output/homepage-concepts/case-study-iteration/01-case-shelf.png`: words-only opening, cream/forest palette, four story choices, Look closer and a short reader. Identity remains **Product design & full-stack development**, with UX, accessibility, front-end, back-end and deployment visible.

## Narrative structure

Each story has three chapters: **The situation → How I helped → What changed**. Keep copy concrete, brief and focused on the person or team. Show the work through static screenshots, annotated artefacts or illustrative records. No editable scores, radio buttons, save/submit actions, simulated downloads, recovery games or sample-app state.

Four stories across three projects, with [source evidence](homepage-case-studies.md):

1. **Ben's scoring workflow.** Small budget, paper records forgotten/lost, month-end tallying, a partly working AI-assisted app. James helped connect capture, totals and deployment. Supervisors can record scores and Ben can review/export totals. Commission is calculated outside the app. Current source has four categories, 0–5.
2. **The same client's quality control.** Ben needed to see what had been checked when a job was finished. James brought photos and checks into a record the office could review. Do not invent a second client or historical failure.
3. **TapScribe, James's own product.** A missing model could leave a person waiting without a clear next step. James retained the recording and provided an explanation and recovery path. Show the sequence statically. Do not portray it as client work.
4. **Plumbline with IIIMPACT, in progress.** Teams need shared design rules to reach AI-assisted implementation. James is helping connect guidance, components and checks. Synthetic material only; no completed-rollout claim.

## Acceptance

| Action | Observable result | Verification |
|---|---|---|
| Open `/concept/` | Concise identity, four stories, selected feature and contact path | Browser |
| Select a story and Look closer | Correct human situation and first chapter appear | Browser |
| Use chapter/Next/Previous controls | Copy and supporting visual change together | Browser/state test |
| Inspect any supporting screen | Static evidence; no forms, inputs or app actions | Built-output assertion and browser |
| Return to All stories or use browser history | Selection, chapter and useful focus restore | Browser |
| Open an invalid hash | Safe default story | State test |
| Read at desktop/mobile widths | No horizontal overflow; navigation remains reachable | Browser |
| Build without opt-in flag | No prototype routes/media in normal output | Build check |
| Open Writing | Review boards with original published covers; no new Essays publication | Browser |

Navigation through the narrative remains interactive. These are the only story controls. Contact remains available without completing a story. Do not add game-like completion, autoplay or swipe-only controls.

## Design and implementation

Use existing Astro, shared tokens and recipes. `SITE_POC=true` conditionally injects `src/concept/Page.astro`; build output is `output/homepage-poc/build/`. No analytics or form integrations load on prototype routes.

- `src/concept/stories.js`: source-backed narrative copy.
- `src/concept/state.js`: story/chapter URL state only.
- `src/concept/controller.js`: narrative navigation and focus only. App simulation logic has been removed.
- `src/components/concept/CaseVisual.astro`: static supporting visual compositions.
- `src/components/concept/CaseShelf.astro`, `StoryChoice.astro`: story discovery and reader.
- `src/styles/tokens.css`: scoped Case shelf theme, Manrope/Inter, cream/forest roles.
- `src/design-system/patterns.js`, `src/styles/patterns.css`: shared actions and story/chapter choices.
- `src/styles/concept.css`: composition.

Generated paper/roof/component imagery is labelled illustrative, never passed off as actual client screenshots. TapScribe uses an original product screenshot. [Asset provenance](homepage-assets.md).

## Writing

`/concept/writing/` presents the listing and article mockups for sign-off. Original published cover art and words are preserved. Do not implement the importer or publish essays before review. The broader collection/import requirements remain in [Essays plan](essays-home-and-agent-readiness.md).

## Commands and resumption

- `npm run build:concept` then `npm run preview:concept`: http://127.0.0.1:4176/concept/
- `npm run dev:concept`: live development on port 3002.
- `/concept/system/`: actual shared component reference.
- Rebuild and reload built preview after changes.

Read this brief, the case-study evidence, design-system runbook and `DOCS/next-day.md`. Continue from the selected first direction. **Do not reintroduce app demos.** Review whether the story makes James's help clear before adding more UI or technical detail.

## Implementation evidence

The original build passed its checks but included unwanted app demos. Those checks are historical, not approval of that interpretation. Current correction removes the demo forms, actions, state logic and two now-irrelevant business-rule tests. A built-output assertion now rejects app forms/inputs/actions in the story page. Current check results and browser evidence are recorded in the session log and root `design-qa.md`.

No production homepage replacement, deployment, commit, push or publication. Existing About/Contact destinations use the existing site theme. Public adoption and writing implementation remain separate scope.
