import type { Metadata } from "next";
import { generateBlogSchema } from "@/lib/structuredData";

export const metadata: Metadata = {
  title: "Zenith Blog - Development Notes",
  description:
    "Development notes from Zenith Reborn about SkillQuest, available on the App Store and Google Play, our other projects and this website.",
  keywords: [
    "blog",
    "development",
    "updates",
    "SkillQuest",
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
    title: "Zenith Blog - Development Notes",
    description:
      "Development notes from Zenith Reborn about SkillQuest, our other projects and this website.",
    url: "https://zenithreborn.com/blog",
    siteName: "Zenith Reborn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://zenithreborn.com/phoenix-logo-transparent.png",
        width: 1024,
        height: 1024,
        alt: "Zenith Reborn Phoenix Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Blog - Development Notes",
    description:
      "Development notes from Zenith Reborn about SkillQuest, our other projects and this website.",
    images: ["https://zenithreborn.com/phoenix-logo-transparent.png"],
    creator: "@Zenith_Reborn",
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
