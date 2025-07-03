'use client';

import { personalInfo } from '@/data/portfolio';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Download, MapPin, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "IIIT Guwahati",
      subtitle: "B.Tech CSE",
    },
    {
      icon: Award,
      title: "Technical Excellence",
      subtitle: "Worked with Industry Leaders and innovative startups",
    },
    {
      icon: MapPin,
      title: "Based in India",
      subtitle: "Open to Remote Work",
    },
  ];

  return (
    <section id="about" className="section-padding bg-slate-900/50">
      <div className="container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-8">
              <div>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-blue-400 font-mono text-lg mb-4"
                >
                  01. About Me
                </motion.p>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-3xl sm:text-4xl font-bold text-white mb-6"
                >
                  Crafting Digital Solutions with{" "}
                  <span className="gradient-text">Precision & Passion</span>
                </motion.h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="prose prose-lg prose-slate max-w-none"
              >
                <p className="text-slate-300 leading-relaxed mb-6">
                  Did my {" "}
                  <span className="text-purple-500 font-semibold">BTECH </span>
                  in Computer Science and Engineering from {" "}
                  <span className="text-blue-400 font-semibold">Indian Institute of Information Technology Guwahati</span>.
                </p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  My journey combines academic excellence with hands-on experience through impactful internships at{" "}
                  <span className="text-purple-400 font-semibold">Siemens</span> and{" "}
                  <span className="text-pink-400 font-semibold">Cogneo Technologies</span>.
                  I specialize in building scalable solutions using modern technologies like Go, Python, and cloud platforms.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  I believe in creating technology that not only works flawlessly but also makes a meaningful impact.
                  Whether it's optimizing system performance or designing user-friendly interfaces, I'm driven by the
                  desire to turn innovative ideas into elegant, robust solutions.
                </p>
              </motion.div>

              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {highlights.map((item, index) => (
                  <div key={index} className="glass-card p-4 text-center">
                    <item.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-semibold text-white text-sm">{item.title}</h4>
                    <p className="text-slate-400 text-xs mt-1">{item.subtitle}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <a
                  href="/lohit_majumder_resume.pdf"
                  download
                  className="btn-primary group inline-flex"
                >
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20 animate-pulse" />
              
              {/* Image container */}
              <div className="relative glass-card p-4 glow-effect">
                <Image
                  src="/headshot.jpg"
                  alt="Lohit Majumder"
                  width={400}
                  height={400}
                  className="rounded-xl object-cover shadow-2xl"
                  priority
                />
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-15 blur-xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;