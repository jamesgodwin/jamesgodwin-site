
import React, { useState, useEffect, useRef } from 'react';
import './Breathe.css';

const Breathe = ({ onEnd, theme }) => {
  const [phase, setPhase] = useState('start');

  useEffect(() => {
    requestAnimationFrame(() => {
      setPhase('in');
    });

    const cycle = ['in', 'hold1', 'out', 'hold2'];
    const durations = { in: 4000, hold1: 4000, out: 6000, hold2: 2000 };
    let currentPhaseIndex = 0;

    const nextPhase = () => {
      currentPhaseIndex = (currentPhaseIndex + 1) % cycle.length;
      const newPhase = cycle[currentPhaseIndex];
      setPhase(newPhase);
      setTimeout(nextPhase, durations[newPhase]);
    };

    const timer = setTimeout(nextPhase, durations.in);

    return () => clearTimeout(timer);
  }, []);

  const getPhaseText = () => {
    switch (phase) {
      case 'in':
        return 'Breathe In';
      case 'hold1':
      case 'hold2':
        return 'Hold';
      case 'out':
        return 'Breathe Out';
      default:
        return '';
    }
  };

  const circleStyle = {
    borderColor: theme === 'light' ? 'var(--hero-text)' : 'var(--hero-text)',
  };

  return (
    <div className="breathe-overlay" onClick={onEnd}>
      <div className={`breathe-circle ${phase}`} style={circleStyle}></div>
      <div className="breathe-text">{getPhaseText()}</div>
    </div>
  );
};

export default Breathe;
