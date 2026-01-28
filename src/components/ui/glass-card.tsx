import * as React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glow?: boolean;
  gradient?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, glow = false, gradient = false, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative rounded-2xl border border-primary/10 bg-card/60 backdrop-blur-xl",
        "transition-all duration-300",
        "hover:border-primary/20 hover:bg-card/80",
        glow && "glow-primary",
        gradient && "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-luxury before:opacity-20 before:-z-10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
GlassCard.displayName = "GlassCard";

export { GlassCard };
