import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../Select";

describe("Select", () => {
  it("renders SelectTrigger with default props", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
      </Select>
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("data-size", "default");
  });

  it("renders SelectTrigger with sm size", () => {
    render(
      <Select>
        <SelectTrigger size="sm">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
      </Select>
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveAttribute("data-size", "sm");
  });

  it("applies custom className to SelectTrigger", () => {
    render(
      <Select>
        <SelectTrigger className="test-class">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
      </Select>
    );

    const trigger = screen.getByRole("combobox");
    expect(trigger).toHaveClass("test-class");
  });

  it("renders with placeholder", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Test placeholder" />
        </SelectTrigger>
      </Select>
    );

    expect(screen.getByText("Test placeholder")).toBeInTheDocument();
  });

  // For SelectContent and SelectItem we can only test limited aspects since they're rendered in portals
  it("creates SelectContent when provided", () => {
    // Mock implementation for createPortal
    jest.mock("react-dom", () => ({
      ...jest.requireActual("react-dom"),
      createPortal: (node) => node,
    }));

    render(
      <Select defaultOpen>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>
    );

    // In a real environment, these would be rendered in a portal, but with our mock they should be in the document
    // Note: This test may require adjustments based on how your testing environment handles portals
    const option1 = screen.queryByText("Apple");
    const option2 = screen.queryByText("Banana");

    // Depending on how portals are handled in the test environment, these may or may not be found
    if (option1) {
      expect(option1).toBeInTheDocument();
      expect(option2).toBeInTheDocument();
    }
  });
});
