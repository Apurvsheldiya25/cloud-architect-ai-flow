
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
      "group relative bg-gradient-to-b from-white to-white/50 dark:from-gray-900/50 dark:to-gray-900/30",
      "backdrop-blur-xl rounded-2xl p-8 transition-all duration-300",
      "hover:shadow-lg hover:shadow-primary/5 border border-white/20",
      "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-b before:from-primary/5 before:to-transparent before:opacity-0",
      "hover:before:opacity-100 before:transition-opacity",
      className
    )}>
      <div className="relative z-10">
        {/* Number indicator */}
        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <span className="text-primary font-semibold text-lg">{number}</span>
        </div>

        <div className="pt-4">
          <h3 className="text-xl font-semibold mb-3 font-outfit text-foreground/90">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessCard;
