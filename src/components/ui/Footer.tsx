import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 0.8, y: 0 }
  };

  const socialIconVariants = {
    hover: {
      y: -3,
      scale: 1.05
    }
  };

  const linkHoverVariants = {
    hover: {
      x: 2,
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative mt-16 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, var(--background) 0%, var(--surface) 100%)'
      }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, rgba(0,119,255,0.05) 0%, rgba(14,165,233,0.05) 100%)'
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <motion.div
              className="mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-secondary), var(--accent-primary))',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              <h3 className="text-2xl lg:text-3xl font-bold">SafCom</h3>
            </motion.div>
            <p className="text-(--text-secondary) text-sm leading-relaxed mb-4">
              Empowering Innovation with Safar & Safarudin - Code, Data, and AI Solutions for the Future.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-(--text-inverse) bg-linear-to-r from-(--accent-primary) to-(--accent-secondary) rounded-full hover:shadow-lg hover:shadow-(--accent-primary)/25 transition-all duration-300"
              >
                Get in Touch
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Company */}
            <div>
              <h4 className="text-(--text-primary) font-semibold text-sm uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/about', label: 'About Us' },
                  { href: '/services', label: 'Services' },
                  { href: '/careers', label: 'Careers' },
                  { href: '/blog', label: 'Blog' }
                ].map((link) => (
                  <motion.li key={link.href} variants={linkHoverVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-(--text-secondary) hover:text-(--accent-primary) text-sm transition-all duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--accent-primary) transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-(--text-primary) font-semibold text-sm uppercase tracking-wider mb-4">
                Resources
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/docs', label: 'Documentation' },
                  { href: '/api', label: 'API Reference' },
                  { href: '/support', label: 'Support' },
                  { href: '/community', label: 'Community' }
                ].map((link) => (
                  <motion.li key={link.href} variants={linkHoverVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-(--text-secondary) hover:text-(--accent-primary) text-sm transition-all duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--accent-primary) transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-(--text-primary) font-semibold text-sm uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { href: '/privacy', label: 'Privacy Policy' },
                  { href: '/terms', label: 'Terms of Service' },
                  { href: '/cookies', label: 'Cookie Policy' },
                  { href: '/security', label: 'Security' }
                ].map((link) => (
                  <motion.li key={link.href} variants={linkHoverVariants} whileHover="hover">
                    <Link
                      href={link.href}
                      className="text-(--text-secondary) hover:text-(--accent-primary) text-sm transition-all duration-300 relative group"
                    >
                      {link.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-(--accent-primary) transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <h4 className="text-(--text-primary) font-semibold text-sm uppercase tracking-wider mb-6">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              {[
                { Icon: Linkedin, href: 'https://linkedin.com/company/safcom', label: 'LinkedIn' },
                { Icon: Github, href: 'https://github.com/safcom', label: 'GitHub' },
                { Icon: Twitter, href: 'https://twitter.com/safcom', label: 'Twitter' },
                { Icon: Instagram, href: 'https://instagram.com/safcom', label: 'Instagram' }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={socialIconVariants}
                  whileHover="hover"
                  className="group relative p-3 rounded-full bg-(--surface-hover)/50 hover:bg-(--surface)/80 backdrop-blur-sm border border-(--border)/50 hover:border-(--accent-primary)/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-(--text-secondary) group-hover:text-(--accent-primary) transition-colors duration-300" />
                  <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 bg-(--accent-primary)/10 blur-xl transition-opacity duration-300" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={itemVariants}
          className="mt-12 pt-8 border-t border-(--border)/30"
        >
          <div className="text-center">
            <p className="text-(--text-secondary) text-sm">
              © {currentYear} SafCom by Safar & Safarudin. All Rights Reserved.
            </p>
            <p className="text-(--text-secondary)/70 text-xs mt-2">
              Crafted by Safar & Safarudin • Building Tomorrow's Technology Today
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;