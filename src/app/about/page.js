'use client'
import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          className="text-6xl md:text-7xl font-bold mb-16 text-center text-[#002033] font-playfair leading-tight"
        >
          About Us
        </motion.h1>
        
        {/* Mission Statement */}
        <AnimateOnScroll>
          <div className="bg-white p-12 rounded-lg shadow-lg mb-16 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-[#002033] font-playfair">Our Mission</h2>
            <p className="text-xl text-gray-600 mb-4 leading-relaxed max-w-3xl">
              NUIB is dedicated to preparing Northeastern students for successful careers in investment banking through education, networking, and hands-on experience.
            </p>
          </div>
        </AnimateOnScroll>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll delay={0.2}>
            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#002033] font-playfair">What We Offer</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                {[
                  'Professional Development Workshops',
                  'Technical Training Sessions',
                  'Networking Events',
                  'Mock Interviews',
                  'Resume Reviews'
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                    animate={{ opacity: 1, transform: 'translateX(0)' }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    style={{ willChange: 'transform' }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-[#002033] font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.4}>
            <div className="bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-[#002033] font-playfair">Who Should Join</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                {[
                  'Finance & Economics Majors',
                  'Business Students',
                  'Aspiring Investment Bankers',
                  'Students Interested in Finance',
                  'All Class Years Welcome'
                ].map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, transform: 'translateX(20px)' }}
                    animate={{ opacity: 1, transform: 'translateX(0)' }}
                    transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
                    style={{ willChange: 'transform' }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-[#002033] font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Leadership Team */}
        <AnimateOnScroll delay={0.6} margin="-800px">
          <div className="bg-white p-12 rounded-lg shadow-lg mb-8 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-[#002033] font-playfair text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { role: 'President', name: 'Name Here' },
                { role: 'Vice President', name: 'Name Here' },
                { role: 'Treasurer', name: 'Name Here' }
              ].map((member, index) => (
                <motion.div 
                  key={member.role}
                  initial={{ opacity: 0, transform: 'translateY(20px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0)' }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.2) }}
                  whileHover={{ transform: 'scale(1.05)' }}
                  style={{ willChange: 'transform' }}
                  className="text-center"
                >
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-5"></div>
                  <h3 className="text-xl font-semibold text-[#002033] mb-2">{member.role}</h3>
                  <p className="text-lg text-gray-600">{member.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
} 