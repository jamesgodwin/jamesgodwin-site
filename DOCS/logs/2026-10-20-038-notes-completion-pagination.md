# Curated Notes completion and pagination

## Summary

20 October 2026: James delegated selection/adaptation of the strongest remaining published LinkedIn posts and requested twelve Notes per page like Essays. Added eight for twenty total, retaining the original twelve unchanged. The accepted selection and rationale live in [the Notes spec](../specs/selected-linkedin-notes.md#accepted-completion-and-pagination--20-october-2026). This is a completed local implementation; no commit, push or new production deployment was performed. Production remains the previously verified twelve-note release.

## Files Touched

- Eight Markdown adaptations in `src/content/notes/`, eight unchanged downloaded originals in `src/assets/notes/`, provenance manifest in `scripts/note-selection.mjs`.
- `src/note-pagination.js`, `src/components/site/NoteArchive.astro`, Notes index and numbered route.
- `WritingPagination.astro` shared by Notes and Essays through the existing action recipe and CSS. No new design values.
- `src/pages/sitemap.xml.js`, `src/pages/llms.txt.js`, Notes tests and package script.
- Notes spec, Project, import runbook, backlog and handoff.

## Verification

- Each of the eight published originals was opened through LinkedIn, confirmed as James's matching text, and its artwork downloaded. Dates and links reconcile to Source's publication Log. Original Source files were not edited. Ignored candidates and browser source evidence: `output/notes-completion/`.
- Red/green: page-boundary test initially failed because no Notes pagination helper existed; it passes after implementation. Built Notes integration then failed because the page-two document was absent; it passes with the archive route.
- `npm run build` passes, including `check:design`. All 41 tests pass: `npm test` (19), `test:notes` (2), `test:essays` (5), `test:routes` (8), `test:design` (7). Tests exercise zero/one/exact/beyond page boundaries, unique coverage and date order, metadata, discovery and draft exclusion; unchanged fifteen-essay archive remains 12+3. Notes test was rerun after strengthening the original-hash/order assertions; no application changes after the build.
- Twenty original image SHA-256 values match the selection manifest. Default card and reading WebP assets remain below 150,000 bytes, largest 139,934 bytes. New reading defaults range from 22,614 to 93,372 bytes. The original-image contact sheet and rendered reading image were visually inspected.
- Browser: Notes twelve-plus-eight counts, Next/Previous, all eight new reading pages with loaded covers/correct source hrefs/no desktop overflow, reading return, Essays/Notes switching and essay page-two count all pass.
- A 390px iframe archive and pager were visually inspected; the Previous action wraps cleanly above the count. Embedded click control returned unavailable-target errors; viewport override still reported 1280px on ordinary tabs. Override reset. Desktop clicks establish navigation; narrow visual inspection does not establish phone interaction acceptance. Earlier essay phone-width repeat remains outstanding.
- `git diff --check` passes. Checks and screenshots are ignored under `output/notes-completion/`. Analytics/contact capture was unchanged and not retested. Production verification is deferred until an authorised release.

## Decisions

- Stop at twenty distinct Notes rather than filling twenty-five with repeated arguments. Keep original voice, dates, source attribution and images; remove feed prompts and soften universal physiology language. The client outcome remains owner-reported, without invented savings/revenue.
- Eight additions cover marketplace complexity, workflow rules, dashboard pressure, calm interaction, team pace, push-hands sensitivity, an evening boundary and visual perspective. Repeated finish-line posts, duplicate essay topics and held LI-00109 remain excluded. This is editorial selection, not a claim of highest engagement.
- Reuse static build-time pagination and the existing Case shelf design. No client-side pagination dependency, feed importer, Source authoring restart or newsletter integration.

## Follow-ups

- Review the local Notes pages, then commit/push and verify Cloudflare only when authorised.
- Search Console ownership/indexing and the eight-person visitor exercise remain separate outstanding work. HEY remains backlog only.
