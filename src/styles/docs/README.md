# Style Customization

Components use CSS variables for styling that you can override in your application's styles to customize the appearance.

## CSS Variables

```css
:root {
  /* Font sizes */
  --font-button1-size: 16px;
  --font-button1-line-height: 24px;
  --font-button2-size: 14px;
  --font-button2-line-height: 20px;
  --font-button3-size: 12px;
  --font-button3-line-height: 16px;

  /* Font families */
  --font-secondary: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;

  /* Colors */
  --color-neutral-00: #ffffff;

  --color-conversion-500: #e63d3d;
  --color-conversion-900: #b21a1a;

  --color-primary-500: #1c552c;
  --color-primary-700: #0e3f1b;

  --color-secondary-300: #f2ead8;

  --color-highlight-300: #72ad59;

  /* Spacing and padding */
  --spacing-button-icon: 8px;
  --spacing-button-text: 16px;
  --spacing-button-additional: 4px;

  /* Icon sizes */
  --icon-size-sm: 16px;
  --icon-size-md: 20px;
  --icon-size-lg: 24px;
  --icon-size-xl: 32px;

  /* Border radius */
  --border-radius-sm: 4px;
  --border-radius-md: 6px;
  --border-radius-lg: 8px;
  --border-radius-xl: 12px;
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
