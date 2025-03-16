'use client'

import Header from '../components/Header'
import { motion } from 'framer-motion'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'
import { HiArrowDown } from 'react-icons/hi'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stats = [
  { number: '5+', label: 'Years Experience' },
  { number: '20+', label: 'Projects Completed' },
  { number: '10+', label: 'Happy Clients' },
  { number: '3+', label: 'Awards' },
]

export default function Home() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
        
        <div className="container mx-auto px-4 pt-40 pb-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-40 h-40 mx-auto mb-8"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full border-2 border-gray-700 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="gradient-text">Hi, I'm Navid</span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block ml-4"
              >
                👋
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Full Stack Developer crafting beautiful and efficient web experiences
            </motion.p>

            {/* Social Links */}
            <motion.div 
              className="flex justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a href="https://github.com/Navidreza80" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <BsGithub size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <BsLinkedin size={24} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors">
                <BsTwitter size={24} />
              </a>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <a href="/contact" className="button-primary">
                Get in Touch
              </a>
              <a href="/projects" className="button-secondary">
                View Projects
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="glass-card p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="text-gray-400 w-6 h-6" />
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="gradient-text">Tech Stack</span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Technologies I work with
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'React.js', icon: '⚛️', desc: 'Building interactive UIs' },
                { name: 'Next.js', icon: '▲', desc: 'Full-stack React framework' },
                { name: 'TypeScript', icon: '📘', desc: 'Type-safe JavaScript' },
                { name: 'Node.js', icon: '🟢', desc: 'Backend development' },
                { name: 'Tailwind CSS', icon: '🎨', desc: 'Utility-first CSS' },
                { name: 'MongoDB', icon: '🍃', desc: 'NoSQL database' },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 text-center card-hover group"
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <div className="font-medium mb-2">{skill.name}</div>
                  <div className="text-sm text-gray-400">{skill.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
