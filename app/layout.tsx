import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "../components/providers"

const DEFAULT_DESCRIPTION =
  "Full-Stack Developer with expertise in the MERN stack, PHP, MySQL, and crafted UI/UX experiences."
const DEFAULT_SITE_URL = "https://zerihunkibret.vercel.app"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const resolveSiteUrl = (): URL => {
  const { NEXT_PUBLIC_SITE_URL } = process.env

  if (!NEXT_PUBLIC_SITE_URL) {
    return new URL(DEFAULT_SITE_URL)
  }

  try {
    return new URL(NEXT_PUBLIC_SITE_URL)
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Invalid NEXT_PUBLIC_SITE_URL provided. Falling back to default URL.",
        error,
      )
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
  icons: {
    icon: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    themeColor: "#0f172a",
  },
  openGraph: {
    title: "Zerihun Kibret | Full-Stack Developer",
    description: DEFAULT_DESCRIPTION,
    url: siteUrlString,
    siteName: "Zerihun Kibret Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerihun Kibret | Full-Stack Developer",
    description: DEFAULT_DESCRIPTION,
  },
  alternates: {
    canonical: siteUrlString,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${inter.variable} min-h-screen bg-slate-950 text-slate-100 antialiased`}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
