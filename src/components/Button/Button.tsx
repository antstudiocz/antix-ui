import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type ButtonVariant = "solid" | "outlined" | "text";
export type ButtonColor = "conversion" | "primary" | "secondary";
export type ButtonSize = "xl" | "lg" | "md" | "sm";
export type ButtonIconPosition = "left" | "right";

// Base button styling with accurate values from the original .button
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl font-secondary font-bold transition-all duration-200 text-center relative box-border h-fit disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer",
  {
    variants: {
      variant: {
        solid: "", // Base styles for solid, specific colors are handled in combination with color
        outlined:
          "bg-transparent outline outline-[1.67px] outline-offset-[-1.67px] outline-current",
        text: "bg-transparent *:decoration-current",
      },
      size: {
        sm: "px-3.5 py-2",
        md: "px-3.5 py-3",
        lg: "px-6 py-3.5",
        xl: "px-7 py-4.5",
      },
      color: {
        conversion: "text-conversion-500",
        primary: "text-primary-500",
        secondary: "text-primary-500",
      },
      iconPosition: {
        left: "flex-row",
        right: "flex-row-reverse",
      },
      withIcon: {
        true: "", // Will be handled together with size
        false: "",
      },
    },
    // Default values
    defaultVariants: {
      variant: "solid",
      size: "md",
      color: "conversion",
      iconPosition: "left",
      withIcon: false,
    },
    // Complex variant combinations using conditional classes
    compoundVariants: [
      // Solid variant specific styles by color
      {
        variant: "solid",
        color: "conversion",
        className:
          "bg-conversion-500 *:text-neutral-00 hover:bg-conversion-900",
      },
      {
        variant: "solid",
        color: "primary",
        className:
          "relative bg-gradient-to-r to-primary-500 from-highlight-300 z-10 *:text-neutral-00 before:content-[''] before:absolute before:inset-0 before:bg-primary-700 before:opacity-0 before:transition-opacity before:duration-200 before:z-[-1] before:rounded-lg hover:before:opacity-100",
      },
      {
        variant: "solid",
        color: "secondary",
        className:
          "bg-secondary-300 *:text-primary-500 hover:bg-primary-700 hover:*:text-neutral-00",
      },
      // Outlined variant specific styles by color
      {
        variant: "outlined",
        color: "conversion",
        className:
          "hover:bg-conversion-900 hover:outline-conversion-900 hover:*:text-neutral-00",
      },
      {
        variant: "outlined",
        color: "primary",
        className:
          "hover:bg-primary-700 hover:outline-primary-700 hover:*:text-neutral-00",
      },
      {
        variant: "outlined",
        color: "secondary",
        className:
          "bg-secondary-300 hover:bg-primary-700 hover:outline-primary-700 hover:*:text-neutral-00",
      },
      // Text variant specific styles by color
      {
        variant: "text",
        color: "conversion",
        className: "hover:text-conversion-900",
      },
      {
        variant: "text",
        color: "primary",
        className: "hover:text-primary-700",
      },
      {
        variant: "text",
        color: "secondary",
        className: "hover:text-primary-700",
      },
      // Specific spacing for icons based on size
      {
        withIcon: true,
        size: ["sm", "md"],
        className: "gap-1.5",
      },
      {
        withIcon: true,
        size: ["lg", "xl"],
        className: "gap-2.5",
      },
      // Specific styles for text variant with icon
      {
        variant: "text",
        className: "*:no-underline hover:underline",
      },
      // Ensure text variant has no padding regardless of size
      {
        variant: "text",
        className: "!p-0",
      },
    ],
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    Omit<VariantProps<typeof buttonVariants>, "className" | "withIcon"> {
  /** Allows the button to be rendered as a different element */
  asChild?: boolean;
  /** Icon element to be displayed alongside the button text */
  icon?: React.ReactNode;
  /** Additional text to be displayed below the main button text */
  additionalText?: string;
  /** Additional CSS classes to be applied to the button */
  className?: string;
}

/**
 * Button component with multiple variants, sizes, and colors
 *
 * @param variant - Visual style of the button ("solid", "outlined", "text")
 * @param size - Size of the button ("xl", "lg", "md", "sm")
 * @param color - Color scheme of the button ("conversion", "primary", "secondary")
 * @param iconPosition - Position of the icon relative to text ("left", "right")
 * @param asChild - Whether to render the button as a child component
 * @param icon - Icon element to display
 * @param additionalText - Secondary text to display below main text
 * @param children - Primary content of the button
 * @param disabled - Whether the button is disabled
 */
export const Button = ({
  className,
  variant,
  size = "md",
  color,
  iconPosition,
  asChild = false,
  icon,
  additionalText,
  children,
  disabled,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  /**
   * Important: Text size classes are applied directly through the cn() function instead of using variants in cva.
   *
   * Reason: When using variants in cva, conflicts may occur where other variants (e.g., color)
   * override text size classes. By extracting these classes from the variant system and applying them
   * directly in the cn() function, we ensure they are never overridden by other variants.
   */
  const getTextSizeClass = (size: ButtonSize) => {
    switch (size) {
      case "xl":
        return "text-button-xl";
      case "lg":
        return "text-button-lg";
      case "sm":
        return "text-button-sm";
      case "md":
      default:
        return "text-button-md";
    }
  };

  return (
    <Comp
      className={
        cn(
          buttonVariants({
            variant,
            size,
            color,
            iconPosition,
            withIcon: Boolean(icon),
          }),
          className
        ) +
        " " +
        getTextSizeClass(size || "md")
      }
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="icon inline-flex items-center justify-center text-current">
          {icon}
        </span>
      )}
      {children && (
        <span className="inline-block whitespace-nowrap overflow-visible text-current">
          {children}
        </span>
      )}
      {additionalText && (
        <span className="text-button-sm font-bold text-current">
          {additionalText}
        </span>
      )}
    </Comp>
  );
};

export default Button;
