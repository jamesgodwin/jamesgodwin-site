# Essay pagination and consistent naming

## Summary

Added local static pagination at 12 essays per page and aligned public navigation/archive labels to Essays. The 15-essay candidate now has 12 entries at `/essays` and three at `/essays/page/2`. Existing published content, original covers, individual URLs and design system are preserved. No commit, push or deployment.

## Files Touched

- Shared archive/pagination modules and page-two dynamic route, reusing WritingList and the existing Action recipe. Pagination CSS uses existing tokens for layout only.
- Header/footer/homepage/reading navigation, metadata, help, legacy redirect label and llms guide use Essays consistently.
- Sitemap includes every generated archive page with a self canonical.
- Built-essay regression check and documentation/handoff updated; prior uncommitted backfill work preserved.

## Verification

- Initial built-output pagination test failed with 15 rather than 12 entries, then passed after implementation. Built checks confirm page-size limits, chronological completeness, no repeated entries across pages, first/last navigation boundaries, unique canonicals, sitemap membership, no duplicate page-one output and no extra page. Test derives the expected page count from the selected articles so future backfills can create further pages.
- Build/design guard pass; 19 Vitest tests, five importer/essay checks and eight built-route/SEO checks pass. Final targeted built-essay rerun passes after removing attribute-order sensitivity from its navigation assertion.
- Direct pagination-boundary check at 0, 1, 12, 13, 24, 25 and 49 entries passes: complete order, at most 12 per page and no unavailable previous/next links.
- Browser Next takes `/essays` (12 entries) to `/essays/page/2` (three entries), then Previous returns to `/essays`. Updated header/current navigation, page/range text, cover loading, canonicals and absence of desktop overflow confirmed. Screenshot `output/article-review/essays-page-2.png` inspected.
- Local preview returns HTTP 404 for `/essays/page/3`. A dedicated mobile viewport was not repeated; existing responsive card rules and wrapping pager composition are retained. No hosted/release verification claimed. `git diff --check` passes.

## Decisions

Use Essays for the visible section name, retaining internal writing component/class names. Featured entry counts within the first 12. Use crawlable static pages and normal links with no client-side filtering, load-more controls or query-only routes. Framework routing guidance checked through Context7’s official Astro documentation. Source authoring/publication state remains untouched.

## Follow-ups

Review the local essay/backfill candidate and authorise release separately. Search Console and the visitor exercise remain open as before.
