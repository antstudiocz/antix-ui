# Pagination Component

A reusable pagination component that provides navigation through pages with a clean and modern interface.

## Features

- Responsive design
- Accessible navigation controls
- Dynamic page number display
- Support for large number of pages with ellipsis
- Customizable through className prop
- Built with Antix UI PaginationButton component

## Usage

```tsx
import { Pagination } from "@/components/Pagination/Pagination";

const MyComponent = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={setCurrentPage}
    />
  );
};
```

## Props

| Prop         | Type                   | Required | Description                                |
| ------------ | ---------------------- | -------- | ------------------------------------------ |
| currentPage  | number                 | Yes      | The current active page (1-based indexing) |
| totalPages   | number                 | Yes      | Total number of pages                      |
| onPageChange | (page: number) => void | Yes      | Callback function when page changes        |
| className    | string                 | No       | Optional className for custom styling      |

## Accessibility

The component is built with accessibility in mind:

- Uses semantic HTML with `<nav>` element
- Includes proper ARIA labels
- Keyboard navigation support
- Disabled states for navigation limits

## Styling

The component uses Tailwind CSS for styling and can be customized through the `className` prop. The default styling includes:

- Flex layout with small gaps between buttons
- Outline variant for page numbers
- Filled variant for current page
- Responsive icon sizes
- Hover and focus states from Antix UI PaginationButton component

## Examples

### Basic Usage

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(`Navigating to page ${page}`)}
/>
```

### With Custom Styling

```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  onPageChange={(page) => console.log(`Navigating to page ${page}`)}
  className="my-8"
/>
```
