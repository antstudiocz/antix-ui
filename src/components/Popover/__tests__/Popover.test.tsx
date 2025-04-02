import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "../Popover";

// Mock the Portal implementation for testing
jest.mock("@radix-ui/react-popover", () => {
  const actual = jest.requireActual("@radix-ui/react-popover");
  return {
    ...actual,
    Portal: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("Popover", () => {
  it("renders popover trigger correctly", () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText("Open Popover")).toBeInTheDocument();
  });

  it("renders popover with custom align and sideOffset values", () => {
    render(
      <div data-testid="test-container">
        <Popover defaultOpen>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent
            align="start"
            sideOffset={8}
            data-testid="popover-content"
          >
            Popover content
          </PopoverContent>
        </Popover>
      </div>
    );

    const container = screen.getByTestId("test-container");
    const content = container.querySelector('[data-testid="popover-content"]');

    expect(content).toHaveAttribute("data-align", "start");
    expect(content).toHaveAttribute("data-side-offset", "8");
  });

  it("applies custom className to popover content", () => {
    render(
      <div data-testid="test-container">
        <Popover defaultOpen>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent className="custom-content">
            Popover content
          </PopoverContent>
        </Popover>
      </div>
    );

    const container = screen.getByTestId("test-container");
    const content = container.querySelector('[data-slot="popover-content"]');

    expect(content).toHaveClass("custom-content");
  });

  it("renders with popover anchor", () => {
    render(
      <div data-testid="test-container">
        <Popover>
          <PopoverAnchor>
            <div data-testid="anchor-element">Anchor</div>
          </PopoverAnchor>
          <PopoverTrigger>Open Popover</PopoverTrigger>
          <PopoverContent>Popover content</PopoverContent>
        </Popover>
      </div>
    );

    expect(screen.getByTestId("anchor-element")).toBeInTheDocument();
  });
});
