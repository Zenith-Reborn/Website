"use client";

import { useState } from "react";
import Link from "next/link";

export default function TestErrorPage() {
  const [showSuccess, setShowSuccess] = useState(false);

  const triggerClientError = () => {
    throw new Error("🔥 Production Test: Client Error - Testing Sentry on zenithreborn.com");
  };

  const triggerServerError = async () => {
    try {
      const response = await fetch("/api/test-sentry-error");
      const data = await response.json();
      if (data.success) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error) {
      console.error("Error triggering server error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-black px-6 py-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-phoenix-gradient bg-clip-text text-transparent">
              Sentry Production Test
            </span>
          </h1>
          <p className="text-neutral-400">
            Testing error monitoring on zenithreborn.com
          </p>
        </div>

        {/* Success Message */}
        {showSuccess && (
          <div className="mb-6 rounded-lg border border-green-500/30 bg-green-500/10 p-4">
            <p className="text-green-400">
              ✅ Server error triggered! Check your Sentry dashboard.
            </p>
          </div>
        )}

        {/* Test Buttons */}
        <div className="space-y-4">
          {/* Client Error Test */}
          <div className="rounded-lg border border-primary-gold/30 bg-neutral-darkBg/50 p-6">
            <h2 className="mb-2 text-xl font-semibold text-primary-gold">
              Test 1: Client-Side Error
            </h2>
            <p className="mb-4 text-sm text-neutral-400">
              This will trigger an error in the browser and send it to Sentry.
            </p>
            <button
              onClick={triggerClientError}
              className="bg-phoenix-gradient hover:shadow-primary-orange/50 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Trigger Client Error
            </button>
          </div>

          {/* Server Error Test */}
          <div className="rounded-lg border border-primary-gold/30 bg-neutral-darkBg/50 p-6">
            <h2 className="mb-2 text-xl font-semibold text-primary-gold">
              Test 2: Server-Side Error
            </h2>
            <p className="mb-4 text-sm text-neutral-400">
              This will trigger an error on the server via an API route.
            </p>
            <button
              onClick={triggerServerError}
              className="bg-phoenix-gradient hover:shadow-primary-orange/50 rounded-full px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Trigger Server Error
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="mt-8 rounded-lg border border-primary-gold/30 bg-neutral-darkBg/50 p-6">
          <h2 className="mb-3 text-xl font-semibold text-primary-gold">
            📋 Production Testing
          </h2>
          <ol className="space-y-2 text-sm text-neutral-400">
            <li>
              <span className="text-primary-gold">1.</span> Click a button to trigger an error
            </li>
            <li>
              <span className="text-primary-gold">2.</span> Check{" "}
              <a
                href="https://sentry.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-orange hover:underline"
              >
                your Sentry dashboard
              </a>
            </li>
            <li>
              <span className="text-primary-gold">3.</span> You should see the error with production context
            </li>
          </ol>
        </div>

        {/* Back Button */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="border-primary-gold/50 hover:bg-primary-gold/10 inline-block rounded-full border-2 px-6 py-3 font-semibold text-primary-gold transition-all duration-300 hover:scale-105"
          >
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
