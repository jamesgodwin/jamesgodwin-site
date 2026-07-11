# Command Discovery And Contact Consolidation

Status: Implemented on 2026-07-11.

## Problem

The homepage voice control asks visitors to grant browser permission, understand recognition state, and review a transcript before receiving value. That interaction is technically expensive and feels clunky beside the site's simpler typed encounter.

The text field also implies open-ended understanding while only mapping a small keyword set to the same authored outcomes already available through the circles. This creates more ambiguity than value.

Enquiry intent is also split across embedded diagnostic and workshop forms while `/contact` currently offers only direct contact links. This creates multiple conversion contracts and makes the route a visitor should use depend on which offer page they happened to enter.

## User-Facing Outcome

A visitor chooses a clear homepage path through the circles without a microphone or text field. The useful and playful legacy commands remain part of the underlying command architecture but are not presented as a primary homepage interaction.

Every offer routes to one contact page. That page carries the visitor's enquiry context and presents direct contact options without a form.

## Scope

- Remove the homepage microphone, speech-recognition hook, voice states, voice tests, and voice-specific styling introduced by the retired implementation.
- Keep circle choices, reflections, and normal browsing.
- Remove the homepage text field, keyword classifier, and typed-command hint.
- Keep `breathe`, `return`, and `unlearn` in the legacy command architecture without surfacing them in the circle encounter.
- Remove public `Available commands` inventories from the route UI; normal navigation remains the discovery mechanism.
- Replace embedded diagnostic and workshop enquiry forms with links to `/contact` carrying a stable enquiry intent.
- Retain email, WhatsApp, phone, and LinkedIn on the contact page.
- Route all on-site offer and contact CTAs through `/contact` rather than exposing direct-message shortcuts on other pages.

## Out Of Scope

- Removing the terminal command architecture or hidden commands.
- Showing the full command list on the homepage.
- Turning command hints into a carousel, animated tutorial, modal, tooltip sequence, or onboarding flow.
- Adding AI, speech recognition, chat, or server-side classification.
- Changing offer positioning, pricing, route metadata, or long-form evidence except where CTA copy must point to `/contact`.
- Adding a replacement contact form.

## Current Behaviour

- Slice 1 of the voice-input plan added a speech hook and visible starting, listening, and review states.
- The homepage previously accepted typed natural language and exact command names, but the field duplicated the circle choices through a limited classifier.
- `/executive-state-diagnostic` and `/workshop-enquiry` each own separate Netlify forms.
- `/contact` presents email, WhatsApp, phone, and LinkedIn without a form.
- Workshop CTAs route to `/workshop-enquiry`; diagnostic conversion happens in-page.

## Proposed Behaviour

### Voice retirement

Remove voice completely from the public interface and code path. Do not leave a disabled microphone or browser-support message.

### Command discovery

Do not replace the removed input with a command toolbar or another instruction layer. The circle choices are the complete homepage interaction; legacy commands may remain available through existing non-homepage command seams.

### Contact consolidation

Offer CTAs route to `/contact` with an allowlisted intent value such as:

- `diagnostic`
- `workshop`
- `workflow-system`
- `general`

The contact page converts that value into a human-readable enquiry type. Unknown or missing values fall back to `general`; raw query text must not be rendered into trusted HTML.

Direct contact methods remain visible on `/contact` so visitors can choose the lowest-friction channel there.

## Interface And Seams

- `PressureEncounter` owns circle selection and authored reflections only.
- `App.js` continues to own command execution and route changes.
- Contact intent should be parsed through a small allowlist before presentation.
- Query-derived values must be inserted through a safe React seam or mapped to static strings.
- Remove the dedicated `workshop-enquiry` conversion path from primary CTAs. The route may temporarily redirect to `/contact?about=workshop` for compatibility before later removal from metadata and sitemap.

## Implementation Notes

- Remove both voice and text-input paths without changing the approved rings, headline, or primary interaction hierarchy.
- Consolidate enquiry routing only after the contact page has a tested direct-contact replacement.
- Preserve existing external contact links and do not silently discard old bookmarked enquiry URLs.
- Update the inner-page alignment implementation to present the direct contact methods clearly without reintroducing offer-specific or shared forms.

## Implementation Slices

- Slice 1. Completed, then simplified further on 2026-07-11. Removed the public voice path, speech hook, text composer, local classifier, and typed-command hint so the homepage relies on its circle choices.
- Slice 2. Completed. Replaced the dedicated diagnostic and workshop forms with one `/contact` destination using allowlisted `about` intents, direct contact methods, and `/workshop-enquiry` compatibility routing.

## Testing Plan

- Homepage tests prove there is no microphone control, textbox, or typed-command hint.
- Every circle choice and the exploratory path still reach the correct authored reflection.
- Diagnostic and workshop CTAs resolve to `/contact` with the expected allowlisted intent.
- Contact intent preselects the correct human-readable enquiry type.
- Missing or unknown intent falls back safely to general contact.
- Email, WhatsApp, phone, and LinkedIn remain reachable.
- Legacy `/workshop-enquiry` navigation has a tested compatibility path.
- Run the full test suite, production build, and `git diff --check` after the final slice.

## Resolved Decisions

- The homepage does not surface commands; the circles and exploratory option are the complete choice interface.
- The public route UI does not print a legacy command inventory.
- All on-site contact and enquiry CTAs route to `/contact`; direct email, WhatsApp, phone, and LinkedIn links live on the contact page itself.
