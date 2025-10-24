import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-primary-gold/20 border-t bg-black">
      <div className="container mx-auto px-6 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/phoenix-logo-transparent.png"
                  alt="Zenith Reborn Phoenix"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="text-gradient text-2xl font-bold">Zenith Reborn</h3>
            </div>
            <p className="text-neutral-gray mb-4 max-w-md">
              Empowering individuals to rise to their potential through innovative skill mastery
              tools.
            </p>
            <p className="text-neutral-gray text-sm">
              Transform your practice. Master your skills. Rise to excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-neutral-lightText mb-4 font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skillquest"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  SkillQuest
                </a>
              </li>
              <li>
                <a
                  href="#download"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Download
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-neutral-lightText mb-4 font-semibold">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/privacy"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/cookies"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="/eula"
                  className="text-neutral-gray hover:text-primary-gold transition-colors"
                >
                  EULA
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-primary-gold/10 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-neutral-gray text-sm">
              © {currentYear} Zenith Reborn. All rights reserved.
            </p>

            {/* Social links */}
            <div className="flex gap-4">
              <a
                href="https://x.com/Zenith_Reborn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                aria-label="Twitter"
              >
                <span className="text-lg">𝕏</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582656066564"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <span className="text-lg">f</span>
              </a>
              <a
                href="https://www.instagram.com/zenithrebornhq/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <span className="text-lg">IG</span>
              </a>
              <a
                href="https://github.com/Zenith-Reborn"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-10 w-10 items-center justify-center rounded-full border transition-all hover:scale-110"
                aria-label="GitHub"
              >
                <span className="text-lg">GH</span>
              </a>
            </div>

            <p className="text-neutral-gray text-sm">
              Made with <span className="text-secondary-deepRed">❤️</span> and{" "}
              <span className="text-primary-gold">🔥</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
