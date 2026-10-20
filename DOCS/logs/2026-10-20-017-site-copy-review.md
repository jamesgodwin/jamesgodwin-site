# Site-wide copy review

## Summary

Reviewed the entire current site against James’s positioning and firsthand story context. Sharpened the copy around product design and full-stack development, shortened repetitive supporting pages and clarified what James contributed to each project. Retained a direct, personal voice.

## Files Touched

- Homepage, Work, About/Product Clarity/Workflow Systems, Apps/Now, creative/practice pages, contact/confirmation/404 copy and shared footer.
- Four story data files and static visual captions; no design-token or interaction changes.
- Route metadata and existing content/metadata assertions. The built-route test now checks current descriptions and titles while preserving baseline canonical destinations.
- Current scope, Project route inventory and handoff. Backlog status remains local review in progress.

## Verification

- Executed `npm run build`: design guard passed across 82 files, 29 HTML pages emitted.
- Executed `npm test`: 18 tests passed.
- Executed `npm run test:routes`: four tests passed. Initial run correctly failed on the obsolete About metadata expectation; reconciled the check with authorised metadata changes while retaining the original canonical-URL fixture. Node emits a module-type detection warning for the metadata import; this does not affect the site build.
- Executed `npm run test:essays`: all three importer/rendering checks passed. Original essay Markdown files are byte-for-byte unchanged from the pre-edit snapshot.
- Executed `git diff --check`: passed.
- Browser reviewed desktop homepage and Product Clarity; 20 main/supporting routes at 390px and all twelve story chapters through Next links. No horizontal overflow, broken completed images in page checks, app controls or browser console warnings/errors. Screenshots and browser check results in ignored `output/copy-review/`.
- No new test suite. Existing content assertions updated for intentional wording changes. Public deployment, fresh external product qualification and user acceptance were not performed.

## Decisions

- Keep the approved home headline and four-story structure. Make full-stack development explicit alongside UX and accessibility.
- Treat James’s latest account as authority for Ben’s AI-assisted prototype; remove the older contradictory Product Clarity sentence.
- Preserve Plumbline’s IIIMPACT attribution and in-progress projection/plugin status, and TapScribe’s local transcription versus optional external AI distinction.
- Keep original published essays, testimonial quotations, service prices and existing contact destinations. Shorten book/service descriptions without changing their products or commercial scope.
- Update Now from the current conversation, avoiding a new claim about live releases or uptake. Add TapScribe to Apps with an internal story link.
- Add the already-configured PostHog integration to the factual privacy description. No legal-compliance claim or revised legal terms.

## Follow-ups

James can review the revised local copy at http://127.0.0.1:4173/. Public hosting/cutover still requires separate authorisation. No commit, push or deployment.
