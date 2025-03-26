import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import DeliveryIcon from "@/icons/DeliveryIcon";
import CartIcon from "@/icons/CartIcon";

export interface ProductBadge {
  /** Text to display in the badge */
  text: string;
  /** Background color in hex format (e.g. #FF0000) */
  backgroundColor?: string;
  /** Text color in hex format (e.g. #FFFFFF) */
  textColor?: string;
}

export interface ProductCardProps {
  /** Product image URL */
  imageUrl: string;
  /** Product title */
  title: string;
  /** Original price (formatted) */
  originalPrice?: string;
  /** Current price (formatted) */
  currentPrice: string;
  /** Array of badges to display */
  badges?: ProductBadge[];
  /** Custom delivery status text. If undefined, no delivery status will be shown */
  deliveryStatus?: string;
  /** Custom store availability text. If undefined, no store availability will be shown */
  storeAvailability?: string;
  /** Callback when add to cart button is clicked */
  onAddToCart?: () => void;
  /** Translation namespace for the component */
  translationNamespace?: string;
  /** Additional CSS classes */
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  originalPrice,
  currentPrice,
  badges = [],
  deliveryStatus,
  storeAvailability,
  onAddToCart,
  translationNamespace = "productCard",
  className,
}) => {
  const { t } = useTranslation(translationNamespace);

  return (
    <div
      className={cn(
        "w-[var(--product-card-width)] max-h-[var(--product-card-height)] p-2 pb-8 relative bg-neutral-00 rounded-xl",
        "shadow-sm",
        "flex flex-col items-center gap-3 overflow-hidden",
        className
      )}
    >
      <img
        className="self-stretch h-[var(--product-card-image-height)] rounded-lg object-cover flex-shrink-0"
        src={imageUrl}
        alt={title}
      />

      <h4 className="self-stretch text-center text-secondary-800 font-secondary text-product-title font-semibold m-0 min-h-[var(--product-card-title-min-height)] line-clamp-[var(--product-card-title-line-clamp)] overflow-hidden">
        {title}
      </h4>

      <div className="flex flex-col justify-start items-center gap-1 flex-shrink-0 w-full">
        {originalPrice && (
          <div className="self-stretch text-center text-conversion-500 font-secondary text-button2 font-semibold line-through">
            <span>{originalPrice}</span>
          </div>
        )}
        <div className="self-stretch text-center text-secondary-800 font-secondary text-button1 font-bold">
          {currentPrice}
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-6 w-full mt-auto">
        <div className="flex flex-col justify-start items-center">
          {deliveryStatus && (
            <div className="p-1 inline-flex justify-start items-center gap-1 overflow-hidden">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-success"
              >
                <path
                  d="M9.33325 9.99996V1.99996C9.33325 1.64634 9.19278 1.3072 8.94273 1.05715C8.69268 0.807102 8.35354 0.666626 7.99992 0.666626H2.66659C2.31296 0.666626 1.97382 0.807102 1.72378 1.05715C1.47373 1.3072 1.33325 1.64634 1.33325 1.99996V9.33329C1.33325 9.5101 1.40349 9.67967 1.52851 9.8047C1.65354 9.92972 1.82311 9.99996 1.99992 9.99996H3.33325M3.33325 9.99996C3.33325 10.7363 3.93021 11.3333 4.66659 11.3333C5.40297 11.3333 5.99992 10.7363 5.99992 9.99996M3.33325 9.99996C3.33325 9.26358 3.93021 8.66663 4.66659 8.66663C5.40297 8.66663 5.99992 9.26358 5.99992 9.99996M9.99992 9.99996H5.99992M9.99992 9.99996C9.99992 10.7363 10.5969 11.3333 11.3333 11.3333C12.0696 11.3333 12.6666 10.7363 12.6666 9.99996M9.99992 9.99996C9.99992 9.26358 10.5969 8.66663 11.3333 8.66663C12.0696 8.66663 12.6666 9.26358 12.6666 9.99996M12.6666 9.99996H13.9999C14.1767 9.99996 14.3463 9.92972 14.4713 9.8047C14.5963 9.67967 14.6666 9.5101 14.6666 9.33329V6.89996C14.6663 6.74867 14.6146 6.60197 14.5199 6.48396L12.1999 3.58396C12.1376 3.50588 12.0585 3.44281 11.9685 3.39942C11.8784 3.35604 11.7798 3.33343 11.6799 3.33329H9.33325"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-success font-secondary text-button2 font-semibold">
                {deliveryStatus}
              </span>
            </div>
          )}
          {storeAvailability && (
            <div className="p-1 inline-flex justify-start items-center gap-1 overflow-hidden">
              <DeliveryIcon />
              <span className="text-success font-secondary text-button2 font-semibold">
                {storeAvailability}
              </span>
            </div>
          )}
        </div>

        <Button
          variant="solid"
          color="conversion"
          size="lg"
          icon={<CartIcon />}
          onClick={onAddToCart}
          aria-label={t("addToCart")}
        >
          {t("addToCart")}
        </Button>
      </div>

      {badges.length > 0 && (
        <div className="absolute left-5 top-5 flex flex-col gap-1.5 z-10">
          {badges.map((badge, index) => (
            <Badge
              key={`${badge.text}-${index}`}
              style={{
                backgroundColor: badge.backgroundColor || "#000000",
                color: badge.textColor || "#FFFFFF",
              }}
              className="font-secondary !text-product-badge font-semibold"
            >
              {badge.text}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
