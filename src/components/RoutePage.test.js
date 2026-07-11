import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RoutePage from './RoutePage';

describe('RoutePage', () => {
  test('presents a route with a visible title, useful facts, action, body, and shared navigation', () => {
    render(
      <RoutePage
        command="diagnostic"
        heading="Executive State Diagnostic"
        content="<h2>What happens</h2><p>Useful detail.</p>"
        presentation={{
          pathLabel: 'IN ME',
          title: 'Executive State Diagnostic',
          lede: 'A private session for leaders.',
          facts: ['45 minutes', '$350 USD'],
          primaryAction: { label: 'Request a private session', href: '/contact?about=diagnostic' }
        }}
        onBack={() => {}}
      />
    );

    expect(screen.getByRole('heading', { level: 1, name: 'Executive State Diagnostic' })).toBeVisible();
    expect(screen.getByText('IN ME')).toBeInTheDocument();
    expect(screen.getByText('45 minutes')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Request a private session' })).toHaveAttribute('href', '/contact?about=diagnostic');
    expect(screen.getByRole('heading', { level: 2, name: 'What happens' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
  });
});
