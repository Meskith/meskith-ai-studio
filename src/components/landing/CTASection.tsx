import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent"
      />
      <motion.div 
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-destructive/10 rounded-full blur-[100px] -translate-y-1/2"
      />
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-premium p-12 md:p-16 text-center relative overflow-hidden"
        >
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-destructive/20 to-transparent" />
          
          <div className="relative">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Ready to access the dashboard?</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Start Creating{' '}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Localized Ads
              </span>{' '}
              Today
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Join brands using Meskith AI to reach global audiences with culturally-resonant campaigns.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/auth">
                <Button 
                  size="lg" 
                  className="bg-gradient-luxury hover:opacity-90 glow-primary text-lg px-10 py-6 transition-all duration-300 hover:scale-105 group"
                >
                  Log in
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/auth">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="text-lg px-10 py-6 border-border/50 hover:bg-secondary/50 transition-all duration-300"
                >
                  Create account
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
