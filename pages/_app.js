"use client"

import { useEffect } from "react"
import Head from "next/head"
import { AnimatePresence } from "framer-motion"
import "../styles/globals.css"

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    // Add Google Fonts
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Zerihun Kibret | Full-Stack Developer</title>
      </Head>
      <AnimatePresence mode="wait">
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  )
}

export default MyApp

