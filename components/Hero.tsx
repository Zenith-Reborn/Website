"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background gradient overlay */}
      <div className="bg-hero-gradient absolute inset-0 z-10"></div>

      {/* Subtle background gradient - clean and professional */}

      {/* Hero content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        {/* Phoenix logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-phoenix-gradient absolute inset-0 rounded-full opacity-30 blur-3xl"></div>
            <div className="relative h-32 w-32 animate-pulse md:h-40 md:w-40">
              <Image
                src="/phoenix-logo-transparent.png"
                alt="Zenith Reborn Phoenix"
                width={160}
                height={160}
                className="h-full w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-gradient phoenix-glow mb-6 text-5xl font-bold md:text-7xl">
          Zenith Reborn
        </h1>

        {/* Subheading */}
        <p className="text-neutral-lightText mb-4 text-2xl font-light md:text-3xl">
          Rise to Your Potential
        </p>

        {/* Tagline */}
        <p className="text-neutral-gray mx-auto mb-12 max-w-3xl text-xl md:text-2xl">
          Master Your Skills, One Session at a Time
        </p>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#skillquest"
            className="group bg-phoenix-gradient hover:shadow-primary-orange/50 relative overflow-hidden rounded-full px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10">Discover SkillQuest</span>
          </a>

          <a
            href="#contact"
            className="border-primary-gold text-primary-gold hover:bg-primary-gold hover:text-neutral-darkBg rounded-full border-2 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <svg
            className="text-primary-gold h-6 w-6"
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
  );
}
