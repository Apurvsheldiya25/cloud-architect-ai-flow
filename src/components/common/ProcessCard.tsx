
import React from 'react';
import { cn } from '@/lib/utils';

interface ProcessCardProps {
  number: number;
  title: string;
  description: string;
  className?: string;
}

const ProcessCard: React.FC<ProcessCardProps> = ({
  number,
  title,
  description,
  className
}) => {
  return (
    <div className={cn(
      "relative bg-white dark:bg-gray-900/50 rounded-2xl p-8",
      "transition-all duration-300 hover:shadow-lg border border-border",
      className
    )}>
      {/* Number indicator with soft purple background */}
      <div className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-[#E5DEFF] dark:bg-primary/10 flex items-center justify-center">
        <span className="text-primary font-semibold text-lg">{number}</span>
      </div>

      <div className="pt-4">
        <h3 className="text-xl font-semibold mb-4 font-outfit text-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProcessCard;
