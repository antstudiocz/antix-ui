import React from "react";
import { ProductCard } from "@/components/ProductCard/ProductCard";

// Typové definice pro komponenty
interface ProductBadge {
  text: string;
  backgroundColor?: string;
  textColor?: string;
}

interface ProductConfig {
  hasOriginalPrice: boolean;
  hasBadges: boolean;
  hasDeliveryStatus: boolean;
  hasStoreAvailability: boolean;
}

interface ProductCardData {
  title: string;
  imageUrl: string;
  currentPrice: string;
  originalPrice?: string;
  badges?: ProductBadge[];
  deliveryStatus?: string;
  storeAvailability?: string;
  config: ProductConfig;
}

// Definice typů scénářů
type ProductCardScenario = {
  title: string;
  products: ProductCardData[];
};

const ProductCardDemo: React.FC = () => {
  // Podobně jako v ButtonVariantsDemo definujeme scénáře
  const productCardScenarios: ProductCardScenario[] = [
    {
      title: "Kompletní produktová karta",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "iPhone 15 Pro",
          currentPrice: "999 Kč / ks",
          originalPrice: "1099 Kč / ks",
          badges: [
            { text: "Novinka" },
            {
              text: "Akce",
              backgroundColor: "#d13037",
              textColor: "#ffffff",
            },
          ],
          deliveryStatus: "Doručíme dnes",
          storeAvailability: "Skladem",
          config: {
            hasOriginalPrice: true,
            hasBadges: true,
            hasDeliveryStatus: true,
            hasStoreAvailability: true,
          },
        },
      ],
    },
    {
      title: "Karta s původní cenou",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "MacBook Pro 16",
          currentPrice: "2499 Kč / ks",
          originalPrice: "2799 Kč / ks",
          config: {
            hasOriginalPrice: true,
            hasBadges: false,
            hasDeliveryStatus: false,
            hasStoreAvailability: false,
          },
        },
      ],
    },
    {
      title: "Karta s odznaky",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "MacBook Air M2",
          currentPrice: "1899 Kč / ks",
          badges: [
            { text: "Premium" },
            { text: "Top", backgroundColor: "#2e7d32", textColor: "#ffffff" },
          ],
          config: {
            hasOriginalPrice: false,
            hasBadges: true,
            hasDeliveryStatus: false,
            hasStoreAvailability: false,
          },
        },
      ],
    },
    {
      title: "Karta s informací o doručení",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "iPad Pro",
          currentPrice: "799 Kč / ks",
          deliveryStatus: "Expedice do 2 dnů",
          config: {
            hasOriginalPrice: false,
            hasBadges: false,
            hasDeliveryStatus: true,
            hasStoreAvailability: false,
          },
        },
      ],
    },
    {
      title: "Karta s dostupností v obchodě",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "AirPods Pro",
          currentPrice: "599 Kč / ks",
          storeAvailability: "Dostupné na prodejnách",
          config: {
            hasOriginalPrice: false,
            hasBadges: false,
            hasDeliveryStatus: false,
            hasStoreAvailability: true,
          },
        },
      ],
    },
    {
      title: "Minimální karta",
      products: [
        {
          imageUrl: "https://placehold.co/253x180",
          title: "Apple Watch SE",
          currentPrice: "349 Kč / ks",
          config: {
            hasOriginalPrice: false,
            hasBadges: false,
            hasDeliveryStatus: false,
            hasStoreAvailability: false,
          },
        },
      ],
    },
  ];

  const handleAddToCart = () => {
    console.log("Product added to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Ukázka variant produktových karet
        </h1>

        <div className="space-y-16">
          {productCardScenarios.map((scenario, scenarioIndex) => (
            <div
              className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
              key={`scenario-${scenarioIndex}`}
            >
              <div className="absolute -top-4 left-8 bg-gray-50 dark:bg-gray-900 px-4 py-1 rounded-full border border-gray-200 dark:border-gray-600">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {scenario.title}
                </h2>
              </div>

              <div className="mt-4 space-y-8">
                {scenario.products.map((product, productIndex) => (
                  <div
                    className="relative bg-gray-50 dark:bg-gray-900 rounded-xl p-6"
                    key={`product-${productIndex}`}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                      <div className="px-3 py-1 bg-white dark:bg-gray-800 rounded-md text-lg font-medium text-gray-900 dark:text-white shadow-sm">
                        {product.title}
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {product.config.hasOriginalPrice && (
                          <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                            originalPrice=&quot;{product.originalPrice}&quot;
                          </code>
                        )}
                        {product.config.hasBadges && (
                          <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                            badges={product.badges?.length}
                          </code>
                        )}
                        {product.config.hasDeliveryStatus && (
                          <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                            deliveryStatus=&quot;{product.deliveryStatus}&quot;
                          </code>
                        )}
                        {product.config.hasStoreAvailability && (
                          <code className="px-2 py-1 text-sm bg-white dark:bg-gray-800 rounded-md text-gray-700 dark:text-gray-300 font-mono shadow-sm">
                            storeAvailability=&quot;{product.storeAvailability}
                            &quot;
                          </code>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-center">
                      <div className="max-w-xs shadow-md rounded-lg overflow-hidden bg-white">
                        <ProductCard
                          imageUrl={product.imageUrl}
                          title={product.title}
                          currentPrice={product.currentPrice}
                          originalPrice={
                            product.config.hasOriginalPrice
                              ? product.originalPrice
                              : undefined
                          }
                          badges={
                            product.config.hasBadges
                              ? product.badges
                              : undefined
                          }
                          deliveryStatus={
                            product.config.hasDeliveryStatus
                              ? product.deliveryStatus
                              : undefined
                          }
                          storeAvailability={
                            product.config.hasStoreAvailability
                              ? product.storeAvailability
                              : undefined
                          }
                          onAddToCart={handleAddToCart}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCardDemo;
