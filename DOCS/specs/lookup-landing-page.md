# Look Up Landing Page

Status: Parked. The landing page is complete on branch `lookup`, but Look Up is on hold because Apple’s Screen Time / Family Controls API is too unreliable to pursue in the short term. Resume from `lookup` and merge into `main` if the app is picked up again.

## Problem

Look Up is an iPhone app (repo: `~/code/reality-interrupt`, App Store name "Look Up") that interrupts immersive app use with a calm, voluntary return-to-awareness pause: after about 20 minutes in a chosen app, a near-black Screen Time shield appears, the user may catch their reflection, and they choose to put the phone down or continue consciously.

Every app on the `/apps` page currently links out to an external domain or the App Store. For Look Up, James wants the first on-site dedicated product page at `jamesgodwin.me/app/lookup`, with its own unique look and feel — deliberately not the site's terminal-inspired visual language.

The page is being built before launch: the app is pre-TestFlight (waiting on Apple's Family Controls Distribution grant). The page must be launch-ready now, with an App Store call to action that ships in a disabled "coming soon" state and activates at release.

## User-Facing Outcome

A visitor who arrives at `/app/lookup` — from the `/apps` page, a shared link, or search — should feel the product before reading about it.

The page should:

- **be visually appealing.** Quiet and dark is the mood, not an excuse for a sparse, flat, or unfinished page. Type, space, images, and the pause should feel designed — closer to the app than to a text dump on black;
- feel like the pause itself: near-black, quiet, spacious, one calm column;
- explain the whole product in under a minute of scrolling, in the app's own voice;
- make the voluntary nature of the pause unmistakable (no blocking, no shame, you choose);
- state pricing plainly: 7-day trial, $19.99 once, lifetime, with Family Sharing. Do not show a founding or $9.99 price for anyone;
- carry an App Store badge that is visibly present but disabled until release;
- stay completely readable and composed on a phone first;
- connect back to jamesgodwin.me without adopting the site's terminal chrome.

## Scope

- One new route: `/app/lookup`, command name `lookup`. This is the site's first nested path.
- One new full-bleed page component with its own scoped stylesheet, always dark, opted out of the site theme system and route shell.
- Final copy for seven sections (deck below), derived from the app's onboarding copy.
- The asset set listed below: logo mark, icons, framed screens, OG image.
- Route metadata, sitemap entry, and a Look Up row on the `/apps` page linking internally to `/app/lookup`.
- One signature scroll moment: the page dims into the pause.

## Out Of Scope

- Any change to the homepage, `RoutePage`, `pagePresentation.js`, `NewSite.css`, themes, or any existing route.
- Adding `lookup` to the public help/command inventory. It is a route-backed page reached by URL and the `/apps` link, not a discoverable terminal command.
- Email capture, waitlists, TestFlight signup forms, or analytics beyond the existing site-wide GA.
- A video or animated asset (the dimming moment is CSS/scroll-driven; a video is a stretch decision made only if CSS proves unsatisfying).
- App Store Connect setup, TestFlight, or any work in the app repo beyond copying existing image assets.
- Changes to `scripts/prerender-route-metadata.js` — it already handles nested paths via recursive `mkdirSync`.

## Current Behaviour

### Routing and rendering

- `src/App.js` maps the URL to a command via `routeCommandMap`, executes it, and renders the output inside the persistent site chrome (menu, wordmark) and a route shell.
- Page content for commands lives in `src/outputs/[command].js` as trusted HTML strings rendered with `dangerouslySetInnerHTML`.
- All existing routes are flat (`/apps`, `/little-panda`, `/books`). No nested path exists yet.

### Metadata and prerender

- `src/siteMetadata.js` owns per-route title, description, image, and path, keyed by command name.
- `scripts/prerender-route-metadata.js` writes `build/<path>/index.html` per route after `react-scripts build`. It strips only the leading slash and uses `fs.mkdirSync(routeDir, { recursive: true })`, so `path: '/app/lookup'` produces `build/app/lookup/index.html` with no script change.
- `public/_redirects` carries the SPA fallback (`/* /index.html 200`), which already covers nested paths. Verify at build time; change only if proven otherwise.
- `public/sitemap.xml` lists every public route.

### Apps directory

- `src/outputs/apps.js` lists six products with icon, name, short copy, and an external link (own domain or App Store). App icons live at the `public/` root.
- Look Up is not listed yet.

### The app's identity (source: `~/code/reality-interrupt`)

- Ink: `Color(white: 0.03)` — approximately `#080808`.
- Mark: a cream rounded U with a pale-blue bar above it (the app's `LaunchLogo.png` / `AppIcon.png`). Not a horizon circle. The landing-page SVG is a measured trace of that artwork on a transparent ground.
- Voice (from `LookUp/OnboardingCopy.swift`): short, calm, second person. "Look up." / "A quiet pause when an app pulls you under." / "Notice where you are." / "You don't need to check in. The pause will find you."
- Non-goals (from `DOCS/PROJECT.md`): no accounts, advertising, analytics dashboards, streaks, coaching, or AI. The pause is always voluntary.

## Proposed Behaviour

### 1. Route and integration

- Add command `lookup` with route `/app/lookup` in `src/App.js`: import, `allCommands`, `commandRouteMap`, `routeCommandMap`.
- When the resolved command is `lookup`, render `<LookUpPage />` full-bleed **instead of** the standard route shell: no `RoutePage`, no site wordmark, no terminal command footer. Keep the existing top-left site navigation menu so visitors can return to jamesgodwin.me. The page owns the rest of the viewport.
- Do not add `lookup` to `src/outputs/help.js`.
- Add the `lookup` entry to `src/siteMetadata.js`:

```js
lookup: {
  title: 'Look Up — A quiet pause when an app pulls you under',
  description: 'After 20 minutes in a chosen app, Look Up turns your iPhone screen near-black so you can catch your reflection and choose: put the phone down, or continue consciously. 7-day trial, lifetime unlock.',
  image: `${siteUrl}/lookup/lookup-og.png`,
  path: '/app/lookup'
}
```

- Add `https://jamesgodwin.me/app/lookup` to `public/sitemap.xml`.
- Add a Look Up row to `src/outputs/apps.js`, first in the list, linking internally to `/app/lookup`:

```html
<hr>
<p class="app-item"><img src="lookup/lookup-icon-192.png" alt="Look Up" class="app-icon" width="30" height="30"><span><strong>Look Up</strong></span></p>
<p>A quiet pause when an app pulls you under. After 20 minutes in a chosen app, the screen turns near-black — catch your reflection, then choose: put it down, or continue consciously.</p>
<p><a href="/app/lookup">Discover Look Up →</a></p>
```

(Remove the leading `<hr>` on the current first item when Look Up takes its place, so separators stay between items.)

### 2. Page structure and copy deck

Seven sections in one column. Copy is taken from the app (`OnboardingCopy` / `ShieldCopy` in `~/code/reality-interrupt`). Do not invent a problem statement, a lecture about feeds, or a heroic product line. Voice rules: short lines, second person, no marketing adjectives, no exclamation marks. If a line could belong to Opal, one sec, Forest, or Apple Screen Time, rewrite it. Never call Look Up a "wellbeing" or "wellness" app, anywhere (page, metadata, `/apps` row, docs) — Apple App Review is sensitive to that category language; describe the behaviour instead.

#### Section 1 — Hero

- The cream-and-blue mark, centred, ~96px.
- H1: **Look up.**
- Lede: **A quiet pause when an app pulls you under.**
- App Store badge, disabled state, with a small line beneath: **Coming soon on the App Store.**

#### Section 2 — The pause (felt)

The page does not invent a “pull” sermon. After the promise, it does what the app does: the felt pause. The signature dimming moment (§4) sits here, using the shield lines.

> Look up.
> Notice where you are.

Then the Felt Pause copy:

H2: **The pause**

> After 20 minutes in one app, Look Up turns the screen near-black. You may catch your reflection.

> Put it down, or continue for 10 minutes. You choose.

The framed pause-screen visual sits below this copy.

#### Section 3 — How it works

H2: **How it works** — three numbered steps, no cards:

1. **Choose your apps.** Pick the few specific apps and websites that pull you in. You can change them any time.
2. **Connect Screen Time.** Look Up is built on Apple's Screen Time frameworks. Your choices never leave your phone — no account, no servers, no tracking.
3. **The pause finds you.** There is nothing to check and nothing to maintain. When the moment comes, the pause appears.

#### Section 4 — What it won't do

H2: **What it won't do**

> No accounts. No advertising. No analytics. No streaks. No coaching. No shame.

> Look Up interrupts; it never nags. The pause is always voluntary — you can continue any time.

#### Section 5 — Pricing

H2: **Pricing**

> Free for seven days.

> Then $19.99, once. Lifetime access, with Family Sharing.

The page shows only that public price. Do not mention a founding offer or $9.99.

Repeat the App Store badge (same disabled/live state as the hero).

#### Section 6 — Footer

- One hairline rule, then:
- **Look Up is made by James Godwin — part of the work at jamesgodwin.me.** (link to `/`)
- **Built on Apple's Screen Time frameworks. Your app choices never leave your device.**
- A quiet `Contact` link to `/contact`.

### 3. Visual contract

The page is a complete departure from the site's terminal aesthetic. This is a deliberate, recorded exception — see `DOCS/decisions/2026-08-17-lookup-page-identity.md`.

- **Always dark.** The page ignores the site theme system entirely. No theme variables, no light mode, no image themes.
- Background: `#080808` (matches the app's ink, `Color(white: 0.03)`).
- Text: `#F2F2ED`; secondary text `rgba(242, 242, 237, 0.62)`; hairline rules `rgba(242, 242, 237, 0.14)`.
- Type: system stack (`-apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", sans-serif`). No web fonts, no monospace, no EB Garamond/Karla/Plex.
- H1: ~56px mobile / ~72px desktop, weight 500, tight line-height.
- H2: ~28px mobile / ~34px desktop, weight 500.
- Body: 17px, line-height 1.6–1.7.
- Column: 1180px max for the product stages and bento layout; coda stays a shorter measure. 24px gutters. On small screens, stack to one column.
- Layout: product top bar with in-page navigation; oversized editorial hero; one full-width gradient product stage; a Framer-inspired bento grid for How it works; split principles and pricing sections. This uses Framer's compositional ideas, not its branding or copy.
- Rhythm: sections separated by generous space (112–144px desktop). Rounded stages contain the colour, depth, and cropped product UI; the page background remains near-black and quiet.
- **Make it visually appealing.** Do not ship a section that is only centred 17px copy on `#080808`. The blue-to-violet visual stages, large type, deliberate screenshot crops, and grid create the energy; the near-black scroll pause remains the contrast.
- Decoration stays bounded to brand-adjacent blue, violet, cream, subtle grids, and the Look Up mark. No stock imagery or unrelated illustration.
- Motion: slow fades only. All motion must collapse to static under `prefers-reduced-motion`.
- Everything scoped under a single root class (e.g. `.lookup-page`) in `src/LookUp.css` so nothing leaks into or inherits from `NewSite.css`.

### 4. The signature pause moment

After the promise, the page performs the product — the same beat as onboarding’s felt pause:

- A full-viewport sticky panel that *is* the system shield, not a picture of it and not a brand fade. As the visitor scrolls: the page goes black, a faint glass sheen appears (the possible reflection), then the shield lines **Look up.** / **Notice where you are.**, then the two shield actions as non-interactive chrome: **I’m putting it down** / **Continue consciously**. No logo on this panel — the real shield has none.

- A full-viewport sticky panel. As the visitor scrolls through it, the already-dark page dims to pure black, then the mark fades in with the lines **Look up.** / **Notice where you are.**
- Implementation: `position: sticky` panel plus a small `IntersectionObserver`-driven opacity. No scroll-jacking, no libraries, no parallax.
- `prefers-reduced-motion`: render a static black panel with the mark and both lines, no scroll effect.
- Total added JavaScript for this effect should stay under ~40 lines.

### 5. App Store CTA states

One constant in `src/components/LookUpPage.js` controls both badge instances:

```js
const APP_STORE_URL = null; // set to the App Store listing URL at release
```

- `null` (pre-release): badge renders visually but disabled (`aria-disabled`, no link), with "Coming soon on the App Store." beneath it.
- URL set (release): badge becomes a standard external link with `target="_blank" rel="noopener noreferrer"`, and the coming-soon line disappears.
- Flipping the constant is the entire launch action. Record the real URL in the project log when it happens.

### 6. Assets

All final web assets live under `public/lookup/`.

#### Existing source material (copy from `~/code/reality-interrupt`)

| Source | What it is |
|---|---|
| `LookUp/Assets.xcassets/AppIcon.appiconset/AppIcon.png` | 1024px app icon: black rounded square, white mark |
| `LookUp/LaunchLogo.png` | Cream U + pale-blue bar on black (alpha channel is fully opaque) |
| `LookUp/Assets.xcassets/Logo.imageset/Logo@2x.png`, `Logo@3x.png` | The mark at 2x/3x |

#### Assets to produce

| File | Spec | Purpose |
|---|---|---|
| `lookup-mark.svg` | Measured trace of `LaunchLogo.png`: cream U `#F1E7D9`, bar `#8CAECB`, transparent | Hero mark, section divider, favicon source |
| `lookup-icon-180.png` | From `AppIcon.png`, keep the black rounded square | apple-touch-icon |
| `lookup-icon-192.png` | Same | Favicon source + `/apps` page icon |
| `lookup-icon-512.png` | Same | PWA / larger contexts |
| `lookup-hero-pause.webp` | Unused leftover (old pause mockup). Do not place on the page. | — |
| `lookup-screen-promise.webp` | Real-device Promise screen, WebP | Hero product shot |
| `lookup-screen-picker.webp` | Real-device app picker, WebP | How it works, step 1 |
| `lookup-screen-screentime.webp` | Real-device Connect to Screen Time screen, WebP | How it works, step 2 |
| `lookup-screen-found.webp` | Real-device “Look up. Notice where you are.” screen, WebP | How it works, step 3 |
| `lookup-og.png` | 1200×630, `#080808`, centred white mark, "Look up." beneath | Social share image |

Notes:

- How it works uses three numbered steps, no cards, each with one real-device screenshot (picker, Screen Time, found-you). Do not use the unused system-permission captures or the old pause mockup.
- Device screenshots from James’s iPhone (2026-08-18) replaced the SwiftUI preview renders. Keep them as WebP.
- Do not flatten the app icon to transparency — the black rounded square is the icon.
- Optional stretch only if the CSS dim proves unsatisfying: `lookup-dim-loop.mp4`, a 6–8 second loop of the screen dimming into the pause. Decide against it by default.

## Interface And Seams

### Files expected to be created

- `src/components/LookUpPage.js`
- `src/components/LookUpPage.test.js`
- `src/LookUp.css`
- `public/lookup/*` (asset set above)

### Files expected to be modified

- `src/App.js` — import, command registration, route maps, and the full-bleed branch for `lookup` only.
- `src/siteMetadata.js` — the `lookup` entry.
- `public/sitemap.xml` — one new URL.
- `src/outputs/apps.js` — the Look Up row and separator adjustment.

### Files that should not need modification

- `src/NewSite.css`
- `src/components/RoutePage.js`, `src/pagePresentation.js`, `src/components/SiteFooter.js`
- `src/components/PressureEncounter.js` and all homepage files
- `src/themes.js`, `src/outputs/help.js`
- `scripts/prerender-route-metadata.js`
- `public/_redirects` (verify only)
- `package.json`

If an implementation requires changing one of these protected files, stop and explain why before proceeding.

## Implementation Notes

### Execution Rules For A Cheaper Model

1. Read only `AGENTS.md`, `DOCS/PROJECT.md`, `DOCS/BACKLOG.md`, `DOCS/next-day.md`, this spec, and the decision record at startup.
2. Implement exactly one vertical slice at a time.
3. Use `app-tdd-loop`: one failing behaviour test, the minimum implementation, keep it green.
4. Do not touch the homepage, the route shell, themes, or `NewSite.css`.
5. Do not install packages, add fonts, or browse the web.
6. Run the focused component test after each slice. Run the full suite and production build after Slice 1 and Slice 5.
7. After Slice 1, confirm `build/app/lookup/index.html` exists with the correct title and OG tags — this proves the nested-route prerender.
8. Preserve the dirty worktree. Do not reset, checkout, delete, or rewrite unrelated changes.
9. Update this spec's slice status, `DOCS/BACKLOG.md`, the dated session log, and `DOCS/next-day.md` after each meaningful session.
10. Stop when the current slice is green.

### Suggested Agent Prompt

> Work in `/Users/nitro/code/jamesgodwin-site`. Read `AGENTS.md`, `DOCS/PROJECT.md`, `DOCS/BACKLOG.md`, `DOCS/next-day.md`, `DOCS/specs/lookup-landing-page.md`, and `DOCS/decisions/2026-08-17-lookup-page-identity.md` in that order. Implement only the first incomplete vertical slice from the spec using `app-tdd-loop`. Preserve all existing user changes and do not modify the protected files. Run the exact focused tests named by the slice, update the repo handoff documents, and stop after that slice is green.

## Testing Plan

### Automated behaviour tests

`src/components/LookUpPage.test.js` should prove:

- the page renders one visible `h1` containing "Look up." and the hero lede;
- the page renders honest product shots: promise in the hero, plus picker, Screen Time, and found-you screens in How it works;
- all seven sections render in order;
- the pricing section states the trial, $19.99 lifetime price, and Family Sharing, and does not mention $9.99 or a founding offer;
- with `APP_STORE_URL` unset, both badges render disabled and the coming-soon line is present;
- the footer links to `/` and `/contact` and carries the Screen Time privacy line;
- the route maps resolve `lookup` ↔ `/app/lookup`.

Add a small assertion in the apps-output tests only if one already exists (the `/apps` row links to `/app/lookup`). Do not test CSS implementation details.

### Regression checks

- Existing suites stay green without modification.
- Direct route loading of `/app/lookup` works; other routes are unaffected.
- Production build emits `build/app/lookup/index.html` with the Look Up title, description, and OG image.
- `git diff --check` is clean.

### Commands

Focused loop:

```sh
CI=true npm test -- --watchAll=false src/components/LookUpPage.test.js
```

Full verification after Slice 1 and Slice 5:

```sh
CI=true npm test -- --watchAll=false
npm run build
git diff --check
```

### Final browser QA only

One browser session after all slices are green.

Check at 390 x 844:

- the whole page reads in one column without horizontal overflow;
- the dimming moment feels calm, not gimmicky, and never traps the scroll;
- badges are legible and the disabled state is obvious;
- reduced-motion mode shows the static panel.

Check at 1280 x 800:

- the 1080px split layout holds against a wide viewport; mobile stacks without horizontal overflow;
- section rhythm stays generous without feeling empty;
- the footer is quiet and secondary.

Confirm no browser console errors, and confirm the site navigation menu appears on `/app/lookup` while the James Godwin wordmark and terminal chrome do not. Other routes stay intact. If browser tooling is unavailable, report visual QA as not run; do not claim completion from build success alone.

## Implementation Slices

1. Nested route and dark shell prove themselves
   - Status: Complete (2026-08-17).
   - Outcome: `/app/lookup` renders a full-bleed dark page with the mark, hero copy, and disabled badge; no site chrome on this route; metadata, sitemap, and the `/apps` row are wired; the build emits `build/app/lookup/index.html`.
   - Test seam: Create `LookUpPage.test.js`; prove hero render, route maps, disabled badge, and footer links.
   - Blocked by: Nothing.
   - Notes: Create `LookUpPage.js`, `LookUp.css`, and the `public/lookup/` folder with the mark and icon assets copied from the app repo. Run focused test, full suite, build, and `git diff --check`.
2. Full copy deck and responsive rhythm
   - Status: Complete (2026-08-17).
   - Outcome: all seven sections render with final copy, hairline dividers, and the 640px column at mobile and desktop widths.
   - Test seam: Section order and pricing-line assertions.
   - Blocked by: Slice 1.
   - Notes: Copy lives in the component; keep it editable in one place.
3. The signature pause moment
   - Status: Complete (2026-08-17).
   - Outcome: the sticky dim-into-black panel with mark reveal works on scroll and collapses to static under reduced motion.
   - Test seam: Structural assertions only (panel copy present); visual judgement deferred to final QA.
   - Blocked by: Slice 2.
   - Notes: Under ~40 lines of added JS; no libraries.
4. Framed screens and hero visual
   - Status: Complete (2026-08-17).
   - Outcome: `lookup-hero-pause.webp` and the two framed screens are produced, placed, and sized; OG image produced and referenced.
   - Test seam: Images render with meaningful alt text.
   - Blocked by: Slice 2.
   - Notes: SwiftUI preview renders are acceptable now; device screenshots replace them at TestFlight.
5. CTA states, OG verification, and final QA
   - Status: Complete (2026-08-17). Desktop QA at 1920 and page walkthrough done; ConvertKit overlay hidden on this route. Mobile 390×844 visual pass was attempted via device metrics and is worth a real-phone glance after deploy.
   - Outcome: badge flip mechanism documented and tested both ways; OG tags verified in built HTML; one browser QA session completed clean.
   - Test seam: Full suite, production build, `git diff --check`, bounded browser session.
   - Blocked by: Slices 1–4.
   - Notes: Fix P0/P1/P2 issues only.

## Definition Of Done

- `/app/lookup` renders the page with app-voice copy. Sections below the pause are visually composed: How it works uses real-device screenshots; refusals, pricing, and footer use type and space rather than a text dump.
- The page is always dark, fully scoped, and keeps only the site’s top-left navigation menu for wayfinding; every other route is unchanged.
- The signature dimming moment works and respects reduced motion.
- Both App Store badges flip from disabled to live via the single documented constant.
- The `/apps` page links to `/app/lookup`; sitemap and prerendered metadata include the route.
- Automated tests pass; production build succeeds and emits `build/app/lookup/index.html`.
- `git diff --check` is clean; final browser QA completed once with no console errors.
- Backlog, session log, and next-day handoff reflect the completed work.

## Open Questions

- The App Store URL does not exist yet (listing not created). The CTA ships disabled; the constant flips at release. Not blocking.
- Device screenshots vs SwiftUI preview renders for framed screens: previews now, swap at TestFlight. Decided, recorded here so the swap is remembered.
- Whether future apps get `/app/<name>` pages: this page sets the pattern, but each new page still needs its own brief. Not blocking.
