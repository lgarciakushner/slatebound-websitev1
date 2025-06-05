import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className = '',
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto' : ''} ${className}`}
    >
      <motion.h2
        variants={item}
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={item}
          className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;