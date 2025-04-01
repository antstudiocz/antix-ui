import React, { useState } from "react";

import ButtonVariantsDemo from "./ButtonDemo/ButtonVariantsDemo";
import ProductCardDemo from "./ProductCardDemo/ProductCardDemo";
import FilterPanelDemo from "./FilterPanelDemo/FilterPanelDemo";

/**
 * Hlavní aplikace pro zobrazení všech příkladů
 */
const LibraryDemo: React.FC = () => {
  type ExampleType = "button" | "customization" | "productCard" | "filterPanel";

  const [activeExample, setActiveExample] = useState<ExampleType>("button");

  const renderExample = () => {
    switch (activeExample) {
      case "button":
        return <ButtonVariantsDemo />;
      case "productCard":
        return <ProductCardDemo />;
      case "filterPanel":
        return <FilterPanelDemo />;
      default:
        return <ButtonVariantsDemo />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-5 font-sans">
      <header className="mb-10">
        <h1 className="text-3xl font-bold mb-4 text-green-800 dark:text-green-500">
          Antix UI Components
        </h1>
        <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300 max-w-3xl">
          Tato stránka prezentuje ukázky komponent a jejich variant z knihovny
          Antix UI. Vyberte si kategorii z navigace níže pro zobrazení
          příslušných příkladů.
        </p>
      </header>

      <nav className="flex gap-4 mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
        <button
          className={`cursor-pointer py-2 px-4 rounded-md text-base transition-all duration-200 
            ${
              activeExample === "button"
                ? "bg-green-800 text-white hover:bg-green-900"
                : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          onClick={() => setActiveExample("button")}
        >
          Tlačítka
        </button>
        <button
          className={`cursor-pointer py-2 px-4 rounded-md text-base transition-all duration-200 
            ${
              activeExample === "productCard"
                ? "bg-green-800 text-white hover:bg-green-900"
                : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          onClick={() => setActiveExample("productCard")}
        >
          Produkt
        </button>
        <button
          className={`cursor-pointer py-2 px-4 rounded-md text-base transition-all duration-200 
            ${
              activeExample === "filterPanel"
                ? "bg-green-800 text-white hover:bg-green-900"
                : "bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
          onClick={() => setActiveExample("filterPanel")}
        >
          Filtry
        </button>
      </nav>

      <main className="p-5 rounded-lg bg-gray-50 dark:bg-gray-900">
        {renderExample()}
      </main>
    </div>
  );
};

export default LibraryDemo;
