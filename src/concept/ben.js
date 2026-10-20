import scoring from '../assets/concept/crew-scores.png';
export const benStory = {
  id:'scoring',title:'Daily scores. Clear totals.',context:'Roofing client · Scoring',
  summary:'Ben prototyped a staff-scoring app with AI. I connected the calculations, access and deployment so his team could use it.',
  image:scoring,alt:'Illustrative crew score sheet with anonymous workers and four scoring categories.',
  contribution:'Workflow design · Front-end · Back-end · Authentication · Deployment',
  steps:[
   {title:'A clear idea.',accent:'A partly working build.',body:'Ben and I knew each other from our local coffee shop. He’d used AI to prototype daily staff scoring to replace paper records and help calculate commission. A development company was beyond his budget, and he was stuck on staff records, calculations, supervisor access and deployment.',visual:'paper'},
   {title:'I helped put',accent:'the pieces together.',body:'Ben and I started with the scoring workflow his team needed first. I connected staff records, calculations and supervisor sign-in, then deployed the app. That meant working across the interface and back end to make the first release usable.',visual:'scores'},
   {title:'A working first release.',accent:'A way to keep learning.',body:'The first release let Ben test the workflow with his team, then build on it with quality control and other features. Prototyping with AI had helped him clarify what he needed. Getting the app into use gave him a cost-effective way to test the next idea.',visual:'report'}
  ]
 };
