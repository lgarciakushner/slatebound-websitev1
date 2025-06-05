import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass shadow-lg' : 'py-5 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center md:hidden">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 relative">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#050714"/>
                <path d="M8 10L14 10C15.1046 10 16 10.8954 16 12L16 20C16 21.1046 15.1046 22 14 22L8 22L8 10Z" fill="#6D28D9"/>
                <path d="M18 10L24 10L24 22L18 22C16.8954 22 16 21.1046 16 20L16 12C16 10.8954 16.8954 10 18 10Z" fill="#3B82F6"/>
              </svg>
            </div>
            <span className="text-white font-display text-xl font-bold">SLATEBOUND</span>
          </a>

          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <a href="#" className="flex items-center space-x-2">
            <div className="h-8 w-8 relative">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="32" height="32" rx="8" fill="#050714"/>
                <path d="M8 10L14 10C15.1046 10 16 10.8954 16 12L16 20C16 21.1046 15.1046 22 14 22L8 22L8 10Z" fill="#6D28D9"/>
                <path d="M18 10L24 10L24 22L18 22C16.8954 22 16 21.1046 16 20L16 12C16 10.8954 16.8954 10 18 10Z" fill="#3B82F6"/>
              </svg>
            </div>
            <span className="text-white font-display text-xl font-bold">SLATEBOUND</span>
          </a>
          <Button href="#contact" variant="primary" size="md">
            Book a Call
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass shadow-lg"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Button href="#contact" variant="primary" size="md" className="mt-4" onClick={toggleMenu}>
                Book a Call
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Navbar;