import type { ReactNode } from "react";
import { Bot, FileText, Share2 } from "lucide-react";

/** Props for the authentication route layout. */
export interface AuthLayoutProps {
  /** Clerk authentication form component rendered on the right panel. */
  children: ReactNode;
}

const FEATURES = [
  {
    icon: Bot,
    title: "AI Architecture Generation",
    description:
      "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description:
      "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: FileText,
    title: "Instant Spec Generation",
    description:
      "Export a complete Markdown technical spec directly from the canvas graph.",
  },
] as const;

/**
 * Two-panel responsive authentication shell matching Ghost AI design reference.
 * Left panel displays brand logo, tagline, and highlighted feature items with icon badges.
 * Right panel centers the Clerk authentication component.
 */
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-base font-sans lg:grid lg:grid-cols-2">
      {/* Left branding panel: visible on large screens */}
      <section className="hidden border-r border-surface-border bg-subtle px-12 py-12 lg:flex lg:min-h-screen lg:flex-col lg:justify-between xl:px-16">
        {/* Brand logo */}
        <div className="flex items-center gap-3 text-copy-primary">
          <span className="h-7 w-7 rounded-lg bg-brand" aria-hidden="true" />
          <span className="text-base font-semibold tracking-tight">
            Ghost AI
          </span>
        </div>

        {/* Hero headline & feature list */}
        <div className="my-auto max-w-md py-8">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-copy-primary sm:text-4xl">
            Design systems at the
            <br />
            speed of thought.
          </h1>
          <p className="mt-4 text-sm leading-relaxed text-copy-muted">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>

          <ul className="mt-10 space-y-6">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <li key={title} className="flex items-start gap-3.5">
                <span
                  className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-brand/30 bg-accent-dim text-brand"
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-copy-primary">
                    {title}
                  </h2>
                  <p className="mt-0.5 text-xs leading-relaxed text-copy-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer copyright */}
        <p className="text-xs text-copy-faint">
          © 2026 Ghost AI. All rights reserved.
        </p>
      </section>

      {/* Right panel: centered Clerk form on all viewports */}
      <section className="flex min-h-screen items-center justify-center bg-base px-6 py-10 sm:px-10">
        <div className="flex w-full max-w-md items-center justify-center">
          {children}
        </div>
      </section>
    </main>
  );
}
