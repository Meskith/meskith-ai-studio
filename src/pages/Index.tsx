import { useState, useEffect } from 'react';
import Navbar from '@/components/landing/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import HowItWorksSection from '@/components/landing/HowItWorksSection';
import CTASection from '@/components/landing/CTASection';
import MarketingTeamSection from '@/components/landing/MarketingTeamSection';
import LoginSection from '@/components/landing/LoginSection';
import Footer from '@/components/landing/Footer';
import HelloSplash from '@/components/landing/HelloSplash';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [hasSeenSplash, setHasSeenSplash] = useState(false);

  useEffect(() => {
    // Check if user has seen splash this session
    const seen = sessionStorage.getItem('meskith-splash-seen');
    if (seen) {
      setShowSplash(false);
      setHasSeenSplash(true);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
    setHasSeenSplash(true);
    sessionStorage.setItem('meskith-splash-seen', 'true');
  };

  return (
    <>
      {showSplash && !hasSeenSplash && (
        <HelloSplash onComplete={handleSplashComplete} />
      )}
      <div className={`min-h-screen bg-background ${showSplash && !hasSeenSplash ? 'overflow-hidden' : ''}`}>
        <Navbar />
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <CTASection />
        <MarketingTeamSection />
        <LoginSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
