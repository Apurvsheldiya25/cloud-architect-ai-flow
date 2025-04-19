
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
  return (
    <div className="relative w-full aspect-video group">
      {/* Professional backdrop glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur-xl opacity-40 transition-all duration-500 group-hover:opacity-60"></div>
      
      {/* Main container with professional glass effect */}
      <div className="relative h-full bg-gradient-to-br from-background/80 to-background/40 rounded-lg backdrop-blur-md border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-500 group-hover:border-primary/20">
        {/* Content area with subtle depth */}
        <div className="relative h-full w-full p-6">
          {children}
        </div>
        
        {/* Professional glass reflection */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 pointer-events-none"></div>
        
        {/* Elegant hover effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* Refined border highlight */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
      </div>
    </div>
  );
};

export default StyledBox;
