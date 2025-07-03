'use client';

import { projects } from '@/data/portfolio';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl text-center">Featured Projects</h2>
          <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col overflow-hidden rounded-lg bg-gray-800 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="mt-3 text-base text-gray-400">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="inline-flex items-center rounded-md bg-indigo-500/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-auto p-6 flex justify-end gap-x-4 bg-gray-800/50">
                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <Github className="h-6 w-6" />
                    </Link>
                  )}
                  {project.live && (
                    <Link href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                      <ExternalLink className="h-6 w-6" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
