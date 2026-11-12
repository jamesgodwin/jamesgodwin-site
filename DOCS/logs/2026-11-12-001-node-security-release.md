# Patched Node build release — 12 November 2026

## Summary

Pinned Cloudflare production and preview builds to Node 22.23.5 following the Node security release. The website remains a static Astro deployment.

## Files Touched

`.nvmrc`, `package.json`, `.node-build/22.23.5`, and `DOCS/runbooks/deploy-cloudflare-pages.md`.

## Verification

Local clean install, build, route, essay, notes, design, and project tests passed. Cloudflare production deployment `e9c172fd-2dc9-4476-8bd7-19612566af63` succeeded for commit `6a877bd`. Its build log installed Node 22.23.5. `https://jamesgodwin.me/` returned HTTP 200.

## Decisions

Kept the existing Node 22 major and generated the custom node-build definition from the official Node release checksums. Left unrelated working-tree documentation changes out of the release.

## Follow-ups

None for this build pin.
