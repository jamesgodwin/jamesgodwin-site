import metadata from '../siteMetadata';
import { essayArchivePages } from '../essay-pagination.js';
import { publishedEssays, essayPath } from '../essays.js';
export async function GET() {
 const essays=await publishedEssays();
 const archivePages=essayArchivePages(essays).slice(1).map(page=>({url:metadata.siteUrl+page.path}));
 const pages = [metadata.defaultMetadata, ...Object.keys(metadata.pageMetadata).map(metadata.getMetadataForCommand),...Object.values(metadata.sectionMetadata),...archivePages,...essays.map(essay=>({url:metadata.siteUrl+essayPath(essay)}))];
 const urls = [...new Set(pages.filter(page=>!page.noindex).map(page=>page.url))];
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
