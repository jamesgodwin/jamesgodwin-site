# Cloudflare Pages preparation and GitHub handoff

## Summary

James selected Cloudflare Pages, added the Node/PostHog build variables and explicitly authorised preparing and pushing the reviewed site to GitHub so he can deploy it. The candidate includes the complete reviewed Astro migration, four static stories, writing archive, aligned pages, shared design system and project documentation. The parked lookup branch is untouched.

Pinned Node 22.22.1, added Pages-host-only noindex headers, server redirects for the writing/workshop aliases, and preview verification properties shared by PostHog events and logs. The first Pages-emulator route check exposed a directory-output redirect to a trailing-slash URL, contradicting the existing slashless canonical. Main builds now use Astro file output; the local reference builds retain directory output. Existing built-page checks were updated for file output and still check original URL/canonical/content continuity. No visual redesign or new app interaction.

The commit uses `[skip netlify]` to avoid triggering the existing deployment from this GitHub push. No Cloudflare deployment, custom-domain change or Netlify retirement is performed by this task.

## Files Touched

- Complete earlier reviewed website/migration source and documentation, newly staged for the authorised handoff.
- New hosting preparation: `.nvmrc`, `.gitignore`, `astro.config.mjs`, `public/_headers`, `public/_redirects`, `src/posthog.js`, `src/posthog.test.js`.
- Built-route/essay/reference check paths; one catalogue-source trailing-space fix; trailing whitespace normalised in two retained legacy files so the staged patch passes Git checks.
- README, AGENTS operating guard, project/hosting specs, deployment runbook, backlog, handoff and this log.

## Verification

- SDK regression test first failed because Pages visits lacked verification properties; after the change it passes for base/version/branch Pages hosts, localhost and production custom domains.
- Design guard: 82 source files, zero violations. Normal build: 29 HTML pages. 19 Vitest tests, four route tests, three essay/import tests and seven design-guard tests pass. Existing Node module-type warning in route tests remains harmless.
- Catalogue and historical prototype builds/checks pass, with both still excluded from normal output.
- Clean staged-tree export at ignored `output/github-candidate.tAZ2ti`: `npm ci` installed successfully, then the design/build, 19 unit, four route and three essay checks all passed without relying on ignored local files or environment values.
- Wrangler Pages emulator 4.151.3 parsed all four redirects and both header rules. All 29 emitted HTML routes returned expected status. Separate Host-header checks verify noindex on base/branch/version Pages URLs, no noindex on the custom domain, slash canonicalisation, both aliases, real missing-page 404 and retired pilot 404. Evidence: ignored `output/final-content-review/pages-emulator-checks.json` and `pages-all-routes.json`.
- Browser through the Pages emulator: keyboard selector → TapScribe → all chapters → Product Clarity contact intent; Writing → complete article. No console warnings/errors.
- Staged tree inspected for local environment files, generated output, MCP credentials and private credential patterns; none included. `.env.example` is placeholders. GitHub repository verified as `jamesgodwin/jamesgodwin-site`, public, default branch main; local/remote started at `2d55a83` with no divergence. `git diff --cached --check` passed after whitespace correction.
- Live homepage fetched before push for comparison; actual hosted Pages build, Cloudflare environment values and hosted analytics delivery remain unverified. James reported entering the variables.

## Decisions

Cloudflare Pages is the selected hosting target, superseding the original Workers proposal. No Wrangler deploy command/configuration is needed for the Pages dashboard build. Keep production-domain canonicals and the separate Netlify deployment until hosted checks and explicit cutover.

Commit and push are authorised for this candidate. Future preparation commits need the Netlify skip marker while that service remains Git-connected; see the deployment runbook. Netlify documents this as a per-push safeguard, not a permanent build lock.

## Follow-ups

Complete the authorised commit/push and verify remote main, then record its SHA here. James can deploy that candidate from the open Pages setup screen. Verify the actual Pages URL, routing, indexing headers and PostHog delivery before moving the custom domain. The public domain is not cut over by a GitHub readiness claim.
