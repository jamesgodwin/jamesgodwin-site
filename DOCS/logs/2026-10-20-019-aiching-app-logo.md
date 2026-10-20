# AI Ching Apps logo

## Summary

Replaced the older red icon with the current black-and-gold book logo from the live AI Ching website.

## Files Touched

`src/outputs/apps.js`, `public/ai-ching-logo.png`, asset provenance and current handoff.

## Verification

Confirmed the versioned logo URL in live homepage markup and inspected the downloaded 256×256 transparent PNG. Build/design guard, four route/image checks and diff whitespace check pass. Browser confirms the image loads at the shared 44×44 size. Screenshot: `output/copy-review/aiching-app-logo.jpg`. No new tests required for the asset-only change.

## Decisions

Preserve the supplied artwork and transparent padding. Use a new filename to avoid serving the old SVG from cache.

## Follow-ups

Ready in the local Apps preview. No deployment, commit or push.
