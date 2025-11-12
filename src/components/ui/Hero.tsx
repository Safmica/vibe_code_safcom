'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Particles from './Particles';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-(--hero-gradient)">
      <Particles id="hero-particles" intensity="high" />
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-(--text-primary) mb-6"
        >
          SafCom
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-(--text-secondary) mb-8"
        >
          Building future technology solutions with integrity and innovation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/contact"
            className="bg-(--accent-primary) hover:bg-(--accent-secondary) text-(--text-inverse) px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </Link>
          <Link
            href="/about"
            className="border border-(--border) hover:border-(--accent-primary) text-(--text-primary) hover:text-(--accent-primary) px-8 py-3 rounded-full font-semibold transition-all duration-300"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;