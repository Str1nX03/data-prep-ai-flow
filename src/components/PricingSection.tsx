import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Star, Zap, Crown } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams getting started with automated data pipelines",
      icon: Zap,
      features: [
        "Up to 100GB data processing",
        "5 automated pipelines",
        "Basic monitoring & alerts",
        "Email support",
        "Standard data connectors",
        "Basic schema management"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing teams that need advanced automation and monitoring",
      icon: Star,
      features: [
        "Up to 1TB data processing",
        "Unlimited pipelines",
        "Advanced monitoring & analytics",
        "Priority support",
        "All data connectors",
        "Advanced schema management",
        "Custom transformations",
        "API access",
        "Team collaboration tools"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For large organizations requiring enterprise-grade features and support",
      icon: Crown,
      features: [
        "Unlimited data processing",
        "Unlimited pipelines",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Custom integrations",
        "Advanced security & compliance",
        "Multi-tenant architecture",
        "Custom SLAs",
        "On-premise deployment",
        "Training & onboarding"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0]
          }}
          transition={{ duration: 25, repeat: Infinity }}
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
            Choose Your Plan
          </motion.h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a free trial and scale as your data needs grow. All plans include our core AI automation features.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  y: -10
                }}
                className={`relative p-8 rounded-3xl border-2 backdrop-blur-sm ${
                  plan.popular 
                    ? 'border-primary bg-gradient-to-b from-primary/10 to-accent/10' 
                    : 'border-border/50 bg-card/50'
                } group`}
              >
                {plan.popular && (
                  <motion.div 
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-full text-sm font-semibold"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                    viewport={{ once: true }}
                  >
                    Most Popular
                  </motion.div>
                )}

                <div className="text-center mb-8">
                  <motion.div 
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                      plan.popular ? 'bg-primary' : 'bg-muted'
                    }`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className={`h-8 w-8 ${plan.popular ? 'text-white' : 'text-foreground'}`} />
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6">{plan.description}</p>

                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button 
                      className={`w-full py-3 text-lg ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-accent hover:shadow-lg' 
                          : 'bg-muted hover:bg-muted/80'
                      }`}
                    >
                      {plan.cta}
                    </Button>
                  </motion.div>
                </div>

                <ul className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Check className="h-5 w-5 text-primary mt-0.5 mr-3 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            {[
              {
                question: "Can I change plans anytime?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "All plans come with a 14-day free trial. No credit card required to get started."
              },
              {
                question: "What about data security?",
                answer: "We use enterprise-grade encryption and comply with SOC 2, GDPR, and other security standards."
              },
              {
                question: "Do you offer custom integrations?",
                answer: "Enterprise plans include custom integrations. Contact our sales team to discuss your needs."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="p-6 bg-card/50 rounded-xl border border-border/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;