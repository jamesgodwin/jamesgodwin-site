# Full published-article backfill

## Summary

James approved importing all 12 reviewed published articles. The local archive now contains 15 published essays, with original dates, verified live titles/links and original covers. Three unpublished Source articles remain outside the selection. The deployed archive still has the original three; no GitHub push or deployment occurred.

## Files Touched

- `scripts/essay-selection.mjs`: 12 additions, newest-first order and explicit published-text reconciliations.
- `scripts/lib/essay-import.mjs` and its test: safe explicit source basename for the May 31 legacy filename, while retaining publication-log checks, conflict protection and stable repeat imports.
- `src/content/essays/`: 12 new managed articles; existing three bodies unchanged.
- `src/assets/writing/`: 12 original LinkedIn cover PNGs. Astro generates responsive WebP versions.
- `src/content.config.js` and essay reading template: optional cover quality, default 80; ban/workflow cover uses 75 and textured appliance cover uses 50 to meet the existing 150 KB content-image gate. No layout, token or shared recipe changes.
- Import runbook, scope, backlog and handoff record local completion and separate release status.

## Verification

- All 12 imported bodies match the actual visible live LinkedIn article text after normalising Markdown formatting. Covers were downloaded from those exact articles and copied from the reviewed set; titles, publication dates and original links are preserved. Older draft text was reconciled through explicit literals, not rewritten. No image prompts, editorial sections or private source metadata enter public output.
- Final repeat import after all metadata changes: 0 written, 15 unchanged, no conflicts. Publication Log correctly overrides the stale July 21/28 draft labels.
- New legacy-file test failed on the missing-filename behaviour before implementation, then passed; it checks published state, stable repeats, path-traversal rejection and absence of sourceFile from public frontmatter. Existing conflict/draft tests still pass.
- Build/design guard pass (83 source files, zero violations). 19 Vitest tests, four importer/essay checks and all eight built-route/SEO checks pass. The route image-budget check initially caught two large images; per-cover compression resolved it without loosening the gate. Source originals are unchanged.
- Browser: all 12 new local reading pages show the expected title, loaded WebP cover, canonical and no horizontal overflow at the current desktop viewport. Writing index has one featured essay plus 14 cards. Screenshots of the archive and compressed appliance cover were inspected; text remains readable. Draft fixture remains absent; sitemap and llms include the new public candidates through the existing generators.
- Browser artifacts/live-text snapshots under ignored `output/article-review/`. This turn did not repeat dedicated mobile-size or hosted analytics tests; shared layout and analytics are unchanged. Local build and route checks do not establish a deployed release.

## Decisions

Preserve the actual published articles, including their original opinions and period-specific product descriptions; no technical or editorial updates were made. Category/lead/alt text provides concise archive metadata. Keep the design system and latest-first ordering. All 12 imports are approved; production release remains separate. Source files and publication records were not modified.

## Follow-ups

Review the 15-essay local archive, then commit/push and verify the exact hosted candidate when authorised. Search Console remains an account-level follow-up and the visitor comprehension exercise remains separate product evidence.
