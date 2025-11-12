'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Hero from '@/components/ui/Hero';
import AboutPreview from '@/components/ui/AboutPreview';
import Services from '@/components/ui/Services';
import TeamHighlight from '@/components/ui/TeamHighlight';
import ContactPreview from '@/components/ui/ContactPreview';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-(--background)">
      <Navbar />
      <Hero />
      <AboutPreview />
      <Services />
      <TeamHighlight />
      <ContactPreview />
      <Footer />
    </div>
  );
}