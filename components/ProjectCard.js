"use client"

import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2 w-full"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-40 sm:h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
        <p className="text-gray-400 mb-4 text-sm sm:text-base line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-2 sm:px-3 py-1 bg-gray-700 rounded-full text-xs sm:text-sm text-blue-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-3 sm:p-4 border-t border-gray-700 flex justify-between items-center">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
          >
            Visit Project
          </a>
        )}
        <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base">Details</button>
      </div>
    </motion.div>
  )
}

export default ProjectCard

