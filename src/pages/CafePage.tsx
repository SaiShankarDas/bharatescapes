import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import FilmStripGallery from '../components/cafe/FilmStripGallery';

const galleryItems = [
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/0A1D37/FFF8E7/png?text=Vibe+1',
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/F4B400/0A1D37/png?text=Vibe+2',
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/C35817/FFF8E7/png?text=Vibe+3',
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/0A1D37/FFF8E7/png?text=Vibe+4',
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/F4B400/0A1D37/png?text=Vibe+5',
  'https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/400x300/C35817/FFF8E7/png?text=Vibe+6',
];

const CafePage: React.FC = () => {
  return (
    <PageTransition>
      <section id="cafe" className="relative py-32 md:py-40 w-full overflow-hidden video-overlay">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          poster="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/1920x1080/0A1D37/FFF8E7/png?text=Rooftop+Vibes"
        >
          {/* Updated video link to a reliable CDN */}
          <source src="https://videos.pexels.com/video-files/8065359/8065359-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 container mx-auto px-6 text-center text-cream-white">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl font-bold mb-4"
          >
            Under the Udaipur Sky
          </motion.h1>
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
            className="bg-royal-blue/70 backdrop-blur-md rounded-lg p-8 md:p-12 max-w-3xl mx-auto shadow-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-saffron-gold">🎶🌌 Hey Night Nomads! 🌌🎶</h3>
            <p className="md:text-lg mb-6">Live Jamming, Fun Games, Rooftop View of Lake Pichola, and unforgettable vibes.</p>
            <p className="font-bold md:text-lg">📍 Whereabout Hostel Rooftop | 7 PM onwards</p>
            <a 
              href="https://wa.me/910000000000" // Replace with your WhatsApp number
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-saffron-gold text-royal-blue font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition-all duration-300 cursor-pointer shadow-lg"
            >
              Join the Vibe
            </a>
          </motion.div>
        </div>
      </section>
      <div className="bg-royal-blue py-16">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-playfair font-bold text-center mb-10 text-saffron-gold">Gallery of Good Times</h2>
        </div>
        <FilmStripGallery images={galleryItems} speed={40} />
      </div>
    </PageTransition>
  );
};

export default CafePage;
