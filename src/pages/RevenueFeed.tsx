import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  DollarSign, 
  ArrowUpRight, 
  ArrowDownRight,
  BarChart3,
  Zap,
  Plus,
  ExternalLink
} from 'lucide-react';

interface RevenueItem {
  id: string;
  campaign: string;
  region: string;
  revenue: number;
  change: number;
  date: string;
}

const RevenueFeed = () => {
  const [revenueItems] = useState<RevenueItem[]>([]);

  const stats = [
    { label: 'Total Revenue', value: '$0', change: 0, icon: DollarSign },
    { label: 'Active Campaigns', value: '0', change: 0, icon: BarChart3 },
    { label: 'Avg. ROI', value: '0%', change: 0, icon: TrendingUp },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-luxury glow-primary">
                <TrendingUp className="w-6 h-6 text-primary-foreground" />
              </div>
              Revenue Feed
            </h1>
            <p className="text-muted-foreground">
              Track your campaign performance and revenue in real-time
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label} className="glass-card group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                      <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                      <div className="flex items-center gap-1 mt-2">
                        {stat.change >= 0 ? (
                          <ArrowUpRight className="w-4 h-4 text-emerald-400" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4 text-red-400" />
                        )}
                        <span className={stat.change >= 0 ? "text-emerald-400 text-sm" : "text-red-400 text-sm"}>
                          {stat.change}% from last month
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Empty State */}
        {revenueItems.length === 0 && (
          <Card className="glass-card">
            <CardContent className="py-16">
              <div className="flex flex-col items-center text-center max-w-md mx-auto">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-luxury opacity-20 blur-2xl rounded-full" />
                  <div className="relative p-5 rounded-2xl bg-gradient-luxury/10 border border-primary/20">
                    <Zap className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">No Revenue Data Yet</h3>
                <p className="text-muted-foreground mb-6">
                  Connect your payment provider and launch campaigns to start tracking revenue and performance metrics.
                </p>
                <div className="flex gap-3">
                  <Button className="bg-gradient-luxury hover:opacity-90 glow-primary">
                    <Plus className="w-4 h-4 mr-2" />
                    Connect Payment Provider
                  </Button>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Documentation
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Revenue Feed List - will show when there are items */}
        {revenueItems.length > 0 && (
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {revenueItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-secondary/30 border border-border/50">
                    <div>
                      <p className="font-medium">{item.campaign}</p>
                      <p className="text-sm text-muted-foreground">{item.region} • {item.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">${item.revenue.toLocaleString()}</p>
                      <div className="flex items-center gap-1">
                        {item.change >= 0 ? (
                          <ArrowUpRight className="w-3 h-3 text-emerald-400" />
                        ) : (
                          <ArrowDownRight className="w-3 h-3 text-red-400" />
                        )}
                        <span className={item.change >= 0 ? "text-emerald-400 text-xs" : "text-red-400 text-xs"}>
                          {item.change}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
};

export default RevenueFeed;
