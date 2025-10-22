import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
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
  title: "Zenith Reborn - Rise to Your Potential",
  description:
    "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app. Track progress, master skills, and rise to excellence.",
  keywords: ["skill tracking", "focus timer", "productivity", "skill mastery", "SkillQuest"],
  authors: [{ name: "Zenith Reborn" }],
  icons: {
    icon: "/phoenix-logo-transparent.png",
    apple: "/phoenix-logo-transparent.png",
  },
  openGraph: {
    title: "Zenith Reborn - Rise to Your Potential",
    description:
      "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app.",
    url: "https://zenithreborn.com",
    siteName: "Zenith Reborn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/phoenix-logo-transparent.png",
        width: 1200,
        height: 1200,
        alt: "Zenith Reborn Phoenix",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Reborn - Rise to Your Potential",
    description:
      "Transform your skills with SkillQuest - the premium skill mastery and focus tracking app.",
    images: ["/phoenix-logo-transparent.png"],
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
      <body className={`${lora.variable} ${playfair.variable} font-serif`}>{children}</body>
    </html>
  );
}
