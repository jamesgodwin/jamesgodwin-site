# Slightly off essay preview

## Summary
Prepared the complete Source article and James’s supplied cover for local review. No push or external publication. Source remains draft:true; dist contains the review candidate built with draft:false.

## Files Touched
- src/content/essays/the-website-looked-good-but-something-felt-off.md
- src/assets/writing/something-felt-slightly-off.png

## Verification
Build and design check passed (0 violations). Browser confirmed full article, cover and subscription link at http://127.0.0.1:4321/essays/the-website-looked-good-but-something-felt-off . Desktop artwork/header visually checked. Build used local Node 24.22.1; release must use prescribed Node 22.23.4 and clean candidate checks. Screenshot: output/article-preview.png (ignored).

## Decisions
James explicitly requests local review before push. After approval: website first, verify live, HEY CLI republication, then LinkedIn summary with canonical website URL for James to post. HEY subscriber email is separate from World publication; not explicitly requested here.

## Follow-ups
Await James’s local preview approval. Then switch draft:false and follow release runbook. Preserve pre-existing uncommitted documentation. No HEY publication yet. LinkedIn summary remains to prepare after live verification.

## Publication checkpoint
James approved the preview (“wow, looks great”). Published application revision 73cb822a30e7f3111bc1edd3e4a761773d0bcc0f to origin/main. Cloudflare check succeeded for deployment 38c10731-3b8c-4e9e-9e67-2cfedf361cb1. Clean exported candidate under Node 22.23.4 passed npm ci/build, Vitest, routes, essays, Notes and design suites. Initial image size assertion failed; coverQuality:65 brought the cover under the existing limit, then all suites passed. Live article paragraphs, canonical, artwork (121572 bytes), archive, sitemap and llms discovery verified. Website: https://jamesgodwin.me/essays/the-website-looked-good-but-something-felt-off .

HEY CLI draft 2305762168 read back and checked before send (jrsg@hey.com to world@hey.com only). Send returned HTTP 406 but public inspection confirmed successful publication; no retry. HEY: https://world.hey.com/jrsg/the-website-looked-good-but-something-felt-off-106dc8ee . All source paragraphs, cover and original-date website footer verified. Subscriber email not requested or sent. LinkedIn announcement saved in Source under the matching ArticleID for James to publish manually.
