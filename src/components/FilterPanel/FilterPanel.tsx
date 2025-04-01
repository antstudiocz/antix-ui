import * as React from "react";
import { useState } from "react";

import { Button } from "@/components/Button/Button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import XMarkIcon from "@/icons/XMarkIcon";
import ChevronDownIcon from "@/icons/ChevronDownIcon";

type SortOption = {
  name: string;
  value: string;
  current: boolean;
};

type FilterOption = {
  value: string;
  label: string;
  checked: boolean;
};

type FilterSection = {
  id: string;
  name: string;
  options: FilterOption[];
};

type ActiveFilter = {
  value: string;
  label: string;
};

export interface FilterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Sort options available in the dropdown */
  sortOptions?: SortOption[];
  /** Filter sections displayed in popover and mobile panel */
  filters?: FilterSection[];
  /** Currently active filters */
  activeFilters?: ActiveFilter[];
  /** Callback when a sort option is selected */
  onSortChange?: (value: string) => void;
  /** Callback when a filter is toggled */
  onFilterChange?: (sectionId: string, value: string, checked: boolean) => void;
  /** Callback when an active filter is removed */
  onFilterRemove?: (filter: ActiveFilter) => void;
}

/**
 * FilterPanel component for displaying and managing product filters
 */
export const FilterPanel = React.forwardRef<HTMLDivElement, FilterPanelProps>(
  (
    {
      sortOptions = [],
      filters = [],
      activeFilters = [],
      onSortChange,
      onFilterChange,
      onFilterRemove,
      ...props
    },
    ref
  ) => {
    const [isOpenMobile, setIsOpenMobile] = useState(false);
    const [expandedSections, setExpandedSections] = useState<string[]>([]);
    const [currentSortValue, setCurrentSortValue] = useState<string>(
      sortOptions.find((option) => option.current)?.value || ""
    );

    // Vypočet počtu aktivních filtrů pro každou sekci
    const getActiveFitlersCountForSection = (sectionId: string) => {
      // Získáme všechny hodnoty filtrů z dané sekce
      const sectionValues =
        filters
          .find((section) => section.id === sectionId)
          ?.options.map((option) => option.value) || [];

      // Spočítáme, kolik aktivních filtrů patří do této sekce
      return activeFilters.filter((filter) =>
        sectionValues.includes(filter.value)
      ).length;
    };

    const handleSortChange = (value: string) => {
      setCurrentSortValue(value);
      onSortChange?.(value);
    };

    const handleFilterChange = (
      sectionId: string,
      value: string,
      checked: boolean
    ) => {
      onFilterChange?.(sectionId, value, checked);
    };

    const handleFilterRemove = (filter: ActiveFilter) => {
      onFilterRemove?.(filter);
    };

    const toggleSection = (sectionId: string) => {
      setExpandedSections((prev) =>
        prev.includes(sectionId)
          ? prev.filter((id) => id !== sectionId)
          : [...prev, sectionId]
      );
    };

    return (
      <div ref={ref} {...props}>
        {/* Mobile filter sheet */}
        <Sheet open={isOpenMobile} onOpenChange={setIsOpenMobile}>
          <SheetContent
            side="right"
            className="w-full max-w-xs p-0 sm:max-w-sm"
          >
            <SheetHeader className="px-4 py-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-lg font-bold text-secondary-800">
                  Filtry
                </SheetTitle>
              </div>
            </SheetHeader>

            {/* Filters */}
            <form className="mt-4">
              {filters.map((section) => (
                <div
                  key={section.name}
                  className="border-t border-neutral-200 px-4 py-6"
                >
                  <h3 className="-mx-2 -my-3 flow-root">
                    <button
                      type="button"
                      className="group flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-neutral-400 hover:text-neutral-500"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span className="font-medium text-secondary-800">
                        {section.name}
                      </span>
                      <span className="ml-6 flex items-center">
                        <ChevronDownIcon
                          className={cn(
                            "h-5 w-5 transition-transform duration-200",
                            expandedSections.includes(section.id)
                              ? "rotate-180"
                              : ""
                          )}
                        />
                      </span>
                    </button>
                  </h3>
                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-200",
                      expandedSections.includes(section.id)
                        ? "pt-6 opacity-100"
                        : "h-0 pt-0 opacity-0"
                    )}
                  >
                    <div className="space-y-6">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <Checkbox
                            id={`filter-mobile-${section.id}-${optionIdx}`}
                            checked={option.checked}
                            onCheckedChange={(checked) =>
                              handleFilterChange(
                                section.id,
                                option.value,
                                !!checked
                              )
                            }
                          />
                          <label
                            htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                            className="text-sm text-neutral-500"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </form>
          </SheetContent>
        </Sheet>

        {/* Main filters area */}
        <div className="mx-auto p-6 rounded-3xl bg-secondary-100">
          <div className="flex items-center justify-between">
            {/* Desktop filter sections */}
            <div className="hidden sm:flex items-center divide-x divide-secondary-400">
              {filters.map((section, sectionIdx) => (
                <Popover key={section.name}>
                  <PopoverTrigger className="px-4 first:pl-0 last:pr-0">
                    <Button
                      variant="text"
                      color="primary"
                      icon={<ChevronDownIcon className="size-4 shrink-0" />}
                      iconPosition="right"
                      className="gap-0.5 hover:no-underline group"
                    >
                      <div className="flex items-center gap-0.5">
                        <span className="group-hover:underline">
                          {section.name}
                        </span>
                        {getActiveFitlersCountForSection(section.id) > 0 && (
                          <span className="rounded-sm bg-primary-500 text-neutral-00 size-5 flex items-center justify-center text-base font-semibold leading-none no-underline hover:no-underline">
                            {getActiveFitlersCountForSection(section.id)}
                          </span>
                        )}
                      </div>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="min-w-[200px] p-4">
                    <form className="gap-4 flex flex-col">
                      {section.options.map((option, optionIdx) => (
                        <div key={option.value} className="flex gap-3">
                          <Checkbox
                            id={`filter-${section.id}-${optionIdx}`}
                            checked={option.checked}
                            onCheckedChange={(checked) =>
                              handleFilterChange(
                                section.id,
                                option.value,
                                !!checked
                              )
                            }
                          />
                          <label
                            htmlFor={`filter-${section.id}-${optionIdx}`}
                            className="pr-6 text-sm font-medium whitespace-nowrap text-secondary-800"
                          >
                            {option.label}
                          </label>
                        </div>
                      ))}
                    </form>
                  </PopoverContent>
                </Popover>
              ))}
            </div>

            {/* Mobile filter button */}
            <Button
              variant="text"
              color="primary"
              size="lg"
              onClick={() => setIsOpenMobile(true)}
              className="sm:hidden"
            >
              Filtry
            </Button>

            {/* Sort dropdown */}
            <div className="flex items-center">
              <Popover>
                <PopoverTrigger>
                  <Button
                    variant="text"
                    color="primary"
                    size="lg"
                    icon={<ChevronDownIcon className="size-4 shrink-0" />}
                    iconPosition="right"
                    className="gap-0.5"
                  >
                    Seřadit podle
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="end" className="min-w-[200px] p-4">
                  <RadioGroup
                    value={currentSortValue}
                    onValueChange={handleSortChange}
                  >
                    {sortOptions.map((option) => (
                      <div
                        key={option.value}
                        className="flex items-center gap-3"
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={`sort-${option.value}`}
                        />
                        <label
                          htmlFor={`sort-${option.value}`}
                          className="text-sm font-medium whitespace-nowrap text-secondary-800"
                        >
                          {option.name}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>

        {/* Active filters */}
        {activeFilters.length > 0 && (
          <div>
            <div className="flex items-center divide-x divide-secondary-400 p-6">
              <h3 className="text-sm font-medium text-secondary-800 pr-4">
                Vybrané filtry
              </h3>

              <div className="pl-4">
                <div className="flex flex-wrap items-center gap-2">
                  {activeFilters.map((activeFilter) => (
                    <div
                      key={activeFilter.value}
                      className="inline-flex gap-0.5 items-center outline-[1.5px] outline-offset-[-1.50px] outline-primary-500 bg-secondary-300 text-primary-500 rounded-md py-1.5 pl-2.5 pr-2 group hover:cursor-pointer"
                      onClick={() => handleFilterRemove(activeFilter)}
                    >
                      <span className="text-filter-label">
                        {activeFilter.label}
                      </span>
                      <button
                        type="button"
                        className="group-hover:bg-primary-500 rounded-full transition group-hover:text-neutral-00"
                      >
                        <span className="sr-only">
                          Remove filter for {activeFilter.label}
                        </span>
                        <XMarkIcon className="size-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

FilterPanel.displayName = "FilterPanel";

export default FilterPanel;
