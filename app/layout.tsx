import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Layout/Header/Header";
import { Footer } from "@/components/Layout/Footer";
import { resume } from "@/lib/resume";
import { siteConfig } from "@/lib/siteConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: siteConfig.description,
    url: "/",
    siteName: siteConfig.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1317" },
  ],
};

const themeScript = `(function(){
  try{
    const ls = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = ls ?? (systemDark ? 'dark' : 'light');
    if(theme === 'dark'){ document.documentElement.classList.add('dark'); }
    document.documentElement.style.colorScheme = theme;
  }catch(e){}
})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: new URL(resume.photo, siteConfig.url).href,
  jobTitle: siteConfig.role,
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Milan",
    addressCountry: "IT",
  },
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: "University of Milano-Bicocca",
  },
  sameAs: [resume.links.linkedin, resume.links.github],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Reveal starts content hidden, so show it when scripts can't run. */}
        <noscript>
          <style>{`[style*="opacity:0"]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body>
        <a
          href="#main"
          className="btn-primary sr-only z-50 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <div className="relative min-h-dvh">
          <div
            aria-hidden
            className="bg-grid pointer-events-none absolute inset-x-0 top-0 h-[40rem]"
          />
          <Header />
          <main id="main" className="container-prose relative">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
