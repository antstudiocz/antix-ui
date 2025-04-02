import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
} from "../Dialog";

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

describe("Dialog", () => {
  it("renders dialog trigger correctly", () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>Dialog content</DialogContent>
      </Dialog>
    );

    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("renders dialog components with correct classes", () => {
    render(
      <div data-testid="test-container">
        <Dialog defaultOpen>
          <DialogTrigger>Open Dialog</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Dialog Title</DialogTitle>
              <DialogDescription>Dialog Description</DialogDescription>
            </DialogHeader>
            <p>Dialog content</p>
            <DialogFooter>
              <button>Close</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );

    // Testing within the container due to portal mocking
    const container = screen.getByTestId("test-container");

    // Check if components are rendered with correct content
    expect(
      container.querySelector('[data-slot="dialog-title"]')
    ).toHaveTextContent("Dialog Title");
    expect(
      container.querySelector('[data-slot="dialog-description"]')
    ).toHaveTextContent("Dialog Description");
    expect(
      container.querySelector('[data-slot="dialog-header"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="dialog-footer"]')
    ).toBeInTheDocument();
    expect(container.querySelector("p")).toHaveTextContent(
      "Dialog Description"
    );
  });

  it("applies custom className to dialog components", () => {
    render(
      <div data-testid="test-container">
        <Dialog defaultOpen>
          <DialogContent className="custom-content">
            <DialogHeader className="custom-header">
              <DialogTitle className="custom-title">Title</DialogTitle>
              <DialogDescription className="custom-description">
                Description
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="custom-footer">
              <button>Close</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    );

    const container = screen.getByTestId("test-container");

    expect(container.querySelector('[data-slot="dialog-content"]')).toHaveClass(
      "custom-content"
    );
    expect(container.querySelector('[data-slot="dialog-header"]')).toHaveClass(
      "custom-header"
    );
    expect(container.querySelector('[data-slot="dialog-title"]')).toHaveClass(
      "custom-title"
    );
    expect(
      container.querySelector('[data-slot="dialog-description"]')
    ).toHaveClass("custom-description");
    expect(container.querySelector('[data-slot="dialog-footer"]')).toHaveClass(
      "custom-footer"
    );
  });
});
