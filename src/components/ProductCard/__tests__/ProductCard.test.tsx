import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCard } from "../ProductCard";

describe("ProductCard", () => {
  const defaultProps = {
    imageUrl: "https://example.com/product-image.jpg",
    title: "Test Product",
    currentPrice: "299.00 Kč / pc",
    onAddToCart: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("rendering", () => {
    it("renders basic product card correctly", () => {
      render(<ProductCard {...defaultProps} />);

      expect(screen.getByText("Test Product")).toBeInTheDocument();
      expect(screen.getByText("299.00 Kč / pc")).toBeInTheDocument();
      expect(screen.getByAltText("Test Product")).toHaveAttribute(
        "src",
        "https://example.com/product-image.jpg"
      );
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("renders original price when provided", () => {
      render(<ProductCard {...defaultProps} originalPrice="399.00 Kč / pc" />);

      expect(screen.getByText("399.00 Kč / pc")).toBeInTheDocument();
    });

    it("renders badges when provided", () => {
      const badges = [
        { text: "Novinka" },
        { text: "Akce", backgroundColor: "#FF0000", textColor: "#FFFFFF" },
      ];

      render(<ProductCard {...defaultProps} badges={badges} />);

      expect(screen.getByText("Novinka")).toBeInTheDocument();
      expect(screen.getByText("Akce")).toBeInTheDocument();
    });

    it("renders delivery status when provided", () => {
      render(<ProductCard {...defaultProps} deliveryStatus="Doručíme dnes" />);

      expect(screen.getByText("Doručíme dnes")).toBeInTheDocument();
    });

    it("renders store availability when provided", () => {
      render(
        <ProductCard {...defaultProps} storeAvailability="Ihned na prodejně" />
      );

      expect(screen.getByText("Ihned na prodejně")).toBeInTheDocument();
    });

    it("renders all badges and availability info", () => {
      const badges = [
        { text: "Novinka" },
        { text: "Akce", backgroundColor: "#FF0000", textColor: "#FFFFFF" },
      ];

      render(
        <ProductCard
          {...defaultProps}
          badges={badges}
          deliveryStatus="Doručíme dnes"
          storeAvailability="Ihned na prodejně"
        />
      );

      expect(screen.getByText("Novinka")).toBeInTheDocument();
      expect(screen.getByText("Akce")).toBeInTheDocument();
      expect(screen.getByText("Doručíme dnes")).toBeInTheDocument();
      expect(screen.getByText("Ihned na prodejně")).toBeInTheDocument();
    });

    it("renders with custom text using texts object", () => {
      render(
        <ProductCard {...defaultProps} texts={{ addToCart: "Buy Now" }} />
      );

      expect(screen.getByText("Buy Now")).toBeInTheDocument();
    });
  });

  describe("interactions", () => {
    it("calls onAddToCart when add to cart button is clicked", () => {
      render(<ProductCard {...defaultProps} />);

      fireEvent.click(screen.getByRole("button"));
      expect(defaultProps.onAddToCart).toHaveBeenCalledTimes(1);
    });
  });

  describe("accessibility", () => {
    it("has accessible image with alt text", () => {
      render(<ProductCard {...defaultProps} />);

      const image = screen.getByAltText("Test Product");
      expect(image).toBeInTheDocument();
    });

    it("has accessible add to cart button", () => {
      render(
        <ProductCard {...defaultProps} texts={{ addToCart: "Add to Cart" }} />
      );

      const button = screen.getByRole("button");
      expect(button).toHaveAttribute("aria-label", "Add to Cart");
    });
  });
});
