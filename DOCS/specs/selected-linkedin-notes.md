# Selected LinkedIn notes

## Problem and outcome

James approved the five recommended posts from the [shortlist](linkedin-post-shortlist.md) on 20 October 2026. Bring them into the local website with a light voice-preserving edit and their original artwork. A visitor should understand that these are short notes alongside the existing long-form essays.

## Scope and decisions

- Exactly five notes: Help the Builder Get It Over the Line; The Transcript Worked. The Workflow Did Not.; Done Is Not a Checklist State; AI Frontends Can Look Finished While Still Being Inaccessible; What Tai Chi Taught Me About Reactivity.
- `/notes` and `/notes/<slug>` supply a distinct archive and reading pages. Essays keeps its existing navigation label, routes, 15-item collection and 12-per-page pagination. Add a small Essays/Notes browse navigation on both archives and a Notes link in the homepage writing section and footer.
- Reuse the Case shelf typography, cards, actions, spacing and prose. Portrait originals remain whole, including their overlay text, with responsive WebP delivery. Reading pages pair the cover with the title rather than enlarging a portrait across the entire page.
- Preserve original publication dates and original LinkedIn links. Label each reading page as an adaptation. Record the website revision date separately in metadata. Keep original source files untouched.
- Edit from the already published text and James's source-first voice guide. Remove repetition, feed calls to action and relative-time/version dependencies. Keep the TapScribe incident clearly an early test; make the Tai Chi observation personal rather than universal physiology. Add no invented client evidence or private operating-template contents.
- No other shortlisted posts, new newsletter integration, generic feed importer, analytics changes or global navigation rename. No commit, push or production deployment in this implementation request.

## Acceptance and slices

1. From the homepage or essay archive, a visitor can reach a clearly titled Notes archive containing exactly the five selected notes, each labelled Read note. Existing essay pagination still covers exactly 15 essays.
2. Opening each note presents its edited body, whole original artwork, original date, attribution and source link. A visitor can return to Notes or browse Essays. Draft notes do not render or enter discovery output.
3. Note URLs have canonical/social metadata, BlogPosting structured data, sitemap and llms.txt entries. Served reading and card images are responsive WebP; retained originals match the reviewed JPEGs byte for byte.
4. Desktop browser checks cover archive navigation, reading and source links, loaded images and visible layout. Inspect a narrow view where supported; record any browser-control limitation explicitly.

Implement a built-output behavior check first, then content and presentation, then run design/build, Notes integration, existing essay and route suites. Browser-review the built result. Complete documentation with actual evidence and remaining release status.

## Verification

Implemented locally on 20 October 2026. Final build/design guard and all 40 automated tests pass. All five original image hashes match; reading-page WebP defaults are 38–82 KB. Desktop archive/reading navigation, all five loaded covers, source hrefs and no horizontal overflow were verified. The archive and builder note were visually reviewed in a 390px iframe; native phone testing and cross-frame programmatic measurement are not claimed. [Full evidence](../logs/2026-10-20-035-selected-linkedin-notes.md).

The edited pages are ready for James’s local review at `http://127.0.0.1:4173/notes`. No commit, push or production deployment performed.

## Accepted expansion — 20 October 2026

James approved the Notes treatment and asked for the best further posts to be cherry-picked and brought across. Seven more are selected, bringing the local collection to twelve. The original five remain intact. This supersedes the five-only limit above for the explicit additions below. Other format, image, source, draft and release boundaries remain unchanged.

| Added piece | Why it earns a place |
|---|---|
| The Recording Survived. That Was the Test. | A concrete missing-model recovery incident; distinct from transcript export clutter. |
| The Pace Is Part of the Product | Firsthand AI Ching interaction decisions; gives the product philosophy a real setting. |
| An Agent Completing a Form Is Not Proof It Understood the User | A real site-journey mapping exercise reveals intent, permission and recovery questions. |
| Interest Is a Signal. It Is Not Yet Demand. | An actual recorder demand test with bounded numbers and an honest validation limit. |
| The Workday Was Still in My Shoulders | A lived observation linking practice and the way work is carried. |
| A Welcome Interruption | A specific personal scene and original desk-spider photographs; warmth without forcing a commercial lesson. |
| Holy Shit This Is Fun | Firsthand pleasure in a keyboard-based tool; retains James’s blunt title and original terminal screenshot. |

Selection favours grounded experience, distinctness, voice and a verified published original, rather than adding every previously shortlisted item. The design-system piece duplicates an existing essay; repeated abstract finish-line/leadership variations add little. LI-00109 is explicitly held and unpublished and is excluded. The newer return-to-project template post substantially overlaps the existing portability essay and Done note.

Confirm each addition’s live body/author and original image, retain its original date and source URL, lightly edit relative time/feed phrasing, and show the new twelve-card archive through the same Notes components. Use the existing built-output check for all twelve and verify the seven image hashes, draft exclusion, discovery and essay-count preservation. The seven additions are an editorial selection, not a claim of the highest measured LinkedIn engagement.

Expansion implemented locally. Build/design guard and 33 relevant automated tests pass (1 Notes, 5 essay/import, 8 route/SEO, 19 Vitest). All twelve source image hashes match, every default Notes card/reading image is below 150,000 bytes (largest 139,048), and the seven new reading pages plus twelve-card archive were reviewed in the browser. Two textured covers use per-note WebP quality overrides (55 and 25), leaving originals unchanged; the lower-quality illustration was inspected at its served reading size. [Evidence](../logs/2026-10-20-036-notes-editorial-expansion.md). No GitHub push or deployment was performed.
