import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bansal-aditya.github.io"),
  applicationName: "Aditya Bansal",
  title: {
    default: "Aditya Bansal | Software Engineer, AI/ML at Google",
    template: "%s | Aditya Bansal",
  },
  description:
    "Aditya Bansal is a Software Engineer, AI/ML at Google working on the Gemini Agent Platform. CMU MCDS alumnus with expertise in Machine Learning, Agentic Systems, and Neural Network Compression.",
  keywords: [
    "Aditya",
    "Aditya Bansal",
    "Aditya Google",
    "Aditya CMU",
    "Aditya Delhi",
    "Aditya Google CMU Delhi",
    "Aditya Bansal Google",
    "Aditya Bansal CMU",
    "Aditya Bansal NTU",
    "Aditya Bansal Delhi",
    "Software Engineer AI/ML",
    "Machine Learning Engineer",
    "Gemini Agent Platform",
    "Google AI",
    "Carnegie Mellon University",
    "Nanyang Technological University",
  ],
  authors: [{ name: "Aditya Bansal", url: "https://bansal-aditya.github.io" }],
  creator: "Aditya Bansal",
  alternates: {
    canonical: "https://bansal-aditya.github.io",
  },
  openGraph: {
    title: "Aditya Bansal | Software Engineer, AI/ML at Google",
    description:
      "Software Engineer, AI/ML at Google working on the Gemini Agent Platform. CMU MCDS alumnus.",
    url: "https://bansal-aditya.github.io",
    siteName: "Aditya Bansal",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Aditya Bansal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Aditya Bansal | Software Engineer, AI/ML at Google",
    description:
      "Software Engineer, AI/ML at Google working on the Gemini Agent Platform. CMU MCDS alumnus.",
    creator: "@_AdityaBansal_",
    images: ["/images/profile.jpg"],
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
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://bansal-aditya.github.io/#website",
      "url": "https://bansal-aditya.github.io",
      "name": "Aditya Bansal",
      "alternateName": [
        "Aditya Bansal Website",
        "Aditya Bansal Portfolio"
      ],
    },
    {
      "@type": "Person",
      "@id": "https://bansal-aditya.github.io/#person",
      "name": "Aditya Bansal",
      "alternateName": [
        "Aditya",
        "Aditya Google CMU Delhi"
      ],
      "url": "https://bansal-aditya.github.io",
      "image": "https://bansal-aditya.github.io/images/profile.jpg",
      "jobTitle": "Software Engineer, AI/ML",
      "worksFor": {
        "@type": "Organization",
        "name": "Google",
        "url": "https://www.google.com",
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Carnegie Mellon University",
          "url": "https://www.cmu.edu",
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Nanyang Technological University",
          "url": "https://www.ntu.edu.sg",
        },
      ],
      "sameAs": [
        "https://www.linkedin.com/in/aditya-bansal-10",
        "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
        "https://github.com/bansal-aditya",
        "https://twitter.com/_AdityaBansal_",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
