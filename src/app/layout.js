import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { Playfair_Display, Inter } from 'next/font/google'
import { BackgroundShapes } from '@/components/BackgroundShapes'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair'
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <BackgroundShapes />
        <Navigation />
        <main className="min-h-screen p-4 relative">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 