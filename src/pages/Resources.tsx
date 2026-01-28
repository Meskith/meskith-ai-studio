import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import ResourceSection from '@/components/resources/ResourceSection';
import ComingSoonModal from '@/components/resources/ComingSoonModal';
import ResourceContentModal from '@/components/resources/ResourceContentModal';
import RequestAccessModal from '@/components/resources/RequestAccessModal';

const playbooks = [
  {
    title: "Market Localization Playbook",
    description: "A step-by-step process to adapt messaging, visuals, and offers per market.",
    tag: "Playbook"
  },
  {
    title: "Brand Vault Setup Guide",
    description: "How to organize assets so your AI outputs stay consistent.",
    tag: "Playbook"
  },
  {
    title: "Ad Creative QA Checklist",
    description: "A fast checklist to approve creatives before publishing.",
    tag: "Checklist"
  },
  {
    title: "Launch in 7 Days",
    description: "A simple weekly sprint plan to ship multi-market campaigns.",
    tag: "Playbook"
  }
];

const templates = [
  {
    title: "Campaign Brief Template",
    description: "A plug-and-play brief to align teams and speed up production.",
    tag: "Template"
  },
  {
    title: "Ad Copy Template Pack",
    description: "Hooks, benefits, CTAs, and offer structures you can reuse.",
    tag: "Template"
  },
  {
    title: "Creative Direction Template",
    description: "Define vibe, tone, colors, and visual do's/don'ts.",
    tag: "Template"
  },
  {
    title: "Content Calendar Template",
    description: "Plan localized posts by market with zero chaos.",
    tag: "Template"
  }
];

const frameworks = [
  {
    title: "Cultural Cue Framework",
    description: "How to spot what feels 'local' vs 'generic'—fast.",
    tag: "Framework"
  },
  {
    title: "Offer Localization Framework",
    description: "Adapt price, bundles, and urgency without breaking the brand.",
    tag: "Framework"
  },
  {
    title: "Hook-to-CTA Framework",
    description: "Turn attention into action with a repeatable structure.",
    tag: "Framework"
  },
  {
    title: "90-Second Audit Framework",
    description: "A quick way to diagnose why ads aren't converting.",
    tag: "Framework"
  }
];

const examples = [
  {
    title: "Kenya Variant Examples",
    description: "Sample localized copy and creative notes for Kenya.",
    tag: "Example"
  },
  {
    title: "UAE Variant Examples",
    description: "Arabic/English positioning examples and cultural considerations.",
    tag: "Example"
  },
  {
    title: "Canada Variant Examples",
    description: "English/French and multicultural messaging examples.",
    tag: "Example"
  },
  {
    title: "Before vs After Localization",
    description: "See how the same message improves when localized.",
    tag: "Example"
  }
];

// Resources that have full content
const resourcesWithContent = [
  "Market Localization Playbook",
  "Brand Vault Setup Guide",
  "Ad Creative QA Checklist",
  "Launch in 7 Days",
  "Campaign Brief Template",
  "Ad Copy Template Pack",
  "Creative Direction Template",
  "Content Calendar Template"
];

const Resources = () => {
  const [contentModalOpen, setContentModalOpen] = useState(false);
  const [comingSoonOpen, setComingSoonOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState('');
  const [requestAccessOpen, setRequestAccessOpen] = useState(false);

  const handleOpenResource = (title: string) => {
    setSelectedResource(title);
    if (resourcesWithContent.includes(title)) {
      setContentModalOpen(true);
    } else {
      setComingSoonOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[hsl(217,91%,60%)] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[hsl(0,84%,55%)] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-96 bg-[hsl(217,91%,60%)] opacity-[0.02] blur-[150px] rounded-full" />
      </div>

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
            >
              <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 px-4 py-1.5">
                Resources
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              style={{ fontFamily: "'Product Sans', sans-serif" }}
            >
              Playbooks, templates, and frameworks{' '}
              <br className="hidden md:block" />
              to help you go{' '}
              <span className="gradient-text glow-text">global</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10"
            >
              Built for Kenya, UAE, and Canada—designed to help teams create localized campaigns that actually convert.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/auth">
                <Button className="relative bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[hsl(217,91%,60%)] before:to-[hsl(0,84%,55%)] before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#0A0A0A] after:-z-[5] hover:shadow-[0_0_25px_hsl(217_91%_60%_/_0.4),0_0_25px_hsl(0_84%_55%_/_0.3)] px-8 py-3 text-base">
                  <span className="relative z-10 flex items-center gap-2">
                    Log in to Dashboard <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
              
              <Button 
                variant="outline"
                onClick={() => setRequestAccessOpen(true)}
                className="rounded-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 py-3 text-base transition-all duration-300"
              >
                Request Access
              </Button>
            </motion.div>
          </motion.section>

          {/* Resource Sections */}
          <div className="space-y-12">
            <ResourceSection 
              title="Playbooks" 
              resources={playbooks} 
              onOpenResource={handleOpenResource}
            />
            
            <ResourceSection 
              title="Templates" 
              resources={templates} 
              onOpenResource={handleOpenResource}
            />
            
            <ResourceSection 
              title="Frameworks" 
              resources={frameworks} 
              onOpenResource={handleOpenResource}
            />
            
            <ResourceSection 
              title="Examples" 
              resources={examples} 
              onOpenResource={handleOpenResource}
            />
          </div>

          {/* Bottom CTA Band */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(217,91%,60%,0.1)] via-[hsl(270,70%,50%,0.05)] to-[hsl(0,84%,55%,0.1)] rounded-2xl blur-xl" />
            <div className="relative glass-card p-10 md:p-16 text-center glow-primary">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Want all resources inside the platform?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Log in to access the backend tools and resource library.
              </p>
              <Link to="/auth">
                <Button className="relative bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[hsl(217,91%,60%)] before:to-[hsl(0,84%,55%)] before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#0A0A0A] after:-z-[5] hover:shadow-[0_0_25px_hsl(217_91%_60%_/_0.4),0_0_25px_hsl(0_84%_55%_/_0.3)] px-10 py-3 text-base">
                  <span className="relative z-10 flex items-center gap-2">
                    Log in <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.section>

        </div>
      </main>

      <Footer />

      {/* Modals */}
      <ResourceContentModal 
        open={contentModalOpen} 
        onOpenChange={setContentModalOpen}
        resourceTitle={selectedResource}
      />

      <ComingSoonModal 
        open={comingSoonOpen} 
        onOpenChange={setComingSoonOpen}
        resourceTitle={selectedResource}
      />
      
      <RequestAccessModal 
        open={requestAccessOpen} 
        onOpenChange={setRequestAccessOpen}
      />
    </div>
  );
};

export default Resources;
