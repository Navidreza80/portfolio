'use client'

import Header from '../components/Header'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Hi, I'm Navid 👋
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Full Stack Developer with experience in building modern and efficient web applications
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="/contact"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/projects"
                className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              My Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                'React.js',
                'Next.js',
                'TypeScript',
                'Node.js',
                'Tailwind CSS',
                'MongoDB',
              ].map((skill) => (
                <div
                  key={skill}
                  className="p-4 bg-gray-700 rounded-lg text-center text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
