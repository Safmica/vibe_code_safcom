import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-(--surface)/50 backdrop-blur-md border-t border-(--border) py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-(--text-primary) text-2xl font-bold mb-4 md:mb-0">
            AstraNova
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              X
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center text-(--text-secondary) mt-4">
          © {currentYear} AstraNova. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;