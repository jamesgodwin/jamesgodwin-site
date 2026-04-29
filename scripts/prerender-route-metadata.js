const fs = require('fs');
const path = require('path');
const { defaultMetadata, pageMetadata } = require('../src/siteMetadata');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/"/g, '&quot;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

const replaceTag = (html, selector, tag) => {
  const [attribute, key] = selector;
  const pattern = new RegExp(`<meta\\s+${attribute}="${key}"[^>]*>`, 'i');

  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }

  return html.replace('</head>', `  ${tag}\n</head>`);
};

const applyMetadata = (html, metadata) => {
  const page = {
    ...defaultMetadata,
    ...metadata
  };

  const title = escapeHtml(page.title);
  const description = escapeHtml(page.description);
  const image = escapeHtml(page.image);
  const twitterImage = escapeHtml(page.twitterImage || page.image);
  const url = escapeHtml(metadata.url || `${defaultMetadata.url}${page.path === '/' ? '' : page.path}`);

  let nextHtml = html.replace(/<title>.*?<\/title>/i, `<title>${title}</title>`);

  nextHtml = replaceTag(nextHtml, ['name', 'description'], `<meta name="description" content="${description}" />`);
  nextHtml = replaceTag(nextHtml, ['property', 'og:type'], '<meta property="og:type" content="website" />');
  nextHtml = replaceTag(nextHtml, ['property', 'og:title'], `<meta property="og:title" content="${title}" />`);
  nextHtml = replaceTag(nextHtml, ['property', 'og:description'], `<meta property="og:description" content="${description}" />`);
  nextHtml = replaceTag(nextHtml, ['property', 'og:image'], `<meta property="og:image" content="${image}" />`);
  nextHtml = replaceTag(nextHtml, ['property', 'og:url'], `<meta property="og:url" content="${url}" />`);
  nextHtml = replaceTag(nextHtml, ['name', 'twitter:card'], '<meta name="twitter:card" content="summary_large_image" />');
  nextHtml = replaceTag(nextHtml, ['name', 'twitter:title'], `<meta name="twitter:title" content="${title}" />`);
  nextHtml = replaceTag(nextHtml, ['name', 'twitter:description'], `<meta name="twitter:description" content="${description}" />`);
  nextHtml = replaceTag(nextHtml, ['name', 'twitter:image'], `<meta name="twitter:image" content="${twitterImage}" />`);
  nextHtml = replaceTag(nextHtml, ['name', 'twitter:url'], `<meta name="twitter:url" content="${url}" />`);

  return nextHtml;
};

if (!fs.existsSync(indexPath)) {
  throw new Error('Build index.html not found. Run react-scripts build first.');
}

const baseHtml = fs.readFileSync(indexPath, 'utf8');
fs.writeFileSync(indexPath, applyMetadata(baseHtml, defaultMetadata));

Object.values(pageMetadata).forEach((metadata) => {
  if (!metadata.path || metadata.path === '/') return;

  const routeDir = path.join(buildDir, metadata.path.replace(/^\//, ''));
  fs.mkdirSync(routeDir, { recursive: true });
  fs.writeFileSync(path.join(routeDir, 'index.html'), applyMetadata(baseHtml, metadata));
});

console.log(`Wrote social metadata for ${Object.keys(pageMetadata).length + 1} routes.`);
