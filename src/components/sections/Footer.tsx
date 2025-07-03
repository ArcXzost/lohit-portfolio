'use client';

import { personalInfo } from '@/data/portfolio';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-8 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-y-6 sm:flex-row">
          <div className="flex gap-x-6">
            {personalInfo.social.map((social) => (
              <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <social.icon className="h-6 w-6" />
              </Link>
            ))}
          </div>
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
