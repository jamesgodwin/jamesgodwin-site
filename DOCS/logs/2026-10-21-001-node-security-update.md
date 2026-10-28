# Node security update - 21 October 2026

## Summary

Applied the authorised Node security runtime settings update. Guy is excluded and untouched. Existing unrelated changes were preserved.

## Files Touched

`.nvmrc`, `package.json`, `package-lock.json`, `DOCS/PROJECT.md`, deployment runbook.

## Verification

Build and all 19 Vitest tests pass on Node 22.23.4. No tests added for version metadata changes. Manifest and lockfile root engines match where present.

## Decisions

Use patched Node 22.23.4 for existing Node 22 build paths and patched 24.22.1 for GratefulFor. Mac nvm default is 22.23.4. Homebrew-prefix commands use official nvm 24.22.1 while Homebrew core still offers unpatched 26.12.0; its keg is unlinked. Operational record: `/Users/nitro/.local/state/node-security/2026-10-21.json`. No commit, push or production deployment performed.

## Follow-ups

Cloudflare build NODE_VERSION still needs live verification; no deployment made.

## Cloudflare follow-up - 21 October 2026

Cloudflare production and preview NODE_VERSION changed from 22.22.1 to 22.23.4, saved and verified after reload. Current successful deployment c30331b8 was built on 22.22.1 and bundles no Functions. No new deployment was triggered. Screenshot evidence is in the shared operational record.

## Publication checkpoint - 21 October 2026

Published Node 22.23.4 metadata only as `2b240eea1c8b8c66811a413342bdadbb9a01e949` on origin/main after clean candidate validation. The commit contains only `.nvmrc`, `package.json`, and `package-lock.json`. Cloudflare has not queued the new revision; no GitHub build checks exist for it yet. Automatic production deployments are enabled. GitHub integration management requires browser sign-in; user input was requested. Existing production remains live. No new hosted patch-version verification is claimed. Operational status: `/Users/nitro/.local/state/node-security/cloudflare-release/release-status.json`.

## Installer support checkpoint

The GitHub webhook incident explains delayed dispatch. The initial Node pin build eventually ran and failed before dependency installation because node-build lacks the patched release definition. Published installer support as `b71aac920ad3ba41071e1d257502813d659f5b6a` using official Node download URLs and SHA-256 checksums. Custom definitions installed and executed both patched versions successfully in local installer tests. Cloudflare NODE_BUILD_DEFINITIONS is configured for production and preview (Wrangler for AI Ching). New hosted deployment verification is pending; no sign-in or permission change is needed.

## Hosted build verified

Cloudflare production deployment `1ac00a99-b417-4cb7-aeb5-c9124e9c2870` succeeded for installer-fix commit `b71aac920ad3ba41071e1d257502813d659f5b6a`. The hosted build log confirms installation of `node-v22.23.4-linux-x64` before npm/build. Production alias is attached. No claim about a persistent upstream Node server is implied: this is the build runtime; Pages Functions use Cloudflare Workers. Final live-route verification follows.

## Production verification complete

Completed authorised publication. Production commit `b71aac920ad3ba41071e1d257502813d659f5b6a` deployed successfully as `1ac00a99-b417-4cb7-aeb5-c9124e9c2870`. Cloudflare's hosted log confirms Node `22.23.4` was installed before dependency installation and the build. All 22 final live routes across the three sites return HTTP 200; TapScribe's appcast matches the clean validated build. Production and preview version/installer settings are saved. GitHub webhook degradation caused dispatch delays; no account reconnection was required. Guy was not touched. Evidence: `/Users/nitro/.local/state/node-security/cloudflare-release/release-status.json`. The Node version is the build runtime; Pages Functions use Cloudflare Workers.
