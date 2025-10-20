'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import SkillQuest from '@/components/SkillQuest'
import Download from '@/components/Download'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  useEffect(() => {
    // Handle hash scrolling when navigating from other pages
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const offset = 80 // navbar height
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - offset

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100) // Small delay to ensure page is fully loaded
    }
  }, [])

  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <SkillQuest />
        <Download />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
