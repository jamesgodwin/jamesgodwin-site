# LinkedIn and website alignment plan

Prepared 6 September 2026. James requested a full local plan and intends to begin execution next week, 7–11 September. This document defines the proposed work; `DOCS/BACKLOG.md` owns implementation status. No implementation, publication, profile edit or deployment was authorised in this planning session.

## Problem

LinkedIn now explains James through practical product and workflow outcomes. The website still primarily explains leadership regulation. A founder arriving with a stalled product must translate that language before recognising the same person and service. The site has a strong visual identity and a credible Workflow Systems destination, so a bounded alignment pass is preferable to a rebuild.

## User-Facing Outcome

A visitor from LinkedIn can recognise their problem, understand James's contribution, inspect a supported example and find a direct enquiry path. A curious visitor can still encounter James's reflective, creative and Taoist work without having to identify as a buyer.

## Evidence and source authority

The following observations were made in this conversation on 6 September 2026. Recheck mutable public content before implementation; do not substitute older Source profile snapshots.

| Source | Observed evidence | Implication |
| --- | --- | --- |
| [Live LinkedIn profile](https://www.linkedin.com/in/jamiegodwin/) | Headline: “Founders work with me when fast-built or AI-assisted products and workflows stall. I close UX, accessibility and implementation gaps.” | Use the same problem and capability language on the product destination. Do not invent a new positioning category. |
| LinkedIn About | Problem, gaps, twenty years of experience, operational proof, then Tai Chi as a source of judgement | Reuse this order on About while retaining the wider personal story. |
| LinkedIn Featured | Visible items included design-system/AI work, two regulation reflections and a later real-component design-system article | Recommend a checked case, a judgement article and a clear engagement destination. Current order must be rechecked in Week 2. |
| [Homepage](https://jamesgodwin.me/) | Circle encounter is live; opening communicates pressure, person, room and work | Preserve the concept; add an explicit product route. Previous handoff saying deployment was next is stale. Exact deployed commit is unknown. |
| [Product page](https://jamesgodwin.me/uxui) | “Stabilising state first” and “applied regulation”; no specific product case or prominent enquiry CTA | This is the first implementation priority. |
| [Systems](https://jamesgodwin.me/systems) | Recognisable operational problem, fixed-scope offer, Ben quote, direct contact route | Preserve this route and existing pricing; tighten evidence rather than rewrite the offer. |
| Code inspection | Product Clarity is under About in the footer; no `product-clarity` contact intent; `public/index.html` duplicates old default metadata | Cover discoverability, intent handling and static previews, not just body copy. |
| Desktop screenshots | Browse links fell below a 1280 × 720 capture; contact methods followed a large hero | Treat as reproducible layout observations to check locally, not a completed mobile or accessibility audit. |

Canonical Source references, read for this plan:

- [Six-week programme](</Users/nitro/Library/CloudStorage/Dropbox/Source/Business/Growth Strategy/LinkedIn Six-Week Programme/Programme.md>) owns dates, marketing budget, review process and external-action boundaries.
- [Ben testimonial](</Users/nitro/Library/CloudStorage/Dropbox/Source/Business/Growth Strategy/Simple Business Systems - Ben Adam Testimonial.md>) owns the original reported outcome. Received 1 June 2026. It supports supervisor usability, visibility of to-dos, quality control and measurements, perceived control and timely delivery. It does not prove daily use, measured time savings, revenue gains or a before-state involving WhatsApp.
- Review screenshots are local supporting artifacts at `/Users/nitro/.codex/visualizations/2026/09/06/01a075f5-4584-7b42-9595-ec7f96c6706e/`: `01-home.png`, `02-systems.png`, `03-product.png`, `04-contact.png`. The written observations above remain usable if these temporary artifacts are unavailable.

## Scope

Three detailed specifications own the implementation requirements and proposed copy:

1. [Product proof and enquiry](product-proof-and-enquiry.md): `/uxui`, evidence on `/systems`, shared contact intent and contact presentation.
2. [Homepage and work discovery](homepage-work-discovery.md): homepage orientation, work reflection, navigation and responsive access.
3. [Identity and LinkedIn destinations](identity-and-linkedin-destinations.md): About, Now, metadata and the bounded Featured handoff.

## Out Of Scope

- New site, framework migration, CMS, case-study platform, open-ended chatbot, text/voice homepage input or new tracking platform.
- New services, prices, free audits, guarantees, response-time promises or a repositioning of the LinkedIn headline.
- Rewriting books, paintings, Taoism, workshops or product sites to make every expression commercial.
- Publishing client material without a checked reuse basis; introducing private Source context into public copy.
- LinkedIn posting, profile edits, contacting test participants or deploying during planning.
- Look Up. Its branch remains parked and must not be merged as part of this work.

## Proposed Behaviour

### Message hierarchy

Lead commercial destinations with the problem and practical contribution. Show evidence next. Explain the judgement and practice behind the work after the reader has enough context. Keep the homepage's philosophical opening and support it with a plain orientation sentence and direct product link.

Avoid making the buyer accept a causal theory of nervous-system regulation before understanding the service. Do not claim all product failures originate in pressure. Keep Tai Chi as a meaningful source of James's attention, timing and restraint, and as an explicit practice people can explore separately.

### Route ownership

| Visitor intention | Destination | Next action |
| --- | --- | --- |
| Product works technically but UX, accessibility or implementation gaps remain | `/uxui` | `/contact?about=product-clarity` |
| Operational knowledge depends on the owner and scattered handoffs | `/systems` | `/contact?about=workflow-system` |
| Personal practice or leadership-state help | Existing diagnostic/workshop routes | Existing intent-specific contact route |
| Understand James or explore creative work | `/about`, then existing supporting routes | Optional browsing or general contact |

Keep existing URLs and command keys. “Product Clarity” remains the navigation label. Do not rename `/uxui` for cosmetic SEO reasons.

## Implementation Slices

These are the execution order, not separate status trackers. Detailed acceptance criteria live in the child specs.

| Order | Slice | User-visible result | Depends on | Suggested work session |
| --- | --- | --- | --- | --- |
| 1 | P1 Product explanation to direct enquiry | A founder understands the work and reaches a correctly labelled enquiry with visible email/WhatsApp. No example section or broken `#work-example` link. | None | First session next week |
| 2 | P2 Credible example across product and systems | Visitors can inspect a bounded, accurately attributed delivery example. Add **See an example** and `#work-example` only once that copy exists. | P1; evidence check | Next available session |
| 3 | H1 Find product work without the reflection | Product Clarity is visible from homepage, menu and Work footer | P1 | After destination is usable |
| 4 | H2 Choose the relevant work route | Work reflection offers product and workflow destinations; circle/browse experience works across viewports | H1 | Following session |
| 5 | I1 Meet the same James on About and Now | Practical capability and deeper identity are coherent; current activity is dated and checked | P1, P2 | Before final review |
| 6 | I2 Share accurate destinations | Static and runtime previews agree; Featured recommendation links only to verified public assets | I1; P1, P2 for Featured evidence | Week 2 alignment review |
| 7 | V1 End-to-end validation and release handoff | Reviewed local candidate, test evidence and an exact release scope | P1–I2 | Before any deployment |

Each implementation slice should end in a runnable local result, a focused verification and a brief log. Do not implement all layers first and defer demonstration to the end.

### V1 acceptance and test seam

- Run the existing non-watch test suite and production build after the final changes. Inspect generated route HTML, not only the running app.
- Walk direct `/uxui` arrival → proof → product contact; homepage → work reflection → systems → workflow contact; exploration → About; menu/footer → both work routes.
- Verify reloads, query intent, browser back/forward, menu close/focus, heading structure, accessible link/button names and visible keyboard focus.
- Capture home, work reflection, product and contact at 390 × 844 and 1280 × 720. Also inspect 1440 × 900, 320px width, 200% zoom, dark mode and reduced motion. Do not force one-screen fit at the expense of readable text or reachable controls.
- Record old/new screenshots and the exact candidate revision or working-tree changes. Fix critical routing, intent, clipping and access failures before presenting deployment for approval.
- No outbound contact links need to be sent or submitted to verify their hrefs. Opening an email draft is not proof of a sent enquiry.

## Timing and programme fit

The programme runs 7 September–16 October, with its profile/destination review in Week 2, 14–18 September. Begin local work next week as James requested. Aim to have a reviewed destination ready for that Week 2 decision, without treating the dates as an automatic deployment instruction.

This is a bounded website follow-through plan requested separately by James, not a new six-week marketing deliverable. Do not silently add unlimited site work to the programme's four-hour marketing budget. Work in small sessions around paid delivery; if capacity is tight, complete P1 and P2 first and defer the wider pass. A useful destination can be reviewed independently of the homepage changes. Record actual effort and agree any schedule expansion instead of displacing paid work or recovery.

## Validation and learning

Retain the existing eight-person homepage exercise, but record that the circle site was already publicly observed on 6 September. Historical notes do not establish that the gate was passed. Do not claim deployment or validation history from the stale handoff.

Run one combined exercise on the final local candidate with eight plausible visitors, including founders/product teams, service-business/referral visitors and reflective visitors. Suggested split is four, two and two. James recruits or explicitly authorises invitations. Gather responses without coaching participants toward the desired answer.

1. Give an ordinary LinkedIn-to-site scenario and ask what James helps with, which evidence they would inspect and how they would get in touch. Record time, route and their exact language.
2. Separately ask them to try a circle and describe the connecting idea. Preserve the original thresholds: six reach a reflection unaided, five explain the connecting idea, four find something useful, two voluntarily choose a deeper path or contact. Keep prompted navigation separate from voluntary choices.
3. For the four product visitors, use a chosen directional threshold of three who can identify the product help and find the appropriate enquiry route within 60 seconds. This is a small qualitative check, not a conversion-rate estimate.
4. Revise concrete confusion before expanding scope. Failure of the circle test need not block an independently understandable product destination; it does block claiming the revised encounter is validated.

Keep measurement lean. Existing page analytics may help if route tracking is confirmed; no custom event implementation was found in the inspected source. Do not assert an existing funnel is measured. For this pass, use the participant exercise, actual enquiries and the programme's existing weekly review. A contact click is intent, not a sent message or sale. Distinguish LinkedIn-originated, LinkedIn-assisted, existing referral and unknown. Record dates of any approved site changes so the six-week readout can acknowledge mixed influences.

## Release and completion

- Local implementation complete means the acceptance criteria and appropriate checks pass and James can review the result.
- Live completion requires separate explicit deployment approval, confirmation of the actual deployed revision and a read-only smoke check of the affected URLs. No commit/push is implied by this planning request.
- Before deployment identify the existing host/deploy procedure, retain the previous revision for rollback and present changed routes, evidence limitations and test results. Do not invent a hosting migration.
- Revert only this release's changes if core routes or contact access regress, using the authorised deployment workflow. Preserve unrelated user changes.
- After a confirmed release, record date and URLs in the repository log. The programme's Week 2 review should reference that evidence; do not create another Source scorecard or publication queue here.

## Confirmed decisions

Recorded 6 September 2026 after the planning review:

1. Omit “See an example” and the example section in P1. Add both in P2 when the checked example exists. P1 must not contain an empty section, placeholder or broken anchor.
2. Do not add a response-time promise to the product enquiry or shared contact hero. Preserve the existing diagnostic/workshop sentences for this pass. Leave the existing thank-you wording unchanged.
3. Remove the second “WhatsApp me about a Workflow Audit” shortcut. Keep the main WhatsApp contact method and the Workflow System enquiry label.
4. Remove the legacy `Available commands` markup from each page as its assigned slice edits it: `/uxui` in P1, `/systems` in P2 and `/about` in I1. Keep the shared site-navigation footer and underlying command functionality.

## Open Questions

These are narrow content/release checks, not reasons to stop the first implementation slice.

- Confirm reuse basis for Ben's identifying quote before adding new placements. Default to an anonymised paraphrase if unresolved.
- Confirm current Now-page statements at execution. Do not publish the September draft with an invented “updated” date.
- Inspect existing social image assets before deciding whether their embedded text conflicts with the new metadata. Replace only if necessary, with a reviewed asset.
- The exact live deployment revision and previous eight-person results are unknown. Verify rather than assume.

## First execution instruction

“Read the startup files, then implement P1 in `DOCS/specs/product-proof-and-enquiry.md`. Start with a failing product-contact intent test, build the complete local product-to-contact journey, and show the result. Do not deploy.”
