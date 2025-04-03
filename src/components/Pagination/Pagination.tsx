import * as React from "react";
import { PaginationButton } from "@/components/PaginationButton/PaginationButton";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  /**
   * Current active page (1-based)
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Callback function when page changes
   */
  onPageChange: (page: number) => void;
  /**
   * Optional className for styling
   */
  className?: string;
}

export const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const delta = 1; // Number of pages to show before and after current page
    const range = [];
    const rangeWithDots = [];

    // Always show first page
    range.push(1);

    for (let i = currentPage - delta; i <= currentPage + delta; i++) {
      if (i > 1 && i < totalPages) {
        range.push(i);
      }
    }

    // Always show last page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Add dots between numbers if needed
    let l;
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <nav
      role="navigation"
      aria-label="Pagination"
      className={cn("flex items-center", className)}
    >
      <PaginationButton
        size="icon"
        variant="outline"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="rounded-l-xl"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </PaginationButton>

      {getPageNumbers().map((pageNumber, index) => (
        <PaginationButton
          key={index}
          variant={pageNumber === currentPage ? "default" : "outline"}
          size="icon"
          onClick={() =>
            typeof pageNumber === "number" && onPageChange(pageNumber)
          }
          disabled={pageNumber === "..."}
          aria-current={pageNumber === currentPage ? "page" : undefined}
          aria-label={
            typeof pageNumber === "number" ? `Page ${pageNumber}` : "More pages"
          }
        >
          {pageNumber}
        </PaginationButton>
      ))}

      <PaginationButton
        variant="outline"
        size="icon"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="rounded-r-xl"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </PaginationButton>
    </nav>
  );
};

const ChevronLeftIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default Pagination;
