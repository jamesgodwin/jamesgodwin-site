# Images, social card and technical SEO

## Summary

20 October 2026. Prepared a local optimisation/SEO candidate after the owner’s Cloudflare cutover. No commit, push, deployment, DNS change or Netlify deletion. James says he will remove the account himself.

## Files Touched

- Public icon WebP derivatives, retained masters under `src/assets/brand/`, historical pressure-rings derivative, compatibility redirects, social card and repaired stale CRA manifest.
- Output image dimensions for apps/books/paintings; contact icon dimensions. Painting wrap/gap and source article bodies/covers preserved.
- Site metadata/layout, 404, article image metadata, sitemap and generated llms endpoint; four new built-output SEO regression tests.
- `scripts/create-social-card.mjs` owns reproducible native social composition using the shared palette/fonts. Asset register documents capture/encoding.
- Hosting spec, backlog and handoff updated; pre-existing local deployment-verification documentation preserved.

## Verification

- `npm run build`: passed; 83 design-checked source files, zero violations; 29 HTML pages plus sitemap/llms.
- `npm test`: 19 passed. `npm run test:routes`: 8 passed, including four new SEO/image checks. `npm run test:essays`: 3 passed. `npm run test:design`: 7 passed. `git diff --check`: passed.
- Sitemap parsed as XML and exactly matches 25 unique indexable HTML canonical URLs. Redirect/thank-you/404/catalogue/prototype URLs excluded. Titles/descriptions, structured JSON, social image paths/dimensions/alts and rendered image alt/size/format/budget checks pass.
- 62 distinct rendered image src assets total 961,670 bytes across all pages (not a per-page transfer figure). All rendered raster content is WebP; small SVGs remain vectors. No rendered image exceeds 150KB; SVGs below 20KB. Intrinsic image dimensions prevent unreserved image space.
- GratefulFor 2,283,045 → 1,584 bytes; AI Ching 47,094 → 3,270; historical pressure visual 384,970 → 81,590. Originals retained outside public. New 1200×630 card: PNG 94,587 bytes; WebP 39,264. Favicon and compatible OG PNG are deliberate exceptions.
- Pages emulator restarted to load changed redirect rules; 13 HTTP checks pass, including 3 asset compatibility redirects, correct text/image MIME types and genuine 404. Initial stale-emulator responses were not code failures; final results replace them in `output/seo-review/http-checks.json`.
- Desktop screenshot verified new logos and social card; 390px Apps/Books/Paintings have no horizontal overflow or broken images, and paintings still wrap. Temporary viewport reset. Artifacts ignored under `output/seo-review/`.
- Live before this candidate: robots 200, sitemap fetched, llms 404. New changes have NOT been verified on production. No Search Console ownership/submission, search indexing, Core Web Vitals/ranking outcome, external rich-result validator or actual LinkedIn unfurl qualification established.
- Current source/public search found no Netlify endpoints/forms dependencies. Public NS and MX point to Cloudflare. Netlify CLI `listSites` returned Unauthorized; no account inventory was obtained, and no login/account mutation attempted. Cannot establish safety of deleting other sites, registrations or retained submissions.

## Decisions

- Extend previously deferred scope to include llms.txt at James’s request. It is a public context guide, not an SEO ranking guarantee. Google’s [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) and the [llms proposal](https://llmstxt.org/) distinguish ordinary search requirements from that optional convention.
- Preserve small SVGs, source masters, article covers, existing asset URLs via redirects and the static story interaction contract. Use native brand typesetting for OG so it matches the actual fonts and copy.
- Keep account retirement separate from this source candidate. James handles deletion; local changes do not establish hosted acceptance.

## Follow-ups

- Obtain publication authority for this concrete candidate, push with `[skip netlify]` if relevant, and verify new bytes, sitemap, llms, social image and redirects on Cloudflare.
- In Search Console, verify property/indexing and submit `https://jamesgodwin.me/sitemap.xml` if not already done. No account access established here.
- Owner should inspect other Netlify projects/registrations/submissions before removing the whole account; no account-wide safety assertion. Retain existing deeper hosted analytics follow-up separately.
