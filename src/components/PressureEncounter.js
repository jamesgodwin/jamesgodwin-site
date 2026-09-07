import React, { useEffect, useRef, useState } from 'react';

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
    body: 'A product can technically work while people still struggle to use it. A business can keep moving because one person remembers every handoff. Both are reasons to look at how the work is structured.',
    nextMove: 'Name one task that needs an explanation, a workaround, or someone chasing it through.',
    command: 'uxui',
    action: 'Explore Product Clarity',
    secondaryCommand: 'systems',
    secondaryAction: 'Explore Workflow Systems'
  }
};

function PressureEncounter({
  onNavigate = () => {},
  onBrowse = () => {}
}) {
  const [selectedPath, setSelectedPath] = useState(null);
  const lastSelectedPathRef = useRef(null);
  const reflectionHeadingRef = useRef(null);
  const choiceRefs = useRef({});
  const reflection = selectedPath ? reflections[selectedPath] : null;

  useEffect(() => {
    if (selectedPath) {
      reflectionHeadingRef.current?.focus();
      return;
    }

    if (lastSelectedPathRef.current) {
      choiceRefs.current[lastSelectedPathRef.current]?.focus();
    }
  }, [selectedPath]);

  const selectPath = (path) => {
    lastSelectedPathRef.current = path;
    setSelectedPath(path);
  };

  if (reflection) {
    return (
      <main className="pressure-encounter pressure-encounter--reflection">
        <div className="pressure-reflection">
          <p className="pressure-reflection__label">{reflection.label}</p>
          <h1 ref={reflectionHeadingRef} tabIndex="-1">{reflection.title}</h1>
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
            {reflection.secondaryCommand && (
              <button type="button" onClick={() => onNavigate(reflection.secondaryCommand)}>
                {reflection.secondaryAction}
              </button>
            )}
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
        <h1>Products and workflows, working cleanly.</h1>
        <p className="pressure-encounter__positioning">I help founders and teams close UX, accessibility and implementation gaps in fast-built and AI-assisted products.</p>
        <p className="pressure-encounter__practice">Twenty years in UX, product strategy and design systems, shaped by thirty years of Tai Chi practice.</p>
        <nav className="pressure-encounter__work-links" aria-label="Ways to work with James">
          <a href="/uxui">
            <strong>Product Clarity</strong>
            <span>UX review and implementation</span>
          </a>
          <a href="/systems">
            <strong>Workflow Systems</strong>
            <span>Operational workflow design and build</span>
          </a>
        </nav>
        <aside className="pressure-encounter__proof" aria-label="Recent delivery example">
          <p className="pressure-encounter__proof-label">Recent delivery</p>
          <p>In client feedback, the owner said an operational app I built gave supervisors clearer visibility into to-dos, quality control and measurements. <a href="/systems#client-example">See the example</a>.</p>
        </aside>
      </div>

      <div className="pressure-encounter__reflection-intro">
        <h2>Pressure rarely stays where it begins.</h2>
        <p>It moves through the person, the room, and the work.</p>
      </div>
      <div className="pressure-encounter__prompt">
        <p>Where is it showing up?</p>
      </div>

      <div className="pressure-encounter__rings" aria-label="Choose where the pressure is showing up">
        <img src="/images/pressure-rings.png" alt="" aria-hidden="true" />
        <button ref={(node) => { choiceRefs.current.work = node; }} type="button" onClick={() => selectPath('work')}>In the work</button>
        <button ref={(node) => { choiceRefs.current.team = node; }} type="button" onClick={() => selectPath('team')}>In a team</button>
        <button ref={(node) => { choiceRefs.current.self = node; }} type="button" onClick={() => selectPath('self')}>In me</button>
      </div>

      <button ref={(node) => { choiceRefs.current.explore = node; }} type="button" className="pressure-encounter__explore" onClick={() => selectPath('explore')}>
        I am only exploring
      </button>

      <button type="button" className="pressure-encounter__browse" onClick={(event) => onBrowse(event.currentTarget)}>
        Browse without answering
      </button>
    </main>
  );
}

export default PressureEncounter;
