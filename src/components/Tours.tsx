import React from 'react';
import { motion } from 'framer-motion';
import TourCard from './TourCard';

const toursData = {
  morning: [
    { title: 'Rayta Hills', caption: 'Serene mountain curves and sunrise panoramas.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Rayta+Hills' },
    { title: 'Secret Waterfall', caption: 'Hidden oasis surrounded by lush greenery.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Waterfall' },
    { title: 'Badi Lake', caption: 'Calm waters reflecting the Aravallis.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Badi+Lake' },
    { title: 'Bahubali Hills', caption: 'Udaipur’s most Instagrammed hilltop view.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Bahubali+Hills' },
  ],
  evening: [
    { title: 'Train Ride', caption: 'Scenic route through the Aravalli foothills.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Train+Ride' },
    { title: 'Karni Mata Temple', caption: 'Ropeway view and divine sunset.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Karni+Mata' },
    { title: 'City Wall', caption: 'Panoramic skyline of old Udaipur.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=City+Wall' },
    { title: '360° Viewpoint', caption: 'Breathtaking aerial perspective.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=360+View' },
  ],
  day: [
    { title: 'City Palace', caption: 'Grandeur and royal heritage.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=City+Palace' },
    { title: 'Jagdish Temple', caption: '1651 marvel with divine charm.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Jagdish+Temple' },
    { title: 'Lal Ghat', caption: 'Calm waterfront for peace and reflection.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/0A1D37/FFF8E7/png?text=Lal+Ghat' },
    { title: 'Gangaur Ghat', caption: 'Iconic lakeside photo spot.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/F4B400/0A1D37/png?text=Gangaur+Ghat' },
    { title: 'Amrai Ghat', caption: 'Peaceful sunset view of palaces.', img: 'https://img-wrapper.vercel.app/image?url=https://placehold.co/600x400/C35817/FFF8E7/png?text=Amrai+Ghat' },
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

const Tours: React.FC = () => {
  return (
    <section id="tours" className="py-20 md:py-28 bg-cream-white">
      <div className="container mx-auto px-6">
        {/* Morning Tour */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-terracotta">🌅 Morning Adventure Tour</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {toursData.morning.map((tour, index) => <TourCard key={index} {...tour} />)}
          </div>
        </motion.div>

        {/* Evening Tour */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} className="mb-20">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-royal-blue">🌇 Evening Heritage & Sunset Tour</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
            {toursData.evening.map((tour, index) => <TourCard key={index} {...tour} />)}
          </div>
        </motion.div>

        {/* Day Itinerary */}
        <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-4 text-saffron-gold">🕌 Explore Udaipur Like a Local</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mt-10">
            {toursData.day.map((tour, index) => <TourCard key={index} {...tour} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Tours;
