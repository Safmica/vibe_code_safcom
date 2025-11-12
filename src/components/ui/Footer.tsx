import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-black/50 backdrop-blur-md border-t border-white/20 py-8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white text-2xl font-bold mb-4 md:mb-0">
            AstraNova Labs
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0ea5e9] transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0ea5e9] transition-colors">
              GitHub
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0ea5e9] transition-colors">
              X
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#0ea5e9] transition-colors">
              Instagram
            </a>
          </div>
        </div>
        <div className="text-center text-white/70 mt-4">
          © {currentYear} AstraNova Labs. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;