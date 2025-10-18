import React from 'react';
import PageTransition from '../components/PageTransition';
import TourRoadmap from '../components/tour/TourRoadmap';
import { motion } from 'framer-motion';
import { toursData } from '../data/toursData';

const ToursPage: React.FC = () => {
  return (
    <PageTransition>
      <div className="bg-cream-white pt-32 pb-20">
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 px-6"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-royal-blue">Our Signature Tours</h1>
          <p className="text-lg md:text-xl text-royal-blue/80 max-w-3xl mx-auto mt-4">Follow the path to unforgettable memories. Each tour is a chapter in your Udaipur story, designed to reveal the city's heart and soul.</p>
        </motion.div>
        
        <div className="space-y-24">
            {/* Morning Tour */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-terracotta">🌅 Morning Adventure Tour</h2>
                <TourRoadmap tours={toursData.morning} />
            </section>

            {/* Evening Tour */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-royal-blue">🌇 Evening Heritage & Sunset Tour</h2>
                <TourRoadmap tours={toursData.evening} />
            </section>

            {/* Day Itinerary */}
            <section>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center mb-12 text-saffron-gold">🕌 Day Itinerary — Explore Udaipur Like a Local</h2>
                <TourRoadmap tours={toursData.day} />
            </section>
        </div>
      </div>
    </PageTransition>
  );
};

export default ToursPage;
