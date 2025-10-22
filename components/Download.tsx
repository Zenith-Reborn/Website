"use client";

import { useState } from "react";
import Image from "next/image";

export default function Download() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This would connect to your email service (Mailchimp, SendGrid, etc.)
    // TODO: Implement actual email service integration
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail("");
    }, 3000);
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
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold flex-1 rounded-full border bg-black px-6 py-4 transition-colors focus:outline-none"
              />
              <button
                type="submit"
                className="bg-phoenix-gradient hover:shadow-primary-orange/50 rounded-full px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Notify Me
              </button>
            </div>

            {submitted && (
              <p className="text-primary-gold mt-4 animate-pulse text-center font-semibold">
                ✅ Thanks! We&apos;ll notify you when SkillQuest launches
              </p>
            )}
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
