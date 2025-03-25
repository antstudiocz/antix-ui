# Product Card Tests

This directory contains tests for the ProductCard component.

## Test Scenarios

### Unit Tests (ProductCard.test.tsx)

- **Rendering**
  - Basic product card render
  - Rendering with original price
  - Rendering with "New" badge
  - Rendering with "Delivery Today" badge
  - Rendering with "In Store" badge
  - Rendering with all badges

- **Interactions**
  - Add to cart button click

- **Accessibility**
  - Image alt text
  - Add to cart button accessibility

### Snapshot Tests (ProductCard.snapshot.test.tsx)

- Minimal props
- All props
- With original price only
- With "New" badge only
- With "Delivery Today" badge only
- With "In Store" badge only

## Running Tests

Run all component tests:

```bash
npm test -- --testPathPattern=src/components/ProductCard
```

Run only unit tests:

```bash
npm test -- --testPathPattern=src/components/ProductCard/ProductCard.test.tsx
```

Run only snapshot tests:

```bash
npm test -- --testPathPattern=src/components/ProductCard/ProductCard.snapshot.test.tsx
```

## Update Snapshots

If you've made intentional changes to the component that affect its appearance:

```bash
npm test -- --testPathPattern=src/components/ProductCard --updateSnapshot
``` 