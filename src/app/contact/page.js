'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '@/utils/supabase'
import { AnimateOnScroll } from '@/components/AnimateOnScroll'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ type: '', message: '' })

  // Validation rules
  const validateForm = () => {
    const newErrors = {}

    // Name validation
    if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }
    if (formData.name.length > 50) {
      newErrors.name = 'Name must be less than 50 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.email.toLowerCase().endsWith('northeastern.edu')) {
      newErrors.email = 'Please use your Northeastern email address'
    }

    // Message validation
    if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    if (formData.message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Returns true if no errors
  }

  const handleChange = (e) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form before submitting
    if (!validateForm()) {
      setStatus({ type: 'error', message: 'Please fix the errors before submitting.' })
      return
    }

    setStatus({ type: 'loading', message: 'Sending message...' })

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ])

      if (error) throw error

      setStatus({ type: 'success', message: 'Message sent successfully!' })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message. Please try again.' })
      console.error('Error:', error)
    }
  }

  return (
    <div className="container mx-auto px-6 py-16">
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
        Contact Us
      </motion.h1>
      
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
        {/* Contact Information */}
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white font-playfair">Get in Touch</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: 'Email',
                  content: 'nuib@northeastern.edu',
                  delay: 0.2
                },
                {
                  title: 'Office Location',
                  content: 'International Village, Room 019\nNortheastern University\nBoston, MA 02115',
                  delay: 0.3
                },
                {
                  title: 'Meeting Times',
                  content: 'Every Wednesday at 6:00 PM EST',
                  delay: 0.4
                }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                  animate={{ opacity: 1, transform: 'translateX(0)' }}
                  transition={{ duration: 0.3, delay: item.delay }}
                  style={{ willChange: 'transform' }}
                  className="space-y-2"
                >
                  <h3 className="text-xl font-medium text-white">{item.title}</h3>
                  <p className="text-lg text-gray-300 whitespace-pre-line leading-relaxed">
                    {item.content}
                  </p>
                </motion.div>
              ))}
              
              <motion.div 
                className="pt-6"
                initial={{ opacity: 0, transform: 'translateX(-20px)' }}
                animate={{ opacity: 1, transform: 'translateX(0)' }}
                transition={{ duration: 0.3, delay: 0.5 }}
                style={{ willChange: 'transform' }}
              >
                <h3 className="text-xl font-medium text-white mb-4">Follow Us</h3>
                <div className="flex space-x-6 relative z-10">
                  {['LinkedIn', 'Instagram', 'Twitter'].map((platform, index) => (
                    <motion.a
                      key={platform}
                      href="#"
                      className="text-lg text-gray-300 hover:text-white transition-colors duration-300 relative"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      style={{ willChange: 'transform' }}
                    >
                      {platform}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm p-10 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10 hover:bg-white/20">
          <AnimateOnScroll delay={0.3}>
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-white font-playfair">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-lg font-medium text-white mb-3" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 text-lg border bg-white/5 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 ${
                    errors.name ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Your Name"
                  required
                />
                {errors.name && (
                  <p className="text-red-400 text-base mt-2">{errors.name}</p>
                )}
              </div>
              
              <div>
                <label className="block text-lg font-medium text-white mb-3" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2.5 text-lg border bg-white/5 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 ${
                    errors.email ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="your@northeastern.edu"
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-base mt-2">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label className="block text-lg font-medium text-white mb-3" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className={`w-full px-3 py-2.5 text-lg border bg-white/5 backdrop-blur-sm rounded-md focus:outline-none focus:ring-2 focus:ring-white/50 text-white placeholder-gray-400 ${
                    errors.message ? 'border-red-500' : 'border-white/10'
                  }`}
                  placeholder="Your message here..."
                  required
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-base mt-2">{errors.message}</p>
                )}
                <p className="text-gray-400 text-base mt-2">
                  {formData.message.length}/500 characters
                </p>
              </div>

              {status.message && (
                <div className={`p-4 rounded-md text-lg backdrop-blur-sm ${
                  status.type === 'error' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                  status.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                  'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                }`}>
                  {status.message}
                </div>
              )}
              
              <button
                type="submit"
                disabled={status.type === 'loading'}
                className="w-full bg-white text-nuib-navy py-4 px-8 rounded-md hover:bg-opacity-90 transition duration-300 disabled:opacity-50 text-lg font-medium mt-6"
              >
                {status.type === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </AnimateOnScroll>
        </div>
      </div>
    </div>
  )
} 