import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App navigation', () => {
  beforeEach(() => {
    window.history.replaceState({}, '', '/');
  });

  test('opens Browse on Product Clarity and returns focus on Escape', () => {
    render(<App />);

    const browse = screen.getByRole('button', { name: 'Browse without answering' });
    fireEvent.click(browse);

    expect(screen.getByRole('button', { name: 'Product Clarity' })).toHaveFocus();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByRole('button', { name: 'Product Clarity' })).not.toBeInTheDocument();
    expect(browse).toHaveFocus();
  });
});
