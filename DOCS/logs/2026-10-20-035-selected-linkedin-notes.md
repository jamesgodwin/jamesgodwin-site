# Five selected LinkedIn notes

## Summary

James approved the five recommended posts with a voice-preserving edit and original artwork. Implemented locally as a Notes archive and five reading pages, with browse links alongside the existing essay archive. [Scope](../specs/selected-linkedin-notes.md). No production release performed.

## Files Touched

- Five Markdown notes and unchanged JPEG originals; the selection manifest records source URLs and original image hashes. Source files were not edited.
- Notes collection, shared browse navigation, NoteCard, archive and reading routes; homepage/footer/help discovery; metadata, sitemap and llms guide.
- Token-based Notes composition and `test:notes` built-output integration check, plus a synthetic unpublished fixture.
- Scope/shortlist, current project/backlog/handoff, import/design runbooks and the earlier migration scope/decision pointer.
- Prior uncommitted HEY and shortlist documentation was preserved. Browser/build artifacts remain ignored in `output/notes-review/`.

## Verification

- The new built-output integration test was red first because `/notes` did not exist, then green after implementation.
- Final build and design guard pass (91 checked source files, zero violations). All 40 automated tests pass: 1 Notes integration, 5 essay/import, 8 route/SEO, 19 Vitest and 7 design guard tests.
- Exactly five public Notes; the synthetic draft is absent from archive, reading output, sitemap and llms. All 15 essays remain covered by the existing 12+3 pagination checks.
- All five original image SHA-256 hashes match the reviewed JPEGs. Default reading-page WebP images are 38,010–82,078 bytes; cards and reading pages supply responsive source sets.
- Desktop browser: essay-to-Notes navigation, reading link, All notes return, all five reading pages and source hrefs checked. All five covers loaded, no horizontal overflow on the five reading pages or archive. Screenshots inspected.
- Visual 390px same-origin iframe checks cover the archive and builder note. Header navigation and content wrap within the frame. This is a browser layout review, not an installed-phone test; programmatic cross-frame overflow measurement was unavailable.
- Original wording checked against the saved published posts and current Source voice guide. Van anecdote removed; early TapScribe test retained as historical; relative time/version references and feed CTAs removed; Tai Chi explanation grounded in personal observation.
- No commit, push, Cloudflare deployment, LinkedIn publication or Source-cycle restart. Existing essay phone-width repeat remains separate outstanding verification.

## Decisions

- Keep the Essays header link and long-form archive. Notes has its own short-format label and browse link; it does not inflate essay counts or change `/writing` redirects.
- Preserve the whole portrait originals. Astro-generated WebP delivery is separate from the retained source JPEGs.
- Use five explicit, locally edited Markdown files rather than build a general post-importer or CMS. Publication dates and source links are original; revised website copy is labelled as adapted.

## Follow-ups

Review `/notes` and the five edited pieces locally. Production publication requires a later authorised commit/push/release. Search Console, visitor comprehension and HEY exploration remain separate backlog items.
