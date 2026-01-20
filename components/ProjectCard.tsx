"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
    id: number
    title: string
    description: string
    technologies: string[]
    image: string
    link?: string
}

interface ProjectCardProps {
    project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <motion.div
            className="group relative overflow-hidden rounded-xl border border-blue-100 dark:border-slate-800/60 bg-white dark:bg-slate-900/60 shadow-xl backdrop-blur transition-all duration-300 hover:border-blue-500/60 hover:shadow-2xl hover:shadow-blue-500/20"
            whileHover={{
                scale: 1.02,
                rotateY: 2,
                rotateX: 2,
                translateY: -8
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 200,
                damping: 20
            }}
            style={{ transformStyle: 'preserve-3d' }}
        >
            <div className="relative h-40 overflow-hidden sm:h-48">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60 z-10" />
                <Image
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="p-4 sm:p-6">
                <h3 className="mb-2 line-clamp-2 text-lg font-bold text-blue-900 dark:text-slate-100 sm:text-xl">{project.title}</h3>
                <p className="mb-4 line-clamp-3 text-sm text-blue-800 dark:text-slate-400 sm:text-base">{project.description}</p>
                <div className="mb-4 flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-blue-50 dark:bg-slate-800/60 px-2 py-1 text-xs text-blue-800 dark:text-blue-300 transition-colors hover:bg-blue-100 dark:hover:bg-blue-500/20 sm:px-3 sm:text-sm font-medium"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800/60 p-3 sm:p-4">
                {project.link && (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 dark:text-blue-400 transition-colors hover:text-blue-700 dark:hover:text-blue-300 sm:text-base"
                    >
                        Visit Project →
                    </a>
                )}
            </div>
        </motion.div>
    )
}

export default ProjectCard
