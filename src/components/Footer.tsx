import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

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
            <img src="/image.png" alt="Slatebound" className="h-8 w-auto" />
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