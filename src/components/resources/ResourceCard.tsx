import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
  title: string;
  description: string;
  tag: string;
  onOpen: () => void;
  index: number;
}

const ResourceCard = ({ title, description, tag, onOpen, index }: ResourceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 flex flex-col h-full group hover:glow-primary transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-3">
        <Badge 
          variant="secondary" 
          className="bg-primary/10 text-primary border-primary/20 text-xs"
        >
          {tag}
        </Badge>
      </div>
      
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm flex-grow mb-4">
        {description}
      </p>
      
      <Button 
        onClick={onOpen}
        variant="outline"
        className="w-full border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
      >
        Open
      </Button>
    </motion.div>
  );
};

export default ResourceCard;
