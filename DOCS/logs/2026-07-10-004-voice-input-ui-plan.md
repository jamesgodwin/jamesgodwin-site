# Session Log - 2026-07-10-004

## Summary

Created a complete implementation plan for replacing the homepage's invisible voice behaviour with visible, editable dictation that requires confirmation before routing.

## Files Touched

- `DOCS/specs/voice-input-experience.md`
- `DOCS/BACKLOG.md`
- `DOCS/next-day.md`
- `DOCS/logs/2026-07-10-004-voice-input-ui-plan.md`

## Tests

No code was changed and no automated tests or browser sessions were run. Documentation consistency and whitespace were checked with `git diff --check` at session end.

## Decisions

- Speech must visibly populate the existing field as it is recognised.
- A final transcript remains editable and never routes automatically.
- Enter and a visible arrow use the existing local command/classifier path.
- Starting, listening, ready, unsupported, and error states receive quiet inline feedback.
- Typed input and circle paths remain the dependable fallback.
- Recognition state moves into a reusable hook; routing remains outside it.
- No transcript or audio is stored, logged, analysed, or sent to an AI model by the site.
- Automated tests use fake recognition; browser visual QA is bounded to one session and real microphone permission remains James's manual check.
- Voice work is now ahead of inner-page alignment in the backlog because it affects the homepage's primary interaction.

## Follow-ups

- Implement Slice 1 from `DOCS/specs/voice-input-experience.md` with `app-tdd-loop`.
- Stop when fake interim/final speech appears visibly without navigation and focused/full checks pass.
- Continue one slice at a time, then give James the manual microphone checklist.
