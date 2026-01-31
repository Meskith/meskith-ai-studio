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
  const [hasStarted, setHasStarted] = useState(false);

  const totalDuration = 8000; // 8 seconds
  const initialDelay = 1200; // Time for "Hello" to fade in
  const exitDuration = 1500; // Smooth exit transition
  const remainingTime = totalDuration - initialDelay - exitDuration;
  const intervalTime = remainingTime / (helloTranslations.length - 1);

  useEffect(() => {
    // Initial fade in of "Hello"
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, initialDelay);

    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

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
  }, [hasStarted, onComplete, intervalTime]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.05,
            filter: 'blur(20px)',
          }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'linear-gradient(135deg, hsl(280 70% 45%) 0%, hsl(320 80% 50%) 30%, hsl(217 91% 55%) 70%, hsl(280 60% 50%) 100%)',
            }}
          />
          
          {/* Secondary animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              background: [
                'linear-gradient(135deg, hsl(217 91% 55%) 0%, hsl(280 70% 45%) 50%, hsl(0 84% 50%) 100%)',
                'linear-gradient(135deg, hsl(0 84% 50%) 0%, hsl(45 90% 55%) 50%, hsl(280 70% 45%) 100%)',
                'linear-gradient(135deg, hsl(217 91% 55%) 0%, hsl(280 70% 45%) 50%, hsl(0 84% 50%) 100%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: 0,
              ease: 'linear',
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
            style={{ background: 'hsl(45 93% 60% / 0.35)' }}
            animate={{
              x: [-150, 150, -100, 150, -150],
              y: [-80, 100, -50, 80, -80],
              scale: [1, 1.3, 0.9, 1.2, 1],
            }}
            transition={{
              duration: 8,
              repeat: 0,
              ease: 'easeInOut',
            }}
          />
          
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{ background: 'hsl(0 84% 55% / 0.25)' }}
            animate={{
              x: [100, -100, 50, -150, 100],
              y: [50, -80, 100, -50, 50],
              scale: [1.2, 0.9, 1.3, 1, 1.2],
            }}
            transition={{
              duration: 8,
              repeat: 0,
              ease: 'easeInOut',
            }}
          />

          {/* Hello text */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[200px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={currentIndex === 0 ? { 
                  opacity: 0, 
                  scale: 0.6,
                  filter: 'blur(30px)',
                } : { 
                  opacity: 0, 
                  scale: 1.1,
                  filter: 'blur(15px)',
                }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  filter: 'blur(0px)',
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.9,
                  filter: 'blur(20px)',
                }}
                transition={{ 
                  duration: currentIndex === 0 ? 1 : 0.25, 
                  ease: [0.4, 0, 0.2, 1],
                }}
                className="text-7xl md:text-8xl lg:text-[10rem] font-bold text-white text-center tracking-tight"
                style={{
                  textShadow: '0 4px 60px rgba(0,0,0,0.4), 0 0 120px rgba(255,255,255,0.1)',
                  fontFamily: "'Product Sans', sans-serif",
                }}
              >
                {helloTranslations[currentIndex]}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Logo at bottom */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src={meskithLogo} 
              alt="Meskith AI" 
              className="h-8 md:h-10 w-auto brightness-0 invert opacity-80"
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default HelloSplash;
