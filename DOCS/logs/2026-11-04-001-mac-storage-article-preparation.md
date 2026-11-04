# Mac storage article preparation — 4 November 2026

## Summary

Prepared “My Mac Was Hiding 81 GB in Plain Sight” from James’s supplied September Source article for website-first publication, HEY World, LinkedIn and X. Extracted the before/after visual direction for James to generate the cover in Midjourney. Publication is explicitly held until he supplies the final image.

## Files Touched

- `DOCS/specs/assets/mac-storage-publication/website.md`: complete staged essay, website-original provenance, 4 November intended publication date, original September ArticleID and draft true. Missing cover/alt is explicitly pending; file remains outside the content loader.
- `DOCS/specs/assets/mac-storage-publication/hey-body.draft.html`: full body and planned canonical/date footer; final cover deliberately omitted.
- `DOCS/specs/assets/mac-storage-publication/publication-pack.md`: channel drafts, Midjourney direction, source/date provenance, release gates and remaining steps.
- Backlog/handoff: preparation checkpoint and image dependency.

## Verification

Full 1,155-word body matches the supplied Article section except “This afternoon” → “In September” to retain the date of the firsthand observation. Source file unchanged. No editorial verification/internal notes included in the article. X draft is 202 weighted characters including a 23-character URL. No runtime code changed; no build/tests run. No new essay route exists; no deployment, push, HEY draft/send, subscriber email or social post performed. Existing publishing-runbook modification preserved.

## Decisions

Use the existing essay and distribution workflow. Planned canonical is `https://jamesgodwin.me/essays/my-mac-was-hiding-81-gb-in-plain-sight`; it is not live. Do not insert a fabricated cover or publish before final image review. Update publication date if release happens after today. Original article remains the factual/voice source.

## Follow-ups

James reviews the local article and supplies the image. Then inspect/optimise image, replace pending alt, move essay into the collection, preview/check and publish under the agreed image gate. Verify website before HEY; remind James to email subscribers manually, prepare social announcements and file HEY after LinkedIn confirmation per the runbook.


### Final-image and preview checkpoint

James supplied the final Midjourney PNG and requested an optimised, named WebP plus browser review before deployment. Created `src/assets/writing/my-mac-was-hiding-81-gb-in-plain-sight.webp`: 1456×816, 360,750 bytes versus 2,825,025-byte PNG (87.2% smaller), keeping AI-source XMP. Added `src/content/essays/my-mac-was-hiding-81-gb-in-plain-sight.md` with draft true, accurate alt text and coverQuality 38; source art remains intact on Desktop. Astro’s 1280px browser rendition is 116,560 bytes.

Main build/design passes and excludes the draft route/sitemap entry. Exported an isolated preview at `/var/folders/l8/1rvkj_p15y3_zj3x24wsnzb00000gn/T/mac-storage-preview-1dptgsb4`, enabling only this essay in that copy. Node 22.23.4 build/design and 36 tests pass (Vitest19/routes9/essays6/Notes2). Browser verifies heading, supplied cover, full text and HEY subscription link. Preview is http://127.0.0.1:4183/essays/my-mac-was-hiding-81-gb-in-plain-sight ; server session81071. No commit, push, deployment or external posting. Await James’s explicit preview confirmation; then website release and agreed channel sequence.


### Publication authorised

James approved the complete website preview and explicitly requested deployment, HEY publication and LinkedIn/X drafts. Set the collection essay draft false. Clean exported candidate passes npm ci, build/design and all release suites on Node22.23.4; no publication outcome is inferred until hosted verification. HEY sender `jrsg@hey.com` available; public HEY index does not contain this title before publication.
