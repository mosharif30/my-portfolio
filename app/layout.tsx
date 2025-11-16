// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Layout/Header/Header";
import { Footer } from "@/components/Layout/Footer";
import { ThemeToggle } from "@/components/Layout/ThemeToggle";
import { siteConfig } from "@/lib/Siteconfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ به‌جای export const metadata از generateMetadata استفاده می‌کنیم
export async function generateMetadata(): Promise<Metadata> {
  const title = `${siteConfig.name} — ${siteConfig.role}`;
  const description = siteConfig.description;
  const url = siteConfig.url;

  return {
    title,
    description,
    metadataBase: new URL(url),
    keywords: siteConfig.keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: title,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: url,
    },
  };
}

const ThemeScript = () => (
  <script
    suppressHydrationWarning
    dangerouslySetInnerHTML={{
      __html: `(function(){
        try{
          const ls = localStorage.getItem('theme');
          const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const theme = ls ?? (systemDark ? 'dark' : 'light');
          if(theme === 'dark'){ document.documentElement.classList.add('dark'); }
          document.documentElement.style.colorScheme = theme;
        }catch(e){}
      })();`,
    }}
  />
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeScript />
        <div className="relative min-h-dvh">
          <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />
          <Header />
          <main className="container-prose py-8">{children}</main>
          <Footer />
          <ThemeToggle />
        </div>
      </body>
    </html>
  );
}
