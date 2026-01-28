import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Play, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center pt-24 pb-8 px-6 overflow-hidden">

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
          <span className="bg-gradient-to-r from-[hsl(280,90%,60%)] to-[hsl(280,70%,50%)] bg-clip-text text-transparent">
            in
          </span>
          <br />
          <span className="bg-gradient-to-r from-[hsl(0,84%,55%)] to-[hsl(0,70%,45%)] bg-clip-text text-transparent">
            Seconds
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
              className="relative bg-transparent text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-button before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#0A0A0A] after:-z-[5] hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.5),0_0_30px_hsl(0_84%_55%_/_0.4)] group"
            >
              <span className="relative z-10 flex items-center">
                Start Now
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
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
