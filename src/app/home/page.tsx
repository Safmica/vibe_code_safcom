import NavbarWrapper from '@/components/ui/NavbarWrapper';
import FooterWrapper from '@/components/ui/FooterWrapper';
import HomeContent from '@/components/ui/HomeContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SafCom - Innovative Technology Solutions | Web Development, Mobile Apps, Cloud & AI',
  description: 'Leading technology company specializing in web development, mobile applications, cloud solutions, and artificial intelligence. Transform your business with cutting-edge technology solutions.',
  keywords: [
    'SafCom',
    'technology solutions',
    'web development',
    'mobile app development',
    'cloud computing',
    'artificial intelligence',
    'software development',
    'digital transformation',
    'tech consulting',
    'innovation',
    'Jakarta technology company'
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
    canonical: '/',
  },
  openGraph: {
    title: 'SafCom - Innovative Technology Solutions & Digital Transformation',
    description: 'Leading technology company in Jakarta specializing in web development, mobile apps, cloud solutions, and AI. Transform your business with our expertise.',
    url: '/',
    siteName: 'SafCom',
    images: [
      {
        url: '/assets/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'SafCom - Technology Solutions Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SafCom - Technology Solutions & Innovation',
    description: 'Leading technology company specializing in web development, mobile apps, cloud solutions, and AI.',
    images: ['/assets/og-home.jpg'],
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

// Structured Data for Homepage
const homeStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SafCom",
  "url": "https://safcom.vercel.app",
  "logo": "https://safcom.vercel.app/assets/logo.png",
  "description": "Leading technology company specializing in web development, mobile applications, cloud solutions, and artificial intelligence.",
  "foundingDate": "2018",
  "industry": "Technology",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "ID",
    "addressLocality": "Jakarta"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+62-123-456-7890",
    "email": "hello@safcom.com",
    "contactType": "customer service",
    "availableLanguage": ["English", "Indonesian"]
  },
  "sameAs": [
    "https://twitter.com/safcom",
    "https://linkedin.com/company/safcom",
    "https://github.com/safcom"
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
          "description": "Custom web application development using modern technologies"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Mobile App Development",
          "description": "Native and cross-platform mobile application development"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cloud Solutions",
          "description": "Cloud infrastructure setup, migration, and management"
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
  },
  "knowsAbout": [
    "Web Development",
    "Mobile Applications",
    "Cloud Computing",
    "Artificial Intelligence",
    "Software Engineering",
    "Digital Transformation",
    "Technology Consulting"
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      <div className="min-h-screen">
        <NavbarWrapper />
        <HomeContent />
        <FooterWrapper />
      </div>
    </>
  );
}