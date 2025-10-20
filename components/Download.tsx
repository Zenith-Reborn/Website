'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Download() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would connect to your email service (Mailchimp, SendGrid, etc.)
    console.log('Email submitted:', email)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setEmail('')
    }, 3000)
  }

  return (
    <section id="download" className="py-24 px-6 bg-gradient-to-b from-black to-neutral-darkBg">
      <div className="container mx-auto max-w-5xl">
        {/* Section header with logo */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 relative">
              <Image
                src="/skillquest-logo.png"
                alt="SkillQuest"
                width={128}
                height={128}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Get SkillQuest
          </h2>
          <p className="text-xl text-neutral-gray max-w-2xl mx-auto">
            Join the waitlist and be among the first to experience the future of skill mastery
          </p>
        </div>

        {/* Download cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* iOS */}
          <div className="bg-neutral-darkBg border border-primary-gold/30 rounded-2xl p-8 text-center hover:border-primary-gold hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4">🍎</div>
            <h3 className="text-2xl font-bold text-primary-gold mb-3">iOS</h3>
            <p className="text-neutral-gray mb-6">Available on the App Store</p>
            <div className="inline-block bg-neutral-gray/20 text-neutral-lightText px-6 py-3 rounded-lg font-semibold">
              Coming Soon
            </div>
          </div>

          {/* Android */}
          <div className="bg-neutral-darkBg border border-primary-orange/30 rounded-2xl p-8 text-center hover:border-primary-orange hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold text-primary-orange mb-3">Android</h3>
            <p className="text-neutral-gray mb-6">Available on Google Play</p>
            <div className="inline-block bg-neutral-gray/20 text-neutral-lightText px-6 py-3 rounded-lg font-semibold">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Email signup */}
        <div className="bg-gradient-to-br from-neutral-darkBg to-black border border-primary-gold/30 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-amber mb-3">
              Join the Waitlist
            </h3>
            <p className="text-neutral-gray">
              Get early access and exclusive launch offers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-6 py-4 bg-black border border-primary-gold/30 rounded-full text-neutral-lightText placeholder-neutral-gray focus:outline-none focus:border-primary-gold transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-phoenix-gradient text-white font-semibold rounded-full hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-orange/50"
              >
                Notify Me
              </button>
            </div>

            {submitted && (
              <p className="mt-4 text-center text-primary-gold font-semibold animate-pulse">
                ✅ Thanks! We'll notify you when SkillQuest launches
              </p>
            )}
          </form>

          {/* Features list */}
          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">🎁</div>
              <p className="text-sm text-neutral-gray">Early access benefits</p>
            </div>
            <div>
              <div className="text-3xl mb-2">💎</div>
              <p className="text-sm text-neutral-gray">Exclusive launch offers</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📧</div>
              <p className="text-sm text-neutral-gray">Launch announcements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
