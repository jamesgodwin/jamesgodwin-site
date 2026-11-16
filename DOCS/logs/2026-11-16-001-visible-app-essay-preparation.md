# The app is the visible part — preparation

## Summary

James supplied a complete draft and firsthand context about a friend who wanted to build an Airbnb clone, overlooking the payment, back-office and operational system behind the visible app. He requested a light editorial pass and the usual website/HEY/LinkedIn/X publication flow, with his cover image to follow. Prepared a 298-word essay and channel payloads locally; no external publication.

## Files Touched

- `DOCS/specs/assets/app-visible-part-publication/website.md`: complete staged essay with intended 16 November date and local ARTICLE-2026-11-16-01 ID.
- Same folder: full HEY HTML, LinkedIn text, X text and publication pack.
- Backlog/handoff: current focus and final-image dependency; preserved prior Search Console follow-up and other unfinished work.

## Verification

No existing essay slug collision. Website schema and publishing runbook inspected. Staging remains outside the content loader, so the missing required cover cannot break builds or accidentally publish. X draft229 weighted characters. No runtime/source/asset changes, build or tests; this is editorial preparation only. No fake final cover or public URL. No commit, push, deployment, HEY draft/send, subscriber email or social post performed.

## Decisions

Preserved the anecdote and opening/closing voice. Added back-office examples and decision/ownership work; softened the absolute interface claim because operational tools also have screens. Avoided inventing firsthand experiences or giving platform/payment/legal implementation advice. Website original with no LinkedIn attribution. Image to be supplied by James, then renamed/optimised to WebP and reviewed in the local website. Existing authorisation covers intended publication workflow; do not publish incomplete artwork.

## Follow-ups

Receive final image, inspect/optimise it and set accurate alt text; install the draft collection entry and build the complete page preview. Then complete release verification, website deployment, Search Console inspection/indexing request, HEY and social distribution under the publishing runbook. Record actual channel outcomes in this log/pack, with subscriber email and final Paper Trail filing distinct.


### Final-image preview and approval

James supplied the maze/app image. Renamed/converted to `src/assets/writing/the-app-is-the-visible-part.webp`, retaining available AI-source XMP: original PNG2,683,558 bytes, WebP323,324 bytes. Set descriptive alt and coverQuality60; 1280px output approximately114KB. Social JPEG prepared locally. Added draft collection entry. An isolated Node22.23.4 preview build and43 tests passed (19+9+6+2+7); browser verified the complete article and loaded image at http://127.0.0.1:4184/essays/the-app-is-the-visible-part . Preview workspace `/var/folders/l8/1rvkj_p15y3_zj3x24wsnzb00000gn/T/visible-app-preview-hi8ute1q`, server session17511; screenshot ignored at output/visible-app-preview/article.jpg.

James then said “Perfect, let’s continue”, authorising the approved release. He explicitly owns Search Console submission for this piece and the HEY Email to subscribers click. Set the release essay draft false and exported clean candidate for final checks. No HEY send before website verification.
