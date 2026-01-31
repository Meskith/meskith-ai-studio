import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import meskithLogo from '@/assets/meskith-logo.png';

const helloTranslations = [
  { text: 'Hello', lang: 'English' },
  { text: 'Hola', lang: 'Spanish' },
  { text: 'Bonjour', lang: 'French' },
  { text: '你好', lang: 'Chinese' },
  { text: 'こんにちは', lang: 'Japanese' },
  { text: '안녕하세요', lang: 'Korean' },
  { text: 'مرحبا', lang: 'Arabic' },
  { text: 'Ciao', lang: 'Italian' },
  { text: 'Olá', lang: 'Portuguese' },
  { text: 'Hallo', lang: 'German' },
  { text: 'Привет', lang: 'Russian' },
  { text: 'नमस्ते', lang: 'Hindi' },
  { text: 'Merhaba', lang: 'Turkish' },
  { text: 'Xin chào', lang: 'Vietnamese' },
  { text: 'สวัสดี', lang: 'Thai' },
  { text: 'Habari', lang: 'Swahili' },
  { text: 'Hej', lang: 'Swedish' },
  { text: 'Cześć', lang: 'Polish' },
  { text: 'Γειά σου', lang: 'Greek' },
  { text: 'Shalom', lang: 'Hebrew' },
  { text: 'Hei', lang: 'Norwegian' },
  { text: 'Salam', lang: 'Persian' },
  { text: 'Salut', lang: 'Romanian' },
  { text: 'Ahoj', lang: 'Czech' },
  { text: 'Sawubona', lang: 'Zulu' },
  { text: 'Jambo', lang: 'Swahili' },
  { text: 'Szia', lang: 'Hungarian' },
  { text: 'Hei', lang: 'Finnish' },
  { text: 'Selamat', lang: 'Malay' },
  { text: 'Kamusta', lang: 'Filipino' },
  { text: 'Zdravo', lang: 'Serbian' },
];

interface HelloSplashProps {
  onComplete: () => void;
}

const HelloSplash = ({ onComplete }: HelloSplashProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const totalDuration = 7000; // 7 seconds
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
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {/* Animated gradient background */}
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(280 70% 50%) 50%, hsl(0 84% 55%) 100%)',
                'linear-gradient(135deg, hsl(280 70% 50%) 0%, hsl(0 84% 55%) 50%, hsl(217 91% 60%) 100%)',
                'linear-gradient(135deg, hsl(0 84% 55%) 0%, hsl(217 91% 60%) 50%, hsl(280 70% 50%) 100%)',
                'linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(280 70% 50%) 50%, hsl(0 84% 55%) 100%)',
              ],
            }}
            transition={{
              duration: 7,
              repeat: 0,
              ease: 'linear',
            }}
          />

          {/* Floating orbs */}
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-50"
            style={{ background: 'hsl(45 93% 58% / 0.4)' }}
            animate={{
              x: [-100, 100, -100],
              y: [-50, 50, -50],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 7,
              repeat: 0,
              ease: 'easeInOut',
            }}
          />

          {/* Hello text */}
          <div className="relative z-10 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentIndex}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.15, ease: 'easeOut' }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white text-center"
                style={{
                  textShadow: '0 4px 30px rgba(0,0,0,0.3)',
                }}
              >
                {helloTranslations[currentIndex].text}
              </motion.h1>
            </AnimatePresence>
          </div>

          {/* Logo at bottom */}
          <motion.div
            className="absolute bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <img 
              src={meskithLogo} 
              alt="Meskith AI" 
              className="h-8 md:h-10 w-auto brightness-0 invert"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HelloSplash;
