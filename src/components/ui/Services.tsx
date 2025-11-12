'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Code, Smartphone, Cloud, Brain } from 'lucide-react';

const Services = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const services = [
    {
      title: t('footer.services.web'),
      description: 'Custom software solutions tailored to your business needs, built with modern technologies and best practices.',
      icon: Code,
      gradient: 'from-blue-500 to-cyan-500',
      delay: 0.1,
      size: 'large'
    },
    {
      title: t('footer.services.mobile'),
      description: 'Scalable cloud solutions on Azure, AWS, or GCP to ensure your applications run efficiently and securely.',
      icon: Smartphone,
      gradient: 'from-purple-500 to-pink-500',
      delay: 0.3,
      size: 'medium'
    },
    {
      title: t('footer.services.ai'),
      description: 'Cutting-edge AI solutions including machine learning models, data analytics, and intelligent automation.',
      icon: Brain,
      gradient: 'from-green-500 to-emerald-500',
      delay: 0.5,
      size: 'large'
    },
    {
      title: t('footer.services.cloud'),
      description: 'Strategic consulting to help your business adopt emerging technologies and stay ahead of the competition.',
      icon: Cloud,
      gradient: 'from-orange-500 to-red-500',
      delay: 0.7,
      size: 'medium'
    },
  ];
  return (
    <section ref={containerRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-(--surface)/20 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--accent-primary)/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--accent-secondary)/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-linear-to-r from-(--accent-primary)/3 via-transparent to-(--accent-secondary)/3 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('footer.services')}
          </motion.h2>
          <motion.p
            className="text-xl text-(--text-secondary) max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('services.subtitle')}
          </motion.p>
        </motion.div>

        {/* Services Layout */}
        <div className="relative">
          {/* Large Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {services.filter(service => service.size === 'large').map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{
                  duration: 0.8,
                  delay: service.delay,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                className="group relative"
              >
                <motion.div
                  className="relative bg-(--surface)/20 backdrop-blur-xl rounded-3xl p-8 border border-(--border)/50 shadow-2xl overflow-hidden cursor-pointer"
                  style={{
                    background: `linear-gradient(135deg, rgba(var(--surface), 0.2) 0%, rgba(var(--surface), 0.1) 100%)`,
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--border), 0.1)',
                  }}
                  whileHover={{
                    boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(var(--accent-primary), 0.2)',
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />

                  {/* Glowing Border Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(45deg, transparent, rgba(var(--accent-primary), 0.1), transparent)`,
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-(--accent-primary)/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-16 h-16 bg-(--accent-secondary)/20 rounded-full blur-xl"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: 1,
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="w-20 h-20 bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 rounded-2xl flex items-center justify-center mb-4 group-hover:from-(--accent-primary)/20 group-hover:to-(--accent-secondary)/20 transition-all duration-500">
                        <service.icon className="w-10 h-10 text-(--accent-primary) group-hover:text-white transition-colors duration-300" />
                      </div>
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 w-20 h-20 bg-(--accent-primary)/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                    <motion.h3
                      className="text-2xl font-bold text-(--text-primary) mb-4 group-hover:text-(--accent-primary) transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-(--text-secondary) leading-relaxed group-hover:text-(--text-primary) transition-colors"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 w-2 h-2 bg-(--accent-primary) rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Medium Cards Row - Offset Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.filter(service => service.size === 'medium').map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateX: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: service.delay,
                  type: 'spring',
                  stiffness: 100
                }}
                whileHover={{
                  scale: 1.03,
                  rotateX: 2,
                  z: 30
                }}
                className={`group relative ${index % 2 === 0 ? 'md:mt-8' : 'md:-mt-8'}`}
              >
                <motion.div
                  className="relative bg-(--surface)/15 backdrop-blur-xl rounded-2xl p-6 border border-(--border)/40 shadow-xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(var(--surface), 0.15) 0%, rgba(var(--surface), 0.08) 100%)`,
                    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(var(--border), 0.08)',
                  }}
                  whileHover={{
                    boxShadow: '0 30px 50px -12px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(var(--accent-primary), 0.15)',
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500`} />

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-12 h-12 bg-(--accent-primary)/15 rounded-full blur-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <div className="w-16 h-16 bg-linear-to-br from-(--accent-primary)/10 to-(--accent-secondary)/10 rounded-xl flex items-center justify-center mb-3 group-hover:from-(--accent-primary)/20 group-hover:to-(--accent-secondary)/20 transition-all duration-500">
                        <service.icon className="w-8 h-8 text-(--accent-primary) group-hover:text-white transition-colors duration-300" />
                      </div>
                      {/* Icon Glow Effect */}
                      <motion.div
                        className="absolute inset-0 w-16 h-16 bg-(--accent-primary)/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      />
                    </motion.div>
                    <motion.h3
                      className="text-xl font-bold text-(--text-primary) mb-3 group-hover:text-(--accent-primary) transition-colors"
                      whileHover={{ scale: 1.01 }}
                    >
                      {service.title}
                    </motion.h3>
                    <motion.p
                      className="text-(--text-secondary) leading-relaxed text-sm group-hover:text-(--text-primary) transition-colors"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {service.description}
                    </motion.p>

                    {/* Hover Indicator */}
                    <motion.div
                      className="absolute bottom-3 right-3 w-1.5 h-1.5 bg-(--accent-primary) rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      animate={{
                        scale: [1, 1.5, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('services.cta')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;