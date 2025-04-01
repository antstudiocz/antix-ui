import React, { useState } from "react";
import { FilterPanel } from "../../src/components/FilterPanel/FilterPanel";

// Initial sort options with one selected as default
const initialSortOptions = [
  { name: "Most Popular", value: "popular", current: true },
  { name: "Best Rating", value: "rating", current: false },
  { name: "Newest", value: "newest", current: false },
  { name: "Price: Low to High", value: "price-asc", current: false },
  { name: "Price: High to Low", value: "price-desc", current: false },
];

// Initial filter sections
const initialFilters = [
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "All New Arrivals", checked: false },
      { value: "tees", label: "Tees", checked: false },
      { value: "objects", label: "Objects", checked: true },
      { value: "sweatshirts", label: "Sweatshirts", checked: false },
      { value: "pants-shorts", label: "Pants & Shorts", checked: false },
    ],
  },
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White", checked: false },
      { value: "beige", label: "Beige", checked: false },
      { value: "blue", label: "Blue", checked: false },
      { value: "brown", label: "Brown", checked: false },
      { value: "green", label: "Green", checked: false },
      { value: "purple", label: "Purple", checked: false },
    ],
  },
  {
    id: "sizes",
    name: "Sizes",
    options: [
      { value: "xs", label: "XS", checked: false },
      { value: "s", label: "S", checked: false },
      { value: "m", label: "M", checked: false },
      { value: "l", label: "L", checked: false },
      { value: "xl", label: "XL", checked: false },
      { value: "2xl", label: "2XL", checked: false },
    ],
  },
];

// Initial active filters based on checked options
const initialActiveFilters = [{ value: "objects", label: "Objects" }];

const FilterPanelDemo: React.FC = () => {
  // State for sort options, filters, and active filters
  const [sortOptions, setSortOptions] = useState(initialSortOptions);
  const [filters, setFilters] = useState(initialFilters);
  const [activeFilters, setActiveFilters] = useState(initialActiveFilters);

  // Handle sort option change
  const handleSortChange = (value: string) => {
    setSortOptions(
      sortOptions.map((option) => ({
        ...option,
        current: option.value === value,
      }))
    );
  };

  // Handle filter option change
  const handleFilterChange = (
    sectionId: string,
    value: string,
    checked: boolean
  ) => {
    // Update the filters state
    setFilters(
      filters.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            options: section.options.map((option) => {
              if (option.value === value) {
                return { ...option, checked };
              }
              return option;
            }),
          };
        }
        return section;
      })
    );

    // Update active filters
    if (checked) {
      // Find the option to get its label
      const section = filters.find((s) => s.id === sectionId);
      const option = section?.options.find((o) => o.value === value);

      if (option) {
        setActiveFilters([...activeFilters, { value, label: option.label }]);
      }
    } else {
      setActiveFilters(
        activeFilters.filter((filter) => filter.value !== value)
      );
    }
  };

  // Handle removing an active filter
  const handleFilterRemove = (filter: { value: string; label: string }) => {
    // Remove from active filters
    setActiveFilters(activeFilters.filter((f) => f.value !== filter.value));

    // Update checked state in filters
    setFilters(
      filters.map((section) => ({
        ...section,
        options: section.options.map((option) => {
          if (option.value === filter.value) {
            return { ...option, checked: false };
          }
          return option;
        }),
      }))
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <FilterPanel
        sortOptions={sortOptions}
        filters={filters}
        activeFilters={activeFilters}
        heading="Workspace Collection"
        description="Our thoughtfully designed workspace objects are crafted in limited runs. Improve your productivity and organization with these items before we run out."
        onSortChange={handleSortChange}
        onFilterChange={handleFilterChange}
        onFilterRemove={handleFilterRemove}
      />

      {/* Mock product grid to show empty space below the filters */}
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-md overflow-hidden shadow-sm h-64"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterPanelDemo;
