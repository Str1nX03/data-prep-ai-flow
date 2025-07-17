
import { motion } from 'framer-motion';
import { 
  Database, 
  Sparkles, 
  GitBranch, 
  BarChart3, 
  Cpu, 
  Eye, 
  Layers, 
  Workflow,
  Shield,
  Zap,
  Brain,
  Cloud
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const FeaturesSection = () => {
  const primaryFeatures = [
    { 
      icon: Database, 
      title: "Intelligent Schema Matching", 
      description: "Automatically map and transform schemas across different data sources with AI precision",
      category: "Data Processing"
    },
    { 
      icon: Sparkles, 
      title: "Smart Data Cleaning", 
      description: "AI-powered data quality checks and automatic anomaly detection that never sleeps",
      category: "Quality Assurance"
    },
    { 
      icon: GitBranch, 
      title: "Auto Pipeline Deployment", 
      description: "Deploy production-ready pipelines with built-in error handling and optimization",
      category: "Deployment"
    },
    { 
      icon: BarChart3, 
      title: "Data Health Monitoring", 
      description: "Real-time monitoring with intelligent alerts and predictive recommendations",
      category: "Monitoring"
    }
  ];

  const advancedFeatures = [
    { 
      icon: Cpu, 
      title: "Neural Processing", 
      description: "Advanced neural networks that learn from your data patterns and optimize continuously",
      benefits: ["Pattern Recognition", "Auto-optimization", "Continuous Learning"]
    },
    { 
      icon: Eye, 
      title: "Predictive Analytics", 
      description: "Forecast data issues before they happen with our cutting-edge AI algorithms",
      benefits: ["Issue Prevention", "Trend Analysis", "Resource Planning"]
    },
    { 
      icon: Layers, 
      title: "Multi-Layer Security", 
      description: "Enterprise-grade security with encryption, compliance, and audit trails built-in",
      benefits: ["End-to-end Encryption", "Compliance Ready", "Audit Trails"]
    },
    { 
      icon: Workflow, 
      title: "Adaptive Workflows", 
      description: "Self-healing pipelines that adapt to changing data patterns automatically",
      benefits: ["Self-healing", "Auto-scaling", "Pattern Adaptation"]
    }
  ];

  const integrationFeatures = [
    { icon: Shield, title: "Enterprise Security", description: "SOC2, GDPR, HIPAA compliant" },
    { icon: Zap, title: "Real-time Processing", description: "Sub-second data processing" },
    { icon: Brain, title: "ML Optimization", description: "Continuous performance tuning" },
    { icon: Cloud, title: "Multi-cloud Support", description: "AWS, Azure, GCP ready" }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            Powerful <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to revolutionize your data engineering workflow
          </p>
        </motion.div>
        
        {/* Primary features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {primaryFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="bg-secondary border-border hover:shadow-glow transition-all duration-500 h-full hover-lift">
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <feature.icon className="h-10 w-10 text-primary mb-4 group-hover:text-accent transition-colors" />
                    <div className="absolute -top-2 -right-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      {feature.category}
                    </div>
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

        {/* Advanced features */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Advanced <span className="text-primary">Capabilities</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-secondary/50 to-secondary/30 border-border hover:from-secondary/70 hover:to-secondary/50 transition-all duration-500">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      >
                        <feature.icon className="h-6 w-6 text-primary" />
                      </motion.div>
                      <div>
                        <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {feature.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <motion.div
                          key={benefit}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + benefitIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {benefit}
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Integration features */}
        <motion.div
          className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Enterprise <span className="text-primary">Integrations</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrationFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-3 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="h-6 w-6 text-primary" />
                </motion.div>
                <h4 className="font-semibold text-sm mb-1">{feature.title}</h4>
                <p className="text-xs text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
