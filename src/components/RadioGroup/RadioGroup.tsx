import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { CircleIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export type RadioGroupVariant =
  | "default"
  | "primary"
  | "secondary"
  | "conversion";

const radioGroupItemVariants = cva(
  "aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input dark:bg-input/30 text-primary-500 focus-visible:border-ring focus-visible:ring-ring/50",
        primary:
          "border-primary-500/20 dark:bg-primary-500/10 text-primary-500 focus-visible:border-primary-500 focus-visible:ring-primary-500/50",
        secondary:
          "border-secondary-500/20 dark:bg-secondary-500/10 text-secondary-500 focus-visible:border-secondary-500 focus-visible:ring-secondary-500/50",
        conversion:
          "border-conversion-500/20 dark:bg-conversion-500/10 text-conversion-500 focus-visible:border-conversion-500 focus-visible:ring-conversion-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface RadioGroupProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  /** Additional CSS classes to be applied to the radio group */
  className?: string;
}

export interface RadioGroupItemProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Item>,
    Omit<VariantProps<typeof radioGroupItemVariants>, "className"> {
  /** Additional CSS classes to be applied to the radio group item */
  className?: string;
  /** Custom indicator icon to display when selected (defaults to CircleIcon) */
  icon?: React.ReactNode;
}

/**
 * RadioGroup component for selecting a single option from a list
 *
 * @param className - Additional CSS classes
 * @param children - Radio group items
 */
const RadioGroup = ({ className, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn("grid gap-3", className)}
      {...props}
    />
  );
};

/**
 * RadioGroupItem component - individual option within a RadioGroup
 *
 * @param variant - Visual style of the radio item ("default", "primary", "secondary", "conversion")
 * @param className - Additional CSS classes
 * @param icon - Custom indicator icon
 * @param disabled - Whether the radio item is disabled
 */
const RadioGroupItem = ({
  className,
  variant,
  icon,
  ...props
}: RadioGroupItemProps) => {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(radioGroupItemVariants({ variant, className }))}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        {icon || (
          <CircleIcon className="fill-current absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
        )}
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
};

export { RadioGroup, RadioGroupItem };
