'use client'
import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Home() {
  return (
    <div className="relative">
      {/* Background Wave */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-[800px] transform translate-y-[-30%] opacity-5" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="#002033" 
            d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,224C672,213,768,171,864,149.3C960,128,1056,128,1152,149.3C1248,171,1344,213,1392,234.7L1440,256L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Existing content */}
      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with enhanced hierarchy */}
          <motion.div 
            initial={{ opacity: 0, transform: 'translateY(-20px)' }}
            animate={{ opacity: 1, transform: 'translateY(0)' }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            style={{
              willChange: 'transform',
              transform: 'translateZ(0)'
            }}
            className="text-center mb-24"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-8 text-[#002033] font-playfair leading-tight">
              Welcome to NUIB
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Northeastern University's Premier Investment Banking Organization
            </p>
            <motion.a 
              href="/about"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-[#002033] text-white px-10 py-4 rounded-md hover:bg-opacity-90 transition duration-300 text-lg"
            >
              Learn More
            </motion.a>
          </motion.div>

          {/* Features Grid with enhanced spacing */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              {
                title: "Education",
                content: "Learn from industry professionals and gain practical knowledge in investment banking."
              },
              {
                title: "Networking",
                content: "Connect with alumni and professionals in the investment banking industry."
              },
              {
                title: "Opportunities",
                content: "Access exclusive internship and job opportunities in investment banking."
              }
            ].map((feature, index) => (
              <AnimateOnScroll key={feature.title} delay={index * 0.2}>
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h2 className="text-2xl font-semibold mb-6 text-[#002033] font-playfair">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {feature.content}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Call to Action with enhanced design */}
          <AnimateOnScroll>
            <div className="bg-[#002033] text-white p-12 rounded-lg text-center transform hover:scale-[1.02] transition-transform duration-300">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">Join Our Community</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Take the first step towards your career in investment banking.
              </p>
              <motion.a 
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-[#002033] px-10 py-4 rounded-md hover:bg-gray-100 transition duration-300 text-lg font-medium"
              >
                Get Started
              </motion.a>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  )
} 