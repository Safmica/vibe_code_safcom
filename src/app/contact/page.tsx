import NavbarWrapper from '@/components/ui/NavbarWrapper';
import FooterWrapper from '@/components/ui/FooterWrapper';
import ContactContent from '@/components/ui/ContactContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact SafCom - Get In Touch | Technology Solutions & Consultation',
  description: 'Contact SafCom for innovative technology solutions. Reach out for web development, mobile apps, cloud solutions, and AI consulting. We\'re here to help transform your business.',
  keywords: [
    'contact SafCom',
    'technology consultation',
    'web development contact',
    'mobile app development',
    'cloud solutions contact',
    'AI consulting',
    'technology support',
    'business inquiry'
  ],
  authors: [{ name: 'SafCom Team' }],
  creator: 'SafCom',
  publisher: 'SafCom',
  formatDetection: {
    email: true,
    address: false,
    telephone: true,
  },
  metadataBase: new URL('https://safcom.vercel.app'),
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact SafCom - Technology Solutions & Consultation',
    description: 'Get in touch with SafCom for innovative web development, mobile apps, cloud solutions, and AI consulting services.',
    url: '/contact',
    siteName: 'SafCom',
    images: [
      {
        url: '/assets/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact SafCom - Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact SafCom - Technology Solutions',
    description: 'Get in touch with SafCom for innovative technology solutions and consulting services.',
    images: ['/assets/og-contact.jpg'],
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
  category: 'Contact',
};

// Structured Data for Contact Page
const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact SafCom",
  "description": "Get in touch with SafCom for technology solutions and consulting",
  "url": "https://safcom.vercel.app/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "SafCom",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+62-123-456-7890",
      "email": "hello@safcom.com",
      "contactType": "customer service",
      "areaServed": "ID",
      "availableLanguage": ["English", "Indonesian"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ID",
      "addressLocality": "Jakarta"
    }
  }
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      <div className="min-h-screen">
        <NavbarWrapper />
        <ContactContent />
        <FooterWrapper />
      </div>
    </>
  );
}