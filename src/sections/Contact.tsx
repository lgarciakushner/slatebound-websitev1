import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    question: '',
    source: '',
    spending: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hook.us2.make.com/vkqt8gw5nekjkgi7cqygi68gc35lnlwh', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        website: '',
        question: '',
        source: '',
        spending: '',
      });
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-dark-500">
      <SectionHeader
        title="Want a Free Marketing Gameplan?"
        subtitle="We'll show you exactly how to get more clients… or you walk away with the strategy."
      />

      <div className="flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <Card variant="gradient" className="p-8">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center justify-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      delay: 0.2
                    }}
                    className="w-16 h-16 rounded-full bg-primary-600 flex items-center justify-center mb-6"
                  >
                    <Check size={32} className="text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-bold text-white text-center mb-2"
                  >
                    Thank you!
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-gray-300 text-center"
                  >
                    You will be contacted soon.
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-2xl font-bold text-white mb-6">👇 Fill out the form below:</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="name" className="block text-gray-300 text-sm font-medium mb-2">
                          Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="John Doe"
                          aria-required="true"
                          autoComplete="name"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="email" className="block text-gray-300 text-sm font-medium mb-2">
                          Email*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="john@example.com"
                          aria-required="true"
                          autoComplete="email"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="company" className="block text-gray-300 text-sm font-medium mb-2">
                          Company Name*
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="Your Company"
                          autoComplete="organization"
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="phone" className="block text-gray-300 text-sm font-medium mb-2">
                          Phone Number*
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="+1 (555) 123-4567"
                          aria-required="true"
                          autoComplete="tel"
                        />
                      </div>
                    </div>
                    <div className="relative">
                      <label htmlFor="website" className="block text-gray-300 text-sm font-medium mb-2">
                        Website*
                      </label>
                      <input
                        type="text"
                        id="website"
                        name="website"
                        value={formState.website}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                        placeholder="example.com"
                        aria-required="true"
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="question" className="block text-gray-300 text-sm font-medium mb-2">
                        What's your #1 question right now?*
                      </label>
                      <textarea
                        id="question"
                        name="question"
                        value={formState.question}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 resize-y relative z-10"
                        placeholder="What's your biggest marketing challenge?"
                        aria-required="true"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="relative">
                        <label htmlFor="source" className="block text-gray-300 text-sm font-medium mb-2">
                          How did you find us?
                        </label>
                        <input
                          type="text"
                          id="source"
                          name="source"
                          value={formState.source}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="Google, LinkedIn, Referral, etc."
                        />
                      </div>
                      <div className="relative">
                        <label htmlFor="spending" className="block text-gray-300 text-sm font-medium mb-2">
                          Monthly Marketing Spend (USD)*
                        </label>
                        <input
                          type="text"
                          id="spending"
                          name="spending"
                          value={formState.spending}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2.5 bg-dark-400/90 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500 relative z-10"
                          placeholder="e.g. $5,000"
                        />
                      </div>
                    </div>
                    <div className="relative z-10">
                      <Button 
                        type="submit" 
                        variant="primary" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send'}
                      </Button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};

export default Contact;