import { Link } from 'react-router-dom';
import { Upload, Sparkles, Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload brand assets',
      description: 'Add your logos, colors, and voice guidelines to the Brand Vault.',
    },
    {
      number: '02',
      icon: Sparkles,
      title: 'Generate 3 localized variants',
      description: 'Our AI creates culturally-adapted campaigns for your target markets.',
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch + track results',
      description: 'Deploy campaigns and monitor performance in real-time.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-[120px] -translate-y-1/2 opacity-20"
        style={{ background: 'hsl(217 91% 60%)' }}
      />
      <div 
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full blur-[120px] -translate-y-1/2 opacity-15"
        style={{ background: 'hsl(0 84% 55%)' }}
      />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Three simple steps to launch globally-ready campaigns.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="text-center relative"
                >
                  {/* Step number badge */}
                  <div className="text-xs font-bold text-primary/60 tracking-widest mb-4">
                    STEP {step.number}
                  </div>
                  
                  {/* Icon container */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-button mb-6 mx-auto"
                    style={{ boxShadow: '0 0 40px hsl(217 91% 60% / 0.3)' }}
                  >
                    <Icon className="w-9 h-9 text-foreground" />
                    
                    {/* Pulse ring */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-2 border-primary"
                      animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA under steps */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/auth">
            <span className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all cursor-pointer">
              Get started now
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
