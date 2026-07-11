# Session Log - 2026-07-11-008

## Summary

Moved the homepage `Where is it showing up?` prompt above the pressure circles in mobile reading order, while keeping `I am only exploring` below the rings and preserving the desktop two-column composition.

## Files Touched

- `src/components/PressureEncounter.js`
- `src/components/PressureEncounter.test.js`
- `src/NewSite.css`
- `DOCS/BACKLOG.md`
- `DOCS/next-day.md`

## Tests

- Added a regression test for prompt-before-rings and rings-before-explore document order.
- Confirmed the focused test failed before the implementation and passed after the change.

## Decisions

- The mobile order is now intro, prompt, circles, explore, browse.
- Desktop continues to use CSS grid placement so the prompt remains in the left column and the rings remain in the right column.

## Follow-ups

- Continue with the top backlog item: align the primary route and conversion pages with the approved homepage using `DOCS/specs/inner-page-ui-alignment.md`.
