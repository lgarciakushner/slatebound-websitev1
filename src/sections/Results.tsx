import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionHeader from '../components/ui/SectionHeader';
import Card from '../components/ui/Card';

interface ResultCardProps {
  percentage: string;
  title: string;
  delay: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ percentage, title, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Card variant="default" className="text-center py-8">
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 gradient-text">{percentage}</h3>
        <p className="text-gray-400">{title}</p>
      </Card>
    </motion.div>
  );
};

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
    >
      <Card variant="gradient" className="h-full">
        <div className="text-primary-400 mb-4">
          <Quote size={28} />
        </div>
        <p className="text-gray-300 mb-6">{quote}</p>
        <div>
          <p className="text-white font-semibold">{author}</p>
          <p className="text-gray-400 text-sm">
            {position}, {company}
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

const Results: React.FC = () => {
  const results = [
    { percentage: '+285%', title: 'Average ROAS', delay: 1 },
    { percentage: '+143%', title: 'Conversion Rate', delay: 2 },
    { percentage: '-32%', title: 'Customer Acquisition Cost', delay: 3 },
    { percentage: '+87%', title: 'Qualified Leads', delay: 4 },
  ];

  const testimonials = [
    {
      quote: "SLATEBOUND transformed our marketing approach. Within 3 months, our lead quality improved dramatically while our acquisition costs decreased by 40%.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechFusion Inc."
    },
    {
      quote: "Their data-driven approach and focus on measurable results has been refreshing. Our e-commerce sales have increased by 210% since implementing their strategies.",
      author: "Michael Chen",
      position: "CEO",
      company: "Evolve Commerce"
    },
    {
      quote: "The team at SLATEBOUND doesn't just execute campaigns – they become true partners in your business growth. They've helped us scale from 6 to 8 figures in 18 months.",
      author: "Rebecca Martinez",
      position: "Founder",
      company: "HealthPrime"
    }
  ];

  return (
    <Section id="results" className="bg-dark-500">
      <SectionHeader
        title="Client Results"
        subtitle="We measure our success by the results we deliver for our clients."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {results.map((result, index) => (
          <ResultCard
            key={index}
            percentage={result.percentage}
            title={result.title}
            delay={result.delay}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            quote={testimonial.quote}
            author={testimonial.author}
            position={testimonial.position}
            company={testimonial.company}
          />
        ))}
      </div>
    </Section>
  );
};

export default Results;