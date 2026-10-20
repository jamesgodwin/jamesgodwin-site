# Image and SEO publication

## Summary

20 October 2026. James approved the social image and explicitly authorised pushing the reviewed image/SEO candidate to GitHub so Cloudflare can deploy it, followed by live verification.

## Files Touched

Reviewed source/assets/tests from log 024, plus the pending live-cutover documentation from log 023. Hosting spec/handoff record current publication authority. No account deletion or DNS change.

## Verification

Clean staged export `output/seo-publish-candidate.N14LBo` qualified without local env files: `npm ci` passed (zero reported dependency vulnerabilities), build passed (83 design-checked source files, zero violations, 29 pages), 19 unit + 8 built-route/SEO + 3 essay + 7 design-guard checks passed. Staged scope reviewed, source masters recognised as exact renames, local-only path/credential-pattern scans and `git diff --cached --check` passed. Published app revision `83b1155ba9dc6a9e10fbf31e45d612c964bdea02`; GitHub remote main matched the local SHA. Cloudflare Pages check completed successfully, deployment `baf5f00c-ec98-42b6-815e-93b153a7f151`.

### Hosted verification

- Main-domain homepage HTML is byte-identical to the local environment-configured build. Public social PNG/WebP and optimised logos match reviewed bytes.
- 46 URL checks: 45 pass; **www is the one failing URL**. All emitted pages/metadata, 25 canonical sitemap entries, robots, llms, manifest, legacy aliases, three image redirects, slash handling and genuine/noindex 404s pass. Pages host serves the new build with X-Robots-Tag noindex; apex is indexable.
- 91 rendered/generated asset URLs return 200 with correct image MIME types. Three generated TapScribe WebP sizes differ slightly between local and Linux encoders; same dimensions, decoded mean channel errors at most 0.014/255. Other matched candidate assets are byte-identical. This is an encoding variation, not a missing image. An initial HTTP harness also needed to consume intermediate 103 Early Hints before comparing final headers/body; corrected results are saved.
- Browser: all four shelf choices, Plumbline chapters and Back history, Writing → original article, product-contact intent and 12 routes at 390px pass. No overflow, broken loaded images or captured console errors. Temporary viewport reset. Screenshot and results are ignored under `output/seo-live-verification/`. QA run marker `seo-release-83b1155`; do not count it as visitor evidence.
- **Unresolved hosting issue:** https://www.jamesgodwin.me/ now returns 404 from the old Netlify origin (x-nf-request-id response). Main HTTPS/HTTP and Pages work. This is outside the image/SEO source deployment. Source changes cannot redirect a hostname still routed to the retired origin.
- Diagnosis loop: HTTP script reproduces expected www 301 vs actual Netlify 404. Ranked causes considered: stale Netlify DNS/origin mapping (supported by x-nf-request-id), missing Pages www binding/redirect (dashboard listed only apex), application redirect regression (contradicted by working apex/new asset redirects). Wrangler is signed out. Existing Brave Cloudflare session could be read initially, but account-home navigation/reload left its content blank; no DNS, domain or redirect setting was changed. Requested that James open the DNS page while independent verification continued.
- Search Console indexing/submission, actual social-network cached unfurl, and deeper hosted analytics delivery remain outside this observed evidence. No Netlify deletion occurred in this task.

## Decisions

Use main and a normal push with `[skip netlify]`; preserve retired download and static app-screen contracts. Do not infer account-wide Netlify safety or search indexing from this release.

## Follow-ups

Image/SEO publication and primary live verification are complete. Repair www using Cloudflare account access: inspect and record current DNS/rollback first, replace the stale Netlify routing and configure a host-specific 301 to https://jamesgodwin.me preserving path/query. Verify HTTPS/HTTP www root and a nested query URL. The live HTTP check must pass before calling all hosting checks complete. Owner handles any Netlify deletion.

### Follow-up correction, 20 October 2026

The www failure recorded above is now repaired in Cloudflare. The complete 46-URL/91-asset live check passes, with 11 additional www redirect checks and browser confirmation. Preserve the original failure evidence above as history. [Repair and exact configuration](2026-10-20-026-www-redirect-repair.md).
