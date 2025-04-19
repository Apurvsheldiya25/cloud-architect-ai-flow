
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title, 
  subtitle, 
  buttonText, 
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink
}) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-5" />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-8 flex justify-center">
            <div className="bg-primary/10 p-3 rounded-full">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          {/* Title & Subtitle */}
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg text-muted-foreground mb-8">
              {subtitle}
            </p>
          )}
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={buttonLink}>
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-primary hover:opacity-90 transition-all duration-300 text-white font-medium py-6 px-8 text-lg shadow-lg shadow-primary/25 hover:-translate-y-0.5"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                {buttonText}
              </Button>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto py-6 px-8 text-lg border-primary/20 hover:border-primary/40"
                >
                  {secondaryButtonText}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
