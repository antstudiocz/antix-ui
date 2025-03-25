# Product Card

Product Card component displays product information in a standardized format with customizable features.

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
  isNew={true}
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
| isNew | boolean | false | Whether the product is newly added |
| isDeliveryToday | boolean | false | Whether the product can be delivered today |
| isInStore | boolean | false | Whether the product is available in store |
| onAddToCart | () => void | - | Function called when the add to cart button is clicked |

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

### New Product

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="New Product"
  currentPrice="399.00 Kč / pc"
  isNew={true}
  onAddToCart={() => console.log('Product added to cart')}
/>
```

## Advanced usage

### Product with all badges

```tsx
<ProductCard
  imageUrl="https://example.com/product-image.jpg"
  title="Fully Featured Product"
  originalPrice="699.00 Kč / pc"
  currentPrice="599.00 Kč / pc"
  isNew={true}
  isDeliveryToday={true}
  isInStore={true}
  onAddToCart={() => console.log('Product added to cart')}
/>
```

## Accessibility

The Product Card is accessible with proper semantic HTML and keyboard navigation support for interactive elements. 