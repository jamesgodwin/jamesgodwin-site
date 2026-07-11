import React, { useState } from 'react';

const reflections = {
  explore: {
    label: 'Exploring',
    title: 'You do not need a problem to begin.',
    body: 'Follow what catches your attention. The work ranges from leadership state and team pressure to practical systems, software, Taoist practice, and things made for the pleasure of making them.',
    nextMove: 'Notice which thread feels alive before deciding what it is for.',
    command: 'about',
    action: 'Meet James'
  },
  self: {
    label: 'In me',
    title: 'The pressure may be changing what you can see.',
    body: 'Before adding another strategy, notice what has tightened: your breath, your pace, or the range of options you can perceive.',
    nextMove: 'Let your next decision wait for one unforced exhale.',
    command: 'diagnostic',
    action: 'Explore the Executive State Diagnostic'
  },
  team: {
    label: 'In a team',
    title: 'Pressure moves through a room before anyone names it.',
    body: 'A shortened breath, a faster reply, or a defensive silence can become the team’s operating rhythm.',
    nextMove: 'Before the next response, leave one breath of space in the room.',
    command: 'workshops',
    action: 'Explore Stillness Under Pressure'
  },
  work: {
    label: 'In the work',
    title: 'When the system holds pressure, people become the workaround.',
    body: 'Repeated re-entry, scattered context, and the owner acting as glue are often system signals, not effort problems.',
    nextMove: 'Name the one piece of work that depends on someone remembering what happens next.',
    command: 'systems',
    action: 'Explore Workflow Systems'
  }
};

function PressureEncounter({
  onNavigate = () => {},
  onBrowse = () => {}
}) {
  const [selectedPath, setSelectedPath] = useState(null);
  const reflection = selectedPath ? reflections[selectedPath] : null;

  if (reflection) {
    return (
      <main className="pressure-encounter pressure-encounter--reflection" aria-live="polite">
        <div className="pressure-reflection">
          <p className="pressure-reflection__label">{reflection.label}</p>
          <h1>{reflection.title}</h1>
          <p className="pressure-reflection__body">{reflection.body}</p>
          <div className="pressure-reflection__pause">
            <span aria-hidden="true">01</span>
            <p>{reflection.nextMove}</p>
          </div>
          <div className="pressure-reflection__actions">
            <button
              type="button"
              className="pressure-reflection__primary"
              onClick={() => onNavigate(reflection.command)}
            >
              {reflection.action}
            </button>
            <button type="button" onClick={() => onNavigate('contact')}>Talk to James</button>
            <button type="button" onClick={() => setSelectedPath(null)}>Begin again</button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="pressure-encounter">
      <div className="pressure-encounter__intro">
        <h1>Pressure rarely stays where it begins.</h1>
        <p>It moves through the person, the room, and the work.</p>
      </div>

      <div className="pressure-encounter__prompt">
        <p>Where is it showing up?</p>
      </div>

      <div className="pressure-encounter__rings" aria-label="Choose where the pressure is showing up">
        <img src="/images/pressure-rings.png" alt="" aria-hidden="true" />
        <button type="button" onClick={() => setSelectedPath('work')}>In the work</button>
        <button type="button" onClick={() => setSelectedPath('team')}>In a team</button>
        <button type="button" onClick={() => setSelectedPath('self')}>In me</button>
      </div>

      <button type="button" className="pressure-encounter__explore" onClick={() => setSelectedPath('explore')}>
        I am only exploring
      </button>

      <button type="button" className="pressure-encounter__browse" onClick={onBrowse}>
        Browse without answering
      </button>
    </main>
  );
}

export default PressureEncounter;
