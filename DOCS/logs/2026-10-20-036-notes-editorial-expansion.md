# Notes editorial expansion

## Summary

James liked the initial five Notes and delegated further cherry-picking/import. Selected seven more distinct published pieces, bringing the local archive to twelve. [Accepted expansion and selection reasons](../specs/selected-linkedin-notes.md#accepted-expansion--20-october-2026). Original five bodies and the 15 essays were not rewritten. No public release performed.

## Files Touched

- Seven new Markdown notes and unchanged original JPEGs under `src/content/notes/` and `src/assets/notes/`.
- `scripts/note-selection.mjs` appends the verified originals, source URLs and image hashes. The Notes integration check now covers all twelve manifest entries.
- Current scope/backlog/handoff/project, Notes maintenance runbook and the migration decision pointer reflect the expanded selection.
- Ignored `output/notes-expansion/` holds source captures, build output, browser checks and screenshots. Earlier uncommitted changes were preserved.

## Verification

- Read the saved post archive and complete selected bodies, checked publication Log, then verified each of the seven live LinkedIn posts. Recovered and visually inspected each matching original image. CLI screenshot contains James’s own published draft, with no unrelated inbox content.
- Excluded explicitly held/unpublished LI-00109; avoided the design-system/portability essay overlap and repeated abstract variations. Selection is editorial, not a new performance ranking.
- Updated existing built-output behavior check: red while only five Notes existed, green at twelve. It covers selected reading routes, canonicals, source attribution, BlogPosting schema, responsive WebP, sitemap/llms discovery, draft exclusion and unchanged 15-essay counts.
- Final build and design guard pass. Relevant suites pass: Notes 1, essay/import 5, route/SEO 8 and Vitest 19, total 33. Design guard unit tests were unchanged and not rerun in this content expansion; their previous run is in the first-batch log.
- The image-budget check initially failed for two textured covers. Per-note WebP quality overrides of 55 and 25 resolve this; no threshold was weakened and original bytes remain unchanged. All default Notes card/reading images are below 150,000 bytes; largest is 139,048. Inspected the served lower-quality interest/demand cover and its reading page.
- SHA-256 checks pass for all twelve retained original JPEGs. New bodies contain no captured reaction/analytics UI or invisible feed separators.
- Browser: twelve archive cards, all twelve cover images loaded with contain fit, no horizontal overflow. All seven new reading pages show the correct title, source URL and loaded cover without horizontal overflow. Screenshots saved and inspected. Same components/layout as the first five; the earlier 390px visual check was not rerun for this content-only expansion.
- No Source files, LinkedIn content, account settings, newsletter integrations or public website changed. No commit, push or deployment. `git diff --check` passes.

## Decisions

- Keep seven concrete additions, including the spontaneous spider and terminal experiences, rather than pad the collection with repeated positioning arguments. Preserve the published blunt terminal title.
- Recorder demand-test numbers are explicitly a historical snapshot; no new conversion/performance claim is inferred. Recovery is an early installed-build test, not a claim about current failure or customer outcomes. AI Ching pricing detail is omitted to avoid ageing the note around an offer.
- Keep the existing Essays/Notes split, twelve-note archive, static reading screens and selected design system. No new UI or general importer was needed.

## Follow-ups

Review the expanded Notes locally. Production release remains a separately authorised GitHub push and Cloudflare check. Existing Search Console, visitor exercise, HEY exploration and essay phone-width repeat remain separate.
