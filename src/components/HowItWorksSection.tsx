
import { motion } from 'framer-motion';
import { Upload, Settings, Sparkles, Database, Workflow, Monitor } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const HowItWorksSection = () => {
  const mainSteps = [
    { 
      number: 1, 
      icon: Upload, 
      title: "Connect Your Data", 
      description: "Upload files, connect databases, or link APIs. DataPrep automatically discovers your data structure and relationships with AI-powered intelligence.",
      details: ["Multi-format support", "Auto-schema detection", "Real-time validation"]
    },
    { 
      number: 2, 
      icon: Settings, 
      title: "Choose Your Intent", 
      description: "Tell us your goal: ETL transformation, data warehousing, pipeline auditing, or real-time analytics. Our AI understands your needs.",
      details: ["Intent recognition", "Custom workflows", "Business logic mapping"]
    },
    { 
      number: 3, 
      icon: Sparkles, 
      title: "AI Does the Rest", 
      description: "Our agentic AI builds, deploys, and monitors your entire data pipeline automatically. Sit back and watch the magic unfold.",
      details: ["Auto-deployment", "Continuous monitoring", "Self-healing systems"]
    }
  ];

  const subProcesses = [
    { icon: Database, title: "Data Discovery", description: "AI analyzes your data sources and maps relationships" },
    { icon: Workflow, title: "Pipeline Generation", description: "Automated creation of optimized data workflows" },
    { icon: Monitor, title: "Quality Assurance", description: "Continuous monitoring with predictive alerts" }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
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
        
        {/* Main steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="bg-card border-border hover:shadow-glow transition-all duration-500 hover-lift overflow-hidden relative h-full">
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
                  <CardTitle className="flex items-center justify-center gap-3 text-xl mb-4">
                    <step.icon className="h-6 w-6 text-primary" />
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-center text-lg leading-relaxed">
                    {step.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.div
                        key={detail}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + detailIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        {detail}
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process flow visualization */}
        <motion.div
          className="relative mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center">
            <motion.div 
              className="hidden md:flex items-center gap-8"
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              transition={{ duration: 1.5, delay: 1 }}
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((step, index) => (
                <div key={step} className="flex items-center">
                  <motion.div 
                    className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 1.2 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {step}
                  </motion.div>
                  {index < 2 && (
                    <motion.div 
                      className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-4"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 1.4 + index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Sub-processes */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          {subProcesses.map((process, index) => (
            <motion.div
              key={process.title}
              className="text-center p-6 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-4 flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <process.icon className="h-6 w-6 text-primary" />
              </motion.div>
              <h4 className="text-lg font-semibold mb-2">{process.title}</h4>
              <p className="text-muted-foreground text-sm">{process.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
