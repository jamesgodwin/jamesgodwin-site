import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LookUpPage, { AppStoreBadge } from './LookUpPage';
import App, { commandRouteMap, routeCommandMap } from '../App';

describe('LookUpPage', () => {
  test('renders the hero with one visible heading, the lede, and the horizon mark', () => {
    render(<LookUpPage />);

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.getByRole('heading', { level: 1, name: 'Look up.' })).toBeVisible();
    expect(screen.getByText('A quiet pause when an app pulls you under.')).toBeVisible();
    expect(screen.getByRole('img', { name: 'Look Up' })).toBeInTheDocument();
  });

  test('provides product navigation to the main page sections', () => {
    render(<LookUpPage />);

    expect(screen.getByRole('link', { name: 'How it works' })).toHaveAttribute('href', '#how-it-works');
    expect(screen.getByRole('link', { name: 'What it won’t do' })).toHaveAttribute('href', '#principles');
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '#pricing');
  });

  test('ships both App Store badges disabled with coming soon notes', () => {
    render(<LookUpPage />);

    const badgeLabels = screen.getAllByText('App Store');
    expect(badgeLabels).toHaveLength(2);
    badgeLabels.forEach((label) => {
      const badge = label.closest('[aria-disabled]');
      expect(badge).not.toBeNull();
      expect(badge).toHaveAttribute('aria-disabled', 'true');
    });
    expect(screen.queryByRole('link', { name: /app store/i })).not.toBeInTheDocument();
    expect(screen.getAllByText('Coming soon on the App Store.')).toHaveLength(2);
  });

  test('states the trial, lifetime price, and Family Sharing', () => {
    render(<LookUpPage />);

    expect(screen.getByText('Free for seven days.')).toBeInTheDocument();
    expect(screen.getByText('$19.99')).toBeInTheDocument();
    expect(screen.getByText(/Lifetime access, with Family Sharing/)).toBeInTheDocument();
    expect(screen.queryByText(/\$9\.99/)).not.toBeInTheDocument();
    expect(screen.queryByText(/founding/i)).not.toBeInTheDocument();
  });

  test('links back to the site and states the privacy line', () => {
    render(<LookUpPage />);

    expect(screen.getByRole('link', { name: /jamesgodwin\.me/ })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact');
    expect(screen.getByText(/never leave your device/)).toBeInTheDocument();
  });

  test('renders all seven sections in narrative order', () => {
    const { container } = render(<LookUpPage />);
    const page = container.querySelector('.lookup-page').cloneNode(true);
    page.querySelector('.lookup-topbar').remove();
    const text = page.textContent;

    const markers = [
      'Look up.',
      'Notice where you are.',
      'The pause',
      'How it works',
      'No accounts.',
      'Pricing',
      'jamesgodwin.me'
    ];
    const positions = markers.map((marker) => text.indexOf(marker));

    positions.forEach((position) => expect(position).toBeGreaterThan(-1));
    for (let i = 1; i < positions.length; i += 1) {
      expect(positions[i]).toBeGreaterThan(positions[i - 1]);
    }
    expect(screen.getAllByRole('heading', { level: 2 })).toHaveLength(4);
  });

  test('lists what it will not do as separate refusals', () => {
    render(<LookUpPage />);

    const refusals = [
      'No accounts.',
      'No advertising.',
      'No analytics.',
      'No streaks.',
      'No coaching.',
      'No shame.'
    ];
    refusals.forEach((line) => {
      expect(screen.getByText(line)).toBeInTheDocument();
    });
  });

  test('renders honest product shots for the promise and how it works', () => {
    render(<LookUpPage />);

    expect(screen.getByRole('img', { name: /promise screen/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /app picker/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /screen time/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /notice where you are/i })).toBeInTheDocument();
    expect(screen.queryByRole('img', { name: /pause screen/i })).not.toBeInTheDocument();
  });

  test('turns the App Store badge into a live link when a URL is set', () => {
    render(<AppStoreBadge url="https://apps.apple.com/app/look-up" />);

    const link = screen.getByRole('link', { name: /app store/i });
    expect(link).toHaveAttribute('href', 'https://apps.apple.com/app/look-up');
    expect(link).toHaveAttribute('target', '_blank');
    expect(screen.queryByText('Coming soon on the App Store.')).not.toBeInTheDocument();
  });

  test('performs the pause after the promise and before the pause copy', () => {
    const { container } = render(<LookUpPage />);
    const text = container.textContent;

    expect(screen.getByText('Notice where you are.')).toBeInTheDocument();
    expect(screen.getByText('I’m putting it down')).toBeInTheDocument();
    expect(screen.getByText('Continue consciously')).toBeInTheDocument();
    expect(screen.queryByText(/the feed was designed/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/hands you back/i)).not.toBeInTheDocument();

    const promise = text.indexOf('A quiet pause when an app pulls you under.');
    const panelLine = text.indexOf('Notice where you are.');
    const pauseBody = text.indexOf('After 20 minutes in one app');
    expect(panelLine).toBeGreaterThan(promise);
    expect(pauseBody).toBeGreaterThan(panelLine);
  });
});

describe('lookup route', () => {
  test('maps the lookup command to /app/lookup and back', () => {
    expect(commandRouteMap.lookup).toBe('/app/lookup');
    expect(routeCommandMap['/app/lookup']).toBe('lookup');
  });

  test('visiting /app/lookup keeps the site menu so visitors can leave', async () => {
    window.history.pushState({}, '', '/app/lookup');
    render(<App />);

    expect(await screen.findByRole('heading', { level: 1, name: 'Look up.' })).toBeVisible();
    expect(screen.getByRole('button', { name: 'Open navigation' })).toBeVisible();
    expect(screen.queryByRole('button', { name: 'James Godwin' })).not.toBeInTheDocument();
  });
});
