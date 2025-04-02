import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetTitle,
  SheetDescription,
  SheetHeader,
  SheetFooter,
} from "../Sheet";

// Mock the Portal implementation for testing
jest.mock("@radix-ui/react-dialog", () => {
  const actual = jest.requireActual("@radix-ui/react-dialog");
  return {
    ...actual,
    Portal: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  };
});

describe("Sheet", () => {
  it("renders sheet trigger correctly", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>Sheet content</SheetContent>
      </Sheet>
    );

    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("renders sheet with different sides", () => {
    render(
      <div data-testid="test-container">
        <Sheet defaultOpen>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent side="left" data-testid="sheet-content">
            Sheet content
          </SheetContent>
        </Sheet>
      </div>
    );

    const container = screen.getByTestId("test-container");
    const content = container.querySelector('[data-testid="sheet-content"]');

    expect(content).toHaveClass("data-[state=open]:slide-in-from-left");
    expect(content).toHaveClass("inset-y-0 left-0");
  });

  it("renders sheet components with correct classes", () => {
    render(
      <div data-testid="test-container">
        <Sheet defaultOpen>
          <SheetTrigger>Open Sheet</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Sheet Title</SheetTitle>
              <SheetDescription>Sheet Description</SheetDescription>
            </SheetHeader>
            <p>Sheet content</p>
            <SheetFooter>
              <button>Close</button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );

    const container = screen.getByTestId("test-container");

    expect(
      container.querySelector('[data-slot="sheet-title"]')
    ).toHaveTextContent("Sheet Title");
    expect(
      container.querySelector('[data-slot="sheet-description"]')
    ).toHaveTextContent("Sheet Description");
    expect(
      container.querySelector('[data-slot="sheet-header"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="sheet-footer"]')
    ).toBeInTheDocument();
    expect(container.querySelector("p")).toHaveTextContent("Sheet Description");
  });

  it("applies custom className to sheet components", () => {
    render(
      <div data-testid="test-container">
        <Sheet defaultOpen>
          <SheetContent className="custom-content">
            <SheetHeader className="custom-header">
              <SheetTitle className="custom-title">Title</SheetTitle>
              <SheetDescription className="custom-description">
                Description
              </SheetDescription>
            </SheetHeader>
            <SheetFooter className="custom-footer">
              <button>Close</button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    );

    const container = screen.getByTestId("test-container");

    expect(container.querySelector('[data-slot="sheet-content"]')).toHaveClass(
      "custom-content"
    );
    expect(container.querySelector('[data-slot="sheet-header"]')).toHaveClass(
      "custom-header"
    );
    expect(container.querySelector('[data-slot="sheet-title"]')).toHaveClass(
      "custom-title"
    );
    expect(
      container.querySelector('[data-slot="sheet-description"]')
    ).toHaveClass("custom-description");
    expect(container.querySelector('[data-slot="sheet-footer"]')).toHaveClass(
      "custom-footer"
    );
  });
});
