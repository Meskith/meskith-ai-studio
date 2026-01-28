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
                @keyframes flowOut {
                  0% { stroke-dashoffset: 0; }
                  100% { stroke-dashoffset: -40; }
                }
                .flow-line {
                  stroke-dasharray: 6 8;
                  animation: flowOut 1.5s linear infinite;
                }
                @keyframes pulse-dot {
                  0%, 100% { opacity: 0.5; r: 3; }
                  50% { opacity: 1; r: 5; }
                }
                .pulse-dot {
                  animation: pulse-dot 2s ease-in-out infinite;
                }
              `}
            </style>

            {/* Gradient Definitions */}
            <defs>
              <linearGradient id="blueGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="hsl(280 70% 50%)" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(280 70% 50%)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id="topLeftGradient" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(280 70% 50%)" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="topRightGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(0 84% 55%)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="hsl(280 70% 50%)" stopOpacity="0.5" />
              </linearGradient>
            </defs>

            {/* Left side curved lines */}
            {/* Top left - Create Your Content */}
            <path
              d="M400 250 C350 250, 300 200, 250 150 Q220 120, 170 110"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
            />
            {/* Middle left - Analyze & Strategize */}
            <path
              d="M400 250 C320 250, 250 250, 170 250"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.3s' }}
            />
            {/* Bottom left - Build Your Brand Identity */}
            <path
              d="M400 250 C350 250, 300 300, 250 350 Q220 380, 170 390"
              stroke="url(#blueGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.6s' }}
            />

            {/* Right side curved lines */}
            {/* Top right - Visualize & Create Videos */}
            <path
              d="M400 250 C450 250, 500 200, 550 150 Q580 120, 630 110"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.15s' }}
            />
            {/* Middle right - Connect Social Media Accounts */}
            <path
              d="M400 250 C480 250, 550 250, 630 250"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.45s' }}
            />
            {/* Bottom right - Share & Schedule */}
            <path
              d="M400 250 C450 250, 500 300, 550 350 Q580 380, 630 390"
              stroke="url(#redGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.75s' }}
            />

            {/* Top center lines - curved upward */}
            <path
              d="M400 250 C380 200, 360 100, 340 50"
              stroke="url(#topLeftGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.5s' }}
            />
            <path
              d="M400 250 C420 200, 440 100, 460 50"
              stroke="url(#topRightGradient)"
              strokeWidth="2"
              fill="none"
              className="flow-line"
              style={{ animationDelay: '0.7s' }}
            />

            {/* Pulsing connection dots at endpoints */}
            <circle cx="170" cy="110" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" />
            <circle cx="170" cy="250" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" style={{ animationDelay: '0.3s' }} />
            <circle cx="170" cy="390" r="4" fill="hsl(217 91% 60%)" className="pulse-dot" style={{ animationDelay: '0.6s' }} />
            <circle cx="630" cy="110" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.15s' }} />
            <circle cx="630" cy="250" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.45s' }} />
            <circle cx="630" cy="390" r="4" fill="hsl(0 84% 55%)" className="pulse-dot" style={{ animationDelay: '0.75s' }} />
            <circle cx="340" cy="50" r="4" fill="hsl(280 70% 50%)" className="pulse-dot" style={{ animationDelay: '0.5s' }} />
            <circle cx="460" cy="50" r="4" fill="hsl(280 70% 50%)" className="pulse-dot" style={{ animationDelay: '0.7s' }} />

            {/* Mid-point dots along curves */}
            <circle cx="280" cy="180" r="3" fill="hsl(250 80% 55%)" className="pulse-dot" style={{ animationDelay: '0.1s' }} />
            <circle cx="280" cy="320" r="3" fill="hsl(250 80% 55%)" className="pulse-dot" style={{ animationDelay: '0.4s' }} />
            <circle cx="520" cy="180" r="3" fill="hsl(330 80% 55%)" className="pulse-dot" style={{ animationDelay: '0.25s' }} />
            <circle cx="520" cy="320" r="3" fill="hsl(330 80% 55%)" className="pulse-dot" style={{ animationDelay: '0.55s' }} />
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
