"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { FaArrowLeft } from "react-icons/fa"

export default function Resume() {
  const [isLoaded, setIsLoaded] = useState(false)
  const resumeUrl = "https://drive.google.com/file/d/10ObBd7ZIgJMYkBf8sbUB7Fu0T8-mbtX3/preview"

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300"
            >
              <FaArrowLeft /> Back to Home
            </motion.button>
          </Link>
          <h1 className="text-2xl font-bold">My Resume</h1>
          <a
            href={resumeUrl.replace("/preview", "/view")}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Open in New Tab
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white rounded-xl overflow-hidden shadow-xl"
          style={{ height: "calc(100vh - 120px)" }}
        >
          <iframe src={resumeUrl} className="w-full h-full" allow="autoplay" title="Zerihun Kibret Resume"></iframe>
        </motion.div>
      </div>
    </div>
  )
}

