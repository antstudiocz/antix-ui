import React from 'react';
import { ProductCard } from '../../src/components';
import '../../src/translations/i18n';
import styles from './ProductCardDemo.module.css';

const formatPrice = (price: number) => {
  return `${price.toFixed(2)} Kč / ks`;
};

export const ProductCardDemo: React.FC = () => {
  const handleAddToCart = () => {
    console.log('Product added to cart');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Product Card Demo</h2>
      <div className={styles.cardGrid}>
        <ProductCard
          imageUrl="https://placehold.co/253x180"
          title="Nadpis karty produkty"
          originalPrice={formatPrice(44.90)}
          currentPrice={formatPrice(559.00)}
          badges={[
            { text: 'Novinka' },
            { text: 'Akce', backgroundColor: '#d13037', textColor: '#ffffff' }
          ]}
          deliveryStatus='Doručíme dnes'
          storeAvailability='Ihned na prodejně'
          onAddToCart={handleAddToCart}
        />

        <ProductCard
          imageUrl="https://placehold.co/253x180"
          title="Produkt bez původní ceny"
          currentPrice={formatPrice(299.00)}
          badges={[
            { text: 'Novinka' },
            { text: 'Akce', backgroundColor: '#d13037', textColor: '#ffffff' }
          ]}
          deliveryStatus='Doručíme dnes'
          onAddToCart={handleAddToCart}
        />

        <ProductCard
          imageUrl="https://placehold.co/253x180"
          title="Produkt pouze na prodejně"
          currentPrice={formatPrice(159.00)}
          badges={[
            { text: 'Novinka' },
            { text: 'Akce', backgroundColor: '#d13037', textColor: '#ffffff' }
          ]}
          storeAvailability='Ihned na prodejně'
          onAddToCart={handleAddToCart}
        />

        {/* Example with custom availability texts */}
        <ProductCard
          imageUrl="https://placehold.co/253x180"
          title="Produkt s vlastními texty dostupnosti"
          currentPrice={formatPrice(199.00)}
          deliveryStatus="Doručení do 2 dnů"
          storeAvailability="Dostupné na 3 prodejnách"
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
}; 