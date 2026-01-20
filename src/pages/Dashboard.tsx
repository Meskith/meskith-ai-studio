import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/contexts/AuthContext';
import { Link } from 'react-router-dom';
import { 
  FolderOpen, 
  Megaphone, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  Image,
  Mic,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  const { user } = useAuth();

  const quickActions = [
    {
      title: 'Brand Vault',
      description: 'Upload product photos and voice notes',
      icon: FolderOpen,
      href: '/brand-vault',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      title: 'Campaigns',
      description: 'Generate localized ad campaigns',
      icon: Megaphone,
      href: '/campaigns',
      gradient: 'from-accent/20 to-accent/5',
    },
  ];

  const stats = [
    { label: 'Assets Uploaded', value: '0', icon: Image },
    { label: 'Voice Notes', value: '0', icon: Mic },
    { label: 'Campaigns Created', value: '0', icon: Globe },
    { label: 'Regions Active', value: '8', icon: TrendingUp },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="glass rounded-3xl p-8 glow-primary relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-radial from-accent/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm text-muted-foreground">Welcome back</span>
            </div>
            <h1 className="text-4xl font-bold mb-2">
              Hello, <span className="gradient-text">{user?.name || 'Creator'}</span>! 👋
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Ready to create something amazing? Start by uploading your brand assets or generate your first localized campaign.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.label}
                className="glass rounded-xl p-4 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.title}
                  to={action.href}
                  className="group glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 glass-hover"
                >
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${action.gradient} mb-4`}>
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
                    {action.title}
                    <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Getting Started */}
        <div className="glass rounded-2xl p-6 border border-accent/20 bg-accent/5">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-accent/20">
              <Sparkles className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">Getting Started</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Follow these steps to unlock the full potential of Meskith AI:
              </p>
              <ol className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">1</span>
                  Upload your product photos to the Brand Vault
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">2</span>
                  Record voice notes describing your brand voice
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">3</span>
                  Generate localized campaigns for your target markets
                </li>
              </ol>
            </div>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/brand-vault">
                Start Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
