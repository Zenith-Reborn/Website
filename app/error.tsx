"use client";

import { useEffect } from "react";
import Link from "next/link";
import * as Sentry from "@sentry/nextjs";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console for debugging
    console.error("Application error:", error);

    // Capture error in Sentry for production monitoring
    Sentry.captureException(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-black px-6 py-24">
      <div className="text-center">
        {/* Phoenix Icon with Gradient Glow */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="bg-phoenix-gradient absolute inset-0 rounded-full opacity-30 blur-3xl"></div>
            <div className="relative text-8xl animate-pulse">🔥</div>
          </div>
        </div>

        {/* Error Heading */}
        <h1 className="mb-4 text-5xl font-bold md:text-6xl">
          <span className="bg-phoenix-gradient bg-clip-text text-transparent">
            Something Went Wrong
          </span>
        </h1>

        {/* Error Message */}
        <p className="text-neutral-lightText mb-8 max-w-md text-lg md:text-xl">
          The flames flickered, but don&apos;t worry — every phoenix rises from the
          ashes. Let&apos;s get you back on track.
        </p>

        {/* Error Details (Development Mode) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mb-8 max-w-2xl overflow-hidden rounded-lg border border-primary-gold/30 bg-neutral-darkBg/50 p-4 text-left">
            <p className="mb-2 font-semibold text-primary-gold">Error Details:</p>
            <p className="text-neutral-lightText break-words text-sm font-mono">
              {error.message}
            </p>
            {error.digest && (
              <p className="text-neutral-gray mt-2 text-xs">
                Error ID: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="bg-phoenix-gradient hover:shadow-primary-orange/50 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Try again"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border-primary-gold/50 hover:bg-primary-gold/10 rounded-full border-2 px-8 py-4 font-semibold text-primary-gold transition-all duration-300 hover:scale-105"
            aria-label="Go to homepage"
          >
            Go Home
          </Link>
        </div>

        {/* Additional Help Text */}
        <p className="text-neutral-gray mt-12 text-sm">
          If this issue persists, please{" "}
          <Link
            href="/#contact"
            className="text-primary-gold hover:text-primary-orange transition-colors duration-200 underline"
          >
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
