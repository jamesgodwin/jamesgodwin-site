# LinkedIn site alignment implementation

## Summary

Implemented the agreed local P1–I2 alignment, the P3 commercial-centre refinement and the final proof-and-clarity pass. Product Clarity now leads with practical product gaps and a labelled direct enquiry, supported by an anonymised operational example. The homepage names the practical work beneath each service, shows recent delivery evidence before the reflective experience, and About clearly groups commercial work ahead of practice. The homepage, work reflection, menu, footer, About, Now, metadata and social preview assets now tell the same product, workflow and practice story. UX, product and workflow delivery lead; Tai Chi remains visible as practice and perspective.

## Files Touched

- Product/contact behavior: `src/outputs/uxui.js`, `src/outputs/systems.js`, `src/components/ContactPage.js`, `src/contactIntent.js`, `src/pagePresentation.js`, `src/siteMetadata.js`, `public/index.html`.
- Discovery and accessibility: `src/components/PressureEncounter.js`, `src/components/SiteFooter.js`, `src/App.js`, `src/NewSite.css` and focused tests.
- Mobile navigation: added a solid, theme-matched fixed surface beneath the menu and wordmark so scrolling page copy disappears cleanly behind the header.
- Identity: `src/outputs/about.js`, `src/outputs/now.js`, content/metadata tests, `public/og.webp`, `public/twitter.webp`.
- Authority: parent/child specs, backlog and handoff.

The pre-existing `public/tapscribe/TapScribe-Pilot.dmg` change was not produced by the alignment work. James confirmed during release that it is the intended download owned by this website repository and published it separately in commit `2e71d99`.

## Verification

- Focused changed-area suite: 32/32 passed before the final accessibility assertion.
- Full suite: 33/33 passed.
- Production build: passed; metadata prerendered for 18 routes.
- Generated HTML inspected for home, `/uxui`, `/systems`, `/about`, `/contact` and `/now`; titles, descriptions and canonical Open Graph URLs matched route metadata.
- Responsive browser checks: home at 390 × 844 and 1280 × 720; work reflection at 390 × 844; effective 320px at 200% zoom had 160px layout width, natural vertical scrolling and no horizontal overflow. Reflection heading focus was observed. Browser tooling was then stopped to reduce memory use.
- `git diff --check`: passed.
- Remaining manual checks: James's copy/share-card review, combined eight-person exercise, final pre-release route walk, deployment and live smoke test.
- Existing test infrastructure emits React `act` and Node `punycode` deprecation warnings; no test failed.
- After P3, the full 33-test suite and production build passed again. Generated Diagnostic, Workshops and Philosophy metadata was inspected. Browser automation was not restarted because James asked to reduce memory use.
- After the mobile header refinement, the focused App navigation test passed, the production build passed and `git diff --check` passed. Browser automation remained closed to keep memory use low.
- After the proof-and-clarity refinement, the two focused behavior files passed 10/10, the full suite passed 33/33, the production build passed with metadata for 18 routes, and `git diff --check` passed. Browser automation was not used.
- Final release review: homepage inspected at 390 × 844 and 1280 × 720, About and its work grouping inspected at 1280 × 720, and both social preview assets inspected directly. Layout and hierarchy were coherent and the browser console had no errors. The homepage proof was tightened to attribute the result explicitly to client feedback. The browser was closed after the bounded review.
- Release: committed the website changes as `e50ba01` and pushed `main`. Netlify published the exact reviewed JavaScript asset. Live home, Product Clarity, Workflow Systems, About, Contact and Now routes resolved successfully after their canonical trailing-slash redirects; route titles and Open Graph metadata matched the release. Both social images and the sitemap returned 200.
- TapScribe download: `hdiutil verify` passed for `public/tapscribe/TapScribe-Pilot.dmg`; size 13,613,681 bytes and SHA-256 `b0945b05d7873be83551d10439e971797896496f3fc872acc998e5a5844e8e81` before publication.

## Decisions

- Current Now statements were taken from the 7 September Source Business handoff/project index and the TapScribe repository handoff after James authorised checking current projects.
- Removed the reflection live region because moving focus to the new heading already provides the state-change announcement and avoids a likely duplicate screen-reader announcement.
- Replaced both stale social images with one coherent cream, ink, mountain and standing-figure direction. Exact asset copy: “Products and workflows, working cleanly.”, “UX • accessibility • implementation”, “James Godwin”.
- Featured recommendation two remains explicitly pending because Source records publication and the announcement URL, but not the native article's canonical URL.
- James confirmed UX/product/workflow as his strongest and most commercially viable work. Tai Chi has deep personal value and informs his judgement, but does not need equal commercial prominence.
- Kept the R7,500 Workflow Audit and optional care pricing. Product and variable implementation remain enquiry-led. Removed the $350 Diagnostic price because the practice offer is not yet an established commercial lane.

## Follow-ups

- Review copy and social images.
- Run the combined visitor exercise on the live site.
- During Week 2, verify the native LinkedIn article URL and then decide whether to adopt the three-item Featured order and `/uxui` profile destination.
