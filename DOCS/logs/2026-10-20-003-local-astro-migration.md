# Local Astro migration

## Summary

Captured the CRA baseline and began the local Astro migration. No deployment, publication, commit or push. Pre-existing documentation edits are preserved.

## Files Touched

Astro root configuration, package manifests, static route/layout components, vanilla browser interactions, PostHog configuration and browser log adapter. CRA source and manifests retained under `legacy/` pending final acceptance. Active documentation updated to record progress.

## Verification

- Baseline: CRA 9 suites / 33 tests passed; production build emitted metadata for 18 routes, with existing source-map and Browserslist warnings.
- Baseline build, route text/links/metadata and desktop/mobile home screenshots captured under ignored `output/migration-baseline/`.
- Initial Astro build emits all 18 original routes plus a real 404 page. Existing pure content/contact/metadata tests ported to Vitest; 14 assertions passed before adding the log regression test.
- Browser automation confirmed local PostHog pageviews, four custom events and a controlled exception arrived in the existing project. Verification traffic labelled `traffic_type=verification`, `site_runtime=astro`.
- Found an existing OpenTelemetry processor constructor mismatch preventing browser logs. A meaningful exporter-delivery test failed before correction and passed after using `{ exporter }`.
- Final checks complete locally; see the detailed results below.

## Decisions

Keep normal full-page Astro navigation; do not add ClientRouter or a terminal interface. Preserve hidden legacy command capabilities through an internal browser event. Keep source output HTML trusted and authored. Retain legacy source until parity gates pass. Local environment variables use Astro `PUBLIC_POSTHOG_*`; ignored `.env` has local equivalents, with no keys copied into tracked documentation.

## Follow-ups

Review the design-system proposal before the Essays composition work. Cloudflare and Essays remain separate planned slices; no deployment is authorised.

## Final checkpoint and follow-up steering

James requested tokenisation/design-system review during the migration, then explicitly authorised removing public TapScribe test DMGs. Removed `public/tapscribe/TapScribe-Pilot.dmg` and stale generated copies from `build/`/`dist/`; the ignored immutable baseline copy remains comparison evidence, not current public output. Historical release logs are unchanged. Source copy and URLs remain unchanged otherwise; rendering now roots Apps/Paintings image URLs so both slash variants resolve assets correctly.

Additional files touched: `AGENTS.md`, `README.md`, `legacy/README.md`, `DOCS/PROJECT.md`, `DOCS/specs/design-system-foundations.md`, active spec/backlog/handoff. Operating entry points now describe Astro; legacy source is explicitly a comparison snapshot.

Final verification actually executed:

- `npm run build`: passed; 18 original routes plus a 404 page and generated sitemap.
- `npm test`: 5 files / 15 tests passed. Four existing pure content/metadata/contact suites were ported; React-specific tests remain in the legacy snapshot and are superseded for this port by browser behaviour checks, not claimed as executed Astro tests.
- `npm run test:routes`: 3 tests passed: all baseline titles/descriptions/canonicals and readable route HTML; root-relative existing content images; retired pilot DMG absent. Route baseline metadata is a committed public-data fixture independent of implementation.
- Red/green evidence: initial static-route test failed before Astro output existed; image-path check failed before root-relative rendering; log-export test failed before OpenTelemetry processor correction. Browser theme-navigation check failed before session persistence, then passed.
- Browser crawl of retained CRA and Astro: all 18 route visits captured. Current visible main text, title and description matched. Slash differences from the CRA comparison server are normalised by canonical metadata; workshop alias retains its contact continuation and sanctuary retains the external destination/home continuation.
- Browser at 390×844 and 1280×720: all four reflection paths, heading focus, Begin-again focus restoration, Browse initial focus, Escape return and no horizontal overflow passed. Nine themes, breathing open/dismiss, both easter eggs, six contact-intent cases, workshop continuation and HTTP 404 passed; zero unexpected page errors.
- Inspected light home screenshots at both sizes against CRA. Homepage Lighthouse accessibility: CRA 100, Astro 100. No claim of a whole-site dark accessibility pass.
- Verified all 91 public asset files copied byte-for-byte before the authorised DMG removal; no remaining asset copy discrepancy. The final DMG absence is covered by the build test.
- Local PostHog project ingestion: on the 10:12:58–10:13:04 UTC run, one pageview on each of Home, Product Clarity and Contact; four custom event names and intended properties; the deliberately thrown `Astro migration verification 20261020` exception. Three log entries arrived at 10:12:57–10:12:59 UTC for path selection, reflection continuation and email selection. All carried `traffic_type=verification`, `verification_run=astro-migration-20261020`, and the event stream carried `site_runtime=astro`. Browser HTTP success alone was not treated as proof. Email launch was prevented; no message or form submission was sent.
- Corrected log adapter uses `new SimpleLogRecordProcessor({ exporter })`; the old source passed the exporter directly, silently preventing export with installed OpenTelemetry 0.222.
- `npm audit` after dependency resolution reported zero vulnerabilities; final production-dependency audit also zero. `git diff --check` and changed-document relative-link checks passed.

Design review observations: 32 custom-property names, 23 source font-size values, seven radius values and overlapping old/new colour vocabularies. Counts include dormant declarations, not only rendered values. Sampled computed typography in light/dark on five pages and inspected dark Contact: default blue links and black icons need explicit semantic colour roles. Proposal preserves EB Garamond/Karla/IBM Plex Mono, consolidates authority before visual changes, extracts a few controlled recipes, and later adds an opt-in real-code catalogue and drift checks. No token/component retrofit or public theme switcher was implemented. AI Ching files were read as a reference, not edited.

Remaining limits: no Cloudflare preview or production qualification, DNS change, Search Console action, public deployment or essay import. Human visual review remains available at the local preview. Design-system proposal needs scope selection; Essays remains the next content slice. Retain CRA snapshot until final review is satisfied.
