import * as React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Pagination } from "../Pagination";

describe("Pagination", () => {
  const defaultProps = {
    currentPage: 1,
    totalPages: 10,
    onPageChange: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    render(<Pagination {...defaultProps} />);

    // Check if navigation is present
    expect(screen.getByRole("navigation")).toBeInTheDocument();

    // Check if current page is highlighted
    expect(screen.getByText("1")).toHaveAttribute("aria-current", "page");

    // Check if navigation buttons are present
    expect(screen.getByLabelText("Previous page")).toBeInTheDocument();
    expect(screen.getByLabelText("Next page")).toBeInTheDocument();
  });

  it("disables previous button on first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);
    expect(screen.getByLabelText("Previous page")).toBeDisabled();
  });

  it("disables next button on last page", () => {
    render(<Pagination {...defaultProps} currentPage={10} />);
    expect(screen.getByLabelText("Next page")).toBeDisabled();
  });

  it("calls onPageChange with correct page number when clicking page button", () => {
    render(<Pagination {...defaultProps} />);
    fireEvent.click(screen.getByText("2"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2);
  });

  it("calls onPageChange with correct page when clicking next button", () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
    fireEvent.click(screen.getByLabelText("Next page"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(6);
  });

  it("calls onPageChange with correct page when clicking previous button", () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
    fireEvent.click(screen.getByLabelText("Previous page"));
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(4);
  });

  it("shows ellipsis when there are many pages", () => {
    render(<Pagination {...defaultProps} currentPage={5} totalPages={20} />);
    expect(screen.getAllByText("...")).toHaveLength(2);
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<Pagination {...defaultProps} className={customClass} />);
    expect(screen.getByRole("navigation")).toHaveClass(customClass);
  });
});
