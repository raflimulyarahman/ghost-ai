import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/ui/themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ghost AI",
  description: "Real-time collaborative system design workspace",
};

/** Provides global fonts, theme tokens, and Clerk authentication to every route. */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.className} min-h-full flex flex-col bg-base text-copy-primary font-sans antialiased`}
      >
        <ClerkProvider
          appearance={{
            theme: dark,
            variables: {
              colorPrimary: "var(--accent-primary)",
              colorPrimaryForeground: "var(--bg-base)",
              colorBackground: "var(--bg-surface)",
              colorForeground: "var(--text-primary)",
              colorMuted: "var(--bg-subtle)",
              colorMutedForeground: "var(--text-secondary)",
              colorInput: "var(--bg-elevated)",
              colorInputForeground: "var(--text-primary)",
              colorNeutral: "var(--text-muted)",
              colorBorder: "var(--border-default)",
              colorDanger: "var(--state-error)",
              colorSuccess: "var(--state-success)",
              colorWarning: "var(--state-warning)",
              colorRing: "var(--accent-primary)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-geist-sans), sans-serif",
              fontFamilyButtons: "var(--font-geist-sans), sans-serif",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
