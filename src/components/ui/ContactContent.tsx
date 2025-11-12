'use client';

import Particles from './Particles';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactContent() {
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

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative">
      <Particles id="contact-particles" intensity="low" />

      {/* Hero Section */}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-(--text-secondary) mb-12"
          >
            {t('contact.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="relative z-10 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-(--text-primary) mb-6">{t('contact.form.title')}</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-(--text-primary) font-medium mb-2">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-(--text-primary) font-medium mb-2">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-(--text-primary) font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0ea5e9] focus:border-transparent resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#0ea5e9] hover:bg-[#0284c7] disabled:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                >
                  {status === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {t('contact.form.sending')}
                    </>
                  ) : status === 'success' ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      {t('contact.form.success')}
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400">
                    <AlertCircle className="h-5 w-5" />
                    {t('contact.form.error')}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                <h3 className="text-2xl font-bold text-(--text-primary) mb-6">{t('contact.info.title')}</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-[#0ea5e9] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-(--text-primary) font-semibold">{t('contact.info.email')}</h4>
                      <p className="text-(--text-secondary)">hello@safcom.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-[#0ea5e9] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-(--text-primary) font-semibold">{t('contact.info.phone')}</h4>
                      <p className="text-(--text-secondary)">+62 123 456 7890</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-[#0ea5e9] mt-1 shrink-0" />
                    <div>
                      <h4 className="text-(--text-primary) font-semibold">{t('contact.info.location')}</h4>
                      <p className="text-(--text-secondary)">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-lg p-8">
                <h3 className="text-2xl font-bold text-(--text-primary) mb-4">{t('contact.info.follow')}</h3>
                <p className="text-(--text-secondary) mb-4">
                  {t('contact.info.followDesc')}
                </p>
                <div className="flex gap-4">
                  <a href="#" className="text-[#0ea5e9] hover:text-white transition-colors">
                    {t('contact.follow.linkedin')}
                  </a>
                  <a href="#" className="text-[#0ea5e9] hover:text-white transition-colors">
                    {t('contact.follow.twitter')}
                  </a>
                  <a href="#" className="text-[#0ea5e9] hover:text-white transition-colors">
                    {t('contact.follow.github')}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}