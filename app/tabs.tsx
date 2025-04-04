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

  return (
    <div className="w-full">
      {/* Tab Navigation */}
      <div className="mb-12 relative">
        <div className="flex justify-center mb-2">
          <div className="bg-gray-800 p-2 rounded-xl flex relative shadow-xl shadow-blue-500/10">
            {/* Active Tab Indicator */}
            <motion.div 
              className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl z-0"
              variants={indicatorVariants}
              animate={activeTab}
              initial={false}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            
            {/* Tab Buttons */}
            <motion.button
              onClick={() => setActiveTab("fullstack")}
              className={`relative z-10 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "fullstack" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "fullstack" ? 1 : 0.98 }}
              aria-selected={activeTab === "fullstack"}
              role="tab"
            >
              <span className={activeTab === "fullstack" ? "text-white" : "text-gray-300"}>
                Full Stack
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab("uiux")}
              className={`relative z-10 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "uiux" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "uiux" ? 1 : 0.98 }}
              aria-selected={activeTab === "uiux"}
              role="tab"
            >
              <span className={activeTab === "uiux" ? "text-white" : "text-gray-300"}>
                UI/UX Design
              </span>
            </motion.button>
            
            <motion.button
              onClick={() => setActiveTab("graphics")}
              className={`relative z-10 px-8 py-4 text-lg font-medium rounded-lg transition-all duration-300 flex-1 text-center`}
              variants={tabVariants}
              animate={activeTab === "graphics" ? "active" : "inactive"}
              whileHover={{ scale: activeTab === "graphics" ? 1 : 0.98 }}
              aria-selected={activeTab === "graphics"}
              role="tab"
            >
              <span className={activeTab === "graphics" ? "text-white" : "text-gray-300"}>
                Graphics Design
              </span>
            </motion.button>
          </div>
        </div>
        
        {/* Tab Icons */}
        <div className="flex justify-center space-x-16 mt-4">
          <motion.div 
            className={`flex flex-col items-center ${activeTab === "fullstack" ? "text-blue-400" : "text-gray-500"}`}
            animate={{ y: activeTab === "fullstack" ? -5 : 0 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <span className="text-xs font-medium">{fullStackProjects.length} Projects</span>
          </motion.div>
          
          <motion.div 
            className={`flex flex-col items-center ${activeTab === "uiux" ? "text-blue-400" : "text-gray-500"}`}
            animate={{ y: activeTab === "uiux" ? -5 : 0 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <span className="text-xs font-medium">{uiuxProjects.length} Designs</span>
          </motion.div>
          
          <motion.div 
            className={`flex flex-col items-center ${activeTab === "graphics" ? "text-red-400" : "text-gray-500"}`}
            animate={{ y: activeTab === "graphics" ? -5 : 0 }}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full shadow-lg mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-xs font-medium">{graphicsProjects.length} Graphics</span>
          </motion.div>
        </div>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "fullstack" && (
          <motion.div
            key="fullstack"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {fullStackProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {activeTab === "uiux" && (
          <motion.div
            key="uiux"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {uiuxProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}

        {activeTab === "graphics" && (
          <motion.div
            key="graphics"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {graphicsProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        )}
      </div>
    </div>
  )
}
