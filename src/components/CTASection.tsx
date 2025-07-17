
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access signup:', email);
    setIsSubmitted(true);
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const benefits = [
    "Early access to all features",
    "Priority support from our team",
    "Exclusive beta program access",
    "Lifetime discount on pro plans"
  ];

  const testimonials = [
    { name: "Sarah Chen", role: "Data Engineer", company: "TechCorp", quote: "DataPrep saved us 80% of our pipeline development time!" },
    { name: "Michael Rodriguez", role: "CTO", company: "DataFlow Inc", quote: "The AI automation is incredible - it's like having a senior engineer 24/7." },
    { name: "Emily Johnson", role: "Analytics Lead", company: "CloudScale", quote: "Finally, a tool that understands our data engineering needs." }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-dark relative overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 30% 70%, hsla(210, 100%, 50%, 0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, hsla(240, 100%, 60%, 0.3) 0%, transparent 50%)'
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

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

          {/* Benefits grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                className="flex items-center gap-3 text-left bg-secondary/20 p-4 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Email form */}
          <motion.form 
            onSubmit={handleSubmit} 
            className="max-w-lg mx-auto flex flex-col sm:flex-row gap-4 mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
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
                disabled={isSubmitted}
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                type="submit" 
                className="bg-gradient-sapphire hover:shadow-sapphire transition-all duration-300 text-lg px-8 py-6 relative overflow-hidden group"
                disabled={isSubmitted}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
                <span className="relative z-10 flex items-center">
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Joined!
                    </>
                  ) : (
                    <>
                      Join Waitlist
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </span>
              </Button>
            </motion.div>
          </motion.form>

          {/* Social proof */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">Trusted by 10,000+ engineers</span>
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                className="bg-secondary/30 p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                <div className="text-sm">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-muted-foreground">{testimonial.role}, {testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-sm text-muted-foreground mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            viewport={{ once: true }}
          >
            We respect your privacy. Unsubscribe at any time. No spam, just pure innovation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
