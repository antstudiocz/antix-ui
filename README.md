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
import { Button, ProductCard } from "@antixuser/antix-ui";

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

      <ProductCard
        title="Sample Product"
        price="$99.99"
        image="product-image.jpg"
        badges={["New", "Sale"]}
        onAddToCart={() => console.log("Adding to cart...")}
      />
    </div>
  );
}
```

## Available Components

The library currently includes the following components:

- **[Button](src/components/Button/docs/README.md)** - Button with various variants and styles
- **[ProductCard](src/components/ProductCard/docs/README.md)** - Product card component with customizable layout and badges

## Features

- 🎨 Modern and customizable design
- 🎯 TypeScript support
- 📦 Tree-shakeable
- 🔧 Easy to customize with CSS variables

## Customization

The library uses CSS variables for easy appearance customization. For more information, see the [styles documentation](src/styles/docs/README.md).

## Examples

Example usage of components can be found in the [`examples/`](examples) directory.

## Development

### Project Structure

The project follows the following structure:

```
antix-ui/
├── dist/                # Build output
├── dist-examples/       # Examples build output
├── examples/            # Example implementations
│   ├── ButtonDemo/      # Button component demo
│   ├── ProductCardDemo/ # ProductCard component demo
│   └── ...
├── src/
    ├── components/      # Individual components
    │   ├── ComponentName/   # Component directory
    │   │   ├── __tests__/      # Component tests
    │   │   │   ├── ComponentName.test.tsx
    │   │   │   └── ComponentName.snapshot.test.tsx
    │   │   │   └── README.md
    │   │   ├── docs/           # Component documentation
    │   │   │   └── README.md   # Usage and examples
    │   │   ├── ComponentName.tsx        # Implementation
    │   │   ├── ComponentName.module.css  # Styles
    ├── styles/          # Shared styles
    │   ├── foundations/ # Core styles (colors, typography, etc.)
    │   │   ├── borders.css
    │   │   ├── colors.css
    │   │   ├── typography.css
    │   │   └── ...
    │   └── docs/       # Styles documentation
    └── types/          # Shared TypeScript types
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

Copyright (c) [2025] ANT Studio s.r.o. All rights reserved.

This software is proprietary and confidential. Unauthorized copying, distribution, modification, public display, public performance, or creating derivative works of the Software is strictly prohibited. The Software can only be used in accordance with the agreement with ANT Studio s.r.o.
