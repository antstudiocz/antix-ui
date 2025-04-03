"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export type SheetSide = "top" | "right" | "bottom" | "left";

export type SheetProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Root
>;
export type SheetTriggerProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Trigger
>;
export type SheetCloseProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Close
>;
export type SheetPortalProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Portal
>;
export type SheetOverlayProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Overlay
>;
export type SheetContentProps = React.ComponentPropsWithoutRef<
  typeof SheetPrimitive.Content
> & {
  side?: SheetSide;
};
export type SheetHeaderProps = React.HTMLAttributes<HTMLDivElement>;

export interface SheetFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to be applied to the footer */
  className?: string;
}

export interface SheetTitleProps
  extends React.ComponentProps<typeof SheetPrimitive.Title> {
  /** Additional CSS classes to be applied to the title */
  className?: string;
}

export interface SheetDescriptionProps
  extends React.ComponentProps<typeof SheetPrimitive.Description> {
  /** Additional CSS classes to be applied to the description */
  className?: string;
}

/**
 * Root Sheet component that manages the sheet state
 */
const Sheet = ({ ...props }: SheetProps) => {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />;
};

/**
 * SheetTrigger component that opens the sheet when clicked
 */
const SheetTrigger = ({ ...props }: SheetTriggerProps) => {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />;
};

/**
 * SheetClose component that closes the sheet when clicked
 */
const SheetClose = ({ ...props }: SheetCloseProps) => {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />;
};

/**
 * SheetPortal component that renders its children into a Portal
 */
const SheetPortal = ({ ...props }: SheetPortalProps) => {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />;
};

/**
 * SheetOverlay component that renders a backdrop behind the sheet
 *
 * @param className - Additional CSS classes
 */
const SheetOverlay = ({ className, ...props }: SheetOverlayProps) => {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
};

/**
 * SheetContent component that contains the content of the sheet
 *
 * @param className - Additional CSS classes
 * @param children - Content of the sheet
 * @param side - The side of the screen from which the sheet appears
 */
const SheetContent = ({
  className,
  children,
  side = "right",
  ...props
}: SheetContentProps) => {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          side === "right" &&
            "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" &&
            "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" &&
            "data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",
          side === "bottom" &&
            "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",
          className
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
};

/**
 * SheetHeader component that contains the title and description of the sheet
 *
 * @param className - Additional CSS classes
 */
const SheetHeader = ({ className, ...props }: SheetHeaderProps) => {
  return (
    <div
      data-slot="sheet-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  );
};

/**
 * SheetFooter component that contains the actions of the sheet
 *
 * @param className - Additional CSS classes
 */
const SheetFooter = ({ className, ...props }: SheetFooterProps) => {
  return (
    <div
      data-slot="sheet-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  );
};

/**
 * SheetTitle component that renders the title of the sheet
 *
 * @param className - Additional CSS classes
 */
const SheetTitle = ({ className, ...props }: SheetTitleProps) => {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  );
};

/**
 * SheetDescription component that renders the description of the sheet
 *
 * @param className - Additional CSS classes
 */
const SheetDescription = ({ className, ...props }: SheetDescriptionProps) => {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
