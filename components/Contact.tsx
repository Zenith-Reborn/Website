"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Failed to send message. Please try again.");
        return;
      }

      // Success
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 5000);
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-neutral-darkBg px-6 py-24">
      <div className="container mx-auto max-w-5xl">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="text-gradient mb-6 text-4xl font-bold md:text-5xl">Get in Touch</h2>
          <p className="text-neutral-gray mx-auto max-w-2xl text-xl">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-primary-gold mb-6 text-2xl font-bold">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="text-neutral-lightText mb-1 font-semibold">Email</h4>
                    <a
                      href="mailto:hello@zenithreborn.com"
                      className="text-primary-amber hover:text-primary-gold transition-colors"
                    >
                      hello@zenithreborn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">🌐</div>
                  <div>
                    <h4 className="text-neutral-lightText mb-1 font-semibold">Website</h4>
                    <a
                      href="https://zenithreborn.com"
                      className="text-primary-amber hover:text-primary-gold transition-colors"
                    >
                      zenithreborn.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="text-neutral-lightText mb-1 font-semibold">Response Time</h4>
                    <p className="text-neutral-gray">We typically respond within 24-48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="border-primary-gold/20 border-t pt-8">
              <h4 className="text-neutral-lightText mb-4 font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                <a
                  href="https://x.com/Zenith_Reborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-12 w-12 items-center justify-center rounded-full border transition-all hover:scale-110"
                  aria-label="Twitter"
                >
                  <span className="text-xl">𝕏</span>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61582656066564"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-12 w-12 items-center justify-center rounded-full border transition-all hover:scale-110"
                  aria-label="Facebook"
                >
                  <span className="text-xl">f</span>
                </a>
                <a
                  href="https://www.instagram.com/zenithrebornhq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-12 w-12 items-center justify-center rounded-full border transition-all hover:scale-110"
                  aria-label="Instagram"
                >
                  <span className="text-xl">IG</span>
                </a>
                <a
                  href="https://github.com/Zenith-Reborn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-darkBg border-primary-gold/30 hover:border-primary-gold flex h-12 w-12 items-center justify-center rounded-full border transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <span className="text-xl">GH</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="border-primary-gold/30 rounded-2xl border bg-black p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="text-neutral-lightText mb-2 block text-sm font-semibold"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-neutral-darkBg border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-neutral-lightText mb-2 block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-neutral-darkBg border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-neutral-lightText mb-2 block text-sm font-semibold"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-neutral-darkBg border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-neutral-lightText mb-2 block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-neutral-darkBg border-primary-gold/30 text-neutral-lightText placeholder-neutral-gray focus:border-primary-gold w-full resize-none rounded-lg border px-4 py-3 transition-colors focus:outline-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading || submitted}
                className={`
                  w-full rounded-lg px-8 py-4 font-semibold text-white transition-all duration-300
                  ${
                    loading || submitted
                      ? "bg-neutral-gray/50 cursor-not-allowed"
                      : "bg-phoenix-gradient hover:shadow-primary-orange/50 hover:scale-105 hover:shadow-lg"
                  }
                `}
              >
                {loading ? "Sending..." : submitted ? "✅ Sent!" : "Send Message"}
              </button>

              {submitted && (
                <p className="text-primary-gold animate-pulse text-center font-semibold">
                  ✅ Message sent! Check your email for confirmation. We&apos;ll get back to you soon.
                </p>
              )}

              {error && (
                <p className="text-secondary-deepRed text-center text-sm font-semibold">
                  ⚠️ {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
