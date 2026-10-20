import fs from 'fs';
import path from 'path';
import siteMetadata from './siteMetadata';

describe('shared page metadata', () => {
  const homeTitle = 'James Godwin | Product Design and Full-Stack Development';
  const homeDescription = 'I help founders finish fast-built and AI-assisted products, closing UX, accessibility and implementation gaps across design, front-end, back-end and deployment.';

  test('leads shared home and About previews with the current positioning', () => {
    expect(siteMetadata.defaultMetadata.title).toBe(homeTitle);
    expect(siteMetadata.defaultMetadata.description).toBe(homeDescription);
    expect(siteMetadata.pageMetadata.about).toMatchObject({
      title: 'About James Godwin | Product Designer and Full-Stack Developer',
      description: 'Product designer and full-stack developer helping founders connect UX, accessibility and implementation. Based in Sedgefield, South Africa.'
    });
    expect(siteMetadata.pageMetadata.diagnostic.description).toContain('personal Tai Chi and Qigong practice');
    expect(siteMetadata.pageMetadata.workshops.description).toMatch(/practice-led workshops/i);
    expect(siteMetadata.pageMetadata.philosophy.description).toContain('how Tai Chi shapes James Godwin');
  });

  test('keeps the static home template aligned with runtime defaults', () => {
    const html = fs.readFileSync(path.join(process.cwd(), 'dist', 'index.html'), 'utf8');

    expect(html).toContain(`<title>${homeTitle}</title>`);
    expect(html).toContain(`content="${homeDescription}"`);
    expect(html.match(new RegExp(homeTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(3);
    expect(html.match(new RegExp(homeDescription.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'))).toHaveLength(3);
  });
});
