# First story, writing and aligned site

## Summary

James authorised building the selected direction as the website, starting with Ben's story, completing writing and aligning/creating other pages. Saved `site-story-writing-build.md` before code. The local main site now uses the selected theme, with Work and Ben's static-screen narrative, Writing and three full articles. Existing route-backed content uses the same shell. Public release remains separate.

## Files Touched

- Shared SiteLayout/header/footer and site styles/client; existing route renderer and 404.
- One reusable Ben story source, FeaturedStory, StoryReader, EssayCard and WritingList.
- Work/story/Essays/article/writing-alias routes; metadata, sitemap, redirects and help.
- Astro collection, selected Markdown entries/original cover assets, Source importer/selection and tests.
- Shared prose variants/reading tokens and catalogue example; contact/runtime integration and metadata tests.
- Active spec, backlog and repository contract reflecting the authorised visual change.

## Verification

All four slices are implemented locally and ready for James's review. `npm run check:design` passes across 76 files with zero violations; normal build emits 26 HTML pages. 18 Vitest tests, four route/site checks, three importer/essay checks and seven design-guard tests pass. Catalogue and opt-in concept builds/checks pass. Importing twice leaves the second run unchanged; conflict/draft guards and original-body boundaries are tested.

Browser qualification covered 1440×1000, 390×844 and selected 320×740 views. Homepage → story → writing → article → About/Contact works. All 16 internal footer destinations opened with an H1 and no horizontal overflow at 390px. Chapter Back/Forward, keyboard focus, skip link, contact intent, writing alias, workshop alias and built 404 page were exercised. Story visuals contain no inputs or buttons. Console warnings/errors were empty. All chapters exist in built HTML; JavaScript-disabled browser rendering was not separately exercised.

Visual comparisons and actual desktop/mobile captures were reviewed, including the writing index, article and Contact. Article width/type, index spacing and named image links were corrected. See `design-qa.md`; captures are ignored under `output/site-build/`. Local PostHog pageview ingestion was confirmed using the exact verification-run label; this does not qualify production analytics or real visitors.

No deployment, production cutover, commit, push or external publication. Existing generic social artwork is retained; article sharing uses each original cover. Public hosting and user acceptance remain separate from local implementation qualification.

## Decisions

Use one story in the main site; the other three remain in the opt-in prototype reference only. Keep all supporting screens static. Content remains route/output backed for existing pages, and Astro collections for essays. Use the published log as execution truth when the old source Status is stale. The design-system article's live body was checked and three colon/comma differences reconciled through explicit importer replacements; Source files were not edited. Existing services/prices, destinations, integrations and social assets are preserved.

## Follow-ups

James reviews the main local site, especially Ben’s wording and the reading experience. No deployment, commit, push, spending, publication or outbound messages.
