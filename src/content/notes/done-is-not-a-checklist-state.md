---
title: "Done Is Not a Checklist State"
date: "2026-09-28"
updated: "2026-10-20"
category: "Working with AI"
lead: "A working build and a completed task list can still leave a gap between what was agreed and what the product does."
cover: "../../assets/notes/done-is-not-a-checklist-state.jpg"
coverAlt: "An illustrated person reviewing a large document beneath the words “Done is not a checklist state.”"
sourceUrl: "https://lnkd.in/p/dMm5xePQ"
postId: "LI-00106"
draft: false
sourceHash: "178ef438c4817829fe814c5643359f9c301b787e591692afc70cdfdc9b859882"
importedBodyHash: "6b95965fd87d34dc64fbdbb0aa433e25efbebbb76059c70b9b71d07f469317a5"
---

I compared two versions of the operating template I use when AI works inside one of my software projects.

The earlier version already did many sensible things. It separated exploration from implementation, kept project state outside the conversation, and required evidence before work moved to Done.

But the review exposed a quiet gap. An agent could complete every task on the list, run the expected tests, and still leave the product behaving differently from what had been agreed.

So I added three small checks.

First, describe acceptance in terms of a concrete starting condition, action and observable result, including relevant failure and recovery cases.

Second, check readiness before substantial work begins. Are the requirements clear? Does every slice serve the outcome? Is there a way to verify it?

Third, compare the finished behaviour with the latest agreed scope. What is missing, partial, contradictory, or present even though nobody asked for it?

None of this proves that a product is good. A checklist cannot replace real users, installed-build testing or commercial evidence.

It does close a gap in AI-assisted work. Generation can move quickly enough that task completion outruns product judgement.

The useful finish line is whether the behaviour can be trusted for the job it was meant to do.
