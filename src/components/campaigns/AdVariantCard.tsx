import { Copy, Check, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export interface AdVariant {
  id: string;
  name: string;
  headline: string;
  body: string;
  cta: string;
  tone: string;
}

interface AdVariantCardProps {
  variant: AdVariant;
  index: number;
}

const AdVariantCard = ({ variant, index }: AdVariantCardProps) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const gradientStyles = [
    'from-primary/20 to-primary/5',
    'from-accent/20 to-accent/5',
    'from-purple-500/20 to-purple-500/5',
  ];

  return (
    <div className={cn(
      "glass rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300",
    )}>
      {/* Header */}
      <div className={cn(
        "p-4 bg-gradient-to-r",
        gradientStyles[index % gradientStyles.length]
      )}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="font-semibold">{variant.name}</span>
          </div>
          <span className="text-xs px-2 py-1 rounded-full bg-background/50 backdrop-blur-sm">
            {variant.tone}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Headline */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Headline
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(variant.headline, 'headline')}
              className="h-7 px-2"
            >
              {copiedField === 'headline' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          </div>
          <p className="text-lg font-bold leading-tight gradient-text">
            {variant.headline}
          </p>
        </div>

        {/* Body */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Body Text
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(variant.body, 'body')}
              className="h-7 px-2"
            >
              {copiedField === 'body' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          </div>
          <p className="text-sm text-foreground/80 leading-relaxed">
            {variant.body}
          </p>
        </div>

        {/* CTA */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Call to Action
            </label>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => copyToClipboard(variant.cta, 'cta')}
              className="h-7 px-2"
            >
              {copiedField === 'cta' ? (
                <Check className="w-3 h-3 text-green-500" />
              ) : (
                <Copy className="w-3 h-3" />
              )}
            </Button>
          </div>
          <div className="inline-flex">
            <span className="px-4 py-2 rounded-xl bg-gradient-luxury text-primary-foreground font-semibold text-sm">
              {variant.cta}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdVariantCard;
