import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Badge } from "../Badge";

describe("Badge", () => {
  it("renders correctly with default props", () => {
    render(<Badge>New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Badge variant="destructive">Error</Badge>);
    const badge = screen.getByText("Error");
    expect(badge).toHaveClass("bg-destructive");
  });

  it("renders with an icon", () => {
    const TestIcon = () => <svg data-testid="test-icon" />;
    render(<Badge icon={<TestIcon />}>With Icon</Badge>);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
    expect(screen.getByText("With Icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Badge className="test-class">Custom Class</Badge>);
    expect(screen.getByText("Custom Class")).toHaveClass("test-class");
  });

  it("supports custom HTML elements", () => {
    render(
      <Badge>
        <a href="#test" data-testid="badge-link">
          Link Badge
        </a>
      </Badge>
    );
    const badge = screen.getByText("Link Badge");
    expect(badge.tagName).toBe("A");
    expect(badge).toHaveAttribute("href", "#test");
  });
});
