"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const checkboxVariants = cva(
  "peer size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-input dark:bg-input/30 data-[state=checked]:bg-primary-500 data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 focus-visible:border-ring focus-visible:ring-ring/50",
        primary:
          "border-primary-500/20 dark:bg-primary-500/10 data-[state=checked]:bg-primary-500 data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary-500 data-[state=checked]:border-primary-500 focus-visible:border-primary-500 focus-visible:ring-primary-500/50",
        secondary:
          "border-secondary-500/20 dark:bg-secondary-500/10 data-[state=checked]:bg-secondary-500 data-[state=checked]:text-secondary-foreground dark:data-[state=checked]:bg-secondary-500 data-[state=checked]:border-secondary-500 focus-visible:border-secondary-500 focus-visible:ring-secondary-500/50",
        conversion:
          "border-conversion-500/20 dark:bg-conversion-500/10 data-[state=checked]:bg-conversion-500 data-[state=checked]:text-conversion-foreground dark:data-[state=checked]:bg-conversion-500 data-[state=checked]:border-conversion-500 focus-visible:border-conversion-500 focus-visible:ring-conversion-500/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root>,
    VariantProps<typeof checkboxVariants> {}

function Checkbox({ className, variant, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(checkboxVariants({ variant, className }))}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
