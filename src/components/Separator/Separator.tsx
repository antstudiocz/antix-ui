"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";

import { cn } from "@/lib/utils";

export type SeparatorOrientation = "horizontal" | "vertical";

export interface SeparatorProps
  extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  /** The orientation of the separator */
  orientation?: SeparatorOrientation;
  /** Whether the separator is purely decorative, which removes it from the accessibility tree */
  decorative?: boolean;
  /** Additional CSS classes to be applied to the separator */
  className?: string;
}

/**
 * Separator component for creating visual dividers between content
 *
 * @param orientation - The orientation of the separator ("horizontal" or "vertical")
 * @param decorative - Whether the separator is purely decorative
 * @param className - Additional CSS classes
 */
export const Separator = ({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator-root"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )}
      {...props}
    />
  );
};

export default Separator;
