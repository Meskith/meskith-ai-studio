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

    // Check if mobile layout
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
      // End at center-right edge of left pill
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
      // End at center-left edge of right pill
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
      // End at center-bottom edge of top pill
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
    // Initial calculation after a small delay for DOM to settle
    const timer = setTimeout(calculateLines, 100);

    // Recalculate on resize
    const handleResize = () => calculateLines();
    window.addEventListener('resize', handleResize);

    // ResizeObserver for layout shifts
    const resizeObserver = new ResizeObserver(() => {
      calculateLines();
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Font load detection
    document.fonts.ready.then(() => {
      calculateLines();
    });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
    };
  }, [calculateLines]);

  // Generate SVG path for curved connector
  const generatePath = (line: ConnectorLine): string => {
    const { start, end, side } = line;
    const curveStrength = Math.abs(start.x - end.x) * 0.4;

    if (side === 'left') {
      // Curve outward to the left
      const cp1x = start.x - curveStrength;
      const cp1y = start.y;
      const cp2x = end.x + curveStrength * 0.5;
      const cp2y = end.y;
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else if (side === 'right') {
      // Curve outward to the right
      const cp1x = start.x + curveStrength;
      const cp1y = start.y;
      const cp2x = end.x - curveStrength * 0.5;
      const cp2y = end.y;
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    } else {
      // Top - curve upward
      const cp1x = start.x;
      const cp1y = start.y - Math.abs(start.y - end.y) * 0.5;
      const cp2x = end.x;
      const cp2y = end.y + Math.abs(start.y - end.y) * 0.3;
      return `M ${start.x} ${start.y} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${end.x} ${end.y}`;
    }
  };

  const getGradientId = (side: string) => {
    if (side === 'left') return 'blueGradient';
    if (side === 'right') return 'redGradient';
    return 'mixedGradient';
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
          className="relative min-h-[400px] md:min-h-[500px]"
        >
          {/* SVG Connector Lines - Behind everything */}
          {!isMobile && lines.length > 0 && (
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 0 }}
            >
              <defs>
                <linearGradient id="blueGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="redGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(0 84% 55%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="mixedGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="hsl(0 84% 55%)" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {lines.map((line) => (
                <g key={line.id} filter="url(#glow)">
                  <motion.path
                    d={generatePath(line)}
                    stroke={`url(#${getGradientId(line.side)})`}
                    strokeWidth="2"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                  />
                  {/* Dot at the end (pill edge) */}
                  <motion.circle
                    cx={line.end.x}
                    cy={line.end.y}
                    r="4"
                    fill={getDotColor(line.side)}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 1.2 }}
                  />
                </g>
              ))}
            </svg>
          )}

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {/* Left Side Services */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-10">
              {leftServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  ref={(el) => setPillRef(service.id, el)}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className={`${index === 0 ? '-mt-12' : ''} ${index === 2 ? 'mt-12' : ''}`}
                >
                  <div className="glass-card px-5 py-3 rounded-xl border-l-2 border-l-[hsl(217,91%,60%)] hover:border-l-[hsl(217,91%,70%)] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {service.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side Services */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-12 z-10">
              {rightServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  ref={(el) => setPillRef(service.id, el)}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className={`${index === 0 ? '-mt-12' : ''} ${index === 2 ? 'mt-12' : ''}`}
                >
                  <div className="glass-card px-5 py-3 rounded-xl border-r-2 border-r-[hsl(0,84%,55%)] hover:border-r-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer">
                    <span className="text-sm font-medium text-foreground whitespace-nowrap">
                      {service.label}
                    </span>
                  </div>
                </motion.div>
              ))}
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
              <div className="glass-card px-5 py-3 rounded-xl border-t-2 border-t-[hsl(0,84%,55%)] hover:border-t-[hsl(0,84%,65%)] transition-all duration-300 hover:scale-105 cursor-pointer">
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
                <div className="absolute inset-0 -m-8 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-20 blur-2xl animate-pulse" />
                <div className="absolute inset-0 -m-4 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-30 blur-xl" />
                
                {/* Logo container */}
                <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] p-[2px] shadow-2xl">
                  <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                    <img 
                      src={meskithLogo} 
                      alt="Meskith AI" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Mobile Layout - Vertical with arrows */}
          <div className="md:hidden flex flex-col items-center gap-6">
            {/* Top Service */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className="glass-card px-5 py-3 rounded-xl border-t-2 border-t-[hsl(0,84%,55%)]">
                <span className="text-sm font-medium text-foreground">
                  {topService.label}
                </span>
              </div>
            </motion.div>

            {/* Arrow down */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-[hsl(0,84%,55%)] to-[hsl(217,91%,60%)] opacity-50" />

            {/* Central Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative my-4"
            >
              <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-20 blur-xl animate-pulse" />
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] p-[2px] shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center overflow-hidden">
                  <img 
                    src={meskithLogo} 
                    alt="Meskith AI" 
                    className="w-16 h-16 object-contain"
                  />
                </div>
              </div>
            </motion.div>

            {/* Arrow down */}
            <div className="w-0.5 h-6 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] opacity-50" />

            {/* All services in vertical list */}
            <div className="flex flex-col gap-3 w-full max-w-xs">
              {[...leftServices, ...rightServices].map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                >
                  <div className={`glass-card px-5 py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer ${
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
