# Product Card

Product Card component displays product information in a standardized format with customizable features. This component now uses Tailwind CSS for styling and shadcn/ui Badge component for badges.

## Import

```tsx
import { ProductCard } from '@antixuser/antix-ui';
```

## Basic usage

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Product Name"
  currentPrice="599.00 Kč / pc"
  deliveryStatus="Doručíme dnes"
  storeAvailability="Ihned na prodejně"
  onAddToCart={() => console.log('Product added to cart')}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| imageUrl | string | - | URL of the product image |
| title | string | - | Product title |
| currentPrice | string | - | Current price of the product (formatted) |
| originalPrice | string | - | Original price of the product, if on sale (formatted) |
| badges | ProductBadge[] | [] | Array of badge objects to display |
| deliveryStatus | string | - | Custom delivery status text. If undefined, no delivery status will be shown |
| storeAvailability | string | - | Custom store availability text. If undefined, no store availability will be shown |
| onAddToCart | () => void | - | Function called when the add to cart button is clicked |
| translationNamespace | string | "productCard" | Translation namespace for i18n |
| className | string | - | Additional CSS classes to apply to the component |

## Badge Type

```tsx
interface ProductBadge {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}
```

## Variants

### Standard Product Card

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Standard Product"
  currentPrice="299.00 Kč / pc"
  onAddToCart={() => console.log('Product added to cart')}
/>
```

### Product with Sale Price

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Sale Product"
  originalPrice="599.00 Kč / pc"
  currentPrice="499.00 Kč / pc"
  onAddToCart={() => console.log('Product added to cart')}
/>
```

### Product with Custom Availability States

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Product with Custom States"
  currentPrice="399.00 Kč / pc"
  deliveryStatus="Doručení do 2 dnů"
  storeAvailability="Dostupné na 3 prodejnách"
  onAddToCart={() => console.log('Product added to cart')}
/>
```

### Product with Custom CSS Class

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Custom Width Product"
  currentPrice="399.00 Kč / pc"
  className="w-full max-w-sm"
  onAddToCart={() => console.log('Product added to cart')}
/>
```

### Product with i18n Support

```tsx
import { useTranslation } from 'react-i18next';

function ProductWithI18n() {
  const { t } = useTranslation('productCard');

  return (
    <ProductCard
      imageUrl="https://example.com/product-image.jpg"
      title="Product with i18n"
      currentPrice="399.00 Kč / pc"
      deliveryStatus={t('deliveryToday')}
      storeAvailability={t('inStore')}
      onAddToCart={() => console.log('Product added to cart')}
    />
  );
}
```

## Accessibility

The Product Card is accessible with proper semantic HTML and keyboard navigation support for interactive elements. 