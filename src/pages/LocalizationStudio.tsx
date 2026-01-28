import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import RegionSelector, { regions } from '@/components/campaigns/RegionSelector';
import AdVariantCard from '@/components/campaigns/AdVariantCard';
import { adVariantsByRegion } from '@/components/campaigns/adVariantsData';
import { Card, CardContent } from '@/components/ui/card';
import { Megaphone, Sparkles, RefreshCw, Globe, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LocalizationStudio = () => {
  const [selectedRegion, setSelectedRegion] = useState('kenya');
  const [isGenerating, setIsGenerating] = useState(false);
  const [hasProduct, setHasProduct] = useState(true); // Toggle to false to see empty state

  const handleRegenerate = async () => {
    setIsGenerating(true);
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
              <div className="p-2.5 rounded-2xl bg-gradient-luxury glow-primary">
                <Megaphone className="w-6 h-6 text-primary-foreground" />
              </div>
              Localization Studio
            </h1>
            <p className="text-muted-foreground">
              Generate culturally-adapted ad campaigns for global markets
            </p>
          </div>
          
          {hasProduct && (
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
          )}
        </div>

        {/* Empty State */}
        {!hasProduct && (
          <Card className="glass-card">
            <CardContent className="py-16">
              <div className="flex flex-col items-center text-center max-w-md mx-auto">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-luxury opacity-20 blur-2xl rounded-full" />
                  <div className="relative p-5 rounded-2xl bg-gradient-luxury/10 border border-primary/20">
                    <Globe className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Product Selected</h3>
                <p className="text-muted-foreground mb-6">
                  Add a product to your Brand Vault first, then come back to generate localized ad campaigns for 8 different markets.
                </p>
                <Button 
                  onClick={() => setHasProduct(true)}
                  className="bg-gradient-luxury hover:opacity-90 glow-primary"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Your First Product
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content */}
        {hasProduct && (
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
              <Card className="glass-card overflow-hidden">
                <CardContent className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{currentRegion?.flag}</span>
                    <div>
                      <h2 className="text-xl font-bold">{currentRegion?.name} Market</h2>
                      <p className="text-sm text-muted-foreground">
                        3 localized ad variants tailored for this region
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
              <Card className="glass-card border-primary/20 bg-primary/5">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-xl bg-primary/20">
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
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default LocalizationStudio;
