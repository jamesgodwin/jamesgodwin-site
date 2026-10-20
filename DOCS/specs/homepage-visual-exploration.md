# Homepage visual exploration

## Current applicability, 20 October 2026

Historical design exploration. James selected and deployed the Case shelf with four stories and the real writing archive. Earlier unselected-layout, pending-mockup-review and local-only statements below describe previous exploration stages. See the [documentation index](README.md) for current authority and release evidence.

## Original scope and chronological amendments

Date: 2026-10-20.
Status: James chose **The case shelf**, the first of the latest three refinements, and authorised a local proof of concept. [Implementation brief](homepage-proof-of-concept.md) now owns build scope. The earlier rounds below are historical, including their superseded approval/status language.

## Purpose

Help visitors understand how James helps when a fast-built product or workflow stalls, through a short, optional experience grounded in real work. Keep ordinary work, writing, practice/about and contact navigation available. The selected local prototype now includes a scoped theme in the existing design system; adopting it for public routes remains separate.

## Selected refinement · 20 October 2026

James first preferred the third Ben storyboard. After requesting four real stories, three further boards were generated: **The case shelf**, **The open casebook**, **The working canvas**. He selected the first, specifically the story switching and dive-in flow. Files and exact prompts are under `output/homepage-concepts/case-study-iteration/`; selected target is `01-case-shelf.png`.

The new identity explicitly includes product design and full-stack development. Four stories are scoring and QC for the same roofing client, TapScribe as James's own product, and Plumbline with IIIMPACT in progress. [Evidence and copy](homepage-case-studies.md). No generic cup/laptop hero.

Writing listing and article mockups use original published LinkedIn covers, saved under `output/homepage-concepts/writing/`. These await James's review. The local writing route is a review surface for these boards, not a published Essays implementation.

Original request, superseded in visual scope: “Show me a couple of homepage concepts that bring together my work, writing and practice, while keeping the typography and circles. Keep it local for now.”

The preceding design discussion suggested a stronger opening, more visible evidence of work, less repetitive centred stacking and a clearer place for reflection. Treat these as design hypotheses to explore, not visitor research or an approved replacement.

## Initial directions explored

These are starting points for two meaningfully different compositions, not two approved designs.

1. **Work-led personal studio.** A clear introduction and selected work lead, followed by Essays and practice. Explore a more editorial grid, selective left alignment, stronger type scale and circle artwork as a recognisable anchor. Keep the personal and reflective character visible alongside professional capability.
2. **Writing-led personal journal.** An authored introduction and featured writing lead, with selected work and practice woven into the page. Explore an open publication-like rhythm and a different balance of text and circles. Keep a direct, credible route to James's work and contact.

Both should show how all three strands fit together. The difference should be hierarchy and composition, not cosmetic colour swaps.

## Initial visual constraints, superseded for storyboard exploration

The following governed the rejected image rounds. Preserve the working implementation during exploration, but do not constrain new storyboards to these fonts, circles or action treatments.

- EB Garamond 400 for expressive headings; Karla 400/700 for prose/emphasis; IBM Plex Mono 400/500 for labels, navigation and wordmark. Keep those families and avoid extra weights.
- The existing circle artwork at `public/images/pressure-rings.png`. Its position, scale and relationship to the page can be explored. The existing reflection interaction remains working code; do not silently remove it during this concept phase.
- The restrained monochrome palette, readable prose and purposeful spacing. Prefer a few consistent actions, links and media treatments over repeated decorative cards.
- The consolidated design vocabulary: 187 base tokens, 11 typography roles, six action recipes and five loaded font/weight pairs. The [runbook](../runbooks/use-design-system.md) owns their contracts. Propose any necessary exception with its design reason; do not add speculative tokens or variants.
- Existing work offers, verified experience, contact paths and real assets. Do not invent client identities, results, testimonials, product screenshots or publication records.

Copy may be proposed for composition. Clearly identify sample essay titles or draft wording as concept material; do not import or publish private Source content. Existing public copy and assets are the first reference.

## Deliverable and review

- Current deliverable: three distinct visual storyboard approaches, each showing four screens and the clicks between them. Prioritise a concrete understanding of James's contribution over more abstract positioning copy.
- Keep artefacts local under ignored `output/homepage-concepts/`. The current boards use reconstructed UI rather than actual client screenshots; label that distinction visibly.
- Consider a sensible mobile reading order and accessible navigation while composing; image mockups do not establish responsive or accessibility acceptance.
- Ask James which direction to refine after the concepts are visible. Exploration is already authorised; do not ask again whether to begin.
- Record the selected direction and remaining questions before defining any homepage implementation. No replacement homepage code is authorised by this brief.

## Current references

- `src/components/PressureEncounter.astro`: current homepage content and circles.
- `src/components/Fonts.astro`, `src/styles/tokens.css`, `src/design-system/patterns.js`, `src/styles/patterns.css`: typography and shared design authority.
- `src/outputs/about.js`, `apps.js`, `books.js`, `taoism.js`, `uxui.js`, `systems.js`: existing public content.
- `output/design-system/standardization/final-home-1280.png` and `final-home-390.png`: current local homepage screenshots.
- `output/design-system/standardization/final-reflection-1280.png` and `final-reflection-390.png`: current interaction references.
- `output/design-system/standardization/final-apps-1280.png` and `final-books-1280.png`: supporting page references.
- Normal local preview uses port 4173; opt-in built catalogue uses port 4175. Check whether servers are running before relying on them. Commands are in the runbook.

## Sequence and boundaries

Astro migration and design-system consolidation are complete locally. Explore these concepts before building Essays. After James chooses a direction, agree its implementation scope and how Essays fits it. The [Astro, Essays and Cloudflare plan](essays-home-and-agent-readiness.md) continues to own migration, import and release requirements.

Keep PostHog continuity through subsequent implementation, including existing event names, contact tracking, pageviews, exception capture and logs. Previous local verification is recorded separately from any future layout, preview or production checks.

Terminal restoration, agent tools, opening question and Notes remain parked. Public dark-mode launch remains later work; preserve semantic colour mappings. Cloudflare remains the intended hosting destination, with no deployment, DNS changes or Netlify retirement in this exploration. No essay publication, commit or push.

Work in the existing local checkout on `main`. It contains substantial uncommitted migration and design-system changes, including the authorised pilot DMG removal. Preserve them; do not reset, recreate the migration or start from the remote branch.

## Concept review checkpoint · 20 October 2026

Two independent built-in Image Gen results were shown in this order:

1. **Personal Studio**: work-led asymmetric opening with circles beside the introduction; work offers and delivery proof precede writing and practice. Local image: `output/homepage-concepts/personal-studio.png`.
2. **Personal Journal**: writing-led introduction and essay feature; circle encounter and practice precede a compact work section. Local image: `output/homepage-concepts/personal-journal.png`.

Full prompts are saved in ignored `output/homepage-concepts/generation-prompts.md`. Both use the actual circle artwork and current screenshot references. Sample essays are labelled concept material. All additional generated wording is draft concept material, including the studio's extra context/prose; it is not approved factual copy. Existing public content remains the source for implementation.

Visual inspection confirms both show work, writing and practice without clipping the overall composition. These raster mockups suggest the requested font language but do not prove exact font rendering, token compliance, mobile behaviour, accessibility or working links. The studio introduces a filled Work button outside the consolidated outlined-action intent; refine it to the existing recipe if selected. On mobile, preserve each concept's lead strand, then stack the remaining sections; qualify circle labels and keyboard navigation during any later implementation.

Await James's choice or combination to refine. No homepage code, Essays collection, analytics, deployment or release state changed. PostHog continuity remains a later implementation requirement.

## Round two · clearer purpose, substantially less copy

James's feedback on 20 October 2026 supersedes the initial composition hypotheses. He found the first pair very wordy, could not feel clearly what he does, and requested three unique, visually stronger designs after a review of LinkedIn and Source. His supplied headline remains the positioning anchor:

> Founders work with me when fast-built or AI-assisted products and workflows stall. I close UX, accessibility and implementation gaps.

### Source review

- Live [LinkedIn profile](https://www.linkedin.com/in/jamiegodwin/) reviewed this turn: headline matches the supplied wording. About leads with product gaps and implementation, includes operational-system evidence, then explains how Tai Chi shapes judgement.
- Live Featured/activity show design-system work, a real-component design-system article, the published project-portability article, TapScribe and the product-over-line post. These provide concrete work/writing examples without invented essays.
- Source `Business/Growth Operating System.md`, sections adjacent service wedge and LinkedIn Positioning: respect the builder's achievement, retain UX/accessibility/implementation, lead with understandable outcomes. Practice is a meaningful source of judgement, not decorative wellness language.
- Source `Runbooks/LinkedIn Posts/Core Knowledge/JAMES GODWIN – LINKEDIN CANON.md` and `WRITING_STYLE.md`: plain first-person wording, real examples, preserve voice, avoid abstract philosophical filler.
- Source `Runbooks/LinkedIn Posts/Output/Posts/2026-09-24 - LI-00105 - What I Mean by Getting a Product Over the Line.md` and current publication log confirm the public title and meaning. The portability article title was verified in both log and live profile.
- Source `Business/Growth Strategy/Simple Business Systems - Ben Adam Testimonial.md` confirms client-reported operational visibility; no invented rescue case, measured saving or client screenshot used.

### Latest displayed set

Numbering below is the order the three new images appeared in chat, independent of the first pair:

1. **Over the Line** — giant practical statement, large circle artwork and brief work/writing/practice links. `output/homepage-concepts/round-two/01-over-the-line.png`.
2. **The Work Speaks** — actual TapScribe product image carries visual proof, with a short professional introduction and compact writing/practice area. `output/homepage-concepts/round-two/02-the-work-speaks.png`.
3. **An Open Index** — large personal masthead, direct introduction and three concise index rows beside the circles. `output/homepage-concepts/round-two/03-an-open-index.png`.

Prompts: `output/homepage-concepts/round-two/generation-prompts.md`. Each prompt caps authored display copy at roughly 105–110 words, excluding text inside the source app screenshot. No article import or new published essay is implied. All new headlines remain concept copy. Original two images remain saved for history, not selected work.

### Review and implementation limits

All three were visually inspected and shown. They retain the monochrome site language and requested typography direction, use the actual ring artwork as generation reference, visibly distinguish work/writing/practice, and contain much less prose. The TapScribe reference is the existing public marketing asset at `/Users/nitro/code/tapscribe-launch/public/images/product/tapscribe-private-meeting-transcript-library.webp`, labelled as James's own product. Its screenshot is not client delivery evidence or a current release qualification.

Images are raster proposals. They do not prove exact font/token fidelity, source-asset pixel preservation, accessible responsive behaviour or functional navigation. Any chosen implementation must place original assets directly and reuse the existing type/action recipes. The concepts propose opening the existing circle encounter through a compact link; that placement needs agreement before implementation. No terminal, question field, new route or replacement interaction is implemented. Mobile reading order should keep the professional statement and work access early, then writing/practice; the giant masthead must reflow without horizontal scrolling.

Next: James chooses or combines elements from this latest set for visual refinement. No homepage code, analytics or Essays changes. PostHog continuity remains required in later implementation.

## Experience reset · 20 October 2026

James rejected all three round-two concepts as feeling unprofessional and like the same idea with different layouts. He asked to set aside what has been created, find something completely fresh, and discuss inspiration, possibly a getting-started guide or click-through. The five existing mockups are rejected references, not candidates awaiting selection.

Current phase is exploration of the experience itself. Do not produce another rearrangement of the same headline/circles/link sections or ask James to select an old option. Existing typography/circle preferences should be reconsidered in that discussion rather than allowed to predetermine the next composition; no replacement brand system has been agreed.

Proposed direction for discussion: a short, optional interactive walkthrough of a real piece of James's work, revealing the starting situation, the hidden problem and the change he made. The published TapScribe recording/recovery story is one possible source to qualify before depicting states. This could demonstrate judgement with less abstract service copy. Ordinary work, writing, practice and contact access should remain direct. A guided experience must earn each click; compulsory onboarding or a generic quiz is not an accepted requirement.

Inspiration references inspected for content/structure, not visually audited or copied:

- https://linear.app/ — explains its workflow through product examples.
- https://www.joshwcomeau.com/css/interactive-guide-to-grid/ — interactive explanation as evidence of expertise.
- https://www.instrument.com/work/ — concrete projects and case-study access.

Next: discuss whether experiencing how James works is a promising basis, then storyboard a specific journey if chosen. No new images, prototype, homepage code or release action in this reset discussion.

## Storyboard exploration · 20 October 2026

This checkpoint supersedes the reset's proposed TapScribe example and next step. James requested screens and clicks and explicitly released the existing font/circle constraints. He then clarified that TapScribe could look like product promotion and did not illustrate the client problem he wanted to communicate. Ben's roofing project is the preferred real case. James asked for different approaches, not another cosmetic rearrangement.

### James's source account

In response to the question about what Ben had built and where he got stuck, James described a small budget, a daily supervisor scoring process and a paper tally that created work at month-end. Scores affected how Ben allocated commission; records could be forgotten or lost. James recalled five categories rated one to five.

His own words capture the core contribution:

> “And he tried to kind of vibe code this thing, but it was kind of working, but it it needed someone who understood how things piece together.”

This is firsthand testimony supplied in chat, not an independently measured before/after study. The exact first intervention and historical build sequence remain unestablished. Keep budget context as background, not a low-price promise.

### Current evidence and boundaries

- Read `/Users/nitro/code/roof-ops` instructions and current project/handoff documents, then inspected `app/models/score.rb`, `app/views/scores/new.html.erb` and `app/controllers/admin/reports_controller.rb`. No client app or database was run or changed.
- Current code has **four** categories (quality, productivity, compliance, teamwork), each **0–5**, summed into `total_score`. This differs from James's recollection of the original need; it may have evolved. Do not silently present five categories as the current app.
- Scores are associated with worker, project, supervisor and date. Admin reporting supports filters, totals by worker and CSV export. These are code observations, not newly executed runtime tests.
- `roof-ops/DOCS/PROJECT.md` explicitly excludes commission calculation. Explain that recorded scores and totals support Ben's commission review; do not depict automated allocation or payment, or infer a commission formula from the illustrative job amount.
- The Source testimonial dated 1 June 2026 supports personnel scoring, supervisor usability, operational visibility, timely delivery and reported owner control. It does not establish measured time savings, increased revenue or error reduction.
- All pictured app fragments are reconstructed, anonymous illustrations. No production personal data or authentic before/after screenshots are used. Headline wording remains draft copy.

### Three approaches

Displayed in this order, with each board's numbered panels indicating steps within that journey:

1. **Find your starting point.** A visitor chooses a recognisable difficulty, sees a simple workflow explanation, explores James's approach and reaches related client evidence. `output/homepage-concepts/storyboards/01-find-your-starting-point.png`.
2. **Inside the work.** A visitor explores Understand → Decide → Build & check, with an illustrative task and a concrete change/check example. Ben's quote appears as related evidence, not proof that the invented example occurred on his project. `output/homepage-concepts/storyboards/02-inside-the-work.png`.
3. **A real project, looked at closely.** James's service identity leads into Ben's daily scoring problem, the connected capture/report workflow, verified feedback and an invitation to discuss the visitor's build. `output/homepage-concepts/storyboards/03-ben-scoring-story.png`.

The first two were drafted before James supplied the scoring origin story. The third uses that account plus current code. Exact prompts live beside the images in `generation-prompts.md`.

Working recommendation, not an accepted decision: develop the third approach because a specific task makes James's contribution easier to understand. Keep the journey optional. A later refinement could show one score being recorded and then appearing in the owner's totals, without adding explanatory pages or making the visitor complete a quiz.

All three generated boards were visually inspected and displayed once. Each returned PNG is 1448 × 1086. Screens and main click annotations are legible, the real testimonial is retained, and reconstructed app screens are labelled. The third includes decorative generated desk imagery and sample dates; these are not client assets or historical evidence and should be removed/replaced in refinement. Its suggested connection between the starting states remains James's account rendered conceptually, not a historical app reconstruction.

Raster storyboards establish proposed composition and navigation only. Responsive behaviour, accessibility, actual interactions, final copy and design-system changes remain unqualified. No homepage implementation, Essays work or publication is authorised by this exploration.
