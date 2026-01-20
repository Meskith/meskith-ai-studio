import { Image, Mic, MoreVertical, Trash2, Download, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

export interface Asset {
  id: string;
  type: 'image' | 'audio';
  name: string;
  url: string;
  createdAt: Date;
  size?: string;
  duration?: number;
}

interface AssetGridProps {
  assets: Asset[];
  onDelete: (id: string) => void;
  onView: (asset: Asset) => void;
}

const AssetGrid = ({ assets, onDelete, onView }: AssetGridProps) => {
  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  if (assets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="p-4 rounded-2xl bg-secondary/50 mb-4">
          <Image className="w-12 h-12 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium mb-2">No assets yet</h3>
        <p className="text-sm text-muted-foreground max-w-sm">
          Upload product photos or record voice notes to start building your brand vault
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {assets.map((asset) => (
        <div
          key={asset.id}
          className="group glass rounded-xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-300"
        >
          {/* Preview */}
          <div 
            className="relative aspect-square cursor-pointer"
            onClick={() => onView(asset)}
          >
            {asset.type === 'image' ? (
              <img
                src={asset.url}
                alt={asset.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-accent/20">
                <div className="p-4 rounded-full bg-primary/20">
                  <Mic className="w-8 h-8 text-primary" />
                </div>
                {asset.duration && (
                  <span className="absolute bottom-2 right-2 px-2 py-1 rounded-md bg-background/80 backdrop-blur-sm text-xs font-mono">
                    {formatDuration(asset.duration)}
                  </span>
                )}
              </div>
            )}
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Eye className="w-8 h-8 text-primary" />
            </div>
          </div>

          {/* Info */}
          <div className="p-3">
            <div className="flex items-start justify-between gap-2">
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{asset.name}</p>
                <p className="text-xs text-muted-foreground">{formatDate(asset.createdAt)}</p>
              </div>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="glass border-border/50">
                  <DropdownMenuItem onClick={() => onView(asset)}>
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onDelete(asset.id)}
                    className="text-destructive focus:text-destructive"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssetGrid;
