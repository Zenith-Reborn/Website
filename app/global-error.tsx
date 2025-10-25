"use client";

import { useEffect } from "react";
import * as Sentry from "@sentry/nextjs";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Capture error in Sentry for production monitoring
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen items-center justify-center bg-black px-6 py-24">
          <div className="text-center">
            {/* Phoenix Icon with Gradient Glow */}
            <div className="mb-8 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-gold via-primary-orange to-secondary-deepRed opacity-30 blur-3xl"></div>
                <div className="relative animate-pulse text-8xl">🔥</div>
              </div>
            </div>

            {/* Error Heading */}
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              <span className="bg-gradient-to-r from-primary-gold via-primary-orange to-secondary-deepRed bg-clip-text text-transparent">
                Critical Error
              </span>
            </h1>

            {/* Error Message */}
            <p className="mb-8 max-w-md text-lg text-neutral-400 md:text-xl">
              Something went wrong with the application. We&apos;ve been notified
              and are working to fix it.
            </p>

            {/* Action Button */}
            <button
              onClick={reset}
              className="rounded-full bg-gradient-to-r from-primary-gold via-primary-orange to-secondary-deepRed px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-orange/50"
              aria-label="Try again"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
