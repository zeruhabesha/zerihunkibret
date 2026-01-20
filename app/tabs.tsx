"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"

interface Project {
  id: number
  title: string
  description: string
  technologies: string[]
  image: string
  link: string
}

interface TabsProps {
  fullStackProjects: Project[]
  uiuxProjects: Project[]
  graphicsProjects: Project[]
}

export default function Tabs({ fullStackProjects, uiuxProjects, graphicsProjects }: TabsProps) {
  const [activeTab, setActiveTab] = useState("fullstack")
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedTech, setSelectedTech] = useState("All")
  const itemsPerPage = 9

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const tabVariants = {
    inactive: {
      scale: 0.95,
      opacity: 0.7,
      transition: { duration: 0.3 }
    },
    active: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  }

  const indicatorVariants = {
    fullstack: { x: "0%" },
    uiux: { x: "100%" },
    graphics: { x: "200%" }
  }

  // Get current list based on activeTab
  const currentList = activeTab === "fullstack" ? fullStackProjects :
    activeTab === "uiux" ? uiuxProjects : graphicsProjects

  // Filter categories based on active tab
  const filterMap: Record<string, { label: string; value: string }[]> = {
    fullstack: [
      { label: "All", value: "All" },
      { label: "Next.js", value: "next" },
      { label: "React", value: "react" },
      { label: "WordPress", value: "wordpress" },
      { label: "Shopify", value: "shopify" },
      { label: "E-Commerce", value: "commerce" },
      { label: "PHP", value: "php" },
    ],
    uiux: [
      { label: "All", value: "All" },
      { label: "Figma", value: "figma" },
      { label: "Adobe XD", value: "xd" },
    ],
    graphics: [
      { label: "All", value: "All" },
      { label: "Photoshop", value: "photoshop" },
      { label: "Illustrator", value: "illustrator" },
      { label: "Canva", value: "canva" },
    ],
  }

  const filterCategories = filterMap[activeTab] || filterMap.fullstack

  // Filter logic with case-insensitive partial matching
  const filteredList = selectedTech === "All"
    ? currentList
    : currentList.filter(p => p.technologies.some(t => t.toLowerCase().includes(selectedTech.toLowerCase())))

  // Pagination logic
  const totalPages = Math.ceil(filteredList.length / itemsPerPage)
  const paginatedList = filteredList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setCurrentPage(1)
    setSelectedTech("All")
  }

  const handleTechChange = (techValue: string) => {
    setSelectedTech(techValue)
    setCurrentPage(1)
  }

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mb-8 md:mb-12 relative px-4 md:px-0">
        <div className="flex justify-center mb-2">
          <div className="bg-blue-50 dark:bg-gray-800 p-1 md:p-2 rounded-xl flex relative shadow-xl shadow-blue-500/5 dark:shadow-blue-500/10 w-full max-w-md md:max-w-none">
            {/* Active Tab Indicator */}
            <motion.div
              className="absolute top-0 left-0 w-1/3 h-full bg-blue-600 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-600 rounded-xl z-0 shadow-sm dark:shadow-none"
              variants={indicatorVariants}
              animate={activeTab}
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />

            {/* Tab Buttons */}
            <motion.button
              onClick={() => handleTabChange("fullstack")}
              className={`relative z-10 px-2 sm:px-4 md:px-8 py-2 md:py-4 text-xs sm:text-sm md:text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "fullstack" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "fullstack" ? 1 : 0.98 }}
              aria-selected={activeTab === "fullstack"}
              role="tab"
            >
              <span className={activeTab === "fullstack" ? "text-white" : "text-blue-800 dark:text-gray-300"}>
                Full Stack
              </span>
            </motion.button>

            <motion.button
              onClick={() => handleTabChange("uiux")}
              className={`relative z-10 px-2 sm:px-4 md:px-8 py-2 md:py-4 text-xs sm:text-sm md:text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "uiux" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "uiux" ? 1 : 0.98 }}
              aria-selected={activeTab === "uiux"}
              role="tab"
            >
              <span className={activeTab === "uiux" ? "text-white" : "text-blue-800 dark:text-gray-300"}>
                UI/UX Design
              </span>
            </motion.button>

            <motion.button
              onClick={() => handleTabChange("graphics")}
              className={`relative z-10 px-2 sm:px-4 md:px-8 py-2 md:py-4 text-xs sm:text-sm md:text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "graphics" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "graphics" ? 1 : 0.98 }}
              aria-selected={activeTab === "graphics"}
              role="tab"
            >
              <span className={activeTab === "graphics" ? "text-white" : "text-blue-800 dark:text-gray-300"}>
                Graphics Design
              </span>
            </motion.button>
          </div>
        </div>

        {/* Tab Icons */}
        <div className="flex justify-center space-x-8 md:space-x-16 mt-4">
          <motion.div
            className={`flex flex-col items-center ${activeTab === "fullstack" ? "text-blue-400" : "text-blue-500"}`}
            animate={{ y: activeTab === "fullstack" ? -5 : 0 }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-blue-100 dark:bg-gray-800 rounded-full shadow-lg mb-1 md:mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xs font-medium hidden sm:block">{fullStackProjects.length} Projects</span>
          </motion.div>

          <motion.div
            className={`flex flex-col items-center ${activeTab === "uiux" ? "text-blue-400" : "text-blue-500"}`}
            animate={{ y: activeTab === "uiux" ? -5 : 0 }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-blue-100 dark:bg-gray-800 rounded-full shadow-lg mb-1 md:mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <span className="text-xs font-medium hidden sm:block">{uiuxProjects.length} Designs</span>
          </motion.div>

          <motion.div
            className={`flex flex-col items-center ${activeTab === "graphics" ? "text-blue-400" : "text-blue-500"}`}
            animate={{ y: activeTab === "graphics" ? -5 : 0 }}
          >
            <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center bg-blue-100 dark:bg-gray-800 rounded-full shadow-lg mb-1 md:mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-medium hidden sm:block">{graphicsProjects.length} Graphics</span>
          </motion.div>
        </div>
      </div>

      {/* Filter Chips */}
      <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
        <div className="flex space-x-2 md:justify-center min-w-max px-4">
          {filterCategories.map((category) => (
            <button
              key={category.label}
              onClick={() => handleTechChange(category.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedTech === category.value
                ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                : "bg-white dark:bg-slate-800/50 text-blue-800 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-900 dark:hover:text-slate-200 border border-blue-100 dark:border-slate-700/50"
                }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content relative min-h-[400px]">
        {paginatedList.length > 0 ? (
          <motion.div
            key={`${activeTab}-${selectedTech}-${currentPage}`}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-4 md:px-0"
          >
            {paginatedList.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-blue-600 dark:text-slate-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-lg">No projects found with {filterCategories.find(c => c.value === selectedTech)?.label || selectedTech}</p>
            <button
              onClick={() => handleTechChange("All")}
              className="mt-4 px-6 py-2 bg-blue-600 dark:bg-slate-800 rounded-full text-sm hover:bg-blue-700 dark:hover:bg-slate-700 transition text-white"
            >
              Clear Filter
            </button>
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center space-x-4">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${currentPage === 1
              ? "bg-blue-100 dark:bg-slate-900/50 text-blue-400 dark:text-slate-600 cursor-not-allowed"
              : "bg-white dark:bg-slate-800 text-blue-800 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-900 dark:hover:text-white border border-blue-100 dark:border-transparent"
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>

          <div className="flex items-center space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${currentPage === page
                  ? "bg-blue-600 dark:bg-blue-500 text-white shadow-lg shadow-blue-500/25 scale-110"
                  : "bg-white dark:bg-slate-800/50 text-blue-800 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-900 dark:hover:text-slate-200 border border-blue-100 dark:border-slate-700/50"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all ${currentPage === totalPages
              ? "bg-blue-100 dark:bg-slate-900/50 text-blue-400 dark:text-slate-600 cursor-not-allowed"
              : "bg-white dark:bg-slate-800 text-blue-800 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-900 dark:hover:text-white border border-blue-100 dark:border-transparent"
              }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}


