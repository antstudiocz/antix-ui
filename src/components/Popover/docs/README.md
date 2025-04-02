# Popover

The Popover component displays floating content when a trigger element is clicked, providing contextual information or actions.

## Features

- Floating content that appears on trigger click
- Configurable positioning and alignment
- Animated transitions
- Accessible design with keyboard support
- Custom anchoring capabilities

## Usage

```tsx
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@antixuser/antix-ui";

// Basic usage
<Popover>
  <PopoverTrigger>Open Popover</PopoverTrigger>
  <PopoverContent>
    <p>This is the popover content.</p>
  </PopoverContent>
</Popover>

// With custom alignment and offset
<Popover>
  <PopoverTrigger>Open Aligned Popover</PopoverTrigger>
  <PopoverContent align="start" sideOffset={10}>
    <p>This popover is aligned to the start with a 10px offset.</p>
  </PopoverContent>
</Popover>

// Using a custom anchor element
<Popover>
  <PopoverAnchor>
    <div className="w-40 h-20 bg-secondary-300 flex items-center justify-center">
      Anchor Element
    </div>
  </PopoverAnchor>
  <PopoverTrigger>Open Anchored Popover</PopoverTrigger>
  <PopoverContent>
    <p>This popover is anchored to the element above instead of the trigger.</p>
  </PopoverContent>
</Popover>

// Controlled popover
const [open, setOpen] = useState(false);

<Popover open={open} onOpenChange={setOpen}>
  <PopoverTrigger>Open Controlled Popover</PopoverTrigger>
  <PopoverContent>
    <p>This popover's state is controlled externally.</p>
    <button onClick={() => setOpen(false)}>Close</button>
  </PopoverContent>
</Popover>

// Custom trigger with asChild
<Popover>
  <PopoverTrigger asChild>
    <button className="px-4 py-2 bg-primary-500 text-white rounded-md">
      Custom Trigger Button
    </button>
  </PopoverTrigger>
  <PopoverContent>
    <p>This popover has a custom trigger button.</p>
  </PopoverContent>
</Popover>
```

## Components and Props

### Popover

Root component that manages the popover state.

| Prop         | Type                    | Default   | Description                                                                 |
| ------------ | ----------------------- | --------- | --------------------------------------------------------------------------- |
| open         | boolean                 | undefined | Whether the popover is open (controlled)                                    |
| defaultOpen  | boolean                 | undefined | Whether the popover is open by default (uncontrolled)                       |
| onOpenChange | (open: boolean) => void | undefined | Function called when the open state changes                                 |
| modal        | boolean                 | false     | Whether the popover should block interaction with other elements while open |

### PopoverTrigger

Button that triggers the popover.

| Prop      | Type    | Default   | Description                                |
| --------- | ------- | --------- | ------------------------------------------ |
| asChild   | boolean | false     | Whether to render the child as the trigger |
| className | string  | undefined | Additional CSS classes                     |

### PopoverContent

Container for the popover content.

| Prop             | Type                                   | Default   | Description                                         |
| ---------------- | -------------------------------------- | --------- | --------------------------------------------------- |
| align            | "start" \| "center" \| "end"           | "center"  | Alignment against the trigger element               |
| side             | "top" \| "right" \| "bottom" \| "left" | "bottom"  | Preferred side to show the popover                  |
| sideOffset       | number                                 | 4         | Distance in pixels from the trigger                 |
| avoidCollisions  | boolean                                | true      | Whether to avoid collisions with the viewport edges |
| collisionPadding | number \| object                       | 0         | Padding between the popover and the viewport edges  |
| className        | string                                 | undefined | Additional CSS classes                              |

### PopoverAnchor

Component that anchors the popover's position.

| Prop      | Type    | Default   | Description                               |
| --------- | ------- | --------- | ----------------------------------------- |
| asChild   | boolean | false     | Whether to render the child as the anchor |
| className | string  | undefined | Additional CSS classes                    |

## Accessibility

- Follows WAI-ARIA guidelines for popovers and tooltips
- Built on Radix UI's accessible popover primitive
- Keyboard navigation (Tab, Escape)
- Proper focus management
- ARIA attributes automatically handled
