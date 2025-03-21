"use client"; // Ensures this is a Client Component

import { ThemeProvider } from "./theme-provider"; // Use relative import

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
