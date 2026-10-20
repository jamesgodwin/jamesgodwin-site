// src/App.js
import React, { useState, useEffect, useRef, useCallback } from 'react';
import './NewSite.css';
import themes from './themes'; // Import themes
import helpOutput from './outputs/help';
import aboutOutput from './outputs/about';
import appsOutput from './outputs/apps';
import booksOutput from './outputs/books';
import littlePandaOutput from './outputs/littlePanda';
import diagnosticOutput from './outputs/diagnostic';
import taoismOutput from './outputs/taoism';
import nowOutput from './outputs/now';
import paintingsOutput from './outputs/paintings';
import philosophyOutput from './outputs/philosophy';
import thankYouOutput from './outputs/thankYou';
import themesOutput from './outputs/themes';
import unlearnOutput from './outputs/unlearn';
import uxuiOutput from './outputs/uxui';
import systemsOutput from './outputs/systems';
import workshopsOutput from './outputs/workshops';
import legalOutput from './outputs/legal';
import Breathe from './components/Breathe';
import ContactPage from './components/ContactPage';
import PressureEncounter from './components/PressureEncounter';
import RoutePage from './components/RoutePage';
import { getContactPath, resolveContactIntent } from './contactIntent';
import pagePresentation from './pagePresentation';
import siteMetadata from './siteMetadata';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const allCommands = ['help', 'diagnostic', 'systems', 'workshop-enquiry', 'thank-you', 'about', 'workshops', 'apps', 'books', 'little-panda', 'sanctuary', 'contact', 'taoism', 'now', 'paintings', 'philosophy', 'uxui', 'legal', 'themes', 'blog', 'unlearn', 'return', 'breathe', 'default', 'dark', 'stillness', 'mountains', 'essence', 'tao', 'zen', 'snow', 'void'];
const commandRouteMap = {
  diagnostic: '/executive-state-diagnostic',
  systems: '/systems',
  'workshop-enquiry': '/workshop-enquiry',
  'thank-you': '/thank-you',
  about: '/about',
  workshops: '/workshops',
  apps: '/apps',
  books: '/books',
  'little-panda': '/little-panda',
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
  about: 'About',
  apps: 'Apps',
  books: 'Books',
  contact: 'Contact',
  diagnostic: 'Executive State Diagnostic',
  legal: 'Legal',
  'little-panda': 'Little Panda',
  now: 'Now',
  paintings: 'Paintings',
  philosophy: 'Philosophy',
  taoism: 'Taoism',
  workshops: 'Stillness Under Pressure Workshops',
  sanctuary: 'True Essence',
  systems: 'Workflow Systems',
  uxui: 'Product Clarity',
  'workshop-enquiry': 'Workshop Enquiry'
};
const pageHeadingLabels = {
  about: 'About',
  apps: 'Apps',
  books: 'Books',
  'little-panda': 'Little Panda Tao Stories',
  contact: 'Contact',
  diagnostic: 'Executive State Diagnostic',
  legal: 'Legal',
  now: 'Now',
  paintings: 'Paintings',
  philosophy: 'Philosophy',
  taoism: 'Taoism',
  'workshop-enquiry': 'Contact',
  'thank-you': 'Thank You',
  workshops: 'Stillness Under Pressure',
  systems: 'Simple Workflow Systems',
  uxui: 'Product Clarity'
};
const navMenuItems = [
  'uxui',
  'systems',
  'apps',
  'divider',
  'diagnostic',
  'workshops',
  'sanctuary',
  'taoism',
  'divider',
  'about',
  'now',
  'contact',
  'divider',
  'philosophy',
  'books',
  'little-panda',
  'paintings',
  'legal'
];
const routeCommandMap = Object.fromEntries(
  Object.entries(commandRouteMap).map(([cmd, path]) => [path, cmd])
);
const { getMetadataForCommand } = siteMetadata;

const upsertMetaTag = (attribute, key, content) => {
  if (!content) return;

  let element = document.head.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const applyPageMetadata = (metadata) => {
  document.title = metadata.title;
  upsertMetaTag('name', 'description', metadata.description);
  upsertMetaTag('property', 'og:type', 'website');
  upsertMetaTag('property', 'og:title', metadata.title);
  upsertMetaTag('property', 'og:description', metadata.description);
  upsertMetaTag('property', 'og:image', metadata.image);
  upsertMetaTag('property', 'og:url', metadata.url);
  upsertMetaTag('name', 'twitter:card', 'summary_large_image');
  upsertMetaTag('name', 'twitter:title', metadata.title);
  upsertMetaTag('name', 'twitter:description', metadata.description);
  upsertMetaTag('name', 'twitter:image', metadata.twitterImage || metadata.image);
  upsertMetaTag('name', 'twitter:url', metadata.url);
};

function App() {
  const showTerminalUI = false;
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
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const navMenuRef = useRef(null);
  const navFirstItemRef = useRef(null);
  const navReturnFocusRef = useRef(null);
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
    const path = cmd === 'workshop-enquiry' ? getContactPath('workshop') : commandRouteMap[cmd];
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

    const lowerCaseCommand = commandToExecute.toLowerCase();
    let newOutput;
    let renderedCommand = lowerCaseCommand;

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
      case 'little-panda':
        newOutput = littlePandaOutput;
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
        newOutput = <ContactPage initialIntent={resolveContactIntent({
          search: window.location.search,
          fromInAppNavigation: updateURL
        })} />;
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
      case 'systems':
        newOutput = systemsOutput;
        break;
      case 'workshops':
        newOutput = workshopsOutput;
        break;
      case 'workshop-enquiry':
        renderedCommand = 'contact';
        newOutput = <ContactPage initialIntent="workshop" />;
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

    setOutput({ command: `> ${renderedCommand}`, content: newOutput });
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
    applyPageMetadata(getMetadataForCommand(outputTitle));
  }, [outputTitle]);

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

    navFirstItemRef.current?.focus();

    function handleNavClickOutside(event) {
      if (navMenuRef.current && !navMenuRef.current.contains(event.target)) {
        setIsNavMenuOpen(false);
      }
    }

    function handleNavKeyDown(event) {
      if (event.key !== 'Escape') return;

      setIsNavMenuOpen(false);
      navReturnFocusRef.current?.focus();
    }

    document.addEventListener('mousedown', handleNavClickOutside);
    document.addEventListener('keydown', handleNavKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleNavClickOutside);
      document.removeEventListener('keydown', handleNavKeyDown);
    };
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

    setPaletteIcon(theme === 'dark' ? '/images/palette-btn-DM.svg' : '/images/palette-btn.svg');

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
    const normalizePath = (path) => {
      const lower = path.toLowerCase();
      if (lower.endsWith('/') && lower.length > 1) {
        return lower.replace(/\/+$/, '');
      }
      return lower;
    };

    let path = normalizePath(window.location.pathname);
    let hasHandledInitialPath = false;
    if (path === '/workshop-enquiry') {
      window.history.replaceState({}, '', getContactPath('workshop'));
      executeCommand('workshop-enquiry', { updateURL: false });
      hasHandledInitialPath = true;
    }

    const commandFromPath = routeCommandMap[path];
    if (!hasHandledInitialPath && commandFromPath) {
      executeCommand(commandFromPath, { updateURL: false });
    }

    const handlePopState = () => {
      const newPath = normalizePath(window.location.pathname);
      if (newPath === '/workshop-enquiry') {
        window.history.replaceState({}, '', getContactPath('workshop'));
        executeCommand('workshop-enquiry', { updateURL: false });
        return;
      }

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
            aria-expanded={isNavMenuOpen}
            aria-controls="site-navigation"
            onClick={(event) => {
              if (!isNavMenuOpen) {
                navReturnFocusRef.current = event.currentTarget;
              }
              setIsNavMenuOpen(!isNavMenuOpen);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          {isNavMenuOpen && (
            <div className="nav-dropdown" id="site-navigation">
              {navMenuItems.map((item, index) => (
                item === 'divider' ? (
                  <div key={`${item}-${index}`} className="nav-divider" />
                ) : (
                  <button
                    key={item}
                    ref={index === 0 ? navFirstItemRef : undefined}
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
        <button type="button" className="site-wordmark" onClick={closeOutput}>
          James Godwin
        </button>
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
          <RoutePage
            command={outputTitle}
            heading={pageHeading}
            content={normalizedInlineOutputContent}
            presentation={pagePresentation[outputTitle]}
            onBack={closeOutput}
            isHelp={output.command === '> help'}
          />
        ) : (
          <PressureEncounter
            onNavigate={executeCommand}
            onBrowse={(invoker) => {
              navReturnFocusRef.current = invoker;
              setIsNavMenuOpen(true);
            }}
          />
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
