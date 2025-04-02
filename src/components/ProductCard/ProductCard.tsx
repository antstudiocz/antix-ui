import React from "react";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { cn } from "@/lib/utils";
import DeliveryIcon from "@/icons/DeliveryIcon";
import CartIcon from "@/icons/CartIcon";
import CheckIcon from "@/icons/CheckIcon";

export interface ProductBadge {
  /** Text to display in the badge */
  text: string;
  /** Background color in hex format (e.g. #FF0000) */
  backgroundColor?: string;
  /** Text color in hex format (e.g. #FFFFFF) */
  textColor?: string;
}

export interface ProductCardTexts {
  /** Text for add to cart button */
  addToCart?: string;
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
  /** Text content for the component */
  texts?: ProductCardTexts;
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
  texts = {},
  className,
}) => {
  const finalAddToCartText = texts.addToCart || "Add to cart";

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
          <div className="self-stretch text-center text-conversion-500 font-secondary text-product-price-original font-semibold line-through">
            <span>{originalPrice}</span>
          </div>
        )}
        <div className="self-stretch text-center text-secondary-800 font-secondary text-product-price-current">
          {currentPrice}
        </div>
      </div>

      <div className="flex flex-col justify-start items-center gap-6 w-full mt-auto">
        <div className="flex flex-col justify-start items-center">
          {deliveryStatus && (
            <div className="p-1 inline-flex justify-start items-center gap-1 overflow-hidden text-success ">
              <CheckIcon className="stroke-current" />
              <span className="font-secondary text-button-md font-semibold">
                {deliveryStatus}
              </span>
            </div>
          )}
          {storeAvailability && (
            <div className="p-1 inline-flex justify-start items-center gap-1 overflow-hidden text-success">
              <DeliveryIcon className="stroke-current" />
              <span className="font-secondary text-button-md font-semibold">
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
          aria-label={finalAddToCartText}
        >
          {finalAddToCartText}
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
