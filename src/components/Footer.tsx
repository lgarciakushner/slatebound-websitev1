import React from 'react';
import { motion } from 'framer-motion';

const concepts = ['Growth', 'Funnels', 'Automation', 'Clients', 'Leads'];

const InfiniteScroll: React.FC = () => {
  // Quadruple the concepts to ensure continuous coverage
  const duplicatedConcepts = [...concepts, ...concepts, ...concepts, ...concepts];
  
  return (
    <div className="relative w-screen -mx-4 md:-mx-6 my-8 overflow-hidden">
      <div className="flex relative">
        <motion.div
          animate={{
            x: ["0%", "-25%"]
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex gap-4 whitespace-nowrap"
        >
          {duplicatedConcepts.map((concept, index) => (
            <div
              key={`${concept}-${index}`}
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-gray-300 whitespace-nowrap flex-shrink-0"
            >
              {concept}
            </div>
          ))}
          {duplicatedConcepts.map((concept, index) => (
            <div
              key={`${concept}-copy-${index}`}
              className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm text-gray-300 whitespace-nowrap flex-shrink-0"
            >
              {concept}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="h-10" aria-hidden="true"></div>
    </div>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-dark-500 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center space-x-2 mb-4">
            <div className="h-8 w-8 relative">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#050714"/>
                <path d="M8 10L14 10C15.1046 10 16 10.8954 16 12L16 20C16 21.1046 15.1046 22 14 22L8 22L8 10Z" fill="#6D28D9"/>
                <path d="M18 10L24 10L24 22L18 22C16.8954 22 16 21.1046 16 20L16 12C16 10.8954 16.8954 10 18 10Z" fill="#3B82F6"/>
              </svg>
            </div>
            <span className="text-white font-display text-xl font-bold">SLATEBOUND</span>
          </div>

          <InfiniteScroll />

          <p className="text-gray-500 text-sm">
            © 2025 SLATEBOUND. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;