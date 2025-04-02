# Separator

The Separator component creates a visual or semantic separation between content sections.

## Features

- Horizontal or vertical orientation
- Customizable styling
- Proper accessibility support
- Option for decorative or semantic usage

## Usage

```tsx
import { Separator } from "@antixuser/antix-ui";

// Basic horizontal separator
<Separator />

// Vertical separator
<Separator orientation="vertical" className="h-12" />

// Semantic separator (not decorative)
<Separator decorative={false} />

// With custom styling
<Separator className="my-4 bg-primary-500/20" />

// In a basic layout
<div>
  <h2>Section 1</h2>
  <p>Content for section 1</p>

  <Separator className="my-4" />

  <h2>Section 2</h2>
  <p>Content for section 2</p>
</div>

// As vertical separator between elements
<div className="flex items-center">
  <div>Item 1</div>
  <Separator orientation="vertical" className="mx-2 h-4" />
  <div>Item 2</div>
  <Separator orientation="vertical" className="mx-2 h-4" />
  <div>Item 3</div>
</div>
```

## Props

| Prop        | Type                       | Default      | Description                                |
| ----------- | -------------------------- | ------------ | ------------------------------------------ |
| orientation | "horizontal" \| "vertical" | "horizontal" | Direction of the separator                 |
| decorative  | boolean                    | true         | Whether the separator is purely decorative |
| className   | string                     | undefined    | Additional CSS classes                     |

Plus all standard HTML div attributes.

## Accessibility

- When `decorative={true}` (default), the separator is hidden from screen readers as it's considered purely visual
- When `decorative={false}`, the separator is given the appropriate ARIA role of "separator"
- Proper orientation attributes are applied automatically

## Styling

The separator has these default styles:

- Horizontal: 1px height, full width
- Vertical: Full height, 1px width
- Uses the border color from the theme

You can customize the appearance with additional classes:

```tsx
// Custom color
<Separator className="bg-primary-500" />

// Custom spacing
<Separator className="my-8" />

// Custom size
<Separator className="h-0.5" /> // For horizontal
<Separator orientation="vertical" className="w-0.5" /> // For vertical
```
