import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimationControls } from 'framer-motion';

const HeroSection = () => {
  const [glowActive, setGlowActive] = useState(false);
  const secondsControls = useAnimationControls();

  // Trigger the glow animation
  useEffect(() => {
    const animateGlow = async () => {
      while (true) {
        await new Promise(resolve => setTimeout(resolve, 2500));
        setGlowActive(true);
        await secondsControls.start({
          scale: [1, 1.08, 0.98, 1.04, 1],
          transition: { duration: 0.6, ease: "easeOut" }
        });
        await new Promise(resolve => setTimeout(resolve, 600));
        setGlowActive(false);
      }
    };
    animateGlow();
  }, [secondsControls]);

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-8 px-6 overflow-hidden">
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
          Create Localized Ads{' '}
          <span className="bg-gradient-to-r from-[hsl(0,84%,55%)] via-[hsl(280,70%,50%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">
            in
          </span>
          <br />
          <motion.span 
            className="inline-block bg-gradient-luxury bg-clip-text text-transparent"
            animate={secondsControls}
            style={{
              filter: glowActive 
                ? 'drop-shadow(0 0 25px hsl(280 90% 60%)) drop-shadow(0 0 50px hsl(217 91% 60%)) drop-shadow(0 0 75px hsl(0 84% 55%))'
                : 'drop-shadow(0 0 12px hsl(217 91% 60% / 0.6))',
              transition: 'filter 0.3s ease',
            }}
          >
            Seconds
          </motion.span>
        </motion.h1>
        
        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Upload your brand assets, and let Meskith AI generate culturally-tailored ad campaigns for Kenya, UAE, and Canada.
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
              className="relative bg-transparent text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden group"
            >
              {/* Animated rotating gradient border */}
              <span className="absolute inset-0 rounded-full p-[2px] overflow-hidden">
                <span 
                  className="absolute inset-[-50%] animate-[spin_3s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 0deg, hsl(217 91% 60%), hsl(280 70% 50%), hsl(0 84% 55%), hsl(217 91% 60%))',
                  }}
                />
              </span>
              {/* Inner background */}
              <span className="absolute inset-[2px] rounded-full bg-[#0A0A0A]" />
              {/* Content */}
              <span className="relative z-10 flex items-center">
                Start Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
          
          <Link to="/auth">
            <Button 
              size="lg" 
              className="relative bg-transparent text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 border border-white/40 overflow-hidden group"
            >
              {/* Sweeping light effect - single bright spot traveling around border */}
              <span className="absolute inset-0 rounded-full overflow-hidden">
                <span 
                  className="absolute inset-[-100%] animate-[spin_4s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, transparent 340deg, rgba(255,255,255,0.8) 350deg, white 360deg)',
                  }}
                />
              </span>
              {/* Inner background */}
              <span className="absolute inset-[1px] rounded-full bg-[#0A0A0A]" />
              {/* Content */}
              <span className="relative z-10">Log In</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
