import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "../components/providers"
import { Analytics } from "@vercel/analytics/next"

const description =
  "Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"

export const metadata: Metadata = {
  metadataBase: new URL("https://zerihunkibret.com"),
  title: "Zerihun Kibret | Full-Stack Developer",
  description,
  keywords: [
    "full-stack developer",
    "web developer",
    "MERN stack",
    "UI/UX design",
    "React",
    "Node.js",
    "MongoDB",
  ],
  authors: [{ name: "Zerihun Kibret" }],
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    title: "Zerihun Kibret | Full-Stack Developer",
    description,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

