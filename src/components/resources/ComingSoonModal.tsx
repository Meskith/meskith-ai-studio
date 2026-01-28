import { Link } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Lock } from 'lucide-react';

interface ComingSoonModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  resourceTitle: string;
}

const ComingSoonModal = ({ open, onOpenChange, resourceTitle }: ComingSoonModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass-card border-primary/20 bg-card/95 backdrop-blur-xl max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Lock className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold text-foreground">
            Coming Soon
          </DialogTitle>
          <DialogDescription className="text-muted-foreground mt-2">
            <span className="font-medium text-foreground">{resourceTitle}</span> will be available in the dashboard.
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-6">
          <Link to="/auth" className="block">
            <Button className="w-full relative bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-r before:from-[hsl(217,91%,60%)] before:to-[hsl(0,84%,55%)] before:-z-10 before:content-[''] after:absolute after:inset-[2px] after:rounded-full after:bg-card after:-z-[5] hover:shadow-[0_0_25px_hsl(217_91%_60%_/_0.4),0_0_25px_hsl(0_84%_55%_/_0.3)]">
              <span className="relative z-10">Log in to Dashboard</span>
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoonModal;
