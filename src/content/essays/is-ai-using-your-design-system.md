---
title: "Is your AI using your design system, or producing a convincing picture of it?"
date: "2026-07-21"
category: "Design & development"
lead: "What changed when I stopped asking AI to imitate a system and gave it the real components."
cover: "../../assets/writing/design-system-cover.png"
coverAlt: "Original design-system article illustration with a figure and overlapping shadows."
sourceUrl: "https://www.linkedin.com/pulse/your-ai-using-design-system-producing-convincing-picture-james-godwin-mx42c/"
articleId: "ARTICLE-2026-07-21-01"
draft: false
sourceHash: "b4bb08a19b79a98630fb1b83778acaf48436a160e6d23f7aca0d21fdfd2e9ee2"
importedBodyHash: "e49521f85f697e01817b82d145a8de13a338dd797fab32828d69996205d68bba"
---

I spent days trying to get a mature design system into an AI design tool. The problem was not the prompts.

The system already existed. It had established tokens, layouts, navigation, forms, grids, interaction patterns, and components that had been refined through years of real product work. My goal seemed straightforward, give an AI tool enough of that system to generate new screens without drifting into generic interface design.

I started with the obvious route. I packaged the design system so an AI design tool could understand it. I supplied rules, component descriptions, tokens, templates, rendered examples, icons, and working reference material. Then I tested it, inspected what came back, tightened the documentation, rebuilt the package, and tried again.

The output improved. Colours became more accurate. Spacing moved closer. The general shape of the application started to feel familiar. At a glance, some screens looked convincingly on-brand.

But something was still wrong.

The generated interface looked like our design system, yet it did not behave as though it had been built from it. A grid might resemble the real grid without carrying its actual behaviour. Navigation could look familiar while missing the interaction logic refined over years. A form control could have the right colour and outline while being a newly invented approximation rather than the component the product already used.

When I inspected the generated code, the reason became clear. The tool had reconstructed its own interpretation of the design system. It had learned enough from our descriptions and examples to redraw the surface, but it was not composing the components we had already built.

That distinction changed the whole project.

I evaluated an open-source alternative, hoping that a more controllable tool might remove the ceiling. It offered real advantages. The system was open, inspectable, and connected to a coding agent. But its preview architecture still rebuilt interfaces inside a constrained browser environment. It could not execute the full component runtime we actually used, so it arrived at the same basic result, a good reconstruction, not composition from the real system.

I then tried to push harder on the import. More source material, more explicit rules, more component examples, and stronger prompts all improved the resemblance. They did not alter the underlying architecture. The tools were designed to interpret and reproduce a system, not to load every real component and assemble the product from its existing parts.

This exposed a costly pattern. Every correction spent tokens moving an approximation towards fidelity it could never fully reach. The output improved, but the target kept moving because the model was still rebuilding the interface from its understanding of the system.

Worse, much of that effort did not compound. A correction could improve one session or one generated screen, yet the next person might have to teach the same lesson again. Even I could return in a fresh context and find myself explaining why a familiar component was not merely a visual shape, but a specific combination of behaviour, states, constraints, and product history.

The problem was not that the AI tools were poor. They were solving a different problem. Reconstruction is extremely useful for ideation. It helps turn a thought into something visible, explore alternatives, test a direction, and make an early conversation concrete. The mistake was expecting an ideation environment to reproduce a mature production system exactly.

Once I accepted that, the question changed. I stopped asking how to make the AI design tool imitate the system more accurately. I asked how an agent could work with the actual system.

That led me away from a browser-preview workflow and towards a coding agent operating with the real component assets, rules, and runtime. I packaged those into a reusable plugin so the knowledge could be installed once and shared by both designers creating prototypes and developers working closer to production.

The first version still took a shortcut. I generated static HTML mockups that looked like the components but did not load the real runtime. The result was familiar but still approximate. The controls had the costume of the system without its substance.

The next version rebuilt the screens in a modern frontend framework. It was technically cleaner, but it repeated the same conceptual mistake. I had replaced one reconstruction with another. The shell, layouts, and components were being re-authored instead of used, and the output still felt wrong.

The breakthrough came when I went back to the working reference pages and asked the most basic question, why do these look right?

They looked right because they loaded the real compiled styles, the real component runtime, the real behaviours, and the real widgets. The answer was not another description of those parts. It was to let the agent work with the parts themselves.

That realisation reversed the architecture. Instead of describing a grid and asking the agent to reproduce it, the plugin could initialise the real grid. Instead of asking for something shaped like an established control, it could use the actual control. Instead of chasing visual fidelity through repeated prompting, fidelity came from composition.

The difference was immediate. The generated screens were no longer convincing interpretations of the design system. They were built from the same compiled styles, components, and behaviours as the reference implementation.

This also changed how improvement worked. Each new rule, corrected component specification, or missing asset was added to the shared package. The next person did not have to rediscover it. The next session did not begin from zero. Effort started compounding because the knowledge lived in a versioned capability rather than in a conversation.

I added a coverage loop around the plugin. Every generated screen had to report which system components it used, what had been built outside the system, what was missing, and what remained uncertain. That report became more than a quality check. It exposed gaps in documentation, missing compiled assets, and established patterns that existed in the product but had never been written down clearly.

In other words, making the design system usable by an agent also made the design system more legible to the humans responsible for it.

That may be the most useful secondary effect. An agent cannot rely on the informal knowledge a team carries between meetings. Preparing the system for reliable generation forces hidden conventions into the open, where they can be examined, corrected, versioned, and shared.

The lesson I carry from this is simple. When evaluating AI tools for design-system work, ask whether the tool uses your components or redraws them. Both approaches have value, but they solve different problems.

Use reconstruction when you want speed, exploration, and a fast way to see an idea. Use real-component composition when fidelity, behaviour, repeatability, and production alignment matter.

Importing a design system gives an AI tool the surface. Packaging the real components for an agent gives it the substance.

And instead of spending tokens teaching every new session to imitate the same system, you can spend that effort once, package the knowledge, and let it compound across the whole team.

Is your AI workflow using your design system, or producing a convincing picture of it?
