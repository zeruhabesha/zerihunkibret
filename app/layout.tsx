import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Providers } from "../components/providers"
import dynamic from "next/dynamic"
import { ThemeProvider } from "../components/ThemeProvider"

const InteractiveBackground = dynamic(() => import("../components/InteractiveBackground"), {
  ssr: false,
})

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
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-blue-900 dark:text-slate-100 transition-colors duration-300`}>
        <div className="pointer-events-none fixed inset-0 -z-50">
          {/* Light Mode Grid Pattern */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:hidden opacity-40"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] dark:hidden"></div>
          {/* Gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,113,227,0.08),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,113,227,0.08),_transparent_58%)] dark:bg-[radial-gradient(circle_at_bottom,_rgba(8,145,178,0.15),_transparent_58%)]" />
        </div>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <InteractiveBackground />
            {children}
            <Analytics />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
