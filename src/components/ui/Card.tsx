import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'outline';
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hoverEffect = true,
}) => {
  const baseClasses = 'rounded-xl p-6 backdrop-blur-sm';
  
  const variantClasses = {
    default: 'bg-dark-300/80',
    gradient: 'gradient-border bg-dark-400/60',
    outline: 'border border-gray-800 bg-dark-500/60',
  };
  
  const hoverClasses = hoverEffect 
    ? 'hover:shadow-lg hover:shadow-primary-900/10 transition-all duration-300' 
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${className}`;

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
      className={classes}
    >
      {children}
    </motion.div>
  );
};

export default Card;