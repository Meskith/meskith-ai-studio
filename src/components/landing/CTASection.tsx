import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card-premium p-12 md:p-16 text-center relative overflow-hidden rounded-3xl"
        >
          {/* Gradient accents */}
          <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full blur-[100px] opacity-30" style={{ background: 'hsl(217 91% 60%)' }} />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-20" style={{ background: 'hsl(0 84% 55%)' }} />
          
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to Transform Your{' '}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">
                Marketing?
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-lg mx-auto">
              Join thousands of brands using Meskith AI to create globally-resonant campaigns.
            </p>
            
            <Link to="/auth">
              <Button 
                size="lg" 
                className="bg-gradient-button hover:opacity-90 text-foreground text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)] group"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
