'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your email service or API
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-darkBg">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get in Touch
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-primary-gold mb-6">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-semibold text-neutral-lightText mb-1">Email</h4>
                    <a
                      href="mailto:hello@zenithreborn.com"
                      className="text-primary-amber hover:text-primary-gold transition-colors"
                    >
                      hello@zenithreborn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h4 className="font-semibold text-neutral-lightText mb-1">Website</h4>
                    <a
                      href="https://zenithreborn.com"
                      className="text-primary-amber hover:text-primary-gold transition-colors"
                    >
                      zenithreborn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-semibold text-neutral-lightText mb-1">Response Time</h4>
                    <p className="text-neutral-gray">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links placeholder */}
            <div className="pt-8 border-t border-primary-gold/20">
              <h4 className="font-semibold text-neutral-lightText mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all">
                  <span className="text-xl">𝕏</span>
                </a>
                <a href="#" className="w-12 h-12 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all">
                  <span className="text-xl">in</span>
                </a>
                <a href="#" className="w-12 h-12 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all">
                  <span className="text-xl">IG</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-black border border-primary-gold/30 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-neutral-lightText mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-darkBg border border-primary-gold/30 rounded-lg text-neutral-lightText placeholder-neutral-gray focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-neutral-lightText mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-darkBg border border-primary-gold/30 rounded-lg text-neutral-lightText placeholder-neutral-gray focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-neutral-lightText mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-neutral-darkBg border border-primary-gold/30 rounded-lg text-neutral-lightText placeholder-neutral-gray focus:outline-none focus:border-primary-gold transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-neutral-lightText mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-darkBg border border-primary-gold/30 rounded-lg text-neutral-lightText placeholder-neutral-gray focus:outline-none focus:border-primary-gold transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-phoenix-gradient text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/50"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-center text-primary-gold font-semibold animate-pulse">
                  ✅ Message sent! We'll get back to you soon.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
