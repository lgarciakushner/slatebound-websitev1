import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullHeight?: boolean;
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  fullHeight = false
}) => {
  return (
    <section 
      id={id}
      className={`relative py-16 md:py-24 ${fullHeight ? 'min-h-screen flex items-center' : ''} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 md:px-6 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;