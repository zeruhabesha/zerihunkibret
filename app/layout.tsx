import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "../components/providers"

const DEFAULT_DESCRIPTION =
  "Full-Stack Developer with expertise in the MERN stack, PHP, MySQL, and crafted UI/UX experiences."
const DEFAULT_SITE_URL = "https://zerihunkibret.vercel.app"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" })

const resolveSiteUrl = (): URL => {
  const env = process.env.NEXT_PUBLIC_SITE_URL
  if (!env) return new URL(DEFAULT_SITE_URL)
  try {
    return new URL(env)
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.warn("Invalid NEXT_PUBLIC_SITE_URL, falling back to default:", error)
    }
    return new URL(DEFAULT_SITE_URL)
  }
}

const siteUrl = resolveSiteUrl()
const siteUrlString = siteUrl.toString()

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Zerihun Kibret | Full-Stack Developer",
    template: "%s | Zerihun Kibret",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "full-stack developer",
    "web developer",
    "MERN stack",
    "UI/UX design",
    "React",
    "Node.js",
    "MongoDB",
    "Next.js",
  ],
  authors: [{ name: "Zerihun Kibret" }],
  icons: { icon: "/favicon.ico" },
  viewport: { width: "device-width", initialScale: 1 },
  themeColor: "#0f172a",
  openGraph: {
    title: "Zerihun Kibret | Full-Stack Developer",
    description: DEFAULT_DESCRIPTION,
    url: siteUrlString,
    type: "website",
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
