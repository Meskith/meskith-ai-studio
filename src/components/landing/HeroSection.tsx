import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, ArrowRight } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

const HeroSection = () => {
  const [glowActive, setGlowActive] = useState(false);
  const vibeControls = useAnimationControls();

  // Trigger the vibe animation and glow effect
  useEffect(() => {
    const animateVibe = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 2500));
        setGlowActive(true);
        await vibeControls.start({
          scale: [1, 1.12, 0.96, 1.08, 1],
          rotate: [0, -4, 4, -2, 0],
          transition: { duration: 0.6, ease: "easeOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 600));
        setGlowActive(false);
      }
    };
    animateVibe();
  }, [vibeControls]);

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden">
      {/* Spectrum glow burst effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={glowActive ? {
          background: [
            'radial-gradient(circle at 50% 45%, hsl(217 91% 60% / 0) 0%, transparent 30%)',
            'radial-gradient(circle at 50% 45%, hsl(217 91% 60% / 0.35) 0%, hsl(280 90% 60% / 0.2) 15%, hsl(0 84% 55% / 0.15) 30%, transparent 50%)',
            'radial-gradient(circle at 50% 45%, hsl(280 90% 60% / 0.25) 0%, hsl(0 84% 55% / 0.15) 20%, transparent 45%)',
            'radial-gradient(circle at 50% 45%, hsl(217 91% 60% / 0) 0%, transparent 30%)',
          ]
        } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{ background: 'linear-gradient(180deg, hsl(217 91% 60% / 0.3), hsl(0 84% 55% / 0.2))' }}
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{ background: 'linear-gradient(180deg, hsl(0 84% 55% / 0.25), hsl(217 91% 60% / 0.15))' }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight"
        >
          Meskith AI helps brands go{' '}
          <span className="bg-gradient-luxury bg-clip-text text-transparent">
            global
          </span>, without losing their{' '}
          <span className="inline-block relative">
            <motion.span 
              className="inline-block relative bg-gradient-luxury bg-clip-text text-transparent px-2 py-4"
              animate={vibeControls}
              style={{
                fontFamily: "'Harlow Solid', cursive",
                fontStyle: 'italic',
                fontSize: '1.15em',
                lineHeight: '1.2',
                filter: glowActive 
                  ? 'drop-shadow(0 0 25px hsl(280 90% 60%)) drop-shadow(0 0 50px hsl(217 91% 60%)) drop-shadow(0 0 75px hsl(0 84% 55%))'
                  : 'drop-shadow(0 0 12px hsl(217 91% 60% / 0.6))',
                transition: 'filter 0.3s ease',
              }}
            >
              Vibe
            </motion.span>
            
            {/* Animated spectrum swoosh lines */}
            <svg 
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[140%] h-8 overflow-visible"
              viewBox="0 0 200 30"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="spectrumGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217, 91%, 60%)">
                    <animate attributeName="stop-color" 
                      values="hsl(217, 91%, 60%); hsl(280, 90%, 60%); hsl(0, 84%, 55%); hsl(217, 91%, 60%)" 
                      dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="50%" stopColor="hsl(280, 90%, 60%)">
                    <animate attributeName="stop-color" 
                      values="hsl(280, 90%, 60%); hsl(0, 84%, 55%); hsl(217, 91%, 60%); hsl(280, 90%, 60%)" 
                      dur="3s" repeatCount="indefinite" />
                  </stop>
                  <stop offset="100%" stopColor="hsl(0, 84%, 55%)">
                    <animate attributeName="stop-color" 
                      values="hsl(0, 84%, 55%); hsl(217, 91%, 60%); hsl(280, 90%, 60%); hsl(0, 84%, 55%)" 
                      dur="3s" repeatCount="indefinite" />
                  </stop>
                </linearGradient>
                <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="2" result="blur"/>
                  <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              
              {/* First swoosh line */}
              <motion.path
                d="M 10 8 Q 60 22, 110 12 T 190 15"
                fill="none"
                stroke="url(#spectrumGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                filter="url(#glowFilter)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
              />
              
              {/* Second swoosh line */}
              <motion.path
                d="M 25 16 Q 75 28, 125 18 T 195 22"
                fill="none"
                stroke="url(#spectrumGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                filter="url(#glowFilter)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              />
            </svg>
          </span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Upload your brand assets, and let Meskith AI generate culturally-tailored ad campaigns for Kenya, Australia, and Canada.
        </motion.p>
        
        {/* CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/auth">
            <Button 
              size="lg" 
              className="bg-gradient-button hover:opacity-90 text-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)] group"
            >
              Start Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 rounded-full border-border/50 hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
              >
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
                    <div className="w-16 h-16 rounded-full bg-gradient-button flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 text-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">Demo video placeholder</p>
                  </div>
                </div>
                <Link to="/auth" className="block">
                  <Button className="w-full bg-gradient-button hover:opacity-90 rounded-full">
                    Log in to Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
