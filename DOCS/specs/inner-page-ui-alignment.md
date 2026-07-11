# Inner Page UI Alignment

Status: Ready for implementation. James approved the new homepage as the visual source of truth on 2026-07-10. This spec plans the next bounded stage; it does not authorise a wider site rewrite.

## Problem

The new homepage now creates a distinctive, quiet encounter through editorial typography, warm-white space, imperfect circles, direct language, and a small number of deliberate actions.

The route-backed pages still use the older presentation model:

- a small centred meta label;
- a hidden `h1`;
- the page content inside one bordered white card;
- long runs of similarly weighted paragraphs;
- generic horizontal rules;
- a dense three-column footer inside the same card.

The information remains useful, but the transition from the homepage to a destination page feels like leaving the new experience and entering an older brochure site. This weakens the moment when a visitor has just become interested enough to continue.

The required change is a contained coherence pass, not a redesign of every route and not a new round of visual exploration.

## User-Facing Outcome

A visitor who selects a homepage path should arrive on a page that feels like the next part of the same conversation.

The aligned pages should:

- preserve the calm, restraint, typography, and generous space of the homepage;
- make the page purpose and next action understandable in the first screen;
- keep long-form evidence readable rather than turning it into cards or marketing blocks;
- maintain direct access to the normal site navigation and all existing routes;
- work comfortably on mobile before being expanded for desktop;
- keep every current contact method working while consolidating offer enquiries into the `/contact` destination defined by [Command Discovery And Contact Consolidation](command-discovery-and-contact-consolidation.md).

## Scope

### Primary pages

Align the five pages reached directly from the homepage encounter:

1. `/executive-state-diagnostic` (`diagnostic`)
2. `/workshops` (`workshops`)
3. `/systems` (`systems`)
4. `/about` (`about`)
5. `/contact` (`contact`)

### Conversion continuity

Also align the two pages needed to complete the primary conversion journeys:

6. `/workshop-enquiry` (`workshop-enquiry`)
7. `/thank-you` (`thank-you`)

### Shared shell

- Introduce one reusable route-page component rather than expanding the route markup inside `App.js`.
- Give the seven scoped pages an explicit presentation configuration.
- Preserve the current rendering contract for every unscoped route.
- Move the shared footer navigation out of `App.js` into its own component.
- Add semantic hero, content, action, fact, form, and footer classes to the existing CSS system.
- Preserve the current theme variables, light/dark behaviour, and image-theme compatibility.

## Out Of Scope

- Any change to the homepage copy, circle artwork, circle positioning, reflections, choice flow, or homepage navigation.
- Reusing the large concentric circles as decoration on every page.
- New ImageGen assets, photography, illustrations, icons, fonts, packages, or dependencies.
- Redesigning `apps`, `books`, `little-panda`, `taoism`, `philosophy`, `paintings`, `now`, `uxui`, or `legal` beyond receiving a safe shared-shell fallback.
- Rewriting the core offer, pricing, proof, contact information, or long-form body copy.
- New routes, route aliases, redirects, sitemap entries, or metadata changes.
- A CMS, data model, server, API, account system, analytics project, or AI integration.
- Deployment or the eight-person homepage validation test.
- A new visual ideation round. The approved homepage is the design reference.

## Current Behaviour

### Rendering

- `src/App.js` maps the current URL to a command, executes that command, and stores an output object.
- Scoped page content lives in trusted HTML strings under `src/outputs/`.
- `App.js` normalises output `h3` elements to `h2`, strips the terminal command footer for route rendering, and inserts the result with `dangerouslySetInnerHTML`.
- The visible route shell is currently written inline inside the already-large `App.js`.
- The visible page title comes from the first `<p><strong>…</strong></p>` inside each output; the real `h1` is visually hidden.
- The shared footer navigation is also declared inline inside `App.js`.

### Styling

- `.page-content-shell`, `.page-content-meta`, `.page-content-body`, and `.page-footer-nav` own the old route presentation.
- `.page-content-body` is a bordered card with uniform padding and a maximum shell width of 920px.
- Body copy already uses Karla, headings use EB Garamond, and links/actions use IBM Plex Mono. These are the correct families and should be retained.
- Forms already preserve labels, required fields, Netlify attributes, honeypots, and `/thank-you` actions.

### Stable infrastructure

- `src/siteMetadata.js` already has correct metadata for all scoped routes.
- `commandRouteMap`, `routeCommandMap`, `pageHeadingLabels`, redirects, and sitemap routes already exist.
- The homepage header, menu, wordmark, route command execution, and back behaviour already work.

## Proposed Behaviour

### 1. Shared Route Page Shell

Create `src/components/RoutePage.js` and move the route-page JSX out of `App.js`.

The component should receive:

- `command`: the normalised command name;
- `heading`: the fallback page heading;
- `content`: the trusted output HTML or React content;
- `presentation`: the optional entry from `src/pagePresentation.js`;
- `onBack`: the existing home callback;
- `isHelp`: whether help-specific styling is required.

It should render:

1. a visible `h1`;
2. an optional monospaced path label;
3. an optional lede;
4. an optional fact row;
5. an optional primary and secondary action;
6. the existing trusted body content;
7. a compact shared footer.

For commands without a presentation entry, `RoutePage` must fall back to the current information hierarchy and render the existing content safely. Do not force unfinished secondary pages into the new page-specific hero copy.

The route shell should use `main` for the page landmark. Do not nest a second `main` inside the homepage encounter.

### 2. Page Presentation Configuration

Create `src/pagePresentation.js`. It is the single source of truth for route-specific interface copy and actions. Do not scatter these values through JSX conditionals or CSS selectors.

Each scoped entry may contain:

- `pathLabel`
- `title`
- `lede`
- `facts`
- `primaryAction` with `label`, `href`, and optional external-link attributes
- optional `secondaryAction`
- optional `bodyClassName`

The configuration should contain only interface-level presentation copy. The detailed offer copy remains in `src/outputs/`.

#### Required entries

| Command | Path label | Visible title | Lede | Facts | Primary action |
|---|---|---|---|---|---|
| `diagnostic` | `IN ME` | `Executive State Diagnostic` | `A private 45-minute session for noticing how pressure changes breath, attention, and judgement.` | `45 minutes`, `$350`, `Private video session` | `Request a private session` → `/contact?about=diagnostic` |
| `workshops` | `IN A TEAM` | `Stillness Under Pressure` | `Practical regulation workshops for teams that need steadier judgement and communication when stakes are high.` | `90 minutes`, `Half day`, `Full day`, `Integration series` | `Explore a workshop` → `/contact?about=workshop` |
| `systems` | `IN THE WORK` | `Your business shouldn't live in your head.` | `Small internal systems for service businesses where the owner is still the glue.` | `R7,500 audit`, `One week`, `Fixed scope` | `Start with the contact page` → `/contact?about=workflow-system` |
| `about` | `ONLY EXPLORING` | `Regulation before strategy.` | `Thirty years of Tai Chi and breath training meet twenty years of digital product architecture.` | none | `See how I work` → `#how-i-work` |
| `contact` | `START A CONVERSATION` | `Tell me where the pressure is showing up.` | `If the work feels relevant, reach out directly. James responds personally.` | none | none; the direct contact methods are the page content |
| `workshop-enquiry` | `IN A TEAM` | `Explore a workshop.` | `This legacy route forwards workshop intent to the consolidated contact page.` | `Personal response`, `Within 24 hours` | `/contact?about=workshop` |
| `thank-you` | `RECEIVED` | `Thank you.` | `Your message has arrived. James will respond personally within 24 hours.` | none | `Return to the circles` → `/` |

Use British English and the exact apostrophes, prices, phone links, and route paths already present in the repository.

### 3. Visual Contract

The homepage is the source of truth. Apply its restraint without copying its hero composition literally.

#### Page shell

- Warm-white/background colour continues to come from `--main-bg`.
- Keep the persistent menu and `JAMES GODWIN` wordmark unchanged.
- Desktop shell: maximum width 1120px with a 760px maximum reading column, left aligned within the shell.
- Mobile shell: 24px horizontal gutters; reduce to 18px only at very narrow widths if necessary.
- First meaningful content begins below the persistent header: approximately 96px on mobile and 120–144px on desktop.
- Remove the full-page bordered card from aligned pages. The content should sit directly on the page background.
- Do not add shadows, gradients, glass effects, large radii, or decorative panels.

#### Typography

- Path label: IBM Plex Mono, 12–13px, uppercase, restrained letter spacing.
- `h1`: EB Garamond, weight 400, approximately 42px mobile and 60–68px desktop, line-height close to 1.0.
- Lede: Karla, 17–18px mobile and 20–22px desktop, maximum 620px, line-height around 1.45.
- Body: Karla, 16–17px, maximum line length 66 characters, line-height 1.6–1.7.
- Section heading: EB Garamond, 28–32px mobile and 34–40px desktop, weight no heavier than 500.
- Actions and facts: IBM Plex Mono, 13–15px.

#### Rhythm

- Hero-to-body gap: 56px mobile, 72–88px desktop.
- Body sections: 48px mobile and 64–72px desktop.
- Use one-pixel rules from `--card-border` to separate major sections.
- Do not wrap every paragraph, fact, or offer stage in a card.
- Lists should retain visible bullets and comfortable indentation.

#### Actions

- Use the homepage reflection action as the control reference: fine one-pixel border, small radius, monospaced label, no heavy fill by default.
- Minimum touch height 44px.
- Primary actions become full width on small screens.
- Text links remain underlined with a clear focus state.
- External actions retain `target="_blank"` and `rel="noopener noreferrer"` where they already exist.

#### Facts

- Render facts as a simple responsive row separated by rules or spacing, not as raised cards.
- On mobile, allow facts to wrap into two columns or a vertical list without reducing text below 13px.

#### Footer

- Create `src/components/SiteFooter.js` from the current `sharedFooterNav` links.
- Keep every current destination available.
- Present the groups as quiet navigation beneath a single top rule.
- Desktop may use three columns; mobile stacks the groups.
- The footer must feel secondary to the page action and must not sit inside a bordered content card.

#### Circle motif

- Do not repeat the full concentric-circle artwork on route pages.
- The connection to the homepage comes from path labels, typography, space, line work, and tone.
- Do not introduce waves or tattoo-derived decoration.

### 4. Page Content Requirements

The cheaper implementation model may restructure markup and remove duplicated opening lines, but it must preserve the substance below.

#### Executive State Diagnostic

- Keep the breath-under-pressure explanation, dantian explanation, audience, outcomes, price, duration, and personal response promise.
- The presentation hero owns the page title, short description, price, duration, and format. Remove duplicate opening and investment presentation from the body only when the information remains visible in the hero/facts.
- Keep the embedded diagnostic form removed and route the action to the direct-contact page.
- Route the primary action to `/contact?about=diagnostic`.
- Keep the offer explanation and investment content intact while moving enquiry capture to the contact page.

#### Stillness Under Pressure

- Keep the explanation of state before decision, training areas, practical outcomes, formats, audience, and the statement that this is operational stability rather than wellness.
- The first viewport must show the title, lede, formats/facts, and `Explore a workshop` action.
- Route new workshop CTAs to `/contact?about=workshop`; retain `/workshop-enquiry` only as a compatibility path.
- Do not turn each training topic or format into a separate card; use a clean list or definition-list rhythm.

#### Workflow Systems

- Keep the owner-as-glue problem, WhatsApp/spreadsheet examples, client quotation, three-step offer, prices, audience, experience, WhatsApp action, and contact alternative.
- Keep the client quotation near the first third of the page as proof.
- The hero owns the main title and audit facts; remove duplicates from the body only when no information is lost.
- Keep the exact WhatsApp number and external-link safety attributes already in the repository.

#### About

- Keep the link between regulation, Tai Chi/breath practice, and digital product architecture.
- Keep the four work expressions: Diagnostic, Workshops, True Essence, and Workflow Systems.
- Add `id="how-i-work"` to the relevant section.
- Present the work expressions as a quiet indexed list, not marketing cards.
- Preserve the restrained ending about applied regulation, perception, and decisions.

#### Contact

- Keep email, WhatsApp, telephone, and LinkedIn destinations exactly unchanged.
- Replace the repeated phone-image treatment with semantic contact rows: a monospaced label and a clear linked value.
- Keep the contact page form-free and retain all four direct contact methods.
- Ensure long LinkedIn and email text wraps without horizontal overflow.

#### Workshop Enquiry

- Replace the dedicated workshop form with a compatibility path to `/contact?about=workshop`.
- Do not preserve or reintroduce offer-specific form contracts.
- Keep the legacy route coherent for bookmarks and existing links.

#### Thank You

- Keep the personal-response promise.
- Make the page a short success state with one visible route home.
- The route home should return to `/` and use the wording `Return to the circles`.
- Do not add celebratory animation, confetti, or another form.

## Interface And Seams

### Files expected to be created

- `src/components/RoutePage.js`
- `src/components/RoutePage.test.js`
- `src/components/SiteFooter.js`
- `src/pagePresentation.js`

### Files expected to be modified

- `src/App.js` — delegate only the route-page branch to `RoutePage`; do not alter the homepage branch.
- `src/NewSite.css` — add the new route-page system and scope legacy rules safely.
- `src/outputs/diagnostic.js`
- `src/outputs/workshops.js`
- `src/outputs/systems.js`
- `src/outputs/about.js`
- `src/outputs/contact.js`
- `src/outputs/workshopEnquiry.js`
- `src/outputs/thankYou.js`

### Files that should not need modification

- `src/components/PressureEncounter.js`
- `src/components/PressureEncounter.test.js`
- `public/images/pressure-rings.png`
- `src/siteMetadata.js`
- `public/_redirects`
- `public/sitemap.xml`
- `package.json`

If an implementation requires changing one of these protected files, stop and explain why before proceeding.

### Content rendering contract

- All output HTML remains trusted repository-authored content.
- Do not accept or interpolate visitor-provided HTML.
- Retain the existing `h3` to `h2` normalisation until the scoped outputs use semantic headings directly.
- Remove duplicate title/lede paragraphs from scoped output strings only after `RoutePage` visibly renders the same meaning.
- Keep the terminal command footer convention intact even though route rendering strips it.

### Legacy fallback

- Every command outside the seven scoped pages must still render.
- The fallback may inherit the new shell's spacing and visible title, but its body HTML and specialist layouts must remain intact.
- Image grids, book layouts, app rows, legal lists, and inline links must not regress.

## Implementation Notes

### Execution Rules For A Cheaper Model

1. Read only `AGENTS.md`, `DOCS/PROJECT.md`, `DOCS/BACKLOG.md`, `DOCS/next-day.md`, and this spec at startup.
2. Implement exactly one vertical slice at a time.
3. Use `app-tdd-loop`: write one failing behaviour test, run the smallest test, implement the minimum, and keep it green.
4. Do not redesign or edit the homepage.
5. Do not browse the web, use ImageGen, install packages, or create assets.
6. Do not use a browser after every slice. Save browser use for the final responsive QA slice.
7. Run the focused component test after each slice. Run the complete test suite and production build after Slice 1 and Slice 6.
8. Preserve the dirty worktree. Do not reset, checkout, delete, or rewrite unrelated changes.
9. Update this spec's slice status, `DOCS/BACKLOG.md`, the dated session log, and `DOCS/next-day.md` after each meaningful execution session.
10. Stop when the current slice is green. Do not opportunistically continue into the next page.

### Suggested Agent Prompt

Use this prompt with the cheaper implementation model:

> Work in `/Users/nitro/code/jamesgodwin-site`. Read `AGENTS.md`, `DOCS/PROJECT.md`, `DOCS/BACKLOG.md`, `DOCS/next-day.md`, and `DOCS/specs/inner-page-ui-alignment.md` in that order. Implement only the first incomplete vertical slice from the spec using `app-tdd-loop`. Preserve all existing user changes and do not modify the protected homepage files. Run the exact focused tests named by the slice, update the repo handoff documents, and stop after that slice is green.

## Testing Plan

### Automated behaviour tests

`src/components/RoutePage.test.js` should prove:

- a scoped page renders one visible `h1`, its path label, lede, facts, and primary action;
- a primary internal action has the expected `href`;
- an external action retains safe target/rel attributes;
- the back control calls the supplied callback;
- trusted output content renders below the hero;
- a command without presentation configuration still renders its heading and content;
- the shared footer retains the existing route destinations;
- the diagnostic and workshop CTAs carry the correct allowlisted intent to the contact destination.

Add small configuration tests only if they protect a real rule, such as ensuring all seven required commands have presentation entries. Do not test CSS class implementation details more deeply than necessary.

### Regression checks

- Existing `PressureEncounter` tests stay green without modification.
- Existing homepage opening copy remains unchanged.
- Direct route loading and browser back/forward continue to work.
- `src/siteMetadata.js`, redirects, and sitemap remain unchanged.
- Secondary outputs still render through the fallback.

### Commands

Focused loop:

```sh
CI=true npm test -- --watchAll=false src/components/RoutePage.test.js
```

Full verification after Slice 1 and Slice 6:

```sh
CI=true npm test -- --watchAll=false
npm run build
git diff --check
```

### Final browser QA only

Use one browser session after all implementation slices are green.

Check at 390 x 844:

- all seven scoped pages;
- no horizontal overflow;
- title, lede, and primary action visible without confusing hierarchy;
- facts wrap without clipping;
- direct contact rows fit and long values wrap cleanly;
- contact links wrap;
- footer stacks cleanly;
- keyboard focus remains visible.

Check at 1280 x 800:

- the reading column is calm and not excessively wide;
- the shell aligns with the homepage header and wordmark;
- body sections retain readable rhythm;
- the footer is secondary rather than visually dominant.

Check one scoped page in dark mode and one image theme. Confirm there are no browser console errors. If browser tooling is unavailable, report visual QA as not run; do not claim completion from build success alone.

## Implementation Slices

1. Diagnostic proves the shared route shell
   - Status: Pending.
   - Outcome: `/executive-state-diagnostic` uses the new visible hero, facts, contact action, editorial body, and compact footer while every other route still renders through a safe fallback.
   - Test seam: Create `RoutePage.test.js`; prove the visible heading, configured hero, contact intent, back callback, trusted content, footer links, and legacy fallback.
   - Blocked by: Nothing.
   - Notes: Create `RoutePage.js`, `SiteFooter.js`, and `pagePresentation.js`; move only the route branch and footer out of `App.js`. Run the focused test, full suite, build, and `git diff --check`.
2. Team journey aligns from interest to enquiry
   - Status: Pending.
   - Outcome: `/workshops` routes to the shared direct-contact destination and `/workshop-enquiry` remains a coherent compatibility path.
   - Test seam: Add workshop contact-intent and legacy-route assertions to `RoutePage.test.js`.
   - Blocked by: Slice 1.
   - Notes: Do not reintroduce an enquiry form. Do not use a browser yet.
3. Workflow Systems becomes the work-path destination
   - Status: Pending.
   - Outcome: `/systems` opens with the approved work-path label, clear audit facts, proof, and working WhatsApp/contact actions without card-heavy presentation.
   - Test seam: Assert the configured external primary action retains its exact URL, target, and rel attributes; keep a content assertion for the client quotation.
   - Blocked by: Slice 1.
   - Notes: Preserve all prices and the current telephone number. Do not rewrite the offer.
4. About continues the exploratory path
   - Status: Pending.
   - Outcome: `/about` feels like a calm continuation for a curious visitor and exposes the four expressions of James's work without forcing a commercial decision.
   - Test seam: Assert the exploratory path label, title, lede, `#how-i-work` action, and four work links/content labels.
   - Blocked by: Slice 1.
   - Notes: Use an indexed editorial list, not four cards. Keep True Essence external.
5. Contact and success state close the journey
   - Status: Pending.
   - Outcome: `/contact` presents four clear direct contact methods with intent-aware context, and `/thank-you` remains a short legacy success state with a route back to the circles.
   - Test seam: Assert exact email, WhatsApp, telephone, LinkedIn, and home destinations; assert external-link safety attributes where relevant.
   - Blocked by: Slice 1.
   - Notes: Remove decorative contact icons only from the scoped contact markup; do not add a form.
6. Responsive, theme, and legacy completion
   - Status: Pending.
   - Outcome: All seven scoped pages pass mobile/desktop QA, dark/image-theme checks, and the unscoped routes retain their specialist layouts.
   - Test seam: Full test suite, production build, `git diff --check`, one bounded browser session, and console inspection.
   - Blocked by: Slices 1–5.
   - Notes: Fix P0/P1/P2 issues only. Do not expand into redesigning secondary pages. Record any small secondary-page polish as backlog evidence instead of implementing it.

## Definition Of Done

- All seven scoped pages use the aligned route-page system.
- The five homepage destination pages feel like a continuation of the homepage rather than a separate brochure.
- Diagnostic and workshop CTAs reach the contact destination with the correct intent.
- All current contact methods and route actions work.
- The homepage component, copy, circle-choice flow, artwork, and mobile composition remain unchanged by inner-page work.
- All unscoped routes still render.
- Automated tests pass.
- Production build succeeds and route metadata is generated.
- `git diff --check` is clean.
- Final mobile and desktop browser QA is completed once, with no P0/P1/P2 issue or console error remaining.
- Backlog, session log, and next-day handoff reflect the completed slice accurately.

## Open Questions

None block implementation. The plan deliberately resolves the current design choices:

- the homepage remains untouched;
- no new visual concept is required;
- the large circles remain exclusive to the homepage;
- the seven scoped pages receive custom presentation;
- secondary pages receive only a safe fallback shell;
- browser use is deferred to one final QA session to reduce credit use.
