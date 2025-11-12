'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Particles from '@/components/ui/Particles';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-(--background)">
      <Navbar />
      <div className="relative">
        <Particles id="contact-particles" intensity="low" />

        {/* Intro Section */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-bold text-(--text-primary) mb-6"
            >
              {t('contact.title')}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-(--text-secondary)"
            >
              {t('contact.subtitle')}
            </motion.p>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
          <div className="max-w-2xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              onSubmit={handleSubmit}
              className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-8 border border-(--border) shadow-lg"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-(--text-primary) font-semibold mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-(--surface)/20 border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-(--text-primary) font-semibold mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-(--surface)/20 border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--accent-primary)"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-(--text-primary) font-semibold mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-(--surface)/20 border border-(--border) rounded-lg text-(--text-primary) placeholder-(--text-secondary) focus:outline-none focus:ring-2 focus:ring-(--accent-primary) resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-(--accent-primary) hover:bg-(--accent-secondary) disabled:bg-(--text-secondary) text-(--text-inverse) py-3 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
              >
                {status === 'sending' ? t('contact.form.sending') : t('contact.form.submit')}
              </button>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-green-600 text-center mt-4"
                >
                  {t('contact.form.success')}
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-red-600 text-center mt-4"
                >
                  {t('contact.form.error')}
                </motion.p>
              )}
            </motion.form>
          </div>
        </section>

        {/* Contact Info */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            >
              <div className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 border border-(--border) shadow-lg">
                <h3 className="text-xl font-semibold text-(--text-primary) mb-2">{t('contact.info.email')}</h3>
                <p className="text-(--text-secondary)">contact@SafCom-labs.com</p>
              </div>
              <div className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 border border-(--border) shadow-lg">
                <h3 className="text-xl font-semibold text-(--text-primary) mb-2">{t('contact.info.phone')}</h3>
                <p className="text-(--text-secondary)">+1 (555) 123-4567</p>
              </div>
              <div className="bg-(--surface)/10 backdrop-blur-md rounded-lg p-6 border border-(--border) shadow-lg">
                <h3 className="text-xl font-semibold text-(--text-primary) mb-2">{t('contact.info.address')}</h3>
                <p className="text-(--text-secondary)">123 Tech Street<br />Innovation City, IC 12345</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Social Media */}
        <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold text-(--text-primary) mb-8"
            >
              {t('contact.follow.title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center space-x-8"
            >
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors text-2xl">
                LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors text-2xl">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors text-2xl">
                X
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-(--text-primary) hover:text-(--accent-primary) transition-colors text-2xl">
                Instagram
              </a>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}