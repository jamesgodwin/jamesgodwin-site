const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const baseline = require('./fixtures/metadata-baseline.json');
test('every existing route keeps its canonical URL and renders the current metadata', async () => {
  const { default: metadata } = await import('../src/siteMetadata.js');
  const currentPages = [metadata.defaultMetadata, ...Object.values(metadata.pageMetadata)];
  for (const meta of baseline) {
    const current = currentPages.find(page => page.path === meta.path);
    assert.ok(current, `Missing metadata for preserved route ${meta.path}`);
    const file = meta.path === '/' ? 'dist/index.html' : `dist${meta.path}.html`;
    assert.ok(fs.existsSync(file), `Missing prerendered route ${meta.path}`);
    const html = fs.readFileSync(file, 'utf8');
    assert.ok(html.includes(`<title>${current.title.replaceAll('&', '&amp;')}</title>`), `Title: ${meta.path}`);
    const escape = value => value.replaceAll('&','&amp;').replaceAll('"','&quot;');
    assert.ok(html.includes(`name="description" content="${escape(current.description)}"`), `Description: ${meta.path}`);
    assert.ok(html.includes(`rel="canonical" href="${meta.url}"`), `Canonical: ${meta.path}`);
    assert.ok(html.includes('<main'), `Readable content: ${meta.path}`);
    assert.ok(!html.includes('react-dom'), `React runtime: ${meta.path}`);
  }
});

test('content images resolve at both slash and non-slash page URLs', () => {
  for (const page of ['apps','paintings']) {
    const html=fs.readFileSync(`dist/${page}.html`,'utf8');
    for (const [,src] of html.matchAll(/<img[^>]+src="([^"]+)"/g)) {
      assert.ok(src.startsWith('/') || src.startsWith('https://'), `${page}: relative image ${src}`);
      if(src.startsWith('/')) assert.ok(fs.existsSync(`dist${src}`), `Missing image ${src}`);
    }
  }
});

test('retired TapScribe pilot is absent from the public build', () => {
  assert.equal(fs.existsSync('dist/tapscribe/TapScribe-Pilot.dmg'), false);
});
