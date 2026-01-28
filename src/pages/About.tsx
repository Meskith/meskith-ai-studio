import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { 
  ArrowRight, 
  Play, 
  Globe, 
  Upload, 
  Rocket, 
  BarChart3,
  Brain,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';

const About = () => {
  const [selectedRegion, setSelectedRegion] = useState<'kenya' | 'australia' | 'canada'>('kenya');

  const regionExamples = {
    kenya: {
      headline: "Lipa na M-Pesa, Grow Your Hustle",
      description: "M-Pesa integration with Swahili-English code-switching for authentic local engagement."
    },
    australia: {
      headline: "Fair Dinkum Deals, Mate",
      description: "Australian vernacular with laid-back confidence that resonates Down Under."
    },
    canada: {
      headline: "Sorry, But This Deal's Too Good",
      description: "Bilingual-ready content with Canadian cultural nuances and politeness markers."
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-foreground relative overflow-hidden">
      {/* Animated background gradient that follows scroll */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          animate={{
            background: [
              'radial-gradient(ellipse 80% 50% at 20% 30%, hsl(217 91% 60% / 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse 80% 50% at 50% 50%, hsl(0 84% 55% / 0.12) 0%, transparent 50%)',
              'radial-gradient(ellipse 80% 50% at 80% 70%, hsl(217 91% 60% / 0.15) 0%, transparent 50%)',
              'radial-gradient(ellipse 80% 50% at 20% 30%, hsl(217 91% 60% / 0.15) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
        />
      </div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              Built for modern brands
            </Badge>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Meskith AI helps brands go{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent glow-text">global</span>
            —without losing their{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent glow-text">vibe</span>.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We turn brand assets into culturally-relevant campaigns across markets, then connect content to performance so growth isn't guesswork.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/auth">
              <Button
                size="lg"
                className="bg-gradient-button hover:opacity-90 text-foreground text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)] group"
              >
                Log in to Dashboard
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-border/50 hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </DialogTrigger>
              <DialogContent className="glass-card-premium border-primary/20 max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-xl">See Meskith AI in Action</DialogTitle>
                </DialogHeader>
                <div className="space-y-6 pt-4">
                  <div className="aspect-video rounded-lg bg-secondary/50 border border-border/30 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-button flex items-center justify-center mx-auto mb-4">
                        <Play className="w-8 h-8 text-foreground" />
                      </div>
                      <p className="text-muted-foreground text-sm">Demo video placeholder</p>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold" style={{ letterSpacing: '-0.02em' }}>
              AI is everywhere.{' '}
              <span className="text-muted-foreground">Results aren't.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              "Generic content doesn't convert across cultures.",
              "Teams waste time resizing and repackaging for every market.",
              "Most marketing still can't prove what actually drove revenue."
            ].map((problem, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <GlassCard className="p-8 h-full">
                  <p className="text-lg text-foreground/90 leading-relaxed">{problem}</p>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Promise Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              <span className="bg-gradient-luxury bg-clip-text text-transparent">Localize.</span>{' '}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">Launch.</span>{' '}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">Measure.</span>
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Globe,
                title: "Cultural Localization",
                description: "Generate variants that fit the language and context of each market."
              },
              {
                icon: Upload,
                title: "Brand Vault",
                description: "Upload once. Reuse everywhere. Keep your brand consistent."
              },
              {
                icon: BarChart3,
                title: "Performance Signals",
                description: "Tie content outputs to outcomes—so you know what's working."
              }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <GlassCard className="p-8 h-full text-center" glow>
                    <div className="w-14 h-14 rounded-2xl bg-gradient-button flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Interactive Flow Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
              From asset to campaign in{' '}
              <span className="bg-gradient-luxury bg-clip-text text-transparent">minutes</span>.
            </h2>
          </motion.div>

          {/* Region Toggle Chips */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-3 mb-12"
          >
            {(['kenya', 'australia', 'canada'] as const).map((region) => (
              <Button
                key={region}
                variant={selectedRegion === region ? 'default' : 'outline'}
                onClick={() => setSelectedRegion(region)}
                className={`rounded-full capitalize transition-all duration-300 ${
                  selectedRegion === region
                    ? 'bg-gradient-button hover:opacity-90'
                    : 'border-border/50 hover:border-primary/50'
                }`}
              >
                {region}
              </Button>
            ))}
          </motion.div>

          {/* Flow Steps */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="relative"
          >
            {/* Connector Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-px hidden md:block">
              <svg className="w-full h-2" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
                    <stop offset="20%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="hsl(0 84% 55%)" stopOpacity="0.5" />
                    <stop offset="80%" stopColor="hsl(217 91% 60%)" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.line
                  x1="15%"
                  y1="50%"
                  x2="85%"
                  y2="50%"
                  stroke="url(#lineGradient)"
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  step: "01",
                  icon: Upload,
                  title: "Upload",
                  description: "Drop your brand assets into the vault"
                },
                {
                  step: "02",
                  icon: Rocket,
                  title: "Generate",
                  description: selectedRegion === 'kenya'
                    ? regionExamples.kenya.description
                    : selectedRegion === 'australia'
                    ? regionExamples.australia.description
                    : regionExamples.canada.description
                },
                {
                  step: "03",
                  icon: BarChart3,
                  title: "Track",
                  description: "Monitor performance across markets"
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={index} variants={fadeInUp}>
                    <GlassCard className="p-8 text-center">
                      <div className="text-xs font-bold text-primary/60 tracking-widest mb-4">
                        STEP {item.step}
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-button flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_hsl(217_91%_60%_/_0.3)]">
                        <Icon className="w-8 h-8 text-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      
                      {index === 1 && (
                        <motion.div
                          key={selectedRegion}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 rounded-lg bg-primary/5 border border-primary/10"
                        >
                          <p className="text-sm font-medium text-primary">
                            "{regionExamples[selectedRegion].headline}"
                          </p>
                        </motion.div>
                      )}
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Positioning & Values Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-6 mb-20"
          >
            {[
              { icon: Brain, title: "Cultural Intelligence", description: "AI trained on regional nuances" },
              { icon: Zap, title: "Speed + Control", description: "Generate fast, refine as needed" },
              { icon: Shield, title: "Brand Consistency", description: "Your voice, every market" },
              { icon: Target, title: "Business Outcomes", description: "Tied to real performance" }
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div key={index} variants={fadeInUp}>
                  <GlassCard className="p-6 text-center h-full">
                    <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-bold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </GlassCard>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mission & Vision */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <GlassCard className="p-10" glow>
              <h3 className="text-xs font-bold text-primary tracking-widest mb-4">OUR MISSION</h3>
              <p className="text-2xl font-bold leading-relaxed">
                Move from AI noise to{' '}
                <span className="bg-gradient-luxury bg-clip-text text-transparent">trackable growth</span>.
              </p>
            </GlassCard>
            <GlassCard className="p-10" glow>
              <h3 className="text-xs font-bold text-primary tracking-widest mb-4">OUR VISION</h3>
              <p className="text-2xl font-bold leading-relaxed">
                Every brand speaks{' '}
                <span className="bg-gradient-luxury bg-clip-text text-transparent">locally, wins globally</span>.
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Founder's Note Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
          >
            <GlassCard className="p-10 md:p-16" gradient>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ letterSpacing: '-0.02em' }}>
                A note from the founder
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                "Meskith AI was built for teams that want results—not experiments. We're obsessed with turning great creative into measurable growth across markets."
              </p>
              <p className="text-lg font-medium">
                — James, <span className="text-muted-foreground">Founder</span>
              </p>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Band */}
      <section className="py-24 px-6 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-button opacity-20 blur-3xl" />
            
            <GlassCard className="relative p-12 md:p-16 text-center" glow>
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ letterSpacing: '-0.02em' }}>
                Ready to access the dashboard?
              </h2>
              <Link to="/auth">
                <Button
                  size="lg"
                  className="bg-gradient-button hover:opacity-90 text-foreground text-lg px-10 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(217_91%_60%_/_0.4)] group"
                >
                  Log in
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </GlassCard>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
