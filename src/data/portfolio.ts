
import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export const personalInfo = {
  name: "Lohit Majumder",
  title: "Computer Science & Engineering Student | Full-Stack Developer | Cloud Enthusiast",
  bio: "I'm a passionate Computer Science and Engineering student at the Indian Institute of Information Technology Guwahati, with a strong foundation in full-stack development and cloud technologies. With a CGPA of 8.18/10, I combine academic excellence with practical experience to build innovative solutions. My journey includes impactful internships at leading companies like Siemens and Cogneo Technologies, where I've developed everything from DDoS-resilient IoT security frameworks to comprehensive API wrapper services. I thrive on solving complex problems using cutting-edge technologies like Go, Python, and modern cloud platforms. I believe in creating technology that not only works flawlessly but also makes a meaningful impact. Whether it's optimizing system performance, designing scalable architectures, or building user-friendly interfaces, I'm driven by the desire to turn ideas into elegant, robust solutions.",
  contact: {
    email: "majumderlohit@gmail.com",
    phone: "+91 8777405760",
  },
  social: [
    {
      name: "GitHub",
      url: "https://github.com/ArcXzost",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lohit-majumder-023365263",
      icon: Linkedin,
    },
  ],
};

export const skills = {
  "Programming Languages": [
    { name: "C++", level: 90 },
    { name: "Go", level: 85 },
    { name: "Python", level: 95 },
    { name: "JavaScript", level: 80 },
  ],
  "Frameworks & Libraries": [
    { name: "FastAPI", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
  ],
  Databases: [
    { name: "PostgreSQL", level: 90 },
    { name: "Azure SQL", level: 85 },
    { name: "Snowflake", level: 80 },
  ],
  "Tools & Technologies": [
    { name: "AWS", level: 90 },
    { name: "Terraform", level: 85 },
    { name: "Docker", level: 80 },
    { name: "Git", level: 95 },
    { name: "Airflow", level: 80 },
    { name: "Cloudflare", level: 85 },
    { name: "Azure", level: 75 },
    { name: "Github Pages", level: 90 },
  ],
};

export const projects = [
  {
    title: "ArcNest: AI-Powered Portfolio Website Generator",
    description:
      "An AI system using Next.js, web scraping, and few-shot learning to convert user resumes into custom portfolio websites, reducing manual effort by over 80%. Features seamless GitHub Pages deployment for instant publishing.",
    technologies: ["Next.js", "AI", "Web Scraping", "GitHub Pages"],
    github: "https://github.com/ArcXzost/ArcNest",
    live: "https://arcnest.vercel.app/",
  },
  {
    title: "FileSyS-CAS: Content-Addressable Distributed File System",
    description:
      "A peer-to-peer, content-addressable file system built with Go, ensuring 99.9% data integrity via SHA-256 hashing and distributed storage. Includes file versioning and health monitoring for robust data management.",
    technologies: ["Go", "Distributed Systems", "P2P", "SHA-256"],
    github: "https://github.com/ArcXzost/FileSyS-CAS",
  },
  {
    title: "Siemens IoT Security Framework",
    description:
      "Engineered a DDoS-resilient IoT security framework in C++ with a memory footprint under 512KB, featuring multi-layer replay protection, interface failover, and rate limiting, achieving 99.7% uptime on 50+ edge devices.",
    technologies: ["C++", "IoT", "Security", "Embedded Systems"],
  },
  {
    title: "Multi-Database API Wrapper Service",
    description:
      "Developed a comprehensive REST API wrapper service for PostgreSQL, Azure SQL, and Snowflake using FastAPI, with integrated workflow scheduling via Airflow, enhancing SaaS model efficiency by 40%.",
    technologies: [
      "Python",
      "FastAPI",
      "Airflow",
      "Terraform",
      "AWS",
      "Cloudflare",
    ],
  },
];

export const experience = [
  {
    company: "Siemens",
    role: "Technical Intern",
    date: "Feb 2025 – Jul 2025",
    description: [
      "Engineered a DDoS-resilient IoT security framework using C++ with a memory footprint < 512KB, providing multi-layer replay protection, interface failover, rate limiting, and resource-bounded connection pooling, achieving 99.7% uptime across 50+ edge devices.",
      "Implemented Integrity and health monitoring modules, reducing incident response time by 80% through automated alert prioritization and anomaly correlation on resource-constrained hardware.",
    ],
    technologies: ["C++"],
  },
  {
    company: "Cogneo Technologies",
    role: "Software Developer Intern",
    date: "May 2024 – Aug 2024",
    description: [
      "Engineered a REST API wrapper service for PostgreSQL, AzureSQL, and Snowflake using FastAPI; integrated workflow scheduling with Airflow, enhancing SaaS model efficiency by 40%.",
      "Automated AWS deployments securely using Terraform and Cloudflare reducing deployment time by 40%.",
    ],
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "AzureSQL",
      "Snowflake",
      "Airflow",
      "AWS",
      "Terraform",
      "Cloudflare",
    ],
  },
];

export const education = {
  institution: "Indian Institute of Information Technology Guwahati",
  degree: "Bachelor of Technology in Computer Science and Engineering",
  location: "Assam, India",
  date: "Dec 2021 – Jun 2025",
  cgpa: "8.18/10",
};
