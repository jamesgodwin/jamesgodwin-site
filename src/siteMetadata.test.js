import fs from 'fs';
import path from 'path';
import siteMetadata from './siteMetadata';

describe('shared page metadata', () => {
  const homeTitle = 'James Godwin | Product, UX and Workflow Clarity';
  const homeDescription = 'I help founders and teams close UX, accessibility and implementation gaps in products and workflows. Explore my work, writing and Tai Chi practice.';

  test('leads shared home and About previews with the current positioning', () => {
    expect(siteMetadata.defaultMetadata.title).toBe(homeTitle);
    expect(siteMetadata.defaultMetadata.description).toBe(homeDescription);
    expect(siteMetadata.pageMetadata.about).toMatchObject({
      title: 'About James Godwin | Products, Practice and Perspective',
      description: 'Twenty years across UX, product strategy and design systems, shaped by thirty years of Tai Chi practice. Meet James and explore his work.'
    });
    expect(siteMetadata.pageMetadata.diagnostic.description).toContain('personal Tai Chi and Qigong practice');
    expect(siteMetadata.pageMetadata.workshops.description).toMatch(/practice-led workshops/i);
    expect(siteMetadata.pageMetadata.philosophy.description).toContain('how Tai Chi shapes James Godwin');
  });

  test('keeps the static home template aligned with runtime defaults', () => {
    const html = fs.readFileSync(path.join(process.cwd(), 'public', 'index.html'), 'utf8');

    expect(html).toContain(`<title>${homeTitle}</title>`);
    expect(html).toContain(`content="${homeDescription}"`);
    expect(html.match(new RegExp(homeTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(3);
    expect(html.match(new RegExp(homeDescription.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(3);
  });
});
