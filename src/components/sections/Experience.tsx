'use client';

import { experience } from '@/data/portfolio';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <section id="experience" className="py-24 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Work Experience</h2>
          <div className="mt-16 relative">
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-gray-700" />
            {experience.map((item, index) => (
              <motion.div
                key={index}
                className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="rounded-lg bg-gray-900 p-6 shadow-lg">
                    <p className="text-sm font-medium text-indigo-400">{item.date}</p>
                    <h3 className="mt-2 text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-lg font-semibold text-gray-300">{item.company}</p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-400">
                      {item.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
