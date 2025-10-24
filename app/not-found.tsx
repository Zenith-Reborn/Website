import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you're looking for doesn't exist. Return to Zenith Reborn.",
};

export default function NotFound() {
  return (
    <div className="from-neutral-darkBg via-secondary-deepRed/10 to-neutral-darkBg flex min-h-screen items-center justify-center bg-gradient-to-br px-6 py-24">
      <div className="text-center">
        {/* Phoenix Rising Imagery */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-phoenix-gradient absolute inset-0 rounded-full opacity-30 blur-3xl"></div>
            <div className="relative flex flex-col items-center gap-2">
              <div className="text-9xl animate-pulse">🔥</div>
              <div className="text-primary-gold/80 text-6xl font-bold tracking-wider">
                404
              </div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          <span className="bg-phoenix-gradient bg-clip-text text-transparent">
            Lost in the Flames?
          </span>
        </h1>

        {/* Description */}
        <p className="text-neutral-lightText mb-8 max-w-lg text-lg md:text-xl">
          This page has turned to ash, but like the phoenix, you can rise again.
          Let&apos;s guide you back to familiar ground.
        </p>

        {/* Navigation Links */}
        <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="bg-phoenix-gradient hover:shadow-primary-orange/50 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Go to homepage"
          >
            Return Home
          </Link>
          <Link
            href="/blog"
            className="border-primary-gold/50 hover:bg-primary-gold/10 rounded-full border-2 px-8 py-4 font-semibold text-primary-gold transition-all duration-300 hover:scale-105"
            aria-label="Visit blog"
          >
            Visit Blog
          </Link>
        </div>

        {/* Helpful Suggestions */}
        <div className="border-primary-gold/20 bg-neutral-darkBg/50 mx-auto max-w-2xl rounded-lg border p-8">
          <h2 className="text-primary-gold mb-4 text-xl font-semibold">
            What were you looking for?
          </h2>
          <nav aria-label="Suggested navigation">
            <ul className="text-neutral-lightText space-y-3 text-left">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-primary-gold transition-colors duration-200 underline decoration-primary-gold/30 underline-offset-4 hover:decoration-primary-gold"
                >
                  Learn about Zenith Reborn
                </Link>
              </li>
              <li>
                <Link
                  href="/#skillquest"
                  className="hover:text-primary-gold transition-colors duration-200 underline decoration-primary-gold/30 underline-offset-4 hover:decoration-primary-gold"
                >
                  Discover SkillQuest app
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary-gold transition-colors duration-200 underline decoration-primary-gold/30 underline-offset-4 hover:decoration-primary-gold"
                >
                  Read our latest blog posts
                </Link>
              </li>
              <li>
                <Link
                  href="/#download"
                  className="hover:text-primary-gold transition-colors duration-200 underline decoration-primary-gold/30 underline-offset-4 hover:decoration-primary-gold"
                >
                  Join the SkillQuest waitlist
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-primary-gold transition-colors duration-200 underline decoration-primary-gold/30 underline-offset-4 hover:decoration-primary-gold"
                >
                  Get in touch with us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Additional Support */}
        <p className="text-neutral-gray mt-8 text-sm">
          Still can&apos;t find what you need?{" "}
          <Link
            href="/#contact"
            className="text-primary-gold hover:text-primary-orange transition-colors duration-200 underline"
          >
            Contact our team
          </Link>{" "}
          for assistance.
        </p>
      </div>
    </div>
  );
}
