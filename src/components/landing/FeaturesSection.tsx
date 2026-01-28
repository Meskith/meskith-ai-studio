import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { FolderOpen, Globe2, TrendingUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  const features = [
    {
      icon: FolderOpen,
      title: 'Brand Vault',
      description: 'Upload assets once, reuse everywhere.',
      gradient: 'from-primary to-primary/50',
    },
    {
      icon: Globe2,
      title: 'Localization Studio',
      description: 'Generate regional variants instantly.',
      gradient: 'from-destructive/80 to-destructive/40',
    },
    {
      icon: TrendingUp,
      title: 'Revenue Toast',
      description: 'See performance signals in real time.',
      gradient: 'from-primary/80 to-destructive/60',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="features" className="py-24 px-6 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Go Global</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We handle the complexity of multi-market advertising so you can focus on growth.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="glass-card group hover:border-primary/30 transition-all duration-500 h-full overflow-hidden">
                  <CardContent className="p-8 relative">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${feature.gradient} w-fit mb-6 transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-7 h-7 text-foreground" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    
                    <Link 
                      to="/auth"
                      className="inline-flex items-center gap-2 text-primary font-medium group/link"
                    >
                      <span className="transition-all group-hover/link:mr-1">Learn more</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
