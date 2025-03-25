# Antix UI Component Examples

This directory contains example components that demonstrate all possible variants and ways to use Antix UI components.

## Examples Structure

- **ButtonDemo/** - Examples of all button variants
- **ThemeSwitcherDemo/** - Examples of appearance customization using CSS variables
- **LibraryDemo.tsx** - Main application that combines all examples into one interface

## How to Run Examples

### Option 1: Local Development

To run examples locally, execute:

```bash
npm run examples
```

This command will start a development server on port 5173 and automatically open the browser.

> **Note:** Building examples is automatically part of the main package build (`npm run build`).

### Option 2: Using React Environment

Copy the components into your React project and import them:

```jsx
import LibraryDemo from "./examples/LibraryDemo";

function App() {
  return <LibraryDemo />;
}
```

### Option 3: Viewing Individual Examples

You can use each example component separately:

```jsx
import ButtonVariantsDemo from "./examples/ButtonDemo/ButtonVariantsDemo";

function App() {
  return <ButtonVariantsDemo />;
}
```

## What Examples Demonstrate

The examples demonstrate the usage of all components and their variants.