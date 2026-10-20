# Import selected published essays

The site reads portable Markdown in `src/content/essays/`. Source remains the authoring/publication record. This command prepares local website files; it does not publish, deploy or change Source.

```sh
npm run import:essays -- '/Users/nitro/Library/CloudStorage/Dropbox/Source/Runbooks/LinkedIn Posts/Output/Posts'
```

An optional second argument supplies a publication Log path. The default is `../../Log.md` relative to the posts folder. `scripts/essay-selection.mjs` explicitly selects the first three articles and their verified title, date, original URL and cover. Add further selections deliberately after confirming publication/permission and copying the original approved cover into `src/assets/writing/`.

The importer finds one matching ARTICLE file, excludes announcements and extracts only `## Article`, stopping before editorial/announcement/preflight/image-hook material. Confirmed posted/published Log entries take precedence over stale draft Status in source. Without confirmed publication it writes a draft. Drafts are excluded from index, article routes, related writing and sitemap. `draft-check.md` is a synthetic fixture for this boundary.

Frontmatter records source and imported-body hashes. An unchanged repeat import writes nothing. A locally edited body produces a conflict and nonzero exit rather than overwriting it. Inspect the source and local diff, preserve the intended wording and reconcile explicitly before importing again. Do not delete hashes or force replacement to suppress a conflict.

The design-system selection has three explicit colon-to-comma substitutions matching the verified live LinkedIn body; its live title also differs from the old source title. These are provenance corrections, not a general rewriting rule. Source files remain untouched.

After an import, inspect the Markdown diff, publication date/source link, original cover and complete reading page. Run `npm run check:design`, `npm run build`, `npm run test:essays` and relevant route checks. Preview locally with `npm run preview`. Approval of a new unpublished essay and production publication remain separate actions.
