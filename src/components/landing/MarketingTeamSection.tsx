import { motion } from 'framer-motion';
import { useEffect, useRef, useState, useCallback } from 'react';
import meskithLogo from '@/assets/meskith-logo.png';

interface Position {
  x: number;
  y: number;
}

interface ConnectorLine {
  id: string;
  start: Position;
  end: Position;
  side: 'left' | 'right' | 'top';
  index: number;
}

const leftServices = [
  { id: 'create-content', label: 'Create Your Content' },
  { id: 'analyze-strategize', label: 'Analyze & Strategize' },
  { id: 'build-identity', label: 'Build Your Brand Identity' },
];

const rightServices = [
  { id: 'visualize-videos', label: 'Visualize & Create Videos' },
  { id: 'connect-social', label: 'Connect Social Media Accounts' },
  { id: 'schedule-posts', label: 'Share & Schedule' },
];

const topService = { id: 'share-schedule-top', label: 'Share & Schedule' };

const MarketingTeamSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const [lines, setLines] = useState<ConnectorLine[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const setPillRef = useCallback((id: string, el: HTMLDivElement | null) => {
    if (el) {
      pillRefs.current.set(id, el);
    } else {
      pillRefs.current.delete(id);
    }
  }, []);

  const calculateLines = useCallback(() => {
    if (!containerRef.current || !coreRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const coreRect = coreRef.current.getBoundingClientRect();

    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    if (mobile) {
      setLines([]);
      return;
    }

    const coreCenter: Position = {
      x: coreRect.left + coreRect.width / 2 - containerRect.left,
      y: coreRect.top + coreRect.height / 2 - containerRect.top,
    };

    const newLines: ConnectorLine[] = [];

    leftServices.forEach((service, index) => {
      const pillEl = pillRefs.current.get(service.id);
      if (!pillEl) return;

      const pillRect = pillEl.getBoundingClientRect();
      const pillEnd: Position = {
        x: pillRect.right - containerRect.left,
        y: pillRect.top + pillRect.height / 2 - containerRect.top,
      };

      newLines.push({
        id: service.id,
        start: coreCenter,
        end: pillEnd,
        side: 'left',
        index,
      });
    });

    rightServices.forEach((service, index) => {
      const pillEl = pillRefs.current.get(service.id);
      if (!pillEl) return;

      const pillRect = pillEl.getBoundingClientRect();
      const pillEnd: Position = {
        x: pillRect.left - containerRect.left,
        y: pillRect.top + pillRect.height / 2 - containerRect.top,
      };

      newLines.push({
        id: service.id,
        start: coreCenter,
        end: pillEnd,
        side: 'right',
        index,
      });
    });

    const topPillEl = pillRefs.current.get(topService.id);
    if (topPillEl) {
      const pillRect = topPillEl.getBoundingClientRect();
      const pillEnd: Position = {
        x: pillRect.left + pillRect.width / 2 - containerRect.left,
        y: pillRect.bottom - containerRect.top,
      };

      newLines.push({
        id: topService.id,
        start: coreCenter,
        end: pillEnd,
        side: 'top',
        index: 0,
      });
    }

    setLines(newLines);
  }, []);

  useEffect(() => {
    const timer = setTimeout(calculateLines, 150);

    const handleResize = () => requestAnimationFrame(calculateLines);
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => requestAnimationFrame(calculateLines));
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    document.fonts.ready.then(() => setTimeout(calculateLines, 50));

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [calculateLines]);

  // Generate smooth S-curve path matching the reference design
  const generatePath = (line: ConnectorLine): string => {
    const { start, end, side } = line;
    
    if (side === 'left') {
      // Smooth curve that goes outward to the left then curves to the pill
      const midX = start.x - (start.x - end.x) * 0.6;
      const cp1x = start.x - 40;
      const cp1y = start.y;
      const cp2x = midX;
      const cp2y = end.y;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else if (side === 'right') {
      // Mirror curve for right side
      const midX = start.x + (end.x - start.x) * 0.6;
      const cp1x = start.x + 40;
      const cp1y = start.y;
      const cp2x = midX;
      const cp2y = end.y;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else {
      // Top - smooth upward curve
      const cp1x = start.x;
      const cp1y = start.y - 50;
      const cp2x = end.x;
      const cp2y = end.y + 30;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* CSS for animated glow */}
      <style>{`
        @keyframes flowGlow {
          0% {
            stroke-dashoffset: 1000;
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 0.3;
          }
        }
        
        @keyframes pulseGlow {
          0%, 100% {
            filter: drop-shadow(0 0 4px currentColor) drop-shadow(0 0 8px currentColor);
            opacity: 0.6;
          }
          50% {
            filter: drop-shadow(0 0 8px currentColor) drop-shadow(0 0 16px currentColor);
            opacity: 1;
          }
        }
        
        .connector-line {
          stroke-dasharray: 8 4;
          animation: flowGlow 3s linear infinite;
        }
        
        .connector-line-left {
          animation-delay: 0s;
        }
        
        .connector-line-right {
          animation-delay: 1.5s;
        }
        
        .connector-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .dot-pulse {
          animation: pulseGlow 2s ease-in-out infinite;
        }
      `}</style>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your AI-Powered{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">
              Marketing Team
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            6 experts working for your brand, plus Visual & Video Studio
          </p>
        </motion.div>

        {/* Central Layout Container */}
        <div 
          ref={containerRef}
          className="relative min-h-[420px] md:min-h-[480px]"
        >
          {/* SVG Connector Lines */}
          {!isMobile && lines.length > 0 && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                {/* Blue/Orange gradient for left lines */}
                <linearGradient id="leftLineGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(30 90% 55%)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="hsl(25 85% 50%)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(20 80% 45%)" stopOpacity="0.5" />
                </linearGradient>
                
                {/* Purple gradient for right lines */}
                <linearGradient id="rightLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="hsl(280 65% 55%)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(290 60% 50%)" stopOpacity="0.5" />
                </linearGradient>
                
                {/* Mixed gradient for top line */}
                <linearGradient id="topLineGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(270 70% 60%)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="hsl(280 65% 55%)" stopOpacity="0.6" />
                </linearGradient>

                {/* Glow filters */}
                <filter id="glowLeft" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodColor="hsl(30 90% 55%)" floodOpacity="0.5" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                
                <filter id="glowRight" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood floodColor="hsl(270 70% 60%)" floodOpacity="0.5" />
                  <feComposite in2="blur" operator="in" />
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {lines.map((line) => {
                const gradientId = line.side === 'left' ? 'leftLineGradient' : 
                                   line.side === 'right' ? 'rightLineGradient' : 'topLineGradient';
                const filterId = line.side === 'left' ? 'glowLeft' : 'glowRight';
                const dotColor = line.side === 'left' ? 'hsl(30 90% 55%)' : 'hsl(270 70% 60%)';
                const animClass = line.side === 'left' ? 'connector-line-left' : 'connector-line-right';
                
                return (
                  <g key={line.id}>
                    {/* Base line with subtle glow */}
                    <motion.path
                      d={generatePath(line)}
                      stroke={`url(#${gradientId})`}
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      filter={`url(#${filterId})`}
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 + line.index * 0.1 }}
                    />
                    
                    {/* Animated flowing glow overlay */}
                    <path
                      d={generatePath(line)}
                      stroke={`url(#${gradientId})`}
                      strokeWidth="3"
                      fill="none"
                      strokeLinecap="round"
                      className={`connector-line ${animClass} connector-glow`}
                      style={{ 
                        animationDelay: `${line.index * 0.5}s`,
                        opacity: 0.6
                      }}
                    />
                    
                    {/* Dot at pill edge */}
                    <motion.circle
                      cx={line.end.x}
                      cy={line.end.y}
                      r="5"
                      fill={dotColor}
                      className="dot-pulse"
                      style={{ animationDelay: `${line.index * 0.3}s` }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 1 + line.index * 0.1 }}
                    />
                  </g>
                );
              })}
            </svg>
          )}

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Left Side Services */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-end z-10" style={{ width: '260px' }}>
              {leftServices.map((service, index) => {
                const yOffset = (index - 1) * 90;
                return (
                  <motion.div
                    key={service.id}
                    ref={(el) => setPillRef(service.id, el)}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    style={{ transform: `translateY(${yOffset}px)` }}
                    className="mb-3"
                  >
                    <div className="relative px-5 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-[hsl(30,70%,40%)/0.3] hover:border-[hsl(30,80%,50%)/0.5] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-[0_0_20px_hsl(30,80%,50%,0.2)]">
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {service.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side Services */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-start z-10" style={{ width: '280px' }}>
              {rightServices.map((service, index) => {
                const yOffset = (index - 1) * 90;
                return (
                  <motion.div
                    key={service.id}
                    ref={(el) => setPillRef(service.id, el)}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    style={{ transform: `translateY(${yOffset}px)` }}
                    className="mb-3"
                  >
                    <div className="relative px-5 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-[hsl(270,50%,40%)/0.3] hover:border-[hsl(270,60%,50%)/0.5] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg hover:shadow-[0_0_20px_hsl(270,60%,50%,0.2)]">
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {service.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Top Service */}
            <motion.div
              ref={(el) => setPillRef(topService.id, el)}
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
            >
              <div className="relative px-5 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 hover:border-[hsl(270,60%,50%)/0.5] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                <span className="text-sm font-medium text-foreground whitespace-nowrap">
                  {topService.label}
                </span>
              </div>
            </motion.div>

            {/* Central Logo */}
            <motion.div
              ref={coreRef}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: 'spring' }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="relative">
                {/* Animated glow rings */}
                <div className="absolute inset-0 -m-12 rounded-full opacity-20 blur-3xl animate-pulse"
                     style={{ background: 'linear-gradient(135deg, hsl(30 90% 55%), hsl(270 70% 60%))' }} />
                <div className="absolute inset-0 -m-6 rounded-full opacity-30 blur-xl"
                     style={{ background: 'linear-gradient(135deg, hsl(30 90% 55%), hsl(270 70% 60%))' }} />
                
                {/* Logo container with gradient border */}
                <div className="relative w-32 h-32 rounded-2xl p-[3px] shadow-2xl"
                     style={{ background: 'linear-gradient(135deg, hsl(30 90% 55%), hsl(270 70% 60%))' }}>
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={meskithLogo} 
                      alt="Meskith AI" 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center gap-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="px-5 py-3 rounded-xl bg-card/80 backdrop-blur-sm border border-border/50">
                <span className="text-sm font-medium text-foreground">
                  {topService.label}
                </span>
              </div>
            </motion.div>

            <div className="w-0.5 h-4 opacity-50" style={{ background: 'linear-gradient(to bottom, hsl(270 70% 60%), hsl(30 90% 55%))' }} />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative my-2"
            >
              <div className="absolute inset-0 -m-6 rounded-full opacity-20 blur-xl animate-pulse"
                   style={{ background: 'linear-gradient(135deg, hsl(30 90% 55%), hsl(270 70% 60%))' }} />
              <div className="relative w-20 h-20 rounded-2xl p-[2px] shadow-2xl"
                   style={{ background: 'linear-gradient(135deg, hsl(30 90% 55%), hsl(270 70% 60%))' }}>
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                  <img src={meskithLogo} alt="Meskith AI" className="w-14 h-14 object-contain" />
                </div>
              </div>
            </motion.div>

            <div className="w-0.5 h-4 opacity-50" style={{ background: 'linear-gradient(to bottom, hsl(30 90% 55%), hsl(270 70% 60%))' }} />

            <div className="flex flex-col gap-2 w-full max-w-xs">
              {[...leftServices, ...rightServices].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <div className={`px-4 py-2.5 rounded-xl bg-card/80 backdrop-blur-sm transition-all duration-300 ${
                    index < 3 
                      ? 'border-l-2 border-l-[hsl(30,80%,50%)]' 
                      : 'border-r-2 border-r-[hsl(270,60%,55%)]'
                  }`}>
                    <span className="text-sm font-medium text-foreground">
                      {service.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingTeamSection;
