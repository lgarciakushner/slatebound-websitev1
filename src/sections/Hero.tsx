import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Hero: React.FC = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-dark-600 bg-grid-pattern opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-dark-600 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-96 h-96 bg-primary-600/20 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-secondary-600/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <div className="lg:w-3/5 mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-primary-900/30 border border-primary-700/30 text-primary-400 text-sm font-medium mb-6"
            >
              Clarity. Strategy. Conversion.
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Scale Smarter.
              <span className="gradient-text glow-text"> Get Clients Faster.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl"
            >
              If you don't get results in 30 days, we work for free. Simple.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <Button href="#contact" variant="primary" size="lg">
                Free Marketing Gameplan
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button href="#process" variant="outline" size="lg">
                Who Are We?
              </Button>
            </motion.div>
          </div>

          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="relative w-full max-w-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl filter blur-xl transform rotate-3 scale-105"></div>
              <div className="relative bg-dark-400/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-gray-400 text-sm">Dashboard</div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-white font-semibold">Campaign Performance</h3>
                      <span className="text-green-500 text-sm font-medium">+24.8%</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="w-full bg-dark-300 rounded-full h-2.5">
                        <div className="bg-primary-600 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <div className="w-full bg-dark-300 rounded-full h-2.5">
                        <div className="bg-secondary-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="w-full bg-dark-300 rounded-full h-2.5">
                        <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-dark-300 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Conversion Rate</p>
                      <p className="text-white text-xl font-bold">12.8%</p>
                      <p className="text-green-500 text-xs">↑ 3.2%</p>
                    </div>
                    <div className="bg-dark-300 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Avg. ROI</p>
                      <p className="text-white text-xl font-bold">416%</p>
                      <p className="text-green-500 text-xs">↑ 8.7%</p>
                    </div>
                    <div className="bg-dark-300 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Active Leads</p>
                      <p className="text-white text-xl font-bold">1,294</p>
                      <p className="text-green-500 text-xs">↑ 12.3%</p>
                    </div>
                    <div className="bg-dark-300 rounded-lg p-4">
                      <p className="text-gray-400 text-sm mb-1">Ad Spend</p>
                      <p className="text-white text-xl font-bold">$5,842</p>
                      <p className="text-red-500 text-xs">↓ 2.1%</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;