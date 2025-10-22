import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zenithreborn.com"),
  title: {
    default: "Zenith Reborn - Rise to Your Potential",
    template: "%s | Zenith Reborn",
  },
  description:
    "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app. Track progress, master skills, and rise to excellence with our innovative productivity tools.",
  keywords: [
    "skill tracking",
    "focus timer",
    "productivity",
    "skill mastery",
    "SkillQuest",
    "ZenFocus",
    "habit tracking",
    "personal development",
    "time management",
    "goal tracking",
  ],
  authors: [{ name: "Zenith Reborn", url: "https://zenithreborn.com" }],
  creator: "Zenith Reborn",
  publisher: "Zenith Reborn",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/phoenix-logo-transparent.png",
    apple: "/phoenix-logo-transparent.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://zenithreborn.com",
    types: {
      "application/rss+xml": "https://zenithreborn.com/blog/rss.xml",
    },
  },
  openGraph: {
    title: "Zenith Reborn - Rise to Your Potential",
    description:
      "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app. Track progress, master skills, and rise to excellence.",
    url: "https://zenithreborn.com",
    siteName: "Zenith Reborn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
        width: 1200,
        height: 1200,
        alt: "Zenith Reborn Phoenix - Rise to Your Potential",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Reborn - Rise to Your Potential",
    description:
      "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app. Track progress, master skills, and rise to excellence.",
    images: ["https://zenithreborn.com/phoenix-logo-transparent.png"],
    creator: "@zenithreborn",
    site: "@zenithreborn",
  },
  verification: {
    // Ready for Google Search Console verification
    // google: 'your-google-verification-code',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Zenith Reborn Blog RSS Feed"
          href="/blog/rss.xml"
        />
      </head>
      <body className={`${lora.variable} ${playfair.variable} font-serif`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
