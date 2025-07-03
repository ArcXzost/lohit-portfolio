'use client';

import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">{personalInfo.bio}</p>
              <div className="mt-8">
                <a
                  href="/resume.pdf" // Assuming you have a resume.pdf in the public folder
                  download
                  className="inline-flex items-center gap-x-2 rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
                >
                  Download Resume
                  <Download className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            className="relative flex h-80 w-full items-center justify-center sm:h-96 lg:h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/headshot.jpg" // Placeholder - replace with your actual headshot
              alt="Lohit Majumder Headshot"
              width={400}
              height={400}
              className="rounded-lg object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
