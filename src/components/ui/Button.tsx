import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all rounded-md';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:brightness-110 hover:shadow-lg glow',
    secondary: 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white',
    outline: 'bg-transparent border-2 border-primary-500 text-primary-400 hover:bg-primary-900/20',
  };

  const sizeClasses = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2.5',
    lg: 'text-lg px-8 py-3',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const buttonContent = (
    <motion.span
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="flex items-center justify-center w-full h-full"
    >
      {children}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {buttonContent}
    </button>
  );
};

export default Button;