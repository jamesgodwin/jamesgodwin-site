# Project

Purpose, users, stack, and constraints for this repository. Operating rules live in `AGENTS.md`. Active work lives in `DOCS/BACKLOG.md`.

## Purpose

This repository powers James Godwin's personal portfolio site at the public destination used for his work, writing, Taoist practice, apps, books, workshops, and contact paths. It presents those paths through a terminal-inspired React interface with route-backed pages.

## Intended User and Problem

Known from the live site and the 6 September 2026 LinkedIn/site review, not from invented personas:

- Founders and product teams arriving from LinkedIn whose fast-built or AI-assisted products still have UX, accessibility, or implementation gaps. LinkedIn currently leads with this problem; the site has historically led with leadership-regulation language, so those visitors must translate before recognising the same person and service.
- Operators of service businesses whose operational knowledge lives with the owner and scattered handoffs. `/systems` already addresses this with a fixed-scope offer.
- Curious visitors exploring reflective, creative, and Taoist work without having to identify as buyers.

James is the author and maintainer. This is a personal site, not a multi-user product. Distinguish that evidence from later conversion or traffic claims; those metrics are not established here.

## First Success Signal

Enduring signal: a visitor can recognise James, reach a relevant destination, and find a direct contact method without a site rebuild.

Current goal: review and validate the local LinkedIn/site candidate in [the alignment plan](specs/linkedin-site-alignment.md). UX, product and workflow delivery are its commercial centre; Tai Chi remains visible as practice and a source of judgement. Combined visitor validation and live deployment are later gates and are not yet passed.

## Stack

- Create React App, React 18, JavaScript.
- CSS custom properties and `src/NewSite.css`.
- Static assets in `public/`, including Netlify-style `_redirects`.
- Route metadata in `src/siteMetadata.js`, prerendered after build by `scripts/prerender-route-metadata.js`.
- Themes in `src/themes.js`: CSS-variable light/dark schemes plus image-based themes with mobile variants and fade transitions.

### Architecture map

**Command and page system.** `src/App.js` owns the command parser (`allCommands`, `executeCommand()`, `commandRouteMap`). Each command has a module in `src/outputs/` that exports an HTML string. The app also renders route-backed page views for the same outputs.

**Homepage.** The live homepage uses concentric circles and authored reflections as its primary interaction. Legacy command handling remains for routes and navigation. The homepage does not expose text or voice input.

**Adding a route-backed page.** Update all of:

- `src/App.js` imports, `allCommands`, `commandRouteMap`, `pageHeadingLabels`, navigation where relevant, and `executeCommand()`.
- `src/outputs/[command].js`.
- `src/siteMetadata.js`.
- `public/_redirects` and `public/sitemap.xml`.
- `src/outputs/help.js` if the command should be discoverable.

Special commands include `breathe` (meditation overlay), theme names (`default`, `dark`, `stillness`, `mountains`, `essence`, `tao`, `zen`, `snow`, `void`), and easter eggs `return` and `unlearn`.

## Key Constraints

- Preserve the terminal-inspired visual language, circle artwork, existing URLs, reflective routes, and service prices unless a spec explicitly changes one of them.
- New public pages should be represented as commands where appropriate.
- Command HTML is trusted. Do not introduce user-generated HTML into `src/outputs/`.
- Keep route metadata, redirects, and sitemap entries synchronized for new or changed routes.
- Do not run `npm run eject` without explicit approval.
- Do not merge or resume the parked Look Up work on branch `lookup` unless that hold is lifted.
- Deployment, LinkedIn profile edits, outbound contact, and spending require explicit authorization. Local implementation is not live completion.

## Non-Goals

- This project is not a CMS.
- This project is not a multi-user application.
- This project does not own the linked external products such as True Essence, AI Ching, or GratefulFor.
- This pass of site work is not a rebuild, framework migration, case-study platform, or new tracking system.

## Environment

- Local development: `npm start` on `localhost:3000`.
- Production build: `npm run build` writes `build/` and prerenders route metadata.
- Tests: `npm test` starts the CRA watch-mode runner. Non-watch runs use `CI=true npm test -- --watchAll=false --runInBand`.
- Default social metadata is in `src/siteMetadata.js`.
- ConvertKit email capture uses `data-uid="0da6b662ba"`.
- Google Analytics uses `G-0TCHNH6DEP`.
- The public README is the Create React App getting-started file; it is not the internal project brief.
