import NavbarWrapper from '@/components/ui/NavbarWrapper';
import FooterWrapper from '@/components/ui/FooterWrapper';
import AboutContent from '@/components/ui/AboutContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SafCom - Innovative Technology Solutions & Digital Transformation | Leading Tech Company',
  description: 'Discover SafCom - a leading technology company specializing in web development, mobile apps, cloud solutions, and AI. Learn about our mission, values, and commitment to innovation and sustainable technology.',
  keywords: [
    'SafCom',
    'technology company',
    'web development',
    'mobile apps',
    'cloud solutions',
    'AI',
    'digital transformation',
    'software development',
    'tech innovation',
    'sustainable technology',
    'ISO 27001 certified'
  ],
  authors: [{ name: 'SafCom Team' }],
  creator: 'SafCom',
  publisher: 'SafCom',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://safcom.vercel.app'),
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About SafCom - Innovative Technology Solutions & Digital Transformation',
    description: 'Leading technology company specializing in web development, mobile apps, cloud solutions, and AI. Discover our mission, values, and commitment to ethical technology.',
    url: '/about',
    siteName: 'SafCom',
    images: [
      {
        url: '/assets/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'SafCom - About Us - Technology Innovation Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About SafCom - Innovative Technology Solutions',
    description: 'Leading technology company specializing in web development, mobile apps, cloud solutions, and AI.',
    images: ['/assets/og-about.jpg'],
    creator: '@safcom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code',
  },
  category: 'Technology',
};

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SafCom",
  "url": "https://safcom.vercel.app",
  "logo": "https://safcom.vercel.app/assets/logo.png",
  "description": "Leading technology company specializing in web development, mobile apps, cloud solutions, and AI.",
  "foundingDate": "2018",
  "industry": "Technology",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://twitter.com/safcom",
    "https://linkedin.com/company/safcom"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Technology Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Development",
          "description": "Custom web application development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "iOS and Android mobile application development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions",
          "description": "Cloud infrastructure and migration services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "AI Solutions",
          "description": "Artificial intelligence and machine learning solutions"
        }
      }
    ]
  }
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen">
        <NavbarWrapper />
        <AboutContent />
        <FooterWrapper />
      </div>
    </>
  );
}