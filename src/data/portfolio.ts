import {
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

export const personalInfo = {
  name: "Lohit Majumder",
  title: "Software Engineer | Distributed Systems & AI Enthusiast",
  bio: "Fresh graduate from IIIT Guwahati with a knack for building systems that don't break under pressure. I've spent my time crafting DDoS-resilient IoT frameworks, taming distributed file systems, and making databases talk to each other through elegant APIs. My toolkit spans from low-level C++ optimizations to cloud-native architectures, with a particular fondness for Go's simplicity and Python's versatility. Whether it's shaving milliseconds off response times or designing fault-tolerant distributed systems, I find joy in solving problems that matter. My internships at Siemens and Cogneo taught me that great software isn't just about clean code—it's about building solutions that scale, perform, and actually solve real problems.",
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
    title: "Inventark: Smart Inventory Management System with Predictive Analytics",
    description:
      "Developed a scalable Android app using Kotlin for real-time inventory tracking, reducing stockouts by 30% and excess inventory by 20%. Integrated ML models for demand forecasting, improving accuracy by 95% and decision-making speed by 40% with predictive analytics.",
    technologies: ["Kotlin", "Android", "Machine Learning", "Predictive Analytics"],
    github: "https://github.com/ArcXzost/inventory-management-system",
  },
  {
    title: "Cognito-LDAP Federated Identity Management System",
    description:
      "Implemented Web Identity Federation by integrating Google OAuth with AWS Cognito to exchange credentials, leading to a 50% reduction in access control setup time, ensuring secure access to S3 bucket resources. Optimized LDAP for credential search efficiency, increasing granularity of role-based access by 50%.",
    technologies: ["AWS Cognito", "Google OAuth", "LDAP", "S3", "Identity Federation"],
    github: "https://github.com/ArcXzost/cognito-ldap-federation",
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
    technologies: ["C++", "Distributed Systems", "Concurrency", "OpenSSL", "Cryptography"],
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