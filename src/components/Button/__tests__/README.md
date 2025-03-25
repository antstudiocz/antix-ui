# Button Component Tests

This directory contains test files for the Button component. The tests are written using Jest and React Testing Library.

## Test Structure

Tests are split into two files:

1. `Button.test.tsx` - Functional tests
   - Basic rendering
   - Event handling
   - Props validation
   - Component behavior

2. `Button.snapshot.test.tsx` - Visual regression tests
   - All variants (solid, outlined, text)
   - All sizes (sm, md, lg)
   - Different states (disabled)
   - Special cases (with icon, full width, additional text)

## Test Scenarios

### Functional Tests (`Button.test.tsx`)
- ✅ Renders with default props
  - Verifies that the button renders with provided text content
  - Checks if the button is present in the document

- ✅ Handles click events
  - Verifies that onClick handler is called when button is clicked
  - Tests event propagation

- ✅ Applies different variants correctly
  - Tests "solid" variant
  - Tests "outlined" variant
  - Tests "text" variant
  - Verifies correct CSS classes are applied

- ✅ Applies different sizes correctly
  - Tests "sm" (small) size
  - Tests "md" (medium) size
  - Tests "lg" (large) size
  - Verifies correct CSS classes are applied

- ✅ Disables button when disabled prop is true
  - Verifies disabled attribute is set
  - Ensures button is not clickable

- ✅ Renders with icon when provided
  - Verifies icon is rendered within the button
  - Checks icon presence in the document

### Snapshot Tests (`Button.snapshot.test.tsx`)
- ✅ Solid variant
- ✅ Outlined variant
- ✅ Text variant
- ✅ Different sizes (sm, md, lg)
- ✅ Disabled state
- ✅ Button with left icon
- ✅ Button with right icon
- ✅ Full width button
- ✅ Button with additional text

## Running Tests

To run the tests, use one of the following commands:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Update snapshots
npm test -- -u
```

## Test Coverage

The tests cover the following aspects of the Button component:
- Basic rendering and content display
- Event handling and user interactions
- Visual variants and styling
- Size variations
- Disabled state
- Icon integration

## Adding New Tests

When adding new tests:
1. Follow the existing test structure
2. Use descriptive test names
3. Test one specific behavior per test case
4. Use appropriate assertions from React Testing Library
5. Consider edge cases and error states
6. Add snapshots for visual changes 