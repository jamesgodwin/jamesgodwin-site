import { benStory } from './ben.js';
import { qualityStory } from './quality.js';
import local from '../assets/concept/tapscribe-library.webp';
import system from '../assets/concept/shared-patterns.png';

export const stories = [
 benStory,
 qualityStory,
 {
  id:'local',title:'Transcription stays local.',context:'TapScribe · My own product',
  summary:'In my own recording app, I found a moment where people could be left stuck without an explanation.',
  image:local,alt:'TapScribe Library showing a recorded meeting and a local transcript.',
  contribution:'Native app · Local AI · Recovery states · Accessibility',
  steps:[
   {title:'The recording was safe.',accent:'The spinner said nothing.',body:'A meeting had been recorded, but a missing model could leave the app saying “Transcribing”. The person waiting had no clear explanation or next step.',visual:'missing'},
   {title:'Name the problem.',accent:'Give people a way back.',body:'I kept the audio, explained that the model was missing and added a download path followed by an explicit retry.',visual:'recovery'},
   {title:'A transcript. On your Mac.',accent:'',body:'People can continue from the recording they already made. Recording and transcription stay on their Mac; sending text to another AI service remains a separate choice.',visual:'transcript'}
  ]
 },
 {
  id:'system',title:'AI screens, one system.',context:'Plumbline · With IIIMPACT · In progress',
  summary:'AI could imitate the look. Shared rules needed to reach the build.',
  image:system,alt:'Synthetic comparison of inconsistent grey buttons and consistent forest-green buttons.',
  contribution:'Design systems · Components · Code checks · Human review',
  steps:[
   {title:'The screens looked close.',accent:'The system kept drifting.',body:'A team can have a design system and still spend time correcting AI-generated screens. Similar-looking controls don’t always follow the same rules.',visual:'drift'},
   {title:'Make the rules usable.',accent:'Then check the build.',body:'With IIIMPACT, I’m helping connect the design guidance to reusable components and checks, so teams have a more dependable starting point.',visual:'patterns'},
   {title:'A repeatable foundation.',accent:'Still being tested.',body:'The engine and checks are in progress. Human review and real-project validation remain part of the work.',visual:'system-result'}
  ]
 }
];
