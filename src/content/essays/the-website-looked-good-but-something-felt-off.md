---
title: "The Website Looked Good, but Something Felt Off"
date: "2026-10-27"
category: "Design & development"
lead: "My AI-assisted website looked good, but an audit helped me understand why it still felt slightly off."
cover: "../../assets/writing/something-felt-slightly-off.png"
coverQuality: 65
coverAlt: "A person facing a textured orange and blue artwork beside the words Something felt slightly off."
origin: "website"
articleId: "ARTICLE-2026-10-27-01"
draft: false
---

I had rebuilt my I Ching website with AI, but I kept looking at it and feeling that something was slightly off. Visually, it looked good. Even as a designer, I couldn’t quite explain what wasn’t sitting right.

I wanted to modernise the older site, republish the content and move from Jekyll to Astro, which I also wanted to explore. There was a lot of content across the hexagrams and their related pages, in English, Spanish and Brazilian Portuguese.

When I looked at an individual page, the design seemed to work. But moving through the site, something didn’t feel consistent. It was subtle enough that I struggled to point to a particular card or say exactly what needed changing.

An audit of the code gave me something concrete to look at. The baseline recorded 1,714 uses of arbitrary styling values, with 20 different corner-radius values and 22 colour values. That wasn’t over a thousand different card designs. It was the number of times a styling value had been written directly into the code, rather than drawn from a shared rule.

Some of the differences were very small. One corner radius was 1.15rem, another 1.2rem and another 1.25rem. There were several slightly different dark background colours. Looking at them separately, they could all seem reasonable, but they were being used across the same website.

That was what I found fascinating. I had been looking at the result without being able to name the variation underneath it. You might not immediately pick it up visually, but I felt it. The audit helped me understand what I was responding to.

As I went through and standardised the colours, radii and shared components, the site started to feel noticeably cleaner to me. It was more coherent from one card to the next. My reaction was, oh, okay, now it looks professional. Now it looks cleaner.

I can’t turn that feeling into a claim about how much easier the site is for someone else to use. I haven’t measured that. But as the person who designed it and kept looking at it, I could see and feel the difference once those choices were brought together.

What surprised me was that I had assumed more of that structure would already be there. AI had helped me produce the site, and the pages looked good enough that I hadn’t initially questioned how consistently the design decisions were being made. The code audit brought that question into view.

As a designer, I’m used to building and reviewing design systems in Figma. Keeping those systems current with what is actually being built is another part of the work. In this case, I needed to understand what the website’s code was doing before deciding what its shared system should be.

If I want the codebase to be the source of truth, it needs to contain choices I am happy for the next piece of work to reuse. Which colours belong in the system? Which differences are intentional? Which card and button patterns should be shared? Those decisions need to be made and applied before another tool can reliably build from them.

This has made me think about where a lot of the work with clients may sit as more people build ideas with AI. Before centralising a design system or making it available to other tools, teams may first need to audit and organise what is already in the codebase. A working website can still have a lot of small, inconsistent decisions spread through it.

My own site was a useful reminder of that. I had gone in wanting to modernise something and ended up discovering structure I had assumed was there. Now, when I think about helping AI work more consistently with a product, I’m paying much closer attention to the system it will be building on.
