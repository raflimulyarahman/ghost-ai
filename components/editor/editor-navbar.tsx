"use client";

import * as React from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface NavbarProps {
  isSidebarOpen: boolean;
  onToggleSidebar: () => void;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  className?: string;
}

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
