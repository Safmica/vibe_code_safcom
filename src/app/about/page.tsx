'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Particles from '@/components/ui/Particles';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
  { year: '2018', event: 'Founded AstraNova' },
  { year: '2020', event: 'Expanded to cloud solutions' },
  { year: '2022', event: 'Launched AI research division' },
  { year: '2024', event: 'Achieved ISO 27001 certification' },
];

export default function AboutPage() {
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
              About AstraNova
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
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">Our Vision</h2>
                <p className="text-(--text-secondary) text-lg">
                  To become the leading pioneer in ethical and sustainable technology, shaping a future where innovation serves humanity and the planet.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-8 border border-(--border) shadow-lg"
              >
                <h2 className="text-3xl font-bold text-(--text-primary) mb-4">Our Mission</h2>
                <p className="text-(--text-secondary) text-lg">
                  To drive innovation through cutting-edge research, strategic collaboration, and the development of digital solutions that empower businesses and communities.
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
              Our Core Values
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
              Our Journey
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
              Let's Build the Future Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-(--text-secondary) mb-8"
            >
              Join us in creating innovative solutions that make a difference.
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
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}