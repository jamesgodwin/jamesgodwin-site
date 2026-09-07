import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  test('preselects a safe enquiry type without rendering a form', () => {
    render(<ContactPage initialIntent="workshop" />);

    expect(screen.getByText('Current enquiry:')).toBeInTheDocument();
    expect(screen.getByText('Stillness Under Pressure Workshop')).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: 'Send Message →' })).not.toBeInTheDocument();
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
  });

  test('falls back safely to general contact for unknown intents', () => {
    render(<ContactPage initialIntent="something-else" />);

    expect(screen.getByText('General Enquiry')).toBeInTheDocument();
  });

  test('does not expose the legacy command inventory', () => {
    render(<ContactPage />);

    expect(screen.queryByText(/available commands/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/themes \(default, dark/i)).not.toBeInTheDocument();
  });

  test('keeps the main WhatsApp method and Workflow System label without a second shortcut', () => {
    render(<ContactPage initialIntent="workflow-system" />);

    expect(screen.getByText('Workflow System')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'WhatsApp James' })).toHaveAttribute('href', 'https://wa.me/27686038834');
    expect(screen.queryByRole('link', { name: 'WhatsApp me about a Workflow Audit →' })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });

  test('places email and WhatsApp after the intent introduction', () => {
    render(<ContactPage />);

    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Other ways to connect')).toBeInTheDocument();
    expect(screen.queryByText('Choose the easiest way to reach me. I respond personally.')).not.toBeInTheDocument();
  });

  test('labels a product enquiry without adding a response-time promise', () => {
    render(<ContactPage initialIntent="product-clarity" />);

    expect(screen.getByText('Product Clarity')).toBeInTheDocument();
    expect(screen.getByText('Tell me what your product does, where people get stuck and what you want to improve. I respond personally.')).toBeInTheDocument();
    expect(screen.queryByText(/within 24 hours/i)).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'james@jamesgodwin.me' })).toHaveAttribute('href', 'mailto:james@jamesgodwin.me');
    expect(screen.getByRole('link', { name: 'WhatsApp James' })).toBeInTheDocument();
  });

  test('keeps the existing diagnostic response-time wording', () => {
    render(<ContactPage initialIntent="diagnostic" />);

    expect(screen.getByText(/I respond personally within 24 hours/)).toBeInTheDocument();
  });
});
