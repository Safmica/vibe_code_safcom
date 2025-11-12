'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-(--surface)/10 backdrop-blur-md border-b border-(--border)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/home" className="text-2xl font-bold text-(--text-primary)">
              AstraNova Labs
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/home" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors">
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-(--surface-hover) hover:bg-(--surface) transition-colors border border-(--border)"
            >
              <Sun className="h-5 w-5 text-(--accent-secondary) dark:hidden light:block" />
              <Moon className="h-5 w-5 text-(--accent-primary) light:hidden dark:block" />
            </button>
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-(--surface-hover) hover:bg-(--surface) transition-colors border border-(--border)"
            >
              <Sun className="h-5 w-5 text-(--accent-secondary) dark:hidden light:block" />
              <Moon className="h-5 w-5 text-(--accent-primary) light:hidden dark:block" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-(--text-primary) hover:text-(--accent-primary) focus:outline-none"
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
            className="md:hidden bg-(--surface)/10 backdrop-blur-md border-t border-(--border)"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/home" className="block px-3 py-2 text-(--text-primary) hover:text-(--accent-primary) transition-colors">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-(--text-primary) hover:text-(--accent-primary) transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-(--text-primary) hover:text-(--accent-primary) transition-colors">
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