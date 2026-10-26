# Search Console review — 26 October 2026

## Summary

Opened the authenticated domain property, Messages drawer and newest notification (26 October). It names Not found (404) and Alternative page with proper canonical tag. The previous alert (23 August) names Page with redirect. Read all six current exclusion categories and every example (15 URLs total); the current report is dated 23 October: 68 indexed, 15 not indexed.

| Reason | URLs / finding | Action |
|---|---|---|
| Page with redirect (10) | HTTP/www roots, `/systems/`, old HTTP grand-master post, workshop aliases, contact query variants, `/little-panda` | Checked all ten live destinations; current valid pages return 200, old grand-master article returns 404. Query URLs now render with canonical contact URLs. Preserve normalisation/aliases. |
| Not found (1) | `/cdn-cgi/l/email-protection`, crawled 23 October | Live `/contact` HTML reproduces Cloudflare's rewritten link. Add documented email_off comments around the three public mailto links in ContactPage/legal. |
| Duplicate without user-selected canonical (1) | `/blessed-to-have-been-trained-by-grand-master`, crawled 8 October | Predates migration; now real 404, absent from current source/sitemap. No equivalent content found; do not invent unrelated redirect or claim restored content. |
| Alternative with proper canonical (1) | `/contact?about=diagnostic`, crawled 22 October | Live 200 correctly declares `/contact`; expected exclusion. |
| Discovered, not indexed (1) | `/about`, no crawl yet | URL Inspection confirms discovery through sitemap. Request indexing accepted into priority crawl queue. Indexing itself remains pending. |
| Crawled, not indexed (1) | `/books/`, crawled 1 August | Live 308 to `/books`, which returns 200. Historical slash variant; no content repair needed. |

Current sitemap: submitted/read 23 October, Success, 61 discovered pages. Removed two obsolete submissions dating to September 2010: `http://jamesgodwin.me/rss.xml` (now 404) and `http://observe.jamesgodwin.me/sitemap.xml` (DNS does not resolve). Verified only current successful sitemap remains. These actions remove submission records, not website content or indexed pages. No routine current-sitemap resubmission.

## Files Touched

- `src/components/ContactPage.astro`, `src/outputs/legal.js`: narrow Cloudflare opt-out around existing public email links.
- `tests/seo-build.test.cjs`: ensure production output preserves three mailto links and opt-out comments through HTML compression.
- Backlog/project/handoff: reconcile account inspection and pending Google crawl outcome.

## Verification

- Initial live curl reproduction: contact HTML contains `/cdn-cgi/l/email-protection` and `data-cfemail`; source has ordinary mailto links. This distinguishes edge transformation from broken source hrefs.
- Candidate exported from HEAD plus only three changed code/test files. Node 22.23.4 `npm ci`, build/design guard and all required suites pass: Vitest 19, routes 9, essays 6, Notes 2, design 7 (43 tests). Earlier local Node 24 run also passed; release qualification uses required Node 22.
- Live curl: about/contact query/sitemap 200; correct about/contact canonicals; books slash 308 to 200. Python urllib default requests returned 403 while curl and Google's live indexing-request check succeeded; no access policy changes made.
- Screenshots saved (ignored) under `output/search-console/`: latest-notification.png, sitemaps-cleaned.png, about-indexing-requested.png.
- Source committed/pushed as `8fb6610e0205559e5979f0d401c526bba608a044`; exact-SHA Cloudflare check completed successfully, deployment `7d59c6e7-7bb9-4028-b3dd-ce1bc20b8f91`. Live contact (one) and legal (two) links now retain direct mailto hrefs without email-protection URLs. All 61 live sitemap URLs return 200, declare matching canonicals, lack noindex and contain no email-protection links; results saved in `output/search-console/live-verification.json`.

## Decisions

- User explicitly authorised commit, push and deployment after local review.
- Use Cloudflare's documented per-address comments rather than changing zone settings: https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/#prevent-cloudflare-from-obfuscating-email
- Expected canonical/redirect exclusions do not require zeroing the report. Google history refresh and indexing are distinct from fixing links. Do not claim all alerts resolved immediately or validate intentional 404s as restored pages.
- Preserve all pre-existing uncommitted documentation; code commit contains only the targeted three files.

## Follow-ups

- Release and hosted output verified. Sitemap-filtered GSC snapshot reports 58 indexed and 2 excluded (60 counted versus 61 discovered, different report processing stages); exclusions are `/about` and old `/little-panda` redirect last crawled 4 August. Live `/little-panda` now returns 200 with self-canonical. URL Inspection confirms historical 4 August crawl; its indexing request was accepted into the priority crawl queue on 26 October, with confirmation saved as `little-panda-indexing-requested.png`.
- Google must recrawl `/about` and refresh historical exclusions; request acceptance does not guarantee indexing. No scheduled monitor was requested.
