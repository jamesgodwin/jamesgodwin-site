# Identity and LinkedIn destinations

Part of [LinkedIn and website alignment](linkedin-site-alignment.md). Backlog owns status. This spec proposes supporting copy and a LinkedIn handoff; external profile changes remain separate.

## Problem

About and default previews lead with regulation while LinkedIn leads with practical delivery. Now is dated June. Featured needs a clear proof-to-engagement sequence. These surfaces should describe the same person without flattening his wider identity.

## User-Facing Outcome

Visitors recognise James's practical contribution, understand the practice behind his judgement and see accurate descriptions before following shared links.

## Scope

About, Now, home/About/product/contact metadata, inspection of existing social images and a maximum-three-item Featured recommendation for Week 2.

## Out Of Scope

New LinkedIn headline, full profile rewrite, posting, cadence changes, new articles/blog/newsletter, app-site rewrites or turning private life history into marketing.

## Current Behaviour

`about.js` and its presentation lead with regulation and put diagnostic/workshop/True Essence before systems. `now.js` is dated 12 June. `siteMetadata.js` owns route metadata while `public/index.html` duplicates defaults. The production build runs the metadata prerender script. Existing share-image wording has not been visually checked for this plan.

## Proposed Behaviour

### About structure and proposed copy

Hero title **Seeing what is getting in the way.** Lede:

> I work across products, workflows and human attention, helping people notice what is stuck and make the next useful change.

Opening:

> I help founders and teams when products or workflows are almost there, but still do not work cleanly.
>
> The gaps may be in the UX, accessibility, implementation or the way work passes between people. I make those gaps visible and help close them.
>
> I bring twenty years across UX, product strategy and design systems, alongside experience building products and practical systems of my own.

Next include a short proof paragraph using P2's checked operational example and link `/systems#client-example`. Avoid expanding the claim or implying every product is award-winning.

Then explain the source of judgement:

> Thirty years of Tai Chi practice have shaped how I pay attention to pressure, timing and unnecessary force. That way of noticing carries into my product work and my teaching.
>
> Sometimes the useful change is in an interface or a handoff. Sometimes it is in the way a person or a team is meeting the work.

Retain supported lineage detail from the existing About copy in this practice section. Keep `#how-i-work` and its existing hero link. Under How I Work, put Product Clarity and Workflow Systems first, followed by diagnostic, workshop and True Essence. Link each to its existing route; do not imply a required sequence or bundle. Include one brief invitation to explore books, paintings and Taoism for their own value. End with Contact.

Use first person. Remove universal causal assertions about state determining product quality and defensive explanations about wellness. Do not add private Source biography.

### Now

Use four to six short items, dated on the actual day the content is verified. Candidate topics to confirm at execution:

- Helping founders/service businesses resolve product or workflow gaps.
- Writing about real product decisions, useful technology and lived practice.
- Building or maintaining own apps, naming only products with freshly checked status.
- Tai Chi/Qi Gong practice and teaching, with cadence/location only if verified.
- An outdoor or creative interest James still wants public, based on already-public material or direct confirmation.

Do not assert a compulsory weekly leadership series during the flexible programme, describe paused products as growing, announce Look Up, or publish the full marketing schedule. Omit unverifiable items rather than change their date and imply freshness.

### Metadata proposal

| Surface | Title | Description |
| --- | --- | --- |
| Home/default | James Godwin — Product, UX and Workflow Clarity | I help founders and teams close UX, accessibility and implementation gaps in products and workflows. Explore my work, writing and Tai Chi practice. |
| Product | Product Clarity — James Godwin | Help for founders and small product teams whose fast-built or AI-assisted products have stalled. Close UX, accessibility and implementation gaps. |
| About | About James Godwin — Products, Practice and Perspective | Twenty years across UX, product strategy and design systems, shaped by thirty years of Tai Chi practice. Meet James and explore his work. |
| Contact | Contact James Godwin | Talk to James about a product, workflow, workshop or personal practice enquiry. Contact him directly by email or WhatsApp. |

Use the site's existing pipe separator in implementation titles, in place of the table's dash. P1 sets Product/Contact entries; I2 verifies them and changes Home/About defaults. Preserve accurate systems/diagnostic/workshop-specific metadata and all existing canonical paths.

Synchronise default title, description, Open Graph and Twitter fields in `public/index.html` with `siteMetadata.js`. After build, inspect generated home, `/uxui`, `/systems`, `/about`, `/contact` and `/now` HTML. Direct static route requests must carry correct metadata without needing React. Check runtime metadata independently while navigating.

Inspect `public/og.webp` and `public/twitter.webp`. Keep them if their visible content is compatible. If embedded copy is obsolete, propose the smallest update using existing artwork/type and obtain James's visual review of the actual asset before deployment. No speculative visual overhaul.

### LinkedIn handoff

Recheck the live Featured section during Week 2 and prepare at most:

1. **Checked delivery example.** Prefer the programme's Ben/Roof Ops case once actually published; otherwise the revised `/systems#client-example` after deployment. Label it operational delivery evidence, not an AI-rescue case.
2. **Concrete judgement article.** The observed real-component design-system article is a candidate. Read the actual article and capture its exact title/canonical URL before selecting it. Do not invent a URL from a truncated browser result.
3. **Working with James.** Revised `/uxui`, after deployment, labelled “Help with a product that is almost there.”

Propose changing the profile's website destination to `/uxui` only once it is live and verified, because the headline invites product enquiries. Keep the homepage for general personal-site references and use `/systems` for operational topics when links are appropriate. Reflective posts do not need forced commercial CTAs.

Prepare exact labels and URLs locally. Pending/unpublished assets stay explicitly pending; never supply a fake live link. Keep the current headline and About initially. The Source programme's existing Week 2 review owns adoption and the final recommendation at `Business/Weekly Reviews/2026-09-18 - LinkedIn Profile and Engagement Path.md`; reference this spec there during that routine instead of creating another queue or scorecard. No Source file is edited by this planning task.

## Interface And Seams

`src/outputs/about.js`, `src/outputs/now.js`, `src/pagePresentation.js`, `src/siteMetadata.js`, `public/index.html`, existing prerender script and inspected social assets only if needed. `contentQuality.test.js` asserts an old About sentence; update it to protect supported claims/routes rather than requiring obsolete copy.

## Implementation Slices

### I1 Meet the same James on About and Now

- Outcome: practical capability, deeper practice and truthful current activity are coherent.
- Includes: About order/copy, checked proof link, retained exploration and verified Now content/date.
- Test seam: rendered headings, `#how-i-work`, work links and absence of command inventories; manual claim/date check.
- Blocked by: P1/P2. If Now confirmation is absent, finish About but record Now as unfinished.
- Acceptance: no private biography; work before its philosophical explanation; practice routes retained; every Now statement verified or omitted; truthful update date.
- Demo: exploration → About → work route, then the dated Now page.

### I2 Share accurate destinations

- Outcome: shared previews agree with page content and Featured recommendations point to real destinations.
- Includes: defaults, static template, P1 metadata verification, image inspection and exact local Featured recommendation.
- Test seam: production build/generated HTML inspection and browser runtime titles.
- Blocked by: I1 for copy, P1/P2 for proof. Public adoption waits on verified deployment; the local draft can be reviewed beforehand.
- Acceptance: static/runtime agreement, unchanged canonical paths, reviewed images, no pending link called live, no profile mutation without authorisation.
- Demo: built page metadata plus three proposed Featured items, each with verified URL or explicit pending state.

## Testing Plan

Run affected contentQuality/RoutePage tests, then full `CI=true npm test -- --watchAll=false --runInBand` and `npm run build` for the candidate. Inspect static HTML and runtime metadata independently. Distinguish platform preview caching from incorrect deployed metadata. No application tests are needed for this documentation-only session.

## Open Questions

Current Now details, the exact Featured article URL and social-image wording need verification in their slices. These do not require reopening strategy or other product work.
