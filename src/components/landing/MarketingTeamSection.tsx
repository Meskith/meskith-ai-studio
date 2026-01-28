import { motion } from 'framer-motion';
import meskithLogo from '@/assets/meskith-logo.png';

const leftCapabilities = [
  { label: 'Create Your Content', delay: 0.1 },
  { label: 'Analyze & Strategize', delay: 0.2 },
  { label: 'Build Your Brand Identity', delay: 0.3 },
];

const rightCapabilities = [
  { label: 'Visualize & Create Videos', delay: 0.1 },
  { label: 'Connect Social Media Accounts', delay: 0.2 },
  { label: 'Share & Schedule', delay: 0.3 },
];

const topCapability = { label: 'Share & Schedule', delay: 0 };

const MarketingTeamSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your AI-Powered{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Marketing Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            5 experts working for your brand, plus Visual & Video Studio
          </p>
        </motion.div>

        {/* Central Layout */}
        <div className="relative min-h-[500px] flex items-center justify-center">
          {/* Connection Lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 800 500"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* CSS for flowing animation */}
            <style>
              {`
                @keyframes flowLeft {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: -30; }
                }
                @keyframes flowRight {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: 30; }
                }
                @keyframes flowUp {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: 30; }
                }
                .flow-left {
                  stroke-dasharray: 8 6;
                  animation: flowLeft 1s linear infinite;
                }
                .flow-right {
                  stroke-dasharray: 8 6;
                  animation: flowRight 1s linear infinite;
                }
                .flow-up {
                  stroke-dasharray: 8 6;
                  animation: flowUp 1s linear infinite;
                }
                @keyframes pulse-dot {
                  0%, 100% { opacity: 0.6; r: 4; }
                  50% { opacity: 1; r: 6; }
                }
                .pulse-dot {
                  animation: pulse-dot 2s ease-in-out infinite;
                }
              `}
            </style>

            {/* Left side lines - Blue gradient with flow */}
            <path
              d="M400 250 Q300 250 180 120"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-left"
            />
            <path
              d="M400 250 Q280 250 150 250"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-left"
              style={{ animationDelay: '0.2s' }}
            />
            <path
              d="M400 250 Q300 250 180 380"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-left"
              style={{ animationDelay: '0.4s' }}
            />

            {/* Right side lines - Red gradient with flow */}
            <path
              d="M400 250 Q500 250 620 120"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-right"
            />
            <path
              d="M400 250 Q520 250 650 250"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-right"
              style={{ animationDelay: '0.2s' }}
            />
            <path
              d="M400 250 Q500 250 620 380"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-right"
              style={{ animationDelay: '0.4s' }}
            />

            {/* Top line - Mixed gradient with flow */}
            <path
              d="M400 250 Q400 150 400 60"
              stroke="url(#mixedGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-up"
            />

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="blueGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="1" />
                <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(0 84% 55%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="mixedGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="1" />
              </linearGradient>
            </defs>

            {/* Pulsing connection dots */}
            <circle cx="180" cy="120" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" />
            <circle cx="150" cy="250" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" style={{ animationDelay: '0.3s' }} />
            <circle cx="180" cy="380" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" style={{ animationDelay: '0.6s' }} />
            <circle cx="620" cy="120" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.15s' }} />
            <circle cx="650" cy="250" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.45s' }} />
            <circle cx="620" cy="380" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.75s' }} />
            <circle cx="400" cy="60" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.9s' }} />
          </svg>

          {/* Central Logo with Glow */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="relative z-10"
          >
            {/* Outer glow rings */}
            <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-20 blur-2xl animate-pulse" />
            <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-30 blur-xl" />
            
            {/* Logo container */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] p-[2px] shadow-2xl">
              <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                <img 
                  src={meskithLogo} 
                  alt="Meskith AI" 
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* Left Side Capabilities */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-16 md:gap-20">
            {leftCapabilities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className={`${index === 0 ? '-mt-16' : ''} ${index === 2 ? 'mt-16' : ''}`}
              >
                <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-xl border-l-2 border-l-[hsl(217,91%,60%)] hover:border-l-[hsl(217,91%,70%)] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side Capabilities */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-16 md:gap-20">
            {rightCapabilities.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.delay }}
                className={`${index === 0 ? '-mt-16' : ''} ${index === 2 ? 'mt-16' : ''}`}
              >
                <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-xl border-r-2 border-r-[hsl(0,84%,55%)] hover:border-r-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer">
                  <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Top Capability */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute top-0 left-1/2 -translate-x-1/2"
          >
            <div className="glass-card px-4 py-3 md:px-6 md:py-4 rounded-xl border-t-2 border-t-[hsl(0,84%,55%)] hover:border-t-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer">
              <span className="text-sm md:text-base font-medium text-foreground whitespace-nowrap">
                {topCapability.label}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeamSection;
