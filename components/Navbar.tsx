'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'About', href: '/#about' },
    { name: 'SkillQuest', href: '/#skillquest' },
    { name: 'Blog', href: '/blog' },
    { name: 'Download', href: '/#download' },
    { name: 'Contact', href: '/#contact' },
  ]

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If on homepage, scroll to top
    if (window.location.pathname === '/') {
      e.preventDefault()
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
    // Otherwise, allow normal navigation to homepage
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false)

    // Handle hash links on the homepage (/#about)
    if (href.startsWith('/#')) {
      // Check if we're already on the homepage
      if (window.location.pathname === '/') {
        e.preventDefault()
        const hash = href.substring(1) // Remove the leading /
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
      }
      // If not on homepage, allow normal navigation - Next.js will handle the hash
      return
    }

    // Allow normal navigation for other links (like /blog)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-darkBg/80 backdrop-blur-xl border-b border-primary-gold/20 shadow-lg shadow-primary-orange/5'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="flex items-center gap-3 group">
              <div className="w-10 h-10 relative transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/phoenix-logo-transparent.png"
                  alt="Zenith Reborn"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold text-gradient hidden sm:inline-block">
                Zenith Reborn
              </span>
              <span className="text-xl font-bold text-gradient sm:hidden">
                ZR
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-neutral-lightText hover:text-primary-gold transition-all duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-phoenix-gradient group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/#download"
                onClick={(e) => scrollToSection(e, '/#download')}
                className="px-6 py-3 bg-phoenix-gradient text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-orange/50 inline-block"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-neutral-lightText hover:text-primary-gold transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`w-full h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-neutral-darkBg/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-8 px-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-3xl font-bold text-neutral-lightText hover:text-gradient transition-all duration-300 ${
                isMobileMenuOpen ? 'animate-fade-in' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/#download"
            onClick={(e) => scrollToSection(e, '/#download')}
            className="mt-8 px-8 py-4 bg-phoenix-gradient text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary-orange/50 text-xl"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </>
  )
}
