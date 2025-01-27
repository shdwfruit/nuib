'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ transform: 'translateY(-100%)' }}
      animate={{ transform: 'translateY(0)' }}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
      className="bg-nuib-navy p-3 sticky top-0 z-50 -mt-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.jpg"
              alt="NUIB Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-white text-xl font-bold font-playfair">NUIB</span>
          </Link>
        </motion.div>
        <div className="space-x-4">
          {['Home', 'About', 'Contact'].map((item) => (
            <motion.span
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-white hover:text-gray-300"
              >
                {item}
              </Link>
            </motion.span>
          ))}
        </div>
      </div>
    </motion.nav>
  )
} 