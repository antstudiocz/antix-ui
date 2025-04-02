import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/lib/utils";

export interface PopoverProps
  extends React.ComponentProps<typeof PopoverPrimitive.Root> {}

export interface PopoverTriggerProps
  extends React.ComponentProps<typeof PopoverPrimitive.Trigger> {}

export interface PopoverContentProps
  extends React.ComponentProps<typeof PopoverPrimitive.Content> {
  /** Additional CSS classes to be applied to the content */
  className?: string;
  /** The preferred alignment against the trigger element */
  align?: "start" | "center" | "end";
  /** The offset distance in pixels from the trigger */
  sideOffset?: number;
}

export interface PopoverAnchorProps
  extends React.ComponentProps<typeof PopoverPrimitive.Anchor> {}

/**
 * Root Popover component that manages the popover state
 */
const Popover = ({ ...props }: PopoverProps) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};

/**
 * PopoverTrigger component that controls the opening of the popover
 */
const PopoverTrigger = ({ ...props }: PopoverTriggerProps) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

/**
 * PopoverContent component that contains the content of the popover
 *
 * @param className - Additional CSS classes
 * @param align - The preferred alignment against the trigger
 * @param sideOffset - The offset distance from the trigger
 */
const PopoverContent = ({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: PopoverContentProps) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        data-side-offset={sideOffset}
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};

/**
 * PopoverAnchor component that anchors the position of the popover
 */
const PopoverAnchor = ({ ...props }: PopoverAnchorProps) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
};

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
