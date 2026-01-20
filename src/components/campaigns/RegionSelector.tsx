import { cn } from '@/lib/utils';
import { Globe } from 'lucide-react';

export interface Region {
  id: string;
  name: string;
  flag: string;
  code: string;
}

export const regions: Region[] = [
  { id: 'kenya', name: 'Kenya', flag: '🇰🇪', code: 'KE' },
  { id: 'south-africa', name: 'South Africa', flag: '🇿🇦', code: 'ZA' },
  { id: 'us', name: 'United States', flag: '🇺🇸', code: 'US' },
  { id: 'uk', name: 'United Kingdom', flag: '🇬🇧', code: 'UK' },
  { id: 'middle-east', name: 'Middle East', flag: '🇦🇪', code: 'ME' },
  { id: 'australia', name: 'Australia', flag: '🇦🇺', code: 'AU' },
  { id: 'malaysia', name: 'Malaysia', flag: '🇲🇾', code: 'MY' },
  { id: 'canada', name: 'Canada', flag: '🇨🇦', code: 'CA' },
];

interface RegionSelectorProps {
  selectedRegion: string;
  onSelectRegion: (regionId: string) => void;
}

const RegionSelector = ({ selectedRegion, onSelectRegion }: RegionSelectorProps) => {
  return (
    <div className="glass rounded-2xl p-6 border border-border/50">
      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Globe className="w-5 h-5 text-primary" />
        Target Market
      </h3>
      
      <div className="grid grid-cols-2 gap-2">
        {regions.map((region) => {
          const isSelected = selectedRegion === region.id;
          
          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(region.id)}
              className={cn(
                "flex items-center gap-3 p-3 rounded-xl transition-all duration-200 text-left",
                isSelected 
                  ? "bg-primary/20 border border-primary/30 glow-primary" 
                  : "bg-secondary/30 border border-transparent hover:bg-secondary/50 hover:border-border/50"
              )}
            >
              <span className="text-2xl">{region.flag}</span>
              <div>
                <p className={cn(
                  "font-medium text-sm",
                  isSelected ? "text-primary" : "text-foreground"
                )}>
                  {region.name}
                </p>
                <p className="text-xs text-muted-foreground">{region.code}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RegionSelector;
