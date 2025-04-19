
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      <h2 className="heading-lg text-foreground mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
