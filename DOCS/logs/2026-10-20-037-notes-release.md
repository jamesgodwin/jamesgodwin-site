# Notes and documentation release

## Summary

James authorised committing and pushing the twelve curated Notes and documentation, then verifying the live Cloudflare deployment. Published and verified on the live Cloudflare site.

## Files Touched

The selected Notes implementation, twelve original covers, selection/integration checks and accumulated documentation updates, including the HEY backlog capture and editorial review history. Review artifacts and environment files stay ignored.

## Verification

Clean staged export: npm ci/build and design guard pass, plus all 40 automated tests (19 Vitest, 8 route/SEO, 5 essay/import, 1 Notes and 7 design guard). All twelve original image hashes match. Staged path/content checks exclude environment files, generated/browser artifacts and credentials; whitespace checks pass. Evidence is ignored under `output/notes-release/`. Source commit `54fde0049742ff7c55740f024ed91002b7361e99` is pushed to origin/main and the remote SHA matches. Cloudflare check run completed successfully for deployment `30b87a01-7ff0-4692-9c06-73da74bea67f`. Prior local evidence is in [the expansion log](2026-10-20-036-notes-editorial-expansion.md).

Live HTTP checks pass: 78 URL checks, 213 assets and 51 indexable sitemap URLs. The twelve-note archive and all twelve reading pages are live alongside fifteen essays and both essay archive pages. All thirty Notes/Essays documents match the clean candidate HTML byte for byte. Robots, sitemap, llms guide and manifest match; canonical/social metadata, slash/legacy redirects, missing-page/draft/reference-route 404s and Pages-host noindex pass. Seven www redirect checks preserve paths and query strings.

All new Note images match the candidate bytes. The three previously qualified TapScribe library encoder variations were freshly decoded and compared: dimensions agree and mean channel differences remain within 0.014/255. No application/image repair was needed. Evidence is in `output/notes-release/check-summary.json`, `exact-html.json`, `assets.json` and `encoder-comparison.json`.

Live browser checks pass: Essays → Notes → recording-recovery note, loaded full WebP cover and matching original source href, All notes return, Essays Next → page two with three essays and no horizontal overflow. The actual live long-title agent note and Notes archive were visually inspected in a 390px iframe, including the return link; this qualifies narrow browser layout, not physical-device acceptance. Screenshots are saved. Previous physical/phone-width essay-pager repeat remains separate; no new contact-event or uncaught-error test was necessary because analytics code/configuration is unchanged.

Release documentation is synchronised in a follow-up documentation-only commit; the verified application source remains `54fde00`. No Source authoring cycle was restarted, and no Search Console or visitor-comprehension outcome is implied.

## Decisions

Publish the approved twelve Notes alongside the unchanged fifteen-essay collection through the existing Git-connected Cloudflare Pages project. Preserve DNS, analytics, other pages and Source authoring boundaries.

## Follow-ups

Search Console ownership/sitemap/indexing and the eight-person visitor exercise remain outstanding. The HEY newsletter idea remains backlog only. Future changes follow the publishing runbook; use Cloudflare production deployments for rollback.
