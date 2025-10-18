import React from 'react';
import { motion } from 'framer-motion';
import { LucideProps } from 'lucide-react';

interface WhyChooseCardProps {
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <motion.div 
      variants={cardVariants}
      className="text-center p-6"
    >
      <div className="flex items-center justify-center mb-4">
        <div className="bg-saffron-gold/10 p-4 rounded-full">
          <Icon className="h-8 w-8 text-saffron-gold" />
        </div>
      </div>
      <h3 className="font-playfair text-2xl font-bold text-royal-blue mb-2">{title}</h3>
      <p className="text-royal-blue/70">{description}</p>
    </motion.div>
  );
};

export default WhyChooseCard;
