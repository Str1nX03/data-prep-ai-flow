
import { useState, useEffect } from 'react';
import ParticleField from '@/components/ParticleField';
import InteractiveBackground from '@/components/InteractiveBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import { motion } from 'framer-motion';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleField />
      <InteractiveBackground />
      
      <Navigation />
      <HeroSection />
      <AboutSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CTASection />

      {/* Enhanced Footer */}
      <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-border relative">
        <div className="container mx-auto">
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="mb-6 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-3xl font-bold animated-gradient bg-clip-text text-transparent">
                DataPrep
              </span>
            </motion.div>
            
            <div className="flex space-x-8 text-sm">
              {['Privacy', 'Terms', 'Contact', 'Blog', 'Docs'].map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-tan hover:text-accent transition-colors relative"
                  whileHover={{ scale: 1.1, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p>&copy; 2024 DataPrep. All rights reserved. Built with AI for the future of data engineering.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
