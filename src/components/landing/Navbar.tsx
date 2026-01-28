import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import meskithLogo from '@/assets/meskith-logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const navLinks = [
    { label: 'Product', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={meskithLogo} alt="Meskith AI" className="h-10" />
        </Link>
        
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground hidden sm:inline-flex">
                Request Access
              </Button>
            </DialogTrigger>
            <DialogContent className="glass-card-premium border-primary/20 max-w-md">
              <DialogHeader>
                <DialogTitle className="text-xl">Request Early Access</DialogTitle>
              </DialogHeader>
              <div className="space-y-4 pt-4">
                <p className="text-muted-foreground text-sm">
                  Join the waitlist for exclusive early access to Meskith AI.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                />
                <Button className="w-full bg-gradient-luxury hover:opacity-90 glow-primary">
                  Join Waitlist
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          <Link to="/auth">
            <Button className="bg-gradient-luxury hover:opacity-90 glow-primary transition-all duration-300 hover:scale-105">
              Start Free Trial
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
