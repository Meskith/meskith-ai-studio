import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const LoginSection = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="login" className="py-24 px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20"
          style={{ background: 'linear-gradient(180deg, hsl(180 70% 50%), hsl(280 80% 60%))' }}
        />
      </div>

      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sign In to Your{' '}
            <span className="bg-gradient-luxury bg-clip-text text-transparent">Dashboard</span>
          </h2>
          <p className="text-muted-foreground">
            Access your brand assets and campaigns
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-card-premium rounded-3xl p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="login-email" className="text-sm font-medium text-foreground/80">
                Email Address
              </Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="login-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-secondary/50 border-border/50 rounded-xl focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password" className="text-sm font-medium text-foreground/80">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 h-12 bg-secondary/50 border-border/50 rounded-xl focus:border-primary/50 focus:ring-primary/20"
                />
              </div>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-sm">
                {error}
              </div>
            )}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 rounded-full bg-gradient-button hover:opacity-90 transition-all duration-300 font-semibold text-foreground hover:shadow-[0_0_30px_hsl(180_70%_50%_/_0.4)]"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <a
              href="/auth"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Don't have an account?{' '}
              <span className="font-semibold text-primary">Sign up</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoginSection;
