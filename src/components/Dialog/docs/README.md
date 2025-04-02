# Dialog

The Dialog component provides a modal dialog that overlays content on the page, requiring user interaction.

## Features

- Accessible modal dialog with overlay
- Responsive design with mobile optimizations
- Animated entrance and exit transitions
- Customizable header, content, and footer layout
- Built-in close button
- Keyboard navigation and focus management

## Usage

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@antixuser/antix-ui";

// Basic usage
<Dialog>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>This is a description of the dialog.</DialogDescription>
    </DialogHeader>
    <p>Your dialog content goes here.</p>
    <DialogFooter>
      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled dialog
const [open, setOpen] = useState(false);

<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger>Open Dialog</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Controlled Dialog</DialogTitle>
    </DialogHeader>
    <p>This dialog's state is controlled externally.</p>
    <DialogFooter>
      <button type="button" onClick={() => setOpen(false)}>
        Close
      </button>
    </DialogFooter>
  </DialogContent>
</Dialog>

// With custom trigger
<Dialog>
  <DialogTrigger asChild>
    <button className="px-4 py-2 bg-primary-500 text-white rounded-md">
      Custom Trigger Button
    </button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Trigger Dialog</DialogTitle>
    </DialogHeader>
    <p>This dialog has a custom trigger button.</p>
  </DialogContent>
</Dialog>
```

## Components and Props

### Dialog

Root component that manages the dialog state.

| Prop         | Type                    | Default   | Description                                                     |
| ------------ | ----------------------- | --------- | --------------------------------------------------------------- |
| open         | boolean                 | undefined | Whether the dialog is open (controlled)                         |
| defaultOpen  | boolean                 | undefined | Whether the dialog is open by default (uncontrolled)            |
| onOpenChange | (open: boolean) => void | undefined | Function called when the open state changes                     |
| modal        | boolean                 | true      | Whether the dialog blocks interactions with the rest of the app |

### DialogTrigger

Button that opens the dialog when clicked.

| Prop      | Type    | Default   | Description                                |
| --------- | ------- | --------- | ------------------------------------------ |
| asChild   | boolean | false     | Whether to render the child as the trigger |
| className | string  | undefined | Additional CSS classes                     |

### DialogContent

Container for the dialog content.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Content of the dialog  |

### DialogHeader

Container for the dialog title and description.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Header content         |

### DialogFooter

Container for the dialog actions.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Footer content         |

### DialogTitle

Dialog title component.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Title content          |

### DialogDescription

Dialog description component.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Description content    |

## Accessibility

- Built on Radix UI's accessible dialog primitive
- Modal behavior with proper focus management
- Keyboard navigation (Escape to close)
- Proper ARIA attributes
- Close button has screen reader text
- Background scroll is locked when open
