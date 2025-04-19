
import React from 'react';

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
  className = ''
}) => {
  return (
    <div className={`space-y-6 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className={`h-1 w-20 bg-primary rounded-full transition-all duration-300 ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
};

export default SectionHeading;
