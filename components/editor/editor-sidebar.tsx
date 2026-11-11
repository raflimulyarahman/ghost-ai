"use client";

import { FolderOpen, Plus, Users, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  onNewProject?: () => void;
  className?: string;
}

export function Sidebar({
  isOpen,
  onClose,
  onNewProject,
  className,
}: SidebarProps) {
  return (
    <aside
      aria-label="Projects"
      aria-hidden={!isOpen}
      className={cn(
        "fixed top-14 bottom-0 left-0 z-40 flex w-80 flex-col border-r border-surface-border bg-surface/95 backdrop-blur-md transition-transform duration-200 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-surface-border px-4 py-3">
        <h2 className="text-sm font-semibold text-copy-primary">Projects</h2>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={onClose}
          aria-label="Close sidebar"
          className="rounded-xl text-copy-muted hover:bg-subtle hover:text-copy-primary"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>

      <Tabs
        defaultValue="my-projects"
        className="flex flex-1 flex-col overflow-hidden px-4 pt-3"
      >
        <TabsList className="grid w-full grid-cols-2 rounded-xl bg-subtle p-1">
          <TabsTrigger
            value="my-projects"
            className="rounded-xl text-copy-muted data-[state=active]:bg-elevated data-[state=active]:text-copy-primary"
          >
            My Projects
          </TabsTrigger>
          <TabsTrigger
            value="shared"
            className="rounded-xl text-copy-muted data-[state=active]:bg-elevated data-[state=active]:text-copy-primary"
          >
            Shared
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="my-projects"
          className="mt-3 flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border bg-base/40 p-6 text-center"
        >
          <FolderOpen className="mb-3 h-8 w-8 text-copy-faint" />
          <p className="text-sm font-medium text-copy-secondary">
            No projects yet
          </p>
          <p className="mt-1 text-xs text-copy-muted">
            Create a new project to start designing your system architecture.
          </p>
        </TabsContent>

        <TabsContent
          value="shared"
          className="mt-3 flex flex-1 flex-col items-center justify-center rounded-2xl border border-dashed border-surface-border bg-base/40 p-6 text-center"
        >
          <Users className="mb-3 h-8 w-8 text-copy-faint" />
          <p className="text-sm font-medium text-copy-secondary">
            No shared projects
          </p>
          <p className="mt-1 text-xs text-copy-muted">
            Projects shared with you by collaborators will appear here.
          </p>
        </TabsContent>
      </Tabs>

      <div className="border-t border-surface-border p-4">
        <Button
          type="button"
          onClick={onNewProject}
          className="w-full rounded-xl bg-brand text-base hover:bg-brand/90"
        >
          <Plus className="h-5 w-5" />
          New Project
        </Button>
      </div>
    </aside>
  );
}

export { Sidebar as ProjectSidebar };
export default Sidebar;
