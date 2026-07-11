# Interactive Terminal Homepage

Status: Built and locally approved by James on 2026-07-10. Public replacement remains gated by the eight-person validation test below.

## Problem

The current homepage explains James's work through a sequence of static offer sections. The copy is clear, but the visitor must read several claims, understand the relationship between leadership state, team pressure, workflow systems, AI/UX/build judgement, Tai Chi, and True Essence, then decide which route is relevant.

This makes the homepage informative but passive. It also hides the site's most distinctive behaviour: the original terminal, atmosphere themes, and reflective commands still exist in the codebase but are disabled.

The opportunity is not to restore a nostalgic command line or add a generic AI chatbot. It is to recover the terminal's essential idea: a private, responsive encounter in which the visitor can explore James's world without being sold at.

## User-Facing Outcome

A visitor should be able to arrive, express where pressure is showing up, and receive one useful, authored reflection within 60–90 seconds.

By the end of the encounter, the visitor should:

- feel James's calm, perceptive way of working rather than only read claims about it;
- recognise the connection between pressure inside a person, a team, and a system;
- understand the most relevant next path without first learning James's offer architecture;
- retain direct access to normal navigation, evidence pages, and contact;
- leave with a small shift in perception, even if they do not enquire.

## Scope

- Redesign the homepage's first encounter only.
- Preserve all existing route-backed pages as the evidence and discovery layer.
- Present one calm opening prompt with four accessible starting paths:
  - pressure in me;
  - pressure in a team or room;
  - pressure in the work, product, or system;
  - I am only exploring.
- Allow tap/click and keyboard input as the dependable controls.
- Keep the public homepage choice-based; do not require or present text or voice input.
- Return an authored reflection, a small practical next move, and a relevant route.
- Preserve selected terminal behaviours that carry James's philosophy, including `breathe`, `return`, `unlearn`, and atmospheric themes.
- Keep a visible route for visitors who prefer to browse without answering.
- Keep the interaction calm, responsive, mobile-first, keyboard accessible, and compatible with reduced-motion preferences.

## Out Of Scope

- A generic full-site chatbot or open-ended "ask me anything" assistant.
- An AI persona that claims to be James.
- Medical, psychological, therapeutic, or diagnostic claims.
- User accounts, saved conversation history, personal profiles, or cross-session memory.
- Rebuilding every route-backed page during the homepage experiment.
- Hiding navigation, proof, contact, or legal content behind the interaction.
- Sending free-text responses to an external model in the first version.
- Fully generated layouts or raw model-generated HTML.
- Releasing the new homepage publicly before the bounded interaction has been reviewed locally.

## Current Behaviour

The live homepage renders a static sequence for:

- Executive State Diagnostic;
- Stillness Under Pressure;
- Workflow Systems;
- True Essence;
- thirty years of Tai Chi and breath practice.

The underlying interaction is still present:

- `src/App.js` owns the command map, command history, suggestions, route mapping, voice recognition, and theme behaviour.
- `showTerminalUI` is currently `false`, so the terminal output overlay and input bar are not rendered.
- `src/components/Breathe.js` still provides a guided breathing cycle.
- The command set still contains reflective behaviours such as `breathe`, `return`, and `unlearn`.
- Route-backed outputs allow the interactive and conventional browsing models to coexist.

The repository history shows three useful stages:

1. `69b4b47` (2024): a full-screen terminal was the entire site. The visitor's input appeared like a private conversation over a changeable atmospheric background.
2. `2681032` and later 2025 work: the terminal became a persistent navigation layer with command suggestions, voice support, themes, and reflective commands.
3. `4c379b5` (2026): route-backed pages and a conventional homepage were introduced while the terminal was preserved behind `showTerminalUI = false`.

The design task is therefore an evolution of an existing product idea, not a new interaction pasted onto the site.

## Proposed Behaviour

### 1. Arrival

The first screen is quiet and sparse. It introduces one central observation rather than a list of services.

Candidate thought, not final copy:

> Most problems do not begin where they become visible.

The main invitation is:

> Where is the pressure showing up?

The visitor can choose a path, type a short response, or browse normally.

### 2. Recognition

The interface asks no more than one useful follow-up before producing value. It should not turn into an intake form.

The initial authored mapping is:

- **In me** → state, pace, breath, perception, and the Executive State Diagnostic.
- **In a team or room** → reactivity, communication, response space, and Stillness Under Pressure.
- **In the work, product, or system** → owner-as-glue pressure, workflow friction, software finish-line judgement, Workflow Systems, and Product Clarity.
- **Only exploring** → James's philosophy, practice, apps, books, paintings, and current work without commercial pressure.

### 3. Pause

Where it fits naturally, the visitor may be invited to take one breath or pause briefly before the reflection appears. This should demonstrate James's method without turning the homepage into a wellness exercise.

The interaction must respect reduced-motion settings and always offer a skip path.

### 4. Reflection

The visitor receives a compact, visual response containing:

- one observation that helps them see the pressure pattern differently;
- one small practical next move;
- one relevant path into the existing site;
- a direct, low-pressure human contact option.

The response should reveal rather than persuade. It should not produce a diagnosis, certainty, or a long block of generated advice.

### 5. Continued Exploration

The terminal's deeper layer remains discoverable. Visitors who type known commands can still explore themes, content, and small philosophical responses. This preserves the site's playfulness and rewards curiosity without making command knowledge a prerequisite.

## Design Principles

- **Reveal, do not convince.** The experience should feel like availability and service, not performance or persuasion.
- **Private exploration before public identity.** Let visitors begin with their own situation rather than forcing them to choose which version of James they understand.
- **One underlying pattern, several expressions.** Human state, team state, workflow pressure, and software quality are connected through perception and systems judgement.
- **Tai Chi is the felt source layer.** Steadiness, timing, softness, and space should shape the interaction without making generic wellness the commercial wrapper.
- **Language expresses intent; interface confirms reality.** Important routes and decisions remain visible controls.
- **Modern, not nostalgic.** Preserve the terminal's conversational posture and monospace restraint without imitating an old computer for its own sake.
- **Authored before generated.** Use a small library of reviewed reflections and components before adding model interpretation.
- **Subtraction is the visual strategy.** The interface should reduce noise and create one clear next move.

## Interface And Seams

The existing architecture already provides the main seams:

- the command and route maps can continue to connect interaction outcomes to existing pages;
- the output modules remain the source for route-backed evidence content;
- the current theme system can provide atmosphere without changing information architecture;
- the breathing component can be adapted as an optional moment inside the flow;
- the legacy command system can remain behind the route architecture without appearing in the homepage encounter;
- route metadata, redirects, sitemap behaviour, and public URLs should remain stable.

The homepage experience should use an explicit state model such as:

`arrival → intent → optional follow-up → pause → reflection → route`

Avoid placing all new flow logic directly into the already-large `App.js`. The implementation should establish one clear boundary for the homepage encounter while reusing the existing command and routing contracts.

## Implementation Notes

### Prototype validation gate before public replacement

The current evidence is James's strong design instinct, the distinctiveness of the original terminal, and the mismatch between the current passive homepage and the way James creates value in live conversations. There is not yet visitor evidence that this encounter will improve comprehension or enquiry intent.

Before the prototype replaces the public homepage:

1. Create exactly three visual directions grounded in the current site and original terminal. Complete.
2. Select one direction. Complete: the concentric-circle mobile direction.
3. Prototype only the first 60–90 seconds and the four authored outcomes. In progress.
4. Test it with eight people who plausibly match leadership, operator, workflow, product, or referral audiences.

Suggested evidence threshold:

- at least six of eight reach a reflection without explanation;
- at least five can describe James's connecting idea in their own words;
- at least four say the interaction helped them notice something useful;
- at least two voluntarily choose a deeper route or contact path.

If visitors are confused, feel trapped, or cannot explain what James does more clearly than after seeing the current homepage, adjust or stop before expanding scope.

### First implementation posture

- Keep all response content authored and reviewable.
- Keep the four approved choice paths as the complete public interaction.
- Add AI interpretation only after the authored interaction proves useful.
- If AI is later added, it should select from approved components or summarise intent, not invent health claims or render arbitrary code.
- Preserve a fast, direct path to every current offer and contact page.
- Use existing analytics only for a minimal event set: start, path selected, reflection reached, deeper route chosen, and contact chosen.

## Testing Plan

- Add interaction-level tests for every starting path and its route outcome.
- Verify the browse-without-answering path remains available throughout.
- Test that no text, voice, or command-hint control competes with the circle choices.
- Test keyboard-only completion, focus order, visible focus, and escape/back behaviour.
- Announce changing questions and reflections appropriately to assistive technology without creating noisy live regions.
- Respect reduced-motion preferences for breathing, theme, and transition effects.
- Check desktop and mobile layouts at the current site breakpoints.
- Confirm existing route metadata, redirects, and sitemap behaviour remain unchanged.
- Run a short moderated usability test against the validation threshold before public replacement of the homepage.

## Open Questions

- What is the smallest reflection that feels genuinely useful rather than like categorisation?
- Should `breathe`, `return`, and `unlearn` remain only as legacy command behaviours or receive a separate non-homepage discovery seam later?
- Which route should own software finish-line and AI/UX/build enquiries: the existing Product Clarity page, Workflow Systems, or a later dedicated page?
- Should the internal concept name remain “Interactive Terminal Homepage”, or should a more resonant public name emerge only after visual exploration?

## Approved Visual Direction

The homepage uses the selected warm-white, mobile-first composition with three imperfect concentric circles as the primary controls. The circles connect the three pressure layers without borrowing the waves or other marks from James's tattoo.

Opening copy is fixed for the prototype:

> Pressure rarely stays where it begins.

> It moves through the person, the room, and the work.

> Where is it showing up?

The dependable paths are `In me`, `In a team`, `In the work`, and `I am only exploring`. These visible choices are the complete homepage input.

Source visual truth: `/Users/nitro/.codex/generated_images/019f4b96-b163-7760-9499-0d18555eb323/exec-6b651932-c113-46fe-954f-45f153a343de.png`, with the approved copy above overriding the image's headline and supporting line.

## Implementation Slices

1. Opening circle encounter
   - Outcome: A visitor sees the approved copy and can choose any of the four paths on a 390 x 844 screen without horizontal overflow.
   - Test seam: React interaction test for the opening copy and labelled controls.
   - Blocked by: Nothing.
   - Notes: Use the generated ring artwork as a visual layer and real buttons as the interaction layer.
2. Authored reflection
   - Outcome: Selecting a pressure layer replaces the arrival state with one short authored reflection and a relevant next route.
   - Test seam: React interaction test for each selected path and its route action.
   - Blocked by: Slice 1.
   - Notes: Keep the response calm, compact, and non-diagnostic.
3. Choice-flow simplification
   - Outcome: A visitor reaches the authored paths through the circles without an ambiguous text field, voice control, or command hint.
   - Test seam: Component tests prove the textbox and voice control are absent while all four visible choices remain dependable.
   - Blocked by: Slice 2.
   - Notes: The legacy command architecture remains available outside the homepage encounter.
4. Responsive and accessible completion
   - Outcome: The encounter works at mobile and desktop sizes with keyboard focus, reduced motion, navigation, browse, back, and route-backed content intact.
   - Test seam: Production build, browser interaction pass, 390 x 844 and desktop captures, and design QA against the selected visual.
   - Blocked by: Slices 1-3.
   - Notes: Public replacement still requires James's local review and the usability evidence threshold above.
