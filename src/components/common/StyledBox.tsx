import React from 'react';
import { cn } from '@/lib/utils';
interface StyledBoxProps {
  className?: string;
  children?: React.ReactNode;
}
const StyledBox = ({
  className,
  children
}: StyledBoxProps) => {
  return <div className="relative w-full aspect-video group">
      {/* Enhanced outer glow effect with increased visibility */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/40 via-violet-500/40 to-primary/40 rounded-2xl blur-xl opacity-70 group-hover:opacity-90 transition-all duration-500"></div>
      
      {/* Main container with improved glass effect and explicit group class */}
      <div className="relative h-full bg-gradient-to-br from-white/15 via-white/10 to-transparent rounded-xl backdrop-blur-md border border-white/20 shadow-2xl overflow-hidden group-hover:border-white/30 transition-all duration-500">
        {/* Content area with improved gradient visibility */}
        <div className="relative h-full w-full p-4 bg-gradient-to-b from-transparent via-black/5 to-black/10 group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-primary/5 group-hover:to-primary/10 transition-all duration-500">
          {children}
        </div>
        
        {/* Enhanced glass reflection effect with better visibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/20 to-transparent opacity-30 pointer-events-none"></div>
        
        {/* Improved hover effects with smoother transition and restored inner screen hover effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent pointer-events-none"></div>
        
        {/* Subtle border highlight on hover with improved visibility */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-px rounded-xl bg-gradient-to-br from-white/30 via-white/10 to-transparent bg-zinc-100"></div>
        </div>
      </div>
    </div>;
};
export default StyledBox;