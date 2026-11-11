"use client";

import * as React from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * Props for the DialogShell component.
 */
export interface DialogShellProps {
  /** Controls open state of the dialog. */
  open?: boolean;
  /** Callback invoked on open state change. */
  onOpenChange?: (open: boolean) => void;
  /** Optional trigger element for opening the dialog. */
  trigger?: React.ReactNode;
  /** Header title of the dialog. */
  title: React.ReactNode;
  /** Optional description text under the title. */
  description?: React.ReactNode;
  /** Dialog content body. */
  children?: React.ReactNode;
  /** Optional action buttons for the dialog footer. */
  footer?: React.ReactNode;
  /** Optional additional class names for dialog content container. */
  className?: string;
}

/**
 * Reusable dialog shell framing standard modal dialogs with Ghost AI styling.
 */
export function DialogShell({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  className,
}: DialogShellProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? (
            <DialogDescription>{description}</DialogDescription>
          ) : null}
        </DialogHeader>
        {children}
        {footer ? <DialogFooter>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}

export { DialogShell as EditorDialog };
export default DialogShell;
