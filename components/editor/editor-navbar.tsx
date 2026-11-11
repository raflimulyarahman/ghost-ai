"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Props for the Editor Navbar component.
 */
export interface NavbarProps {
  /** Indicates whether the project sidebar is currently open. */
  isSidebarOpen: boolean;
  /** Callback triggered when the sidebar toggle button is clicked. */
  onToggleSidebar: () => void;
  /** Optional content rendered in the center of the navbar. */
  centerContent?: React.ReactNode;
  /** Optional content rendered in the right section of the navbar. */
  rightContent?: React.ReactNode;
  /** Optional additional class names. */
  className?: string;
}

/**
 * Top navigation bar framing the editor screen with sidebar toggle and slot areas.
 */
export function Navbar({
  isSidebarOpen,
  onToggleSidebar,
  centerContent,
  rightContent,
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex h-14 shrink-0 items-center justify-between border-b border-surface-border bg-surface px-4",
        className,
      )}
    >
      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant="ghost"
          size="icon"
          onClick={onToggleSidebar}
          aria-label={
            isSidebarOpen ? "Close project sidebar" : "Open project sidebar"
          }
          aria-expanded={isSidebarOpen}
          className="rounded-xl text-copy-secondary hover:bg-subtle hover:text-copy-primary"
        >
          {isSidebarOpen ? (
            <PanelLeftClose className="h-5 w-5" />
          ) : (
            <PanelLeftOpen className="h-5 w-5" />
          )}
        </Button>
      </div>

      <div className="flex items-center justify-center">{centerContent}</div>

      <div className="flex items-center justify-end gap-2">{rightContent}</div>
    </header>
  );
}

export { Navbar as EditorNavbar };
export default Navbar;
