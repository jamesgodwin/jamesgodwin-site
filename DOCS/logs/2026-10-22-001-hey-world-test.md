# HEY World single-essay publication test

## Summary

22 October 2026: James authorised one essay as a publication test. Published the oldest published essay, “Decentralisation Is Not About Crypto” (31 May 2026), from jrsg@hey.com to world@hey.com using HEY CLI 1.7.0. Public result: https://world.hey.com/jrsg/decentralisation-is-not-about-crypto-8b722cd2 .

## Files Touched

This log, backlog and the HEY parallel-thread handoff. Ignored preparation and fetched HTML are in output/hey-world/. Website source and Source vault untouched.

## Verification

Stored CLI authentication worked. Saved draft 2301490252 and read back the sender, sole recipient, full text, cover and source link before sending. `hey draft send` returned API 406 Not Acceptable, but the publication succeeded. Do not retry this send: verify public output before retrying any HEY World error to avoid duplicate posts. Public index and article fetched successfully; final paragraph, original-date note and website source link are present. Browser screenshot confirms the cover loads and title/body render correctly. Public displayed date is 22 October 2026; original date is retained in the footer. HEY World index has a subscription form. No subscriber-notification action was taken; delivery to subscribers was not independently audited. Subscriber list was not inspected. No build/tests needed for external publication and documentation only.

## Decisions

Single test only. Retained essay body verbatim, added hosted cover and original-date/source footer. The CLI has no backdating option; account editor date controls remain unchecked. Use oldest-first for any authorised future batch. No website Subscribe change, further publication, commit or push in this test.

## Follow-ups

Review the live test with James before extending the batch. Website subscription link and remaining essays/Notes remain open. Check subscriber management in HEY web UI if requested.

## Subscription links and authorised essay backfill

James approved adding the agreed subscription links and sending the essays to HEY. All 15 published essays are now on HEY, with the existing test skipped and 14 further essays published oldest first. Twenty Notes and the draft fixture were not sent. Every public essay was fetched and its complete rendered body compared against the live canonical article; all 15 match, with original-date footers and website source links. Cover URLs are present. No subscriber-notification action was invoked; actual subscriber delivery was not audited. Several CLI sends return 406 or empty output after successful publication. Always inspect the public index before retrying. Publication URLs are listed below.

Local website adds Subscribe by email beside Essays/Notes through WritingNav and the agreed invitation through shared WritingSubscribe on all essay/Note pages. Existing Action quiet and TextLink body recipes are reused. All 39 built writing pages have the correct HEY destination. Build/design guard, Vitest 19 tests, routes 8, essays 5, Notes 2 and design 7 pass (41 total). Browser confirms archive link and appearance. No new automated tests were added for the link-only change. Preview runs at http://127.0.0.1:4173/essays . James explicitly requested local review first; no commit, push or website deployment. Existing unrelated documentation changes preserved.

Files additionally touched: src/components/site/WritingNav.astro, new WritingSubscribe.astro, src/pages/essays/[slug].astro and src/pages/notes/[slug].astro. Follow-up: owner reviews local links, then authorises website publication.

- https://world.hey.com/jrsg/decentralisation-is-not-about-crypto-8b722cd2
- https://world.hey.com/jrsg/how-a-small-firm-could-use-ai-without-sending-client-documents-to-the-cloud-e085b469
- https://world.hey.com/jrsg/when-your-ai-assistant-contains-someone-else-s-private-life-2e8f204a
- https://world.hey.com/jrsg/what-local-ai-can-actually-do-for-a-law-finance-accounting-or-health-practice-1f566d98
- https://world.hey.com/jrsg/a-ban-is-not-a-workflow-pressure-routes-around-it-3b5b4ec2
- https://world.hey.com/jrsg/a-local-ai-appliance-in-plain-english-what-it-is-what-it-does-and-what-it-does-not-do-9dfd7a0e
- https://world.hey.com/jrsg/a-private-ai-workspace-the-simplest-starting-point-for-sensitive-work-ab505310
- https://world.hey.com/jrsg/is-your-ai-using-your-design-system-or-producing-a-convincing-picture-of-it-d727880b
- https://world.hey.com/jrsg/the-report-ai-should-produce-before-you-trust-its-ui-6451e3c3
- https://world.hey.com/jrsg/chrome-s-most-annoying-feature-is-trying-to-help-me-35828b4e
- https://world.hey.com/jrsg/why-fluidvoice-has-become-part-of-how-i-work-4476d2b5
- https://world.hey.com/jrsg/the-darkness-was-not-asking-to-be-defeated-4082002f
- https://world.hey.com/jrsg/some-things-need-roots-before-they-need-an-audience-1dd13eac
- https://world.hey.com/jrsg/what-if-healing-begins-with-the-wrong-question-00941afb
- https://world.hey.com/jrsg/how-i-keep-my-projects-portable-between-ai-assistants-df96d859

## Authorised website release and Notes checkpoint

James reviewed the local version and authorised production push and the Notes backfill. Application commit 9b87551497d845e295517022033b6843402057af contains only the four reviewed source files. Remote main matches. Clean git-export candidate npm ci/build and all 41 checks passed. Cloudflare Pages check reports Deploy successful for this exact commit; deployment 6caeea8c-a549-48d5-9465-b8c32fd245f7, preview https://6caeea8c.jamesgodwin-site.pages.dev . All 39 live writing pages contain the HEY subscription destination; browser confirms the live archive navigation link. Notes backfill then started oldest first, with per-post public verification and no subscriber notification action. Interrupted runs must inspect the HEY index and output/hey-world/notes/backfill-results.json before resuming, because CLI failures may follow successful publication.

## Completed Notes backfill and release acceptance

All 20 Notes published oldest first. Final comparison of all 35 HEY pieces (15 essays and 20 Notes) against each canonical live website article confirms complete body text, cover URL, original-date footer and source link. A sample Note was checked visually in the browser and its artwork renders. No subscriber-notification control was invoked; actual subscriber delivery was not audited. The draft fixture stayed excluded. Website subscription links are live on all 39 writing pages under application commit 9b87551 and the successful deployment recorded above. Source tree is committed/pushed; local documentation captures remain uncommitted alongside pre-existing documentation edits. No further release gate remains for this requested scope.

Notes publication URLs:

- https://world.hey.com/jrsg/what-tai-chi-taught-me-about-reactivity-f9fb8100
- https://world.hey.com/jrsg/calm-is-not-minimalism-6ca4269e
- https://world.hey.com/jrsg/the-smallest-boundary-that-saved-my-week-b022021a
- https://world.hey.com/jrsg/the-app-is-only-the-surface-526a36ee
- https://world.hey.com/jrsg/the-product-felt-rushed-because-the-team-was-82ec3f5f
- https://world.hey.com/jrsg/the-moment-softness-became-information-108cb1ba
- https://world.hey.com/jrsg/ai-frontends-can-look-finished-while-still-being-inaccessible-1afb37f4
- https://world.hey.com/jrsg/dashboards-can-make-people-defensive-4a63f88a
- https://world.hey.com/jrsg/what-distance-allows-us-to-see-ae98b6b9
- https://world.hey.com/jrsg/interest-is-a-signal-it-is-not-yet-demand-9b17c4d1
- https://world.hey.com/jrsg/the-workday-was-still-in-my-shoulders-a7b06a54
- https://world.hey.com/jrsg/a-welcome-interruption-f8b58942
- https://world.hey.com/jrsg/an-agent-completing-a-form-is-not-proof-it-understood-the-user-8fc9efdc
- https://world.hey.com/jrsg/holy-shit-this-is-fun-d3d7621e
- https://world.hey.com/jrsg/help-the-builder-get-it-over-the-line-2878ddd3
- https://world.hey.com/jrsg/the-pace-is-part-of-the-product-c5251353
- https://world.hey.com/jrsg/the-transcript-worked-the-workflow-did-not-1fac7537
- https://world.hey.com/jrsg/done-is-not-a-checklist-state-e181db7f
- https://world.hey.com/jrsg/most-businesses-don-t-have-an-ai-problem-b1a80f6f
- https://world.hey.com/jrsg/the-recording-survived-that-was-the-test-e4beabeb

## Future publishing workflow

James requested documentation of website → HEY → LinkedIn announcement pointing to website. Added runbooks/publish-writing.md and linked it from the runbook index, import procedure and Project. Subscriber email remains an explicit, separately verified HEY step; LinkedIn creation means a draft unless external publication is requested. Source writing queue is not resumed by documentation. Source inspection found imported-only required provenance and LinkedIn bylines/isBasedOn; added a concrete pre-next-piece backlog item rather than claiming website-original support exists. Updated the handoff reference. Documentation only, no publication, email, code change, commit or push. Verified referenced repository paths and ran git diff --check; no build/tests needed.

## Paper Trail move experiment

James explicitly authorised moving one older World post and restoring it if public availability disappeared. Moved “Decentralisation Is Not About Crypto”, posting ID 1268911657, using `hey move 1268911657 --to 'paper trail' --json`. CLI reports success; subsequent reads confirm absent from the complete Imbox listing and present in Paper Trail. Public article returns HTTP 200 with full ending text, including a fresh query-string request. Public archive page 2 still lists it (the main index is paginated, so absence from page 1 is expected). No restoration needed. Left only this post in Paper Trail; no other posts moved. This current observed test supersedes earlier uncertainty and historical reports for this exact operation, without proving bulk moves or deletion safe.

## Remaining World posts moved to Paper Trail

James authorised moving all remaining HEY World posts. Captured the 35 remaining Imbox World entry IDs and their public URLs, verified the public baseline, then moved only those 35 IDs via CLI. Follow-up reads confirm zero World entries remain in the Imbox and all 35 moved IDs appear in Paper Trail. Each of the 35 public post URLs still returns successfully with its expected title and website-source footer using a fresh verification query. The earlier single-test post remains separate in Paper Trail, making 36 website pieces filed there in total. No deletion or publication/subscriber-send action. Evidence: output/hey-world/move-all/.
