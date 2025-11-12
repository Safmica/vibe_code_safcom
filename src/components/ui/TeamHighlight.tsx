'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TeamHighlight = () => {
  const { t } = useLanguage();

  const team = [
    {
      name: t('team.members.1.name'),
      role: t('team.members.1.role'),
      bio: t('team.members.1.bio'),
      image: '/assets/team/safar.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/safar',
        github: 'https://github.com/safar',
        twitter: 'https://twitter.com/safar'
      },
      skills: ['Leadership', 'Strategy', 'Innovation']
    },
    {
      name: t('team.members.2.name'),
      role: t('team.members.2.role'),
      bio: t('team.members.2.bio'),
      image: '/assets/team/safarudin.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/safarudin',
        github: 'https://github.com/safarudin',
        twitter: 'https://twitter.com/safarudin'
      },
      skills: ['Architecture', 'DevOps', 'AI/ML']
    },
    {
      name: t('team.members.3.name'),
      role: t('team.members.3.role'),
      bio: t('team.members.3.bio'),
      image: '/assets/team/alex.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexjohnson',
        github: 'https://github.com/alexjohnson',
        twitter: 'https://twitter.com/alexjohnson'
      },
      skills: ['React', 'Node.js', 'TypeScript']
    },
    {
      name: t('team.members.4.name'),
      role: t('team.members.4.role'),
      bio: t('team.members.4.bio'),
      image: '/assets/team/sarah.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        github: 'https://github.com/sarahchen',
        twitter: 'https://twitter.com/sarahchen'
      },
      skills: ['Design', 'UX Research', 'Prototyping']
    },
    {
      name: t('team.members.5.name'),
      role: t('team.members.5.role'),
      bio: t('team.members.5.bio'),
      image: '/assets/team/michael.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/mrodriguez',
        github: 'https://github.com/mrodriguez',
        twitter: 'https://twitter.com/mrodriguez'
      },
      skills: ['Kubernetes', 'AWS', 'CI/CD']
    },
    {
      name: t('team.members.6.name'),
      role: t('team.members.6.role'),
      bio: t('team.members.6.bio'),
      image: '/assets/team/emily.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/emilydavis',
        github: 'https://github.com/emilydavis',
        twitter: 'https://twitter.com/emilydavis'
      },
      skills: ['Product Strategy', 'Analytics', 'Agile']
    }
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % team.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + team.length) % team.length);
  };

  const goToSlide = (index: number) => {
    const newDirection = index > currentIndex ? 1 : -1;
    setDirection(newDirection);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-(--background) relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-linear-to-br from-(--accent-primary)/5 via-transparent to-(--accent-secondary)/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--accent-primary)/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--accent-secondary)/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) bg-clip-text text-transparent mb-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {t('team.title')}
          </motion.h2>
          <motion.p
            className="text-xl text-(--text-secondary) max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('team.subtitle')}
          </motion.p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative h-[600px] md:h-[700px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 },
                rotateY: { duration: 0.5 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <motion.div
                className="relative max-w-md mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {/* Card Background with 3D Effect */}
                <motion.div
                  className="relative bg-(--surface)/20 backdrop-blur-xl rounded-3xl p-8 border border-(--border)/50 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(var(--surface), 0.2) 0%, rgba(var(--surface), 0.1) 100%)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(var(--border), 0.1)',
                  }}
                  whileHover={{
                    boxShadow: '0 35px 60px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(var(--accent-primary), 0.2)',
                  }}
                >
                  {/* Profile Image */}
                  <motion.div
                    className="relative w-48 h-48 mx-auto mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <div className="w-full h-full bg-linear-to-br from-(--accent-primary) to-(--accent-secondary) rounded-full flex items-center justify-center text-6xl shadow-2xl">
                      👤
                    </div>
                    {/* Floating particles effect */}
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 bg-(--accent-primary) rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 1, 0.7],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-4 h-4 bg-(--accent-secondary) rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: 1,
                      }}
                    />
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center"
                  >
                    <motion.h3
                      className="text-3xl font-bold text-(--text-primary) mb-2"
                      whileHover={{ scale: 1.05 }}
                    >
                      {team[currentIndex].name}
                    </motion.h3>
                    <motion.p
                      className="text-lg font-medium text-(--accent-primary) mb-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      {team[currentIndex].role}
                    </motion.p>
                    <motion.p
                      className="text-(--text-secondary) mb-6 leading-relaxed"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {team[currentIndex].bio}
                    </motion.p>

                    {/* Skills */}
                    <motion.div
                      className="flex flex-wrap justify-center gap-2 mb-6"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      {team[currentIndex].skills.map((skill, index) => (
                        <motion.span
                          key={skill}
                          className="px-3 py-1 bg-(--accent-primary)/10 text-(--accent-primary) text-sm rounded-full border border-(--accent-primary)/20"
                          whileHover={{ scale: 1.1, backgroundColor: 'rgba(var(--accent-primary), 0.2)' }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                      className="flex justify-center space-x-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      {Object.entries(team[currentIndex].social).map(([platform, url], index) => {
                        const Icon = platform === 'linkedin' ? Linkedin :
                                   platform === 'github' ? Github : Twitter;
                        const label = platform === 'linkedin' ? t('team.social.linkedin') :
                                    platform === 'github' ? t('team.social.github') : t('team.social.twitter');
                        return (
                          <motion.a
                            key={platform}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-(--surface-hover)/50 hover:bg-(--accent-primary)/20 rounded-full text-(--text-secondary) hover:text-(--accent-primary) transition-all duration-300 border border-(--border)/30 hover:border-(--accent-primary)/30"
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1 + index * 0.1 }}
                            aria-label={label}
                          >
                            <Icon className="w-5 h-5" />
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <motion.div
          className="flex items-center justify-center space-x-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {/* Previous Button */}
          <motion.button
            onClick={() => paginate(-1)}
            className="p-4 bg-(--surface)/20 hover:bg-(--surface)/40 rounded-full text-(--text-primary) hover:text-(--accent-primary) transition-all duration-300 border border-(--border)/30 hover:border-(--accent-primary)/30 backdrop-blur-sm"
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex space-x-3">
            {team.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-(--accent-primary) scale-125'
                    : 'bg-(--text-secondary)/30 hover:bg-(--text-secondary)/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  scale: index === currentIndex ? 1.25 : 1,
                }}
                transition={{ type: 'spring', stiffness: 300 }}
              />
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            onClick={() => paginate(1)}
            className="p-4 bg-(--surface)/20 hover:bg-(--surface)/40 rounded-full text-(--text-primary) hover:text-(--accent-primary) transition-all duration-300 border border-(--border)/30 hover:border-(--accent-primary)/30 backdrop-blur-sm"
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Auto-play Toggle */}
        <motion.div
          className="flex justify-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
              isAutoPlaying
                ? 'bg-(--accent-primary)/10 text-(--accent-primary) border-(--accent-primary)/30'
                : 'bg-(--surface)/20 text-(--text-secondary) border-(--border)/30 hover:border-(--accent-primary)/30'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                        {isAutoPlaying ? t('team.autoplay.pause') : t('team.autoplay.resume')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamHighlight;