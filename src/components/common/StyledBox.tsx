
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
  return <div className="relative w-full aspect-video">
      {/* Enhanced outer glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-violet-500/30 to-primary/30 rounded-2xl blur-2xl opacity-60 group-hover:opacity-70 transition-all duration-500"></div>
      
      {/* Main container with improved glass effect */}
      <div className="relative h-full bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden group transition-all duration-500 hover:border-white/20">
        {/* Content area with subtle gradient */}
        <div className="relative h-full w-full p-4 bg-gradient-to-b from-transparent via-black/5 to-black/10">
          {children}
        </div>
        
        {/* Enhanced glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-white/10 to-transparent opacity-20 pointer-events-none"></div>
        
        {/* Improved hover effects with smoother transition */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent pointer-events-none"></div>
        
        {/* Subtle border highlight on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <div className="absolute inset-px rounded-xl bg-gradient-to-br from-white/20 via-white/5 to-transparent"></div>
        </div>
      </div>
    </div>;
};

export default StyledBox;
