'use client'
import { motion } from 'framer-motion'

export function AnimateOnScroll({ children, className, delay = 0, margin = "-30px" }) {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(50px)' }}
      whileInView={{ opacity: 1, transform: 'translateY(0)' }}
      viewport={{ 
        once: true, 
        margin: margin
      }}
      transition={{ 
        duration: 0.4,
        delay,
        ease: "easeOut"
      }}
      style={{
        willChange: 'transform',
        transform: 'translateZ(0)'
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
} 