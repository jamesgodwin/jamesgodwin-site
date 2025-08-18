# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm start` - Run development server (localhost:3000)
- `npm test` - Run test runner in watch mode
- `npm run build` - Build production version to `build/` folder
- `npm run eject` - Eject from Create React App (irreversible)

## Architecture Overview

This is a personal portfolio site built as a terminal-style interactive React application. The core concept is a command-line interface where users type commands to explore different sections of the site.

### Key Architectural Components

**Terminal Interface System**: The main App.js implements a command parser that maps user inputs to content outputs. Commands are defined in `allCommands` array and handled via switch statement in `executeCommand()`.

**Command Output System**: Each command corresponds to a JavaScript module in `src/outputs/` that exports HTML content as strings. These modules return formatted content that gets rendered via `dangerouslySetInnerHTML`.

**Theme System**: Themes are defined in `src/themes.js` with two main types:
- Basic themes (default/dark): CSS variable-based color schemes
- Image-based themes: Include background images with mobile variants and transition animations

**Voice Recognition**: Integrated Web Speech API for voice commands with natural language parsing to extract valid commands from speech input.

**Background Transitions**: Complex theme switching with fade-in/fade-out transitions when switching between image-based themes.

### File Structure Patterns

- `src/outputs/[command].js` - Content for each terminal command
- `src/components/` - React components (Breathe meditation component)
- `public/images/` - Theme backgrounds and UI icons with dark mode variants
- CSS uses CSS custom properties for theme-based styling

### Command System

Commands are processed through:
1. Input validation against `allCommands` array
2. Autocomplete suggestions based on input prefix
3. Command execution with output rendering
4. Command history navigation (up/down arrows)

Special commands:
- `breathe` - Launches meditation component overlay
- `return` - Easter egg command
- Theme names (default, dark, stillness, etc.) - Direct theme switching
- `unlearn` - Easter egg with special icon

### Content Integration

- ConvertKit integration for email capture (data-uid="0da6b662ba")
- Google Analytics tracking (G-0TCHNH6DEP)
- External links to portfolio projects (AIChing, GratefulFor)

### Styling Architecture

CSS uses a two-tier theming system:
1. CSS custom properties defined for light/dark modes
2. Theme-specific background images with opacity transitions
3. Responsive design with mobile-specific background images

The site maintains a monospace terminal aesthetic with carefully crafted typography and spacing to evoke a command-line environment while remaining visually sophisticated.