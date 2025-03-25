# Antix UI Component Library

Reusable and customizable UI component library for React applications.

## Installation

```bash
npm install @antixuser/antix-ui
# or
yarn add @antixuser/antix-ui
```

## Basic Usage

```jsx
import { Button } from "@antixuser/antix-ui";

function App() {
  return (
    <div>
      <Button
        variant="solid"
        color="primary"
        onClick={() => console.log("Button clicked!")}
      >
        Click me
      </Button>
    </div>
  );
}
```

## Available Components

The library currently includes the following components:

- **[Button](src/components/Button/docs/README.md)** - Button with various variants and styles

## Customization

The library uses CSS variables for easy appearance customization. For more information, see the [styles documentation](src/styles/docs/README.md).

## Examples

Example usage of components can be found in the [`examples/`](examples) directory.

## Development

### Project Structure

The project follows the following structure:

```
src/
  ├── components/     # Individual components
  │   ├── ComponentName/  # Component directory
  │   │   ├── ComponentName.tsx              # Component implementation
  │   │   ├── ComponentName.module.css       # Component styles
  │   │   ├── index.ts                   # Component export
  │   │   └── docs/                      # Component documentation
  │   │       └── README.md              # Usage description and examples
  ├── styles/         # Shared styles
  │   ├── variables.css                  # CSS variables
  │   └── docs/                          # Styles documentation
  └── types/          # Shared types
      └── common.ts                      # Common TypeScript types
```

### Releasing New Versions

For releasing a new version of the library, you have the following commands available:

```bash
# Release with patch version increment (1.1.3 -> 1.1.4)
npm run release:patch

# Release with minor version increment (1.1.3 -> 1.2.0)
npm run release:minor

# Release with major version increment (1.1.3 -> 2.0.0)
npm run release:major
```

Each release command performs the following steps:
1. Build package and examples
2. Version update
3. Publishing to npm
4. Push changes to git
5. Create GitHub release with notes

> **Note:** For creating GitHub releases, you need to have GitHub CLI (`gh`) installed and be logged in using `gh auth login`.

### Conventions

For more information about project conventions and rules, see the [project rules file](.cursor/rules).

## License

MIT
