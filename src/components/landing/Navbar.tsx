import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import meskithLogo from '@/assets/meskith-logo.png';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks: { label: string; href: string; isRoute?: boolean }[] = [
    { label: 'Product', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '/about', isRoute: true },
    { label: 'Resources', href: '/resources', isRoute: true },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToLogin = () => {
    document.getElementById('login')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href === '#features' || href === '#how-it-works') {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      e.preventDefault();
      scrollToLogin();
    }
    setIsOpen(false);
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={meskithLogo} alt="Meskith AI" className="h-8 sm:h-10" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </Link>
            ) : (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium cursor-pointer"
              >
                {link.label}
              </a>
            )
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] glass border-l border-primary/20">
              <nav className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  link.isRoute ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-foreground hover:text-primary transition-colors text-base font-medium py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a 
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-foreground hover:text-primary transition-colors text-base font-medium py-2 cursor-pointer"
                    >
                      {link.label}
                    </a>
                  )
                ))}
                <div className="pt-4 border-t border-border/50">
                  <Button 
                    onClick={() => { scrollToLogin(); setIsOpen(false); }}
                    className="w-full"
                    variant="outline"
                  >
                    Sign In
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          <Button 
            variant="ghost" 
            onClick={scrollToLogin}
            className="text-muted-foreground hover:text-foreground hidden sm:inline-flex transition-all duration-300 hover:shadow-[0_0_20px_hsl(0_84%_55%_/_0.5)]"
          >
            Sign In
          </Button>
          
          <Link to="/auth">
            <Button 
              className="relative bg-transparent text-white rounded-full transition-all duration-300 hover:scale-105 border-0 overflow-hidden text-sm px-4 py-2"
              style={{
                boxShadow: '0 0 0 1px rgba(99, 102, 241, 0.3)',
              }}
            >
              {/* Sweeping gradient light effect - continuous full rotation */}
              <span className="absolute inset-[-1px] rounded-full overflow-hidden">
                <span 
                  className="absolute inset-[-100%] animate-[spin_5s_linear_infinite]"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0%, transparent 80%, hsl(217 91% 60% / 0.6) 85%, hsl(280 70% 50%) 90%, hsl(0 84% 55%) 95%, hsl(217 91% 60% / 0.6) 100%)',
                  }}
                />
              </span>
              {/* Inner background */}
              <span className="absolute inset-[1px] rounded-full bg-[#0A0A0A]" />
              {/* Content */}
              <span className="relative z-10">Start Now</span>
            </Button>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;