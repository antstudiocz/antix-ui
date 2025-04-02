# Sheet

The Sheet component provides a slide-in panel that appears from the edge of the screen, commonly used for secondary navigation, forms, or detailed information.

## Features

- Slides in from any side of the screen (right, left, top, bottom)
- Animated entrance and exit transitions
- Responsive design with mobile optimizations
- Customizable header, content, and footer layout
- Built-in close button
- Keyboard navigation and focus management

## Usage

```tsx
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@antixuser/antix-ui";

// Basic usage
<Sheet>
  <SheetTrigger>Open Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Sheet Title</SheetTitle>
      <SheetDescription>This is a description of the sheet.</SheetDescription>
    </SheetHeader>
    <div className="py-4">
      <p>Your sheet content goes here.</p>
    </div>
    <SheetFooter>
      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Different sides
<Sheet>
  <SheetTrigger>Open Left Sheet</SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Left Side Sheet</SheetTitle>
    </SheetHeader>
    <p>This sheet slides in from the left side.</p>
  </SheetContent>
</Sheet>

<Sheet>
  <SheetTrigger>Open Bottom Sheet</SheetTrigger>
  <SheetContent side="bottom">
    <SheetHeader>
      <SheetTitle>Bottom Sheet</SheetTitle>
    </SheetHeader>
    <p>This sheet slides in from the bottom, like a mobile drawer.</p>
  </SheetContent>
</Sheet>

// Controlled sheet
const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger>Open Controlled Sheet</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Controlled Sheet</SheetTitle>
    </SheetHeader>
    <p>This sheet's state is controlled externally.</p>
    <SheetFooter>
      <button type="button" onClick={() => setOpen(false)}>
        Close
      </button>
    </SheetFooter>
  </SheetContent>
</Sheet>

// Custom trigger
<Sheet>
  <SheetTrigger asChild>
    <button className="px-4 py-2 bg-primary-500 text-white rounded-md">
      Custom Trigger Button
    </button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Custom Trigger Sheet</SheetTitle>
    </SheetHeader>
    <p>This sheet has a custom trigger button.</p>
  </SheetContent>
</Sheet>
```

## Components and Props

### Sheet

Root component that manages the sheet state.

| Prop         | Type                    | Default   | Description                                                    |
| ------------ | ----------------------- | --------- | -------------------------------------------------------------- |
| open         | boolean                 | undefined | Whether the sheet is open (controlled)                         |
| defaultOpen  | boolean                 | undefined | Whether the sheet is open by default (uncontrolled)            |
| onOpenChange | (open: boolean) => void | undefined | Function called when the open state changes                    |
| modal        | boolean                 | true      | Whether the sheet blocks interactions with the rest of the app |

### SheetTrigger

Button that opens the sheet when clicked.

| Prop      | Type    | Default   | Description                                |
| --------- | ------- | --------- | ------------------------------------------ |
| asChild   | boolean | false     | Whether to render the child as the trigger |
| className | string  | undefined | Additional CSS classes                     |

### SheetContent

Container for the sheet content.

| Prop      | Type                                   | Default   | Description                           |
| --------- | -------------------------------------- | --------- | ------------------------------------- |
| side      | "top" \| "right" \| "bottom" \| "left" | "right"   | The side from which the sheet appears |
| className | string                                 | undefined | Additional CSS classes                |
| children  | ReactNode                              | required  | Content of the sheet                  |

### SheetHeader

Container for the sheet title and description.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Header content         |

### SheetFooter

Container for the sheet actions.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Footer content         |

### SheetTitle

Sheet title component.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Title content          |

### SheetDescription

Sheet description component.

| Prop      | Type      | Default   | Description            |
| --------- | --------- | --------- | ---------------------- |
| className | string    | undefined | Additional CSS classes |
| children  | ReactNode | required  | Description content    |

### SheetClose

Button that closes the sheet when clicked.

| Prop      | Type    | Default   | Description                                     |
| --------- | ------- | --------- | ----------------------------------------------- |
| asChild   | boolean | false     | Whether to render the child as the close button |
| className | string  | undefined | Additional CSS classes                          |

## Accessibility

- Built on Radix UI's accessible dialog primitive
- Modal behavior with proper focus management
- Keyboard navigation (Tab, Escape)
- Proper ARIA attributes
- Close button has screen reader text
- Background scroll is locked when open
