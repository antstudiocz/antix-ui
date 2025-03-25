import React, { useState } from "react";
import { Button } from "../../src";
import "./ThemeSwitcherDemo.css";

/**
 * Komponenta pro ukázku přizpůsobení stylů pomocí CSS proměnných
 */
const ThemeSwitcherDemo: React.FC = () => {
  const [activeTheme, setActiveTheme] = useState<"default" | "blue" | "dark">(
    "default"
  );

  const handleThemeChange = (theme: "default" | "blue" | "dark") => {
    setActiveTheme(theme);

    // Odstraníme všechny třídy s tématy
    document.documentElement.classList.remove(
      "default-theme",
      "blue-theme",
      "dark-theme"
    );

    // Přidáme třídu podle zvoleného tématu
    document.documentElement.classList.add(`${theme}-theme`);
  };

  return (
    <div className="customization-container">
      <h1>Přizpůsobení vzhledu pomocí CSS proměnných</h1>

      <div className="theme-selector">
        <h2>Vyberte téma</h2>
        <div className="theme-buttons">
          <button
            className={`theme-button default-button ${
              activeTheme === "default" ? "active" : ""
            }`}
            onClick={() => handleThemeChange("default")}
          >
            Výchozí téma
          </button>
          <button
            className={`theme-button blue-button ${
              activeTheme === "blue" ? "active" : ""
            }`}
            onClick={() => handleThemeChange("blue")}
          >
            Modré téma
          </button>
          <button
            className={`theme-button dark-button ${
              activeTheme === "dark" ? "active" : ""
            }`}
            onClick={() => handleThemeChange("dark")}
          >
            Tmavé téma
          </button>
        </div>
      </div>

      <div className="demo-section">
        <h2>Ukázka tlačítek</h2>
        <div className="buttons-demo">
          <Button variant="solid" color="primary" size="md">
            Primární
          </Button>
          <Button variant="solid" color="conversion" size="md">
            Konverzní
          </Button>
          <Button variant="outlined" color="primary" size="md">
            Ohraničené
          </Button>
          <Button variant="text" color="primary" size="md">
            Textové
          </Button>
        </div>
      </div>

      <div className="demo-section">
        <h2>CSS proměnné použité pro témata</h2>
        <div className="code-block">
          <h3>Výchozí téma</h3>
          <pre>
            {`:root.default-theme {
  --color-conversion-500: #e63d3d;
  --color-conversion-900: #b21a1a;
  --color-primary-500: #1c552c;
  --color-primary-700: #0e3f1b;
  --color-secondary-300: #f2ead8;
}`}
          </pre>

          <h3>Modré téma</h3>
          <pre>
            {`:root.blue-theme {
  --color-conversion-500: #3498db;
  --color-conversion-900: #2980b9;
  --color-primary-500: #2c3e50;
  --color-primary-700: #1a2530;
  --color-secondary-300: #ecf0f1;
}`}
          </pre>

          <h3>Tmavé téma</h3>
          <pre>
            {`:root.dark-theme {
  --color-conversion-500: #e74c3c;
  --color-conversion-900: #c0392b;
  --color-primary-500: #34495e;
  --color-primary-700: #2c3e50;
  --color-secondary-300: #7f8c8d;
  --color-neutral-00: #2c3e50;
}`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcherDemo;
