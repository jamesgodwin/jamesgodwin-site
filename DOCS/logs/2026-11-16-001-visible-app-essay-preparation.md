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


### Website and HEY release verified

Clean exported candidate on Node22.23.4: npm ci, public build/design guard and all43 tests pass (19+9+6+2+7). Sourcef0cba67267e35d0d3cbd8c610e7f9cb3b45d3b6a pushed to main; exact-SHA Cloudflare deploymentde1d68a3-1026-4cfd-851d-0455903c1abf completed successfully. Live article200, full source-body normalized match, self-canonical, original provenance, WebP image1200×673 and archive/sitemap/llms discovery verified.

Website: https://jamesgodwin.me/essays/the-app-is-the-visible-part
HEY: https://world.hey.com/jrsg/the-app-is-the-visible-part-9ea9e152

Used HEY skill/stored auth; public index had no title duplicate and draft listing was empty. Draft2327239087 senderjrsg@hey.com, sole recipientworld@hey.com, complete body, public image and footer were read back and verified before send. Send returned406; public index and complete public post independently confirm successful publication. No resend. Browser confirms correct title/date/full body, canonical footer and loaded1200×673 cover; screenshot output/visible-app-publication/hey-published.jpg.

Prepared LinkedIn113-word and X229-weighted-character summaries plus social JPEG. No social posting, subscriber email or Paper Trail filing claimed. James explicitly owns Search Console submission for this article and subscriber email; both await his report. Final filing follows LinkedIn confirmation. Pre-existing4November log/runbook edits remain separate from this article release.

### Paper Trail filing checkpoint

At James’s explicit request, used HEY CLI to move exact World post 1282743224 (`https://app.hey.com/world/posts/9ea9e152`) from Imbox to Paper Trail 1625722. CLI returned success. Full Paper Trail listing independently confirms the exact URL and destination box; full Imbox listing confirms absence. This request overrides the usual filing-after-LinkedIn sequence. Social posting, subscriber email and Search Console outcomes remain unconfirmed; supplied copy for James to post manually.

### Social publication confirmation

On 16 November 2026, James confirmed he posted the article on LinkedIn and X and authorised committing/pushing the documentation. Updated the publication record, backlog and handoff, including the verified Paper Trail checkpoint. Social publication is owner-confirmed; no post URLs or independent social checks were supplied. Search Console submission and subscriber email remain unconfirmed. Documentation-only verification: reviewed the focused diff and ran `git diff --check`; application tests were not repeated because no runtime files changed. Unrelated earlier Mac-storage log and publishing-runbook edits remain outside this commit.

### Publication workflow complete

On 16 November 2026, James confirmed emailing his subscribers and submitting the article to Google Search Console, and authorised this documentation commit and push. All required publication actions are now complete, combining these owner confirmations with the earlier LinkedIn/X confirmation and independently verified website, HEY and Paper Trail filing. Moved the article to Done and reconciled the publication record and handoff. Search Console submission does not establish successful Google indexing; subscriber delivery was not independently checked. Reviewed the documentation diff and ran `git diff --check`; no runtime files changed, so application tests were not repeated. Unrelated Mac-storage log and publishing-runbook edits are excluded.
