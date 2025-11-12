'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Particles from './Particles';
import { useLanguage } from '@/contexts/LanguageContext';
import { useEffect, useState } from 'react';

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and ethical practices in everything we do.',
  },
  {
    title: 'Collaboration',
    description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results.',
  },
  {
    title: 'Sustainability',
    description: 'We are committed to creating technology that benefits both people and the planet.',
  },
];

const milestones = [
  { year: '2018', event: 'Founded SafCom' },
  { year: '2020', event: 'Expanded to cloud solutions' },
  { year: '2022', event: 'Launched AI research division' },
  { year: '2024', event: 'Achieved ISO 27001 certification' },
];

export default function AboutContent() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="relative">
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              {t('about.description')}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-(--text-secondary) mb-12"
          >
            {t('about.description')}
          </motion.p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--hero-gradient)">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8"
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
              className="bg-white/10 backdrop-blur-md rounded-lg p-8"
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
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center"
              >
                <h3 className="text-2xl font-semibold text-(--text-primary) mb-4">{t(`about.values.${value.title.toLowerCase()}.title`)}</h3>
                <p className="text-(--text-secondary)">{t(`about.values.${value.title.toLowerCase()}.desc`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--hero-gradient)">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-(--text-primary) text-center mb-12"
          >
            {t('about.journey.title')}
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
                <div className="bg-[#0ea5e9] text-white px-4 py-2 rounded-full font-bold mr-6">
                  {milestone.year}
                </div>
                <div className="text-white text-lg">{t(`about.milestones.${milestone.year}`)}</div>
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
            {t('about.cta.description')}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-[#0ea5e9] hover:bg-[#0284c7] text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              {t('about.cta.button')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}