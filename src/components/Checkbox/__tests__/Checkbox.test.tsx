import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Checkbox } from "../Checkbox";

describe("Checkbox", () => {
  it("renders correctly with default props", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(<Checkbox variant="primary" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveClass("border-primary-500/20");
  });

  it("is unchecked by default", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  it("changes state when clicked", () => {
    render(<Checkbox defaultChecked={false} />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox.getAttribute("data-state")).toBe("checked");
  });

  it("renders with custom icon when provided", () => {
    const CustomIcon = () => <div data-testid="custom-icon">✓</div>;
    render(<Checkbox checked icon={<CustomIcon />} />);

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });
});
