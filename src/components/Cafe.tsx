import React from 'react';
import { motion } from 'framer-motion';
import { Music, Star, Zap } from 'lucide-react';

const galleryItems = [
  'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/0A1D37/FFF8E7/png?text=Vibe+1',
  'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/F4B400/0A1D37/png?text=Vibe+2',
  'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/C35817/FFF8E7/png?text=Vibe+3',
  'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/0A1D37/FFF8E7/png?text=Vibe+4',
  'https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/F4B400/0A1D37/png?text=Vibe+5',
];

const Cafe: React.FC = () => {
  return (
    <section id="cafe" className="relative py-20 md:py-32 w-full overflow-hidden video-overlay">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        poster="https://img-wrapper.vercel.app/image?url=https://placehold.co/1920x1080/0A1D37/FFF8E7/png?text=Rooftop+Vibes"
      >
        <source src="https://www.pexels.com/video/drone-view-of-city-2028714/" type="video/mp4" />
      </video>

      <div className="relative z-10 container mx-auto px-6 text-center text-cream-white">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-4xl md:text-6xl font-bold mb-8"
        >
          Under the Udaipur Sky
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-poppins text-xl md:text-2xl mb-12"
        >
          Music, Magic, and Memories.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-royal-blue/70 backdrop-blur-md rounded-lg p-8 max-w-3xl mx-auto shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-saffron-gold">🎶🌌 Hey Night Nomads! 🌌🎶</h3>
          <p className="mb-4">Live Jamming, Fun Games, Rooftop View of Lake Pichola, and unforgettable vibes.</p>
          <p className="font-bold">📍 Whereabout Hostel Rooftop | 7 PM onwards</p>
          <a 
            href="https://wa.me/910000000000" // Replace with your WhatsApp number
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-saffron-gold text-royal-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 cursor-pointer shadow-lg"
          >
            Join the Vibe
          </a>
        </motion.div>
        
        <div className="mt-16">
          <div className="flex overflow-x-auto space-x-4 p-4 -mx-4 no-scrollbar">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="flex-shrink-0 w-64 h-48 rounded-lg overflow-hidden shadow-lg"
              >
                <img src={item} alt={`Gallery item ${index + 1}`} className="w-full h-full object-cover" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cafe;
