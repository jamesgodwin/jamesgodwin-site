# Publish essays and Notes

Agreed with James on 22 October 2026. The website is the main home for reading and browsing. HEY handles subscriptions and email distribution. LinkedIn introduces the piece and points readers to the website.

## Sequence and authority

Flow clarified by James on 27 October 2026:

1. Write and review the article in James’s voice; prepare artwork and a local website preview.
2. After James approves, publish and verify the article on jamesgodwin.me.
3. Republish and verify the complete article on HEY World.
4. Explicitly remind James to open the HEY post and click **Email to subscribers**. James performs this step; await his confirmation before treating subscriber distribution as complete.
5. Prepare a LinkedIn summary with the canonical website URL at the bottom, and provide the image. James loads and publishes it on LinkedIn unless he explicitly requests assistance.
6. Once James confirms the LinkedIn post is done, use the HEY CLI to move this exact World post from Imbox to **Paper Trail**, then verify it has left Imbox. This final filing step is part of the agreed flow and needs no repeated permission.

This runbook records the process, not standing permission to publish every draft. Use the current request to establish publication, push and email authority. “Publish on the site and email HEY subscribers” authorises those two channels for the agreed piece. “Create a LinkedIn post” means prepare a draft; James posts it manually unless he explicitly asks Codex to publish it. Existing authority need not be requested again. Documenting this workflow does not resume the paused Source writing queue.

## 1. Website first

Prepare the approved text and artwork in `src/content/essays/` and `src/assets/writing/`, or `src/content/notes/` and `src/assets/notes/`. Keep work in draft until publication is authorised. Preserve James’s first-person voice and British English. Use the existing design system and retain the shared subscription invitation.

The [import procedure](import-essays.md) applies to historical LinkedIn imports. New writing follows this website-first sequence; it does not need to be published on LinkedIn first.

Essays now support `origin: website` for new originals, omitting an external source URL and LinkedIn attribution. Existing essays default to `linkedin` and retain their required source URL and attribution. Use a genuine local article identifier. **Remaining implementation gap:** Notes still require imported provenance and label their source as LinkedIn. Extend that support before the first website-original Note; do not fabricate a LinkedIn URL. [First original essay evidence](../logs/2026-10-22-002-kept-step-publication.md).

Preview the archive, reading page, artwork and subscription link. Follow the [Cloudflare release procedure](deploy-cloudflare-pages.md), including the clean candidate build and relevant checks. With publication authority, commit/push and verify the successful deployment for the exact revision. Confirm the public article, canonical/social metadata, artwork, archive discovery and sitemap before proceeding to HEY.

## 2. HEY publication and subscriber email

Use the [HEY skill](/Users/nitro/.agents/skills/hey/SKILL.md). Reuse stored authentication. Select `jrsg@hey.com` as sender and `world@hey.com` as the sole recipient, with no CC/BCC.

Check the public HEY index and existing publication record for a duplicate before composing. Prepare a CLI draft containing the complete approved article body, its cover image with an absolute public URL, and a footer linking to the website article with its original publication date. Read the draft back to verify sender, recipient, title, body, image and link, then send under the existing publication authority.

A send attempt is not proof of publication. During the archive backfill, HEY CLI 1.7.0 sometimes returned HTTP 406 or empty output after publishing successfully. Inspect the public index and article before retrying. Record the actual HEY URL; do not guess it. Check the complete text, loaded image, footer and source link.

Publishing a HEY World post and emailing subscribers are separate actions. For each new article in this flow, remind James explicitly to click “Email to subscribers” in the HEY interface. James owns the click. Record his confirmation as owner-reported completion; distinguish it from independently verified send status. The tested CLI has no subscriber-send command. If delivery cannot be verified, record it as pending rather than sent. Archive backfills stay quiet unless James requests distribution.

## 3. LinkedIn announcement draft

After both public pages are verified and James confirms the subscriber-email step, create a short post in James’s voice. Introduce one concrete idea or question from the piece, give enough substance to stand alone, then link directly to its canonical jamesgodwin.me article. Link readers to the website rather than the HEY copy. The website provides the subscription path.

Provide the complete draft and proposed image for James to review and publish. Do not automatically create a native LinkedIn article, post the announcement or contact anyone.

## 4. File the HEY post after LinkedIn

After James confirms LinkedIn publication, find the exact HEY World posting in Imbox by title and its `/world/posts/<id>` app URL. Use its box-item ID with `hey move <id> --to <Paper Trail box ID> --json`; resolve the destination with `hey box list`. Do not confuse Paper Trail with The Feed, change sender-wide routing, or delete the post. Check the move result and absence from Imbox. Record filing completion alongside the publication evidence.

## Record completion

In the existing piece-specific spec or current session log, record the title/type, original date, website URL and deployed revision, HEY URL, subscriber email state (not requested, pending or verified sent), LinkedIn draft location/publication state, and final HEY Paper Trail filing state. Include verification evidence and unresolved gaps. Update backlog/handoff only when status or resumption context changes. Do not create a second publication tracker.

[22 October backfill and release evidence](../logs/2026-10-22-001-hey-world-test.md).
