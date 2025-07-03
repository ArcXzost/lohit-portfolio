"use client";
import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import FloatingShapes from "@/components/animations/FloatingShapes";
import Typewriter from "@/components/animations/Typewriter";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-screen items-center justify-center overflow-hidden"
    >
      <FloatingShapes />
      <div className="container z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <Typewriter
            text={personalInfo.name}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
          />
          <p className="mt-6 text-lg leading-8 text-gray-300">
            {personalInfo.title}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#projects"
              className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="group flex items-center gap-x-2 text-sm font-semibold leading-6 text-white transition-colors hover:text-indigo-400"
            >
              Contact me{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
