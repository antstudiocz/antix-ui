import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../Button";

describe("Button", () => {
  it("renders children correctly", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies different variants correctly", () => {
    const { rerender } = render(<Button variant="solid">Solid</Button>);
    const solidButton = screen.getByText("Solid").closest("button");
    expect(solidButton).toHaveClass("bg-conversion-500");

    rerender(<Button variant="outlined">Outlined</Button>);
    const outlinedButton = screen.getByText("Outlined").closest("button");
    expect(outlinedButton).toHaveClass("outline-current");

    rerender(<Button variant="text">Text</Button>);
    const textButton = screen.getByText("Text").closest("button");
    expect(textButton).toHaveClass("*:underline");
  });

  it("applies different colors correctly", () => {
    const { rerender } = render(<Button color="conversion">Conversion</Button>);
    const conversionButton = screen.getByText("Conversion").closest("button");
    expect(conversionButton).toHaveClass("text-conversion-500");

    rerender(<Button color="primary">Primary</Button>);
    const primaryButton = screen.getByText("Primary").closest("button");
    expect(primaryButton).toHaveClass("text-primary-500");

    rerender(<Button color="secondary">Secondary</Button>);
    const secondaryButton = screen.getByText("Secondary").closest("button");
    expect(secondaryButton).toHaveClass("bg-secondary-300");
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(<Button size="sm">Small</Button>);
    const smallButton = screen.getByText("Small").closest("button");
    expect(smallButton).toHaveClass("py-2");

    rerender(<Button size="md">Medium</Button>);
    const mediumButton = screen.getByText("Medium").closest("button");
    expect(mediumButton).toHaveClass("py-3");

    rerender(<Button size="lg">Large</Button>);
    const largeButton = screen.getByText("Large").closest("button");
    expect(largeButton).toHaveClass("py-3.5");
  });

  it("disables button when disabled prop is true", () => {
    render(<Button disabled>Disabled</Button>);
    const disabledButton = screen.getByText("Disabled").closest("button");
    expect(disabledButton).toBeDisabled();
  });

  it("renders with icon when provided", () => {
    render(<Button icon={<span>🔍</span>}>With Icon</Button>);
    expect(screen.getByText("🔍")).toBeInTheDocument();
  });
});
