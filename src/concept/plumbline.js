import system from '../assets/concept/shared-patterns.png';
export const plumblineStory = {
 id:'plumbline',title:'One design system. Across the tools.',context:'Plumbline · With IIIMPACT · In progress',
 summary:'With IIIMPACT, I’m establishing shared design rules in client codebases. Work is underway to bring those rules into design tools and coding plugins.',
 image:system,alt:'Neutral examples comparing inconsistent controls with a shared component system.',
 contribution:'Design audits · Tokens · Components · Build checks',
 steps:[
  {title:'Different tools.',accent:'Different results.',body:'Teams work across Figma, AI design tools and the product code. When each uses different components or rules, mockups and the finished product drift apart. AI-assisted builds can also lack a clear design system in the code itself.',visual:'system-tools'},
  {title:'Start with',accent:'the codebase.',body:'With IIIMPACT, I’m helping establish design systems in client codebases. On my own AI Ching site, I replaced repeated styling values with shared tokens and components, then added a build check to catch new inconsistencies.',visual:'system-audit'},
  {title:'One source.',accent:'Connected tools.',body:'The client’s codebase stays the source of truth. With IIIMPACT, I’m working on views of that system in design tools, and plugins that make its rules available while coding. Both are in progress.',visual:'system-projections'}
 ]
};
