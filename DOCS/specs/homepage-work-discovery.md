# Homepage and work discovery

Part of [LinkedIn and website alignment](linkedin-site-alignment.md). Backlog owns status. This spec supersedes conflicting product-discovery and one-screen-fit details in the earlier interactive homepage brief; its circle concept and validation thresholds remain relevant.

Local status 7 September 2026: H1 and H2 implemented. Automated focus/navigation checks pass; key responsive captures are recorded under `output/playwright/`. The combined visitor exercise remains pending.

P3 refinement accepted later on 7 September: the homepage H1 is now “Products and workflows, working cleanly.” It leads with the LinkedIn-aligned UX, accessibility and implementation promise, followed by Product Clarity and Workflow Systems links. “Pressure rarely stays where it begins” now introduces the retained circle experience as a deeper reflective layer. This supersedes the earlier requirement to keep pressure as the opening H1 or fit the entire commercial and reflective experience into one screen. Natural scrolling is intentional; accessibility, narrow-width and focus requirements remain.

Post-review refinement on 7 September: each work link now retains its service name and adds a plain description of the work. A compact recent-delivery statement links to the checked workflow-system example before the reflective section. This uses the existing typography and link treatment rather than introducing a separate case-study card.

## Problem

The homepage does not plainly identify James's product capability. The work reflection routes only to Workflow Systems. Product Clarity sits among secondary menu pages and under About in the footer. At the observed 1280 × 720 viewport, exploration and browse links fell below the first screen.

## User-Facing Outcome

A LinkedIn visitor can find product help immediately. Someone using the circles can choose product or operational workflow help after one reflection. Curious visitors retain unforced exploration.

## Scope

Orientation copy, direct product navigation, menu/footer ordering, two work destinations and responsive/accessibility adjustments using existing styles, artwork and routes.

## Out Of Scope

New homepage section stack, replacement artwork, chatbot, text/voice input, new question step, new Work index route, rewriting personal/team reflections or removing creative routes.

## Current Behaviour

`PressureEncounter` owns local authored reflections and calls `onNavigate(command)` or `onBrowse()`. Browse opens the App menu. `App.js` defines menu order/labels; `SiteFooter` has grouped links. The rings use decorative artwork with actual buttons. Preserve that separation.

## Proposed Behaviour

### Opening copy and order

Retain “Pressure rarely stays where it begins.” and “It moves through the person, the room, and the work.” Add one orientation sentence below them:

> I help founders and teams get products and workflows working cleanly.

Place a visible text link **Explore product work** to `/uxui` immediately below this sentence, before “Where is it showing up?” and the rings. Keep the three ring choices, then “I am only exploring” and “Browse without answering.” These last two retain distinct behaviours: authored exploration and navigation respectively.

The product link is ordinary navigation, not a fifth reflective choice. Prefer a genuine anchor so it can open in a new tab. Use the existing text-link styling, not another oversized CTA or new card.

### Menu and footer

- Put Product Clarity first and Workflow Systems second in the main menu, followed by the existing diagnostic/workshop entries. Preserve the remaining groups and destinations.
- Put Product Clarity first and Workflow Systems second under footer Work, followed by diagnostic, workshops, True Essence and Apps. Remove Product Clarity from About to avoid duplication.
- Keep command `uxui`, label `Product Clarity` and URL `/uxui`.
- Browse must open the menu with meaningful keyboard focus. Escape closes it and restores focus to the invoking control. Verify this instead of assuming the current menu already provides it.

### Work reflection

Retain heading “When the system holds pressure, people become the workaround.” Proposed body:

> A product can technically work while people still struggle to use it. A business can keep moving because one person remembers every handoff. Both are reasons to look at how the work is structured.

Proposed next move:

> Name one task that needs an explanation, a workaround or someone chasing it through.

Actions, in order:

1. **Explore Product Clarity** → `uxui` / `/uxui`.
2. **Explore Workflow Systems** → `systems` / `/systems`.
3. **Talk to James** → general Contact, as the visitor has not selected a service.
4. **Begin again** → opening.

Make the first two clearly legible route choices; keep contact/reset visually quieter. Preserve the other three reflection outcomes.

### Layout and accessibility

- Target the complete opening at 1280 × 720, 1440 × 900 and 390 × 844 at normal zoom. Adjust ring size and vertical gaps before reducing text. Confirm added orientation does not push browse farther down.
- Prefer body text at least 16px. Do not shrink labels into unreadability to meet a screenshot target.
- At 320px width, 200% zoom, large text or shorter heights, allow natural vertical scroll. No horizontal overflow, fixed-height clipping, covered controls or overlapping ring targets.
- Aim for comfortable 44px touch targets. Interactive regions must match visible controls and not steal clicks from adjacent rings.
- Visible focus and logical Tab order are required. After choosing a reflection, focus its heading/container or an appropriate action; Begin again returns focus to the initiating choice. Check that the polite live region does not double-announce the result.
- Preserve dark-mode contrast and reduced motion. No new animation is needed.

## Interface And Seams

`src/components/PressureEncounter.js`, `src/App.js`, `src/components/SiteFooter.js`, scoped `src/NewSite.css` rules. Use existing command and route contracts; do not add a URL or duplicate a new route registry.

## Implementation Slices

### H1 Find product work without the reflection

- Outcome: product work is reachable from opening, menu and Work footer.
- Includes: orientation/link, navigation order and first responsive check of the changed opening.
- Test seam: rendered PressureEncounter/SiteFooter tests and focused App menu integration for Browse/Escape/focus if missing.
- Blocked by: P1, so the destination and enquiry route are useful first.
- Acceptance: no reflection required; no fifth circle; all existing destinations retained; Product Clarity grouped under Work; readable opening with reachable browse.
- Demo: homepage → product link; return → Browse → Product Clarity; footer → Workflow Systems.

### H2 Choose the relevant work route

- Outcome: the work reflection serves both audiences with dependable keyboard and touch navigation.
- Includes: revised work body/actions, focus after state changes, remaining height/zoom/dark corrections.
- Test seam: PressureEncounter tests for both route callbacks, retained other paths, Begin again and general contact; browser checks for actual focus and geometry.
- Blocked by: H1.
- Acceptance: two correct destinations; general contact does not infer product intent; no extra question; no clipped actions; decorative rings remain hidden from assistive technology; meaningful focus and reduced-motion behaviour.
- Demo: keyboard opening → work → product, then workflow; reset and show restored focus.

## Testing Plan

Begin with `CI=true npm test -- --watchAll=false --runInBand PressureEncounter.test.js`. Update only assertions changed by the new behaviour. Reproduce the shorter desktop observation before claiming a fix. Capture opening and work reflection at desktop/mobile sizes and inspect zoom, keyboard focus and narrow scrolling. Screenshots alone do not establish accessibility compliance.

## Open Questions

If readable complete-screen fit proves impossible at a target size, keep the early product link and allow natural scroll. Show the actual trade-off to James; do not redesign the encounter to satisfy a rigid screenshot target.
