import React from 'react';
import { motion } from 'framer-motion';
import { User, Wrench, DollarSign, Bot } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card variant="gradient" className="h-full">
        <div className="p-2 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 rounded-lg inline-block mb-4">
          <div className="w-10 h-10 flex items-center justify-center text-primary-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </Card>
    </motion.div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <User size={24} />,
      title: 'Do it all yourself?',
      description: 'Sure, if you\'ve got unlimited time, energy, and zero clients.\nBut when marketing isn\'t the top priority, it gets half-assed.\nNot scalable nor sustainable… Unless you want to become a full-time marketer.',
      delay: 1
    },
    {
      icon: <Wrench size={24} />,
      title: 'Hire in-house?',
      description: 'Good luck finding someone who actually knows what they\'re doing.\nTraining takes time. Payroll adds pressure.\nAnd if they leave in 3 months, you\'re back to square one.',
      delay: 2
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Hire an agency?',
      description: 'Unless you\'re paying $10k+ a month, you\'ll end up being \'Client #47\' on some junior account manager\'s list.\n1 year on \'delivered.\' Low attention. Zero proven systems.',
      delay: 3
    },
    {
      icon: <Bot size={24} />,
      title: 'Learn automations and AI?',
      description: 'AI is ever evolving, new tools are coming each day.\nYou could spend weeks figuring out all the no-code tools and systems...\nBut let\'s be honest, they are confusing.',
      delay: 4
    }
  ];

  return (
    <Section id="services" className="relative">
      <div className="absolute inset-0 bg-dark-500/95"></div>
      <div className="relative z-10">
        <SectionHeader
          title="So… How Do You Actually Get the Most Out of Your Marketing?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Services;