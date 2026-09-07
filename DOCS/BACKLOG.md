# Backlog

Current work status and priority. Detail lives in linked specs or logs.

<!-- When Done exceeds 20 items, or a milestone ends, append transferred items to DOCS/archive/YYYY-MM-backlog.md with the archive date, then clear only those items. Preserve previous batches in the same monthly file. Beyond ~20 Backlog items, move the clearly deferred tail to DOCS/archive/someday.md. -->

## Backlog

- Run the combined eight-person visitor exercise on the deployed LinkedIn-aligned site, then record concrete confusion or validated comprehension using [the alignment plan](specs/linkedin-site-alignment.md).

## In Progress

## Blocked

- Look Up is on hold: Apple’s Screen Time API is too unreliable to pursue now. The landing page lives on branch `lookup` — https://github.com/jamesgodwin/jamesgodwin-site/tree/lookup — and should not be merged to `main` until the app is resumed.

## Done

- Released the LinkedIn-aligned site from commit `e50ba01`; Netlify published the reviewed build and live smoke checks passed for home, Product Clarity, Workflow Systems, About, Contact, Now, social images and sitemap. James separately published the verified TapScribe pilot download in commit `2e71d99`.
- Added a final proof-and-clarity pass: plain service descriptions and a recent delivery example on the homepage, plus explicit commercial and practice groupings on About. Full suite: 33/33 passed; production build: passed.
- Tightened the local candidate around UX/product/workflow as the commercial centre: revised homepage hierarchy, separated work from practice in navigation, retained selective Workflow Systems pricing, removed the unestablished Diagnostic price, and rewrote Diagnostic, Workshops and Philosophy in a restrained first-person voice.
- Implemented the local LinkedIn/site alignment through P1–I2: product proof and enquiry, homepage work discovery, current About/Now content, accurate metadata, and revised social preview assets. Full suite: 33/33 passed; production build: passed.
- Documented the LinkedIn-aligned website plan with three detailed specs, ordered vertical slices, acceptance criteria and a next-week execution handoff.
- Centered the homepage opening headline and supporting line on desktop and mobile while preserving one-screen fit.
- Tightened the desktop homepage encounter so the opening, prompt, rings, exploration, and browse link fit within a standard desktop viewport without vertical scrolling.
- Aligned the primary route and conversion pages with the homepage, stacked the desktop encounter like mobile, and completed the deployment content and pricing pass using [the inner-page UI spec](specs/inner-page-ui-alignment.md).
- Moved the homepage mobile prompt above the pressure circles and kept `I am only exploring` below the rings.
- Simplified the homepage to its circle choices and authored reflections, retired text, voice, and public command inventories, and consolidated enquiries into one direct-contact destination using [the command discovery and contact consolidation spec](specs/command-discovery-and-contact-consolidation.md).
- Retired the partial homepage voice-input direction after Slice 1 in favour of the circle encounter and one contact path.
- Updated project memory docs to the upgraded startup template and archived the previous Done batch.
