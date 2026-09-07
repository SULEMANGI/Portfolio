import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://sulemangill.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Suleman Gill | Computer Science Graduate & Junior Software Developer",
    template: "%s | Suleman Gill",
  },
  description:
    "Suleman Gill is a Computer Science graduate and junior software developer from Daska, Pakistan, focused on Next.js, Flutter, MongoDB, MySQL, full-stack web applications, REST APIs, and IoT-connected systems.",
  applicationName: "Suleman Gill Portfolio",
  authors: [{ name: "Suleman Gill", url: siteUrl }],
  creator: "Suleman Gill",
  publisher: "Suleman Gill",
  category: "technology",
  keywords: [
    "Suleman Gill",
    "Suleman Gill developer",
    "Computer Science Graduate",
    "Junior Software Developer",
    "Flutter Developer",
    "Next.js Developer",
    "Full-Stack Developer",
    "JavaScript Developer",
    "Dart Developer",
    "MongoDB Developer",
    "MySQL Developer",
    "REST API",
    "Web Application Development",
    "IoT Developer",
    "Daska Pakistan developer",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Suleman Gill | Computer Science Graduate & Junior Software Developer",
    description:
      "Project-driven software developer building with Next.js, Flutter, MongoDB, MySQL, REST APIs, and IoT-connected web systems.",
    url: siteUrl,
    siteName: "Suleman Gill",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Suleman Gill | Junior Software Developer",
    description:
      "Computer Science graduate focused on Next.js, Flutter, MongoDB, MySQL, full-stack development, and IoT systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f6f2e8",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Suleman Gill",
    url: siteUrl,
    jobTitle: "Junior Software Developer",
    email: "mailto:sulemang191@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Daska",
      addressCountry: "PK",
    },
    sameAs: [
      "https://linkedin.com/in/sulemangill",
      "https://github.com/SulemanGill",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Sialkot",
    },
    knowsAbout: [
      "Next.js",
      "Flutter",
      "Dart",
      "JavaScript",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "Full-Stack Development",
      "Responsive Web Applications",
      "IoT Integration",
      "Online IDE / Compiler Systems",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Suleman Gill",
    url: siteUrl,
    description:
      "Portfolio of Suleman Gill, a Computer Science graduate and junior software developer.",
    inLanguage: "en-US",
    publisher: {
      "@type": "Person",
      name: "Suleman Gill",
    },
  };

  return (
    <html lang="en">
      <body className="noise">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
