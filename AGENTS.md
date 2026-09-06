# AGENTS.md

James Godwin's personal portfolio site is a Create React App site with a terminal-inspired interactive interface and route-backed content pages. Read `DOCS/PROJECT.md` for purpose, users, stack, constraints, and environment. Active status lives in `DOCS/BACKLOG.md`; resumption context lives in `DOCS/next-day.md`.

This file is the repository operating contract. Product details, commands, and implementation maps belong in the files named below. Include each operating rule once; do not copy the startup sequence under later headings.

Project-specific limits:

- Preserve the terminal-inspired visual language and the command/page architecture.
- Command content in `src/outputs/` is trusted HTML rendered through `dangerouslySetInnerHTML`. Do not inject user-generated HTML there.
- When adding or changing a route-backed page, keep routing, output modules, metadata, redirects, sitemap, and help in sync. The checklist lives in `DOCS/PROJECT.md`.
- Do not run `npm run eject` without explicit approval.
- A backlog item, suggested next step, or programme date does not authorize deployment, publication, spending, contacting people, or merging the parked `lookup` branch.

## A. Authority and placement

| File or folder | Owns |
|---|---|
| `AGENTS.md` | Repository operating rules, context loading, and maintenance workflow. |
| `CLAUDE.md` | Brief Claude entry point pointing to this contract. |
| `.cursor/rules/` | Cursor rules; `agents-contract.mdc` points to this contract. Preserve other rules and their scopes. |
| `DOCS/PROJECT.md` | Purpose, intended user, problem, success signal, stack, constraints, non-goals, and environment. |
| `DOCS/BACKLOG.md` | Current work status and priority. |
| `DOCS/next-day.md` | Resumption context and immediate next action for the current focus. |
| `DOCS/specs/` | Agreed scope, acceptance criteria, implementation slices, and feature-specific evidence. Named by topic. |
| `DOCS/runbooks/` | Repeatable procedures. Named verb-noun. |
| `DOCS/decisions/` | Product and architecture decisions. Use `YYYY-MM-DD-short-title.md`. |
| `DOCS/logs/` | Dated work history and verification evidence. Use `YYYY-MM-DD-NNN-short-topic.md`. |
| `DOCS/archive/` | Inactive material and historical context, not current authority. |

The backlog owns status; specs own substance; the handoff points to these and explains how to resume. Brief summaries and links are appropriate; competing status lists are not. Code and observed checks establish implemented behavior. A plan or old log does not prove that behavior exists today. Reconcile contradictions with current evidence rather than silently treating an outdated document as fact.

Add any new `DOCS/` root entry to this table in the same session, or place its content in an existing folder. For additional Cursor rules, record a distinct authority or scope when necessary; the folder row already covers ordinary rule files. Update this contract when operating rules, structure, or authority change, not with routine progress notes.

## B. Startup and task investigation

Read in this order at the beginning of a new session, using content already supplied in context when it is current:

1. `AGENTS.md` and other applicable scoped instructions.
2. `DOCS/PROJECT.md`.
3. `DOCS/BACKLOG.md`.
4. `DOCS/next-day.md`.
5. The smallest relevant set from `Read These First` for the user's actual task.

The four layers are orientation (`AGENTS.md`, `PROJECT.md`), current state (`BACKLOG.md`, `next-day.md`), task documents (`specs/`, `runbooks/`, `decisions/`), and history (`logs/`, `archive/`). Do not load entire folders as routine orientation.

`Read These First` normally names 1–3 documents, never more than 5, with roughly 5,000 combined words as a practical startup target. A precise section reference can narrow a large document. Do not include later phases or parallel work just in case. If the user's request differs from the previous focus, skip irrelevant handoff readings and find the context for the requested task.

These limits govern initial orientation, not the investigation needed to complete work. Independently search filenames and relevant text, follow links, and read source code, tests, configuration, specs, decisions, and runbooks needed for the authorized task. The user does not need to name each file or approve routine reads. Follow the narrowest relevant path; broaden when evidence requires it. Applicable instructions must not be skipped to satisfy a context budget.

Do not load log or archive content during routine startup. Read specific historical material when the user asks for history, when a scheduled milestone review requires it, or when active authority cannot resolve the task. Filename listing and targeted search are permitted. History informs investigation but does not supersede current authority without reconciliation.

For a missing reference, search narrowly for a moved or renamed equivalent and repair the link when the match is clear. Continue independent work. Surface unresolved gaps that affect the task; do not create a standalone log just to report a harmless broken link. If missing information prevents a correct next step, explain the dependency and ask only for what is needed.

## C. Work modes and development

Infer the mode from the user's request. Do not require a formal mode selection.

- **Exploration:** discuss possibilities and trade-offs. Do not automatically write a spec, add backlog items, accept decisions, or start implementation. Capture a clearly labelled exploratory note only when requested or useful to agreed ongoing work. A conversation may end with no file changes.
- **Planning:** when asked to plan, or when a direction is chosen, create or update a focused spec with the outcome, scope, non-goals, acceptance criteria, and material open questions. Add backlog work only when it is intended work. Split larger plans into small slices that each demonstrate useful behavior.
- **Implementation:** execute the authorized scope. Reuse an existing sufficient spec; do not force a new brief for a simple, clear change. Match verification effort to risk.

Use one primary personal skill per phase when available and relevant. If unavailable, follow the behavior described here without blocking:

| Phase | Optional skill | Behavior |
|---|---|---|
| Feature framing | `app-feature-brief` | Turn chosen work into a focused, buildable spec. |
| Work slicing | `app-vertical-slices` | Put demoable implementation slices inside the spec. |
| Implementation | `app-tdd-loop` | For regression-sensitive behavior, work through one meaningful behavior test at a time. |
| Bug diagnosis | `app-bug-diagnosis` | Establish a reproduction or observable failure, investigate its cause, then verify the fix with a regression check where practical. |
| Architecture review | `app-architecture-review` | Recommend a few ranked, contained improvements; implement only the chosen scope. |

If a bug cannot be reproduced, document the available evidence and uncertainty, investigate further, and avoid claiming an unverified fix. Tests should establish useful behavior, not merely mirror code. Simple copy or formatting changes may need inspection rather than new automated tests.

The user's current request determines the authorized work. Respect existing authorization; do not repeatedly ask for approval already given. Ask about decisions only when their answer materially affects the task and cannot be resolved from established intent or evidence. Continue independent authorized work while waiting.

## D. Backlog and completion

Use four sections: `Backlog`, `In Progress`, `Blocked`, `Done`. Each item is one line, with detail and evidence linked to a spec or log as needed. Within a section, order items by priority. The first actionable item is the default recommendation when the user asks what to work on; it does not override their request.

Move work to Done only when its agreed acceptance criteria are met and relevant checks support completion. Record what was checked and the result, or why a check was not run, in the spec or log. Distinguish tests added or changed from tests actually executed. State remaining uncertainty.

Distinguish implementation, automated verification, manual or exact-build validation, and release when relevant. Code completion does not imply deployment or validation of a distributed artifact. If release is outside the item's scope, an implementation item may be Done while a separate release item remains open. Do not mark an item Done while one of its required gates remains unmet.

Beyond roughly 20 Backlog items, move the clearly deferred tail to `DOCS/archive/someday.md`; do not archive committed near-term work merely to hit a number. Review that file at milestones. When Done exceeds 20 items or a milestone ends, append its items to `DOCS/archive/YYYY-MM-backlog.md` with the archive date, then clear only the transferred items. Preserve previous batches in the same monthly file.

Edit the backlog only when scope, priority, or status changes. Do not manufacture bootstrap work or housekeeping Done items to satisfy this workflow.

## E. Handoff and interruption checkpoints

`DOCS/next-day.md` carries the current focus. Use these sections:

- **Current Focus:** the primary outcome and a link to its authoritative work item or spec.
- **Where Work Stopped:** the last meaningful checkpoint, relevant verification state, and branch/worktree or artifact identifier when necessary to resume accurately. Include the checkpoint date when updating substantive state.
- **Next Recommended Step:** one concrete action, with an observable outcome when useful.
- **Blockers:** unresolved dependencies affecting that action; do not duplicate the options held elsewhere.
- **Parallel Threads:** at most 3 one-line references to unfinished side work likely to resume soon. Completed side work does not belong here.
- **Needs Decisions:** at most 4 lines for unresolved human decisions that block or materially change the immediate work, linked to the authoritative options. Surface only those relevant to the current request. Remove resolved decisions and preserve the outcome in a spec or ADR.
- **Read These First:** repository-relative paths, optionally with section references and a short reason, to relevant specs, runbooks, or decisions. Apply section B's startup budget. Empty is valid.

Keep the handoff around 500 words or less when practical. Preserve the primary focus when doing side work. Replace the focus narrative only when that focus advances or deliberately changes; patch affected blockers, decisions, references, or parallel work whenever those facts change. Do not keep known stale facts merely because the main implementation did not advance.

Do not rely solely on session end for persistence. After a material decision, completed slice, or new blocker, save a concise checkpoint if interruption would otherwise cause repeated or incorrect work. Update only the authoritative files affected; do not create a log per tool call or micro-step.

Before updating shared backlog or handoff files, re-read their current contents and merge relevant changes. Do not overwrite another session's updates from a stale copy. If working in separate checkouts, record enough location context to avoid confusing their state.

## F. Logs and decisions

A session is meaningful when it changes material work, a decision, a blocker, or documentation that affects future action. Exploration or read-only review without a durable outcome does not require a log. Mechanical formatting and metadata fixes need no standalone entry.

Use one dated log per meaningful session. Before assigning its three-digit sequence, list that day's filenames and choose the next free number. Create without overwriting an existing file; retry with a new number or unique topic suffix if another writer collides. Do not assume listing alone prevents concurrent collisions.

Log headings are `Summary`, `Files Touched`, `Verification`, `Decisions`, and `Follow-ups`. Verification includes checks actually run, their results, tests added or changed when relevant, and checks not run with reasons. Record intent and evidence, not copied diffs or full tool output. Update the current session's log as checkpoints accumulate; preserve completed historical entries and append an explicit correction if one is needed.

For consequential product or architecture decisions, use an ADR with `Status`, `Context`, `Decision`, and `Consequences`. Status is Proposed, Accepted, or Superseded with a link. Small local decisions can remain in their spec or log; an ADR is not required for every choice.

## G. Reconciliation and archive

At the end of meaningful work, reconcile changed backlog state, finish the session log, and update the handoff only where future-session information changed. Checkpoints already saved do not require redundant edits. Record required follow-ups without inflating the startup context.

Archive implemented specs only when they no longer define current behavior or guide maintenance. Archive retired runbooks and superseded decisions when appropriate, preserving replacement links. Update inbound references when moving files; retain a pointer at the original path if it remains useful. Never overwrite or delete historical content as routine housekeeping. Archive material is not current authority.

Use version control when present, but do not assume a commit or push is authorized. Logs summarize work; they do not replace source history or evidence of verification.
