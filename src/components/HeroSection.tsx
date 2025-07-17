
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div className="absolute inset-0 bg-gradient-dark" style={{ opacity }} />
      
      {/* Enhanced floating elements */}
      <motion.div 
        className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-sm"
        variants={floatingVariants}
        animate="float"
      />
      <motion.div 
        className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full blur-sm"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/40 rounded-full blur-sm"
        variants={floatingVariants}
        animate="float"
        transition={{ delay: 2 }}
      />
      
      {/* Additional floating geometric shapes */}
      <motion.div 
        className="absolute top-1/3 right-1/4 w-8 h-8 bg-sapphire/20 rotate-45"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-tan/30 rounded-full"
        animate={{ scale: [1, 1.5, 1] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <motion.div 
        className="relative container mx-auto text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            style={{ y: y1 }}
          >
            <motion.span
              className="block mb-4"
              initial={{ rotateX: 90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Automate Data Engineering
            </motion.span>
            <motion.span 
              className="block animated-gradient bg-clip-text text-transparent text-shimmer"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100, 
                delay: 1,
                duration: 0.8
              }}
            >
              with Agentic AI
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed"
          variants={itemVariants}
          style={{ y: y2 }}
        >
          Meet DataPrep – the revolutionary AI tool that automates pipelines, wrangles schemas, 
          cleans data, and monitors flows while you sleep. Experience the future of data engineering.
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px hsla(210, 100%, 50%, 0.5)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-sapphire hover:shadow-sapphire transition-all duration-300 text-xl px-12 py-6 relative overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center">
                Get Early Access
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              size="lg" 
              className="text-accent border-accent hover:bg-accent hover:text-accent-foreground text-xl px-12 py-6 hover-lift"
            >
              <Play className="mr-3 h-6 w-6" />
              Watch Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Enhanced stats section */}
        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {[
            { value: "99.9%", label: "Pipeline Uptime" },
            { value: "10x", label: "Faster Deployment" },
            { value: "Zero", label: "Manual Intervention" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 + index * 0.2 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pulse rings around CTA */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="pulse-ring w-96 h-96" />
          <div className="pulse-ring w-96 h-96" style={{ animationDelay: '1s' }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
