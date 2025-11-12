import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import ThemeColorMeta from '@/components/ui/ThemeColorMeta';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AstraNova - Building Future Technology Solutions",
  description: "AstraNova specializes in software development, cloud solutions, and AI R&D. Pioneering ethical and sustainable technology innovations.",
  keywords: ["technology", "software development", "cloud solutions", "AI research", "innovation"],
  authors: [{ name: "AstraNova" }],
  openGraph: {
    title: "AstraNova",
    description: "Building future technology solutions with integrity and innovation.",
    url: "https://astranova-labs.com",
    siteName: "AstraNova",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AstraNova",
    description: "Building future technology solutions with integrity and innovation.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AstraNova",
  "url": "https://astranova-labs.com",
  "logo": "https://astranova-labs.com/logo.png",
  "description": "AstraNova specializes in software development, cloud solutions, and AI R&D.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "customer service",
    "email": "contact@astranova-labs.com"
  },
  "sameAs": [
    "https://linkedin.com/company/astranova-labs",
    "https://github.com/astranova-labs",
    "https://twitter.com/astranova_labs"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-gradient-to-br from-[#000814] to-[#02112b] dark:from-[#000814] dark:to-[#02112b] light:from-[#f9fafc] light:to-[#e2e8f0] text-white dark:text-white light:text-[#0a0a0a] min-h-screen transition-colors duration-500`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ThemeColorMeta />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
