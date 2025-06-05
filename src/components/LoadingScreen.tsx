import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-dark-600"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary-600/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary-600/20 rounded-full filter blur-3xl"></div>
            <div className="relative flex flex-col items-center">
              <div className="flex items-center space-x-3 mb-6">
                <div className="h-12 w-12">
                  <svg width="48" height="48" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="#050714"/>
                    <path d="M8 10L14 10C15.1046 10 16 10.8954 16 12L16 20C16 21.1046 15.1046 22 14 22L8 22L8 10Z" fill="#6D28D9"/>
                    <path d="M18 10L24 10L24 22L18 22C16.8954 22 16 21.1046 16 20L16 12C16 10.8954 16.8954 10 18 10Z" fill="#3B82F6"/>
                  </svg>
                </div>
                <span className="text-white font-display text-2xl font-bold">SLATEBOUND</span>
              </div>
              <div className="w-48 h-0.5 bg-dark-300 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  className="h-full bg-gradient-to-r from-primary-600 to-secondary-600"
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;