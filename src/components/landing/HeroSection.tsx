import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Sparkles, Play, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const regionMessages: Record<string, string> = {
  Kenya: "Generate campaigns tailored for Kenya's vibrant mobile-first audience.",
  Australia: "Reach Australian consumers with locally-relevant messaging and tone.",
  Canada: "Connect with Canadian audiences through culturally-adapted content.",
};

const HeroSection = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>('Kenya');
  const regions = ['Kenya', 'Australia', 'Canada'];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-6 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/25 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 -right-32 w-[600px] h-[600px] bg-destructive/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]"
        />
      </div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Pill badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium bg-gradient-to-r from-primary to-foreground bg-clip-text text-transparent">
            AI-Powered Marketing
          </span>
        </motion.div>
        
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          Create Localized Ads in{' '}
          <span className="relative inline-block">
            <span className="bg-gradient-luxury bg-clip-text text-transparent glow-text">
              Seconds
            </span>
            <motion.span 
              className="absolute -inset-1 bg-gradient-luxury opacity-30 blur-xl -z-10"
              animate={{ opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 leading-relaxed"
        >
          Upload your brand assets and instantly generate culturally-tailored campaigns for Kenya, Australia, and Canada—ready to launch.
        </motion.p>

        {/* Interactive region chips */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-3 mb-4"
        >
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedRegion === region
                  ? 'bg-gradient-luxury text-foreground glow-primary scale-105'
                  : 'glass border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground'
              }`}
            >
              {region}
            </button>
          ))}
        </motion.div>

        {/* Dynamic region message */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={selectedRegion}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary/30 border border-border/30">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">
                {regionMessages[selectedRegion]}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
        
        {/* CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <Link to="/auth">
            <Button 
              size="lg" 
              className="bg-gradient-luxury hover:opacity-90 glow-primary text-lg px-8 py-6 transition-all duration-300 hover:scale-105 group"
            >
              Log in to Dashboard
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 border-border/50 hover:bg-secondary/50 transition-all duration-300 hover:scale-105 group"
              >
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card-premium border-primary/20 max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-xl">See Meskith AI in Action</DialogTitle>
              </DialogHeader>
              <div className="space-y-6 pt-4">
                <div className="aspect-video rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-luxury flex items-center justify-center mx-auto mb-4 glow-primary">
                      <Play className="w-8 h-8 text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">Demo video placeholder</p>
                  </div>
                </div>
                <Link to="/auth" className="block">
                  <Button className="w-full bg-gradient-luxury hover:opacity-90 glow-primary">
                    Log in to Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Trust line */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-sm text-muted-foreground"
        >
          No credit card required • 2-minute setup
        </motion.p>
      </div>
    </section>
  );
};

export default HeroSection;
