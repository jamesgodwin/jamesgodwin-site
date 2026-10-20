import metadata from '../siteMetadata';
import { publishedEssays, essayPath } from '../essays.js';

export async function GET() {
 const lines = [
  '# James Godwin',
  '',
  '> Product designer and full-stack developer in Sedgefield, South Africa. I help founders get fast-built and AI-assisted products ready for real use.',
  '',
  'This is my personal portfolio and writing site. My work connects UX, accessibility, front-end and back-end development, and deployment. Links below lead to public, server-rendered HTML.',
  '',
  '## Work',
  '',
  ...['work','crewScores','qualityControl','tapscribe','plumbline'].map(key=>{
   const page=metadata.sectionMetadata[key];
   return `- [${page.title.split(' | ')[0]}](${page.url}): ${page.description}`;
  }),
  '',
  'The scoring and quality-control stories concern the same roofing client. TapScribe is my own product, developed from a coach’s need for private local recording and transcription. Plumbline is work with IIIMPACT and remains in progress; its design-tool projections and developer plugins are not presented as completed products. AI Ching is my own codebase used as a design-system test case.',
  '',
  '## About and contact',
  '',
  ...['about','uxui','systems','apps','now','contact'].map(key=>{
   const page=metadata.getMetadataForCommand(key);
   return `- [${page.title.split(' | ')[0]}](${page.url}): ${page.description}`;
  }),
  '',
  '## Writing',
  '',
  `- [All writing](${metadata.siteUrl}/essays): Published essays with original illustrations and links to their LinkedIn publication.`,
  ...(await publishedEssays()).map(essay=>`- [${essay.data.title}](${metadata.siteUrl}${essayPath(essay)}): ${essay.data.lead}`),
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
