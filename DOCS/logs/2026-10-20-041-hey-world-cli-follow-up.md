# HEY World CLI and subscription follow-up

## Summary

20 October 2026: James reiterated that selected website articles/Notes should also reach his personal HEY account's publishing/newsletter channel. He identified the installed HEY CLI as the potential publishing route and wants a link from Essays so readers can subscribe through HEY. This refines the existing [HEY backlog item](2026-10-20-033-hey-newsletter-backlog.md), rather than creating a separate newsletter proposal. Work remains queued; this turn captures and investigates the route without account mutation or publication.

## Files Touched

Backlog, next-day parallel-thread reference and this follow-up. No website content, HEY account or Source files changed.

## Verification

- Read the HEY skill and ran only local `hey --help`, `hey compose --help`, `hey version`. Installed CLI is 1.7.0. It exposes compose/draft, sender selection, Markdown/raw HTML and attachment options, with no dedicated HEY World command in its top-level help. No authentication or account content was accessed.
- Official [HEY World documentation](https://world.hey.com/) and [email-the-web page](https://www.hey.com/features/email-the-web/) state that sending from a personal HEY for You account to `world@hey.com` publishes the message. It must be the sole To recipient, with no CC/BCC. The public HEY World page provides email subscription and RSS.
- Combining the documented email-publishing mechanism with the CLI's compose support is a plausible route, not an end-to-end test. Correct personal sender/account, original image rendering, exact public/subscription URL, existing subscriber behaviour and publication response remain unverified. Do not guess the public URL or treat a saved draft as published.
- No application changes; `git diff --check` is sufficient for this documentation capture. No tests, build, push or deployment required.

## Decisions

Keep jamesgodwin.me as the canonical writing home. Republish selected essays/Notes via HEY World with links back to the website. Start with one reviewed piece to establish the workflow and image formatting before a batch. When implementation resumes, prepare a draft using the selected personal HEY sender, review it, then publish only under the applicable user authority. No automatic feed or bulk subscriber mail is implied by this reminder.

Once the actual public subscription destination is verified, add a clear Subscribe link to Essays; check how it fits beside Notes and the existing Kit integration. Full copies versus linked introductions, which pieces to backfill and subscriber notification handling remain decisions for that implementation. Public website copy/link changes deploy normally; documentation-only commits use `[CF-Pages-Skip]`.

## Follow-ups

Verify the personal HEY account/sender and existing World page, choose one piece, prove CLI-to-published-page/image behaviour, verify subscription, then implement the Essays subscription link and record a repeatable publishing procedure.
