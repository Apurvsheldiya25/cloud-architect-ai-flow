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
      {/* Outer glow effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-violet-500/50 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-glow"></div>
      
      {/* Main container */}
      <div className="relative h-full bg-gradient-to-b from-white/5 to-white/10 rounded-xl backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden group">
        {/* Content area */}
        <div className="relative h-full w-full p-4">
          {children}
        </div>
        
        {/* Glass reflection effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-20"></div>
        
        {/* Hover effects */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-primary/20 to-transparent bg-stone-50"></div>
      </div>
    </div>;
};
export default StyledBox;