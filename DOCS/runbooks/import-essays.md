# Import selected published essays

The site reads portable Markdown in `src/content/essays/`. Source remains the authoring/publication record. This command prepares local website files; it does not publish, deploy or change Source.

```sh
npm run import:essays -- '/Users/nitro/Library/CloudStorage/Dropbox/Source/Runbooks/LinkedIn Posts/Output/Posts'
```

An optional second argument supplies a publication Log path. The default is `../../Log.md` relative to the posts folder. `scripts/essay-selection.mjs` explicitly selects the 15 confirmed published articles and their verified title, date, original URL and cover. All 15 are deployed with 12-per-page archive navigation. Add further selections deliberately after confirming publication/permission and copying the original approved cover into `src/assets/writing/`.

The importer finds one matching ARTICLE file, excludes announcements and extracts only `## Article`, stopping before editorial/announcement/preflight/image-hook material. Confirmed posted/published Log entries take precedence over stale draft Status in source. Without confirmed publication it writes a draft. Drafts are excluded from index, article routes, related writing and sitemap. `draft-check.md` is a synthetic fixture for this boundary.

Frontmatter records source and imported-body hashes. An unchanged repeat import writes nothing. A locally edited body produces a conflict and nonzero exit rather than overwriting it. Inspect the source and local diff, preserve the intended wording and reconcile explicitly before importing again. Do not delete hashes or force replacement to suppress a conflict.

Selections contain explicit replacements where the Source draft differs from the verified live publication. This includes punctuation, a few final sentences, list formatting and the Roots references. These are provenance corrections, not a general rewriting rule. Source files remain untouched. The May 31 essay uses `sourceFile` because its legacy filename has no article ID; the importer validates the basename and does not expose it in frontmatter. Optional `coverQuality` preserves the usual 80 default while keeping two textured covers within the existing WebP byte budget. Original cover sources are retained.

After an import, inspect the Markdown diff, publication date/source link, original cover and complete reading page. Run `npm run check:design`, `npm run build`, `npm run test:essays` and relevant route checks. Preview locally with `npm run preview`. Approval of a new unpublished essay and production publication remain separate actions.

The local archive paginates at 12 essays per page, counting the featured entry within the first 12. `/essays` is page one; subsequent pages use `/essays/page/<number>` with unique metadata and sitemap entries. Additional selected articles create further pages at build time. Check boundary navigation and article coverage with `npm run test:essays` after a backfill.

## Selected short notes

The twelve selected LinkedIn posts (the first five plus seven later editorial picks) are published and maintained separately in `src/content/notes/`, with their unchanged originals in `src/assets/notes/` and provenance/image hashes in `scripts/note-selection.mjs`. They are intentional website adaptations, not ARTICLE imports. Do not run the essay importer over Notes or overwrite their edited bodies from the Source originals. Source remains untouched.

Keep the original publication date, a separate website revision date, original post URL, post ID, source hash and edited-body hash. A new note defaults to draft. Only non-draft Notes render at `/notes` and `/notes/<slug>` and enter sitemap/llms output. Keep short pieces out of the essay pagination. Review further selections with James before adding them.

The NoteCard and note reading composition retain the whole portrait artwork; Astro serves responsive WebP. Use the shared WritingNav to browse between formats and keep the homepage/footer discovery links. Build, run `npm run test:notes`, the existing essay and route suites, then inspect the local archive and reading pages before any separately authorised release. [Accepted first batch](../specs/selected-linkedin-notes.md).
