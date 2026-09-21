import type { Metadata } from "next";
import PostHogProvider from "@/components/PostHogProvider";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://dipen.info"),
  title: {
    default: "Dipendra Bhatta (Dipen) | Full-Stack Engineer & Builder",
    template: "%s | Dipendra Bhatta",
  },
  description:
    "Dipendra Bhatta (Dipen) - Full-Stack Engineer building AI, voice and LLM systems. Built PromptAnim and led engineering at AIPrep. Expert in LLM orchestration, Kubernetes, distributed systems, and full-stack development.",
  keywords: [
    "Dipendra Bhatta",
    "Dipen",
    "Dipen Bhatta",
    "dipenbhat557",
    "Full Stack Engineer",
    "AI Infrastructure Engineer",
    "PromptAnim",
    "LLM orchestration",
    "Kubernetes",
    "GCP",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Python",
    "FastAPI",
    "distributed systems",
    "Dipendra Bhatta portfolio",
    "dipen.info",
  ],
  authors: [{ name: "Dipendra Bhatta", url: "https://dipen.info" }],
  creator: "Dipendra Bhatta",
  publisher: "Dipendra Bhatta",
  alternates: {
    canonical: "https://dipen.info",
  },
  openGraph: {
    title: "Dipendra Bhatta (Dipen) | Full-Stack Engineer & Builder",
    description:
      "Full-Stack Engineer building AI, voice and LLM systems. Built PromptAnim and led engineering at AIPrep. Open to new engineering roles.",
    url: "https://dipen.info",
    siteName: "Dipendra Bhatta - Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Dipendra Bhatta - Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipendra Bhatta (Dipen) | Full-Stack Engineer & Builder",
    description:
      "Full-Stack Engineer building AI, voice and LLM systems. Open to new engineering roles.",
    creator: "@dipenbhat557",
    images: ["/logo.png"],
  },
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
  verification: {
    google: "REPLACE_WITH_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dipendra Bhatta",
  alternateName: ["Dipen", "Dipen Bhatta", "dipenbhat557"],
  url: "https://dipen.info",
  image: "https://dipen.info/logo.png",
  jobTitle: "Full-Stack Engineer",
  description:
    "Full-Stack Engineer building AI, voice and LLM systems. Built PromptAnim and led engineering at AIPrep. Expert in LLM orchestration, Kubernetes, and full-stack development.",
  knowsAbout: [
    "Artificial Intelligence",
    "LLM Orchestration",
    "Voice AI",
    "Speech to Text",
    "Kubernetes",
    "Google Cloud Platform",
    "Full Stack Development",
    "Distributed Systems",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "FastAPI",
  ],
  sameAs: [
    "https://github.com/dipenbhat557",
    "https://linkedin.com/in/dipendra-bhatta-38ba32259",
    "https://x.com/dipenbhat557",
    "https://instagram.com/dipenbhat557",
  ],
  email: "dipenbhat557@gmail.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
