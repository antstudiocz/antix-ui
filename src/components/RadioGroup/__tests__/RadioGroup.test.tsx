import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";

describe("RadioGroup", () => {
  it("renders correctly with default props", () => {
    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByLabelText("Option 1")).toBeInTheDocument();
    expect(screen.getByLabelText("Option 2")).toBeInTheDocument();
  });

  it("applies the correct variant class", () => {
    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem variant="primary" value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    );

    const radioItem = screen.getByLabelText("Option 1");
    expect(radioItem).toHaveClass("border-primary-500/20");
  });

  it("changes selected value when clicked", () => {
    const handleValueChange = jest.fn();

    render(
      <RadioGroup defaultValue="option1" onValueChange={handleValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option2" id="option2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </RadioGroup>
    );

    fireEvent.click(screen.getByLabelText("Option 2"));
    expect(handleValueChange).toHaveBeenCalledWith("option2");
  });

  it("renders with custom icon", () => {
    const CustomIcon = () => <div data-testid="custom-icon">●</div>;

    render(
      <RadioGroup defaultValue="option1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" icon={<CustomIcon />} />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    );

    // The icon is only shown when checked, so the option must be selected
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("should be disabled when disabled prop is true", () => {
    render(
      <RadioGroup>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option1" id="option1" disabled />
          <label htmlFor="option1">Option 1</label>
        </div>
      </RadioGroup>
    );

    expect(screen.getByLabelText("Option 1")).toBeDisabled();
  });
});
