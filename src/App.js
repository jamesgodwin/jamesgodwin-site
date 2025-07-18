// src/App.js
import React, { useState, useEffect, useRef } from 'react';
import './NewSite.css';
import helpOutput from './outputs/help';
import aboutOutput from './outputs/about';
import appsOutput from './outputs/apps';
import booksOutput from './outputs/books';
import contactOutput from './outputs/contact';
import taoismOutput from './outputs/taoism';
import nowOutput from './outputs/now';
import paintingsOutput from './outputs/paintings';
import giftOutput from './outputs/gift';
import philosophyOutput from './outputs/philosophy';
import unlearnOutput from './outputs/unlearn';
import Breathe from './components/Breathe';

function App() {
  const [voiceIcon, setVoiceIcon] = useState('/images/voice-btn.svg');
  const [paletteIcon, setPaletteIcon] = useState('/images/palette-btn.svg');
  const [theme, setTheme] = useState('light');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const terminalInputRef = useRef(null);
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isBreathing, setIsBreathing] = useState(false);

  const allCommands = ['help', 'about', 'now', 'apps', 'books', 'paintings', 'contact', 'taoism', 'themes', 'blog', 'gift', 'philosophy', 'unlearn', 'return', 'breathe'];

  useEffect(() => {
    document.body.className = theme;
    const isLightTheme = theme === 'light';
    setVoiceIcon(isLightTheme ? '/images/voice-btn.svg' : '/images/voice-btn-DM.svg');
    setPaletteIcon(isLightTheme ? '/images/palette-btn.svg' : '/images/palette-btn-DM.svg');
    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }
  }, [theme]);

  useEffect(() => {
    if (output) {
      const getTheBookButton = document.getElementById('get-the-book-gift');
      if (getTheBookButton) {
        getTheBookButton.addEventListener('click', () => {
          closeOutput();
          const convertKitButton = document.querySelector('[data-formkit-toggle="0da6b662ba"]');
          if (convertKitButton) {
            convertKitButton.click();
          }
        });
      }
    }
  }, [output]);

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setIsThemeMenuOpen(false);
  };

  const handleVoiceHover = (isHovering) => {
    const isLightTheme = theme === 'light';
    if (isLightTheme) {
      setVoiceIcon(isHovering ? '/images/voice-btn-hover.svg' : '/images/voice-btn.svg');
    } else {
      setVoiceIcon(isHovering ? '/images/voice-btn-hover-DM.svg' : '/images/voice-btn-DM.svg');
    }
  };

  const handlePaletteHover = (isHovering) => {
    const isLightTheme = theme === 'light';
    if (isLightTheme) {
      setPaletteIcon(isHovering ? '/images/palette-btn-hover.svg' : '/images/palette-btn.svg');
    } else {
      setPaletteIcon(isHovering ? '/images/palette-btn-hover-DM.svg' : '/images/palette-btn-DM.svg');
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setCommand(input);

    if (input.length > 0) {
      const filteredSuggestions = allCommands.filter(cmd =>
        cmd.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setActiveSuggestionIndex(-1); // Reset active suggestion when input changes
    } else {
      setSuggestions([]);
    }
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    let commandToExecute = command.trim();

    if (activeSuggestionIndex !== -1 && suggestions.length > 0) {
      commandToExecute = suggestions[activeSuggestionIndex];
    }

    if (!commandToExecute) return;

    let newOutput;
    const lowerCaseCommand = commandToExecute.toLowerCase();

    switch (lowerCaseCommand) {
      case 'help':
        newOutput = helpOutput;
        break;
      case 'about':
        newOutput = aboutOutput;
        break;
      case 'apps':
        newOutput = appsOutput;
        break;
      case 'books':
        newOutput = booksOutput;
        break;
      case 'gift':
        newOutput = giftOutput;
        break;
      case 'contact':
        newOutput = contactOutput;
        break;
      case 'taoism':
        newOutput = taoismOutput;
        break;
      case 'now':
        newOutput = nowOutput;
        break;
      case 'paintings':
        newOutput = paintingsOutput;
        break;
      case 'philosophy':
        newOutput = philosophyOutput;
        break;
      case 'unlearn':
        newOutput = `<img src="/images/easter-egg.svg" alt="Easter Egg" style="width: 24px; height: 24px; margin-right: 10px; vertical-align: middle;" />${unlearnOutput()}`;
        break;
      case 'return':
        newOutput = `<img src="/images/easter-egg.svg" alt="Easter Egg" style="width: 24px; height: 24px; margin-right: 10px; vertical-align: middle;" />You've never left.`;
        break;
      case 'breathe':
        setCommandHistory((prevHistory) => [...prevHistory, commandToExecute]);
        setCommand('');
        setSuggestions([]);
        setIsBreathing(true);
        return;
      default:
        newOutput = `Unknown command: ${commandToExecute}`;
    }

    setOutput({ command: `> ${commandToExecute}`, content: newOutput });
    setCommandHistory((prevHistory) => [...prevHistory, commandToExecute]);
    setHistoryIndex(-1);
    setCommand('');
    setSuggestions([]); // Clear suggestions after command submission
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault(); // Prevent cursor from moving to the beginning of the input
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        setSuggestions([]); // Clear suggestions when navigating history
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault(); // Prevent cursor from moving to the end of the input
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        setSuggestions([]); // Clear suggestions when navigating history
      } else {
        setHistoryIndex(-1);
        setCommand('');
        setSuggestions([]); // Clear suggestions when navigating history
      }
    } else if (e.key === 'Tab') {
      e.preventDefault(); // Prevent default tab behavior (focusing next element)
      if (suggestions.length > 0) {
        const newIndex = (activeSuggestionIndex + 1) % suggestions.length;
        setActiveSuggestionIndex(newIndex);
        setCommand(suggestions[newIndex]);
      }
    } else if (e.key === 'Enter') {
      // handleCommandSubmit will take care of using the active suggestion
    }
  };

  const closeOutput = () => {
    setOutput(null);
  };

  return (
    <div className="App">
      {isBreathing && <Breathe onEnd={() => setIsBreathing(false)} theme={theme} />}
      {output && (
        <div className="output-overlay" onClick={closeOutput}>
          <div className="output-content-wrapper" onClick={(e) => e.stopPropagation()}>
            <div className="output-command">{output.command}</div>
            <div className="output-response"
              dangerouslySetInnerHTML={typeof output.content === 'string' ? { __html: output.content } : null}>
              {typeof output.content !== 'string' ? output.content : null}
            </div>
            <button onClick={closeOutput} className="close-button">Close</button>
            <div className="output-spacing"></div>
          </div>
        </div>
      )}
      <div className="hero-text">
        Creating Sacred Technology for<br />Seekers of Stillness
      </div>
      <div className="sub-hero-text">
        I build digital sanctuaries — where presence<br />deepens, gratitude awakens, and you return to<br />your true essence.
      </div>
      <div className="content-card">
        <div className="card-title">FREE GIFT FOR THE QUIETLY AWAKENING</div>
        <div className="card-text">
          A year of Taoist reflections and I Ching wisdom —<br />to help you realign, reflect, and return to our true essence.
        </div>
        <a href="#" className="card-button" data-formkit-toggle="0da6b662ba">
          GET THE BOOK <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
        </a>
      </div>
      <div className="section-title">
        MY DIGITAL SANCTUARIES
      </div>
      <div className="cards-container">
        <div className="project-card">
          <div className="project-card-title">AlChing</div>
          <div className="project-card-text">
            A Taoist-inspired AI for navigating the I Ching. Find clarity through ancient insight, reimagined for the present.
          </div>
          <a href="https://aiching.app" target="_blank" rel="noopener noreferrer" className="project-card-link">
            Visit aiching.app <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
          </a>
        </div>
        <div className="project-card">
          <div className="project-card-title">GratefulFor</div>
          <div className="project-card-text">
            A quiet space to cultivate gratitude. A simple, private journal that adds to a shared map — a living pulse of collective appreciation.
          </div>
          <a href="https://gratefulfor.com" target="_blank" rel="noopener noreferrer" className="project-card-link">
            Visit gratefulfor.com <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
          </a>
        </div>
      </div>
      <div className="terminal-bar-wrapper">
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((sugg, index) => (
              <li
                key={sugg}
                className={index === activeSuggestionIndex ? 'active-suggestion' : ''}
              >
                {sugg}
              </li>
            ))}
          </ul>
        )}
        <div className="terminal-bar">
          <img src={theme === 'dark' ? '/images/terminal-DM.svg' : '/images/terminal.svg'} alt="Terminal Icon" className="terminal-icon" />
          <form onSubmit={handleCommandSubmit} style={{ display: 'flex', flexGrow: 1 }}>
            <input
              ref={terminalInputRef}
              type="text"
              value={command}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="type ‘help’ for list of commands."
              className="terminal-input"
              autoFocus
            />
          </form>
          <img
            src={voiceIcon}
            alt="Voice Icon"
            className="voice-button"
            onMouseEnter={() => handleVoiceHover(true)}
            onMouseLeave={() => handleVoiceHover(false)}
          />
          <img
            src={paletteIcon}
            alt="Palette Icon"
            className="palette-button"
            onMouseEnter={() => handlePaletteHover(true)}
            onMouseLeave={() => handlePaletteHover(false)}
            onClick={toggleThemeMenu}
          />
          {isThemeMenuOpen && (
            <div className="theme-menu">
              <button onClick={handleThemeChange}>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
