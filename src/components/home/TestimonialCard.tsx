import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Testimonial } from '../../data/testimonialsData';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-cream-white/60 backdrop-blur-sm p-6 rounded-lg shadow-lg border border-black/5 flex flex-col items-center text-center"
    >
      <img 
        src={testimonial.image} 
        alt={testimonial.name} 
        className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-saffron-gold/50 shadow-md"
      />
      <h3 className="font-playfair text-xl font-bold text-royal-blue">{testimonial.name}</h3>
      <p className="text-sm text-royal-blue/60 mb-3">{testimonial.location}</p>
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < testimonial.rating ? 'text-saffron-gold fill-current' : 'text-saffron-gold/30'}`} 
          />
        ))}
      </div>
      <p className="text-royal-blue/80 italic">"{testimonial.quote}"</p>
    </motion.div>
  );
};

export default TestimonialCard;
