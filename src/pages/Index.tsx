import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  GitBranch
} from 'lucide-react';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.remove('opacity-0');
          element.classList.add('animate-fade-in');
        }
      });
    };

    // Trigger initial check
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Early access signup:', email);
    setEmail('');
    // Here you would typically send to your backend
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold bg-gradient-sapphire bg-clip-text text-transparent">
                  DataPrep
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
                <a href="#about" className="text-muted-foreground hover:text-accent transition-colors">About</a>
                <a href="#features" className="text-muted-foreground hover:text-accent transition-colors">Features</a>
                <a href="#how-it-works" className="text-muted-foreground hover:text-accent transition-colors">How It Works</a>
                <Button variant="outline" className="text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                  Get Early Access
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-b border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-accent transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 text-muted-foreground hover:text-accent transition-colors">About</a>
              <a href="#features" className="block px-3 py-2 text-muted-foreground hover:text-accent transition-colors">Features</a>
              <a href="#how-it-works" className="block px-3 py-2 text-muted-foreground hover:text-accent transition-colors">How It Works</a>
              <Button variant="outline" className="w-full mt-2 text-accent border-accent hover:bg-accent hover:text-accent-foreground">
                Get Early Access
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="relative container mx-auto text-center">
          <div className="animate-on-scroll opacity-0">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Automate Data Engineering
              <br />
              <span className="bg-gradient-sapphire bg-clip-text text-transparent animate-glow">
                with Agentic AI
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Meet DataPrep – the all-in-one AI tool to automate pipelines, wrangle schemas, 
              clean data, and monitor flows while you sleep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-sapphire hover:shadow-sapphire transition-all duration-300 text-lg px-8 py-4"
              >
                Get Early Access
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-accent border-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-4"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Floating Visual Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary/30 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        </div>
      </section>

      {/* What is DataPrep Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What is <span className="text-primary">DataPrep</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agentic AI that builds your data pipelines while you sleep. 
              No more manual schema mapping, data cleaning nightmares, or pipeline debugging sessions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-on-scroll opacity-0 text-center" style={{animationDelay: '0.2s'}}>
              <div className="w-16 h-16 bg-gradient-sapphire rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Intelligent Automation</h3>
              <p className="text-muted-foreground">
                Our AI agents understand your data patterns and automatically create optimized pipelines.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 text-center" style={{animationDelay: '0.4s'}}>
              <div className="w-16 h-16 bg-gradient-sapphire rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Deploy complex data workflows in minutes, not weeks. Scale automatically as your data grows.
              </p>
            </div>
            
            <div className="animate-on-scroll opacity-0 text-center" style={{animationDelay: '0.6s'}}>
              <div className="w-16 h-16 bg-gradient-sapphire rounded-lg mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Enterprise Ready</h3>
              <p className="text-muted-foreground">
                Built with security, compliance, and enterprise-grade reliability from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How It <span className="text-primary">Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three simple steps to transform your data engineering workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="animate-on-scroll opacity-0 bg-card border-border hover:shadow-glow transition-all duration-300">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-sapphire rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">1</span>
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Upload className="h-5 w-5 text-primary" />
                  Connect Your Data
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Upload files, connect databases, or link APIs. DataPrep automatically 
                  discovers your data structure and relationships.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 bg-card border-border hover:shadow-glow transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-sapphire rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">2</span>
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Settings className="h-5 w-5 text-primary" />
                  Choose Your Intent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Tell us your goal: ETL transformation, data warehousing, 
                  pipeline auditing, or real-time analytics.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 bg-card border-border hover:shadow-glow transition-all duration-300" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-gradient-sapphire rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-xl font-bold text-white">3</span>
                </div>
                <CardTitle className="flex items-center justify-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  AI Does the Rest
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Our agentic AI builds, deploys, and monitors your entire 
                  data pipeline automatically. Sit back and watch the magic.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="animate-on-scroll opacity-0 text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful <span className="text-primary">Features</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to modernize your data engineering workflow
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="animate-on-scroll opacity-0 bg-secondary border-border hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <Database className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Intelligent Schema Matching</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Automatically map and transform schemas across different data sources
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 bg-secondary border-border hover:shadow-glow transition-all duration-300" style={{animationDelay: '0.1s'}}>
              <CardHeader>
                <Sparkles className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Smart Data Cleaning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  AI-powered data quality checks and automatic anomaly detection
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 bg-secondary border-border hover:shadow-glow transition-all duration-300" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <GitBranch className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Auto Pipeline Deployment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Deploy production-ready pipelines with built-in error handling
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="animate-on-scroll opacity-0 bg-secondary border-border hover:shadow-glow transition-all duration-300" style={{animationDelay: '0.3s'}}>
              <CardHeader>
                <BarChart3 className="h-8 w-8 text-primary mb-2" />
                <CardTitle className="text-lg">Data Health Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Real-time monitoring with intelligent alerts and recommendations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-dark">
        <div className="container mx-auto text-center">
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Future of <span className="text-primary">Data Engineering</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Be among the first to experience the power of agentic AI for data engineering. 
              Get early access and transform your workflow today.
            </p>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-secondary border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button 
                type="submit" 
                className="bg-gradient-sapphire hover:shadow-sapphire transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-background border-t border-border">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-2xl font-bold bg-gradient-sapphire bg-clip-text text-transparent">
                DataPrep
              </span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-tan hover:text-accent transition-colors">Privacy</a>
              <a href="#" className="text-tan hover:text-accent transition-colors">Terms</a>
              <a href="#" className="text-tan hover:text-accent transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DataPrep. All rights reserved. Built with AI for the future of data.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
