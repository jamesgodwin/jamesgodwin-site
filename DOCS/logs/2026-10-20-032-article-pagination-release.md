# Article archive and pagination release

## Summary

James approved the local 15-essay archive, pagination and Essays naming, and explicitly authorised committing/pushing to GitHub followed by hosted verification after Cloudflare deploys. This release packages the 12 new original articles/covers and static archive pages.

## Files Touched

Article selection/importer, 12 managed essay bodies and original cover sources, shared archive/pagination components/routes, consistent Essays navigation, image quality metadata, sitemap/llms and related tests/documentation. No environment values, browser snapshots, Source files or ignored output is published.

## Verification

Pre-release implementation evidence: logs 030 and 031. Clean staged export qualified with npm ci, build/design guard, 19 unit + five essay/import + eight built-route/SEO + seven design-guard tests: all 39 pass. Staged content is limited to reviewed source, articles/covers and documentation. Hosted checks are pending; no deployment success is inferred from commit/push.

## Decisions

Normal push to main with the reviewed candidate. Cloudflare remains the production/recovery host; Netlify is retired. Keep unpublished drafts, local prototype/catalogue and retired downloads out of public output.

## Follow-ups

Verify Cloudflare’s exact source revision, all 15 article routes, 12/3 pagination, assets/metadata/sitemap/llms, existing routes/redirects and browser navigation. Record remaining uncertainties.

### Published candidate and hosted result

Source commit `399e7e750a9af81a3800412ff01eb6389166c887` was pushed normally to main; remote matched. GitHub’s Cloudflare Pages check completed successfully for deployment `855e8d52-9454-481f-ba67-0166ebe602a9`. The existing documentation-only commit `b66b375` was also confirmed deployed before this release.

Live qualification against the clean candidate: 62 URL checks, 165 referenced asset checks and 38 unique indexable sitemap URLs pass. All 15 article documents plus the two archive documents match the candidate HTML byte-for-byte. Canonicals, social metadata/assets, original publication links, robots/llms/sitemap, WebP imagery, legacy aliases, excluded draft/prototype/catalogue/download paths and nonexistent archive pages behave as expected. Three already-qualified negligible TapScribe WebP encoder variations remain unchanged; no new unexpected byte differences. All 11 existing www/HTTP/HTTPS/path/query checks pass. Artifacts are ignored under `output/article-release/`.

Desktop browser: live first archive has 12 entries and Work/Essays/About/Contact navigation; Next reaches the three-entry page two with a unique title/self canonical and 13–15 range. Previous returns to the first page. A new article opens with the correct title/source link and loaded WebP cover; All essays returns to the archive. No horizontal overflow or browser console errors observed. Screenshot `live-page-2.png` and `live-reading.png` saved.

A phone-width repeat was attempted in an isolated Chrome Guest window but could not be completed when the window became unavailable. Do not claim new mobile-size acceptance from this release; previous shared-shell mobile qualification is historical evidence. No application code was changed during live verification. Search Console ownership/submission/indexing remains outside this release. Synthetic browser runs used `article-release-399e7e7` and `article-mobile-399e7e7`; apex traffic does not automatically receive preview verification labels, so exclude the exact QA URLs and verification window from reporting.

The following documentation-only publication reconciles current state and preserves this qualification. It does not change the application bytes.
