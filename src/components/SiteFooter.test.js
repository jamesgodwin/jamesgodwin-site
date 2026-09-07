import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import SiteFooter from './SiteFooter';

describe('SiteFooter', () => {
  test('keeps commercial work separate from practice and perspective', () => {
    render(<SiteFooter />);

    const footer = screen.getByRole('contentinfo', { name: 'Site navigation' });
    const groups = within(footer).getAllByRole('list');
    const workLinks = within(groups[0]).getAllByRole('link');

    expect(workLinks.slice(0, 2).map((link) => link.textContent)).toEqual([
      'Product Clarity',
      'Workflow Systems'
    ]);
    expect(workLinks.map((link) => link.textContent)).toEqual([
      'Product Clarity',
      'Workflow Systems',
      'Apps'
    ]);
    expect(within(groups[1]).getByRole('link', { name: 'Executive State Diagnostic' })).toBeInTheDocument();
    expect(within(groups[1]).getByRole('link', { name: 'Stillness Under Pressure' })).toBeInTheDocument();
    expect(within(groups[1]).getByRole('link', { name: 'Taoism & Tai Chi' })).toBeInTheDocument();
  });
});
