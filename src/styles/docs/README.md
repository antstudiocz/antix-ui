# Style Customization

Components use CSS variables for styling that you can override in your application's styles to customize the appearance.

## CSS Variables

For complete list of CSS variables, see the [foundations](../foundations) folder.

```css
:root {
  /* Font sizes */
  --font-button1-size: 16px;
  --font-button1-line-height: 24px;
  --font-button2-size: 14px;
  --font-button2-line-height: 20px;
  --font-button3-size: 12px;
  --font-button3-line-height: 16px;
  ...
}
```

## Customization Example

```css
/* In your CSS file */
:root {
  --color-primary-500: #3498db; /* Change primary color to blue */
  --font-button1-size: 18px; /* Increase button font size */
  --spacing-button-text: 20px; /* Increase button padding */
  --icon-size-md: 24px; /* Increase icon size */
}
```

## Responsive Customization

You can also use media queries to customize components on different devices:

```css
@media (max-width: 768px) {
  :root {
    --font-button1-size: 14px; /* Smaller font on mobile devices */
    --spacing-button-text: 12px; /* Smaller padding on mobile devices */
    --icon-size-md: 18px; /* Smaller icons on mobile devices */
  }
}
```
