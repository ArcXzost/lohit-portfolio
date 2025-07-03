'use client';

import { projects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-slate-900/50">
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
            03. Featured Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
          >
            Projects & <span className="gradient-text">Innovations</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            A showcase of my technical expertise and problem-solving capabilities
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card p-8 h-full hover:bg-white/10 transition-all duration-500 glow-effect">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center space-x-3 ml-4">
                    {project.github && (
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
                      >
                        <Github className="h-5 w-5" />
                      </Link>
                    )}
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/10 rounded-lg"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono font-medium bg-slate-800/50 text-blue-400 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                  <span className="text-xs font-mono text-slate-500">
                    Project #{String(index + 1).padStart(2, '0')}
                  </span>
                  
                  {(project.github || project.live) && (
                    <div className="flex items-center text-xs text-slate-400 group-hover:text-blue-400 transition-colors">
                      <span className="mr-1">View Details</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link
            href="https://github.com/ArcXzost"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary group"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;