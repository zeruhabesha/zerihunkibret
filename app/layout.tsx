import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "../components/providers"
import { Analytics } from "@vercel/analytics/next"

const description =
  "Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://zerihunkibret.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const description =
  "Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
const defaultSiteUrl = "https://zerihunkibret.com"

const getSiteUrl = (): URL => {
  const envUrl = process.env.NEXT_PUBLIC_SITE_URL

  if (!envUrl) {
    return new URL(defaultSiteUrl)
  }

  try {
    return new URL(envUrl)
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "Invalid NEXT_PUBLIC_SITE_URL provided. Falling back to default URL.",
        error,
      )
    }

    return new URL(defaultSiteUrl)
  }
}

const siteUrl = getSiteUrl()
const siteUrlString = siteUrl.toString()

const metadataConfig: Metadata = {
  metadataBase: siteUrl,
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
    url: siteUrlString,
    type: "website",
  },
};

export const metadata = metadataConfig;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

