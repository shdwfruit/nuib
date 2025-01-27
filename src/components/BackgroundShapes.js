'use client'
import { motion } from 'framer-motion'

export function BackgroundShapes() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-96 h-96 bg-white rounded-full opacity-[0.02]"
        animate={{
          x: ['-25%', '5%'],
          y: ['-25%', '5%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute right-0 bottom-0 w-96 h-96 bg-[#002033] rounded-full opacity-[0.03]"
        animate={{
          x: ['5%', '-15%'],
          y: ['5%', '-15%'],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute left-1/2 top-1/2 w-96 h-96 bg-[#002033] rounded-full opacity-[0.03]"
        animate={{
          x: ['-15%', '15%'],
          y: ['-15%', '15%'],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
    </div>
  )
} 