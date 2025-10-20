import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-primary-gold/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src="/phoenix-logo-transparent.png"
                  alt="Zenith Reborn Phoenix"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold text-gradient">Zenith Reborn</h3>
            </div>
            <p className="text-neutral-gray mb-4 max-w-md">
              Empowering individuals to rise to their potential through innovative skill mastery tools.
            </p>
            <p className="text-sm text-neutral-gray">
              Transform your practice. Master your skills. Rise to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-neutral-lightText mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skillquest" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  SkillQuest
                </a>
              </li>
              <li>
                <a href="#download" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Download
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-neutral-lightText mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/cookies" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="/eula" className="text-neutral-gray hover:text-primary-gold transition-colors">
                  EULA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-primary-gold/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-neutral-gray text-sm">
              © {currentYear} Zenith Reborn. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-lg">in</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all"
                aria-label="Instagram"
              >
                <span className="text-lg">IG</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-neutral-darkBg border border-primary-gold/30 rounded-full flex items-center justify-center hover:border-primary-gold hover:scale-110 transition-all"
                aria-label="GitHub"
              >
                <span className="text-lg">GH</span>
              </a>
            </div>

            <p className="text-neutral-gray text-sm">
              Made with <span className="text-secondary-deepRed">❤️</span> and{' '}
              <span className="text-primary-gold">🔥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
