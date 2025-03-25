import React from 'react';
import { render } from '@testing-library/react';
import { ProductCard } from '../ProductCard';
import '../../../translations/i18n';

describe('ProductCard Snapshots', () => {
  const defaultProps = {
    imageUrl: 'https://example.com/product-image.jpg',
    title: 'Test Product',
    currentPrice: '299.00 Kč / pc',
    onAddToCart: jest.fn(),
  };

  it('matches snapshot with minimal props', () => {
    const { container } = render(<ProductCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with all props', () => {
    const badges = [
      { text: 'Novinka' },
      { text: 'Akce', backgroundColor: '#FF0000', textColor: '#FFFFFF' }
    ];

    const { container } = render(
      <ProductCard 
        {...defaultProps}
        originalPrice="399.00 Kč / pc"
        badges={badges}
        deliveryStatus="Doručíme dnes"
        storeAvailability="Ihned na prodejně"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with original price only', () => {
    const { container } = render(
      <ProductCard 
        {...defaultProps}
        originalPrice="399.00 Kč / pc"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with badges only', () => {
    const badges = [
      { text: 'Novinka' },
      { text: 'Akce', backgroundColor: '#FF0000', textColor: '#FFFFFF' }
    ];

    const { container } = render(
      <ProductCard 
        {...defaultProps}
        badges={badges}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with delivery status only', () => {
    const { container } = render(
      <ProductCard 
        {...defaultProps}
        deliveryStatus="Doručíme dnes"
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('matches snapshot with store availability only', () => {
    const { container } = render(
      <ProductCard 
        {...defaultProps}
        storeAvailability="Ihned na prodejně"
      />
    );
    expect(container).toMatchSnapshot();
  });
}); 