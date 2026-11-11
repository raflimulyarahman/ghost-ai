"use client";

import * as React from "react";

import { Navbar } from "@/components/editor/editor-navbar";
import { Sidebar } from "@/components/editor/editor-sidebar";

/** Renders the authenticated editor workspace shell. */
export default function EditorPage() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleRef = React.useRef<HTMLButtonElement | null>(null);

  return (
    <div className="flex h-screen w-screen flex-col overflow-hidden bg-base text-copy-primary">
      <Navbar
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
        toggleRef={toggleRef}
      />
      <div className="relative flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          toggleRef={toggleRef}
        />
        <main className="flex flex-1 items-center justify-center bg-base">
          <span className="text-sm text-copy-muted">Ghost AI</span>
        </main>
      </div>
    </div>
  );
}
