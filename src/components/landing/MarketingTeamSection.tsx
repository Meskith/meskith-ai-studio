import { motion } from 'framer-motion';
import meskithLogo from '@/assets/meskith-logo.png';

const MarketingTeamSection = () => {
  const leftCapabilities = [
    'Create Your Content',
    'Research, Analyse & Strategise',
    'Build Your Brand Identity',
  ];

  const rightCapabilities = [
    'Connect Social Media Accounts',
    'Share & Schedule',
    'Analytics Dashboard',
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20"
        style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(0 84% 55%))' }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">AI-Powered</span>
            {' '}Marketing Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            6 experts working for your brand, powered by Meskith AI
          </p>
        </motion.div>

        {/* Mobile/Tablet Layout - Simple List */}
        <div className="md:hidden flex flex-col items-center gap-6">
          {/* Logo at top */}
          <div className="relative">
            <div 
              className="absolute inset-0 rounded-full blur-[30px] opacity-50"
              style={{ background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(0 84% 55%))', transform: 'scale(1.2)' }}
            />
            <div className="relative w-14 h-14 rounded-xl glass-card-premium p-2 flex items-center justify-center">
              <img src={meskithLogo} alt="Meskith AI" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Capabilities as simple list */}
          <div className="flex flex-col gap-2.5 w-full max-w-xs">
            {[...leftCapabilities, ...rightCapabilities].map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="glass-card px-4 py-2.5 rounded-lg border border-primary/15 bg-card/50"
              >
                <span className="text-sm font-medium">{capability}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:flex relative items-center justify-center min-h-[400px]">
          {/* Left Capabilities */}
          <div className="absolute left-16 flex flex-col gap-8 z-20">
            {leftCapabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                <svg 
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-32 h-2 overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`left-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                      <stop offset="100%" stopColor="hsl(0 84% 55%)" />
                    </linearGradient>
                  </defs>
                  <line 
                    x1="0" 
                    y1="4" 
                    x2="100%" 
                    y2="4" 
                    stroke={`url(#left-gradient-${index})`}
                    strokeWidth="2"
                    className="animate-pulse-glow"
                  />
                  {/* Animated dot */}
                  <circle r="4" fill="hsl(217 91% 60%)" className="animate-pulse-glow">
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <mpath href={`#left-path-${index}`} />
                    </animateMotion>
                  </circle>
                  <path id={`left-path-${index}`} d="M 100 4 L 0 4" fill="none" />
                </svg>

                {/* Capability Card */}
                <div className="glass-card px-5 py-3 rounded-xl border border-primary/20 backdrop-blur-xl bg-card/60 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <span className="text-base font-medium whitespace-nowrap">{capability}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-30"
          >
            {/* Glow effect behind logo */}
            <div 
              className="absolute inset-0 rounded-full blur-[60px] opacity-60 animate-pulse-glow"
              style={{ 
                background: 'linear-gradient(135deg, hsl(217 91% 60%), hsl(0 84% 55%))',
                transform: 'scale(1.5)'
              }}
            />
            
            {/* Logo container */}
            <div className="relative w-40 h-40 rounded-2xl glass-card-premium p-4 flex items-center justify-center">
              <img 
                src={meskithLogo} 
                alt="Meskith AI" 
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right Capabilities */}
          <div className="absolute right-16 flex flex-col gap-8 z-20">
            {rightCapabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector Line */}
                <svg 
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-32 h-2 overflow-visible"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`right-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="hsl(0 84% 55%)" />
                      <stop offset="100%" stopColor="hsl(217 91% 60%)" />
                    </linearGradient>
                  </defs>
                  <line 
                    x1="0" 
                    y1="4" 
                    x2="100%" 
                    y2="4" 
                    stroke={`url(#right-gradient-${index})`}
                    strokeWidth="2"
                    className="animate-pulse-glow"
                  />
                  {/* Animated dot */}
                  <circle r="4" fill="hsl(0 84% 55%)" className="animate-pulse-glow">
                    <animateMotion dur="2s" repeatCount="indefinite">
                      <mpath href={`#right-path-${index}`} />
                    </animateMotion>
                  </circle>
                  <path id={`right-path-${index}`} d="M 0 4 L 100 4" fill="none" />
                </svg>

                {/* Capability Card */}
                <div className="glass-card px-5 py-3 rounded-xl border border-primary/20 backdrop-blur-xl bg-card/60 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                  <span className="text-base font-medium whitespace-nowrap">{capability}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeamSection;
