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
      description: "You could... if you've got zero clients and nothing but time. But once business picks up? Marketing gets shoved to the back. Things fall through the cracks. Leads dry up. And now you're working overtime just to stay stuck.",
      delay: 1
    },
    {
      icon: <Wrench size={24} />,
      title: 'Hire in-house?',
      description: "Hope you like stress because finding someone good is already hard. Training takes time. Then they quit in 3 months… and you're back to square one, burned out and behind.",
      delay: 2
    },
    {
      icon: <DollarSign size={24} />,
      title: 'Hire an agency?',
      description: "Unless you're paying $10K+ p/month, you're just another number like \"Client #53\". Some random intern runs your account, sends weird late reports, and calls it a win. No real growth. No proven systems.",
      delay: 3
    },
    {
      icon: <Bot size={24} />,
      title: 'Learn AI and automations?',
      description: "Sounds smart, until you're stuck watching YouTube videos at 2AM. New tools pop up every day. Most are confusing as hell. And unless you've got weeks to figure it out, it's a full-time job. Spoiler: You already have one.",
      delay: 4
    }
  ];

  return (
    <Section id="services" className="relative">
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
    </Section>
  );
};

export default Services;