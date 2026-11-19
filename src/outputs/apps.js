import { projects } from '../portfolio.js';
const appsOutput = `<p>Apps and systems built around practical needs and personal interests.</p>${projects.map(app => `<h2>${app.name}</h2><p>${app.story}</p><p><a href="${app.url}">${app.cta || `Explore ${app.name} →`}</a></p>`).join('')}`;
export default appsOutput;
