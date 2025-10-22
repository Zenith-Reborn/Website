"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "/#about" },
    { name: "SkillQuest", href: "/#skillquest" },
    { name: "Blog", href: "/blog" },
    { name: "Download", href: "/#download" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If on homepage, scroll to top
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    // Otherwise, allow normal navigation to homepage
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);

    // Handle hash links on the homepage (/#about)
    if (href.startsWith("/#")) {
      // Check if we're already on the homepage
      if (window.location.pathname === "/") {
        e.preventDefault();
        const hash = href.substring(1); // Remove the leading /
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80; // navbar height
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
      // If not on homepage, allow normal navigation - Next.js will handle the hash
      return;
    }

    // Allow normal navigation for other links (like /blog)
  };

  return (
    <>
      <nav
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-neutral-darkBg/80 border-primary-gold/20 shadow-primary-orange/5 border-b shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" onClick={handleLogoClick} className="group flex items-center gap-3">
              <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/phoenix-logo-transparent.png"
                  alt="Zenith Reborn"
                  width={40}
                  height={40}
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="text-gradient hidden text-xl font-bold sm:inline-block">
                Zenith Reborn
              </span>
              <span className="text-gradient text-xl font-bold sm:hidden">ZR</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-neutral-lightText hover:text-primary-gold group relative transition-all duration-300"
                >
                  {item.name}
                  <span className="bg-phoenix-gradient absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:block">
              <Link
                href="/#download"
                onClick={(e) => scrollToSection(e, "/#download")}
                className="bg-phoenix-gradient hover:shadow-primary-orange/50 inline-block rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Join Waitlist
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-neutral-lightText hover:text-primary-gold p-2 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              <div className="flex h-5 w-6 flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`h-0.5 w-full bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="bg-neutral-darkBg/95 absolute inset-0 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className="relative flex h-full flex-col items-center justify-center gap-8 px-6">
          {navItems.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={`text-neutral-lightText hover:text-gradient text-3xl font-bold transition-all duration-300 ${
                isMobileMenuOpen ? "animate-fade-in" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTA */}
          <Link
            href="/#download"
            onClick={(e) => scrollToSection(e, "/#download")}
            className="bg-phoenix-gradient hover:shadow-primary-orange/50 mt-8 rounded-full px-8 py-4 text-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            Join Waitlist
          </Link>
        </div>
      </div>
    </>
  );
}
