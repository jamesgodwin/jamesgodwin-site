# Session Log - 2026-05-26-013

## Summary

Updated `public/sitemap.xml` to match the current indexable local site routes.

## Files Touched

- `public/sitemap.xml`
- `DOCS/BACKLOG.md`
- `DOCS/next-day.md`
- `DOCS/logs/2026-05-26-013-sitemap-route-sync.md`

## Tests

- Compared `public/sitemap.xml`, `public/_redirects`, and `commandRouteMap` in `src/App.js`.
- Ran `npm run build`; build completed successfully and prerendered social metadata for 17 routes.

## Decisions

- Added missing active local routes: `/executive-state-diagnostic`, `/workshop-enquiry`, `/thank-you`, and `/legal`.
- Removed `/sanctuary` from the sitemap because the app opens an external True Essence URL for that command rather than serving local indexable content.

## Follow-ups

- After deploy, check `https://jamesgodwin.me/sitemap.xml`.
