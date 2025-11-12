import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactPreview = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-white mb-6"
        >
          Ready to Collaborate?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Let's discuss your project and explore how AstraNova Labs can help bring your vision to life.
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
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPreview;