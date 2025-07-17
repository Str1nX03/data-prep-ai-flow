
import { motion } from 'framer-motion';
import { Brain, Zap, Shield, Cpu, Database, Cloud } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutSection = () => {
  const mainFeatures = [
    { 
      icon: Brain, 
      title: "Intelligent Automation", 
      description: "Our AI agents understand your data patterns and automatically create optimized pipelines.",
      color: "from-blue-500 to-purple-600"
    },
    { 
      icon: Zap, 
      title: "Lightning Fast", 
      description: "Deploy complex data workflows in minutes, not weeks. Scale automatically as your data grows.",
      color: "from-yellow-500 to-orange-600"
    },
    { 
      icon: Shield, 
      title: "Enterprise Ready", 
      description: "Built with security, compliance, and enterprise-grade reliability from day one.",
      color: "from-green-500 to-teal-600"
    }
  ];

  const additionalFeatures = [
    { icon: Cpu, title: "Neural Processing", description: "Advanced ML algorithms for pattern recognition" },
    { icon: Database, title: "Multi-Source Integration", description: "Connect any database, API, or file system" },
    { icon: Cloud, title: "Cloud Native", description: "Built for modern cloud infrastructure" }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto relative z-10">
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
            className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Agentic AI that builds your data pipelines while you sleep. 
            No more manual schema mapping, data cleaning nightmares, or pipeline debugging sessions.
          </motion.p>
        </motion.div>
        
        {/* Main features grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {mainFeatures.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:shadow-sapphire transition-all duration-300`}
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

        {/* Additional features */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          {additionalFeatures.map((feature, index) => (
            <Card key={feature.title} className="bg-secondary/50 border-border hover:bg-secondary/80 transition-all duration-300">
              <CardHeader className="text-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center"
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Success metrics */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50TB+", label: "Data Processed Daily" },
              { number: "1000+", label: "Pipelines Automated" },
              { number: "99.99%", label: "Accuracy Rate" },
              { number: "24/7", label: "Monitoring" }
            ].map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                <div className="text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
