// src/components/Terminal.js
import React, { useState, useRef, useEffect } from 'react';
import '../Terminal.css'; // Import the CSS file
// Import outputs
import helpOutput from '../outputs/help';
import aboutOutput from '../outputs/about';
import nowOutput from '../outputs/now';
import appsOutput from '../outputs/apps';
import booksOutput from '../outputs/books';
import PortfolioOutput from '../outputs/portfolio';
import uiuxOutput from '../outputs/uiux';
import ContactOutput from '../outputs/contact';
import paintingsOutput from '../outputs/paintings';
import taoismOutput from '../outputs/taoism';
import codeOutput from '../outputs/code';
import themesOutput from '../outputs/themes';

// Define theme styles with desktop and mobile background images
const themes = {
  default: {
    backgroundImage: '/default.webp', // Desktop background image
    backgroundImageMobile: '/default-mobile.webp', // Mobile background image
    textColor: '#d4d4d4',
    inputBackgroundColor: '#292929',
    buttonImage: '/button.svg',
    buttonHoverImage: '/button2.svg',
  },
  snow: {
    backgroundImage: '/snow.webp', // Desktop background image
    backgroundImageMobile: '/snow-mobile.webp', // Mobile background image
    textColor: '#000000',
    inputBackgroundColor: 'rgba(255, 255, 255, 0.3)',
    buttonImage: '/button-snow.svg',
    buttonHoverImage: '/button-snow-hover.svg',
  },
  zen: {
    backgroundImage: '/zen.webp', // Desktop background image
    backgroundImageMobile: '/zen-mobile.webp', // Mobile background image
    textColor: '#000000',
    inputBackgroundColor: 'rgba(210, 210, 210, 0.6)',
    buttonImage: '/button-zen.svg',
    buttonHoverImage: '/button-zen-hover.svg',
  },
  tao: {
    backgroundImage: '/tao.webp', // Desktop background image
    backgroundImageMobile: '/tao-mobile.webp', // Mobile background image
    textColor: '#1E1E1E',
    inputBackgroundColor: 'rgba(255, 255, 255, 0.3)',
    buttonImage: '/button-tao.svg',
    buttonHoverImage: '/button-tao-hover.svg',
  },
  mist: {
    backgroundImage: '/mist.webp', // Desktop background image
    backgroundImageMobile: '/mist-mobile.webp', // Mobile background image
    textColor: '#1E1E1E',
    inputBackgroundColor: 'rgba(255, 255, 255, 0.3)',
    buttonImage: '/button-mist.svg',
    buttonHoverImage: '/button-mist-hover.svg',
  },
  mountain: {
    backgroundImage: '/mountains.webp', // Desktop background image
    backgroundImageMobile: '/mountains-mobile.webp', // Mobile background image
    textColor: '#1E1E1E',
    inputBackgroundColor: 'rgba(255, 255, 255, 0.3)',
    buttonImage: '/button-mountain.svg',
    buttonHoverImage: '/button-mountain-hover.svg',
  },
};

const Terminal = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]); // To store command history
  const [historyIndex, setHistoryIndex] = useState(-1); // To track the current position in the history
  const outputRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false); // Track hover state
  const [theme, setTheme] = useState(themes.default); // Set the initial theme to default

  // Handle user input change
  const handleInputChange = (e) => {
    setCommand(e.target.value);
  };

  // Function to apply the theme styles
  const applyTheme = (theme) => {
    setTheme(theme); // Update the theme state
  };

  // Function to determine the appropriate background image based on screen size
  const getBackgroundImage = () => {
    return window.innerWidth <= 768 ? theme.backgroundImageMobile : theme.backgroundImage;
  };

  // Handle command submission
  const handleCommandSubmit = (e) => {
    e.preventDefault();
    if (!command.trim()) return; // Ignore empty commands

    let newOutput;
    const lowerCaseCommand = command.toLowerCase();

    switch (lowerCaseCommand) {
      case 'help':
        newOutput = helpOutput;
        break;
      case 'about':
        newOutput = aboutOutput;
        break;
      case 'now':
        newOutput = nowOutput;
        break;
      case 'apps':
        newOutput = appsOutput;
        break;
      case 'books':
        newOutput = booksOutput;
        break;
      case 'portfolio':
        newOutput = <PortfolioOutput />; // Render the component directly
        break;
      case 'uiux':
        newOutput = uiuxOutput;
        break;
      case 'contact':
        newOutput = <ContactOutput />; // Render the component directly
        break;
      case 'paintings':
        newOutput = paintingsOutput;
        break;
      case 'taoism':
        newOutput = taoismOutput;
        break;
      case 'code':
        newOutput = codeOutput;
        break;
      case 'themes':
        newOutput = themesOutput;
        break;
      case 'clear':
        setOutput([]);
        setCommand('');
        return;
      case 'snow':
        applyTheme(themes.snow);
        newOutput = 'Theme changed to snow';
        break;
      case 'mist':
        applyTheme(themes.mist);
        newOutput = 'Theme changed to mist';
        break;
      case 'zen':
        applyTheme(themes.zen);
        newOutput = 'Theme changed to zen';
        break;
      case 'tao':
        applyTheme(themes.tao);
        newOutput = 'Theme changed to tao';
        break;
      case 'mountain':
        applyTheme(themes.mountain);
        newOutput = 'Theme changed to mountain';
        break;
      case 'default':
        applyTheme(themes.default);
        newOutput = 'Theme changed to default';
        break;
      default:
        newOutput = `Unknown command: ${command}`;
    }

    // Update the output and reset the command input
    setOutput((prevOutput) => [
      ...prevOutput,
      { type: 'command', text: `> ${command}` },
      { type: 'output', content: newOutput }, // Store as 'content' for components
    ]);

    // Add command to history
    setCommandHistory((prevHistory) => [...prevHistory, command]);
    setHistoryIndex(-1); // Reset history index after a new command is submitted
    setCommand('');
  };

  // Automatically scroll to the latest message
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  // Handle key press events for navigating command history
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]); // Get the previous command
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]); // Get the next command
      } else {
        setHistoryIndex(-1);
        setCommand(''); // Clear the input if at the end of the history
      }
    }
  };

  return (
    <div
      className="terminal-container"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`, // Dynamically set the background image
        color: theme.textColor, // Set the text color based on the current theme
        backgroundSize: 'cover', // Ensure the background image covers the entire container
        transition: 'background 0.5s ease', // Smooth transition for background changes
      }}
    >
      <div className="output-area" ref={outputRef}>
        {output.map((line, index) => (
          <div
            key={index}
            className={line.type === 'command' ? 'output-line command' : 'output-line output'}
          >
            {line.type === 'command' ? (
              <span
                className="command-output"
                style={{
                  backgroundColor: theme.inputBackgroundColor, // Apply the background color to the text only
                  padding: '0 8px', // Add padding around the text
                  borderRadius: '8px', // Rounded corners for the text background
                  display: 'inline-block', // Ensure it wraps only around the text
                  color: theme.textColor, // Consistent text color
                }}
              >
                {line.text}
              </span>
            ) : (
              // Render the content dynamically, whether it's a string or a React component
              <div className="output-content" style={{ color: theme.textColor }}>
                {typeof line.content === 'string' ? (
                  <span dangerouslySetInnerHTML={{ __html: line.content }} />
                ) : (
                  line.content // Render the React component directly
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <form
        className="input-bar"
        onSubmit={handleCommandSubmit}
        style={{
          backgroundColor: theme.inputBackgroundColor, // Set the input background color based on the current theme
        }}
      >
        <input
          type="text"
          value={command}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown} // Handle key press events
          className="input-field"
          placeholder="Message Me"
          autoFocus
          style={{
            color: theme.textColor, // Set the input text color based on the current theme
          }}
        />
        <button
          type="submit"
          className="submit-button"
          style={{
            background: isHovered
              ? `url(${theme.buttonHoverImage}) no-repeat center center`
              : `url(${theme.buttonImage}) no-repeat center center`,
            backgroundSize: 'contain',
            width: '30px',
            height: '30px',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.3s ease',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></button>
      </form>
      <div className="help-text">
        Please type <span className="bold-text">‘help’</span> to view a list of commands.
      </div>
    </div>
  );
};

export default Terminal;