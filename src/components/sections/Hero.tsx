"use client";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "@/components/animations/FloatingShapes";
import Typewriter from "@/components/animations/Typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      <FloatingShapes />
      
      {/* Main content */}
      <div className="container z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-blue-400 font-mono text-lg mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name with typewriter effect */}
          <Typewriter
            text={personalInfo.name}
            className="text-5xl sm:text-7xl font-bold tracking-tight text-white mb-4"
          />

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-400 mb-8"
          >
            I build things for the web.
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-lg sm:text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto mb-12"
          >
            I enjoy building things that scale and last. My interests span{" "}
            <span className="text-blue-400 font-semibold">web technologies</span> ,{" "}
            <span className="text-violet-400 font-semibold">cloud automation</span> and {" "}
            <span className="text-purple-400 font-semibold">the latest in AI </span>.
            If it's new, fast, or clever, I'm probably already exploring it.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
          >
            <Link
              href="#projects"
              className="btn-primary group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            <a
              href="/lohit_majumder_resume.pdf"
              download
              className="btn-secondary group"
            >
              <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex items-center justify-center space-x-6"
          >
            {personalInfo.social.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/5 rounded-lg"
              >
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
            <Link
              href={`mailto:${personalInfo.contact.email}`}
              className="p-3 text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:bg-white/5 rounded-lg"
            >
              <Mail className="h-6 w-6" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;