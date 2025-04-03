# Carousel Component

A customizable carousel component for cycling through elements like a slideshow. Built on top of `embla-carousel-react`.

## Features

- 🎯 Responsive design
- 🔄 Autoplay support
- 🎨 Customizable navigation
- 📱 Touch-friendly
- ⌨️ Keyboard accessible
- 🖱️ Mouse drag support
- 🔵 Slide indicators
- 📐 Vertical/Horizontal orientation

## Installation

```bash
npm install @antixuser/antix-ui
```

## Usage

```tsx
import { Carousel } from "@antixuser/antix-ui";

export default function CarouselDemo() {
  const items = [
    <div key="1" className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">1</span>
    </div>,
    <div key="2" className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">2</span>
    </div>,
    <div key="3" className="flex aspect-square items-center justify-center p-6">
      <span className="text-4xl font-semibold">3</span>
    </div>,
  ];

  return (
    <Carousel
      items={items}
      showNavigation
      autoplay
      autoplayInterval={5000}
      onSelect={(index) => console.log(`Selected slide: ${index}`)}
    />
  );
}
```

## Props

| Prop               | Type                       | Default      | Description                               |
| ------------------ | -------------------------- | ------------ | ----------------------------------------- |
| items              | React.ReactNode[]          | -            | Array of items to display in the carousel |
| className          | string                     | -            | Additional CSS classes for the carousel   |
| showNavigation     | boolean                    | true         | Whether to show navigation buttons        |
| navigationPosition | "inside" \| "outside"      | "outside"    | Position of navigation buttons            |
| autoplay           | boolean                    | false        | Whether to enable autoplay                |
| autoplayInterval   | number                     | 3000         | Autoplay interval in milliseconds         |
| orientation        | "horizontal" \| "vertical" | "horizontal" | Orientation of the carousel               |
| opts               | CarouselOptions            | -            | Embla Carousel options                    |
| plugins            | CarouselPlugin             | -            | Embla Carousel plugins                    |
| onSelect           | (index: number) => void    | -            | Callback when the active item changes     |

## Examples

### Basic Carousel

```tsx
<Carousel items={items} />
```

### Autoplay Carousel

```tsx
<Carousel items={items} autoplay autoplayInterval={3000} />
```

### Custom Navigation Position

```tsx
<Carousel items={items} navigationPosition="inside" />
```

### Vertical Orientation

```tsx
<Carousel items={items} orientation="vertical" />
```

### With Embla Options and Plugins

```tsx
import Autoplay from "embla-carousel-autoplay";

<Carousel items={items} opts={{ loop: true }} plugins={[Autoplay()]} />;
```

### With Event Handling

```tsx
<Carousel
  items={items}
  onSelect={(index) => {
    console.log(`Selected slide: ${index}`);
    // Handle slide change
  }}
/>
```

## Styling

The component uses Tailwind CSS classes by default, but you can override them using the `className` prop or by targeting the following data attributes:

- `[data-slot="carousel"]` - The main carousel container
- `[data-slot="carousel-item"]` - Individual carousel items
- `[data-slot="carousel-previous"]` - Previous button
- `[data-slot="carousel-next"]` - Next button

## Accessibility

The carousel component follows WAI-ARIA guidelines for accessibility:

- Navigation buttons are properly labeled
- Keyboard navigation support (using arrow keys)
- ARIA attributes for current slide
- Screen reader friendly structure
- Slide indicators for visual feedback

## Browser Support

The carousel component is supported in all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
