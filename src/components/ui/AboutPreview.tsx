import { motion } from 'framer-motion';
import Link from 'next/link';

const AboutPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-(--text-primary) mb-6"
        >
          About AstraNova Labs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-(--text-secondary) mb-8"
        >
          We believe technology is not just a tool, but the future. Through innovation, collaboration, and sustainable solutions, we build the next generation of digital experiences.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link
            href="/about"
            className="bg-(--accent-primary) hover:bg-(--accent-secondary) text-(--text-inverse) px-6 py-3 rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl"
          >
            Learn More About Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPreview;