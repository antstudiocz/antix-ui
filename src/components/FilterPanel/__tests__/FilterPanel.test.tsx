import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FilterPanel } from "../FilterPanel";

// Mock sortOptions
const sortOptions = [
  { name: "Most Popular", value: "popular", current: true },
  { name: "Best Rating", value: "rating", current: false },
  { name: "Newest", value: "newest", current: false },
];

// Mock filters
const filters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: false },
      { value: "tees", label: "Tees", checked: false },
      { value: "objects", label: "Objects", checked: true },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
    ],
  },
];

// Mock active filters
const activeFilters = [{ value: "objects", label: "Objects" }];

describe("FilterPanel", () => {
  it("renders sort options", () => {
    render(<FilterPanel sortOptions={sortOptions} />);

    // Open the sort dropdown using the correct text
    fireEvent.click(screen.getByText("Seřadit podle"));

    // Check if all options are rendered
    expect(screen.getByText("Most Popular")).toBeInTheDocument();
    expect(screen.getByText("Best Rating")).toBeInTheDocument();
    expect(screen.getByText("Newest")).toBeInTheDocument();
  });

  it("renders filter sections on desktop", () => {
    render(<FilterPanel filters={filters} />);

    // Check if filter sections are rendered
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Color")).toBeInTheDocument();
  });

  it("renders active filters", () => {
    render(<FilterPanel activeFilters={activeFilters} />);

    // Check if active filter is rendered
    expect(screen.getByText("Objects")).toBeInTheDocument();
  });

  it("calls onSortChange when sort option is selected", () => {
    const onSortChange = jest.fn();
    render(
      <FilterPanel sortOptions={sortOptions} onSortChange={onSortChange} />
    );

    // Open the sort dropdown using the correct text
    fireEvent.click(screen.getByText("Seřadit podle"));

    // Select an option
    fireEvent.click(screen.getByText("Best Rating"));

    // Check if callback was called with correct value
    expect(onSortChange).toHaveBeenCalledWith("rating");
  });

  it("calls onFilterRemove when active filter is removed", () => {
    const onFilterRemove = jest.fn();
    render(
      <FilterPanel
        activeFilters={activeFilters}
        onFilterRemove={onFilterRemove}
      />
    );

    // Find remove button (it uses sr-only text)
    const removeButton = screen.getByRole("button", {
      name: /Remove filter for Objects/i,
    });
    fireEvent.click(removeButton);

    // Check if callback was called with correct filter
    expect(onFilterRemove).toHaveBeenCalledWith({
      value: "objects",
      label: "Objects",
    });
  });
});
