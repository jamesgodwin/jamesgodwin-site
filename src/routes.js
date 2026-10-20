import metadata from './siteMetadata';
import presentation from './pagePresentation';
const modules = import.meta.glob(['./outputs/*.js', '!./outputs/*.test.js'], { eager: true, import: 'default' });
const aliases = { 'little-panda': 'littlePanda', 'thank-you': 'thankYou' };
export const headings = { about:'About', apps:'Apps', books:'Books', 'little-panda':'Little Panda Tao Stories', contact:'Contact', diagnostic:'Executive State Diagnostic', legal:'Legal', now:'Now', paintings:'Paintings', philosophy:'Philosophy', taoism:'Taoism', 'workshop-enquiry':'Contact', 'thank-you':'Thank You', workshops:'Stillness Under Pressure', systems:'Simple Workflow Systems', uxui:'Product Clarity', sanctuary:'True Essence' };
export const routes = Object.entries(metadata.pageMetadata).map(([command, meta]) => ({ command, meta: metadata.getMetadataForCommand(command), presentation: presentation[command], heading: headings[command], content: modules[`./outputs/${aliases[command] || command}.js`] || '' }));
export const navigation = ['uxui','systems','apps',null,'diagnostic','workshops','sanctuary','taoism',null,'about','now','contact',null,'philosophy','books','little-panda','paintings','legal'];
export const labels = { ...headings, diagnostic:'Executive State Diagnostic', systems:'Workflow Systems', workshops:'Stillness Under Pressure Workshops', sanctuary:'True Essence', uxui:'Product Clarity', 'little-panda':'Little Panda' };
