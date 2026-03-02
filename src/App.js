// src/App.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './NewSite.css';
import themes from './themes'; // Import themes
import helpOutput from './outputs/help';
import aboutOutput from './outputs/about';
import appsOutput from './outputs/apps';
import booksOutput from './outputs/books';
import contactOutput from './outputs/contact';
import diagnosticOutput from './outputs/diagnostic';
import taoismOutput from './outputs/taoism';
import nowOutput from './outputs/now';
import paintingsOutput from './outputs/paintings';
import philosophyOutput from './outputs/philosophy';
import thankYouOutput from './outputs/thankYou';
import themesOutput from './outputs/themes';
import unlearnOutput from './outputs/unlearn';
import uxuiOutput from './outputs/uxui';
import workshopsOutput from './outputs/workshops';
import workshopEnquiryOutput from './outputs/workshopEnquiry';
import legalOutput from './outputs/legal';
import Breathe from './components/Breathe';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

if (recognition) {
  recognition.continuous = true;
  recognition.interimResults = true;
}

const allCommands = ['help', 'diagnostic', 'workshop-enquiry', 'thank-you', 'about', 'workshops', 'apps', 'books', 'sanctuary', 'contact', 'taoism', 'now', 'paintings', 'philosophy', 'uxui', 'legal', 'themes', 'blog', 'unlearn', 'return', 'breathe', 'default', 'dark', 'stillness', 'mountains', 'essence', 'tao', 'zen', 'snow', 'void'];
const commandRouteMap = {
  diagnostic: '/executive-state-diagnostic',
  'workshop-enquiry': '/workshop-enquiry',
  'thank-you': '/thank-you',
  about: '/about',
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
const commandMenuLabels = {
  diagnostic: 'Executive State Diagnostic',
  workshops: 'Stillness Under Pressure Workshops',
  sanctuary: 'True Essence',
  uxui: 'Product Clarity',
  'workshop-enquiry': 'Workshop Enquiry'
};
const pageHeadingLabels = {
  about: 'About',
  apps: 'Apps',
  books: 'Books',
  contact: 'Contact',
  diagnostic: 'Executive State Diagnostic',
  legal: 'Legal',
  now: 'Now',
  paintings: 'Paintings',
  philosophy: 'Philosophy',
  taoism: 'Taoism',
  'workshop-enquiry': 'Workshop Enquiry',
  'thank-you': 'Thank You',
  workshops: 'Stillness Under Pressure',
  uxui: 'Product Clarity'
};
const navMenuItems = [
  'diagnostic',
  'workshops',
  'divider',
  'sanctuary',
  'apps',
  'divider',
  'about',
  'contact',
  'divider',
  'philosophy',
  'taoism',
  'books',
  'uxui',
  'paintings',
  'now',
  'legal'
];
const routeCommandMap = Object.fromEntries(
  Object.entries(commandRouteMap).map(([cmd, path]) => [path, cmd])
);

function App() {
  const showTerminalUI = false;
  const sharedFooterNav = (
    <div className="page-footer-nav">
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">Work</div>
        <ul>
          <li><a href="/executive-state-diagnostic">Executive State Diagnostic</a></li>
          <li><a href="/workshops">Stillness Under Pressure Workshops</a></li>
          <li><a href="https://trueessence.space/" target="_blank" rel="noopener noreferrer">True Essence</a></li>
          <li><a href="/apps">Apps</a></li>
        </ul>
      </div>
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">Writing & Thinking</div>
        <ul>
          <li><a href="/philosophy">Philosophy</a></li>
          <li><a href="/taoism">Taoism</a></li>
          <li><a href="/books">Books</a></li>
        </ul>
      </div>
      <div className="page-footer-nav-group">
        <div className="page-footer-nav-title">About</div>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/uxui">Product Clarity</a></li>
          <li><a href="/paintings">Paintings</a></li>
          <li><a href="/now">Now</a></li>
          <li><a href="/legal">Legal</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
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
  const inlineOutputContent = typeof output?.content === 'string'
    ? output.content.replace(/<hr><p class="commands-text">[\s\S]*$/, '')
    : output?.content;
  const outputTitle = output?.command ? output.command.replace(/^>\s*/, '') : '';
  const normalizedInlineOutputContent = typeof inlineOutputContent === 'string'
    ? inlineOutputContent
      .replace(/<h3(\b[^>]*)>/g, '<h2$1>')
      .replace(/<\/h3>/g, '</h2>')
    : inlineOutputContent;
  const pageHeading = pageHeadingLabels[outputTitle] || commandMenuLabels[outputTitle] || outputTitle;
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
      case 'thank-you':
        newOutput = thankYouOutput;
        break;
      case 'diagnostic':
        newOutput = diagnosticOutput;
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
      case 'workshop-enquiry':
        newOutput = workshopEnquiryOutput;
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
    document.documentElement.classList.remove('body-no-scroll');
    document.body.classList.remove('body-no-scroll');
    if (output) {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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
              {navMenuItems.map((item, index) => (
                item === 'divider' ? (
                  <div key={`${item}-${index}`} className="nav-divider" />
                ) : (
                  <button
                    key={item}
                    onClick={() => {
                      executeCommand(item);
                      setIsNavMenuOpen(false);
                    }}
                  >
                    {commandMenuLabels[item] || item}
                  </button>
                )
              ))}
            </div>
          )}
        </div>
        {isBreathing && <Breathe onEnd={() => setIsBreathing(false)} theme={theme} />}
        {showTerminalUI && output && (
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
        {output ? (
          <section className="home-shell page-content-shell">
            <button onClick={closeOutput} className="page-home-link">← Back to Home</button>
            <div className="page-content-meta">{pageHeading}</div>
            <h1 className="sr-only">{pageHeading}</h1>
            <div
              ref={outputContentWrapperRef}
              className={`page-content-body ${output.command === '> help' ? 'help-output' : ''}`}
            >
              <div dangerouslySetInnerHTML={typeof normalizedInlineOutputContent === 'string' ? { __html: normalizedInlineOutputContent } : null}>
                {typeof normalizedInlineOutputContent !== 'string' ? normalizedInlineOutputContent : null}
              </div>
              {sharedFooterNav}
            </div>
          </section>
        ) : (
          <>
            <section className="home-shell hero-section">
              <div className="hero-text">
                <span className="desktop-breaks">When pressure rises, decision quality drops.</span>
                <span className="mobile-breaks">When pressure rises, decision quality drops.</span>
              </div>
              <div className="hero-supporting">
                Strong leaders do not lose strategy. They lose regulation under stress.
              </div>
              <div className="hero-positioning">
                I help founders and leadership teams make clearer decisions by regulating state first.
              </div>
            </section>
            <section className="home-shell offer-section diagnostic-section">
              <div className="offer-copy">
                <div className="offer-label">Executive State Diagnostic</div>
                <div className="offer-title">A focused 45-minute session for clearer decisions under pressure.</div>
                <div className="offer-text">
                  Identify how pressure is shaping your thinking, communication, and judgement, then leave with practical next steps.
                </div>
                <ul className="offer-list">
                  <li>Identify where stress is reducing judgement</li>
                  <li>Spot repeat patterns under pressure</li>
                  <li>Leave with a practical regulation plan</li>
                </ul>
                <div className="section-actions">
                  <a href="/executive-state-diagnostic" className="card-button primary-button">
                    BOOK AN EXECUTIVE STATE DIAGNOSTIC →
                  </a>
                </div>
              </div>
            </section>
            <section className="home-shell offer-section workshop-section">
              <div className="offer-copy">
                <div className="offer-label">Stillness Under Pressure</div>
                <div className="offer-title">Workshops for leadership teams operating under pressure.</div>
                <div className="offer-text">
                  Teams learn how to reduce reactivity, improve response latency, and make better decisions when the stakes are high.
                </div>
                <ul className="offer-list">
                  <li>Reduce defensive responses</li>
                  <li>Improve communication under pressure</li>
                  <li>Strengthen judgement in tense situations</li>
                </ul>
                <div className="section-actions">
                  <a href="/workshops" className="card-button primary-button">
                    EXPLORE STILLNESS UNDER PRESSURE WORKSHOPS{' '}
                    <img
                      src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'}
                      alt="Arrow Right"
                      className="button-icon"
                    />
                  </a>
                </div>
              </div>
            </section>
            <section className="home-shell secondary-section">
              <div className="offer-copy secondary-offer">
                <div className="offer-label">True Essence</div>
                <div className="offer-title">True Essence is the longer arc of this work.</div>
                <div className="offer-text">
                  Where the workshop stabilises teams, the app reinforces personal regulation over time. It is a daily structure for maintaining clarity when pressure returns.
                </div>
                <div className="section-actions">
                  <a href="https://trueessence.space/" target="_blank" rel="noopener noreferrer" className="card-button primary-button">
                    EXPLORE TRUE ESSENCE →
                  </a>
                </div>
              </div>
            </section>
            <section className="home-shell secondary-section">
              <div className="offer-copy secondary-offer">
                <div className="offer-label">Thirty Years of Practice</div>
                <div className="offer-title">This work is grounded in three decades of Tai Chi and breath training.</div>
                <div className="offer-text">
                  Not as philosophy, but as applied regulation. When the body settles, perception sharpens. When perception sharpens, decisions improve.
                </div>
                <div className="section-actions">
                  <a href="https://dantian.co.za" target="_blank" rel="noopener noreferrer" className="card-button secondary-button">
                    LEARN ABOUT THE PRACTICE{' '}
                    <img src={theme === 'dark' ? '/images/arrow-right-DM.svg' : '/images/arrow-right.svg'} alt="Arrow Right" className="button-icon" />
                  </a>
                </div>
              </div>
            </section>
            <div style={{ height: '90px' }} />
          </>
        )}
        {showTerminalUI && (
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
        )}
      </div>
    </>
  );
}

export default App;
