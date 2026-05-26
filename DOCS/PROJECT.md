# Project

## Purpose

This repository powers James Godwin's personal portfolio site. It presents his work, writing, Taoist practice, apps, books, workshops, and contact paths through a terminal-inspired React interface with route-backed pages.

## Stack

- Create React App
- React 18
- JavaScript
- CSS custom properties and `src/NewSite.css`
- Static assets in `public/`
- Netlify-style `_redirects`
- Static metadata prerendering through `scripts/prerender-route-metadata.js`

## Key Constraints

- Preserve the terminal-inspired visual language and command/page architecture.
- New public pages should be represented as commands where appropriate.
- Command content in `src/outputs/` is rendered as trusted HTML strings through `dangerouslySetInnerHTML`; do not introduce user-generated HTML there.
- Keep route metadata, redirects, and sitemap entries synchronized for new route-backed pages.
- Do not run `npm run eject` without explicit approval.

## Non-Goals

- This project is not a CMS.
- This project is not a multi-user application.
- This project does not own the linked external products such as True Essence, AI Ching, or GratefulFor.

## Environment

- Local development: `npm start` on `localhost:3000`.
- Production build: `npm run build`.
- Tests: `npm test` starts the CRA watch-mode test runner.
- Deployment output is the `build/` folder.
- The default social metadata is in `src/siteMetadata.js`; route-specific metadata is prerendered after builds.
