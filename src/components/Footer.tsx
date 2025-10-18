import React from 'react';
import { Instagram, Youtube, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      id="footer" 
      className="bg-royal-blue text-cream-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4 text-saffron-gold">Bharatescapes</h3>
            <p className="text-cream-white/70">Royal experiences, breathtaking landscapes, and soulful escapes in Udaipur.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-saffron-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/tours" className="hover:text-saffron-gold transition-colors text-cream-white/70">Tours</Link></li>
              <li><Link to="/stays" className="hover:text-saffron-gold transition-colors text-cream-white/70">Stays</Link></li>
              <li><Link to="/cafe" className="hover:text-saffron-gold transition-colors text-cream-white/70">Café</Link></li>
              <li><Link to="/contact" className="hover:text-saffron-gold transition-colors text-cream-white/70">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 text-saffron-gold">Follow Our Journey</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-gold transition-colors"><Instagram size={24} /></a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-gold transition-colors"><Youtube size={24} /></a>
              <a href="https://wa.me/910000000000" target="_blank" rel="noopener noreferrer" className="hover:text-saffron-gold transition-colors"><MessageCircle size={24} /></a>
            </div>
          </div>
        </div>

        <div className="text-center py-8 mt-8 border-t border-cream-white/20">
          <p className="text-cream-white/60">&copy; {new Date().getFullYear()} Bharatescapes | All Rights Reserved</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
