# Backlog

This file is the single source of truth for current work status. Keep each item to one line. If an item needs detail, create a spec in `DOCS/specs/` and link to it.

<!-- Done purge rule: when Done exceeds 20 items, or at the end of a milestone, move Done items to DOCS/archive/YYYY-MM-backlog.md and clear the section. -->

## Backlog

- Run the eight-person validation gate in [the interactive homepage spec](specs/interactive-terminal-homepage.md) after deployment.

## In Progress

## Blocked

- Look Up is on hold: Apple’s Screen Time API is too unreliable to pursue now. The landing page lives on branch `lookup` — https://github.com/jamesgodwin/jamesgodwin-site/tree/lookup — and should not be merged to `main` until the app is resumed.

## Done

- Centered the homepage opening headline and supporting line on desktop and mobile while preserving one-screen fit.
- Tightened the desktop homepage encounter so the opening, prompt, rings, exploration, and browse link fit within a standard desktop viewport without vertical scrolling.
- Aligned the primary route and conversion pages with the homepage, stacked the desktop encounter like mobile, and completed the deployment content and pricing pass using [the inner-page UI spec](specs/inner-page-ui-alignment.md).
- Moved the homepage mobile prompt above the pressure circles and kept `I am only exploring` below the rings.
- Simplified the homepage to its circle choices and authored reflections, retired text, voice, and public command inventories, and consolidated enquiries into one direct-contact destination using [the command discovery and contact consolidation spec](specs/command-discovery-and-contact-consolidation.md).
- Retired the partial homepage voice-input direction after Slice 1 in favour of the circle encounter and one contact path.
- Updated project memory docs to the upgraded startup template and archived the previous Done batch.
