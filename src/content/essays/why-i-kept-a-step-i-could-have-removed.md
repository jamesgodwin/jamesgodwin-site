---
title: "Why I Kept a Step I Could Have Removed"
date: "2026-10-22"
category: "Design & development"
lead: "What session replays on my I Ching website taught me about the value of leaving room for a pause."
cover: "../../assets/writing/why-i-kept-a-step-i-could-have-removed.png"
coverAlt: "A person standing quietly at the top of a staircase beside the words Some steps are there to give us pause."
origin: "website"
articleId: "ARTICLE-2026-10-22-01"
draft: false
---

After installing PostHog on my I Ching website, one of the things picked up very quickly was suspected rage clicking. When I watched the session replay, I could see people repeatedly clicking to reveal the lines of their hexagram. That was interesting, because clicking six times is how the consultation works.

A hexagram is made up of six lines. In this version of the consultation, you reveal them one at a time, so repeated clicks are expected. PostHog had picked up the repeated clicking, but it didn’t have the context that these clicks were how someone generated their hexagram.

I also noticed a long pause between entering the question and starting to cast the hexagram. When you’re looking at how people move through a product, the natural thought is, can I get them through this part more quickly? I considered whether I could skip the interim step and get people straight into their reading.

The first screen asks you to enter your question, concern or situation. Once you click Consult, the next screen says, “Take a quiet moment.” Underneath, it asks you to bring your situation to mind and cast your hexagram when the question feels clear.

That interim step is there because I want to give someone an opportunity to pause and ponder. For me, that is an important part of consulting the I Ching. Instead of just having a question in mind, be with it for a bit.

Watching the replay, I could see that someone had entered something, but the question itself was masked. I could see the pause, not what they were thinking. They might have been considering their situation, or something else might have held their attention. What I did know was that the interface had invited them to take that moment.

The quicker version would work like this. Click Consult, go straight into the hexagram view and reveal the first line immediately. Click another five times and bam, you have your answer.

It would be a quicker way of getting through to the reading. In other software, removing a step like that might be a useful improvement. Here, though, removing the step would also take away the opportunity to sit with the question before beginning.

That was the reason I wanted to keep it. Someone can move on when they are ready; there is no timer making them wait. But the invitation to pause matters to the experience I am trying to offer.

That was very interesting to see. When you’re watching the replay and you know what the intention is, the same behaviour can mean something quite different. Six clicks could look like frustration until you understood that the person was generating six lines. And the pause was happening at the very point where I had invited someone to take a quiet moment.

What I found valuable was being able to watch people’s behaviour and see how they interacted, alongside the data. PostHog helped me do that. But deciding what to change still needed an understanding of the product and why that step was there.

I often want to make software more efficient and help people get to what they need with less unnecessary work. In this case, that meant looking carefully at what I would remove along with the extra step. I wanted people to reach their reading, but I also wanted to leave them that quiet moment with the question they had brought.
