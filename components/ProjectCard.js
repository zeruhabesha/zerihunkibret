"use client"

import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 transform hover:-translate-y-2"
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-48 overflow-hidden">
        <img
          src={project.image || "/placeholder.svg?height=400&width=600"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-4 border-t border-gray-700 flex justify-between">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            Visit Project
          </a>
        )}
        <button className="text-blue-400 hover:text-blue-300 transition-colors">Details</button>
      </div>
    </motion.div>
  )
}

export default ProjectCard

