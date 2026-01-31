import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meskithLogo from '@/assets/meskith-logo.png';

const helloTranslations = [
  'Hello',
  'Hola',
  'Bonjour',
  '你好',
  'こんにちは',
  '안녕하세요',
  'مرحبا',
  'Ciao',
  'Olá',
  'Hallo',
  'Привет',
  'नमस्ते',
  'Merhaba',
  'Xin chào',
  'สวัสดี',
  'Habari',
  'Hej',
  'Cześć',
  'Γειά σου',
  'שלום',
  'Hei',
  'سلام',
  'Salut',
  'Ahoj',
  'Sawubona',
  'Szia',
  'Selamat',
  'Kamusta',
  'Zdravo',
  'Sveiki',
];

interface HelloSplashProps {
  onComplete: () => void;
}

const HelloSplash = ({ onComplete }: HelloSplashProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const totalDuration = 10000;
  const intervalTime = totalDuration / helloTranslations.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= helloTranslations.length - 1) {
          clearInterval(interval);
          setIsExiting(true);
          setTimeout(onComplete, 800);
          return prev;
        }
        return prev + 1;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete, intervalTime]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(180deg, hsl(330 70% 85%) 0%, hsl(300 60% 70%) 25%, hsl(270 70% 60%) 50%, hsl(240 80% 60%) 75%, hsl(210 90% 55%) 100%)',
                'linear-gradient(180deg, hsl(340 65% 82%) 0%, hsl(310 65% 68%) 25%, hsl(280 75% 62%) 50%, hsl(250 85% 58%) 75%, hsl(220 85% 52%) 100%)',
                'linear-gradient(180deg, hsl(325 75% 88%) 0%, hsl(295 58% 72%) 25%, hsl(265 68% 58%) 50%, hsl(235 78% 62%) 75%, hsl(205 92% 58%) 100%)',
                'linear-gradient(180deg, hsl(330 70% 85%) 0%, hsl(300 60% 70%) 25%, hsl(270 70% 60%) 50%, hsl(240 80% 60%) 75%, hsl(210 90% 55%) 100%)',
              ],
            }}
            transition={{
              duration: 10,
              ease: 'linear',
            }}
          />

          {/* Large yellow/lime center orb */}
          <motion.div
            className="absolute rounded-full"
            style={{ 
              width: '55vw',
              height: '55vw',
              maxWidth: '700px',
              maxHeight: '700px',
              background: 'radial-gradient(circle, hsl(60 85% 72% / 0.95) 0%, hsl(55 80% 65% / 0.7) 35%, hsl(50 70% 55% / 0.3) 60%, transparent 75%)',
              filter: 'blur(40px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -30%)',
            }}
            animate={{
              x: ['-50%', '-45%', '-55%', '-48%', '-50%'],
              y: ['-30%', '-35%', '-25%', '-32%', '-30%'],
              scale: [1, 1.08, 0.95, 1.05, 1],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Red/coral orb - left side */}
          <motion.div
            className="absolute rounded-full"
            style={{ 
              width: '35vw',
              height: '35vw',
              maxWidth: '450px',
              maxHeight: '450px',
              background: 'radial-gradient(circle, hsl(5 80% 58% / 0.9) 0%, hsl(0 75% 52% / 0.6) 40%, hsl(355 70% 45% / 0.2) 65%, transparent 80%)',
              filter: 'blur(35px)',
              left: '5%',
              top: '35%',
            }}
            animate={{
              x: ['0%', '8%', '-5%', '5%', '0%'],
              y: ['0%', '-10%', '8%', '-5%', '0%'],
              scale: [1, 1.1, 0.92, 1.05, 1],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Subtle purple orb - right side */}
          <motion.div
            className="absolute rounded-full"
            style={{ 
              width: '25vw',
              height: '25vw',
              maxWidth: '320px',
              maxHeight: '320px',
              background: 'radial-gradient(circle, hsl(280 70% 60% / 0.5) 0%, hsl(270 60% 55% / 0.25) 50%, transparent 75%)',
              filter: 'blur(30px)',
              right: '10%',
              top: '20%',
            }}
            animate={{
              x: ['0%', '-10%', '5%', '-5%', '0%'],
              y: ['0%', '10%', '-8%', '5%', '0%'],
              scale: [1, 0.9, 1.1, 0.95, 1],
            }}
            transition={{
              duration: 10,
              ease: 'easeInOut',
            }}
          />

          {/* Soft white/pink overlay at top */}
          <div 
            className="absolute top-0 left-0 right-0 h-[35%] pointer-events-none"
            style={{ 
              background: 'linear-gradient(180deg, hsl(330 60% 92% / 0.5) 0%, transparent 100%)',
            }}
          />

          {/* Hello text - positioned at top like mediakits */}
          <div className="relative z-10 pt-[12vh] md:pt-[15vh] flex justify-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ 
                  opacity: 0,
                  y: 20,
                }}
                animate={{ 
                  opacity: 1,
                  y: 0,
                }}
                exit={{ 
                  opacity: 0,
                  y: -20,
                }}
                transition={{ 
                  duration: 0.25,
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight"
                style={{
                  color: 'hsl(270 25% 25%)',
                  fontFamily: "system-ui, -apple-system, 'Segoe UI', sans-serif",
                }}
              >
                {helloTranslations[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Logo at bottom center */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img 
              src={meskithLogo} 
              alt="Meskith AI" 
              className="h-7 md:h-9 w-auto brightness-0 invert"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HelloSplash;
