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
                <img src="/image.png" alt="Slatebound" className="h-12 w-auto" />
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