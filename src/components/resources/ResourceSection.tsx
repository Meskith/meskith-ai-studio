import { motion } from 'framer-motion';
import ResourceCard from './ResourceCard';

interface Resource {
  title: string;
  description: string;
  tag: string;
}

interface ResourceSectionProps {
  title: string;
  resources: Resource[];
  onOpenResource: (title: string) => void;
}

const ResourceSection = ({ title, resources, onOpenResource }: ResourceSectionProps) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="glass-card p-8 md:p-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {resources.map((resource, index) => (
          <ResourceCard
            key={resource.title}
            title={resource.title}
            description={resource.description}
            tag={resource.tag}
            onOpen={() => onOpenResource(resource.title)}
            index={index}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default ResourceSection;
