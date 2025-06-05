import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, Brain } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
  isLast?: boolean;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ icon, title, description, stepNumber, isLast = false }) => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, delay: stepNumber * 0.1 }}
        className="flex md:items-center flex-col md:flex-row"
      >
        <div className="flex-shrink-0 relative z-10">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 flex items-center justify-center text-white font-bold text-xl shadow-lg glow">
            {icon}
          </div>
        </div>
        <div className="md:ml-8 mt-6 md:mt-0 mb-12 md:mb-0 pl-6 md:pl-0">
          <div className="flex items-center mb-3">
            <span className="text-primary-400 text-lg font-semibold mr-3">0{stepNumber}.</span>
            <h3 className="text-xl font-bold text-white leading-tight">{title}</h3>
          </div>
          <p className="text-gray-400 whitespace-pre-line leading-relaxed">{description}</p>
        </div>
      </motion.div>
      {!isLast && (
        <div className="hidden md:block h-px w-full bg-gradient-to-r from-primary-600/40 via-secondary-600/20 to-transparent my-8"></div>
      )}
    </div>
  );
};

const Process: React.FC = () => {
  const steps = [
    {
      icon: <Shield size={24} />,
      title: 'Guarantee',
      description: "You don't win? We don't get paid.\nThat's not a slogan. It's our model.\nYou only pay for results. Not random promises.",
    },
    {
      icon: <Target size={24} />,
      title: 'Specialization > Generalization',
      description: "We don't do everything. We do what works.\nAds, funnels, automations only for the industries we know best.\nThat's how we force success.",
    },
    {
      icon: <Zap size={24} />,
      title: "You'll See Results in Days - Not Months",
      description: "While agencies 'strategize', we build. Fast.\nWe launch real campaigns within 7 days. Not 90.",
    },
    {
      icon: <Brain size={24} />,
      title: 'Scale Smart with Custom AI Systems',
      description: "Once leads are flowing, we install systems to save time and maximize profits.\nYou grow. We optimize. Everybody wins.",
    },
  ];

  return (
    <Section id="process" className="bg-dark-600">
      <SectionHeader
        title="What Makes Us Different?"
      />

      <div className="max-w-3xl mx-auto px-4 md:px-0">
        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
            stepNumber={index + 1}
            isLast={index === steps.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Process;