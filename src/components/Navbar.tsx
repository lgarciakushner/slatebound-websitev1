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
            <img src="/image.png" alt="Slatebound" className="h-8 w-auto" />
            <span className="text-white font-display text-xl font-bold">SLATEBOUND</span>
          </a>

          <button className="text-white" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center space-x-8">
          <a href="#" className="flex items-center space-x-2">
            <img src="/image.png" alt="Slatebound" className="h-8 w-auto" />
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