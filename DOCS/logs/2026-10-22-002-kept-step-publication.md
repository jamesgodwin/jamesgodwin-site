# Why I Kept a Step I Could Have Removed

## Summary

James authorised website publication with his supplied image, HEY republication and subscriber email, followed by a LinkedIn draft with the live website link. Article body preserved verbatim with Markdown paragraph separation. Website-original provenance supported for essays; imported essays retain their source requirement and LinkedIn attribution.

## Files Touched

New essay and supplied PNG in src/content/essays/ and src/assets/writing/; src/content.config.js, essay reading page, package.json and essay/Notes built-output tests; added original-essay.test.mjs. Local docs updated for resumption.

## Verification

New regression test first failed because article output was absent, then passed after implementation. Clean exported release npm ci/build and 42 checks pass (Vitest 19, routes 8, essays 6, Notes 2, design 7). The existing Notes suite initially exposed a hard-coded 15-essay count; it now checks the actual published essay count while retaining format separation. Local browser confirmed artwork/title and original provenance; source paragraphs are preserved. Application commit 2ac2751 pushed for Cloudflare deployment. Live deployment, HEY publication and subscriber email pending verification at this checkpoint.

## Decisions

Use origin: website for this new original essay. Existing essays default to linkedin and require their genuine sourceUrl. Website-original essays reject an external original source and omit the LinkedIn byline/isBasedOn. Notes provenance remains unchanged until the next new original Note requires it. No LinkedIn publication authorised; return the approved announcement with live website URL.

## Follow-ups

Verify deployed article and artwork; publish to HEY once; send to subscribers through HEY interface and verify delivery state. Return live website URL and LinkedIn draft.

## Live checkpoint

Application commit 2ac2751 deployed successfully as Cloudflare deployment 42ed47c6-6801-4bd6-8aa5-c5dbae34a8ef. Website article, artwork HTTP 200, archive, sitemap and llms discovery verified. Website URL: https://jamesgodwin.me/essays/why-i-kept-a-step-i-could-have-removed . HEY publication: https://world.hey.com/jrsg/why-i-kept-a-step-i-could-have-removed-6aa11cd9 . Full HEY body matches the live website body, with original date and website link.

Subscriber email remains PENDING, not sent. Native HEY controls did not respond reliably; in-app browser is at HEY sign-in. Requested owner sign-in without asking for credentials. User then confirmed the website/LinkedIn posting and asked whether HEY was posted; answered yes and clearly distinguished pending subscriber email. Do not republish or duplicate the HEY post. Resume by signing in to HEY and using Email to subscribers for this exact post, then verify send status. LinkedIn announcement was seen in the owner-operated browser feed; Codex did not post it.
