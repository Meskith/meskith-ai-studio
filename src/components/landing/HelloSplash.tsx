import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meskithLogo from '@/assets/meskith-logo.png';

const helloTranslations = [
  'Hello',      // English
  'Hola',       // Spanish
  'Bonjour',    // French
  '你好',        // Chinese
  'こんにちは',   // Japanese
  '안녕하세요',   // Korean
  'مرحبا',      // Arabic
  'Ciao',       // Italian
  'Olá',        // Portuguese
  'Hallo',      // German
  'Привет',     // Russian
  'नमस्ते',      // Hindi
  'Merhaba',    // Turkish
  'Xin chào',   // Vietnamese
  'สวัสดี',      // Thai
  'Habari',     // Swahili
  'Hej',        // Swedish
  'Cześć',      // Polish
  'Γειά σου',   // Greek
  'שלום',       // Hebrew
  'Hei',        // Norwegian
  'سلام',       // Persian
  'Salut',      // Romanian
  'Ahoj',       // Czech
  'Sawubona',   // Zulu
  'Szia',       // Hungarian
  'Hei',        // Finnish
  'Selamat',    // Malay
  'Kamusta',    // Filipino
  'Zdravo',     // Serbian
  'Sveiki',     // Latvian
  'Përshëndetje', // Albanian
  'Tere',       // Estonian
];

interface HelloSplashProps {
  onComplete: () => void;
}

const HelloSplash = ({ onComplete }: HelloSplashProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [showText, setShowText] = useState(false);

  const totalDuration = 10000; // 10 seconds
  const initialDelay = 800; // Time before "Hello" appears
  const exitDuration = 1200; // Smooth exit transition
  const textCycleDuration = totalDuration - initialDelay - exitDuration;
  const intervalTime = textCycleDuration / helloTranslations.length;

  useEffect(() => {
    // Show text after initial delay
    const showTimer = setTimeout(() => {
      setShowText(true);
    }, initialDelay);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showText) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= helloTranslations.length - 1) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, exitDuration);
          return prev;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [showText, onComplete, intervalTime]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.02,
          }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Base gradient background - pink to purple to blue */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, hsl(330 80% 75%) 0%, hsl(280 70% 65%) 35%, hsl(260 80% 60%) 65%, hsl(220 90% 60%) 100%)',
                'linear-gradient(145deg, hsl(340 75% 70%) 0%, hsl(290 75% 60%) 35%, hsl(250 85% 65%) 65%, hsl(200 85% 55%) 100%)',
                'linear-gradient(125deg, hsl(320 85% 72%) 0%, hsl(270 80% 62%) 35%, hsl(240 75% 58%) 65%, hsl(210 95% 58%) 100%)',
                'linear-gradient(135deg, hsl(330 80% 75%) 0%, hsl(280 70% 65%) 35%, hsl(260 80% 60%) 65%, hsl(220 90% 60%) 100%)',
              ],
            }}
            transition={{
              duration: 10,
              repeat: 0,
              ease: 'linear',
            }}
          />

          {/* Large center yellow/lime orb */}
          <motion.div
            className="absolute w-[600px] h-[600px] rounded-full"
            style={{ 
              background: 'radial-gradient(circle, hsl(65 90% 70% / 0.9) 0%, hsl(65 80% 60% / 0.6) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            initial={{ x: 0, y: 100, scale: 0.8, opacity: 0 }}
            animate={{
              x: [0, 50, -30, 20, 0],
              y: [100, 50, 120, 80, 100],
              scale: [0.8, 1.1, 0.95, 1.05, 1],
              opacity: [0, 0.9, 0.85, 0.9, 0.85],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Red/coral orb on left */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full"
            style={{ 
              background: 'radial-gradient(circle, hsl(0 85% 60% / 0.85) 0%, hsl(350 80% 55% / 0.5) 50%, transparent 70%)',
              filter: 'blur(50px)',
            }}
            initial={{ x: -300, y: -50, scale: 0.6, opacity: 0 }}
            animate={{
              x: [-300, -250, -320, -280, -300],
              y: [-50, 0, -80, -30, -50],
              scale: [0.6, 0.9, 0.8, 0.85, 0.8],
              opacity: [0, 0.8, 0.75, 0.8, 0.75],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Purple/magenta accent orb */}
          <motion.div
            className="absolute w-[350px] h-[350px] rounded-full"
            style={{ 
              background: 'radial-gradient(circle, hsl(300 80% 65% / 0.7) 0%, hsl(280 70% 55% / 0.4) 50%, transparent 70%)',
              filter: 'blur(45px)',
            }}
            initial={{ x: 200, y: -150, scale: 0.5, opacity: 0 }}
            animate={{
              x: [200, 250, 180, 220, 200],
              y: [-150, -100, -180, -130, -150],
              scale: [0.5, 0.8, 0.7, 0.75, 0.7],
              opacity: [0, 0.7, 0.65, 0.7, 0.65],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Soft white/pink glow at top */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[40%]"
            style={{ 
              background: 'linear-gradient(180deg, hsl(330 50% 92% / 0.6) 0%, transparent 100%)',
            }}
            animate={{
              opacity: [0.4, 0.7, 0.5, 0.6, 0.5],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Hello text - dark color like mediakits */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[200px]">
            <AnimatePresence mode="wait">
              {showText && (
                <motion.h1
                  key={currentIndex}
                  initial={currentIndex === 0 ? { 
                    opacity: 0, 
                    scale: 0.7,
                    y: 30,
                  } : { 
                    opacity: 0, 
                    scale: 1.05,
                    y: -10,
                  }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: 0,
                  }}
                  exit={{ 
                    opacity: 0, 
                    scale: 0.95,
                    y: 15,
                  }}
                  transition={{ 
                    duration: currentIndex === 0 ? 0.8 : 0.2, 
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className="text-7xl md:text-8xl lg:text-[10rem] font-bold text-center tracking-tight"
                  style={{
                    color: 'hsl(280 30% 20%)',
                    textShadow: '0 2px 30px rgba(255,255,255,0.3)',
                    fontFamily: "'Product Sans', system-ui, sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {helloTranslations[currentIndex]}
                </motion.h1>
              )}
            </AnimatePresence>
          </div>

          {/* Logo at bottom - white */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
          >
            <img 
              src={meskithLogo} 
              alt="Meskith AI" 
              className="h-8 md:h-10 w-auto brightness-0 invert opacity-90"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HelloSplash;
