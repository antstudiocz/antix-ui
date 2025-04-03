# Antix UI Component Library

Reusable and customizable UI component library for React applications.

## Installation

```bash
npm install @antixuser/antix-ui
# or
yarn add @antixuser/antix-ui
```

## Setup

Make sure you have Tailwind CSS v4 installed in your project, then import our styles in your entry file (e.g. `element.tsx`):

```tsx
import "@antixuser/antix-ui/styles";
```

## Basic Usage

```jsx
import {
  Button,
  ProductCard,
  FilterPanel,
  Carousel,
} from "@antixuser/antix-ui";

function App() {
  const carouselItems = [
    <div
      key="1"
      className="flex aspect-square items-center justify-center p-6 bg-accent"
    >
      <span className="text-4xl font-semibold">1</span>
    </div>,
    <div
      key="2"
      className="flex aspect-square items-center justify-center p-6 bg-accent"
    >
      <span className="text-4xl font-semibold">2</span>
    </div>,
  ];

  return (
    <div>
      <Button
        variant="solid"
        color="primary"
        onClick={() => console.log("Button clicked!")}
      >
        Click me
      </Button>

      <FilterPanel
        sortOptions={[
          { name: "Newest", value: "newest", current: true },
          { name: "Price: Low to High", value: "price-asc", current: false },
        ]}
        filters={[
          {
            id: "category",
            name: "Category",
            options: [
              { value: "electronics", label: "Electronics", checked: false },
              { value: "clothing", label: "Clothing", checked: false },
            ],
          },
        ]}
        onSortChange={(value) => console.log("Sort changed:", value)}
        onFilterChange={(sectionId, value, checked) =>
          console.log("Filter changed:", { sectionId, value, checked })
        }
      />

      <ProductCard
        title="Sample Product"
        price="$99.99"
        image="product-image.jpg"
        badges={["New", "Sale"]}
        onAddToCart={() => console.log("Adding to cart...")}
      />

      <Carousel
        items={carouselItems}
        showNavigation
        autoplay
        autoplayInterval={5000}
      />
    </div>
  );
}
```

## Available Components

The library currently includes the following components:

- **[Badge](src/components/Badge/docs/README.md)** - Display short information like status, counts, or labels
- **[Button](src/components/Button/docs/README.md)** - Button with various variants and styles
- **[Carousel](src/components/Carousel/docs/README.md)** - Carousel for cycling through elements like a slideshow
- **[Checkbox](src/components/Checkbox/docs/README.md)** - Allows users to select one or multiple items
- **[Dialog](src/components/Dialog/docs/README.md)** - Modal dialog for user interaction
- **[FilterPanel](src/components/FilterPanel/docs/README.md)** - Advanced filter panel with sort options, checkboxes, and mobile support
- **[Pagination](src/components/Pagination/docs/README.md)** - Navigation through pages with a clean interface
- **[PaginationButton](src/components/PaginationButton/docs/README.md)** - Button designed for pagination interfaces
- **[Popover](src/components/Popover/docs/README.md)** - Floating panel with contextual information or actions
- **[ProductCard](src/components/ProductCard/docs/README.md)** - Product card component with customizable layout and badges
- **[RadioGroup](src/components/RadioGroup/docs/README.md)** - Allows users to select a single option from a list
- **[Select](src/components/Select/docs/README.md)** - Dropdown select component for choosing from a list
- **[Separator](src/components/Separator/docs/README.md)** - Visual divider between content
- **[Sheet](src/components/Sheet/docs/README.md)** - Slide-in panel from the edge of the screen

## Features

- 🎨 Modern and customizable design
- 🎯 TypeScript support
- 📦 Tree-shakeable
- 🔧 Easy to customize with CSS variables
- 🌐 Responsive components
- ♿ Accessibility built-in
- 🌙 Dark mode support

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
    │   │   ├── ComponentName.tsx  # Implementation
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
