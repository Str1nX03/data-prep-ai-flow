import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Engineering Lead",
      company: "TechFlow Inc.",
      content: "DataPrep transformed our data pipeline workflow completely. What used to take weeks now happens in hours. The AI automation is incredible.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Senior Data Scientist",
      company: "Analytics Pro",
      content: "The schema management and data cleaning capabilities are unmatched. Our data quality improved by 300% since implementing DataPrep.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "CTO",
      company: "DataVision Labs",
      content: "Finally, a solution that understands modern data engineering challenges. DataPrep's AI agents work 24/7 without any supervision.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Park",
      role: "Data Architect",
      company: "CloudScale Systems",
      content: "The monitoring and alerting system caught issues we didn't even know existed. DataPrep pays for itself within the first month.",
      rating: 5,
      avatar: "DP"
    },
    {
      name: "Lisa Thompson",
      role: "VP of Engineering",
      company: "InnovateTech",
      content: "Our team productivity increased dramatically. DataPrep handles all the tedious data prep work so we can focus on insights and innovation.",
      rating: 5,
      avatar: "LT"
    },
    {
      name: "James Wilson",
      role: "Data Operations Manager",
      company: "ScaleUp Analytics",
      content: "The best investment we've made in our data infrastructure. DataPrep's automated pipeline management is simply revolutionary.",
      rating: 5,
      avatar: "JW"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as any,
        stiffness: 100
      }
    }
  };

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-accent/20 rounded-full blur-xl"
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 animated-gradient bg-clip-text text-transparent"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of data professionals who have revolutionized their workflows with DataPrep's AI-powered automation
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)" 
              }}
              className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl border border-border/50 relative group"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/30 group-hover:text-primary/50 transition-colors" />
              
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {[
            { value: "50K+", label: "Data Engineers" },
            { value: "99.9%", label: "Uptime" },
            { value: "10x", label: "Faster Processing" },
            { value: "500M+", label: "Records Processed" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-4xl md:text-5xl font-bold text-primary mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;