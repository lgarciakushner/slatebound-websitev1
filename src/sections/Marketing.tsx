import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';

const Marketing: React.FC = () => {
  return (
    <Section className="relative">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white"
        >
          Marketing is important...
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto"
        >
          <p className="mb-4">...However, there are already 135 things on your to-do list.</p>
          <p>And they are all important!</p>
        </motion.div>
      </div>
    </Section>
  );
};

export default Marketing;