'use client';

import Hero from './Hero';
import AboutPreview from './AboutPreview';
import Services from './Services';
import TeamHighlight from './TeamHighlight';
import ContactPreview from './ContactPreview';

export default function HomeContent() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <Services />
      <TeamHighlight />
      <ContactPreview />
    </>
  );
}