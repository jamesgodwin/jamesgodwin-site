# Homepage case-story drafts

## Current applicability, 20 October 2026

The four source-backed stories are approved and live: scoring and QC for the same roofing client, TapScribe as James’s product, and Plumbline with IIIMPACT still in progress. Their factual limits remain current; earlier draft/publication-pending labels below are historical. See the [documentation index](README.md) for current authority and release evidence.

## Original scope and chronological amendments

Date: 20 October 2026.
Status: source-backed draft copy for the selected Case shelf local proof of concept. [Implementation scope](homepage-proof-of-concept.md) is authorised; public publication copy is not yet signed off.

The [visual exploration](homepage-visual-exploration.md) owns the design review. These are four stories across three projects, with scoring and quality control explicitly belonging to the same roofing client. Names may be anonymised; do not invent a second client. TapScribe is James's own product. Plumbline is work with IIIMPACT and remains in progress.

## Shared opening and navigation

Draft opening:

> You have a build. Let's get it over the line.
>
> I help founders turn stalled, AI-assisted builds into working products.

Identity: **Product design & full-stack development**. Capability line: **UX, accessibility, front-end, back-end and deployment.** This explicit breadth follows James's latest instruction.

The opening is words only. Project artefacts supply the imagery below it. Each case has an explicit **Look closer** action and three short steps: **The situation → How I helped → What changed**. Screens are static supporting illustrations, with no editable app controls. Only story/chapter navigation is interactive. Show **Step 2 of 3**, previous/next buttons, named steps and **All stories**. Keep story selection separate from step progress. No autoplay or swipe-only navigation. A visitor can always contact James without completing a story.

Illustrative screens should be labelled and contain anonymous, coherent sample data. Replace generated text, dates, names and numeric tables before implementation. A selected raster composition is not a specification for arithmetic or a faithful screenshot of a historical build.

## Daily scores. Clear totals.

**Context label:** Roofing client · Scoring

**The situation**

> Ben had started a vibe-coded app. Daily scoring, correct totals and getting it deployed still needed to come together.

**How I helped**

> I connected daily capture to a record of the worker, job and date, then to totals Ben could review.

**What changed**

> Supervisors record scores. Ben can filter, total and export them for his commission review.

The visual follows one score from a paper sheet into the app and then the owner's report. The static visual uses coherent daily and monthly values. It supports the account of helping Ben; it is not an interactive calculation demo.

**Evidence**

- James's two accounts in this chat establish the original paper tally, forgotten/lost records, small budget, partly working AI-assisted build, calculation/deployment difficulty and his involvement in connecting it.
- `/Users/nitro/code/roof-ops/app/models/score.rb` associates scores with worker, project, supervisor and date. Current categories are quality, productivity, compliance and teamwork, each 0–5, summed into `total_score`.
- `app/controllers/admin/reports_controller.rb` supports filters, totals by worker and CSV export.
- Source `Business/Growth Strategy/Simple Business Systems - Ben Adam Testimonial.md`, received 1 June 2026, supports the exact quote: “My supervisors find the app very user-friendly.”

**Limits:** James recalled five categories scored 1–5 in the original need; current code has four scored 0–5. The story does not establish the precise original bug, deployment incident or historical intervention order. Commission allocation happens outside the app. No measured savings, revenue or pay-calculation claim.

## Proof of a job done.

**Context label:** Same roofing client · Quality control

**The situation**

> A completed job needed photos and a clear record of what had been checked.

**How I helped**

> I kept photos with each checklist section, made unanswered checks visible and let supervisors save a draft before submitting.

**What changed**

> The office can review the photos, answers and notes together, with a printable record of the inspection.

The visual pairs an illustrative roof detail with a Yes/No question, then shows a section with one unanswered question, then the submitted record. User recollection described checkboxes; current UI uses explicit Yes/No controls. This is a workflow requirement story, not an invented account of a broken earlier QC app.

**Evidence**

- James's current account establishes the finished-job photo/checklist need.
- `roof-ops/app/views/quality_control_records/_inspection_form.html.erb`: Yes/No controls, photos by section, Save draft, Submit inspection and upload feedback.
- `app/models/quality_control_record.rb`: draft/submitted states and validation requiring all questions to have answers before submission.
- `app/models/quality_control_answer.rb`: question/section text snapshots and explicit boolean answers.
- `app/controllers/quality_control_records_controller.rb`: resumed drafts, section photo association and submitted records read-only to supervisors.
- `DOCS/specs/qc-phone-pdf-download.md`: existing browser Print / Save PDF route; a server-generated mobile PDF is a deferred option.

**Limits:** No invented client, historical before-screen, safety certification, automatic pass/fail inspection, automated email or completed mobile-PDF qualification. Photos and checklist questions in the concepts are illustrative.

## Current TapScribe direction, 20 October 2026

James supplied the origin: a coach kept recording/transcription local through QuickTime, extracted audio and Python/Whisper, but the manual steps were disconnected. James authorised the third main-site story around bringing these into one Mac app, with actual screenshots. See [current build scope](site-story-writing-build.md#tapscribe-third-story-scope-20-october-2026) and [capture provenance](homepage-assets.md#tapscribe-actual-captures-20-october-2026). The recovery-state angle below remains a historical prototype reference, not the new main narrative. Local capture/transcription does not imply a later external-AI step is local.

## Local transcription, with a way back when it stalls.

**Compact entry title:** Transcription stays local.
**Context label:** TapScribe · My own product

**The situation**

> I wanted recording and transcription to stay on my Mac. In one real test, a missing model left a recording stuck on “Transcribing”.

**How I helped**

> I kept the recorded audio, made the missing model clear, and added an explicit path to download it and retry.

**What changed**

> Record locally. See what happened. Restore what is missing and transcribe the saved recording.

The most useful detailed visual is **spinner → Model missing / Download Model → Transcribe**, with the saved recording visibly retained. The current design iteration shows the broader local capture/transcript/export flow; use this specific recovery story when refining the selected case. This provides concrete evidence of UX judgement alongside local AI implementation.

**Evidence**

- James's account supplies his original local-recording need.
- `/Users/nitro/code/tapscribe/DOCS/PROJECT.md`: local capture, on-device transcription, native Library and ordinary recording files.
- `DOCS/specs/missing-model-recovery.md`: observed 30 September incident, cause of the endless spinner, retained audio, Model missing, Download Model, explicit retry, and James's 2 October installed happy-path acceptance.
- Current backlog and `DOCS/logs/2026-10-15-001-release-qualification.md` record bounded keyboard/VoiceOver/control-naming, small-window and appearance acceptance, including playback and heading corrections. These can support a later accessibility detail, not blanket compliance.
- The supplied visual reference is the existing public `tapscribe-launch/public/images/product/tapscribe-private-meeting-transcript-library.webp`. It is an illustrative sample transcript, not a client conversation.

**Limits:** This is James's product, not a rescued external client's build. Local transcription does not make later exports to external AI local. No built-in AI summaries, unqualified accuracy/performance claim or new release verification. The cause of the model folder disappearing was not proven. Do not turn the case into a download or pricing promotion.

## Plumbline main-site update, 20 October 2026

James authorised the fourth story and his I Ching website as the real test case. Main narrative now uses that site’s recorded repeated styling values, shared tokens/components and design check. Plumbline remains “With IIIMPACT · In progress”. See [implementation scope and evidence](site-story-writing-build.md#plumbline-fourth-story-scope-20-october-2026). Earlier generic/synthetic prototype narrative below remains historical; no client design-system content is published.

## AI screens, one system.

**Context label:** Plumbline · With IIIMPACT · In progress

**The situation**

> Fast-built screens can accumulate different versions of the same control. A design system needs to be usable by the people and agents building with it.

**How I helped**

> My work with IIIMPACT connects interface audits, shared components and rules with checks on what gets built.

**Current work**

> Find the drift. Agree the patterns. Make the rules reusable and checkable.

The visual uses synthetic controls with inconsistent type, spacing and states, then a reviewed component definition and consistent usage. Preserve **In progress** even if the shared step navigation calls its third step **What changed**. No client design-system assets, screenshots or source are used.

**Evidence**

- `/Users/nitro/code/plumbline/DOCS/PROJECT.md`: IIIMPACT engine/method, consultant and builder audiences, shared rules/tooling, human approval and per-client content boundaries.
- Current backlog/handoff: implemented synthetic validation, source resolution, gates, build chain and census/hygiene audit; generalisation, real-client sufficiency and several later capabilities remain open.
- `engine/packages/intake/src/census.ts`: colour, radius, spacing, type, tracking and opacity drift findings, near-duplicate colours and duplicate tokens.
- AI Ching is identified in Plumbline's current docs as an own-project dry run. Historical figures were not freshly reproduced and are omitted from these visuals.

**Limits:** Not a completed enterprise rollout, a guarantee of perfect AI output or a shipped automatic visual redesign system. Attribute the collaboration, avoid internal client/prospect details, and keep illustrations synthetic. User-requested local exploration does not publish Plumbline or client material.

## Verification for this exploration

Read source and current documents only. No Roof Ops database, client app, TapScribe recording, Plumbline audit, build or test was run. Findings above distinguish firsthand account, source behaviour and recorded acceptance. Quantified claims and invented before-states are excluded. AI Ching and TypeScoop remain possible later stories; the four requested slots are covered without adding them here.
