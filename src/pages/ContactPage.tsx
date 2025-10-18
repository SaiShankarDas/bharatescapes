import React from 'react';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <PageTransition>
      <div className="bg-cream-white pt-32 pb-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-playfair font-bold text-royal-blue">Get In Touch</h1>
            <p className="text-lg md:text-xl text-royal-blue/80 max-w-3xl mx-auto mt-4">Have questions or ready to book your escape? Send us a message, and we'll help you craft your perfect Udaipur journey.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-terracotta">Plan My Escape</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="text-sm font-bold text-royal-blue/80">Name</label>
                    <input id="name" type="text" placeholder="Your full name" className="mt-1 w-full p-3 bg-white border border-royal-blue/20 rounded-md placeholder-royal-blue/50 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
                </div>
                <div>
                    <label htmlFor="email" className="text-sm font-bold text-royal-blue/80">Email</label>
                    <input id="email" type="email" placeholder="Your email address" className="mt-1 w-full p-3 bg-white border border-royal-blue/20 rounded-md placeholder-royal-blue/50 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
                </div>
                <div>
                    <label htmlFor="dates" className="text-sm font-bold text-royal-blue/80">Travel Dates</label>
                    <input id="dates" type="text" placeholder="e.g., October 2025" className="mt-1 w-full p-3 bg-white border border-royal-blue/20 rounded-md placeholder-royal-blue/50 focus:outline-none focus:ring-2 focus:ring-saffron-gold" />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm font-bold text-royal-blue/80">Message</label>
                    <textarea id="message" placeholder="Tell us about your dream trip..." rows={5} className="mt-1 w-full p-3 bg-white border border-royal-blue/20 rounded-md placeholder-royal-blue/50 focus:outline-none focus:ring-2 focus:ring-saffron-gold"></textarea>
                </div>
                <button type="submit" className="w-full bg-saffron-gold text-royal-blue font-bold py-3 px-6 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg">
                  Send Inquiry
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-terracotta">Find Us in Udaipur</h2>
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116033.55729938061!2d73.6501450431327!3d24.59602493976856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e56550a14411%3A0xdbd8c28455b868b0!2sUdaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1678886543210!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default ContactPage;
