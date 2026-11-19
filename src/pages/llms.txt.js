import metadata from '../siteMetadata';
import { projects } from '../portfolio.js';
import { noteArchivePages } from '../note-pagination.js';
import { publishedEssays, essayPath } from '../essays.js';
import { publishedNotes, notePath } from '../notes.js';

export async function GET() {
 const notes=await publishedNotes();
 const lines = [
  '# James Godwin',
  '',
  '> Product designer and full-stack developer in Sedgefield, South Africa. I help founders and teams shape ideas, bring them to fruition and get existing builds over the line.',
  '',
  'This is my personal portfolio and writing site. My work connects UX, accessibility, front-end and back-end development, and deployment. Links below lead to public, server-rendered HTML.',
  '',
  '## Work',
  '',
  ...['tapscribe'].map(key=>{
   const page=metadata.sectionMetadata[key];
   return `- [${page.title.split(' | ')[0]}](${page.url}): ${page.description}`;
  }),
  '',
  'The Roof Ops story brings scoring and quality control together for the same roofing client. TapScribe was developed from a coach’s need for private local recording and transcription.',
  '',
  ...projects.filter(project=>project.url.startsWith('/')).map(project=>`- [${project.name}](${metadata.siteUrl}${project.url}): ${project.story}`),
  '',
  '## About and contact',
  '',
  ...['about','uxui','systems','apps','now','contact'].map(key=>{
   const page=metadata.getMetadataForCommand(key);
   return `- [${page.title.split(' | ')[0]}](${page.url}): ${page.description}`;
  }),
  '',
  '## Essays',
  '',
  `- [All essays](${metadata.siteUrl}/essays): Published essays with original illustrations and links to their LinkedIn publication.`,
  ...(await publishedEssays()).map(essay=>`- [${essay.data.title}](${metadata.siteUrl}${essayPath(essay)}): ${essay.data.lead}`),
  '',
  '## Notes',
  '',
  `- [All notes](${metadata.siteUrl}/notes): Short pieces adapted from published LinkedIn posts, with original artwork and source links.`,
  ...noteArchivePages(notes).slice(1).map(page=>`- [Notes · Page ${page.number}](${metadata.siteUrl}${page.path}): Older notes, twelve per page.`),
  ...notes.map(note=>`- [${note.data.title}](${metadata.siteUrl}${notePath(note)}): ${note.data.lead}`),
  '',
  '## Optional',
  '',
  ...['books','paintings','taoism','philosophy','legal'].map(key=>{
   const page=metadata.getMetadataForCommand(key);
   return `- [${page.title.split(' | ')[0]}](${page.url}): ${page.description}`;
  }),
  ''
 ];
 return new Response(lines.join('\n'),{headers:{'Content-Type':'text/plain; charset=utf-8'}});
}
