import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import { resourceContents, titleToContentId, type ResourceContent } from './resourceContent';

interface ResourceContentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceTitle: string;
}

const ResourceContentModal = ({ open, onOpenChange, resourceTitle }: ResourceContentModalProps) => {
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const { toast } = useToast();
  const isMobile = useIsMobile();

  const contentId = titleToContentId[resourceTitle];
  const content = contentId ? resourceContents[contentId] : null;

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onOpenChange(false);
    };
    if (open) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [open, onOpenChange]);

  const handleCopy = async () => {
    if (!content) return;
    
    const textContent = generatePlainText(content);
    await navigator.clipboard.writeText(textContent);
    setCopied(true);
    toast({
      title: "Copied",
      description: "Content copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const toggleCheckItem = (item: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(item)) {
        newSet.delete(item);
      } else {
        newSet.add(item);
      }
      return newSet;
    });
  };

  const generatePlainText = (content: ResourceContent): string => {
    let text = `${content.title}\n${'='.repeat(content.title.length)}\n\n`;
    text += `${content.tag} • ${content.readTime}\n\n`;
    
    text += `QUICK START\n${'-'.repeat(11)}\n`;
    content.quickStart.forEach((item, i) => {
      text += `${i + 1}. ${item}\n`;
    });
    text += '\n';

    content.sections.forEach(section => {
      text += `${section.title.toUpperCase()}\n${'-'.repeat(section.title.length)}\n`;
      section.items.forEach((item, i) => {
        if (section.type === 'checklist') {
          text += `[ ] ${item}\n`;
        } else if (section.type === 'steps') {
          text += `${i + 1}. ${item}\n`;
        } else {
          text += `• ${item}\n`;
        }
      });
      text += '\n';
    });

    text += `COMMON MISTAKES\n${'-'.repeat(15)}\n`;
    content.commonMistakes.forEach(item => {
      text += `• ${item}\n`;
    });
    text += '\n';

    if (content.proTips) {
      text += `PRO TIPS\n${'-'.repeat(8)}\n`;
      content.proTips.forEach((tip, i) => {
        text += `${i + 1}. ${tip}\n`;
      });
      text += '\n';
    }

    text += `NEXT ACTION\n${'-'.repeat(11)}\n`;
    text += content.nextAction;

    return text;
  };

  if (!content) return null;

  const modalContent = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`
        relative z-50 flex flex-col
        ${isMobile 
          ? 'fixed inset-0 rounded-none' 
          : 'w-full max-w-[900px] max-h-[85vh] rounded-2xl mx-4'
        }
        bg-card/95 backdrop-blur-xl
        border border-primary/20
        shadow-[0_0_60px_-10px_hsl(217_91%_60%_/_0.3),0_0_40px_-15px_hsl(0_84%_55%_/_0.2)]
        overflow-hidden
      `}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Gradient glow border effect */}
      <div className="absolute inset-0 rounded-2xl p-[1px] -z-10 bg-gradient-to-br from-[hsl(217,91%,60%,0.4)] via-transparent to-[hsl(0,84%,55%,0.4)]" />
      
      {/* Sticky Header */}
      <div className="sticky top-0 z-20 bg-card/98 backdrop-blur-xl border-b border-primary/10 px-6 py-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2 flex-wrap">
              <Badge className="bg-primary/10 text-primary border-primary/20 text-xs shrink-0">
                {content.tag}
              </Badge>
              <span className="flex items-center gap-1.5 text-muted-foreground text-sm">
                <Clock className="w-3.5 h-3.5" />
                {content.readTime}
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground truncate">
              {content.title}
            </h2>
          </div>
          
          <div className="flex items-center gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={handleCopy}
              className="border-primary/20 hover:border-primary/40 hover:bg-primary/5 gap-1.5"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="hidden sm:inline">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span className="hidden sm:inline">Copy</span>
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="hover:bg-primary/10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <ScrollArea className="flex-1 min-h-0">
        <div className="px-6 py-6 space-y-8">
          {/* Quick Start */}
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] rounded-full" />
              Quick Start
            </h3>
            <div className="space-y-3">
              {content.quickStart.map((item, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-medium shrink-0">
                    {index + 1}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Main Sections */}
          {content.sections.map((section, sectionIndex) => (
            <section key={sectionIndex}>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] rounded-full" />
                {section.title}
              </h3>
              
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => {
                  const itemKey = `${sectionIndex}-${itemIndex}`;
                  
                  if (section.type === 'checklist') {
                    return (
                      <label
                        key={itemIndex}
                        className="flex items-start gap-3 p-3 rounded-lg bg-card/50 border border-primary/10 hover:border-primary/20 cursor-pointer transition-colors group"
                      >
                        <Checkbox
                          checked={checkedItems.has(itemKey)}
                          onCheckedChange={() => toggleCheckItem(itemKey)}
                          className="mt-0.5 shrink-0"
                        />
                        <span className={`text-sm leading-relaxed transition-colors ${
                          checkedItems.has(itemKey) ? 'text-muted-foreground/60 line-through' : 'text-muted-foreground'
                        }`}>
                          {item}
                        </span>
                      </label>
                    );
                  }
                  
                  if (section.type === 'steps') {
                    const parts = item.split(' — ');
                    const stepTitle = parts[0];
                    const stepContent = parts.slice(1).join(' — ');
                    
                    return (
                      <div key={itemIndex} className="p-4 rounded-lg bg-card/50 border border-primary/10">
                        <div className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%,0.2)] to-[hsl(0,84%,55%,0.2)] text-primary text-sm font-semibold shrink-0">
                            {itemIndex + 1}
                          </span>
                          <div>
                            <h4 className="font-medium text-foreground mb-1">{stepTitle}</h4>
                            {stepContent && (
                              <p className="text-muted-foreground text-sm leading-relaxed">{stepContent}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  
                  if (section.type === 'examples') {
                    const parts = item.split(' — ');
                    const exampleTitle = parts[0];
                    const exampleContent = parts.slice(1).join(' — ');
                    
                    return (
                      <div key={itemIndex} className="p-4 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%,0.05)] to-[hsl(0,84%,55%,0.05)] border border-primary/10">
                        <h4 className="font-medium text-primary mb-2">{exampleTitle}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{exampleContent}</p>
                      </div>
                    );
                  }
                  
                  return (
                    <div key={itemIndex} className="flex gap-3 p-3">
                      <span className="text-primary mt-1">•</span>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          {/* Common Mistakes */}
          <section>
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[hsl(0,84%,55%)] to-[hsl(0,84%,45%)] rounded-full" />
              Common Mistakes
            </h3>
            <div className="space-y-3">
              {content.commonMistakes.map((mistake, index) => (
                <div key={index} className="flex gap-3 p-3 rounded-lg bg-destructive/5 border border-destructive/10">
                  <span className="text-destructive shrink-0">⚠</span>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mistake}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Pro Tips */}
          {content.proTips && (
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-gradient-to-b from-[hsl(45,93%,47%)] to-[hsl(45,93%,40%)] rounded-full" />
                Pro Tips
              </h3>
              <div className="space-y-3">
                {content.proTips.map((tip, index) => (
                  <div key={index} className="flex gap-3 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10">
                    <span className="text-yellow-500 shrink-0">💡</span>
                    <p className="text-muted-foreground text-sm leading-relaxed">{tip}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Next Action */}
          <section className="pb-4">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 bg-gradient-to-b from-[hsl(217,91%,60%)] to-[hsl(0,84%,55%)] rounded-full" />
              Next Action
            </h3>
            <div className="p-4 rounded-lg bg-gradient-to-br from-[hsl(217,91%,60%,0.1)] to-[hsl(0,84%,55%,0.1)] border border-primary/20">
              <p className="text-foreground font-medium leading-relaxed">{content.nextAction}</p>
            </div>
          </section>
        </div>
      </ScrollArea>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 z-20 bg-card/98 backdrop-blur-xl border-t border-primary/10 px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="w-full sm:w-auto border-primary/20 hover:border-primary/40 hover:bg-primary/5 order-2 sm:order-1"
          >
            Back to Resources
          </Button>
          
          <Link to="/auth" className="w-full sm:w-auto order-1 sm:order-2">
            <Button className="w-full relative bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[hsl(217,91%,60%)] before:to-[hsl(0,84%,55%)] before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-[#0A0A0A] after:-z-[5] hover:shadow-[0_0_25px_hsl(217_91%_60%_/_0.4),0_0_25px_hsl(0_84%_55%_/_0.3)] px-6 py-2.5">
              <span className="relative z-10 flex items-center gap-2">
                Log in to use this in the Dashboard <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => !isMobile && onOpenChange(false)}
        >
          {modalContent}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResourceContentModal;
