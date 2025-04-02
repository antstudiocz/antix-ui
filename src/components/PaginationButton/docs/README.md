# PaginationButton

The PaginationButton component is designed for pagination interfaces, providing a consistent way to navigate between pages or sections.

## Features

- Multiple visual variants: default and outline
- Configurable sizes: default, sm, lg, and icon
- Support for icons
- Accessibility features built-in
- Fully customizable with className prop

## Usage

```tsx
import { PaginationButton } from "@antixuser/antix-ui";

// Basic usage
<PaginationButton>Next</PaginationButton>

// With icon
<PaginationButton
  icon={<ArrowRightIcon />}
>
  Next Page
</PaginationButton>

// Different variant and size
<PaginationButton
  variant="outline"
  size="lg"
>
  Previous
</PaginationButton>

// Icon-only button
<PaginationButton
  size="icon"
  aria-label="Next page"
>
  <ArrowRightIcon />
</PaginationButton>
```

## Props

| Prop      | Type                                | Default   | Description                            |
| --------- | ----------------------------------- | --------- | -------------------------------------- |
| variant   | "default" \| "outline"              | "default" | Visual style of the button             |
| size      | "default" \| "sm" \| "lg" \| "icon" | "default" | Size of the button                     |
| asChild   | boolean                             | false     | Whether to render as a child component |
| icon      | ReactNode                           | undefined | Icon element to display                |
| disabled  | boolean                             | false     | Whether the button is disabled         |
| className | string                              | undefined | Additional CSS classes                 |

Plus all standard HTML button attributes.

## Variants

### Default

Primary button style with background color.

### Outline

Secondary button style with outline and transparent background.

## Sizes

- **default**: Standard button size
- **sm**: Small button
- **lg**: Large button
- **icon**: Square button optimized for icon-only usage

## Accessibility

- Includes proper focus states
- Compatible with keyboard navigation
- Supports aria attributes
- Proper disabled states
