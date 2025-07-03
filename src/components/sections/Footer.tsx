'use client';

import { personalInfo } from '@/data/portfolio';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
      
      <div className="container relative">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold gradient-text">Lohit Majumder</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Building innovative solutions with modern technologies. 
                Always learning, always growing.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold">Quick Links</h4>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { name: 'About', href: '#about' },
                  { name: 'Skills', href: '#skills' },
                  { name: 'Projects', href: '#projects' },
                  { name: 'Experience', href: '#experience' },
                  { name: 'Contact', href: '#contact' },
                  { name: 'Resume', href: '/resume.pdf' },
                ].map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors duration-300"
                    {...(link.href.startsWith('/') ? { download: true } : {})}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold">Connect</h4>
              <div className="flex space-x-4">
                {personalInfo.social.map((social) => (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/5 rounded-lg"
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <Link
                  href={`mailto:${personalInfo.contact.email}`}
                  className="block text-slate-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {personalInfo.contact.email}
                </Link>
                <Link
                  href={`tel:${personalInfo.contact.phone}`}
                  className="block text-slate-400 hover:text-white text-sm transition-colors duration-300"
                >
                  {personalInfo.contact.phone}
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center text-sm text-slate-400">
              <span>&copy; {new Date().getFullYear()} {personalInfo.name}. Built with</span>
              <Heart className="h-4 w-4 text-red-400 mx-1 animate-pulse" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
            
            <button
              onClick={scrollToTop}
              className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/5 rounded-lg group"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-1" />
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;