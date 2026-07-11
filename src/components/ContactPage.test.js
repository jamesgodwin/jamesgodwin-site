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

  test('keeps direct contact methods visible and adds the workflow WhatsApp shortcut when relevant', () => {
    render(<ContactPage initialIntent="workflow-system" />);

    expect(screen.getByRole('link', { name: 'WhatsApp James' })).toHaveAttribute('href', 'https://wa.me/27686038834');
    expect(screen.getByRole('link', { name: 'WhatsApp me about a Workflow Audit →' })).toHaveAttribute('href', 'https://wa.me/27686038834');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument();
  });

  test('leads with a confident contact invitation and labels secondary options', () => {
    render(<ContactPage />);

    expect(screen.getByText('Choose the easiest way to reach me. I respond personally.')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('WhatsApp')).toBeInTheDocument();
    expect(screen.getByText('Other ways to connect')).toBeInTheDocument();
  });
});
