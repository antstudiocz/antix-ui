import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import '../../../translations/i18n';

describe('ProductCard', () => {
  const defaultProps = {
    imageUrl: 'https://example.com/product-image.jpg',
    title: 'Test Product',
    currentPrice: '299.00 Kč / pc',
    onAddToCart: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('rendering', () => {
    it('renders basic product card correctly', () => {
      render(<ProductCard {...defaultProps} />);
      
      expect(screen.getByText('Test Product')).toBeInTheDocument();
      expect(screen.getByText('299.00 Kč / pc')).toBeInTheDocument();
      expect(screen.getByAltText('Test Product')).toHaveAttribute('src', 'https://example.com/product-image.jpg');
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders original price when provided', () => {
      render(
        <ProductCard 
          {...defaultProps} 
          originalPrice="399.00 Kč / pc" 
        />
      );
      
      expect(screen.getByText('399.00 Kč / pc')).toBeInTheDocument();
    });

    it('renders badges when provided', () => {
      const badges = [
        { text: 'Novinka' },
        { text: 'Akce', backgroundColor: '#FF0000', textColor: '#FFFFFF' }
      ];

      render(<ProductCard {...defaultProps} badges={badges} />);
      
      expect(screen.getByText('Novinka')).toBeInTheDocument();
      expect(screen.getByText('Akce')).toBeInTheDocument();
    });

    it('renders Delivery Today badge when isDeliveryToday is true', () => {
      render(<ProductCard {...defaultProps} isDeliveryToday={true} />);
      
      expect(screen.getByText('Doručíme dnes')).toBeInTheDocument();
    });

    it('renders In Store badge when isInStore is true', () => {
      render(<ProductCard {...defaultProps} isInStore={true} />);
      
      expect(screen.getByText('Ihned na prodejně')).toBeInTheDocument();
    });

    it('renders all badges and availability info', () => {
      const badges = [
        { text: 'Novinka' },
        { text: 'Akce', backgroundColor: '#FF0000', textColor: '#FFFFFF' }
      ];

      render(
        <ProductCard 
          {...defaultProps} 
          badges={badges}
          isDeliveryToday={true} 
          isInStore={true} 
        />
      );
      
      expect(screen.getByText('Novinka')).toBeInTheDocument();
      expect(screen.getByText('Akce')).toBeInTheDocument();
      expect(screen.getByText('Doručíme dnes')).toBeInTheDocument();
      expect(screen.getByText('Ihned na prodejně')).toBeInTheDocument();
    });
  });

  describe('interactions', () => {
    it('calls onAddToCart when add to cart button is clicked', () => {
      render(<ProductCard {...defaultProps} />);
      
      fireEvent.click(screen.getByRole('button'));
      expect(defaultProps.onAddToCart).toHaveBeenCalledTimes(1);
    });
  });

  describe('accessibility', () => {
    it('has accessible image with alt text', () => {
      render(<ProductCard {...defaultProps} />);
      
      const image = screen.getByAltText('Test Product');
      expect(image).toBeInTheDocument();
    });
    
    it('has accessible add to cart button', () => {
      render(<ProductCard {...defaultProps} />);
      
      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('aria-label', 'Do košíku');
    });
  });
}); 