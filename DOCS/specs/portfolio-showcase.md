# Portfolio showcase

Execution planning, 19 November 2026. James selected the slider, retained the existing “get it over the line” service message, and chose sliding image cards with subtle selection. He then selected the artwork underlay and requested desktop/mobile examples, a brief, specs and backlog work so execution can begin. [App composition](assets/portfolio-showcase/04-slider-thumbnail-cards.png); [selected artwork treatment](assets/portfolio-showcase/07-art-underlay.png). Product implementation has not started; publication is not authorised by this plan. The backlog owns work status.

## Problem

James feels the homepage shows too little of the applications and client systems he has built. The opening roofing story makes his practice appear narrower and more basic than the body of work supports. He wants more real screens, short stories and optional deeper pages.

## User-facing outcome

A visitor should quickly see both range and depth: independent Mac, mobile and web products alongside systems built for working businesses. They should understand what James contributed, see something real, and choose a project to explore or a way to contact him.

James confirmed that helping founders get a build over the line remains the primary message. His own products provide evidence of capability beneath that promise. The earlier proposed maker-first headline is superseded. Keep the existing headline:

> You have a build.
> Let’s get it over the line.
>
> I help founders get fast-built and AI-assisted products and workflows ready for real use.
>
> Product design, accessibility and full-stack development, through to deployment.

The supporting sentence adds “and workflows” to reflect LinkedIn; it remains draft wording. The current hero's promise and commercial emphasis are established requirements, not open positioning alternatives. Primary action: “Talk about your product”.

### Live LinkedIn alignment

Inspected [James's live profile](https://www.linkedin.com/in/jamiegodwin/) on 19 November through the signed-in in-app browser. Headline: “Founders work with me when fast-built or AI-assisted products and workflows stall. I close UX, accessibility and implementation gaps.” The About section expands this to handoffs and ownership, describes service-business systems, and names TapScribe, AI Ching and True Essence as places where James tests what he recommends to clients. This supports the service-first hero followed by concrete product evidence. No profile edits made. Public text retrieval failed; the browser succeeded. A supporting screenshot is retained only under ignored `output/portfolio-review/`.

## Artwork and first-hand stories — latest direction

James requested an illustrated brief and an artwork treatment within the header/hero. On 19 November he clarified that JavaScript should select a different existing painting when someone returns to the page. This means choosing from a curated collection of his work, not generating new artwork with AI. He subsequently supplied 24 paintings in `/Users/nitro/Desktop/artwork/`; the artwork selection dependency is resolved. The original service headline and the agreed app slider remain requirements.

Three placements were explored: a strip, framed artwork, and an underlay. James selected the last, the **artwork underlay**, and subsequently confirmed the desktop/mobile direction. The other two are historical alternatives, not unresolved options. On desktop the painting sits on the right behind the hero with an opaque cream reading area; on mobile it moves above the copy and resolves into cream before the headline. Compare both landscape and portrait artwork. A fixed artwork area should prevent the hero jumping when images change. Preserve the painting's proportions, with an individual crop only where James approves it. Use a small title/credit such as “Swartvlei Beach · Painted by James Godwin”, linked to the artwork or gallery. Do not infer a title for the landscape extracted from the portfolio cover.

Proposed rotation behaviour: select once on a fresh homepage visit, avoid the most recently shown painting when browser storage is available, and keep it still while the visitor reads. No timed rotation. Use a deterministic static fallback when JavaScript/storage is unavailable, load the replacement before switching, update title/credit/alt text together, and retain the fallback if the image fails. Landscapes and portraits must fit the same reserved area without stretching or obscuring the headline; use smaller stacked presentation on phones. No motion is required. Store selected optimised assets locally rather than relying on DeviantArt at runtime. The supplied originals are copied unchanged under `assets/portfolio-showcase/artwork/`, with source hashes, dimensions and initial display guidance in [the artwork manifest](assets/portfolio-showcase/artwork-manifest.json). All 24 are supplied for site use; no repeat permission/selection request is needed. Use [the contact sheet](assets/portfolio-showcase/artwork-overview.jpg) to review the collection. The 382×425 cheetah source needs a modest inset rather than full-hero enlargement. Original titles need not block use: the agreed artist credit alone is a valid caption.

### Stories James supplied

These draft passages are edited from James's answers, preserving his motivation. They still need his copy review and specific implementation examples before becoming complete case studies.

**TapScribe**

> I’m often in meetings where I’m not the host, so I can’t get the transcript. I wanted my own record to return to afterwards, check the details and make sure I hadn’t missed anything, without sending the recording to a cloud transcription service. A coaching friend also wanted something he could run on his Mac, which gave me another reason to build it.

Keep the story about access to James's own meeting record and local transcription. Do not imply recording bypasses meeting rules or that transcription guarantees complete accuracy. James subsequently identified the main challenge as getting the feel and user journey right: quick access, starting a recording, and returning to its transcript with very little friction. Lead with that interaction-design challenge; do not invent a particular engineering incident.

**Taoist Breath**

> I built Taoist Breath for my Taoist students, to give them something they could use to support their breath work.

**Between Breaths**

> I wanted a gentle reminder to stop, look up and breathe. It wasn’t about prescribing one breathing technique. It was about making a little room for that pause during the day.

James described the mindfulness prompts on his watch as an inspiration. Current source provides selectable weekdays and eight fixed three-hour time slots; rescheduling code was read, not tested on a device. Finer/custom reminder times are desired further work. Seeing other people breathing at the same time was an idea he began exploring but has not extended. Source contains optional presence requests; this is not evidence of a verified live shared session or a finished synchronisation feature. Keep these ambitions separate from current released behaviour.

**Harmonic Echo**

> I was curious about humming and what it feels like. I wanted to encourage people to hum and see artwork emerge from it, giving them something memorable. I’m still working on getting that artwork right.

This is an edited draft from James's reply. He mentioned hearing scientific discussion about humming; describe his curiosity without turning that into a verified health or therapeutic claim. A public version exists, while the artwork refinement remains work in progress. The native Infinite Bloom work is not a released-version claim.


**GratefulFor**

> I’ve had the GratefulFor domain for many years. I wanted to give something back to the community because gratitude means a lot to me. The first idea was a map that came alive as people posted around the world. It worked on desktop, but I struggled to make it work well on a phone. That led to planting a gratitude and building the experience around mobile first. Even witnessing someone else’s gratitude can encourage you to start your own practice. There’s so much we can give thanks for.

The map-to-garden pivot is a concrete design decision, not only a visual refresh. Show the mobile problem and new experience, without inventing conversion or participation results.

**TypeScoop**

> I used TextSniper to grab text I couldn’t select, and Keyboard Maestro to manipulate text I’d copied. I wanted to see whether I could combine those jobs in one tool, improve my own productivity, and try building something in Rust. I also wanted a simpler way to create text commands through a CLI.

The origin includes screen capture, but the current product story should lead with selecting/copying any text and applying a command; capture is the alternative where text cannot be selected. James supplied a regularly used example: create a clean filename/URL slug by lowercasing selected text, removing unwanted characters, replacing spaces with dashes and collapsing excess spaces. Illustrative input `Summer   Photos (Cape Town)!` becomes `summer-photos-cape-town`; verify the exact command/output when capturing. This changes text for a name or URL, not the image file format. Show selecting/copying text, invoking the command and the cleaned result.

**AI Ching**

> I’ve collected I Ching translations for years. I can’t resist looking for another one in a secondhand bookshop. Different translations have spoken to me at different points in my life. I wanted to bring together what I’d learned from them, and AI made it easier to work through that collection and develop my interpretation. Putting it in an app meant I could carry it with me instead of having all my books nearby.

James described combining insights from his collection with AI assistance. Do not invent a translation lineage, make an unsupported claim of scholarly authority, or quote passages from third-party books as if they were James’s writing. The personal origin can be told without reproducing those books.

**True Essence**

> True Essence grew from a daily Tao reading practice and what I’ve learned through Tai Chi. Self-help can leave you feeling that you’re broken and need to be fixed. For me, the starting point is that you’re not broken. You’ve simply forgotten. Returning to the breath and stillness creates room to notice what’s already there. I wanted to make a daily journey that helps people return to that understanding.

This is James's philosophy and intention for the experience, not a clinical claim. He tentatively recalled a book title; leave it unnamed until confirmed. Keep this story distinct from AI Ching's portable collection of readings and translations.

## Existing site baseline

Source and live homepage inspected on 19 November. `FeaturedStory.astro` contains four selectable stories: two for the same roofing client, TapScribe, and Plumbline with IIIMPACT. The scoring story is selected initially. The main visual is a simplified scoring illustration. `/work` uses the same shelf. `/apps` lists seven products with icons and external links; TypeScoop is absent and GratefulFor still describes the previous global map.

The Case shelf cream/forest palette, Manrope/Inter typography, shared recipes, existing URLs, contact paths and writing archives remain constraints. This is a proposed change to the emphasis and content within that system.

## Project inventory and story opportunities

Status below distinguishes observed public surfaces from local development checkpoints; it is not release qualification or evidence of commercial success.

| Project | What it can demonstrate | Evidence and image position | Proposed placement |
|---|---|---|---|
| TapScribe | A personal consulting need carried through native Mac design, audio capture, local transcription, file ownership and distribution | Public site inspected. Existing genuine Library image uses prepared fictional audio in an isolated Debug build; exact current-release capture still desirable. Native handoff records public 1.0.1 (32). | Lead project; expand existing `/work/tapscribe` rather than duplicate it. |
| GratefulFor | A distinctive shared experience, botanical art, anonymous participation, live updates and recovery | Public garden inspected and captured. It now presents a shared botanical garden, replacing the map-led description on this portfolio. Use a fictional gratitude for the final portfolio shoot. | Lead project; explain the experience and the less visible reliability work. |
| AI Ching | Mobile and web continuity, multilingual content, a complete reference library, reading flow and private journal | Public web surface captured; cream mobile reading golden inspected and copied, explicitly a test-rendered fixture. Current local journal/sync work is unfinished and must not be advertised as released. | Lead project with web/mobile context; no usage numbers without separate evidence. |
| TypeScoop | Native Mac utility design, text capture and practical transformations of copied text | Build 63 handoff describes local implementation with installed acceptance and distribution work open. Launch artwork is illustrative and capture-led. Fresh current command-workflow capture is needed. | Lead project labelled **In development**. Lead the story with selecting/copying text; screen capture is the alternative for unselectable text. |
| True Essence | A sustained daily practice, typography, private writing, access rules and a carefully bounded optional AI response | Public landing page captured. Local project describes Rails/Hotwire and practice-day access. Authenticated practice imagery still needed using a demo account and fictional text. | Supporting product; use actual practice screen rather than only landing-page copy. |
| Harmonic Echo | Audio-reactive interaction and creative visual work | Public App Store listing and lookup API identify released 1.0.1. Store screenshot collected. Local native Infinite Bloom upgrade remains separate, unfinished work. | Supporting product; a short genuine interaction clip could show this better than a still. Do not reuse the store image's health/healing language in portfolio copy. |
| Taoist Breath | Focused interaction design, timing, pause/resume and a deliberately small product | Source under `/Users/nitro/code/breath`; live idle screen captured. This inspection did not run a breathing session or verify every README claim. | Supporting product; use the practice surface and a concise story. |
| Between Breaths | A quiet mobile experience, stillness sessions and gentle return cues | Located locally under `/Users/nitro/code/pause`; app title and iOS display name match. Public listing/lookup API identify version 1.0.0; store screenshot collected. No need for James to load another project for this exploration. | Supporting product; capture clean app content for publication rather than a marketing phone frame. |
| Roof Ops | Field capture connected to office operations: scoring, QC photographs, attendance, orders and reporting | Current project brief and existing public stories reviewed. No client database or private screen opened. | One client overview with the existing scoring and QC deep links preserved. Avoid treating these as two unrelated clients. |
| CapeVision | Practice administration, appointment reminders, confirmations and staff workflows | Current project brief and handoff reviewed. No patient records opened or captured. | Client systems section; named identity and screens to be reviewed before publication. Prepare fictional demonstration data. |
| Osteopathy practice / Guy Billing | Long-lived appointment, invoicing, payment and reminder workflows | Current project brief identifies the practice and a maintained PHP application. No clinical or billing records opened. | Separate client story from CapeVision, with accurate personal contribution and approved identity. |
| Plumbline / IIIMPACT | Shared design rules connected to components and code checks | Existing public portfolio already describes collaboration and marks work in progress. It does not establish permission for other client names, logos or screenshots. | James deferred the additional IIIMPACT section on 19 November; he will supply material later. Keep existing public work intact and focus current exploration on the available apps and systems. |

Source roots are `/Users/nitro/code/`: `tapscribe`, `tapscribe-launch`, `gratefulfor-map-app`, `aiching-app`, `ai_ching_web`, `typescoop`, `typescoop-launch`, `true-essence`, `harmonic_echo`, `breath`, `pause`, `roof-ops`, `capevision-reminder`, `guy`. Relevant PROJECT and current handoff documents informed the inventory; no other repository was edited.

Public references: [TapScribe](https://tapscribe.app/), [GratefulFor](https://gratefulfor.com/), [AI Ching](https://aiching.app/), [True Essence](https://trueessence.space/), [Taoist Breath](https://taoistbreath.com/), [Harmonic Echo listing](https://apps.apple.com/za/app/harmonic-echo/id6752900195), [Between Breaths listing](https://apps.apple.com/us/app/between-breaths/id6753753806).

## Visual directions

The initial concepts and later refinements are retained in order. They are static layout studies grounded in attached reference images, not implemented pages or faithful replacements for source screenshots.

1. [Featured shelf](assets/portfolio-showcase/01-featured-shelf.png): **selected layout direction**, with the hero and collection changes below. Large screenshot and short story, with named image thumbnails and manual navigation.
2. [Product gallery](assets/portfolio-showcase/02-product-gallery.png): historical alternative. The assistant originally recommended this; James chose the slider instead. Do not use the grid as the implementation target.
3. [Service-led slider](assets/portfolio-showcase/03-slider-service-led.png): restored the current hero and added all eight apps, but used text-only selection. James preferred image cards and supplied a crop to clarify this.
4. [Slider with thumbnail cards](assets/portfolio-showcase/04-slider-thumbnail-cards.png): **selected app-section composition**; its plain hero is superseded by the artwork treatment below. Preserves the service hero and “Apps I’ve built”, then one large featured app and a sliding image-card rail. First TapScribe card has a subtle forest outline matching the featured app. Four cards are visible, with arrows, a position count and “View all apps”. All eight apps belong to the same slider.

5. [Art band](assets/portfolio-showcase/05-art-band.png) and [framed art](assets/portfolio-showcase/06-art-framed.png): explored alternatives, not selected.
6. [Art underlay](assets/portfolio-showcase/07-art-underlay.png): **selected hero treatment**. James chose the last of the three artwork studies and asked for other paintings and mobile examples.
7. [Beach desktop](assets/portfolio-showcase/08-underlay-beach-desktop.png) and [portrait desktop](assets/portfolio-showcase/09-underlay-portrait-desktop.png): same hero with two additional paintings.
8. [Beach mobile](assets/portfolio-showcase/10-underlay-beach-mobile.png) and [portrait mobile](assets/portfolio-showcase/11-underlay-portrait-mobile.png): art above readable copy, a stacked featured app and image-card rail. Corrected drafts replace initial generated mobile drift; these are the retained mobile targets.

The [illustrated brief](../../output/pdf/homepage-portfolio-brief.pdf) is a local PDF snapshot of this spec, with selected desktop/mobile concepts, the eight-app collection, edited first-hand stories and the execution stages. The spec remains authoritative as answers evolve. The PDF is under ignored output and may need regeneration in another checkout.

The initial concept's decorative mountains and inaccurate TypeScoop caption are removed/corrected in the latest target. TypeScoop reads “Copy text. Turn it into something useful.” All generated concepts redraw product pixels and shorten/crop contents; a built version must use original assets with deliberate, legible crops. Mobile images are static visual studies, not browser-width or interaction verification. James's [thumbnail reference](assets/portfolio-showcase/user-thumbnail-reference.png) owns the card-navigation preference; combine the app composition in 04 with selected artwork treatment 07 and responsive examples 08–11. Generated art pixels are interpretive, especially the portrait and panoramic detail. Final code must use the original paintings, not crops from the mockups. Desktop and mobile masks/crops require exact-image review.

## Proposed behaviour

Homepage sequence:

1. Selected artwork underlay around the existing service-led headline, supporting capability copy and direct product-enquiry action; a fresh painting from James’s curated set on a new visit. Phone layout places the artwork above readable copy.
2. “Apps I’ve built.” One featured app with a large image, a short personal story, contribution/status and project-story link.
3. One sliding image-card rail beneath that feature, containing all eight apps. Initially show TapScribe, GratefulFor, AI Ching and TypeScoop; the same rail continues to True Essence, Harmonic Echo, Taoist Breath and Between Breaths. Each card has an image, name and brief purpose. TapScribe starts selected, with a subtle outline/tint; changing selection updates the featured app and selected card together. “View all apps” leads to `/apps` as a complete index.
4. Client systems: Roof Ops, CapeVision and the osteopathy practice. Additional IIIMPACT work will form a later section when James supplies material. The initial mockups anonymise the practice/design-system labels; their generic design-system column is not a commitment to include the deferred section now.
5. A small “Selected earlier work” section using a few reviewed PDF examples, accurately attributed as historical work; shortlist below.
6. A direct project-contact path and a restrained selection of writing.

Keep a visual distinction between “My apps” and client/collaborative work. The purpose is accurate attribution, not a filter visitors must operate before discovering anything. No invented outcomes, client endorsements, project counts or platform badges.

Use manual arrow controls, image cards with visible project names, keyboard operation and an accessible selected state. No autoplay. Selecting a card updates the screenshot, story, status and project link without reloading the page. Arrow navigation advances the selected project and scrolls its card into view; preserve stable project order. Phone swiping is an enhancement with buttons/links still available. Keep the image rail horizontally browsable on phones and stack the large screenshot/story. Use a light border or tint, not heavy shadows, to distinguish selection; keyboard focus must remain independently visible. If JavaScript fails, project links and readable summaries must remain accessible. Do not restore the text-only selector or separate the last four apps into a second “More things” group.

## Historical portfolio shortlist

Source: `/Users/nitro/Desktop/james-godwin-portfolio.pdf`, 32 pages; PDF metadata dates it to 3 October 2024. Read all extracted text, visually scanned all pages, and inspected candidate project pages at larger scale. This is user-supplied historical evidence, not independent verification of current contracts, employment, scale or outcomes. Some extracted text is hidden template copy not visible in the rendered pages; exclude it.

| Priority | Candidate and PDF pages | What it adds | Proposed treatment |
|---|---|---|---|
| First | SwiftVee, pp. 7, 9, 19–21 | Co-founder/CXO background; mobile auction interfaces, price-checker product development and an Old Mutual livestock-insurance flow. The captions distinguish interface design, full product development and UX flows. | Strong deeper story candidate showing ownership across design and code. Present Old Mutual as work within the SwiftVee context, not a separate direct-client claim. |
| First | FROM, pp. 11–12 | Interview/research material, personas, friction maps, wireframes and interface designs for Numotion and a payroll/HR context. | Strong evidence that James can investigate a problem and carry findings into design. Preserve consulting attribution; obtain suitable originals and confirm which underlying client details can be public. |
| First | Pick n Pay, p. 24 | Smart Shopper interface work tied to online e-commerce components. | Compact recognisable example of connecting an existing experience. Do not imply James created the whole platform or measured an uplift. |
| Supporting | Privyseal, p. 26, and Jando, p. 25 | Lean UX team development and design-thinking workshops. | Optional short evidence of enabling teams, rather than another product screenshot in the app carousel. |
| Supporting | Pierre Crocquet, p. 22 | A restrained photography site described as designed and built by James. | Optional example of visual judgement, lower priority than workflow/product evidence for this hero. |
| Context | JUMO/Lobster Ink and earlier ventures, pp. 5–9 | Career breadth and leadership context. | Useful for About or a short experience sentence; recheck any scale/award claim before new use. Do not carry 2024 “CURRENT” labels into 2026. |
| Deferred | IIIMPACT examples, pp. 14–18 | Enterprise screens, usability testing, design systems and heuristic analysis. | Reviewed as context only; honour James's decision to add the dedicated section later. |

Use current AI Ching/GratefulFor captures instead of their older PDF screens on p. 27. Do not automatically add 369, Just 6 or Fettle from pp. 27–28 to the current eight-app collection; their current status has not been checked. The PDF's collage format should become a small number of legible screens plus explanation, not a giant unreadable montage on the homepage.

## Breath-app source confirmation

Both projects are accessible locally; no additional project loading is required for source review.

- Taoist Breath: `/Users/nitro/code/breath/src/App.jsx` identifies “Natural Taoist Breath” and contains breathing patterns, duration/settings persistence and session states. Existing tests cover phase timing, pause/resume, backgrounding and completion; they were read, not executed in this exploration. Its public idle screen was captured earlier.
- Between Breaths: `/Users/nitro/code/pause/lib/app.dart` names the Flutter app, and `lib/features/home/home_screen.dart` renders the BEGIN screen. Session source contains timed sessions, sound/chime/haptic settings and optional shared-presence requests. The old STATUS document contains superseded statements, so current source takes precedence. No phone install, build or live presence session was performed.

### Project-page shape

Each substantial story should answer:

- What prompted the work? Start from James's own words and motivation.
- Who uses it, and what problem does it address?
- What did James personally design, build or maintain? Attribute collaborators.
- What was one meaningful decision or difficult constraint?
- What does the working experience look like? Usually two or three real screens; use a short optional clip where movement matters.
- What exists today, what remains in progress, and where can the visitor try it or discuss similar work?

Approximately 300–600 words is a useful starting range, not a quota. Observable outcomes can be modest and specific: recordings and transcripts stay together, staff can confirm an appointment, or a saved journal survives an update. A capability or passing test must not become an unsupported customer-impact claim.

## Scope and non-goals

Authorised in this phase: research, source collection, historical PDF and live LinkedIn review, selected slider/artwork desktop/mobile mockups, an illustrated brief, a focused execution spec and backlog preparation. James wants to begin execution from this plan. This checkpoint completes planning artefacts; it does not claim product implementation. No commit, push, release, publishing, paid services, contacting clients or modifications to other apps are included.

Proposed later: selected homepage direction, project collection, first detailed case studies and approved client evidence. Preserve existing story routes and all service/writing/contact destinations. Do not expand this into a new brand, new framework, CMS, terminal restoration or an exhaustive technology list.

## Interface and implementation notes

Reuse the current Astro architecture. `src/pages/index.astro`, `src/pages/work/index.astro`, `src/components/site/FeaturedStory.astro` and the story modules are the current presentation seams; `/apps` comes through `src/outputs/apps.js`. A single project-content source could prevent inconsistent names/status across these surfaces. Use current tokens and pattern recipes; introduce shared variants only where needed.

For any new `/work/<project>` destination, follow PROJECT.md's routing/output, metadata, redirects, sitemap and help checklist. Keep `/work/tapscribe`, `/work/crew-scores`, `/work/quality-control` and `/work/plumbline` working. Do not publish empty “coming soon” case-study destinations just to make every card link uniform.

## Implementation slices

The selected direction is intended work. The stages below are ordered so each yields something James can see and assess. They are not completed implementation. The 24 original paintings are now supplied. Local previews can use them immediately; production requires exact responsive review of their display treatments. Content work can proceed independently.

### 1. A complete, accurate app collection

- **Outcome:** `/apps` lists all eight apps in the agreed order with a real image, concise purpose, ownership, current status and a working destination. TypeScoop reads “In development”; GratefulFor describes the garden. Prepare the complete TapScribe story from James's answers.
- **Approach:** introduce one small authored project collection consumed by the homepage and Apps output, reusing the trusted route/output architecture. Do not add a CMS or rewrite unrelated routes.
- **Acceptance:** starting at `/apps`, a visitor finds each of the eight names once, can open its intended destination, and sees no experimental feature described as shipped. A project with no completed case study points to a real public product destination rather than an empty page.
- **Test seam:** rendered content/link/status checks and browser reading review. Content fixtures must distinguish app names, local status and external destinations.
- **Depends on:** existing inventory and all eight motivations are sufficient to start; precise copy and screenshot selection can be refined during the story work. Use existing image provenance and prepare exact screenshots where needed.

### 2. The painting hero on desktop and phone

- **Outcome:** the current service promise and contact CTA remain prominent while James's artwork adds personality. Desktop underlay and mobile stacked art use the same curated collection.
- **Approach:** local optimised image assets plus a small painting manifest: stable ID, title, alt text, source/credit URL, intrinsic dimensions, desktop/mobile crop or contain treatment, and selected focal point. Plain JavaScript selects once per fresh homepage document; restoring an existing page may retain its painting. Avoid the most recent ID when storage works and the list has more than one entry. No timed rotation or remote image fetching.
- **Acceptance:** given at least two paintings and working storage, two fresh visits show different entries. A one-image collection, denied storage, no JavaScript or failed replacement image leaves a valid static painting and usable hero. Caption and alt text match the displayed painting. No layout shift caused by changing portrait/landscape dimensions; no stretched faces; text never lies over detailed art. The contact link stays reachable. Images have reserved dimensions and responsive sizes.
- **Test seam:** small meaningful selection/failure checks; browser review with portrait and landscape at 390 and 1440px, plus 320px and 200% text zoom. Disable JavaScript, deny storage, and fail one image request. Check keyboard access to art credit/contact and existing mobile menu.
- **Depends on:** the 24 originals supplied by James are now available, so art selection no longer blocks this slice. Prepare optimised derivatives and check exact crops/proportions in the local preview. No art style or headline selection question remains.

### 3. One featured app and the sliding image cards

- **Outcome:** TapScribe opens as the feature; visitors browse all eight apps using the image rail underneath. The screenshot, story, contribution/status, link, count and subtle selected card update together.
- **Approach:** enhance server-rendered content with plain JavaScript. Reuse the current choice/story recipe or add a shared supported variant. Stable order: TapScribe, GratefulFor, AI Ching, TypeScoop, True Essence, Harmonic Echo, Taoist Breath, Between Breaths. Previous/next wraps at either end; scrolling the rail alone does not silently change the featured app. Selecting a card or arrow does, and scrolls the selected thumbnail into view.
- **Acceptance:** a visitor selects the last app, moves next to TapScribe and moves previous back to Between Breaths with consistent content/count. Keyboard controls expose selection and visible focus independently. At phone widths the story/image stack, thumbnails remain horizontal, a next-card edge suggests more, and buttons remain available without relying on swipe. No autoplay. Long story text does not clip or move the controls unpredictably. With JavaScript disabled, readable project summaries and links remain reachable.
- **Test seam:** selection, wraparound and link/status assertions; manual mouse/keyboard/touch review at desktop, 390px and 320px. Reduced-motion preference disables optional scrolling/transitions. Check zoom, overflow and accessible names.
- **Depends on:** slice 1 content; slice 2 can progress independently. Capture current TypeScoop command workflow and use accurate original app imagery before final review.

### 4. The first two useful project stories

- **Outcome:** `/work/tapscribe` tells the real origin and interaction-design challenge, using two or three legible screens. Build the GratefulFor story around the captured motivation and mobile-driven map-to-garden pivot. Return paths lead back to browsing the work or discussing a product.
- **Approach:** reuse existing story layout, authored output and metadata. Extend existing TapScribe route; choose a GratefulFor route once the story is ready. Each covers motivation, intended user, James's contribution, one meaningful decision, current behaviour and future work.
- **Acceptance:** reading either page gives a concrete account of James's work without invented metrics or testimonials. Exact screenshots use fictional/demo content where appropriate. Existing `/work/crew-scores`, `/work/quality-control` and `/work/plumbline` still resolve. New routes have canonical/social metadata, sitemap inclusion, route/output mapping, help/navigation and redirects where required by PROJECT.md.
- **Test seam:** authored content review, built route/metadata tests and desktop/mobile screen legibility. Check incoming and return links, indexability and no draft destinations.
- **Depends on:** TapScribe and GratefulFor answers are sufficient for first drafts. Final screenshot selection remains content preparation, not evidence of a running product test.

### 5. Depth beyond the lead stories

- **Outcome:** the remaining six apps receive useful short stories; Roof Ops, CapeVision and the osteopathy practice appear as distinct client systems. Selected earlier work adds SwiftVee, FROM and Pick n Pay with precise roles. Keep the current `/work` destinations and existing public Plumbline work available.
- **Acceptance:** own products and client contributions are attributed clearly; roofing scoring/QC remain parts of one client system. Client screens use fictional examples and agreed names. IIIMPACT expansion remains deferred. Harmonic Echo artwork refinement and Between Breaths' further reminder/shared-presence plans are not presented as released features.
- **Test seam:** per-story editorial/source review, destination checks and browser inspection of the complete collection. No private client data access is needed to create this material.
- **Depends on:** copy review, concrete screenshots and client disclosure/content confirmation. This stage must not delay a complete release containing only approved material; omit unfinished additions rather than publish placeholders.

### 6. Exact-build review and a separately requested release

- **Outcome:** a local build demonstrates the approved composition, artwork rotation, full eight-app browsing and completed stories on desktop/phone. Deployment happens only when separately requested.
- **Verification:** run `npm run check:design`, `npm run build`, `npm test` and `npm run test:routes` in that order; add catalogue verification if recipes change. Visually review the whole page and check existing service/contact/writing destinations, image failures, no-JS fallback, keyboard/focus, zoom, reduced motion and the chosen art crops. Record checks actually executed and the exact revision.
- **Release:** follow `DOCS/runbooks/deploy-cloudflare-pages.md` when authorised; verify deployed content/links and keep a previous successful Cloudflare build as rollback. Planning or a backlog item does not authorise push/deploy. Visitor-comprehension and commercial outcomes remain separate from build acceptance.

## Readiness and open content questions

Settled: service hero, one featured-app slider with image cards, all eight apps, selected underlay, artwork changes between visits, desktop and mobile coverage, IIIMPACT expansion later. James has supplied the 24 paintings for the collection. No need to reload Taoist Breath, Between Breaths or Harmonic Echo: source is accessible under `breath`, `pause` and `harmonic_echo`.

Captured: motivations for all eight apps; TapScribe's interaction challenge; GratefulFor's mobile-driven pivot; TypeScoop's TextSniper/Keyboard Maestro origin and Rust/CLI intention; AI Ching's book collection and portability; True Essence's daily return to stillness. Draft passages preserve James's voice for his review. Harmonic Echo artwork refinement and Between Breaths' further work remain explicit.

Remaining content inputs: responsive display/crop review of the supplied artwork; copy review and exact screenshots; client roles and publishable identities/screens before their stories. TypeScoop’s concrete filename/URL cleanup example is now supplied, with its expected before/after to verify during capture. The possible book title behind True Essence stays unnamed pending confirmation. None blocks the initial index or first story drafts.

First execution step: slice 1, the eight-app index and TapScribe story draft, followed by a local hero preview with the supplied original paintings. Start with the rendered content/link/status test seam; use the existing Astro preview commands rather than a second site framework.

## Verification of this exploration

Inspected current homepage source and live browser rendering, public app surfaces, targeted project briefs/handoffs, and each image used in generation. Saved six browser screenshots, three existing source assets, two official store images and two generated concepts with a [provenance manifest](assets/portfolio-showcase/source-manifest.json). App Store browser rendering failed; listing content and official lookup API were accessible, and direct image download succeeded with curl. No installed TypeScoop, device, billing or private client workflow was exercised. No build or tests were run because product code was unchanged.

Subsequent review: live LinkedIn headline/About verified; 32-page PDF text and rendered overview reviewed with larger candidate pages; both breath apps inspected in source. Produced a service-led revision and then the latest thumbnail-card revision using James's screenshot as a direct image reference. The initial generation request for the first revision exceeded the tool's five-reference limit, returned no image, and succeeded after reducing references. Latest refinement visually inspected for unchanged hero, featured app, four thumbnail cards, selected state, eight-app indicator and corrected TypeScoop caption. No functional carousel or phone-width acceptance is claimed. PDF renders and LinkedIn evidence remain under ignored `output/portfolio-review/`.


### Final planning checkpoint — 19 November 2026

James selected the underlay, requested landscape/portrait and mobile examples, then explicitly asked for backlog/spec execution planning. Added one parent In Progress item; six demonstrable slices have dependencies and observable acceptance. This supersedes earlier “backlog unchanged” exploration checkpoints. No website source, other app source, commit, push or deployment changed.

Reviewed actual DeviantArt paintings and extracted the landscape image from the supplied PDF. Existing site painting thumbnails are only 60×60 and are not suitable hero sources. Generated three artwork placements, then two alternate desktop paintings and mobile studies. First mobile generations introduced incorrect selectors/project names or a second large feature card; revised them to the agreed TapScribe/GratefulFor image-card rail. Initial drafts remain only in ignored review output. Inspected the retained images; still no runtime/device acceptance claim.

Read Between Breaths' notification/settings/session source: selectable weekdays, eight fixed three-hour time labels, scheduled local notification calls, optional active-presence count refreshed every 45 seconds and hidden when not greater than one. Code read only; no build, device notification or live shared-session test. The community count does not establish phase-synchronised breathing.


### Supplied artwork checkpoint — 19 November 2026

James supplied `/Users/nitro/Desktop/artwork/` after the first brief was ready. Inventoried, decoded and visually reviewed all 24 JPEGs in a labelled contact sheet. Total source size is approximately 18.4 MiB; the collection includes the landscape used in the selected concept and a 2027×2457 Swartvlei Beach source. Copied all originals byte-for-byte into the planning asset folder and verified SHA-256 equality. This collection supersedes earlier gallery/PDF assets as the build source for matching works; historical generated concepts remain design references only. Do not ask James to choose or upload the paintings again. All 24 may participate, using whole-image/contained fallbacks and per-image responsive settings. The cheetah cub's 382×425 source is suitable for a small presentation, not a full-width enlargement. The brief now includes the supplied-artwork contact page.


### Local implementation review — 19 November

James authorised local implementation. Initial hero/carousel and shared eight-app content now exist in `PortfolioShowcase.astro` and `src/portfolio.js`; `/apps` consumes that collection. All 24 paintings have local WebP derivatives. Initial underlay overlapped text and cut paintings with cream blocks; James requested a separate painting beside the headline. Replaced absolute positioning/masks with two grid columns and a compact artwork-above-copy phone layout. Desktop browser rendering visually reviewed with Brown Eagle; painting and text no longer overlap. Build/design checks pass. Mobile runtime review and full carousel/route tests remain open; this is not completed feature acceptance. Local server is at http://127.0.0.1:3000/.

Artwork refinement: James requested rounded corners, a subtle shadow and a floating cream caption with filename-derived title plus linked artist credit. Implemented with dedicated painting tokens; caption updates with each image. Desktop browser inspected with River view Cederberg; build/design checks pass.

Added a circular-arrow “Show another painting” button inside the caption. It preloads a different image, updates title/alt/announcement together, retains the old image on failure, and works if storage is unavailable. Browser click verified Brown Eagle changed to Cheeta cub without navigation. Design/build checks pass.

Caption correction requested by James: retain the title/artist pill; put a separate matching icon-only pill to its right with a 16px SVG. Removed the visible repeated status text. Refresh now reloads the page as explicitly requested; initial selection excludes the stored previous painting. Build/design checks pass.

James requested the caption below the artwork, with the desktop image bottom aligned to the bottom of the product CTA. Moved caption/refresh pills outside the image area and aligned the image to the hero copy bottom; phone caption remains in normal flow below its compact image. Build/design checks pass; exact visual alignment remains for local review.


### Showcase stability and project destinations

James prioritised removing variable-height jumps, oversized images and cramped thumbnail spacing. Added a shared 440px desktop feature size, a bounded 320px media area, consistent canvas/padding and 32px rail separation; mobile uses consistent copy/media regions. Selection now scrolls only the horizontal rail rather than calling scrollIntoView on the page. TapScribe uses the existing recording HUD asset. Seven additional local app-story routes now contain origin, role and onward links; these are first drafts to expand with history and exact imagery. Sitemap includes those destinations. Homepage names Roof Ops, CapeVision and the osteopathy practice; the latter two currently link to the systems overview, pending dedicated client stories. Better coordinated artwork/backgrounds and richer case studies remain open.

James requested client systems in the same carousel. Collection now has eleven entries: eight own apps plus Roof Ops, CapeVision and the osteopathy practice. Each keeps ownership labels and a local story destination. Removed the separate systems block so Essays follows the showcase. CapeVision/osteopathy use honest typographic previews until screenshots are supplied; no private screens accessed. Artwork preparation will proceed project by project using genuine screenshots, preserving HUD corners and creating phone compositions where appropriate. Existing imagery remains provisional. Build/design checks pass.

TapScribe artwork: integrated James’s transparent tap1/tap2 screenshots as lossless WebP. Library is the main feature with the recording HUD layered at its lower right; thumbnail mirrors the arrangement. Original rounded alpha edges retained, no rectangular background added. Desktop browser composition inspected; build/design checks pass. Homepage copy review and dedicated-page content are next, as James requested.

TapScribe page: added reusable ProjectCaseStudy composition with logo, summary, contribution, main screenshot, narrative sections, supporting HUD and product/contact/return links. Extended the existing /work/tapscribe destination using James’s supplied motivations and interaction challenge; no invented metrics. Alpha-following drop shadow now gives homepage screenshots depth. Build/design checks and 19 Vitest tests pass; local desktop header/content inspected. Mobile exact-layout review remains open.

GratefulFor artwork: James supplied IMG_3996/3997, real iPhone gratitude and planting screens. Converted to WebP (135KB/75KB), retaining complete screens. Homepage feature presents two CSS phone frames, with a single reading phone in the thumbnail. No speculative garden overview or fabricated product pixels. Dedicated GratefulFor story remains for a later step. Build/design checks executed.

GratefulFor correction: constrained thumbnail phones absolutely within the common 3:2 preview so portrait content cannot stretch the rail; two equal-sized phones now match the feature composition. Updated homepage copy from James’s origins and current garden language. Replaced the short GratefulFor placeholder with the shared case-study template: giving back, witnessing thanks, mobile-driven map pivot and planting flow. Old AboutPage marketing still described the map, so did not reuse those stale product claims. Portrait screenshots are bounded on story pages.

AI Ching app: James supplied real dark-mode library and Creative interpretation iPhone screenshots (IMG_3998/3999). Optimised to WebP and used in equal-sized phone pairs for feature/thumbnail. Label now explicitly AI Ching app, with portable-library copy. James requested app and website as separate stories; website entry, imagery, stats review and app-specific detailed story are still pending. Build/design check passes.

AI Ching website assets supplied for later: home and casting screenshots retained with WebP derivatives and provenance in assets/portfolio-showcase/aiching-website-sources.json. Keep separate from current app imagery. The visible 700,000+ readings label is source screenshot content, not a verified portfolio traffic claim. App visual review remains current focus.

AI Ching detail page now uses ProjectCaseStudy with rounded latest iOS AppIcon (1024px source converted losslessly), supplied phone screenshots, personal book-collection origin, library/reading design and role. Existing /work/ai-ching route preserved; website remains separate planned story. Download destination corrected against website source to /download-aiching-app. Local route returned 200; build/design checks passed before link correction.


### AI Ching website: search and audience story

James wants the separate website case study to show SEO, optimisation and audience growth over time, alongside the product/interface work. Research and verify this when preparing that story. Use dated Search Console data for clicks, impressions, average position and specific query/page/country context; use analytics for visits and engagement, keeping those measures distinct. Compare like-for-like periods and show both the longer trend and recent direction, including declines or mixed results where present. Relate verified implementation dates (content, translations, technical SEO, performance and structure) to observed changes without claiming that timing alone proves causation. “Top on Google” must become specific supported query/ranking examples, not a universal position-one claim. The screenshot's 700,000+ readings label is a separate cumulative product claim requiring its own definition/source; it is not monthly visitors. No new public traffic/ranking claims have been added yet.

Added AI Ching website as the twelfth showcase entry with its own /work/ai-ching-website case study using the supplied home/casting screenshots. Read current website index/data source for guided readings, library/guides, language routes and structured-data content. Describes technical SEO foundations without adding unverified traffic/ranking claims. Asked James which growth decision/challenge mattered most; evidence review remains open. Sitemap uses shared collection. Build/design checks passed.

James supplied website-growth background: original intent targeted demand for online I Ching readings; PostHog audience observations from Spanish-speaking countries prompted Spanish translation, then Brazilian Portuguese. He reports substantial traffic increases after each; magnitude and causation remain to verify against dated analytics/Search Console. Updated narrative without invented numbers. Website/app share core readings; app adds journaling and further paid-value features under development. French mentioned as possible screenshot, but current route/support status not verified; no French support claim added. Spanish/Portuguese screenshots could illustrate audience-led localisation when supplied.

Added supplied Spanish and Brazilian Portuguese screenshots as optimised WebP in two substantial localisation sections on the AI Ching website story. Explains audience observation, prioritisation and carrying language through the reading journey. User stresses depth for all case studies: retain motivation, decisions, contribution, evidence and current state rather than short generic summaries. Traffic increase attributed to James’s observation; quantitative trend remains unverified.

Search growth chart: read saved property-level Search*/Chart.csv and Filters.csv exports. Deduplicated overlapping daily rows by date using later dated export, verified contiguous coverage. Complete-month daily click averages March–October: 228.6,192.9,202.4,230.3,229.3,295.2,393.4,346.0. March–October +51.4%; September–October decline retained. Created accessible SVG and JSON provenance and added to website case study. Not unique visitors, current live analytics, or causal evidence for translations. Partial February/November excluded.

### TypeScoop local case study — 19 November

`/work/typescoop` now uses the shared detailed template with native branding, current launch-site command-menu and capture-demo posters, and the original capture illustration. Separate keyboard graphics explain Command–Shift–2 capture and Control–Option–Command–H HUD. Status stays In development; no live download/commerce claim. Homepage feature/thumbnail reuse the command-menu poster. Images use shared rounded corners and depth. Build/design checks passed; local desktop browser reviewed capture section, shortcuts and image elevation. Phone layout remains to review.

TypeScoop owner correction: capture is the primary product story and homepage visual, led by Command–Shift–2 and original capture art. Detail-page feature order is capture → manipulation HUD → piping → CLI; personal origin and development status support that hierarchy. Command-menu art is secondary.

TypeScoop short-demo section now embeds the existing 27-second capture film with native controls, portrait source for narrow viewports, captions, fallback link and shared elevation. Owner also requested removal of “My own product” labels throughout homepage and detail pages; removed from display data and optional identity separators.

True Essence: supplied IMG_4006.PNG and Screenshot 2026-11-19 at 14.30.56.png converted to quality-90 WebP without cropping. Homepage feature and thumbnail now use two equal phone frames; dedicated /work/true-essence uses shared phone case template and owner-provided origin, daily practice and Sage screenshots. Shadows and centered spaced captions reused. Build/design passed; desktop browser reviewed framed Sage screenshot and caption. No release or deployment.

Painting border cleanup: reviewed all 24 supplied artworks in contact sheet and inspected cropped portraits. Removed full-width near-white margins from an-african-smile (83px top/217px bottom) and andrew (53px top) web derivatives. Original JPGs unchanged. Exact bounds in artwork-crops.json; white within the painting retained to avoid cutting into subjects.

Painting sizing correction after owner screenshots: apparent cream bands on landscape paintings were CSS letterboxing, not source pixels. Removed height:100% from hero image and update width/height attributes to each loaded painting’s natural dimensions. Rounded edges/shadow now follow actual image bounds. Browser verified bee image natural1291×714 against rendered500.86×277.01 (same aspect), visibly no top/bottom bands. Build/design passed. Earlier two source-margin crops remain separate.

Harmonic Echo: owner-supplied transparent phone composition is now the thumbnail and showcase image, contained without extra phone framing. Dedicated /work/harmonic-echo uses current source icon, supplied six-artwork collage and shared alpha-aware drop shadows; captions spaced 24px. Originals retained at Desktop paths; WebP derivatives preserve alpha. Read current app contract/project/handoff and humming_facts.dart; unsupported health statistics were not republished. Copy focuses on personal motivation, comfortable humming, on-device creative interaction and ongoing visual refinement. Browser reviewed artwork elevation. No source-app changes or deployment.

Taoist Breath: supplied IMG_4001/4002/4003 PNGs optimised to WebP. Thumbnail uses one framed breathing-circle screen; main showcase and /work/taoist-breath hero use all three equally sized phones (start, active breath, practice selector). Added shared PhoneScreens composition with width-aware proportional sizing, shared border/shadows and spaced captions. Detailed copy uses owner’s student/practice origin and visible interface, without adding health promises. Desktop composition visually reviewed. Original screenshots unchanged.

### Apps index thumbnails follow-up

Owner requested this as backlog work after all individual apps are finished, not immediate implementation. On `/apps`, show each final thumbnail to the left of its project title, description and button; use the approved showcase artwork and preserve each project destination. Stack naturally on small screens. Verify complete project coverage, image proportions and working buttons when implemented.

Between Breaths: converted owner IMG_4004/4005 to WebP, added single-phone thumbnail and paired-phone showcase/detail hero using shared frames, shadows and captions. Created /work/between-breaths with shared-presence theme in lead copy and 9am example. Source confirms local-time reminders and global active count (visible above one, refreshed every45s), not breathing-phase synchronisation; no invented participant count or location map. Browser reviewed paired artwork. Live presence backend/device behaviour not tested; source-backed description only.

Roof Ops: supplied mobile PWA scoring screenshots converted to WebP and framed in thumbnail, showcase and dedicated /work/roof-ops. Story reuses current ben.js/quality.js evidence: Ben’s AI prototype, James’s workflow/calculations/auth/deployment, first team release, then editable QC templates and evidence records. Preserved scoring/QC deep links. No invented outcomes/metrics. Source screenshots include owner-supplied visible names; publication remains outside scope. Browser reviewed paired scoring screens. Build/design passed, 79 pages.

Cape Vision: owner authorised fictional illustrated workflow because patient screenshots cannot be shared. Created SVG patient-record/WhatsApp/follow-up composition and neutral illustrative message icon using Case shelf cream/forest colours, layered shadows and a phone; no real patient information or claimed automatic confirmations. Homepage feature/thumbnail and explicit /work/capevision use the illustration. Story uses owner facts: client AI-built reminder prototype, James’s WhatsApp integration and connected patient CRM. Source diagram is labelled fictional, not client interface. Existing slug retained; metadata and collection-driven sitemap remain intact. Browser visually reviewed illustration; build/design passed (79 pages). No client-system access or deployment.

Osteopathy practice: owner supplied appointment-to-invoice story and approved fictional workflow illustration. Created layered SVG appointment, invoice with explicitly fictional medical-aid reference placeholders, and email panels; same Case shelf palette and shadows as Cape Vision. Thumbnail, showcase and explicit /work/osteopathy-practice now use it. No real patient data, fee amounts, medical codes, insurer acceptance or payment automation claimed. Browser reviewed illustration and labels. Routes preserved; build/design passed before final collection-copy alignment, then rebuilt. No publication.

IIIMPACT: owner authorised showcase-only consulting entry, no dedicated route. Reused energy/enterprise sector artwork from https://iiimpact.ai/ (provenance iiimpact-sources.json), optimised WebP and composed cream/forest artwork with shared shadows. Copy attributes James’s contract senior UX/frontend work in oil/gas, engineering, cybersecurity and startups; no agency metrics or client outcomes attributed to him. Thumbnail selects summary; CTA and /apps entry link directly to https://iiimpact.ai/. External entries excluded from dynamic work routes and local sitemap. Browser verified selection, count13 and CTA href; build/design passed (79 pages). No deployment.

IIIMPACT thumbnail revision: replaced paired sector images with the website’s1200×630 social-card portrait (og.jpg?v=6), a single black/red full-bleed image with legible agency label and shared shadow. Browser checked actual rail and feature; external CTA remains iiimpact.ai. Build/design passed.

IMB early-career entry: James says he co-founded IMB following airtime-distribution and debit-order systems, then digital wallets needing deposits/top-ups for airtime and other products. Preserve his account of pioneering early South African digital wallets; no independently ranked “first bank” or founding date claimed. Added fourteen-entry collection item with official current IMB logo thumbnail and homepage brand artwork, depth, and external imb.co CTA; no dedicated subpage in this slice. Current artwork is not historical work attributed to James. Browser reviewed thumbnail, summary and href. Build/design passed79pages; no deployment. Asset provenance imb-sources.json.

Career expansion: external-only Lobster Ink, JUMO and SwiftVEE showcase entries now follow IMB; current brand artwork, shared shadows and direct company CTAs. Live LinkedIn inspected read-only: Lobster UX/engineering Dec2013–Sep2014; JUMO CTO Oct2014–Oct2016; StraTech consulting Oct2016–Dec2017; PrivySeal Jun2018–Jan2019; SwiftVee co-founder/UIUX Jan2019–Dec2021. James estimates about45 engineers across SA/Kenya by JUMO departure. Public Google sources confirm JUMO2017 and SwiftVEE2018 accelerator selection, not prize wins. Owner requested two-company credibility highlighted; added sourced startup-background line above showcase. JUMO recognition after tenure; Swift2018 selection predates listed2019role. Detailed dated research/provenance stored in jumo-research.md, swiftvee-research.md and lobster-ink-sources.json under assets. No exact founding/title timeline invented beyond owner/profile. Browser reviewed SwiftVEE feature, thumbnail,17count and source links. Build/design passed79pages. No commit/push/deploy.

### Apps index implementation and fixed career order — 19 November

Implemented the requested /apps rows using AppsIndex and shared PortfolioThumbnail. Same approved artwork appears left of project title, story and shared Action button; at700px the layout stacks with a bounded centered thumbnail above copy. All19 entries use the shared projects source, preserving local case links and external company CTAs. Trusted output module retains the same data-driven textual content; route renders the richer Astro composition, within the existing route/metadata architecture.

Owner superseded the earlier refresh-randomisation idea: fixed career order is IIIMPACT → SwiftVEE → PrivySeal → StraTech → JUMO → Lobster Ink → IMB, shared by homepage and /apps; only paintings rotate.

PrivySeal added from owner account: contract UX strategy/LeanUX/product-building coaching, with current website social artwork. StraTech added from owner account and profile: senior UX consulting and client design-thinking oversight, official logo. Both external-only, with shadows. Source provenance in consulting-sources.json. Owner recalls overlap, while profile dates list StraTech2016–17 and PrivySeal2018–19; no disputed dates displayed.

Verification: Astro build/design passed79pages; npm test passed19tests in9files. Desktop /apps first row and consulting rows visually checked. At390px: stacked TapScribe and SwiftVEE reviewed, document width390 with no horizontal overflow; all then17rows and loaded images checked. Subsequent19-entry DOM confirms additions and fixed order; desktop PrivySeal/StraTech rows visually reviewed. No new automated tests needed for this presentation change. No deployment.


### FROM Digital / Algoworks — 19 November

Added external-only twentieth entry to shared homepage and Apps collection, beside IIIMPACT. James corrected the relationship: FROM engagement was through IIIMPACT while contracted there, not earlier employment. Copy covers catheter products, university AI training platforms, damp-proofing capture tools and client wireframes without identifying clients. Official June2025 merger announcement verifies current Algoworks identity. Replaced mistakenly selected Salesforce partner badge with inspected official green/black Algoworks social artwork, using shared depth/shadow treatment. Provenance: assets/portfolio-showcase/from-digital-sources.json. Browser confirms corrected copy, external button and brand image on /apps; build/design passes79pages. No deployment.


### Star120 — 19 November

Added earliest career entry, after IMB in newest-first shared homepage/Apps collection (21 entries). Owner account: built South African debit-order collections to fund wallet top-ups before IMB; still serves clients. No national market-first claim, transaction volume or date inferred. Official website logo inspected and optimised to lossless WebP, rendered with existing logo-card depth/shadow. Direct Star120 website CTA, no new local route. Provenance in assets/portfolio-showcase/star120-sources.json. Browser reviewed actual logo/copy/button on Apps page; build/design passes79pages. No deployment.


### Content review and fixed arrival order — 19 November

Reviewed shared21-entry collection, all12 new case-study sources, About/Now/help and Work discovery. Confirmed fixed project array and current=0; browser reload returns TapScribe selected, only TapScribe panel visible,01/21. Painting rotation remains separate. Removed stale future-tense website-story wording from AI Ching app, added reciprocal website-story link, replaced journal-sync implementation commentary with reader-focused journal copy. Reduced repeated localisation background and connected translation discussion to existing dated chart without claiming causation. Work now links to full collection; About points to combined Roof Ops story; help describes broader Apps scope.

Broader verification initially exposed outdated four-story build assertions and four oversized assets. Updated maintained assertions for current single-heading case pages, retained three-chapter legacy routes, removed ownership labels and fixed career ordering; corrected thumbnail test to read the button’s final project label rather than embedded artwork label. Optimised PrivySeal, Kokerboom painting derivative and Harmonic Echo artwork; resized TypeScoop icon derivative to256px. Originals untouched. Final build/design passed79pages; Vitest19/19 and built-route/SEO9/9 passed, including internal URL existence, image formats/sizes and sitemap. No external link uptime sweep or full responsive acceptance claimed. No commit/push/deployment.


### Dan Tian practice and product story — 19 November

Owner requested detailed background connecting Tai Chi/Taoism since early twenties to teaching, philosophy and products. Added /work/dan-tian with five sections: beginnings/lineage, attention and design, teaching website, related products, continuing practice. Firsthand account and existing Taoism/philosophy sources, no invented career dates, health outcomes or SEO gains. Actual teaching photo and logo copied from Dantian website codebase, WebP derivative optimised. Shared artwork depth/shadows reused for thumbnail/showcase, new entry after Between Breaths;22entries, TapScribe first, career order unchanged. Shared case-study sections support structured links. Reciprocal links from Taoism/philosophy, links to books and six product stories. Dynamic sitemap/Apps/output consume shared collection; explicit page excluded from generic route; public llms guide now includes all internal case studies. Source provenance assets/portfolio-showcase/dantian-sources.json.

Build/design passes80pages;19 Vitest and9 built-route/SEO tests pass. Browser reviewed detailed-page text, photo treatment, logo and cross-links on desktop. Whole-site responsive acceptance still separate. No commit/push/deployment.


### Mobile review — 19 November

Reviewed homepage, Apps index and all16 case-study routes at390×844 and320×740 in IAB browser. Routes: tapscribe, gratefulfor, ai-ching, ai-ching-website, typescoop, true-essence, harmonic-echo, taoist-breath, between-breaths, dan-tian, roof-ops, capevision, osteopathy-practice, crew-scores, quality-control, plumbline. DOM checks found no page overflow or broken completed images at either width. Visually reviewed full content on non-vh pages and normal viewport phone artwork; full-page capture expands vh-dependent phone frames artificially, so normal viewport observations establish their actual sizing. Reviewed all three chapters of legacy scoring/QC/Plumbline via their chapter links. Clicked all22 carousel choices at320px: one visible panel each, every active artwork loaded, no page overflow, order unchanged.

Refinements: removed mobile showcase-copy minimum height and reduced visual padding/height for less empty space; compact keycap padding/font keeps TypeScoop four-key HUD shortcut on one line even at320px; structured case links now a spaced mobile list with44px targets, no orphan arrow glyphs. Two-phone compositions use90cqw allowance while three-phone compositions retain60cqw, making pairs larger without overflow or uneven phone sizes. Images retain shared shadows and natural aspect ratios.

Final normal viewport screenshots reviewed phone heroes for GratefulFor/AI Ching/True Essence/Taoist Breath/Between Breaths/Roof Ops; rechecked final homepage TapScribe composition. Final320px sweep18pages has no overflow/broken completed images, shortcut key top coordinates match per row. Build/design80pages,19 Vitest and9 route/SEO checks pass. Browser viewport reset. Browser emulation only, not physical iPhone/Safari acceptance. No publication.


### Homepage navigation consolidation and About — 19 November

Owner confirmed retire old Work page and duplicate scoring/QC pages, retain other sections. Removed three source pages and added301redirects in Astro plus Cloudflare _redirects: /work→/#work, crew-scores/quality-control→/work/roof-ops. Header/footer Work and legacy back links lead to homepage anchor; updated service/Note related-work links and thank-you link. Removed retired metadata from sitemap/public guide. Distinct Plumbline retained with direct IIIMPACT showcase link, so it is reachable from home. Apps index remains useful collection, as authorised. Build tests assert redirects/noindex rather than removed duplicate chapters. Browser verified all3redirect destinations.

About rewritten from owner’s latest firsthand account: vision, shaping ideas, comfort with startup uncertainty, connecting product/team, problem-solving and bringing ideas into use; technical skills support that work. Heading Helping ideas become real, updated lede/metadata. Historical examples limited to established IMB/LobsterInk/JUMO/SwiftVEEroles, no invented metrics. Tai Chi and service links retained. Also removed stale fixed-price phrase from Systems metadata. Build/design77pages plus3redirects,19Vitest+9route/SEO checks pass. No publication.

Homepage positioning expanded by owner request: Shape the idea / Bring it into use. Lead gives equal space to shaping ideas and bringing them to fruition, and getting existing prototypes/stuck builds over the line. Supporting line covers product direction, UX and hands-on development from concept to working product. Updated default metadata description, matching metadata assertions and public llms guide; project order and interactions unchanged. Build/design77pages plus3redirects and19+9checks passed.


### Practice pages: JUMO background and naming — 19 November

Authorised: strengthen private session and team workshop pages from James’s breath talk-through and latest JUMO/Search Inside Yourself account; rename private session Return to Stillness, preserving old URL via redirect. James subsequently corrected the programme name to Just Being and the private session to one hour. Use those current details and preserve existing workshop formats, no invented original course duration/participation/outcomes. Firsthand story distinct from external sources. Google programme origin verified through SIYLI About and author’s book site; do not reproduce unverified3/5performance statistic or binary amygdala/prefrontal mechanism. Acceptance: both pages include relevant personal/practical examples, private versus team purpose clear, current name/links/metadata/contact label/public guide consistent, old URL redirects, no stale pricing or promises of perpetual calm. Verify build/design, content and route/SEO tests plus browser story/contact/redirect checks.


### Return to Stillness and stronger workshop story — 19 November

Renamed Executive State Diagnostic to Return to Stillness, with new /return-to-stillness canonical and301old-URL redirect in Astro/Cloudflare. Updated About/footer/navigation/help/reflection/contact names and legacy client mapping; internal diagnostic enquiry key retained for compatible URLs/events. Existing45minuteone-to-onevideo format retained; no prices. Rewrote both practice pages from James’s latest firsthand material: Tai Chi since early twenties; lunchtime practice/teaching at JUMO in his forties; colleagues noticing calm; reading Search Inside Yourself and recognising the value of roughly20yearspractice; own Just Inside programme; sensations as cues before reactions; student holding shoulder/arm tension despite feeling relaxed; ordinary driving/trolley reminders; noticing/returning without perfection. Workshop emphasises team listening/communication and comfortable Qigong movement; private session personal exploration.

Source check: https://siyli.org/about verifies programme began at Google; https://siybook.com/ verifies book/author and mindfulness/emotional-intelligence focus. Linked sources on both pages; no implied Google affiliation/certification for James. Unverified3of5star-performer number and simplified amygdala/prefrontal switch omitted, experience attributed personally. Latest programme name Just Inside supersedes earlier Just Being wording for now. No new essay or publication.

Contact runtime check found existing label/intro UI stuck atGeneralEnquiry while bundled analytics dependencies loaded. Extracted UI into src/contact-ui.js, loaded independently by ContactPage; analytics listeners remain in site-client. Browser now confirms Return to Stillness enquiry label/introduction, old route redirect and390pxpageheaders with no overflow. Content/metadata tests updated to current copy; baseline route test preserves former URL via redirect, SEO checks exclude its noindex redirect. Build/design77pages plus4redirects,19Vitest+9routechecks pass. No commit/push/deploy.

EQ research clarification19November: owner requested stronger teachable-EQ/performance finding. Located primary book excerpt https://siybook.com/excerpts/ which explicitly lists SIXcompetencies, FOURemotional/TWOintellectual, not recalled5/3. Added attributed finding and paraphrased six-item list to private page, shorter sourced version to workshops. Both explicitly connect trainableEQ to mindfulness/meditation and James’s realisation; no claimGoogleestablishedIQirrelevant. Supersedes earlier omission due unverifiednumber. Build/design and19tests pass.

Engineering/EQ source review19November: reviewed Tan’s published book excerpt and Wharton author interview, Goleman’s authorised workplace-theory book chapter, consortium training-report reference, and2021SIYstudy. Research note assets/portfolio-showcase/emotional-intelligence-research.md records source scope, six/four versus five domains, and limits: no original six-factor study independently located; later123employee self-report/no-control SIYstudy shows awareness changes, not demonstrated engineering performance. Both pages now explicitly state James developed Just Inside at JUMO to help train engineers, with experiential aims and no invented course results. Workshop adds learned-competence point attributed to Goleman. Build/design77pages plus4redirects,19+9checks pass.


### Simpler practice copy, Dantian address and punctuation review, 19 November

James corrected his JUMO programme name to **Just Being**, requested gentler Return to Stillness prose and changed the private session to **one hour**. The personal account now uses shorter paragraphs and a brief attributed six/four finding instead of the detailed competency list. The offer facts and metadata agree with the one-hour duration. This supersedes earlier Just Inside and 45-minute references in the session history. The research note carries the corrected name.

The full workshop rewrite must wait until James approves the Return to Stillness text. Only the corrected programme name, Dantian link and requested punctuation cleanup have changed on the workshop page during this follow-up.

James explicitly requested `/dantian`. Moved the existing page there, corrected the internal project slug, canonical/social URL, homepage and Apps links, and Taoism, Philosophy, Now and workshop cross-links. The collection generates the new sitemap and public-guide destination. `/work/dan-tian` remains a 301 redirect in Astro and Cloudflare, including the Cloudflare trailing-slash alias. Existing build tests now verify the new canonical, redirect and current internal links.

James also requested no colons or long dashes in authored copy. Reviewed built page text and metadata across the site and rewrote affected service pages, case studies, book labels and 13 essay files. Adjusted shortcut separators, date ranges, pagination, accessible labels and editable illustration text. Necessary syntax in URLs, times, code and frontmatter remains intact. Published external article versions were not changed. The final generated-HTML audit finds no colons or long dashes in authored prose, titles, descriptions or accessible labels; Astro-generated redirect notices retain their framework wording. Source artwork and screenshots remain unchanged.

Verification passed build/design with 77 pages plus five redirect outputs, 19 Vitest checks, nine route/SEO checks and six essay/import checks. Browser confirmed the old Dantian URL arrives at `/dantian`, and Return to Stillness shows Just Being and one hour. Final punctuation changes were checked in generated HTML rather than repeating visual layout tests. `git diff --check` passed. No commit, push or publication.


### Owner-supplied Return to Stillness draft, 19 November

James supplied a complete replacement body and asked to see it on the page. Replaced the private-page prose with his wording, preserving the headings, personal examples, Just Being name and one-hour offer. Converted supplied URLs to readable links and internal relative destinations. Existing page shell and metadata remain. This is local copy review, not approval to rewrite workshops or publish.

Build/design passed with 77 pages and five redirect outputs. All 19 content/component and nine route/SEO checks passed. Browser confirmed the supplied body, headings, list and links render, and the page was opened visibly and retained for James to review. No new tests were needed for this copy replacement. No deployment.


### Owner-supplied workshop copy, 19 November

James supplied the complete Stillness Under Pressure replacement and explicitly asked to use it. This supersedes the earlier wait for private-page approval. Replaced the workshop body verbatim apart from HTML formatting and converting supplied URLs into links. Preserved all seven section headings, the four-item takeaway list and the three formats. Changed the hero format label from Integration series to Short series to match the supplied copy.

Verification passed build/design with 77 pages and five redirect outputs, 19 content/component checks and nine route/SEO checks. Browser confirmed the headings, full body, formats and destinations, then left the page visible for owner review. No new copy-only tests added. No commit, push or publication.


### Owner-supplied About copy, 19 November

James supplied a complete About revision. Updated the hero introduction and body with his wording, preserving Helping ideas become real, the how-i-work anchor and service groupings. Career and product names link to his supplied external destinations; Roof Ops, feedback, portfolio, practice pages, books, paintings and contact use relative internal links. The new copy includes his own-product paragraph and the Tai Chi/JUMO/Just Being connection. Updated the About search/social description to match the introduction.

Build/design passed with 77 pages and five redirect outputs. Updated two existing copy assertions to the authorised wording; all 19 Vitest and nine route/SEO checks passed. Browser confirmed the revised introduction, all body sections and link destinations, with About left open for review. No new tests or publication.


### Final navigation and mobile review, 19 November

Added contextual Return to Stillness and Stillness Under Pressure links beneath the About Tai Chi story, in a new Dantian practice section, and in Taoism and Philosophy. Connected Books and Little Panda with the Taoist background, Taoist Breath and True Essence with Dantian, and Roof Ops with Ben’s feedback and Workflow Systems. Kept existing routes and utility/compatibility destinations.

Now states James is also teaching in George and links to https://dantian.co.za/tai-chi-classes-george/, checked live with HTTP 200 and the George class title. Paintings links to the official Procreate for iPad page and adds the owner-approved conversational direction, “No AI, just me and plenty of undo.” No historical AI date claim added. Homepage painting credit is “Painted by me”, linked to Paintings and kept together when it wraps. Moved the existing, sourced JUMO/SwiftVEE Google Launchpad line under the main homepage introduction, removing its former duplicate location above the projects.

Verification passed design/build, 19 Vitest and nine route/SEO checks. A generated-HTML audit checked 2,316 internal link occurrences across 82 HTML outputs with no missing pages/fragments, localhost links or links to retired routes. Three destinations are not in normal navigation, the thank-you route, legacy workshop enquiry and retained sanctuary compatibility page. Authored-copy punctuation audit still finds only Astro-generated redirect notices. No new automated tests added for these copy changes.

Playwright CLI reviewed 32 routes at 390px and 320px, including the homepage, Apps, every current case study, main content/service pages and representative writing routes. All 64 layout checks had no page overflow or broken loaded images. Offscreen thumbnail images belong to the intentionally scrollable showcase rail. All 22 showcase selections passed; TapScribe stays first, painting swapping works, and mobile navigation through Dantian, both practice pages, Taoism and the workshop contact intent succeeds. Desktop and phone screenshots confirm the moved credibility line and shorter caption. Evidence is in local output/playwright/final-mobile-review/. This is Chromium viewport verification, not physical iPhone/Safari verification.

The first screenshot batch stopped on Plumbline’s distinct template, then the layout and flow checks were rerun without assuming a shared hero. The local development server was restarted to clear stale Vite optimised dependency responses. No commit, push or deployment.

### Production release, 19 November

James authorised deployment. Release `05cc31b` passed clean candidate checks and Cloudflare deployment. Live73canonical routes, redirects and updated sitemap were verified. [Release evidence](../logs/2026-11-19-001-portfolio-showcase-exploration.md).

### Evening refinements release

Release `6c5739f` publishes shorter homepage copy, removes Plumbline, adds compact shared Launchpad logos/bold selection links to SwiftVEE/JUMO, preserves440px desktop shelf height, and makes StraTech/Star120thumbnail frames match the3:2standard. Clean candidate checks passed. Retired Plumbline URL needs redirect release `65f7068` because edge cache continued serving the old page.
