
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
    <div className={cn(
      "relative w-full overflow-hidden rounded-[2rem] p-[2px] transition-all",
      "bg-gradient-to-b from-[#9B87F5] via-[#D6BCFA] to-[#E5DEFF]",
      className
    )}>
      <div className="relative h-full w-full rounded-[calc(2rem-2px)] bg-background/95 backdrop-blur-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default StyledBox;
