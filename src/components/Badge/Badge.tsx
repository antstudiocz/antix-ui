import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/70",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    Omit<VariantProps<typeof badgeVariants>, "className"> {
  /** Allows the badge to be rendered as a different element */
  asChild?: boolean;
  /** Additional CSS classes to be applied to the badge */
  className?: string;
  /** Icon element to be displayed alongside the badge text */
  icon?: React.ReactNode;
}

/**
 * Badge component with multiple variants
 *
 * @param variant - Visual style of the badge ("default", "secondary", "destructive", "outline")
 * @param asChild - Whether to render the badge as a child component
 * @param icon - Icon element to display
 * @param children - Primary content of the badge
 */
export const Badge = ({
  className,
  variant,
  asChild = false,
  icon,
  children,
  ...props
}: BadgeProps) => {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    >
      {icon && icon}
      {children}
    </Comp>
  );
};

export default Badge;
