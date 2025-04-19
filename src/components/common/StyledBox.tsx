
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
      "relative w-full overflow-hidden rounded-[32px] p-[3px]",
      "bg-gradient-to-br from-[#9B87F5] via-[#8E74F3] to-[#7C5DF2]",
      "shadow-lg shadow-primary/20",
      className
    )}>
      <div className="relative h-full w-full rounded-[29px] bg-white dark:bg-background p-6">
        {children}
      </div>
    </div>
  );
};

export default StyledBox;
