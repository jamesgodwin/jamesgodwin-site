import { defineConfig } from 'astro/config';
const catalogue = process.env.DESIGN_SYSTEM_CATALOG === 'true';
const concept = process.env.SITE_POC === 'true';
export default defineConfig({
  site: 'https://jamesgodwin.me',
  output: 'static',
  // Pages serves route.html at /route, matching the existing slashless canonicals.
  build: { format: concept || catalogue ? 'directory' : 'file' },
  outDir: concept ? './output/homepage-poc/build' : catalogue ? './output/design-system/catalogue-build' : './dist',
  trailingSlash: 'ignore',
  integrations: concept ? [{
    name:'local-case-shelf',
    hooks:{
      'astro:config:setup':({injectRoute})=>injectRoute({
        pattern:'/concept/[...page]',
        entrypoint:'./src/concept/Page.astro'
      })
    }
  }] : [],
  devToolbar: { enabled: false }
});
