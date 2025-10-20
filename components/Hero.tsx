'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-hero-gradient z-10"></div>

      {/* Subtle background gradient - clean and professional */}

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Phoenix logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-phoenix-gradient opacity-30 blur-3xl rounded-full"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 animate-pulse">
              <Image
                src="/phoenix-logo-transparent.png"
                alt="Zenith Reborn Phoenix"
                width={160}
                height={160}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient phoenix-glow">
          Zenith Reborn
        </h1>

        {/* Subheading */}
        <p className="text-2xl md:text-3xl text-neutral-lightText mb-4 font-light">
          Rise to Your Potential
        </p>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-neutral-gray mb-12 max-w-3xl mx-auto">
          Master Your Skills, One Session at a Time
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#skillquest"
            className="group relative px-8 py-4 bg-phoenix-gradient text-white font-semibold rounded-full text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/50"
          >
            <span className="relative z-10">Discover SkillQuest</span>
          </a>

          <a
            href="#contact"
            className="px-8 py-4 border-2 border-primary-gold text-primary-gold font-semibold rounded-full text-lg transition-all duration-300 hover:bg-primary-gold hover:text-neutral-darkBg hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-primary-gold"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
