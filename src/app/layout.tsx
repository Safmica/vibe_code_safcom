import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import ThemeColorMeta from '@/components/ui/ThemeColorMeta';

const exo2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

const helvetica = {
  style: {
    fontFamily: 'Helvetica, Arial, sans-serif',
  },
  className: 'font-helvetica',
  variable: '--font-body',
};

export const metadata: Metadata = {
  title: "SafCom - Innovative Technology Solutions by Safar & Safarudin",
  description: "SafCom by Safar & Safarudin specializes in software development, cloud solutions, AI research, and digital innovation. Pioneering ethical and sustainable technology for the future.",
  keywords: ["SafCom", "Safar", "Safarudin", "technology", "software development", "cloud solutions", "AI research", "digital innovation", "web development", "mobile apps"],
  authors: [{ name: "Safar & Safarudin" }],
  openGraph: {
    title: "SafCom - Technology Solutions by Safar & Safarudin",
    description: "Building future technology solutions with integrity and innovation by Safar & Safarudin.",
    url: "https://safcom.dev",
    siteName: "SafCom",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SafCom - Technology Solutions by Safar & Safarudin",
    description: "Building future technology solutions with integrity and innovation by Safar & Safarudin.",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SafCom",
  "url": "https://safcom.dev",
  "logo": "https://safcom.dev/logo.png",
  "description": "SafCom by Safar & Safarudin specializes in software development, cloud solutions, AI research, and digital innovation.",
  "founder": [
    {
      "@type": "Person",
      "name": "Safar"
    },
    {
      "@type": "Person",
      "name": "Safarudin"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-812-3456-7890",
    "contactType": "customer service",
    "email": "contact@safcom.dev"
  },
  "sameAs": [
    "https://linkedin.com/company/safcom",
    "https://github.com/safcom",
    "https://twitter.com/safcom"
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
        className={`${exo2.variable} font-sans antialiased min-h-screen transition-colors duration-500`}
        style={{
          fontFamily: 'Helvetica, Arial, sans-serif',
          background: 'var(--background)',
          color: 'var(--text-primary)'
        }}
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
