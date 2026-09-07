import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PressureEncounter from './PressureEncounter';

describe('PressureEncounter', () => {
  test('offers the approved opening and four dependable starting paths', () => {
    render(<PressureEncounter onNavigate={() => {}} />);

    expect(
      screen.getByRole('heading', { level: 1, name: 'Products and workflows, working cleanly.' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 2, name: 'Pressure rarely stays where it begins.' })
    ).toBeInTheDocument();
    expect(screen.getByText('It moves through the person, the room, and the work.')).toBeInTheDocument();
    expect(screen.getByText('Where is it showing up?')).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'In me' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'In a team' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'In the work' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'I am only exploring' })).toBeInTheDocument();
  });

  test('lets a visitor reach product work without entering a reflection', () => {
    render(<PressureEncounter onNavigate={() => {}} />);

    expect(
      screen.getByText('I help founders and teams close UX, accessibility and implementation gaps in fast-built and AI-assisted products.')
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Product Clarity.*UX review and implementation/i })).toHaveAttribute('href', '/uxui');
    expect(screen.getByRole('link', { name: /Workflow Systems.*Operational workflow design and build/i })).toHaveAttribute('href', '/systems');

    expect(screen.getByText('Recent delivery')).toBeInTheDocument();
    expect(screen.getByText(/in client feedback, the owner said an operational app I built gave supervisors clearer visibility/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See the example' })).toHaveAttribute(
      'href',
      '/systems#client-example'
    );

    const workLinks = screen.getByLabelText('Ways to work with James');
    const proof = screen.getByLabelText('Recent delivery example');
    const rings = screen.getByLabelText('Choose where the pressure is showing up');
    expect(workLinks.compareDocumentPosition(proof) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(proof.compareDocumentPosition(rings) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test('turns the team choice into an authored reflection and relevant route', () => {
    const onNavigate = jest.fn();
    render(<PressureEncounter onNavigate={onNavigate} />);

    fireEvent.click(screen.getByRole('button', { name: 'In a team' }));

    expect(
      screen.getByRole('heading', { name: 'Pressure moves through a room before anyone names it.' })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/a shortened breath, a faster reply, or a defensive silence/i)
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Explore Stillness Under Pressure' }));
    expect(onNavigate).toHaveBeenCalledWith('workshops');
  });

  test('turns the personal choice into a state reflection and diagnostic route', () => {
    const onNavigate = jest.fn();
    render(<PressureEncounter onNavigate={onNavigate} />);

    fireEvent.click(screen.getByRole('button', { name: 'In me' }));

    expect(
      screen.getByRole('heading', { name: 'The pressure may be changing what you can see.' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Explore the Executive State Diagnostic' }));
    expect(onNavigate).toHaveBeenCalledWith('diagnostic');
  });

  test('turns the work choice into product and workflow routes', () => {
    const onNavigate = jest.fn();
    render(<PressureEncounter onNavigate={onNavigate} />);

    fireEvent.click(screen.getByRole('button', { name: 'In the work' }));

    expect(
      screen.getByRole('heading', { name: 'When the system holds pressure, people become the workaround.' })
    ).toBeInTheDocument();
    expect(screen.getByText(/a product can technically work while people still struggle to use it/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Explore Product Clarity' }));
    expect(onNavigate).toHaveBeenCalledWith('uxui');

    fireEvent.click(screen.getByRole('button', { name: 'Explore Workflow Systems' }));
    expect(onNavigate).toHaveBeenCalledWith('systems');
  });

  test('lets a curious visitor explore without inventing a problem', () => {
    const onNavigate = jest.fn();
    render(<PressureEncounter onNavigate={onNavigate} />);

    fireEvent.click(screen.getByRole('button', { name: 'I am only exploring' }));

    expect(
      screen.getByRole('heading', { name: 'You do not need a problem to begin.' })
    ).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: 'Meet James' }));
    expect(onNavigate).toHaveBeenCalledWith('about');
  });

  test('keeps the opening choice-first without a text or voice input', () => {
    render(<PressureEncounter onNavigate={() => {}} />);

    expect(screen.queryByRole('textbox')).not.toBeInTheDocument();
    expect(screen.queryByText(/type breathe/i)).not.toBeInTheDocument();
    expect(screen.queryByRole('button', { name: /speak what you are noticing/i })).not.toBeInTheDocument();
  });

  test('places the prompt above the circles and exploration below them', () => {
    render(<PressureEncounter onNavigate={() => {}} />);

    const prompt = screen.getByText('Where is it showing up?');
    const rings = screen.getByLabelText('Choose where the pressure is showing up');
    const explore = screen.getByRole('button', { name: 'I am only exploring' });

    expect(prompt.compareDocumentPosition(rings) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(rings.compareDocumentPosition(explore) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  test('moves focus into a reflection and returns it to the initiating choice', () => {
    render(<PressureEncounter onNavigate={() => {}} />);

    const startingChoice = screen.getByRole('button', { name: 'In me' });
    fireEvent.click(startingChoice);
    expect(screen.getByRole('heading', { name: 'The pressure may be changing what you can see.' })).toHaveFocus();
    expect(screen.getByRole('main')).not.toHaveAttribute('aria-live');

    fireEvent.click(screen.getByRole('button', { name: 'Begin again' }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'Products and workflows, working cleanly.' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'In me' })).toHaveFocus();
  });
});
