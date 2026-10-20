// Prepare a native, typeset brand card. Capture at 1200×630 with the browser
// after its fonts load; keep PNG for social crawlers and WebP for reuse.
import fs from 'node:fs/promises';
const tokens=await fs.readFile(new URL('../src/styles/tokens.css',import.meta.url),'utf8');
await fs.mkdir(new URL('../output/seo-review/',import.meta.url),{recursive:true});
const html=`<!doctype html><html lang="en" data-design="case-study"><meta charset="utf-8"><title>James Godwin social card</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Manrope:wght@700&display=block" rel="stylesheet">
<style>${tokens}
*{box-sizing:border-box}html,body{margin:0;width:1200px;height:630px;overflow:hidden}body{background:var(--color-canvas);color:var(--color-text);font-family:var(--font-body);padding:52px 64px}
header{display:flex;justify-content:space-between;align-items:center;padding-bottom:25px;border-bottom:1px solid var(--color-line)}strong{font-family:var(--font-display);font-size:26px;letter-spacing:-1px}header span{font-size:18px;color:var(--color-text-muted)}
h1{font-family:var(--font-display);font-size:78px;line-height:1.08;letter-spacing:-3.7px;margin:53px 0 25px}h1 span{display:block;color:var(--color-action)}p{font-size:23px;line-height:1.5;max-width:850px;margin:0;color:var(--color-text-muted)}
footer{position:absolute;left:64px;right:64px;top:515px;border-top:1px solid var(--color-line);padding-top:24px;display:flex;justify-content:space-between;font-size:18px;color:var(--color-text-muted)}footer span:last-child{color:var(--color-action);font-weight:600}
</style><header><strong>James Godwin</strong><span>Product design &amp; full-stack development</span></header>
<h1>You have a build.<span>Let’s get it over the line.</span></h1>
<p>I help founders get fast-built and AI-assisted products<br>ready for real use.</p>
<footer><span>UX · Accessibility · Development · Deployment</span><span>jamesgodwin.me ↗</span></footer></html>`;
await fs.writeFile(new URL('../output/seo-review/og.html',import.meta.url),html);
console.log('Prepared output/seo-review/og.html — capture at 1200×630 after Inter and Manrope load.');
