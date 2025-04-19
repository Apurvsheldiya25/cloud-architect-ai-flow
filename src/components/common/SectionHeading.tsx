
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
      <h2 className="relative text-4xl md:text-5xl font-bold font-outfit tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-primary">
        {title}
        {centered && (
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-4 w-24 h-1 bg-gradient-to-r from-primary/60 to-primary rounded-full" />
        )}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
