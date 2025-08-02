'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface Project {
  id: string
  title: string
  description: string
  image: string
  githubUrl?: string
  liveUrl?: string
  slug: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const gradients = [
    'from-green-400 to-emerald-500',
    'from-emerald-400 to-teal-500',
    'from-teal-400 to-cyan-500',
    'from-cyan-400 to-blue-500',
    'from-blue-400 to-indigo-500'
  ]
  const gradientIndex = project.title.length % gradients.length
  const gradient = gradients[gradientIndex]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 aspect-square"
    >
      {/* Project Image - 60% of card height */}
      <div className="relative h-40 overflow-hidden">
        <div 
          className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}
        >
          <div className="text-white text-2xl sm:text-3xl md:text-4xl font-bold opacity-20">
            {project.title.charAt(0)}
          </div>
        </div>
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      {/* Project Content - 40% of card height */}
      <div className="relative p-4 sm:p-6 h-2/5 flex flex-col">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-bold text-green-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-green-700 text-xs sm:text-sm leading-relaxed mb-3">
            {project.description}
          </p>
        </div>

        <div className="flex items-center gap-2 mb-4">
          {project.githubUrl && (
            <Link 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors duration-200 group-hover:scale-110"
            >
              <Github className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
            </Link>
          )}
          {project.liveUrl && (
            <Link 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg bg-green-100 hover:bg-green-200 transition-colors duration-200 group-hover:scale-110"
            >
              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 text-green-700" />
            </Link>
          )}
        </div>

        {/* Read more button - positioned in bottom-right corner */}
        <div className="flex justify-end">
          <Link href={`/projects/${project.slug}`}>
            <button className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg bg-green-600 text-white text-xs sm:text-sm font-medium hover:bg-green-700 transition-colors duration-200 group-hover:scale-105">
              <span>Read more</span>
              <ArrowRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

interface ProjectBentoGridProps {
  projects: Project[]
}

const ProjectBentoGrid = ({ projects }: ProjectBentoGridProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectBentoGrid 