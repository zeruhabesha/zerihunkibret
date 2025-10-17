"use client"

import { useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import "../styles/globals.css"

function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    const link = document.createElement("link")
    link.href =
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
    link.rel = "stylesheet"
    document.head.appendChild(link)

    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp

