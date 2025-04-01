import * as React from "react";
import { Pagination } from "@/components/Pagination/Pagination";

export const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 10;

  return (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h2 className="text-lg font-semibold mb-4">Basic Pagination</h2>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">
          Current Page: {currentPage}
        </h2>
        <p className="text-sm text-gray-500">
          Try clicking the buttons to navigate between pages
        </p>
      </div>
    </div>
  );
};

export default PaginationDemo;
