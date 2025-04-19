
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
      "relative w-full overflow-hidden rounded-2xl bg-gradient-to-b from-primary/20 to-primary/10 p-[1px]",
      className
    )}>
      <div className="relative h-full w-full rounded-2xl bg-background/80 backdrop-blur-sm p-4">
        {children}
      </div>
    </div>
  );
};

export default StyledBox;
