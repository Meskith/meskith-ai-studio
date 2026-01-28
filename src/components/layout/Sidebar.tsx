import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  FolderOpen, 
  Megaphone, 
  TrendingUp,
  LogOut,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import meskithLogo from '@/assets/meskith-logo.png';

const navItems = [
  { path: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { path: '/brand-vault', label: 'Brand Vault', icon: FolderOpen },
  { path: '/localization-studio', label: 'Localization Studio', icon: Megaphone },
  { path: '/revenue-feed', label: 'Revenue Feed', icon: TrendingUp },
];

const Sidebar = () => {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside 
      className={cn(
        "h-screen glass border-r border-border/50 flex flex-col transition-all duration-300",
        isCollapsed ? "w-20" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="p-6 border-b border-border/50">
        <Link to="/dashboard" className="flex items-center gap-3">
          <img 
            src={meskithLogo} 
            alt="Meskith AI" 
            className={cn(
              "transition-all duration-300",
              isCollapsed ? "h-8 w-8 object-contain" : "h-10"
            )}
          />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                isActive 
                  ? "bg-primary/10 text-primary border border-primary/20" 
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              )}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-20 p-1.5 rounded-full bg-secondary border border-border hover:bg-muted transition-colors"
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-muted-foreground" />
        )}
      </button>

      {/* User Section */}
      <div className="p-4 border-t border-border/50">
        <div className={cn(
          "flex items-center gap-3 mb-4",
          isCollapsed && "justify-center"
        )}>
          <div className="w-10 h-10 rounded-full bg-gradient-luxury flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">
              {user?.name?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{user?.name}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email}</p>
            </div>
          )}
        </div>
        
        <Button
          variant="ghost"
          onClick={logout}
          className={cn(
            "text-muted-foreground hover:text-destructive hover:bg-destructive/10",
            isCollapsed ? "w-full justify-center px-2" : "w-full justify-start"
          )}
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span className="ml-3">Sign Out</span>}
        </Button>
      </div>
    </aside>
  );
};

export default Sidebar;
