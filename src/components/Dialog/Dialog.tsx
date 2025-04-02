import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export interface DialogProps
  extends React.ComponentProps<typeof DialogPrimitive.Root> {}

export interface DialogTriggerProps
  extends React.ComponentProps<typeof DialogPrimitive.Trigger> {}

export interface DialogPortalProps
  extends React.ComponentProps<typeof DialogPrimitive.Portal> {}

export interface DialogCloseProps
  extends React.ComponentProps<typeof DialogPrimitive.Close> {}

export interface DialogOverlayProps
  extends React.ComponentProps<typeof DialogPrimitive.Overlay> {
  /** Additional CSS classes to be applied to the overlay */
  className?: string;
}

export interface DialogContentProps
  extends React.ComponentProps<typeof DialogPrimitive.Content> {
  /** Additional CSS classes to be applied to the content */
  className?: string;
  /** Content of the dialog */
  children?: React.ReactNode;
}

export interface DialogHeaderProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to be applied to the header */
  className?: string;
}

export interface DialogFooterProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** Additional CSS classes to be applied to the footer */
  className?: string;
}

export interface DialogTitleProps
  extends React.ComponentProps<typeof DialogPrimitive.Title> {
  /** Additional CSS classes to be applied to the title */
  className?: string;
}

export interface DialogDescriptionProps
  extends React.ComponentProps<typeof DialogPrimitive.Description> {
  /** Additional CSS classes to be applied to the description */
  className?: string;
}

/**
 * Root Dialog component that manages the dialog state
 */
const Dialog = ({ ...props }: DialogProps) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

/**
 * DialogTrigger component that opens the dialog when clicked
 */
const DialogTrigger = ({ ...props }: DialogTriggerProps) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};

/**
 * DialogPortal component that renders its children into a Portal
 */
const DialogPortal = ({ ...props }: DialogPortalProps) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

/**
 * DialogClose component that closes the dialog when clicked
 */
const DialogClose = ({ ...props }: DialogCloseProps) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};

/**
 * DialogOverlay component that renders a backdrop behind the dialog
 *
 * @param className - Additional CSS classes
 */
const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  );
};

/**
 * DialogContent component that contains the content of the dialog
 *
 * @param className - Additional CSS classes
 * @param children - Content of the dialog
 */
const DialogContent = ({
  className,
  children,
  ...props
}: DialogContentProps) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4">
          <XIcon />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
};

/**
 * DialogHeader component that contains the title and description of the dialog
 *
 * @param className - Additional CSS classes
 */
const DialogHeader = ({ className, ...props }: DialogHeaderProps) => {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
};

/**
 * DialogFooter component that contains the actions of the dialog
 *
 * @param className - Additional CSS classes
 */
const DialogFooter = ({ className, ...props }: DialogFooterProps) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
};

/**
 * DialogTitle component that renders the title of the dialog
 *
 * @param className - Additional CSS classes
 */
const DialogTitle = ({ className, ...props }: DialogTitleProps) => {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg leading-none font-semibold", className)}
      {...props}
    />
  );
};

/**
 * DialogDescription component that renders the description of the dialog
 *
 * @param className - Additional CSS classes
 */
const DialogDescription = ({ className, ...props }: DialogDescriptionProps) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};

export {
  Dialog,
  DialogTrigger,
  DialogPortal,
  DialogClose,
  DialogOverlay,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
