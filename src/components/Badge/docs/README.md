# Badge

The Badge component is used to highlight and display short information like status, counts, or labels.

## Features

- Multiple visual variants: default, secondary, destructive, and outline
- Support for icons alongside text
- Ability to render as other elements using asChild prop
- Fully customizable with className prop

## Usage

```tsx
import { Badge } from "@antixuser/antix-ui";

// Basic usage
<Badge>New</Badge>

// Different variants
<Badge variant="secondary">Feature</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Tag</Badge>

// With icon
<Badge icon={<StarIcon className="w-3 h-3" />}>Featured</Badge>

// As a link
<Badge asChild>
  <a href="/new-features">What's New</a>
</Badge>

// With custom styling
<Badge className="px-3 py-1">Custom Styled</Badge>
```

## Props

| Prop      | Type                                                   | Default   | Description                            |
| --------- | ------------------------------------------------------ | --------- | -------------------------------------- |
| variant   | "default" \| "secondary" \| "destructive" \| "outline" | "default" | Visual style of the badge              |
| asChild   | boolean                                                | false     | Whether to render as a child component |
| icon      | ReactNode                                              | undefined | Icon element to display                |
| className | string                                                 | undefined | Additional CSS classes                 |

Plus all standard HTML span attributes.

## Variants

### Default

Primary badge style with background color.

### Secondary

Secondary badge style with different color scheme.

### Destructive

Red/error style badge for warnings or destructive actions.

### Outline

Outlined badge with transparent background.

## Accessibility

- Ensures proper color contrast for readability
- Can be rendered as any element needed for semantic HTML
- Compatible with screen readers
