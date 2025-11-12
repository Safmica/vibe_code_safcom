'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { ChevronDown, Languages } from 'lucide-react';

const languageOptions = [
  { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
  { code: 'id' as Language, name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'ja' as Language, name: '日本語', flag: '🇯🇵' },
];

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languageOptions.find(lang => lang.code === language);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 p-2 rounded-full bg-(--surface-hover) hover:bg-(--surface) transition-all duration-300 border border-(--border) hover:shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages className="h-4 w-4 text-(--accent-primary)" />
        <span className="text-sm font-medium text-(--text-primary)">
          {currentLanguage?.flag}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="h-3 w-3 text-(--text-secondary)" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-(--surface) border border-(--border) rounded-lg shadow-xl z-50 overflow-hidden"
            >
              {languageOptions.map((lang, index) => (
                <motion.button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-(--surface-hover) transition-colors duration-200 ${
                    language === lang.code ? 'bg-(--accent-primary)/10 text-(--accent-primary)' : 'text-(--text-primary)'
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span className="text-sm font-medium">{lang.name}</span>
                  {language === lang.code && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="ml-auto w-2 h-2 bg-(--accent-primary) rounded-full"
                    />
                  )}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;