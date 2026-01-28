import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Globe, 
  Megaphone, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  Target, 
  BarChart3, 
  Languages,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import meskithLogo from '@/assets/meskith-logo.png';

const Index = () => {
  const features = [
    {
      icon: Globe,
      title: 'AI Localized Ads',
      description: 'Generate culturally-adapted ad campaigns for 8+ global markets with a single click. Our AI understands local slang, preferences, and trends.',
      cta: 'Explore Markets'
    },
    {
      icon: Megaphone,
      title: 'Multi-Platform Campaigns',
      description: 'Create ads optimized for Facebook, Instagram, TikTok, and more. Each platform gets content tailored to its unique audience.',
      cta: 'See Platforms'
    },
    {
      icon: Languages,
      title: 'Cultural Adaptation',
      description: 'Beyond translation—our AI adapts tone, humor, and cultural references to resonate authentically with each market.',
      cta: 'Learn More'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track campaign performance across all regions in real-time. Understand what works and optimize for maximum ROI.',
      cta: 'View Analytics'
    },
    {
      icon: Target,
      title: 'Smart Targeting',
      description: 'AI-powered audience insights help you reach the right customers in each market with precision targeting.',
      cta: 'Discover'
    },
    {
      icon: Zap,
      title: 'Instant Generation',
      description: 'Generate 24+ ad variants across 8 markets in under 60 seconds. No waiting, no manual work required.',
      cta: 'Try Now'
    }
  ];

  const benefits = [
    'Save 90% of time on ad localization',
    'Reach 8+ global markets instantly',
    'AI-powered cultural adaptation',
    'Track performance in real-time'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={meskithLogo} alt="Meskith AI" className="h-10" />
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/auth">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                Sign In
              </Button>
            </Link>
            <Link to="/auth">
              <Button className="bg-gradient-luxury hover:opacity-90 glow-primary">
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Ad Localization</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Create <span className="gradient-text">Localized Ads</span>
            <br />That Actually Convert
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Meet Meskith AI, your AI marketing partner that creates culturally-adapted 
            ad campaigns for global markets—handling localization, cultural nuances, 
            and market-specific optimization with human-like understanding.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-sm">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" className="bg-gradient-luxury hover:opacity-90 glow-primary text-lg px-8 py-6">
                Start Creating Ads Free
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-border/50 hover:bg-secondary/50">
              Watch Demo
              <TrendingUp className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Awaits <span className="gradient-text">You?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meskith AI is designed to help you create localized ad campaigns 
              that resonate with audiences in every market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title}
                  className="glass-card group hover:border-primary/30 transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="p-3 rounded-2xl bg-primary/20 w-fit mb-6 group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <Link 
                      to="/auth" 
                      className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                    >
                      {feature.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="glass-card-premium glow-primary relative overflow-hidden">
            <CardContent className="p-12 text-center relative z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-accent/20 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6">
                  <Zap className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">Ready to Scale Globally?</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Start Creating <span className="gradient-text">Localized Ads</span> Today
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                  Join thousands of brands using Meskith AI to reach global audiences 
                  with culturally-resonant ad campaigns.
                </p>
                
                <Link to="/auth">
                  <Button size="lg" className="bg-gradient-luxury hover:opacity-90 glow-primary text-lg px-10 py-6">
                    Get Started — It's Free
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={meskithLogo} alt="Meskith AI" className="h-8" />
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Meskith AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
