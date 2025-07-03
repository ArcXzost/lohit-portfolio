'use client';

import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-gray-800">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Technical Skills</h2>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category}>
                <h3 className="text-xl font-semibold leading-6 text-indigo-400">{category}</h3>
                <div className="mt-6 space-y-4">
                  {skillList.map((skill) => (
                    <div key={skill.name} className="w-full">
                      <div className="flex justify-between">
                        <p className="text-sm font-medium text-gray-300">{skill.name}</p>
                        <p className="text-sm font-medium text-gray-400">{skill.level}%</p>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-gray-700">
                        <motion.div
                          className="h-2 rounded-full bg-indigo-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
