import type { Metadata } from "next";
import { generateBlogSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Zenith Blog - Weekly Updates & Development Journey",
  description:
    "Weekly updates about our apps and development journey. Follow along as we build SkillQuest, ZenFocus, and other innovative productivity tools.",
  keywords: [
    "blog",
    "development",
    "updates",
    "SkillQuest",
    "ZenFocus",
    "productivity",
    "programming",
  ],
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
  alternates: {
    canonical: "https://zenithreborn.com/blog",
  },
  openGraph: {
    title: "Zenith Blog - Weekly Updates & Development Journey",
    description:
      "Weekly updates about our apps and development journey. Follow along as we build innovative productivity tools.",
    url: "https://zenithreborn.com/blog",
    siteName: "Zenith Reborn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
        width: 1200,
        height: 1200,
        alt: "Zenith Reborn Phoenix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Blog - Weekly Updates & Development Journey",
    description:
      "Weekly updates about our apps and development journey. Follow along as we build innovative productivity tools.",
    images: ["https://zenithreborn.com/phoenix-logo-transparent.png"],
    creator: "@zenithreborn",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateBlogSchema();

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
