import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PaginationButton } from "../PaginationButton";

describe("PaginationButton", () => {
  it("renders correctly with default props", () => {
    render(<PaginationButton>Next</PaginationButton>);
    const button = screen.getByRole("button", { name: /next/i });
    expect(button).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<PaginationButton variant="outline">Prev</PaginationButton>);
    const button = screen.getByRole("button", { name: /prev/i });
    expect(button).toHaveClass("bg-secondary-300");
  });

  it("applies the correct size class", () => {
    render(<PaginationButton size="lg">Page 2</PaginationButton>);
    const button = screen.getByRole("button", { name: /page 2/i });
    expect(button).toHaveClass("h-10");
  });

  it("renders with an icon", () => {
    const TestIcon = () => <svg data-testid="test-icon" />;
    render(<PaginationButton icon={<TestIcon />}>With Icon</PaginationButton>);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<PaginationButton disabled>Disabled</PaginationButton>);
    expect(screen.getByRole("button", { name: /disabled/i })).toBeDisabled();
  });
});
