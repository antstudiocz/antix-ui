import React from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../Button/Button";
import styles from "./ProductCard.module.css";

export interface Badge {
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
  badges?: Badge[];
  /** Whether the product is available for delivery today */
  isDeliveryToday?: boolean;
  /** Whether the product is available in store */
  isInStore?: boolean;
  /** Callback when add to cart button is clicked */
  onAddToCart?: () => void;
  /** Translation namespace for the component */
  translationNamespace?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  imageUrl,
  title,
  originalPrice,
  currentPrice,
  badges = [],
  isDeliveryToday = false,
  isInStore = false,
  onAddToCart,
  translationNamespace = "productCard",
}) => {
  const { t } = useTranslation(translationNamespace);

  const CartIcon = () => (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.20825 1.70837H2.87492L5.09159 12.0584C5.1729 12.4374 5.38381 12.7763 5.68801 13.0166C5.99221 13.2569 6.37067 13.3837 6.75825 13.375H14.9083C15.2876 13.3744 15.6553 13.2444 15.9508 13.0066C16.2462 12.7687 16.4517 12.4371 16.5333 12.0667L17.9083 5.87504H3.76659M6.99992 17.5C6.99992 17.9603 6.62682 18.3334 6.16659 18.3334C5.70635 18.3334 5.33325 17.9603 5.33325 17.5C5.33325 17.0398 5.70635 16.6667 6.16659 16.6667C6.62682 16.6667 6.99992 17.0398 6.99992 17.5ZM16.1666 17.5C16.1666 17.9603 15.7935 18.3334 15.3333 18.3334C14.873 18.3334 14.4999 17.9603 14.4999 17.5C14.4999 17.0398 14.873 16.6667 15.3333 16.6667C15.7935 16.6667 16.1666 17.0398 16.1666 17.5Z"
        stroke="currentColor"
        strokeWidth="1.66667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className={styles.card}>
      <img className={styles.image} src={imageUrl} alt={title} />
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.priceContainer}>
        {originalPrice && (
          <div className={styles.priceOriginal}>
            <span>{originalPrice}</span>
          </div>
        )}
        <div className={styles.priceCurrent}>{currentPrice}</div>
      </div>

      <div className={styles.bottomContainer}>
        <div className={styles.availabilityContainer}>
          {isDeliveryToday && (
            <div className={styles.availabilityItem}>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.33325 9.99996V1.99996C9.33325 1.64634 9.19278 1.3072 8.94273 1.05715C8.69268 0.807102 8.35354 0.666626 7.99992 0.666626H2.66659C2.31296 0.666626 1.97382 0.807102 1.72378 1.05715C1.47373 1.3072 1.33325 1.64634 1.33325 1.99996V9.33329C1.33325 9.5101 1.40349 9.67967 1.52851 9.8047C1.65354 9.92972 1.82311 9.99996 1.99992 9.99996H3.33325M3.33325 9.99996C3.33325 10.7363 3.93021 11.3333 4.66659 11.3333C5.40297 11.3333 5.99992 10.7363 5.99992 9.99996M3.33325 9.99996C3.33325 9.26358 3.93021 8.66663 4.66659 8.66663C5.40297 8.66663 5.99992 9.26358 5.99992 9.99996M9.99992 9.99996H5.99992M9.99992 9.99996C9.99992 10.7363 10.5969 11.3333 11.3333 11.3333C12.0696 11.3333 12.6666 10.7363 12.6666 9.99996M9.99992 9.99996C9.99992 9.26358 10.5969 8.66663 11.3333 8.66663C12.0696 8.66663 12.6666 9.26358 12.6666 9.99996M12.6666 9.99996H13.9999C14.1767 9.99996 14.3463 9.92972 14.4713 9.8047C14.5963 9.67967 14.6666 9.5101 14.6666 9.33329V6.89996C14.6663 6.74867 14.6146 6.60197 14.5199 6.48396L12.1999 3.58396C12.1376 3.50588 12.0585 3.44281 11.9685 3.39942C11.8784 3.35604 11.7798 3.33343 11.6799 3.33329H9.33325"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t("deliveryToday")}</span>
            </div>
          )}
          {isInStore && (
            <div className={styles.availabilityItem}>
              <svg
                width="12"
                height="9"
                viewBox="0 0 12 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.3334 1L4.00008 8.33333L0.666748 5"
                  stroke="currentColor"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>{t("inStore")}</span>
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
          className={styles.addToCartButton}
        >
          {t("addToCart")}
        </Button>
      </div>

      {badges.map((badge, index) => (
        <div
          key={`${badge.text}-${index}`}
          className={styles.badge}
          style={{
            backgroundColor: badge.backgroundColor || '#000000',
            color: badge.textColor || '#FFFFFF',
            top: `${20 + (index * 32)}px`,
          }}
        >
          {badge.text}
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
