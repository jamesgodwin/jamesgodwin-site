# Live Cloudflare domain verification

## Summary

James deployed the GitHub candidate and connected the domain himself, then supplied https://jamesgodwin.me/ for verification. The new Astro site is reachable through Cloudflare over valid HTTPS. The fetched homepage HTML and JavaScript client are byte-identical to the reviewed local build for app candidate c1dce04 / GitHub handoff 06d827b. No application, DNS or hosting settings changed during this verification.

## Files Touched

- This log, current project/hosting status, backlog and resumption context; README/AGENTS introductory hosting state.
- Ignored evidence under `output/live-verification/`: HTTP results, alternate-host results, client configuration booleans, mobile results and live screenshot. No environment values or visitor identifiers added to repository documentation.

## Verification

- HTTPS apex: 200, expected four-story Astro content, no noindex header. Homepage/client match the reviewed local bytes. Public SDK token/ingestion host match the existing website configuration; project identity independently confirmed as 631540.
- 39 live HTTP URL checks cover all emitted pages, aliases, sitemap, robots, slash variants and excluded content. Expected 200/301/308/404 responses observed. Existing page canonicals point to the production domain. Both writing/workshop aliases preserve their destinations and workshop intent. Unknown URL, retired pilot, draft fixture, catalogue and prototype all return real 404s.
- All 86 distinct rendered image/script/stylesheet paths return 200. Six distinct social images return 200, including original article covers.
- HTTP apex redirects to HTTPS; HTTPS www redirects to the canonical apex. HTTP www takes the expected two-hop HTTPS/apex route. TLS checks were not bypassed.
- Temporary `jamesgodwin-site.pages.dev` serves the new site with X-Robots-Tag noindex. Production domain remains indexable.
- Browser: Enter selects all four stories with one panel visible. Plumbline chapters, Back/Forward, product contact intent and Writing → complete article exercised. Twelve routes checked at 390px with no horizontal overflow or broken completed images. Console warning/error checks empty. Viewport reset; live homepage tab left available. No contact messages, subscriptions or other external actions submitted.
- PostHog: authoritative querying skill/schema used. Project 631540 contains an actual apex Astro pageview at 17:10:22 UTC without a preview verification label; a Pages-address pageview at 17:09:12 UTC carries traffic_type=verification. These demonstrate live pageview delivery and the host distinction. Browser QA URLs included verification_run=release-2026-10-20-06d827b, but the exact tagged visit had not appeared in the bounded query when inspected. Do not claim new hosted contact-event, exception or log ingestion from this result, or count QA as visitor validation.
- Python urllib received a 403 for a script request; curl and the browser fetched it successfully. No general asset failure reproduced.
- Existing automated checks were not rerun because no application code changed; the clean-candidate checks are recorded in log 022. No commit, push, deployment or infrastructure change performed in this verification turn.

## Decisions

The custom domain is now serving the reviewed Cloudflare site, replacing the former pending-cutover state. The primary production smoke checks pass. Netlify availability/rollback destination and its retirement were not inspected or changed. Do not mark the entire hosting slice complete until outstanding rollback information and any required deeper analytics checks are reconciled.

## Follow-ups

Confirm the retained Netlify rollback destination before any old-hosting cleanup. Hosted pageviews are verified; deeper contact-event/log/exception acceptance remains separate from the observed pageview evidence. The eight-person visitor exercise and Source publication pause remain unchanged. Documentation changes are local and can travel with the next authorised commit; no app redeploy is needed for this verification.
