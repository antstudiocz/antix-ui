import React from "react";
import { Button } from "../../src"; // Import z lokálního zdroje balíčku

// Použití typů z komponenty Button
type ButtonVariant = "solid" | "outlined" | "text";
type ButtonColor = "conversion" | "primary" | "secondary";
type ButtonSize = "xl" | "lg" | "md" | "sm";
type IconPosition = "left" | "right";

type ButtonProps = {
  variant: ButtonVariant;
  color: ButtonColor;
  size: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
};

// Definice typů scénářů
type ButtonVariantConfig = {
  variant: ButtonVariant;
  hasIcon: boolean;
  iconPosition?: IconPosition;
};

type ButtonScenario = {
  title: string;
  variants: ButtonVariantConfig[];
  colors: ButtonColor[];
  sizes: ButtonSize[];
};

/**
 * Komponenta pro ukázku všech variant tlačítek
 */
const ButtonVariantsDemo: React.FC = () => {
  // SVG pro ikonu tužky
  const PencilIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 4.16658L15.8334 7.49991M17.645 5.67658C18.0856 5.2361 18.3332 4.63863 18.3333 4.01562C18.3333 3.39261 18.0859 2.79508 17.6454 2.35449C17.205 1.9139 16.6075 1.66634 15.9845 1.66626C15.3615 1.66618 14.764 1.9136 14.3234 2.35408L3.20169 13.4782C3.00821 13.6712 2.86512 13.9087 2.78503 14.1699L1.68419 17.7966C1.66266 17.8686 1.66103 17.9452 1.67949 18.0181C1.69794 18.091 1.73579 18.1576 1.78902 18.2107C1.84225 18.2639 1.90888 18.3016 1.98183 18.32C2.05477 18.3383 2.13133 18.3366 2.20336 18.3149L5.83086 17.2149C6.09183 17.1355 6.32934 16.9933 6.52253 16.8007L17.645 5.67658Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  // SVG pro menší ikonu tužky
  const SmallPencilIcon = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 3.33326L12.6667 5.99993M14.116 4.54126C14.4685 4.18888 14.6665 3.71091 14.6666 3.2125C14.6666 2.71409 14.4687 2.23607 14.1163 1.8836C13.7639 1.53112 13.286 1.33307 12.7876 1.33301C12.2892 1.33295 11.8111 1.53088 11.4587 1.88326L2.56133 10.7826C2.40654 10.9369 2.29207 11.127 2.228 11.3359L1.34733 14.2373C1.3301 14.2949 1.3288 14.3562 1.34356 14.4145C1.35833 14.4728 1.38861 14.5261 1.43119 14.5686C1.47378 14.6111 1.52708 14.6413 1.58544 14.656C1.64379 14.6707 1.70504 14.6693 1.76266 14.6519L4.66466 13.7719C4.87344 13.7084 5.06345 13.5947 5.218 13.4406L14.116 4.54126Z"
        stroke="currentColor"
        strokeWidth="1.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const buttonScenarios: ButtonScenario[] = [
    {
      title: "Button Solid - bez ikony",
      variants: [{ variant: "solid", hasIcon: false }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Outlined - bez ikony",
      variants: [{ variant: "outlined", hasIcon: false }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Solid - s ikonou před",
      variants: [{ variant: "solid", hasIcon: true, iconPosition: "left" }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Outlined - s ikonou před",
      variants: [{ variant: "outlined", hasIcon: true, iconPosition: "left" }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Solid - s ikonou za",
      variants: [{ variant: "solid", hasIcon: true, iconPosition: "right" }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Outlined - s ikonou za",
      variants: [{ variant: "outlined", hasIcon: true, iconPosition: "right" }],
      colors: ["conversion", "primary", "secondary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Text - bez ikony",
      variants: [{ variant: "text", hasIcon: false }],
      colors: ["conversion", "primary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Text - s ikonou před",
      variants: [{ variant: "text", hasIcon: true, iconPosition: "left" }],
      colors: ["conversion", "primary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
    {
      title: "Button Text - s ikonou za",
      variants: [{ variant: "text", hasIcon: true, iconPosition: "right" }],
      colors: ["conversion", "primary"],
      sizes: ["xl", "lg", "md", "sm"],
    },
  ];

  // Pomocná funkce pro získání příslušné ikony na základě velikosti
  const getIcon = (size: ButtonSize): React.ReactNode => {
    return size === "sm" || size === "md" ? (
      <SmallPencilIcon />
    ) : (
      <PencilIcon />
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Ukázka variant tlačítka (Button)
        </h1>

        <div className="space-y-16">
          {buttonScenarios.map((scenario, scenarioIndex) => (
            <div
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              key={`scenario-${scenarioIndex}`}
            >
              <div className="absolute -top-4 left-8 bg-gray-50 dark:bg-gray-900 px-4 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {scenario.title}
                </h2>
              </div>

              <div className="mt-4 space-y-12">
                {scenario.variants.map((variant, variantIndex) => (
                  <React.Fragment key={`variant-${variantIndex}`}>
                    {scenario.colors.map((color, colorIndex) => (
                      <div
                        className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
                        key={`color-${colorIndex}`}
                      >
                        <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                          <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-lg font-medium text-gray-900 dark:text-white shadow-sm">
                            {color.charAt(0).toUpperCase() + color.slice(1)}
                          </div>
                          <div className="flex gap-2 flex-wrap">
                            <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                              variant=&quot;{variant.variant}&quot;
                            </code>
                            <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                              color=&quot;{color}&quot;
                            </code>
                            {variant.hasIcon && (
                              <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                                icon={variant.iconPosition || "left"}
                              </code>
                            )}
                          </div>
                        </div>

                        <div className="flex flex-wrap items-end gap-8">
                          {scenario.sizes.map((size, sizeIndex) => {
                            const buttonProps: ButtonProps = {
                              variant: variant.variant,
                              color: color,
                              size: size,
                            };

                            if (variant.hasIcon) {
                              buttonProps.icon = getIcon(size);
                              if (variant.iconPosition === "right") {
                                buttonProps.iconPosition = "right";
                              }
                            }

                            return (
                              <div
                                className="flex flex-col items-center gap-3"
                                key={`button-${sizeIndex}`}
                              >
                                <Button {...buttonProps}>Button text</Button>
                                <code className="text-xs bg-white dark:bg-gray-800 px-2 py-1 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                                  size=&quot;{size}&quot;
                                </code>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ButtonVariantsDemo;
