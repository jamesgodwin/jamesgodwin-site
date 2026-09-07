# Product proof and enquiry

Part of [LinkedIn and website alignment](linkedin-site-alignment.md). Proposed implementation copy and acceptance criteria, prepared 6 September 2026. Backlog owns status.

Local status 7 September 2026: P1 and P2 implemented and verified. Release remains governed by the parent plan.

## Problem

`/uxui` describes product design primarily through regulation and lacks a concrete case and prominent next step. Product enquiries fall back to General Enquiry because the existing allowlist has no product intent. Contact methods appear after a large hero and repeated introduction.

## User-Facing Outcome

A founder with a product that is almost usable can understand James's practical contribution and start a correctly labelled conversation without completing a form or entering the reflective homepage. Inspecting a checked delivery example is P2, not P1.

## Scope

- Existing `/uxui` content and route presentation.
- A supported compact case in P2, using existing evidence rather than creating a case-study platform.
- `product-clarity` contact intent and a shorter shared contact layout.
- Evidence corrections on `/systems` and a stable `#client-example` anchor in P2.
- Removal of legacy `Available commands` markup from `/uxui` in P1 and `/systems` in P2. Keep the shared site-navigation footer and underlying command functionality.

## Out Of Scope

New prices, booking widgets, intake forms, free reviews, guarantees, case-study routes, client screenshots, portfolio galleries or a commitment to implement every enquiry.

## Current Behaviour

`src/outputs/uxui.js` supplies trusted HTML. `src/pagePresentation.js` has no `uxui` entry. `RoutePage` renders a presentation hero, strips the leading bold title paragraph from HTML and adds the shared footer. `ContactPage` is a React component, not an output HTML file. `contactIntent.js` currently allowlists diagnostic, workshop, workflow-system and general. The route handler reads the query when constructing `ContactPage`.

## Proposed Behaviour

### Product page structure and proposed copy

Use the current route-page visual language, type and spacing. Give `/uxui` a presentation entry and an early primary action. Keep one H1 and avoid a duplicated title in the output body.

| Element | Proposed content |
| --- | --- |
| Path label | IN THE WORK |
| H1 | Get your product working cleanly. |
| Lede | I help founders and small product teams close UX, accessibility and implementation gaps when fast-built or AI-assisted products stall. |
| Primary action | Talk about your product → `/contact?about=product-clarity` |
| Secondary action | None in P1. P2 adds **See an example** → `#work-example` only when the checked example exists. |

Body order:

1. **When the product is almost there.** “The main features exist, but people still need help getting through the work. A flow is confusing. An important state is missing. A handoff depends on someone remembering what happens next. I help make those gaps visible and work with you to close them.” These are example situations, not claims about every client.
2. **What I help resolve.** Use three short groups: UX and accessibility across real tasks; consistency and missing states in interfaces/design systems; implementation and workflow handoffs. Explain actions in ordinary language. Accessibility review does not promise legal compliance or certification.
3. **Start with one flow.** “We begin by agreeing one product journey or workflow to examine. I trace where it breaks down and set out the changes worth making first. We agree the scope before work starts, with implementation scoped separately where needed.” Proposed initial deliverable: a concise prioritised account of the observed gaps, supporting evidence and recommended next changes. No unpriced free audit, duration or guaranteed outcome.
4. **The judgement behind the work.** “Twenty years across UX, product strategy and design systems sit alongside thirty years of Tai Chi practice. That practice has shaped how I notice pressure, timing and unnecessary effort. In a product, the work is concrete: clearer flows, coherent decisions and implementation that holds together.” Treat these as experience and approach, not experimentally established causation. Link to `/about`.
5. Repeat **Talk about your product** with the same intent-specific URL. Offer `/systems` as a quieter alternative for an operational business problem.

P1 must not include an example heading, empty evidence section, placeholder copy, or a `#work-example` anchor that goes nowhere. Remove the `/uxui` `Available commands` markup in this slice. If the rendering layer already hides those inventories, this is source cleanup rather than a new visible behaviour.

Replace the existing catalogue of “Regulated Interface Design” and broad regulation assertions with this bounded explanation. No new commercial package names are required.

### Contact behaviour

- Add allowlisted value `product-clarity`, label `Product Clarity`, URL `/contact?about=product-clarity`.
- Product-specific introductory text: “Tell me what your product does, where people get stuck and what you want to improve. I respond personally.” Do not add a response-time promise to this intro or to the shared contact hero.
- Shorten the shared hero to “Start a conversation.” with lede “Tell me what is stuck, or what you would like to explore.” Keep this welcoming to diagnostics, workshops and general enquiries. Do not attach a new 24-hour promise there.
- Preserve the existing diagnostic and workshop contact sentences, including their current “within 24 hours” wording. Leave `/thank-you` copy unchanged. “No new promises” does not mean removing existing commitments.
- Place Email and WhatsApp immediately after the concise intent introduction. Keep Telephone and LinkedIn secondary. Remove redundant introductory paragraphs. Remove the second “WhatsApp me about a Workflow Audit” shortcut. Keep the main WhatsApp contact method and the Workflow System enquiry label.
- Preserve actual addresses and numbers. Keep plain existing `mailto:` and `wa.me` links in this pass. The on-page intent is context for the visitor; it is not automatically transmitted or a recorded lead. No prefilled private text or new data capture.
- At 1280 × 720 and 390 × 844, Email and WhatsApp must be visible in the initial viewport at normal zoom. At narrow widths and zoom, allow natural scrolling without overlap or clipped text.
- Unknown or malicious query values fall back to General Enquiry. Never interpolate raw query strings into HTML. Existing diagnostic/workshop/workflow intents remain valid.
- Direct URL, reload and history navigation must preserve the correct intent. General navigation to Contact must reset to general instead of inheriting a previous product intent.

### P2 evidence content

Use the dated Ben testimonial identified in the parent plan. An anonymised draft usable before identifying permission is resolved:

> For one service business, I built an operational app covering personnel scoring, quality control and project measurements. The client reported that supervisors found it easy to use and that it gave them clearer visibility into to-dos, quality control and measurement sheets. They described feeling in control of business operations for the first time.

Label this as client-reported feedback, June 2026. A public named version may use Ben's existing quote only after the reuse basis is checked. Do not include staff scores or internal screenshots. Keep this example concise on `/uxui`; link to `/systems#client-example` for the operational service context.

On `/systems`, add `id="client-example"` to the existing proof heading and replace “His supervisors use it daily” with the supported usability/visibility statement. Avoid presenting “the work that lived in his head” as a documented case before-state without separate delivery evidence. The generic owner-memory description elsewhere may remain as audience framing. Do not carry “very reasonable fee” into a new pricing promise. Preserve the R7,500 audit and existing optional care pricing.

If the source or reuse basis cannot be established, leave out the new case rather than publish a placeholder, invented result or confidential material. P1 can be demonstrated without P2, but the evidence-backed release remains incomplete until a usable example is supplied.

When the checked example exists, P2 adds the `/uxui` secondary action **See an example** → `#work-example` and the delivery-example section in one change. Do not leave a dangling control or empty section waiting for copy. Remove the `/systems` `Available commands` markup in the same slice.

## Interface And Seams

- `src/outputs/uxui.js`, `src/outputs/systems.js`: trusted copy and anchors.
- `src/pagePresentation.js`, `src/components/RoutePage.js`: hero and CTA rendering. Prefer presentation data and scoped styles over changing all pages.
- `src/contactIntent.js`, `src/components/ContactPage.js`, `src/App.js`: query-to-component routing and intent display. Verify query/history handling at the App boundary.
- `src/NewSite.css`: scope contact spacing using the existing presentation body-class seam; do not globally compress service-page heroes.
- `src/siteMetadata.js`: update `/uxui` and contact entries with P1. I2 owns the broader home/About defaults and generated-preview verification.

## Implementation Slices

### P1 Product explanation to direct enquiry

- Outcome: a direct `/uxui` visitor reads the new explanation and reaches Product Clarity contact with visible methods. There is no evidence section yet.
- Includes: product copy/hero/primary CTA; relevant route metadata; allowlisted product intent; concise shared contact presentation; existing-intent preservation; `/uxui` command-inventory cleanup.
- Test seam: start with `src/contactIntent.test.js`, then rendered `ContactPage` and route output tests. Add a focused App integration test for direct URL and general-contact reset if existing tests cannot prove the boundary.
- Blocked by: nothing. The case is omitted until P2; never show a fake placeholder, empty section or broken `#work-example` link.
- Acceptance: one H1, correct CTA URL and labelled intent; no example control or empty evidence block; useful first-screen contact actions; no new response-time promise on product/shared contact; diagnostic/workshop/thank-you promises preserved; no second workflow WhatsApp shortcut; direct reload/history behaviour; safe unknown-intent fallback; no form or automatic send; existing contact routes still work.
- Demo: open `/uxui`, explain the service in one sentence, follow the CTA, then use general navigation and verify it no longer carries Product Clarity.

### P2 Credible example across product and systems

- Outcome: a visitor sees what James built and what the client actually reported, with a working deeper link.
- Includes: source check; compact product example; **See an example** secondary action and `#work-example` added together; systems proof correction and anchor; `/systems` command-inventory cleanup; no price change.
- Test seam: render the evidence section and verify its link/anchor and contact route. Review claims manually against the testimonial rather than writing brittle tests for every sentence.
- Blocked by: P1 and availability of a public-safe example. Use the anonymised version when naming permission is unresolved.
- Acceptance: operational context is explicit; report/date are attributed; no daily-use, quantified savings, AI-rescue or accessibility-result claims inferred; anchor lands on proof; no private data; existing pricing preserved.
- Demo: product example → systems proof → workflow contact, verifying Workflow System rather than Product Clarity.

## Testing Plan

Start with `CI=true npm test -- --watchAll=false --runInBand contactIntent.test.js`. Add one failing behaviour test at a time for changed routing. Run the ContactPage and conversionRoutes families after the first slice. Use rendered tests for actions and semantics, not snapshots of all editorial prose. Browser checks prove actual layout and query navigation. Full suite/build belongs to the release candidate unless an earlier change warrants it.

## Open Questions

Ben naming/reuse and exact current delivery evidence are checked in P2. Scope and price of any actual engagement remain a later client decision. No question blocks P1's local implementation.
