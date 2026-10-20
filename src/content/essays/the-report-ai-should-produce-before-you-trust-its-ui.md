---
title: "The Report AI Should Produce Before You Trust Its UI"
date: "2026-07-28"
category: "Design & development"
lead: "A convincing screen needs an honest record of components, gaps and assumptions."
cover: "../../assets/writing/the-report-ai-should-produce-before-you-trust-its-ui-cover.png"
coverAlt: "Original illustration of a figure carrying papers, with the words Generated UI needs a coverage trail."
sourceUrl: "https://www.linkedin.com/pulse/report-ai-should-produce-before-you-trust-its-ui-james-godwin-npapf/"
articleId: "ARTICLE-2026-07-28-01"
draft: false
sourceHash: "c11a5a9fcbb0092ab09cb4478d14b35cc600c5aeb10a03fe6f02ecf934d63936"
importedBodyHash: "30ae0d5398dfd39df4c9b340df1cd2f688f5df1e2b905b218b2cf611505d20a0"
---

An AI-generated screen can look remarkably convincing before anyone has established whether it belongs in the product.

That is the uncomfortable part of the current design-to-code moment. A plausible interface is no longer expensive to produce. An agent can generate the right kind of layout, familiar controls, a sensible information hierarchy, and enough visual polish to make a team feel that a feature is close. But resemblance is not evidence. It does not tell us whether the screen uses the real component system, whether important states have been handled, or whether the new work has quietly created another exception for a team to maintain.

I ran into this while building a reusable package to help an agent work with an existing design system. The early results looked encouraging. The agent could make screens that appeared close to the product, and each round of guidance made them look more familiar. Yet the more closely I inspected the work, the clearer the limitation became. A screen can inherit the surface of a design system while missing the system underneath it.

The problem is not limited to colour tokens or spacing. A mature component is usually carrying far more than its visible shape. It has states, interaction logic, accessibility expectations, responsive behaviour, validation patterns, data assumptions, exceptions that have already been learned the hard way, and a history of why the team chose it. An agent does not reliably discover all of that from a screenshot or a broad set of documentation. When the evidence is incomplete, it fills the gaps with something plausible.

That is why I now think every agent-generated interface needs a report before it earns trust.

Not a vague confidence score. Not a declaration that the screen is “on brand”. A short, inspectable account of what the agent actually used, what it could not verify, and where it had to make a choice outside the established system.

In the plugin I was building, that meant adding a coverage loop around generation. For each screen, the agent should be able to identify which system components it used, which patterns were only partially supported, what it built outside the known system, and what remained uncertain. The report is deliberately less glamorous than the preview. It is also far more useful when the preview is wrong.

Consider the difference between these two outcomes. In the first, a team receives a polished form and starts reviewing visual detail. In the second, the team receives the same form with a small note, the input and button came from the approved system, the error state has no confirmed component reference, the mobile interaction was inferred rather than tested, and the empty state was created as a new pattern. The second result creates a much better conversation. It gives product, design, engineering, and accessibility reviewers something concrete to decide.

The report turns hidden uncertainty into visible work.

That matters because AI accelerates the wrong kind of confidence as easily as it accelerates delivery. When a draft takes minutes instead of days, it becomes tempting to treat review as a light polish step. Teams start asking whether the screen looks right rather than whether the decision is supported. Small unverified choices can then travel into the codebase, into Figma, into a later feature, and eventually into the design system itself. What began as a useful experiment becomes unowned drift.

A coverage report interrupts that pattern without making generation slow or bureaucratic. It does not require an agent to know everything before it begins. It simply asks the agent to distinguish between what is canonical, what is partial, what is missing, what is deprecated, and what it has proposed. That distinction gives the team a way to use speed without confusing speed for certainty.

It also changes the role of the design system. A system is not only a library of reusable parts. In an AI-assisted workflow it becomes a contract about what can be generated safely. The contract needs enough structure for an agent to retrieve the right component, understand when it applies, recognise the states it must preserve, and stop when it reaches a gap. A good agent should be able to say, “I do not have enough evidence to make this canonical,” rather than quietly inventing the missing piece.

There is a valuable secondary effect here. The first coverage reports often reveal gaps that the human team has been carrying informally for years. A component exists but its variants are not written down. A product pattern is used repeatedly but not owned by the system. A familiar interaction depends on a particular runtime behaviour that no Figma library can explain. These are not failures of the people who made the product. They are normal consequences of a system growing through delivery. The agent merely makes the hidden assumptions harder to ignore.

That is useful information. It tells a team where documentation should become clearer, where a component deserves proper ownership, and where a proposed pattern should remain in an extension lane until it has been tested. The report can become the bridge between fast generation and steady governance.

This is especially important when AI is introduced into a busy product team. Under delivery pressure, a convincing prototype can shorten conversations in the wrong way. People may feel they have already seen the answer, so they skip the slower questions about edge cases, accessibility, operational ownership, or future maintenance. The body notices that pressure before the plan does. Pace speeds up, attention narrows, and a screen that needs inquiry gets treated as a decision.

The report creates a little more room in that moment. It asks the team to see the boundary between evidence and inference. That is not a refusal to move quickly. It is a way of moving quickly without asking someone to repair the consequences later.

The practical version can stay simple. Before an agent-generated UI moves forward, ask for five things:

- the approved components it used
- the patterns it inferred
- the gaps it found
- the new components it proposed
- and the checks still required in the real product.

A team does not need a perfect machine-readable design system to begin. It needs an honest record of where the system is strong and where the agent is guessing.

The question is no longer only whether AI can generate a convincing interface. It clearly can.

The more useful question is whether the interface can explain itself well enough for a team to trust the next decision.
