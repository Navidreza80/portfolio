import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Navid - Full Stack Developer',
  description: 'Portfolio and experience in web development',
  keywords: ['web development', 'programming', 'full stack', 'portfolio'],
  authors: [{ name: 'Navid' }],
  openGraph: {
    title: 'Navid - Full Stack Developer',
    description: 'Portfolio and experience in web development',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
