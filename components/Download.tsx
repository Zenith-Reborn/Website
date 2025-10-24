"use client";

import { useState } from "react";
import Image from "next/image";

type Platform = "ios" | "android" | "both";

export default function Download() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    platform: "both" as Platform,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name || undefined,
          platform: formData.platform,
          source: "website",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific error cases
        if (response.status === 409) {
          // Duplicate email - show friendly message
          setError(data.message || "This email is already on the waitlist");
        } else {
          setError(data.error || "Something went wrong. Please try again.");
        }
        return;
      }

      // Success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ email: "", name: "", platform: "both" });
      }, 5000);
    } catch (err) {
      console.error("Waitlist submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="download" className="to-neutral-darkBg bg-gradient-to-b from-black px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Section header with logo */}
        <div className="mb-16 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative h-32 w-32">
              <Image
                src="/skillquest-logo.png"
                alt="SkillQuest"
                width={128}
                height={128}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-5xl">Get SkillQuest</h2>
          <p className="text-neutral-gray mx-auto max-w-2xl text-xl">
            Join the waitlist and be among the first to experience the future of skill mastery
          </p>
        </div>

        {/* Download cards */}
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {/* iOS */}
          <div className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105">
            <div className="mb-4 text-6xl">🍎</div>
            <h3 className="text-primary-gold mb-3 text-2xl font-bold">iOS</h3>
            <p className="text-neutral-gray mb-6">Available on the App Store</p>
            <div className="bg-neutral-gray/20 text-neutral-lightText inline-block rounded-lg px-6 py-3 font-semibold">
              Coming Soon
            </div>
          </div>

          {/* Android */}
          <div className="bg-neutral-darkBg border-primary-orange/30 hover:border-primary-orange rounded-2xl border p-8 text-center transition-all duration-300 hover:scale-105">
            <div className="mb-4 text-6xl">🤖</div>
            <h3 className="text-primary-orange mb-3 text-2xl font-bold">Android</h3>
            <p className="text-neutral-gray mb-6">Available on Google Play</p>
            <div className="bg-neutral-gray/20 text-neutral-lightText inline-block rounded-lg px-6 py-3 font-semibold">
              Coming Soon
            </div>
          </div>
        </div>

        {/* Email signup */}
        <div className="from-neutral-darkBg border-primary-gold/30 rounded-2xl border bg-gradient-to-br to-black p-8 md:p-12">
          <div className="mb-8 text-center">
            <h3 className="text-primary-amber mb-3 text-2xl font-bold md:text-3xl">
              Join the Waitlist
            </h3>
            <p className="text-neutral-gray">Get early access and exclusive launch offers</p>
          </div>

          <form onSubmit={handleSubmit} className="mx-auto max-w-md">
            <div className="flex flex-col gap-4">
              {/* Name (optional) */}
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name (optional)"
                className="border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full rounded-full border bg-black px-6 py-4 transition-colors focus:outline-none"
              />

              {/* Email (required) */}
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Your email *"
                required
                className="border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full rounded-full border bg-black px-6 py-4 transition-colors focus:outline-none"
              />

              {/* Platform Preference */}
              <div className="flex flex-col gap-2">
                <label className="text-neutral-gray text-center text-sm">
                  Preferred Platform
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(["ios", "android", "both"] as const).map((platform) => (
                    <button
                      key={platform}
                      type="button"
                      onClick={() => setFormData({ ...formData, platform })}
                      className={`
                        rounded-full border py-3 text-sm font-semibold transition-all
                        ${
                          formData.platform === platform
                            ? "border-primary-gold bg-primary-gold/10 text-primary-gold scale-105"
                            : "border-primary-gold/30 text-neutral-gray hover:border-primary-gold/50"
                        }
                      `}
                    >
                      {platform === "ios" ? "🍎 iOS" : platform === "android" ? "🤖 Android" : "✨ Both"}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className={`
                  rounded-full px-8 py-4 font-semibold text-white transition-all duration-300
                  ${
                    loading || submitted
                      ? "bg-neutral-gray/50 cursor-not-allowed"
                      : "bg-phoenix-gradient hover:shadow-primary-orange/50 hover:scale-105 hover:shadow-lg"
                  }
                `}
              >
                {loading ? "Joining..." : submitted ? "✅ Joined!" : "Join Waitlist"}
              </button>

              {/* Success Message */}
              {submitted && (
                <p className="text-primary-gold animate-pulse text-center font-semibold">
                  ✅ You&apos;re on the list! Check your email for confirmation.
                </p>
              )}

              {/* Error Message */}
              {error && (
                <p className="text-secondary-deepRed text-center text-sm font-semibold">
                  ⚠️ {error}
                </p>
              )}
            </div>
          </form>

          {/* Features list */}
          <div className="mt-12 grid gap-6 text-center sm:grid-cols-3">
            <div>
              <div className="mb-2 text-3xl">🎁</div>
              <p className="text-neutral-gray text-sm">Early access benefits</p>
            </div>
            <div>
              <div className="mb-2 text-3xl">💎</div>
              <p className="text-neutral-gray text-sm">Exclusive launch offers</p>
            </div>
            <div>
              <div className="mb-2 text-3xl">📧</div>
              <p className="text-neutral-gray text-sm">Launch announcements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
