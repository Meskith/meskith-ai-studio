import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import RegionSelector, { regions } from '@/components/campaigns/RegionSelector';
import AdVariantCard from '@/components/campaigns/AdVariantCard';
import { adVariantsByRegion } from '@/components/campaigns/adVariantsData';
import { Megaphone, Sparkles, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Campaigns = () => {
  const [selectedRegion, setSelectedRegion] = useState('kenya');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleRegenerate = async () => {
    setIsGenerating(true);
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsGenerating(false);
  };

  const currentRegion = regions.find(r => r.id === selectedRegion);
  const variants = adVariantsByRegion[selectedRegion] || [];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2 rounded-xl bg-gradient-luxury glow-primary">
                <Megaphone className="w-6 h-6 text-primary-foreground" />
              </div>
              Campaign Generator
            </h1>
            <p className="text-muted-foreground">
              Generate localized ad campaigns tailored to your target markets
            </p>
          </div>
          
          <Button
            onClick={handleRegenerate}
            disabled={isGenerating}
            className="bg-gradient-luxury hover:opacity-90 glow-primary"
          >
            {isGenerating ? (
              <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 mr-2" />
            )}
            {isGenerating ? 'Generating...' : 'Regenerate All'}
          </Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Region Selector */}
          <div className="lg:col-span-1">
            <RegionSelector 
              selectedRegion={selectedRegion}
              onSelectRegion={setSelectedRegion}
            />
          </div>

          {/* Main Content - Ad Variants */}
          <div className="lg:col-span-3 space-y-6">
            {/* Current Region Header */}
            <div className="glass rounded-xl p-4 border border-border/50 flex items-center gap-4">
              <span className="text-4xl">{currentRegion?.flag}</span>
              <div>
                <h2 className="text-xl font-bold">{currentRegion?.name} Market</h2>
                <p className="text-sm text-muted-foreground">
                  3 localized ad variants tailored for this region
                </p>
              </div>
            </div>

            {/* Variants Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {variants.map((variant, index) => (
                <AdVariantCard 
                  key={variant.id} 
                  variant={variant} 
                  index={index}
                />
              ))}
            </div>

            {/* Tips Section */}
            <div className="glass rounded-xl p-6 border border-primary/20 bg-primary/5">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered Localization</h3>
                  <p className="text-sm text-muted-foreground">
                    Each variant is crafted to resonate with local culture, slang, and market preferences. 
                    Click the copy button to use any headline, body text, or CTA in your campaigns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaigns;
