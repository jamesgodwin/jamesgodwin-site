# Backlog

Current work status and priority. Detail lives in linked specs or logs.

<!-- When Done exceeds 20 items, or a milestone ends, append transferred items to DOCS/archive/YYYY-MM-backlog.md with the archive date, then clear only those items. Preserve previous batches in the same monthly file. Beyond ~20 Backlog items, move the clearly deferred tail to DOCS/archive/someday.md. -->

## Backlog

- Before the next website-original Note, extend the implemented essay original-versus-imported provenance support to Notes schemas, bylines and metadata ([publishing procedure and current gap](runbooks/publish-writing.md#1-website-first)).

- Recheck Google’s crawl/index refresh for `/about`, `/little-panda` and historical exclusions after the 26 October review; current sitemap succeeds and the email-link fix is deployed ([evidence](logs/2026-10-26-001-search-console-review.md)).

- Run the combined eight-person visitor exercise on the deployed LinkedIn-aligned site, then record concrete confusion or validated comprehension using [the alignment plan](specs/linkedin-site-alignment.md).

Deferred proposals, including terminal restoration, agent tools, the opening question and general feed-import automation, are [parked outside active scope](archive/2026-10-20-agent-readiness-proposals.md).

## In Progress

- “Why I Kept a Step I Could Have Removed” is live on website and HEY; authorised subscriber email pending HEY browser sign-in and verified send ([checkpoint](logs/2026-10-22-002-kept-step-publication.md)).

## Blocked


- Look Up is on hold: Apple’s Screen Time API is too unreliable to pursue now. The landing page lives on branch `lookup` — https://github.com/jamesgodwin/jamesgodwin-site/tree/lookup — and should not be merged to `main` until the app is resumed.

## Done

- Published HEY subscription links on all 39 writing pages (`9b87551`, successful Cloudflare deployment); all 15 essays and 20 Notes republished to HEY with full text, cover URLs, original dates and source links verified. No subscriber-notification action taken ([evidence](logs/2026-10-22-001-hey-world-test.md)).

- Published and verified the complete twenty-note collection and 12+8 pagination (`3e71ea7`); clean build/41 tests, 90 live URL checks, 246 assets, 60 sitemap URLs and exact HTML for 39 Notes/Essays pages pass ([release](logs/2026-10-20-039-notes-pagination-release.md)).

- Completed eight further curated Notes locally (twenty total), original artwork and twelve-per-page navigation; design/build and 41 tests pass, desktop reading/navigation and narrow visual layout checked ([evidence](logs/2026-10-20-038-notes-completion-pagination.md)).

- Published twelve curated Notes and accumulated documentation (`54fde00`); Cloudflare succeeds, clean build/design and 40 tests pass, live routes/assets/SEO/exact HTML and browser navigation/narrow layout verified ([release evidence](logs/2026-10-20-037-notes-release.md)).

- Published and verified the 15-essay archive, 12-per-page pagination and consistent Essays navigation (`399e7e7`); Cloudflare succeeds, 39 automated checks and live route/asset/SEO/desktop checks pass. Phone-width repeat remains unverified ([release evidence](logs/2026-10-20-032-article-pagination-release.md)).

Earlier completed work is preserved in the [October archive](archive/2026-10-backlog.md).

- Completed 21 October 2026: patched Node build runtime published and verified in Cloudflare production, with final live routes passing ([evidence](logs/2026-10-21-001-node-security-update.md)).
