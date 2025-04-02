# FilterPanel Component

FilterPanel je komponenta pro zobrazování a správu filtrů produktů. Umožňuje uživatelům filtrovat produkty podle různých kritérií a řadit je.

## Popis

Komponenta kombinuje:

- Panel nadpisu a popisu
- Dropdown pro řazení
- Popover menu pro filtry na počítačích
- Postranní panel pro filtry na mobilních zařízeních
- Zobrazení aktivních filtrů s možností jejich odstranění

## Použití

```tsx
import { FilterPanel } from "@/components/FilterPanel/FilterPanel";

const sortOptions = [
  { name: "Nejpopulárnější", value: "popular", current: true },
  { name: "Nejnovější", value: "newest", current: false },
  { name: "Nejlevnější", value: "price-asc", current: false },
];

const filters = [
  {
    id: "category",
    name: "Kategorie",
    options: [
      { value: "new-arrivals", label: "Novinky", checked: false },
      { value: "tees", label: "Trička", checked: false },
      { value: "objects", label: "Objekty", checked: true },
    ],
  },
  {
    id: "color",
    name: "Barva",
    options: [
      { value: "white", label: "Bílá", checked: false },
      { value: "beige", label: "Béžová", checked: false },
      { value: "blue", label: "Modrá", checked: false },
    ],
  },
];

const activeFilters = [{ value: "objects", label: "Objekty" }];

export default function ProductListingPage() {
  return (
    <FilterPanel
      sortOptions={sortOptions}
      filters={filters}
      activeFilters={activeFilters}
      heading="Výprodej pracovních potřeb"
      description="Naše pečlivě navržené pracovní předměty jsou vyráběny v limitovaných sériích."
      onSortChange={(value) => console.log("Sort changed:", value)}
      onFilterChange={(sectionId, value, checked) => {
        console.log("Filter changed:", sectionId, value, checked);
      }}
      onFilterRemove={(filter) => {
        console.log("Filter removed:", filter);
      }}
    />
  );
}
```

## Props

| Prop             | Typ                                                            | Výchozí                 | Popis                                                   |
| ---------------- | -------------------------------------------------------------- | ----------------------- | ------------------------------------------------------- |
| `sortOptions`    | `SortOption[]`                                                 | `[]`                    | Možnosti řazení v dropdown menu                         |
| `filters`        | `FilterSection[]`                                              | `[]`                    | Sekce filtrů zobrazené v popover menu a mobilním panelu |
| `activeFilters`  | `ActiveFilter[]`                                               | `[]`                    | Aktuálně aktivní filtry                                 |
| `heading`        | `string`                                                       | `"Workspace sale"`      | Nadpis zobrazený nad filtry                             |
| `description`    | `string`                                                       | `"Our thoughtfully..."` | Text zobrazený pod nadpisem                             |
| `onSortChange`   | `(value: string) => void`                                      | -                       | Callback při výběru možnosti řazení                     |
| `onFilterChange` | `(sectionId: string, value: string, checked: boolean) => void` | -                       | Callback při změně filtru                               |
| `onFilterRemove` | `(filter: ActiveFilter) => void`                               | -                       | Callback při odstranění aktivního filtru                |

## Typy

```tsx
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
```

## Poznámky

- Pro mobilní zařízení se filtry zobrazují v postranním panelu (Sheet)
- Na počítačích se filtry zobrazují v popover menu
- Komponenta používá prvořadé Antix UI komponenty pro Sheet, Popover, Checkbox a RadioGroup
- Aktivní filtry jsou zobrazeny jako odstraňovatelné štítky
