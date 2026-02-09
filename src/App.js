// src/App.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './NewSite.css';
import themes from './themes'; // Import themes
import helpOutput from './outputs/help';
import aboutOutput from './outputs/about';
import appsOutput from './outputs/apps';
import booksOutput from './outputs/books';
import contactOutput from './outputs/contact';
import taoismOutput from './outputs/taoism';
import nowOutput from './outputs/now';
import paintingsOutput from './outputs/paintings';
import sanctuaryOutput from './outputs/sanctuary';
import philosophyOutput from './outputs/philosophy';
import themesOutput from './outputs/themes';
import unlearnOutput from './outputs/unlearn';
import uxuiOutput from './outputs/uxui';
import workshopsOutput from './outputs/workshops';
import servicesOutput from './outputs/services';
import legalOutput from './outputs/legal';
import Breathe from './components/Breathe';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = true;
}

const allCommands = ['help', 'about', 'services', 'workshops', 'apps', 'books', 'sanctuary', 'contact', 'taoism', 'now', 'paintings', 'philosophy', 'uxui', 'legal', 'themes', 'blog', 'unlearn', 'return', 'breathe', 'default', 'dark', 'stillness', 'mountains', 'essence', 'tao', 'zen', 'snow', 'void'];
const commandRouteMap = {
  about: '/about',
  services: '/services',
  workshops: '/workshops',
  apps: '/apps',
  books: '/books',
  contact: '/contact',
  taoism: '/taoism',
  now: '/now',
  paintings: '/paintings',
  philosophy: '/philosophy',
  uxui: '/uxui',
  sanctuary: '/sanctuary',
  legal: '/legal'
};
const routeCommandMap = Object.fromEntries(
  Object.entries(commandRouteMap).map(([cmd, path]) => [path, cmd])
);

function App() {
  const [voiceIcon, setVoiceIcon] = useState('/images/voice-btn.svg');
  const [paletteIcon, setPaletteIcon] = useState('/images/palette-btn.svg');
  const [theme, setTheme] = useState('default');
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState('');
  const [backgroundOpacity, setBackgroundOpacity] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isContentVisible, setIsContentVisible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const terminalInputRef = useRef(null);
  const outputContentWrapperRef = useRef(null);

  const [command, setCommand] = useState('');
  const [output, setOutput] = useState(null);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
  const [isBreathing, setIsBreathing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const navMenuRef = useRef(null);

  const updateURLForCommand = useCallback((cmd) => {
    const path = commandRouteMap[cmd];
    if (path) {
      window.history.pushState({}, '', path);
    } else {
      window.history.pushState({}, '', '/');
    }
  }, []);

  const handleThemeChange = useCallback((newTheme) => {
    if (isTransitioning) return;

    const newThemeObject = themes[newTheme];
    const isNewThemeImageBased = newTheme !== 'default' && newTheme !== 'dark' && newThemeObject && newThemeObject.backgroundImage;

    if (isNewThemeImageBased) {
      setIsTransitioning(true);
      setIsContentVisible(false);

      // If selecting the same theme, force a re-render by briefly changing theme
      const isSameTheme = theme === newTheme;

      setTimeout(() => {
        if (isSameTheme) {
          // Force re-render by setting to empty then back to desired theme
          setTheme('');
          setTimeout(() => setTheme(newTheme), 50);
        } else {
          setTheme(newTheme);
        }
      }, 500);
    } else {
      setTheme(newTheme);
    }
    setIsThemeMenuOpen(false);
  }, [isTransitioning, theme]);

  const executeCommand = useCallback((commandToExecute, options = {}) => {
    const { updateURL = true } = options;
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
      case 'services':
        newOutput = servicesOutput;
        break;
      case 'apps':
        newOutput = appsOutput;
        break;
      case 'books':
        newOutput = booksOutput;
        break;
      case 'sanctuary':
        window.open('https://trueessence.space/', '_blank', 'noopener,noreferrer');
        setOutput(null);
        setCommandHistory((prevHistory) => [...prevHistory, commandToExecute]);
        setHistoryIndex(-1);
        setCommand('');
        setSuggestions([]);

        // If someone navigates directly to /sanctuary, don't leave them stuck on that route.
        if (window.location.pathname.toLowerCase() === '/sanctuary') {
          window.history.replaceState({}, '', '/');
        }

        setTimeout(() => {
          if (terminalInputRef.current) {
            terminalInputRef.current.focus();
          }
        }, 100);
        return;
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
      case 'uxui':
        newOutput = uxuiOutput;
        break;
      case 'workshops':
        newOutput = workshopsOutput;
        break;
      case 'legal':
        newOutput = legalOutput;
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
        setOutput(null);
        return;
      case 'themes':
        newOutput = themesOutput;
        break;
      case 'default':
      case 'dark':
      case 'stillness':
      case 'mountains':
      case 'essence':
      case 'tao':
      case 'zen':
      case 'snow':
      case 'void':
        handleThemeChange(lowerCaseCommand);
        newOutput = `Theme changed to ${lowerCaseCommand}`;
        break;
      default:
        newOutput = `Unknown command: ${commandToExecute}`;
    }

    setOutput({ command: `> ${commandToExecute}`, content: newOutput });
    setCommandHistory((prevHistory) => [...prevHistory, commandToExecute]);
    setHistoryIndex(-1);
    setCommand('');
    setSuggestions([]);
    if (updateURL) {
      updateURLForCommand(lowerCaseCommand);
    }

    // Focus terminal input when output appears
    setTimeout(() => {
      if (terminalInputRef.current) {
        terminalInputRef.current.focus();
      }
    }, 100);
  }, [handleThemeChange, updateURLForCommand]);

  const toggleThemeMenu = () => {
    setIsThemeMenuOpen(!isThemeMenuOpen);
  };

  const handleVoiceClick = () => {
    if (!recognition) {
      alert("Sorry, your browser doesn't support voice recognition.");
      return;
    }

    if (isListening) {
      recognition.stop();
    } else {
      recognition.start();
      setIsListening(true);
    }
  };

  const handleVoiceHover = (isHovering) => {
    if (isListening) return;
    const useDarkUI = theme === 'dark';

    if (isHovering) {
      setVoiceIcon(useDarkUI ? '/images/voice-btn-hover-DM.svg' : '/images/voice-btn-hover.svg');
    } else {
      setVoiceIcon(useDarkUI ? '/images/voice-btn-DM.svg' : '/images/voice-btn.svg');
    }
  };

  const handlePaletteHover = (isHovering) => {
    const useDarkUI = theme === 'dark';

    if (isHovering) {
      setPaletteIcon(useDarkUI ? '/images/palette-btn-hover-DM.svg' : '/images/palette-btn-hover.svg');
    } else {
      setPaletteIcon(useDarkUI ? '/images/palette-btn-DM.svg' : '/images/palette-btn.svg');
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
      setActiveSuggestionIndex(-1);
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

    executeCommand(commandToExecute);

    if (terminalInputRef.current) {
      terminalInputRef.current.blur();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        setSuggestions([]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        setSuggestions([]);
      } else {
        setHistoryIndex(-1);
        setCommand('');
        setSuggestions([]);
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      if (suggestions.length > 0) {
        const newIndex = (activeSuggestionIndex + 1) % suggestions.length;
        setActiveSuggestionIndex(newIndex);
        setCommand(suggestions[newIndex]);
      }
    }
  };

  const closeOutput = () => {
    setOutput(null);
    setIsNavMenuOpen(false);
    window.history.pushState({}, '', '/');
    // Focus the terminal input after closing output
    setTimeout(() => {
      if (terminalInputRef.current) {
        terminalInputRef.current.focus();
      }
    }, 100);
  };

  useEffect(() => {
    if (!isThemeMenuOpen) return;

    function handleClickOutside(event) {
      if (event.target.closest('.theme-menu') || event.target.closest('.palette-button')) {
        return;
      }
      setIsThemeMenuOpen(false);
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isThemeMenuOpen]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isNavMenuOpen) return;

    function handleNavClickOutside(event) {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsNavMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleNavClickOutside);
    return () => document.removeEventListener('mousedown', handleNavClickOutside);
  }, [isNavMenuOpen]);

  useEffect(() => {
    const currentThemeObject = themes[theme];
    const isImageBased = theme !== 'default' && theme !== 'dark' && currentThemeObject && currentThemeObject.backgroundImage;
    let timer;

    document.body.className = theme === 'dark' ? 'dark' : 'default';

    // Add image-based theme class for overlay
    if (isImageBased) {
      document.body.classList.add('image-theme');
      // Add specific theme class for targeted CSS adjustments
      document.body.classList.add(`theme-${theme}`);
    } else {
      document.body.classList.remove('image-theme');
      // Remove any theme-specific classes
      document.body.classList.remove(`theme-${theme}`);
    }

    // Add content-visible class when content is visible
    if (isContentVisible) {
      document.body.classList.add('content-visible');
    } else {
      document.body.classList.remove('content-visible');
    }

    if (isImageBased) {
      const imageUrl = windowWidth <= 768 && currentThemeObject.mobileBackgroundImage
        ? currentThemeObject.mobileBackgroundImage
        : currentThemeObject.backgroundImage;

      setBackgroundImage(`url(${process.env.PUBLIC_URL}/${imageUrl})`);
      setBackgroundOpacity(1);

      timer = setTimeout(() => {
        setIsContentVisible(true);
        setIsTransitioning(false);
      }, 3000);
    } else {
      setBackgroundOpacity(0);
      setIsContentVisible(true);
      setIsTransitioning(false);
    }

    const useDarkIcons = theme === 'dark';
    setVoiceIcon(useDarkIcons ? '/images/voice-btn-DM.svg' : '/images/voice-btn.svg');
    setPaletteIcon(useDarkIcons ? '/images/palette-btn-DM.svg' : '/images/palette-btn.svg');

    if (terminalInputRef.current) {
      terminalInputRef.current.focus();
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [theme, windowWidth, isContentVisible]);

  useEffect(() => {
    if (output) {
      const getTheBookButton = document.getElementById('get-the-book-sanctuary');
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

  useEffect(() => {
    if (output) {
      document.documentElement.classList.add('body-no-scroll');
      document.body.classList.add('body-no-scroll');
      if (outputContentWrapperRef.current) {
        outputContentWrapperRef.current.scrollTop = 0;
      }
    } else {
      document.documentElement.classList.remove('body-no-scroll');
      document.body.classList.remove('body-no-scroll');
    }
  }, [output]);

  useEffect(() => {
    if (!recognition) {
      return;
    }

    const parseCommandFromSentence = (sentence) => {
      const lowerCaseSentence = sentence.toLowerCase();
      for (const cmd of allCommands) {
        const regex = new RegExp(`\\b${cmd}\\b`);
        if (regex.test(lowerCaseSentence)) {
          return cmd;
        }
      }
      return null;
    };

    recognition.onresult = (event) => {
      let interimTranscript = '';
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
          finalTranscript += event.results[i][0].transcript;
        } else {
          interimTranscript += event.results[i][0].transcript;
        }
      }

      const transcript = finalTranscript || interimTranscript;
      setCommand(transcript);

      if (finalTranscript) {
        const parsedCommand = parseCommandFromSentence(finalTranscript);
        if (parsedCommand) {
          executeCommand(parsedCommand);
        } else {
          executeCommand(finalTranscript);
        }
        recognition.stop();
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return () => {
      recognition.onresult = null;
      recognition.onend = null;
    };
  }, [executeCommand]);

  useEffect(() => {
    const normalizePath = (path) => {
      const lower = path.toLowerCase();
      if (lower.endsWith('/') && lower.length > 1) {
        return lower.replace(/\/+$/, '');
      }
      return lower;
    };

    const path = normalizePath(window.location.pathname);
    const commandFromPath = routeCommandMap[path];
    if (commandFromPath) {
      executeCommand(commandFromPath, { updateURL: false });
    }

    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname);
      const cmd = routeCommandMap[newPath];
      if (cmd) {
        executeCommand(cmd, { updateURL: false });
      } else {
        setOutput(null);
        setCommand('');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [executeCommand]);

  return (
    <>
      <div
        className={`background-container ${theme === 'stillness' ? 'stillness-bg' : ''}`}
        style={{
          backgroundImage: backgroundImage,
          opacity: backgroundOpacity
        }}
      />
      <div
        className="App"
        style={{
          opacity: isContentVisible ? 1 : 0,
          transition: 'opacity 0.5s ease-in-out'
        }}
      >
        <div className="nav-menu" ref={navMenuRef}>
          <button
            className="nav-toggle"
            aria-label="Open navigation"
            onClick={() => setIsNavMenuOpen(!isNavMenuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          {isNavMenuOpen && (
            <div className="nav-dropdown">
              {Object.keys(commandRouteMap).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    executeCommand(cmd);
                    setIsNavMenuOpen(false);
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          )}
        </div>
        {isBreathing && <Breathe onEnd={() => setIsBreathing(false)} theme={theme} />}
        {output && (
          <div className="output-overlay" onClick={closeOutput}>
            <div ref={outputContentWrapperRef} className="output-content-wrapper" onClick={(e) => e.stopPropagation()}>
              <div className="output-command">{output.command}</div>
              <div className={`output-response ${output.command === '> help' ? 'help-output' : ''}`}
                dangerouslySetInnerHTML={typeof output.content === 'string' ? { __html: output.content } : null}>
                {typeof output.content !== 'string' ? output.content : null}
              </div>
              <button onClick={closeOutput} className="close-button">Close</button>
              <div className="output-spacing"></div>
            </div>
          </div>
        )}
        <div className="hero-text">
          <span className="desktop-breaks">
            Return to Your True Essence.<br />The Clarity You Seek is Already Within.
          </span>
          <span className="mobile-breaks">
            Return to Your True Essence. The Clarity You Seek is Already Within.
          </span>
        </div>
        <div className="sub-hero-text">
          <span className="desktop-breaks">I create quiet spaces for people ready to return to presence.<br /> Through Taoist practice, somatic work, and sacred technology,<br />I help remove the noise so clarity can emerge.</span>
          <span className="mobile-breaks">I create quiet spaces for people ready to return to presence. Through Taoist practice, somatic work, and sacred technology, I help remove the noise so clarity can emerge.</span>
        </div>
        <div className="content-card">
          <div className="card-title">AN INVITATION TO THE RETURN</div>
          <div className="card-text">Not everything loud is worth hearing.<br />If you feel the pull to come back to yourself,<br />
you are welcome here.
          </div>
          <a
            href="https://trueessence.space/"
            target="_blank"
            rel="noopener noreferrer"
            className="card-button"
          >
            ENTER THE SANCTUARY{' '}
            <img
              src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'}
              alt="Arrow Right"
              className="button-icon"
            />
          </a>
        </div>
        <div className="sanctuary-intro">
          <span><strong>The Digital Sanctuary</strong>: Most technology is designed to extract. This is designed to regulate.<br />A growing collection of quiet digital sanctuaries built to support presence, reflection, and inner coherence.</span>
        </div>
        <div className="sanctuary-cta">
          <a href="https://trueessence.tech/" target="_blank" rel="noopener noreferrer" className="card-button">
            EXPLORE THE SANCTUARIES <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
          </a>
        </div>
        <div className="sanctuary-intro">
          <span><strong>Stillness Under Pressure</strong>: </span>The presence you bring to work shapes the room.<br />I work with founders and teams to regulate their nervous systems, so clarity,<br />grounded leadership, and natural authority can emerge.
        </div>
        <div className="sanctuary-cta">
          <a href="/workshops" className="card-button">
            VIEW THE WORKSHOPS <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
          </a>
        </div>
        <div className="sanctuary-intro">
          <span><strong>The Wisdom of the Body</strong>: </span>Decades of Taoist practice have taught me one simple truth:<br />the body already knows the way. Return to the somatic roots of presence, breath, and movement.
        </div>
        <div className="sanctuary-cta">
          <a href="https://dantian.co.za" target="_blank" rel="noopener noreferrer" className="card-button">
            RETURN TO THE ROOT <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
          </a>
        </div>
        {/* Sanctuaries list removed per request */}
        <div style={{ height: '120px' }} />
        <div className="terminal-bar-wrapper">
          {suggestions.length > 0 && (
            <ul className="suggestions-list">
              {suggestions.map((sugg, index) => (
                <li
                  key={sugg}
                  className={index === activeSuggestionIndex ? 'active-suggestion' : ''}
                  onClick={() => executeCommand(sugg)}
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
              src={isListening ? (theme === 'light' ? '/images/voice-btn-hover.svg' : '/images/voice-btn-hover-DM.svg') : voiceIcon}
              alt="Voice Icon"
              className={`voice-button ${isListening ? 'listening' : ''}`}
              onMouseEnter={() => handleVoiceHover(true)}
              onMouseLeave={() => handleVoiceHover(false)}
              onClick={handleVoiceClick}
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
                <button onClick={() => handleThemeChange('default')}>Default</button>
                <button onClick={() => handleThemeChange('dark')}>Dark</button>
                <button onClick={() => handleThemeChange('stillness')}>Stillness</button>
                <button onClick={() => handleThemeChange('mountains')}>Mountains</button>
                <button onClick={() => handleThemeChange('essence')}>Essence</button>
                <button onClick={() => handleThemeChange('tao')}>Tao</button>
                <button onClick={() => handleThemeChange('zen')}>Zen</button>
                <button onClick={() => handleThemeChange('snow')}>Snow</button>
                <button onClick={() => handleThemeChange('void')}>Void</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
