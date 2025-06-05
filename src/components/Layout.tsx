import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="min-h-screen bg-dark-600 relative">
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
      <div className="fixed inset-0 bg-gradient-to-b from-primary-900/30 via-transparent to-secondary-900/20 pointer-events-none"></div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <Navbar scrolled={scrolled} />
        <main className="relative">{children}</main>
        <Footer />
      </motion.div>
    </div>
  );
};

export default Layout;