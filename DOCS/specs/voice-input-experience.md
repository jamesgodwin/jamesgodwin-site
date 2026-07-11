# Voice Input Experience

Status: Retired on 2026-07-11 after Slice 1. Do not implement Slices 2-4. Voice was judged clunky for this portfolio experience and will be removed under [Command Discovery And Contact Consolidation](command-discovery-and-contact-consolidation.md).

## Retirement Decision

The implementation proved that voice could be made visible and confirmable, but doing so requires microphone permission, recognition state, transcript review, error handling, and browser-specific fallbacks before the visitor receives value. That interaction cost is not justified here.

Preserve this document as implementation history. The governing direction is now to remove the partial voice implementation, keep typed input dependable, and invest in discoverable commands such as `breathe` instead.

## Problem

The homepage microphone currently works invisibly:

- tapping it starts the Web Speech API through `App.js`;
- interim speech is written into the hidden terminal `command` state, not the visible homepage field;
- the homepage receives only the completed `voiceResponse`;
- a completed response is immediately classified and replaced by a reflection;
- the visitor never sees what the browser heard and cannot correct it;
- the visible microphone has no listening, stopping, ready, permission, or error state;
- unsupported browsers use an alert rather than a calm inline fallback.

This explains why voice appears not to work. The current behaviour also differs from the natural expectation created by the field: speech should visibly type into it.

## User-Facing Outcome

A visitor should be able to tap the microphone, see their words appear in the existing field as they speak, correct the transcript, and decide when to use it.

The improved experience should make these states obvious without adding noise to the initial homepage:

1. voice is available;
2. the browser is starting the microphone;
3. it is listening;
4. words are being transcribed;
5. the transcript is ready to edit or submit;
6. listening was stopped or failed;
7. typing and circle choices remain fully available.

Voice remains a progressive enhancement. A visitor must never need microphone access to complete the homepage encounter.

## Scope

- Make interim speech appear live inside the existing `What are you noticing?` field.
- Keep the final transcript in the field instead of routing immediately.
- Let the visitor edit the transcript before submission.
- Add a visible submit control when the field contains text.
- Let Enter and the visible submit control use the same existing local classifier/command path.
- Make the microphone button toggle listening on and off.
- Show quiet inline status for starting, listening, ready, and error states.
- Handle unsupported browsers, denied permission, no speech, missing audio capture, user cancellation, and generic recognition errors.
- Keep exact terminal commands such as `breathe`, `return`, and `unlearn` working after the visitor confirms the transcript.
- Stop listening when the visitor chooses a circle, explores, browses, navigates, or leaves the component.
- Preserve mobile-first layout, keyboard access, reduced motion, themes, and the approved homepage composition.
- Use one shared speech-recognition state source so the disabled terminal layer can use the same dictation behaviour if it is restored later.

## Out Of Scope

- Sending the transcript to OpenAI or another language model.
- Improving the local pressure classifier or changing its keywords.
- Automatically deciding that a transcript is correct.
- Automatically routing as soon as speech ends.
- Recording, storing, replaying, downloading, or analysing audio.
- Saving transcripts between visits or after the homepage component is left.
- Voice biometrics, speaker identification, language detection, translation, or pronunciation coaching.
- A custom speech-to-text backend.
- New dependencies, icon sets, generated assets, routes, metadata, analytics events, or server work.
- Redesigning the circles, headline, reflections, route pages, or navigation.
- Claiming that browser speech recognition is necessarily processed on-device. The site does not store the transcript, but the browser controls how transcription is provided.
- Automated acceptance of microphone permission prompts. The final real-microphone check belongs to James.

## Current Behaviour

### App-level recognition

- `src/App.js` creates a `SpeechRecognition` instance at module load.
- Recognition is continuous and returns interim results.
- `handleVoiceClick()` starts or stops recognition.
- Unsupported browsers trigger `alert()`.
- `recognition.onresult` writes interim/final speech to the hidden terminal `command` state.
- Exact final command names execute immediately.
- Other final responses become `voiceResponse` and are passed to the homepage.
- Only `onresult` and `onend` are handled; `onstart`, `onerror`, permission denial, and no-speech states have no visible treatment.

### Homepage component

- `PressureEncounter` owns the visible `visitorInput` field.
- `voiceResponse` is copied into the field only after recognition finishes.
- The same effect immediately classifies that response or executes a command.
- The microphone button always has the same icon and accessible name.
- The real submit button is visually hidden, so mouse/touch users do not get an explicit confirmation action after typing.

### Styling

- The composer already has a 31px mobile gap above it and a 56px mobile height.
- The initial 390 x 844 composition currently fits exactly without overflow.
- The microphone already uses Font Awesome, so a matching arrow icon can be added without a dependency.

## Proposed Behaviour

### 1. Interaction State Model

Use a small explicit state machine:

`unsupported | idle → starting → listening → review → submitted`

Recoverable failures enter `error` and return to `idle` or `review` through a retry/edit action.

State meanings:

- `unsupported`: no `SpeechRecognition` or `webkitSpeechRecognition` constructor exists.
- `idle`: voice is available but inactive.
- `starting`: the visitor tapped the mic and the browser has not fired `onstart` yet.
- `listening`: recognition started and may be returning interim words.
- `review`: recognition ended with a transcript; the transcript remains editable.
- `error`: recognition could not produce a usable transcript or permission/audio capture failed.
- `submitted`: not a persistent UI state; the existing form handler classifies or executes the confirmed text.

Do not use timeouts to guess when speech is complete. Use recognition events.

### 2. Visible Dictation

- On every `onresult`, combine final and interim speech into one visible transcript.
- Synchronise that transcript into `visitorInput` while recognition is active.
- Do not invoke `classifyPressure()` or `onNavigate()` from the transcript effect.
- When recognition ends with text, enter `review`, keep the transcript in the input, and focus the input so the visitor can correct it.
- When recognition ends without text, show the appropriate error and leave typing available.
- Manual typing after dictation updates the same `visitorInput` value.
- Starting a new dictation may replace the existing transcript only after the visitor deliberately taps the microphone again. Do not silently erase text on mount or rerender.

### 3. Confirmation

- Add a visible submit button inside the composer whenever `visitorInput.trim()` is non-empty.
- Use the Font Awesome right-arrow icon already available in the installed package.
- Accessible name: `Use this response`.
- Enter and the visible arrow must call the existing `handleSubmit()` path.
- A final transcript must not route until one of those confirmation actions occurs.
- Exact commands follow the same rule: saying `breathe` fills the field; confirming it launches `breathe`.

### 4. Microphone Control

Idle state:

- Icon remains the current microphone.
- Accessible name: `Speak what you are noticing`.
- `aria-pressed="false"`.

Starting/listening state:

- Tapping the microphone stops recognition.
- Accessible name: `Stop listening`.
- `aria-pressed="true"`.
- Composer receives an active class and a restrained focus/outline treatment.
- A subtle pulse is permitted, but must stop under `prefers-reduced-motion`.

Review/error state:

- Microphone becomes `Speak again`.
- Starting again replaces the prior transcript only after the new recognition session actually starts.
- The visible transcript remains until replacement starts, submission occurs, or the visitor clears it manually.

Unsupported state:

- Keep the input and circle controls fully usable.
- Disable or de-emphasise the microphone with accessible name `Voice input unavailable`.
- Do not show an alert.
- A short visible fallback may appear when the control receives focus: `Voice input is not available in this browser. You can still type or choose a circle.`

### 5. Status Language

Use the existing empty space immediately above the composer for a small monospaced status. It should be absolutely positioned relative to the composer so the initial layout does not move.

Required messages:

| State/event | Visible status |
|---|---|
| `starting` | `STARTING MICROPHONE…` |
| `listening` | `LISTENING — TAP THE MIC TO STOP` |
| final transcript | `READY — EDIT OR PRESS ENTER` |
| `no-speech` | `I DIDN'T CATCH THAT — TRY AGAIN OR TYPE` |
| `not-allowed` / `service-not-allowed` | `MICROPHONE ACCESS WAS NOT ALLOWED — TYPE INSTEAD` |
| `audio-capture` | `NO MICROPHONE WAS AVAILABLE — TYPE INSTEAD` |
| generic error | `VOICE INPUT STOPPED — TRY AGAIN OR TYPE` |

The status region should use `aria-live="polite"` and `aria-atomic="true"`. Do not place `aria-live` on the entire page or composer.

Messages may wrap on narrow screens. Error text may temporarily add a small amount of page height, but the idle 390 x 844 composition must remain unchanged.

### 6. Cancellation And Navigation

- Tapping the active microphone calls `recognition.stop()` and preserves any transcript already captured.
- Pressing Escape while listening stops recognition and preserves captured text.
- Selecting `In me`, `In a team`, `In the work`, or `I am only exploring` stops/cancels recognition before showing a reflection.
- `Browse without answering`, route navigation, and component unmount stop recognition and detach all event handlers.
- A late `onresult` or `onend` event must not replace content after the visitor has navigated or selected another path.

### 7. Error Mapping

Handle these Web Speech API error codes explicitly:

- `not-allowed`
- `service-not-allowed`
- `no-speech`
- `audio-capture`
- `aborted`
- any unknown value

Treat a user-triggered `aborted` event as cancellation, not failure. Return to `review` when text exists or `idle` when it does not.

Do not retry automatically after permission denial or an error.

### 8. Privacy And Data Handling

- The site must not persist voice transcripts in local storage, cookies, analytics, logs, URLs, or network requests.
- Do not include transcript contents in Google Analytics events or console logging.
- The local classifier continues to run only after confirmation.
- If privacy copy is shown, use accurate wording: `Voice transcription is handled by your browser. This site does not save what you say.`
- Do not claim transcription is on-device or that audio never leaves the device.

## Interface And Seams

### New hook

Create `src/hooks/useSpeechInput.js`.

It should own:

- recognition constructor detection;
- one recognition instance;
- event handler attachment and cleanup;
- `supported`;
- `status`;
- visible `transcript`;
- `errorCode` and mapped `errorMessage`;
- `start()`;
- `stop()`;
- `reset()` or `clearError()`;
- unmount cleanup.

Keep routing and pressure classification out of the hook. It produces text and state only.

Use the browser/user language when available rather than hard-coding a dialect. Keep `interimResults = true`. A single utterance is sufficient for this interaction; do not require continuous listening once a final result is received.

### App integration

`App.js` should instantiate the hook once and pass the voice controller state/actions into `PressureEncounter`.

Replace the current module-level recognition wiring, `voiceResponse` auto-routing effect, and unsupported-browser alert. The existing disabled terminal microphone may use the same controller and should also behave as confirmable dictation if the terminal UI is restored.

Do not change command definitions, routes, outputs, metadata, theme logic, or background transitions.

### PressureEncounter integration

`PressureEncounter` remains the owner of `visitorInput`, `handleSubmit()`, `classifyPressure()`, and reflection selection.

Replace the current `voiceResponse` auto-routing effect with transcript synchronisation only.

Add small helper handlers so any path selection cancels active recognition before setting `selectedPath`.

Keep the current typed and circle behaviours unchanged.

### CSS

Add only state classes under the existing composer namespace:

- `.pressure-encounter__composer--starting`
- `.pressure-encounter__composer--listening`
- `.pressure-encounter__voice-status`
- `.pressure-encounter__voice-button`
- `.pressure-encounter__voice-button--active`
- `.pressure-encounter__submit-button`

Do not change the initial composer size, rings, headline, prompt, browse link, or mobile coordinates.

### Files expected to be created

- `src/hooks/useSpeechInput.js`
- `src/hooks/useSpeechInput.test.js` or an equivalent integration harness using the existing test stack

### Files expected to be modified

- `src/App.js`
- `src/components/PressureEncounter.js`
- `src/components/PressureEncounter.test.js`
- `src/NewSite.css`

### Protected files

- `public/images/pressure-rings.png`
- all files under `src/outputs/`
- `src/siteMetadata.js`
- `public/_redirects`
- `public/sitemap.xml`
- `package.json`
- `DOCS/specs/inner-page-ui-alignment.md`

If implementation appears to require a protected file, stop and explain why.

## Implementation Notes

### Execution Rules For A Cheaper Model

1. Read the normal four startup files and this spec only.
2. Implement one vertical slice at a time using `app-tdd-loop`.
3. Start with a fake recognition implementation in tests; do not request microphone access during automated work.
4. Do not browse the web, use ImageGen, install a package, or start the local server during Slices 1–3.
5. Do not change the pressure classifier, reflection copy, ring artwork, route pages, or inner-page spec.
6. Preserve the dirty worktree and all existing homepage work.
7. Run the focused tests after each slice and the full suite/build only after Slice 1 and Slice 4.
8. Stop after the current slice is green and update the spec status, backlog, session log, and next-day handoff.
9. Do not claim real microphone verification from fake recognition tests.
10. James performs the one real microphone/permission check manually after the automated implementation is complete.

### Suggested Agent Prompt

> Work in `/Users/nitro/code/jamesgodwin-site`. Read `AGENTS.md`, `DOCS/PROJECT.md`, `DOCS/BACKLOG.md`, `DOCS/next-day.md`, and `DOCS/specs/voice-input-experience.md` in that order. Implement only the first Pending slice using `app-tdd-loop`. Use a fake SpeechRecognition implementation; do not use a browser or request microphone access. Preserve all existing work and protected files. Run the focused tests named by the slice, update the repo handoff documents, and stop when that slice is green.

## Testing Plan

### Fake recognition seam

Create a small fake `SpeechRecognition` implementation that can trigger:

- `onstart`;
- interim `onresult`;
- final `onresult`;
- `onend`;
- `onerror` with named error codes;
- `start()` and `stop()` call tracking.

Use the existing React Testing Library stack. Do not install a hook-test package.

### Required behaviour tests

- Tapping the microphone enters starting/listening state and changes its accessible name to `Stop listening`.
- Interim speech appears in the visible textbox.
- A final transcript remains in the textbox and does not call `onNavigate`.
- Editing the transcript and pressing Enter follows the existing classifier.
- Clicking `Use this response` follows the same path as Enter.
- Saying an exact terminal command does not execute until confirmation.
- Tapping the active microphone calls `stop()` and retains captured text.
- Escape stops listening.
- Starting again deliberately replaces the old transcript only once the new recognition session starts.
- `no-speech`, permission denial, audio-capture, generic, and aborted events map to the correct visible state.
- Unsupported recognition never blocks typing or circle choices and never calls `alert()`.
- Choosing a circle or browse path while listening stops recognition and ignores late results.
- Unmount stops recognition and removes handlers.
- Status updates use a focused polite live region.
- Existing nine homepage interaction tests remain green, adjusted only where the old auto-routing expectation is deliberately replaced.

### Focused commands

```sh
CI=true npm test -- --watchAll=false src/hooks/useSpeechInput.test.js
CI=true npm test -- --watchAll=false src/components/PressureEncounter.test.js
```

If the implementation chooses one integration test file instead of a separate hook test, document the reason and keep the same behaviour coverage.

### Full verification

After Slice 1 and Slice 4:

```sh
CI=true npm test -- --watchAll=false
npm run build
git diff --check
```

### Visual QA without microphone permission

Use at most one final browser session to inspect idle, listening, review, and error visual states through a deterministic development/test seam. Do not accept a real microphone permission prompt on James's behalf.

At 390 x 844 confirm:

- the idle screen remains visually unchanged and has no overflow;
- listening status uses the existing gap above the composer;
- interim text is readable;
- arrow and microphone controls both retain 44px touch targets;
- review/error states do not cover the browse link;
- reduced motion removes the listening pulse;
- focus remains visible.

At desktop width confirm that the status and additional control do not disturb the two-column composition.

### Manual real-microphone check by James

After automated work is complete, James performs one short check in a supported browser:

1. tap the microphone;
2. grant permission if he chooses;
3. say `Our approvals keep getting lost in WhatsApp`;
4. confirm the words appear live in the field;
5. stop speaking and edit one word;
6. press Enter;
7. confirm the work reflection appears.

If the browser does not support voice, the inline fallback is the expected result and typing remains the dependable path.

## Implementation Slices

1. Visible dictation reaches the existing field
   - Status: Done.
   - Outcome: A fake recognition session moves through starting/listening, and interim/final words appear in the visible field without routing.
   - Test seam: Add the fake recognition harness and tests for supported detection, start/listen status, interim transcript, final review state, no automatic navigation, and cleanup.
   - Blocked by: Nothing.
   - Notes: Created `useSpeechInput.js` and fake recognition tests; replaced the module-level App recognition wiring with the hook; synced interim/final transcript into `PressureEncounter` without routing; kept confirmation, retry, error mapping, and full control polish for later slices. Focused tests, full suite, build, and `git diff --check` pass.
2. Confirmation and retry make the transcript trustworthy
   - Status: Pending.
   - Outcome: A visitor can edit voice text, submit it with Enter or a visible arrow, stop listening, press Escape, or speak again without losing text unexpectedly.
   - Test seam: Extend `PressureEncounter.test.js` for confirm-before-route, exact commands, visible submit, stop, Escape, retry, and circle/browse cancellation.
   - Blocked by: Slice 1.
   - Notes: Reuse the existing classifier and Font Awesome package. Do not change reflection outcomes.
3. Failure states preserve the dependable paths
   - Status: Pending.
   - Outcome: Unsupported, denied, no-speech, unavailable-microphone, aborted, and generic errors receive accurate inline feedback while typing and circle choices continue to work.
   - Test seam: Trigger each fake error code and assert the mapped message, live region, microphone state, and continued typed/circle behaviour.
   - Blocked by: Slice 1.
   - Notes: Remove alert usage. Do not retry automatically or log transcript contents.
4. Responsive and accessible completion
   - Status: Pending.
   - Outcome: Idle remains faithful to the approved homepage, transient voice states are clear on mobile/desktop, reduced motion works, and James has an exact manual microphone check.
   - Test seam: Full test suite, build, `git diff --check`, one bounded browser visual session without real microphone permission, and a documented manual check for James.
   - Blocked by: Slices 1–3.
   - Notes: Fix only voice-related P0/P1/P2 issues. Do not reopen the homepage or inner-page design.

## Definition Of Done

- Speech visibly types into the existing homepage field.
- No final transcript routes automatically.
- The visitor can edit and explicitly confirm speech.
- Enter and the visible arrow share one submission path.
- Exact terminal commands still work after confirmation.
- Listening, ready, unsupported, and failure states are visible and accessible.
- Typed input, circles, explore, browse, and navigation remain dependable without voice.
- Recognition stops and cleans up on cancellation, navigation, selection, and unmount.
- No transcript is persisted or logged by the site.
- Initial 390 x 844 homepage composition remains unchanged.
- Automated tests, production build, and `git diff --check` pass.
- Browser visual QA is performed once without real permission.
- James receives the manual real-microphone checklist.

## Open Questions

None block implementation. The core decisions are fixed:

- voice behaves like visible dictation;
- the transcript is editable;
- confirmation is required;
- no model interprets speech;
- no transcript is stored;
- real microphone permission/testing remains under James's control.
