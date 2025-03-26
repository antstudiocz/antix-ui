# Button

Reusable button component with multiple variants and styles.

## Usage Example

```jsx
import { Button } from "@antixuser/antix-ui";

function MyComponent() {
  return (
    <Button
      variant="solid"
      color="primary"
      size="md"
      onClick={() => console.log("Button clicked!")}
    >
      Click me
    </Button>
  );
}
```

## API

The Button component accepts the following props:

| Prop           | Type                                     | Default Value | Description                                |
| -------------- | --------------------------------------- | ------------- | ------------------------------------------ |
| variant        | 'solid' \| 'outlined' \| 'text'         | 'solid'       | Button style variant                       |
| color          | 'conversion' \| 'primary' \| 'secondary' | 'conversion'  | Button color theme                         |
| size           | 'xl' \| 'lg' \| 'md' \| 'sm'           | 'md'          | Button size                                |
| icon           | ReactNode                               | undefined     | Icon to display inside the button          |
| iconPosition   | 'left' \| 'right'                       | 'left'        | Icon position                              |
| className      | string                                  | ''            | Additional CSS class                       |
| additionalText | string                                  | undefined     | Additional text to display below main text |
| disabled       | boolean                                 | false         | Whether button is disabled                 |
| asChild        | boolean                                 | false         | Allows button to be rendered as different element |

The component also accepts all standard HTML button attributes except 'color' which is handled by the component's theming system.

## Variants

### Solid

The solid variant provides a filled button style with different behaviors for each color:

```jsx
<Button variant="solid" color="primary">
  Solid Button
</Button>
```

- **Conversion**: Solid background that darkens on hover
- **Primary**: Gradient background with hover overlay effect
- **Secondary**: Light background that changes to primary color on hover

### Outlined

Outlined variant with transparent background and colored border:

```jsx
<Button variant="outlined" color="primary">
  Outlined Button
</Button>
```

All outlined variants change to solid fill on hover with appropriate text color contrast.

### Text

Text-only variant with underline behavior:

```jsx
<Button variant="text" color="primary">
  Text Button
</Button>
```

- Without icon: Underlined by default, removes underline on hover
- With icon: No underline by default, adds underline on hover

## Sizes

```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

Each size variant has appropriate padding and typography styles. Icon spacing is automatically adjusted based on the size.

## Icons

### Left Icon (Default)

```jsx
<Button icon={<IconComponent />} iconPosition="left">
  Button with Icon
</Button>
```

### Right Icon

```jsx
<Button icon={<IconComponent />} iconPosition="right">
  Button with Icon
</Button>
```

### Icon Only

```jsx
<Button icon={<IconComponent />}>
  <span className="sr-only">Action description</span>
</Button>
```

Icon spacing is automatically adjusted based on button size:
- Small/Medium buttons: 6px gap (gap-1.5)
- Large/XL buttons: 10px gap (gap-2.5)

## Additional Text

Adds secondary text below the main button content:

```jsx
<Button additionalText="Additional text">
  Main text
</Button>
```

## Polymorphic Behavior

Using `asChild` prop allows the button to be rendered as a different element while maintaining its styles:

```jsx
<Button asChild>
  <a href="/some-page">Link that looks like a button</a>
</Button>
```

## Button Width

To set button width, you can use standard CSS classes:

```jsx
<Button className="w-fit">
  Compact Button
</Button>

<Button className="w-full">
  Full Width Button
</Button>
```

## Accessibility

- Fully keyboard accessible
- Proper ARIA attributes inherited from native button element
- Disabled state visually indicated with 60% opacity
- Screen reader support for icon-only buttons using `sr-only` class
