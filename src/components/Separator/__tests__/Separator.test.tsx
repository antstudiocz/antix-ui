import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "../Separator";

describe("Separator", () => {
  it("renders horizontal separator by default", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;

    expect(separator).toHaveAttribute("data-orientation", "horizontal");
    expect(separator).toHaveClass("data-[orientation=horizontal]:h-px");
    expect(separator).toHaveClass("data-[orientation=horizontal]:w-full");
  });

  it("renders vertical separator when orientation is set to vertical", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.firstChild;

    expect(separator).toHaveAttribute("data-orientation", "vertical");
    expect(separator).toHaveClass("data-[orientation=vertical]:h-full");
    expect(separator).toHaveClass("data-[orientation=vertical]:w-px");
  });

  it("renders decorative separator by default", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild;

    expect(separator).not.toHaveAttribute("aria-orientation");
    expect(separator).toHaveAttribute("role", "none");
  });

  it("renders non-decorative separator when decorative is set to false", () => {
    const { container } = render(<Separator decorative={false} />);
    const separator = container.firstChild;

    expect(separator).toHaveAttribute("role", "separator");
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="test-class" />);
    const separator = container.firstChild;

    expect(separator).toHaveClass("test-class");
  });
});
