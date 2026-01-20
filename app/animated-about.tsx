"use client"

import { motion } from "framer-motion"

interface AnimatedAboutProps {
  content: {
    paragraphs: string[]
  }
}

export default function AnimatedAbout({ content }: AnimatedAboutProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <div className="relative">
      {/* Background decorative elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      {/* Main content container */}
      <motion.div
        className="bg-gradient-to-br from-white to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-2xl border border-blue-100 dark:border-gray-700 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Decorative accent line */}
        <div className="absolute left-0 top-10 bottom-10 w-1 bg-gradient-to-b from-blue-500 to-blue-600 rounded-full"></div>

        <motion.div
          className="pl-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {content && content.paragraphs ? (
            content.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-lg text-blue-900 dark:text-gray-300 leading-relaxed mb-6 last:mb-0"
                variants={itemVariants}
              >
                {paragraph}
              </motion.p>
            ))
          ) : (
            <p className="text-lg text-blue-900 dark:text-gray-300 leading-relaxed">No content available.</p>
          )}
        </motion.div>
      </motion.div>

      {/* Floating decorative elements */}
      <div className="hidden md:block">
        <div className="absolute top-10 -right-5 w-10 h-10 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute bottom-20 -left-5 w-6 h-6 bg-blue-500 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 -right-3 w-4 h-4 bg-teal-500 rounded-full opacity-20"></div>
      </div>
    </div>
  )
}

