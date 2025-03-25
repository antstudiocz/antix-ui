import React, { useState } from "react";
import ButtonVariantsDemo from "./ButtonDemo/ButtonVariantsDemo";
import CustomizationDemo from "./ThemeSwitcherDemo/ThemeSwitcherDemo";
import { ProductCardDemo } from './ProductCardDemo/ProductCardDemo';
import styles from "./LibraryDemo.module.css";

/**
 * Hlavní aplikace pro zobrazení všech příkladů
 */
const LibraryDemo: React.FC = () => {
  type ExampleType = "button" | "customization" | "productCard";

  const [activeExample, setActiveExample] = useState<ExampleType>("button");

  const renderExample = () => {
    switch (activeExample) {
      case "button":
        return <ButtonVariantsDemo />;
      case "customization":
        return <CustomizationDemo />;
      case "productCard":
        return <ProductCardDemo />;
      default:
        return <ButtonVariantsDemo />;
    }
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Antix UI Components</h1>
        <p className={styles.description}>
          Tato stránka prezentuje ukázky komponent a jejich variant z knihovny
          Antix UI. Vyberte si kategorii z navigace níže pro zobrazení
          příslušných příkladů.
        </p>
      </header>

      <nav className={styles.nav}>
        <button
          className={`${styles.navItem} ${
            activeExample === "button" ? styles.navItemActive : ""
          }`}
          onClick={() => setActiveExample("button")}
        >
          Tlačítka
        </button>
        <button
          className={`${styles.navItem} ${
            activeExample === "productCard" ? styles.navItemActive : ""
          }`}
          onClick={() => setActiveExample("productCard")}
        >
          Produkt
        </button>
        <button
          className={`${styles.navItem} ${
            activeExample === "customization" ? styles.navItemActive : ""
          }`}
          onClick={() => setActiveExample("customization")}
        >
          Přizpůsobení
        </button>
      </nav>

      <main className={styles.exampleContainer}>{renderExample()}</main>
    </div>
  );
};

export default LibraryDemo;
