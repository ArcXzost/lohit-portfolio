'use client';

import { skills } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench } from 'lucide-react';

const Skills = () => {
  const categoryIcons = {
    "Programming Languages": Code,
    "Frameworks & Libraries": Wrench,
    "Databases": Database,
    "Tools & Technologies": Cloud,
  };

  const categoryColors = {
    "Programming Languages": "from-blue-500 to-cyan-500",
    "Frameworks & Libraries": "from-purple-500 to-pink-500",
    "Databases": "from-green-500 to-emerald-500",
    "Tools & Technologies": "from-orange-500 to-red-500",
  };

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-mono text-lg mb-4"
          >
            02. Technical Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Skills & <span className="gradient-text">Technologies</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A comprehensive toolkit built through academic learning and real-world experience
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skills).map(([category, skillList], categoryIndex) => {
            const IconComponent = categoryIcons[category as keyof typeof categoryIcons];
            const gradientColor = categoryColors[category as keyof typeof categoryColors];
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="glass-card p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${gradientColor} mr-3`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {skillList.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2 py-1 rounded">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${gradientColor} rounded-full relative`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 1.2, 
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut"
                          }}
                        >
                          {/* Shimmer effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-slate-400 text-sm">
            Always learning and exploring new technologies to stay at the forefront of innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;