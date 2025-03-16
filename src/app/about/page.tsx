'use client'

import Header from '@/components/Header'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto prose dark:prose-invert"
          >
            <h1 className="text-center mb-8">درباره من</h1>
            
            <p>
              سلام! من نوید هستم، یک توسعه‌دهنده فول‌استک با بیش از ۵ سال تجربه در ساخت
              اپلیکیشن‌های وب مدرن. من عاشق یادگیری تکنولوژی‌های جدید و حل چالش‌های
              پیچیده هستم.
            </p>

            <h2>تحصیلات</h2>
            <ul>
              <li>کارشناسی مهندسی کامپیوتر - دانشگاه تهران</li>
            </ul>

            <h2>تجربیات کاری</h2>
            <div className="space-y-6">
              <div>
                <h3>توسعه‌دهنده ارشد فول‌استک - شرکت تک‌استار</h3>
                <p className="text-gray-600 dark:text-gray-400">۱۴۰۰ - اکنون</p>
                <ul>
                  <li>توسعه و نگهداری اپلیکیشن‌های وب با React و Node.js</li>
                  <li>مدیریت تیم ۵ نفره توسعه‌دهندگان</li>
                  <li>بهینه‌سازی عملکرد و مقیاس‌پذیری سیستم‌ها</li>
                </ul>
              </div>

              <div>
                <h3>توسعه‌دهنده فرانت‌اند - شرکت وب‌پلاس</h3>
                <p className="text-gray-600 dark:text-gray-400">۱۳۹۸ - ۱۴۰۰</p>
                <ul>
                  <li>توسعه رابط‌های کاربری واکنش‌گرا</li>
                  <li>همکاری با تیم طراحی برای بهبود تجربه کاربری</li>
                </ul>
              </div>
            </div>

            <h2>مهارت‌های تخصصی</h2>
            <ul>
              <li>زبان‌های برنامه‌نویسی: JavaScript، TypeScript، Python</li>
              <li>فریم‌ورک‌ها: React.js، Next.js، Node.js، Express.js</li>
              <li>پایگاه داده: MongoDB، PostgreSQL</li>
              <li>ابزارها: Git، Docker، AWS</li>
            </ul>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 