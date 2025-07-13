import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code size={20} />
            <span className="text-lg font-semibold">Priyanka Late</span>
          </div>
          <p className="text-gray-300 mb-4">
            AI/ML Developer | Computer Science Student | GATE 2026 Aspirant
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
            <span>Made with</span>
            <Heart className="text-red-500" size={16} />
            <span>using React & Tailwind CSS</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            © 2024 Priyanka Late. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
