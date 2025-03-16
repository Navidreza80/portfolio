'use client'

import Header from '../../components/Header'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Online Learning Platform',
    description: 'An e-learning platform with virtual classroom capabilities and course management',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'WebRTC'],
    image: '/projects/education.jpg',
    link: '#',
    color: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'Project Management App',
    description: 'Project management system with task definition, scheduling, and reporting features',
    tech: ['React', 'Express.js', 'PostgreSQL', 'Redis'],
    image: '/projects/project-management.jpg',
    link: '#',
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    title: 'E-commerce Store',
    description: 'Online store with advanced shopping cart and secure payment system',
    tech: ['Next.js', 'Stripe', 'MongoDB', 'AWS'],
    image: '/projects/ecommerce.jpg',
    link: '#',
    color: 'from-orange-500/20 to-red-500/20'
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <main>
      <Header />
      
      <section className="min-h-screen pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-gray-400 text-center mb-12 text-lg">
              A collection of my recent work and side projects
            </p>
            
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid gap-8"
            >
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={item}
                  className="glass-card overflow-hidden card-hover group"
                >
                  <div className={`p-8 relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-20`}></div>
                    <div className="relative">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-gray-300 border border-gray-700"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="button-primary inline-flex items-center group"
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 