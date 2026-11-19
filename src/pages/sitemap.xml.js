import metadata from '../siteMetadata';
import { projects } from '../portfolio.js';
import { noteArchivePages } from '../note-pagination.js';
import { essayArchivePages } from '../essay-pagination.js';
import { publishedEssays, essayPath } from '../essays.js';
import { publishedNotes, notePath } from '../notes.js';
// Significant portfolio and copy revisions, kept stable between deployments.
const portfolioUpdated = '2026-11-19';
const revisedPages = new Set(['', '/about', '/apps', '/books', '/contact', '/return-to-stillness', '/dantian', '/little-panda', '/now', '/paintings', '/philosophy', '/systems', '/taoism', '/uxui', '/workshops']);
export async function GET() {
 const essays=await publishedEssays();
 const archivePages=essayArchivePages(essays).slice(1).map(page=>({url:metadata.siteUrl+page.path}));
 const notes=await publishedNotes();
 const notePages=noteArchivePages(notes).slice(1).map(page=>({url:metadata.siteUrl+page.path}));
 const pages = [...projects.filter(p=>p.url.startsWith('/')).map(p=>({url:metadata.siteUrl+p.url})),metadata.defaultMetadata, ...Object.keys(metadata.pageMetadata).map(metadata.getMetadataForCommand),...Object.values(metadata.sectionMetadata),...archivePages,...notePages,...essays.map(essay=>({url:metadata.siteUrl+essayPath(essay)})),...notes.map(note=>({url:metadata.siteUrl+notePath(note)}))];
 const writingDates = new Map([...essays.map(item=>[metadata.siteUrl+essayPath(item),item.data.updated || item.data.date]),...notes.map(item=>[metadata.siteUrl+notePath(item),item.data.updated || item.data.date])]);
 const urls = [...new Set(pages.filter(page=>!page.noindex).map(page=>page.url))];
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>{const path=url.replace(metadata.siteUrl,'');const date=writingDates.get(url) || (revisedPages.has(path)||path.startsWith('/work/') ? portfolioUpdated : null);const lastmod=date ? `<lastmod>${date instanceof Date ? date.toISOString().slice(0,10) : date}</lastmod>` : '';return `<url><loc>${url}</loc>${lastmod}</url>`;}).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
