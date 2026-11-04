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


### Website and HEY publication verified

Approved source1207ae5fe7b466f270e88b077bf1401d0b9ed40e pushed to main; exact-SHA Cloudflare deployment5fd2a2ed-13fd-4325-84ef-6fb863803ca7 completed successfully. Clean Node22.23.4 npm ci/build/design and43 tests pass (19+9+6+2+7). Live article200, canonical, original provenance, full ending, subscription, archive, sitemap and llms discovery verified. Cover dimensions1200×673; hosted encoder differs from local by16 bytes, mean pixel channel difference0.147/255. No byte-identity claim; image is correct and loaded.

Website: https://jamesgodwin.me/essays/my-mac-was-hiding-81-gb-in-plain-sight

Used the HEY skill and stored auth. No title duplicate on public index beforehand. Draft2314731061 read back fromjrsg@hey.com toworld@hey.com only; full-body normalized match, image, date and canonical verified. Send returned406 Not Acceptable, but the draft disappeared and public index/post prove publication. Did not resend. Browser verifies complete text and loaded1200×673 cover. HEY: https://world.hey.com/jrsg/my-mac-was-hiding-81-gb-in-plain-sight-62f04abc . Screenshot: ignored output/mac-storage-publication/hey-published.png.

Prepared copy-ready linkedin.txt, x.txt (202 weighted characters), full HEY HTML payload and social JPEG under the publication assets folder. Subscriber email remains James-owned: explicitly reminded him to click Email to subscribers. LinkedIn/X not posted; Paper Trail filing awaits LinkedIn confirmation. No Source authoring file edited. Pre-existing publish-writing.md edit preserved separately.


### Distribution and filing completed

James confirmed LinkedIn and X publication and that he emailed HEY subscribers (owner-reported; no independent social/send verification claimed). Under his explicit request and the HEY skill, moved exact HEY World box item1275913292 (`https://app.hey.com/world/posts/62f04abc`) from Imbox1625718 to Paper Trail1625722. CLI reports one thread moved. Full Paper Trail listing verifies the same item/title/app URL with box_id1625722; full Imbox listing confirms its absence. The initial default Paper Trail page omitted this older-dated item, so all pages were inspected; no second move or deletion performed. Article distribution and final filing complete.


### Documentation closeout

At James’s request, reconciled the backlog, project summary, handoff, publication pack and publishing runbook to completed article distribution. Retained the distinction between verified website/HEY/filing and owner-confirmed subscriber email/social publication. Current source contains 18 published essays; updated current collection counts without changing historical release evidence. Documentation-only verification: checked diff formatting and local Markdown links; application checks were not rerun because no application source or assets changed. Documentation is committed with `[CF-Pages-Skip]` so the verified article deployment remains in production.
