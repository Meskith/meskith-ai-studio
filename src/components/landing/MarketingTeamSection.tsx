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
}

const leftServices = [
  { id: 'create-content', label: 'Create Your Content' },
  { id: 'analyze-strategize', label: 'Analyze & Strategize' },
  { id: 'build-identity', label: 'Build Your Brand Identity' },
];

const rightServices = [
  { id: 'visualize-videos', label: 'Visualize & Create Videos' },
  { id: 'connect-social', label: 'Connect Social Media Accounts' },
  { id: 'schedule-posts', label: 'Schedule & Post' },
];

const topService = { id: 'share-schedule', label: 'Share & Schedule' };

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

    // Core center position relative to container
    const coreCenter: Position = {
      x: coreRect.left + coreRect.width / 2 - containerRect.left,
      y: coreRect.top + coreRect.height / 2 - containerRect.top,
    };

    const newLines: ConnectorLine[] = [];

    // Calculate lines for left services
    leftServices.forEach((service) => {
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
      });
    });

    // Calculate lines for right services
    rightServices.forEach((service) => {
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
      });
    });

    // Calculate line for top service
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
      });
    }

    setLines(newLines);
  }, []);

  useEffect(() => {
    const timer = setTimeout(calculateLines, 150);

    const handleResize = () => {
      requestAnimationFrame(calculateLines);
    };
    window.addEventListener('resize', handleResize);

    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(calculateLines);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    document.fonts.ready.then(() => {
      setTimeout(calculateLines, 50);
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [calculateLines]);

  // Generate symmetrical SVG path for curved connector
  const generatePath = (line: ConnectorLine): string => {
    const { start, end, side } = line;
    
    if (side === 'left') {
      const dx = start.x - end.x;
      const dy = end.y - start.y;
      const curveOffset = dx * 0.5;
      
      // Control points for smooth S-curve
      const cp1x = start.x - curveOffset;
      const cp1y = start.y + dy * 0.1;
      const cp2x = end.x + curveOffset * 0.6;
      const cp2y = end.y - dy * 0.1;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else if (side === 'right') {
      const dx = end.x - start.x;
      const dy = end.y - start.y;
      const curveOffset = dx * 0.5;
      
      // Mirror of left side for perfect symmetry
      const cp1x = start.x + curveOffset;
      const cp1y = start.y + dy * 0.1;
      const cp2x = end.x - curveOffset * 0.6;
      const cp2y = end.y - dy * 0.1;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else {
      // Top - smooth curve upward
      const dy = start.y - end.y;
      const cp1x = start.x;
      const cp1y = start.y - dy * 0.6;
      const cp2x = end.x;
      const cp2y = end.y + dy * 0.2;
      
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    }
  };

  const getGradientId = (side: string) => {
    if (side === 'left') return 'blueGradientLine';
    if (side === 'right') return 'redGradientLine';
    return 'topGradientLine';
  };

  const getDotColor = (side: string) => {
    if (side === 'left') return 'hsl(217 91% 60%)';
    if (side === 'right') return 'hsl(0 84% 55%)';
    return 'hsl(0 84% 55%)';
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden">
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
            5 experts working for your brand, plus Visual & Video Studio
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
                <linearGradient id="blueGradientLine" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="redGradientLine" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(0 84% 55%)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="0.2" />
                </linearGradient>
                <linearGradient id="topGradientLine" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="0.7" />
                </linearGradient>
                <filter id="lineGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {lines.map((line, index) => (
                <g key={line.id} filter="url(#lineGlow)">
                  <motion.path
                    d={generatePath(line)}
                    stroke={`url(#${getGradientId(line.side)})`}
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.08 }}
                  />
                  <motion.circle
                    cx={line.end.x}
                    cy={line.end.y}
                    r="5"
                    fill={getDotColor(line.side)}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.9 + index * 0.08 }}
                  />
                </g>
              ))}
            </svg>
          )}

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Left Side Services - Symmetrical positioning */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col items-end z-10" style={{ width: '240px' }}>
              {leftServices.map((service, index) => {
                const yOffset = (index - 1) * 100; // -100, 0, 100 for symmetry
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
                    <div className="glass-card px-5 py-3 rounded-xl border-r-2 border-r-[hsl(217,91%,60%)] hover:border-r-[hsl(217,91%,70%)] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
                      <span className="text-sm font-medium text-foreground whitespace-nowrap">
                        {service.label}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right Side Services - Symmetrical positioning */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col items-start z-10" style={{ width: '240px' }}>
              {rightServices.map((service, index) => {
                const yOffset = (index - 1) * 100; // -100, 0, 100 for symmetry
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
                    <div className="glass-card px-5 py-3 rounded-xl border-l-2 border-l-[hsl(0,84%,55%)] hover:border-l-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
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
              <div className="glass-card px-5 py-3 rounded-xl border-b-2 border-b-[hsl(0,84%,55%)] hover:border-b-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg">
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
                {/* Outer glow rings */}
                <div className="absolute inset-0 -m-10 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-15 blur-3xl animate-pulse" />
                <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-25 blur-xl" />
                
                {/* Logo container */}
                <div className="relative w-32 h-32 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] p-[2px] shadow-2xl">
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
              <div className="glass-card px-5 py-3 rounded-xl border-b-2 border-b-[hsl(0,84%,55%)]">
                <span className="text-sm font-medium text-foreground">
                  {topService.label}
                </span>
              </div>
            </motion.div>

            <div className="w-0.5 h-4 bg-gradient-to-b from-[hsl(0,84%,55%)] to-[hsl(217,91%,60%)] opacity-50" />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative my-2"
            >
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-20 blur-xl animate-pulse" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] p-[2px] shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                  <img src={meskithLogo} alt="Meskith AI" className="w-14 h-14 object-contain" />
                </div>
              </div>
            </motion.div>

            <div className="w-0.5 h-4 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-50" />

            <div className="flex flex-col gap-2 w-full max-w-xs">
              {[...leftServices, ...rightServices].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                >
                  <div className={`glass-card px-4 py-2.5 rounded-xl transition-all duration-300 ${
                    index < 3 
                      ? 'border-l-2 border-l-[hsl(217,91%,60%)]' 
                      : 'border-r-2 border-r-[hsl(0,84%,55%)]'
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
