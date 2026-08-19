# Look Up Page Identity and Nested Route

- Status: Accepted
- Date: 2026-08-17

## Context

The site contract preserves a terminal-inspired visual language, and every public page to date is a flat route rendered through the shared command/route shell. Apps on the `/apps` page link out to their own domains or the App Store.

James commissioned a dedicated on-site page for the Look Up iPhone app (`~/code/reality-interrupt`) with an explicit instruction: it must have its own unique look and feel, not the current site's identity. The app is pre-TestFlight, so the page must be launch-ready with a disabled App Store call to action that activates at release.

## Decision

- The page lives at `/app/lookup` (command `lookup`) — the site's first nested route, establishing the `/app/<name>` pattern for future app pages.
- It renders as a full-bleed dedicated component (`src/components/LookUpPage.js`) with a scoped stylesheet (`src/LookUp.css`), exempt from the terminal visual language, the route shell, the site wordmark, and the theme system. The existing top-left site navigation menu stays available so visitors can return to the rest of the site. The page is always dark, matching the app's near-black ink.
- Copy follows the app's own onboarding voice ("Look up." / "A quiet pause when an app pulls you under.").
- The App Store CTA ships disabled behind a single `APP_STORE_URL` constant in the component; setting the URL is the entire launch action.
- The `/apps` page links internally to `/app/lookup` — the first on-site app page in the directory.
- `lookup` is route-backed but not added to the public help/command inventory.

## Consequences

- Route maps, metadata, and the sitemap must support a nested path. The prerender script already handles this via recursive directory creation; Slice 1 verifies `build/app/lookup/index.html` in the built output.
- The "preserve the terminal aesthetic" constraint now has one explicit, recorded exception. Future app pages may follow this pattern but each requires its own brief.
- `NewSite.css`, the route shell, and the theme system are untouched, keeping the exception contained and reversible.
- Launch-day work for this page is reduced to one constant flip plus a log entry.
