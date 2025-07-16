import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ParticleField from '@/components/ParticleField';
import InteractiveBackground from '@/components/InteractiveBackground';
import { 
  Database, 
  Sparkles, 
  Settings, 
  BarChart3, 
  Upload, 
  Brain, 
  CheckCircle,
  Menu,
  X,
  Play,
  ArrowRight,
  Shield,
  Zap,
  GitBranch,
  Cpu,
  Eye,
  Layers,
  Workflow
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Transform values for parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access signup:', email);
    setEmail('');
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  } as const;

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
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
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleField />
      <InteractiveBackground />
      
      {/* Enhanced Navigation */}
      <motion.nav 
        className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-xl border-b border-border/50"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-bold animated-gradient bg-clip-text text-transparent">
                DataPrep
              </span>
            </motion.div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['Home', 'About', 'Features', 'How It Works'].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-muted-foreground hover:text-accent transition-colors relative"
                    whileHover={{ scale: 1.1 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground hover-lift">
                    Get Early Access
                  </Button>
                </motion.div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className="md:hidden bg-card/95 backdrop-blur-lg border-b border-border"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0, 
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Features', 'How It Works'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="block px-3 py-2 text-muted-foreground hover:text-accent transition-colors"
                whileHover={{ x: 10 }}
              >
                {item}
              </motion.a>
            ))}
            <Button variant="outline" className="w-full mt-2 text-accent border-accent hover:bg-accent hover:text-accent-foreground">
              Get Early Access
            </Button>
          </div>
        </motion.div>
      </motion.nav>

      {/* Revolutionary Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-dark" style={{ opacity }} />
        
        {/* Dynamic floating elements */}
        <motion.div 
          className="absolute top-20 left-10 w-20 h-20 bg-primary/30 rounded-full blur-sm"
          style={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          variants={floatingVariants}
          animate="float"
        />
        <motion.div 
          className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-full blur-sm"
          style={{
            x: mousePosition.x * -0.015,
            y: mousePosition.y * -0.015,
          }}
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/40 rounded-full blur-sm"
          style={{
            x: mousePosition.x * 0.01,
            y: mousePosition.y * 0.01,
          }}
          variants={floatingVariants}
          animate="float"
          transition={{ delay: 2 }}
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

          {/* Pulse rings around CTA */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <div className="pulse-ring w-96 h-96" />
            <div className="pulse-ring w-96 h-96" style={{ animationDelay: '1s' }} />
          </div>
        </motion.div>
      </section>

      {/* Enhanced What is DataPrep Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              What is <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.1 }}
                style={{ display: 'inline-block' }}
              >
                DataPrep
              </motion.span>?
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Agentic AI that builds your data pipelines while you sleep. 
              No more manual schema mapping, data cleaning nightmares, or pipeline debugging sessions.
            </motion.p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: Brain, title: "Intelligent Automation", description: "Our AI agents understand your data patterns and automatically create optimized pipelines.", delay: 0 },
              { icon: Zap, title: "Lightning Fast", description: "Deploy complex data workflows in minutes, not weeks. Scale automatically as your data grows.", delay: 0.2 },
              { icon: Shield, title: "Enterprise Ready", description: "Built with security, compliance, and enterprise-grade reliability from day one.", delay: 0.4 }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div 
                  className="w-20 h-20 bg-gradient-sapphire rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-sapphire transition-all duration-300"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <item.icon className="h-10 w-10 text-white" />
                </motion.div>
                <motion.h3 
                  className="text-2xl font-semibold mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {item.title}
                </motion.h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Revolutionary How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three revolutionary steps to transform your data engineering workflow forever
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: 1, icon: Upload, title: "Connect Your Data", description: "Upload files, connect databases, or link APIs. DataPrep automatically discovers your data structure and relationships with AI-powered intelligence.", delay: 0 },
              { number: 2, icon: Settings, title: "Choose Your Intent", description: "Tell us your goal: ETL transformation, data warehousing, pipeline auditing, or real-time analytics. Our AI understands your needs.", delay: 0.2 },
              { number: 3, icon: Sparkles, title: "AI Does the Rest", description: "Our agentic AI builds, deploys, and monitors your entire data pipeline automatically. Sit back and watch the magic unfold.", delay: 0.4 }
            ].map((step) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: step.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="bg-card border-border hover:shadow-glow transition-all duration-500 hover-lift overflow-hidden relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-sapphire opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  />
                  <CardHeader className="text-center relative z-10">
                    <motion.div 
                      className="w-16 h-16 bg-gradient-sapphire rounded-full mx-auto mb-6 flex items-center justify-center relative"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <span className="text-2xl font-bold text-white">{step.number}</span>
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                    <CardTitle className="flex items-center justify-center gap-3 text-xl">
                      <step.icon className="h-6 w-6 text-primary" />
                      {step.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-lg leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Spectacular Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to revolutionize your data engineering workflow
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Database, title: "Intelligent Schema Matching", description: "Automatically map and transform schemas across different data sources with AI precision", delay: 0 },
              { icon: Sparkles, title: "Smart Data Cleaning", description: "AI-powered data quality checks and automatic anomaly detection that never sleeps", delay: 0.1 },
              { icon: GitBranch, title: "Auto Pipeline Deployment", description: "Deploy production-ready pipelines with built-in error handling and optimization", delay: 0.2 },
              { icon: BarChart3, title: "Data Health Monitoring", description: "Real-time monitoring with intelligent alerts and predictive recommendations", delay: 0.3 },
              { icon: Cpu, title: "Neural Processing", description: "Advanced neural networks that learn from your data patterns and optimize continuously", delay: 0.4 },
              { icon: Eye, title: "Predictive Analytics", description: "Forecast data issues before they happen with our cutting-edge AI algorithms", delay: 0.5 },
              { icon: Layers, title: "Multi-Layer Security", description: "Enterprise-grade security with encryption, compliance, and audit trails built-in", delay: 0.6 },
              { icon: Workflow, title: "Adaptive Workflows", description: "Self-healing pipelines that adapt to changing data patterns automatically", delay: 0.7 }
            ].map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: feature.delay }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="bg-secondary border-border hover:shadow-glow transition-all duration-500 h-full hover-lift">
                  <CardHeader>
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                    </motion.div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Epic CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 70%, hsla(210, 100%, 50%, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsla(240, 100%, 60%, 0.3) 0%, transparent 50%)'
          }}
        />
        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-8"
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Join the Future of <span className="text-primary animated-gradient bg-clip-text text-transparent">Data Engineering</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Be among the first to experience the power of agentic AI for data engineering. 
              Get early access and transform your workflow today. The future starts now.
            </motion.p>
            
            <motion.form 
              onSubmit={handleSubmit} 
              className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex-1"
                whileFocus={{ scale: 1.02 }}
              >
                <Input
                  type="email"
                  placeholder="Enter your email to join the revolution"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary/80 border-border text-foreground placeholder:text-muted-foreground backdrop-blur-sm text-lg py-6 hover-lift"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  type="submit" 
                  className="bg-gradient-sapphire hover:shadow-sapphire transition-all duration-300 text-lg px-8 py-6 relative overflow-hidden group"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                  <span className="relative z-10">Join Waitlist</span>
                </Button>
              </motion.div>
            </motion.form>
            
            <motion.p 
              className="text-sm text-muted-foreground mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              We respect your privacy. Unsubscribe at any time. No spam, just pure innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

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
              {['Privacy', 'Terms', 'Contact'].map((item, index) => (
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
