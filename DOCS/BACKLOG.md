# Backlog

Current work status and priority. Detail lives in linked specs or logs.

<!-- When Done exceeds 20 items, or a milestone ends, append transferred items to DOCS/archive/YYYY-MM-backlog.md with the archive date, then clear only those items. Preserve previous batches in the same monthly file. Beyond ~20 Backlog items, move the clearly deferred tail to DOCS/archive/someday.md. -->

## Backlog

- Run the combined eight-person visitor exercise on the deployed LinkedIn-aligned site, then record concrete confusion or validated comprehension using [the alignment plan](specs/linkedin-site-alignment.md).

Deferred proposals, including terminal restoration, agent tools, opening question and Notes, are [parked outside active scope](archive/2026-10-20-agent-readiness-proposals.md).

## In Progress

- Slice 3: James’s Cloudflare domain cutover is live; primary routing/assets/mobile/pageview checks pass. Image/social/SEO improvements are qualified locally but unpushed ([evidence](logs/2026-10-20-024-images-social-seo.md)). Reconcile publication, the retained Netlify rollback destination and remaining hosted analytics checks before completing hosting acceptance ([scope](specs/essays-home-and-agent-readiness.md#slice-3--cloudflare-preview-and-production-cutover), [live evidence](logs/2026-10-20-023-live-cloudflare-verification.md)).

## Blocked

- Look Up is on hold: Apple’s Screen Time API is too unreliable to pursue now. The landing page lives on branch `lookup` — https://github.com/jamesgodwin/jamesgodwin-site/tree/lookup — and should not be merged to `main` until the app is resumed.

## Done

- Built and reviewed the main local website with all four static stories, three original illustrated essays, repeatable Source importer and aligned pages; James authorised the GitHub handoff after the final content pass ([scope and review](specs/site-story-writing-build.md#final-content-review-before-hosting-20-october-2026)).

- Built the local Case shelf with four navigable stories, static supporting screens, full-stack positioning, shared recipes and writing boards; demo interpretation corrected after feedback, build checks and 18 tests pass ([evidence](specs/homepage-proof-of-concept.md#implementation-evidence)).

- Consolidated the local design system: 410 → 187 tokens, 32 → 11 type roles, one outlined button, retired CSS/aliases and unused-token enforcement; builds, tests and browser/analytics checks passed ([result](specs/design-system-foundations.md#consolidation-result)).

- Established local design-system foundations with preserved appearance: semantic tokens, shared patterns, opt-in catalogue and enforced drift checks; 30 computed-style cases matched, all automated and browser checks passed ([spec](specs/design-system-foundations.md), [evidence](logs/2026-10-20-004-design-system-foundations.md)).

- Completed the local Astro migration for all 18 routes, current interactions and PostHog pageviews/events/exceptions/logs; 15 Vitest tests and 3 built-route checks passed, browser parity passed, homepage Lighthouse accessibility stayed 100. Obsolete pilot DMG removed at James’s request. No deployment ([evidence](logs/2026-10-20-003-local-astro-migration.md)).

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
