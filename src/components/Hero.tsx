import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "40%"]);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden video-overlay">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        poster="https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/1920x1080/0A1D37/FFF8E7/png?text=Loading+Video..."
      >
        {/* Updated video link to a reliable CDN */}
        <source src="https://www.pexels.com/video/drone-view-of-city-2028714/" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-cream-white px-4">
        <motion.div style={{ y }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30, letterSpacing: '4px' }}
            animate={{ opacity: 1, y: 0, letterSpacing: '0px' }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-cream-white to-saffron-gold/80 transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(212,164,55,0.4)]"
          >
            Explore Udaipur with Bharatescapes
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.8 }}
            className="font-poppins text-lg md:text-2xl max-w-3xl mx-auto mb-8"
          >
            Royal experiences, breathtaking landscapes, and soulful escapes.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 10px 30px rgba(212, 164, 55, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/tours"
              className="group inline-flex items-center bg-saffron-gold text-royal-blue font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 cursor-pointer"
            >
              View Tours <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
