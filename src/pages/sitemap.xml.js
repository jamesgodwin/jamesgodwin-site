import metadata from '../siteMetadata';
import { publishedEssays, essayPath } from '../essays.js';
export async function GET() {
 const pages = [metadata.defaultMetadata, ...Object.keys(metadata.pageMetadata).map(metadata.getMetadataForCommand),...Object.values(metadata.sectionMetadata),...(await publishedEssays()).map(essay=>({url:metadata.siteUrl+essayPath(essay)}))];
 const urls = [...new Set(pages.filter(page=>!page.noindex).map(page=>page.url))];
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url=>`<url><loc>${url}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
