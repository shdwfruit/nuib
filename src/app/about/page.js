'use client'
import { motion } from 'framer-motion'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'
import Image from 'next/image'

const leadershipTeam = [
  {
    role: 'President',
    name: 'Trung Nguyen',
    image: '/trung.jpg',
    linkedin: 'https://www.linkedin.com/in/realtrungnguyen/'
  },
  {
    role: 'President, Deal Sourcing',
    name: 'Sheil Urankar',
    image: '/sheil.jpg',
    linkedin: 'https://www.linkedin.com/in/sheil-urankar-922041273/'
  },
  {
    role: 'President, M&A',
    name: 'Charlie Chen',
    image: '/charlie.jpg',
    linkedin: 'https://www.linkedin.com/in/charlie-chen27/'
  },
  {
    role: 'Vice President of Education',
    name: 'Goncalo Soares',
    image: '/goncalo.png',
    linkedin: 'https://www.linkedin.com/in/gon%C3%A7alo-soares-3386052bb/'
  },
  {
    role: 'Managing Director',
    name: 'Patrick Coffua',
    image: '/patrick.jpg',
    linkedin: 'https://www.linkedin.com/in/patrickcoffua/'
  },
  {
    role: 'Vice President of Quantitative Research',
    name: 'Arnav Medta',
    image: '/arnav.png',
    linkedin: 'https://www.linkedin.com/in/arnav-mehta-7503b4282/'
  },
  {
    role: 'Vice President of Marketing',
    name: 'Kristen Liao',
    image: '/liao.jpg',
    linkedin: 'https://www.linkedin.com/in/kristen-liao/'
  },
  {
    role: 'Vice President of Technology',
    name: 'Rick Xie',
    image: '/rick.png',
    linkedin: 'https://www.linkedin.com/in/rick-xie-569879300/'
  }
]

export default function About() {
  return (
    <div className="container mx-auto px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, transform: 'translateY(-20px)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
          className="text-6xl md:text-7xl font-bold mb-16 text-center text-white font-playfair leading-tight"
        >
          About Us
        </motion.h1>
        
        {/* Mission Statement */}
        <AnimateOnScroll>
          <div className="bg-white/10 backdrop-blur-sm p-12 rounded-lg shadow-lg mb-16 hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-white font-playfair">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-4 leading-relaxed max-w-3xl">
              NUIB is dedicated to preparing Northeastern students for successful careers in investment banking through education, networking, and hands-on experience.
            </p>
          </div>
        </AnimateOnScroll>

        {/* What We Do */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <AnimateOnScroll delay={0.2}>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white font-playfair">What We Offer</h2>
              <ul className="space-y-4 text-lg text-gray-300">
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
                    <span className="text-white font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={0.4}>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white font-playfair">Who Should Join</h2>
              <ul className="space-y-4 text-lg text-gray-300">
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
                    <span className="text-white font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Leadership Team */}
        <AnimateOnScroll delay={0.6} margin="-800px">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg mb-8 border border-white/10">
            <h2 className="text-3xl font-semibold mb-12 text-white font-playfair text-center">
              Leadership Team
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              {leadershipTeam.map((member, index) => (
                <motion.div 
                  key={member.role}
                  initial={{ opacity: 0, transform: 'translateY(20px)' }}
                  animate={{ opacity: 1, transform: 'translateY(0)' }}
                  transition={{ duration: 0.4, delay: 0.7 + (index * 0.2) }}
                  whileHover={{ transform: 'scale(1.05)' }}
                  style={{ willChange: 'transform' }}
                  className="text-center group"
                >
                  <div className="relative w-32 h-32 mx-auto mb-4 group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-2 border-white/20 transition-all duration-300 
                        shadow-[0_0_15px_rgba(255,255,255,0.1)] 
                        group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] 
                        group-hover:scale-105"
                    />
                    <div 
                      className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-white/10 to-transparent opacity-0 
                        group-hover:opacity-100 group-hover:blur-md transition-all duration-300"
                    ></div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-1 font-playfair">{member.name}</h3>
                  <p className="text-sm text-gray-300 mb-3 tracking-wide">{member.role}</p>
                  <a 
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-300 hover:text-white transition-all duration-300 group-hover:scale-105 text-sm"
                  >
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span className="group-hover:underline">LinkedIn</span>
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </div>
  )
} 