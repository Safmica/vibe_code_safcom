'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/home" className="text-2xl font-bold text-white">
              AstraNova Labs
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-white hover:text-[#0ea5e9] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#0ea5e9] transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-[#0ea5e9] transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#0ea5e9] focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/home" className="block px-3 py-2 text-white hover:text-[#0ea5e9] transition-colors">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-white hover:text-[#0ea5e9] transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-white hover:text-[#0ea5e9] transition-colors">
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;