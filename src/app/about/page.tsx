'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Particles from '@/components/ui/Particles';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      title: t('about.values.integrity.title'),
      description: t('about.values.integrity.desc'),
    },
    {
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.desc'),
    },
    {
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.desc'),
    },
  ];

  const milestones = [
    { year: '2018', event: t('about.milestones.2018') },
    { year: '2020', event: t('about.milestones.2020') },
    { year: '2022', event: t('about.milestones.2022') },
    { year: '2024', event: t('about.milestones.2024') },
  ];
  return (
    <div className="min-h-screen bg-(--background)">
      <Navbar />
      <div className="relative">
        <Particles id="about-particles" intensity="medium" />

        {/* Intro Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-(--text-primary) mb-6"
            >
              {t('about.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-(--text-secondary)"
            >
              Pioneering the future of technology through innovation, collaboration, and sustainable solutions.
            </motion.p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-8 border border-(--border) shadow-lg"
              >
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">{t('about.vision.title')}</h2>
                <p className="text-(--text-secondary) text-lg">
                  {t('about.vision.content')}
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-8 border border-(--border) shadow-lg"
              >
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">{t('about.mission.title')}</h2>
                <p className="text-(--text-secondary) text-lg">
                  {t('about.mission.content')}
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-(--text-primary) text-center mb-12"
            >
              {t('about.values.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 text-center border border-(--border) shadow-lg"
                >
                  <h3 className="text-2xl font-semibold text-(--text-primary) mb-4">{value.title}</h3>
                  <p className="text-(--text-secondary)">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-(--text-primary) text-center mb-12"
            >
              {t('about.milestones.title')}
            </motion.h2>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <div className="bg-(--accent-primary) text-(--text-inverse) px-4 py-2 rounded-full font-bold mr-6">
                    {milestone.year}
                  </div>
                  <div className="text-(--text-primary) text-lg">{milestone.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-(--text-primary) mb-6"
            >
              {t('about.cta.title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-(--text-secondary) mb-8"
            >
              {t('about.cta.subtitle')}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/contact"
                className="bg-(--accent-primary) hover:bg-(--accent-secondary) text-(--text-inverse) px-8 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                {t('about.cta.button')}
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}