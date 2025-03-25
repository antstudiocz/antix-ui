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
| size           | 'xl' \| 'lg' \| 'md' \| 'sm'            | 'md'          | Button size                                |
| icon           | ReactNode                               | undefined     | Icon to display inside the button          |
| iconPosition   | 'left' \| 'right'                       | 'left'        | Icon position                              |
| fullWidth      | boolean                                 | false         | Whether button should take full width      |
| className      | string                                  | ''            | Additional CSS class                       |
| additionalText | string                                  | undefined     | Additional text to display                 |
| minContent     | boolean                                 | true          | Whether button should have minimal width   |
| disabled       | boolean                                 | false         | Whether button is disabled                 |

The component also accepts all standard HTML button attributes.

## Variants

### Solid

```jsx
<Button variant="solid" color="primary">
  Solid Button
</Button>
```

### Outlined

```jsx
<Button variant="outlined" color="primary">
  Outlined Button
</Button>
```

### Text

```jsx
<Button variant="text" color="primary">
  Text Button
</Button>
```

## Sizes

```jsx
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

## Icons

### Left Icon

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
<Button icon={<IconComponent />} minContent>
  <span className="sr-only">Action description</span>
</Button>
```

## Additional Text

```jsx
<Button additionalText="Additional text">
  Main text
</Button>
```

## Button Width

### Minimal Content Width

```jsx
<Button minContent>
  Compact Button
</Button>
```

### Full Width

```jsx
<Button fullWidth>
  Full Width Button
</Button>
```
