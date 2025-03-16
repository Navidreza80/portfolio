'use client'

import Header from '@/components/Header'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BsCode, BsLaptop, BsBook } from 'react-icons/bs'
import { HiOutlineLightBulb } from 'react-icons/hi'

const experiences = [
  {
    title: 'توسعه‌دهنده ارشد فول‌استک',
    company: 'شرکت تک‌استار',
    period: '۱۴۰۰ - اکنون',
    description: [
      'توسعه و نگهداری اپلیکیشن‌های وب با React و Node.js',
      'مدیریت تیم ۵ نفره توسعه‌دهندگان',
      'بهینه‌سازی عملکرد و مقیاس‌پذیری سیستم‌ها',
    ],
  },
  {
    title: 'توسعه‌دهنده فرانت‌اند',
    company: 'شرکت وب‌پلاس',
    period: '۱۳۹۸ - ۱۴۰۰',
    description: [
      'توسعه رابط‌های کاربری واکنش‌گرا',
      'همکاری با تیم طراحی برای بهبود تجربه کاربری',
    ],
  },
]

const skills = [
  {
    icon: BsCode,
    title: 'زبان‌های برنامه‌نویسی',
    items: ['JavaScript', 'TypeScript', 'Python'],
  },
  {
    icon: BsLaptop,
    title: 'فریم‌ورک‌ها',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js'],
  },
  {
    icon: HiOutlineLightBulb,
    title: 'مهارت‌های دیگر',
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
]

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  return (
    <main className="min-h-screen relative">
      <Header />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 to-transparent"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>

      <section className="pt-32 pb-16 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            {...fadeInUp}
            className="max-w-4xl mx-auto"
          >
            {/* Hero Section */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-40 h-40 mx-auto mb-8"
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-2xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full border-2 border-gray-700 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <Image src="/profile.jpg" alt="Profile" fill className="object-cover" />
                  </div>
                </div>
              </motion.div>
              
              <motion.h1
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-4 gradient-text"
              >
                درباره من
              </motion.h1>
              
              <motion.p
                {...fadeInUp}
                className="text-xl text-gray-300 max-w-2xl mx-auto"
              >
                سلام! من نوید هستم، یک توسعه‌دهنده فول‌استک با بیش از ۵ سال تجربه در ساخت
                اپلیکیشن‌های وب مدرن. من عاشق یادگیری تکنولوژی‌های جدید و حل چالش‌های
                پیچیده هستم.
              </motion.p>
            </div>

            {/* Education Section */}
            <motion.div
              {...fadeInUp}
              className="glass-card p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 gradient-text flex items-center">
                <BsBook className="mr-3" />
                تحصیلات
              </h2>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 relative">
                  <Image
                    src="/university-logo.png"
                    alt="University Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">کارشناسی مهندسی کامپیوتر</h3>
                  <p className="text-gray-400">دانشگاه تهران</p>
                </div>
              </div>
            </motion.div>

            {/* Experience Section */}
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-2xl font-bold mb-8 gradient-text">تجربیات کاری</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6"
                  >
                    <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
                    <p className="text-blue-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div {...fadeInUp}>
              <h2 className="text-2xl font-bold mb-8 gradient-text">مهارت‌های تخصصی</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card p-6 card-hover"
                  >
                    <div className="flex items-center mb-4">
                      <skill.icon className="text-2xl text-blue-400 mr-3" />
                      <h3 className="text-lg font-semibold">{skill.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {skill.items.map((item, i) => (
                        <li key={i} className="text-gray-400">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 