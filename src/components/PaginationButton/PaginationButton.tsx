import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type PaginationButtonVariant = "default" | "outline";
export type PaginationButtonSize = "default" | "sm" | "lg" | "icon";

const paginationButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        outline:
          "bg-secondary-300 shadow-xs hover:bg-secondary-300/80 hover:text-accent-foreground dark:bg-input/30 dark:hover:bg-input/50",
        default:
          "bg-primary-500 text-neutral-00 shadow-xs hover:bg-primary-500/80",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 px-6 has-[>svg]:px-4",
        icon: "size-12 text-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface PaginationButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "size">,
    Omit<VariantProps<typeof paginationButtonVariants>, "className"> {
  /** Allows the button to be rendered as a different element */
  asChild?: boolean;
  /** Icon element to be displayed alongside the button text */
  icon?: React.ReactNode;
  /** Additional CSS classes to be applied to the button */
  className?: string;
}

/**
 * PaginationButton component with multiple variants and sizes
 *
 * @param variant - Visual style of the button ("default", "outline")
 * @param size - Size of the button ("default", "sm", "lg", "icon")
 * @param asChild - Whether to render the button as a child component
 * @param icon - Icon element to display
 * @param children - Primary content of the button
 * @param disabled - Whether the button is disabled
 */
export const PaginationButton = ({
  className,
  variant,
  size,
  asChild = false,
  icon,
  children,
  disabled,
  ...props
}: PaginationButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(paginationButtonVariants({ variant, size, className }))}
      disabled={disabled}
      {...props}
    >
      {icon && (
        <span className="icon inline-flex items-center justify-center">
          {icon}
        </span>
      )}
      {children && (
        <span className="inline-block whitespace-nowrap overflow-visible">
          {children}
        </span>
      )}
    </Comp>
  );
};

export default PaginationButton;
