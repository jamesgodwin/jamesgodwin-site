# TapScribe Apps listing

## Summary

Updated the existing TapScribe entry with its official logo, a concise product description and a direct website link. The live canonical destination is https://tapscribe.app/, resolving the spoken tabscribe.app spelling.

## Files Touched

- `src/outputs/apps.js` and `public/tapscribe-icon.webp`.
- Asset provenance in `DOCS/specs/homepage-assets.md`; current handoff.

## Verification

Fetched the live homepage and its 102px logo. Logo bytes match the existing launch repository asset. Homepage confirms recording, local transcription and copy/export wording. Build including design guard passed; all four route/image checks passed; `git diff --check` passed. Browser confirms the 44px shared icon treatment, loaded image, correct external link and no 390px overflow. Screenshot in ignored `output/copy-review/tapscribe-app-listing.jpg`. No new tests required for this bounded content/asset change.

## Decisions

Use the existing app-list pattern and local logo asset. Make Visit TapScribe the primary link, retaining How I built it for the case study. Avoid duplicating release requirements or prices on the portfolio.

## Follow-ups

Local preview ready at http://127.0.0.1:4173/apps. No deployment, commit or push.
