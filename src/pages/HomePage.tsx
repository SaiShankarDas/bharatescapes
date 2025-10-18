import React from 'react';
import PageTransition from '../components/PageTransition';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BedDouble, Coffee, Map, Castle, Ship, MessageSquare, HeartHandshake } from 'lucide-react';
import DomeGallery from '../components/dome/DomeGallery';
import { galleryImages } from '../data/galleryImages';
import WhyChooseCard from '../components/home/WhyChooseCard';
import TestimonialCard from '../components/home/TestimonialCard';
import { testimonialsData } from '../data/testimonialsData';

const summaryData = [
    {
        icon: Map,
        title: "Curated Tours",
        description: "From sunrise panoramas to heritage walks, our tours are crafted to immerse you in Udaipur's magic.",
        link: "/tours",
        image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/C35817/FFF8E7/png?text=Tours"
    },
    {
        icon: BedDouble,
        title: "Exclusive Stays",
        description: "Rest in handpicked accommodations that blend royal comfort with the heart of local culture.",
        link: "/stays",
        image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/0A1D37/FFF8E7/png?text=Stays"
    },
    {
        icon: Coffee,
        title: "Vibrant Café Life",
        description: "Experience Udaipur's nightlife with live music, rooftop views, and unforgettable vibes.",
        link: "/cafe",
        image: "https://img-wrapper.vercel.app/image?url=https://img-wrapper.vercel.app/image?url=https://placehold.co/600x800/F4B400/0A1D37/png?text=Café"
    }
];

const whyChooseData = [
    {
        icon: Castle,
        title: "Authentic Local Experiences",
        description: "We go beyond the tourist spots to show you the real, vibrant heart of Udaipur."
    },
    {
        icon: HeartHandshake,
        title: "Handpicked Stays & Cafés",
        description: "Every place is chosen for its character, comfort, and connection to local culture."
    },
    {
        icon: Ship,
        title: "Private Royal Tours",
        description: "Experience Udaipur's grandeur with exclusive tours tailored to your pace and interests."
    },
    {
        icon: MessageSquare,
        title: "24/7 Concierge Support",
        description: "From booking to departure, our team is always here to ensure a seamless journey."
    }
];

const HomePage: React.FC = () => {
  return (
    <PageTransition>
      <Hero />
      <section className="py-20 md:py-28 bg-cream-white">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-royal-blue transition-all duration-500 hover:text-saffron-gold hover:drop-shadow-[0_0_15px_rgba(212,164,55,0.3)]">Your Royal Escape Awaits</h2>
                <p className="text-lg text-royal-blue/80">Bharatescapes is more than a tour—it's a story. We curate every moment to connect you with the soul of Udaipur, from its majestic palaces to its hidden gems.</p>
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-12 mt-20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {summaryData.map((item) => (
                    <motion.div 
                        key={item.title}
                        variants={{
                            hidden: { opacity: 0, y: 30 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
                        }}
                        className="group relative flex flex-col"
                    >
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-xl">
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>
                        <div className="bg-cream-white shadow-xl rounded-lg p-6 -mt-16 z-10 mx-4 flex-grow">
                            <div className="flex items-center mb-3">
                                <item.icon className="h-6 w-6 text-saffron-gold mr-3" />
                                <h3 className="font-playfair text-2xl font-bold text-royal-blue">{item.title}</h3>
                            </div>
                            <p className="text-royal-blue/80 mb-4">{item.description}</p>
                            <Link to={item.link} className="font-bold text-terracotta hover:text-saffron-gold transition-colors duration-300 inline-flex items-center">
                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-royal-blue/5">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-royal-blue transition-all duration-500 hover:text-saffron-gold hover:drop-shadow-[0_0_15px_rgba(212,164,55,0.3)]">Why Choose Bharatescapes?</h2>
            </motion.div>

            <motion.div 
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.15 }}
            >
                {whyChooseData.map((item) => (
                    <WhyChooseCard key={item.title} {...item} />
                ))}
            </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-royal-blue text-cream-white overflow-hidden">
        <div className="container mx-auto px-6 text-center">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-cream-white to-saffron-gold transition-all duration-500 hover:drop-shadow-[0_0_20px_rgba(212,164,55,0.4)]"
            >
                Glimpses of Udaipur
            </motion.h2>
            <motion.p 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
                className="text-lg text-cream-white/80 max-w-3xl mx-auto"
            >
                A whirlwind tour through the vibrant streets, serene lakes, and majestic palaces of the City of Lakes.
            </motion.p>
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
            className="w-full h-[80vh] md:h-screen mt-12"
        >
            <DomeGallery 
                images={galleryImages}
                grayscale={false}
                overlayBlurColor="#0c1a33"
                imageBorderRadius="12px"
                openedImageBorderRadius="20px"
            />
        </motion.div>
      </section>
      
      <section className="py-20 md:py-28 bg-cream-white">
        <div className="container mx-auto px-6">
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center max-w-3xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-royal-blue transition-all duration-500 hover:text-saffron-gold hover:drop-shadow-[0_0_15px_rgba(212,164,55,0.3)]">Stories From Our Guests</h2>
            </motion.div>

            <motion.div 
                className="grid md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {testimonialsData.map((testimonial) => (
                    <TestimonialCard key={testimonial.name} testimonial={testimonial} />
                ))}
            </motion.div>
        </div>
      </section>

      <section className="bg-cream-white pb-20 md:pb-28">
        <div className="container mx-auto px-6">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative bg-royal-blue text-cream-white rounded-lg shadow-2xl p-10 md:p-16 text-center overflow-hidden"
            >
                <div className="relative z-10">
                    <h3 className="text-xl font-playfair font-bold text-saffron-gold mb-2">Our Story</h3>
                    <p className="text-lg md:text-xl text-cream-white/80 max-w-3xl mx-auto">
                        “Born from a passion to share Udaipur’s royal charm, Bharatescapes curates soulful experiences blending tradition, comfort, and authenticity.”
                    </p>
                </div>
            </motion.div>
        </div>
      </section>

      <section className="bg-royal-blue">
        <div className="container mx-auto px-6 py-16 md:py-20">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center"
            >
                <h2 className="text-3xl md:text-4xl font-playfair font-bold text-cream-white mb-6">Ready to plan your royal getaway?</h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-saffron-gold text-royal-blue font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
                    >
                        📅 Plan My Trip
                    </Link>
                    <a
                        href="https://wa.me/910000000000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group w-full sm:w-auto inline-flex items-center justify-center bg-transparent border-2 border-saffron-gold text-saffron-gold font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 cursor-pointer hover:bg-saffron-gold hover:text-royal-blue hover:scale-105"
                    >
                        💬 Chat on WhatsApp
                    </a>
                </div>
            </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default HomePage;
