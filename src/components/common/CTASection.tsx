
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-5" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to={buttonLink}>
              <Button 
                size="lg" 
                className="bg-[#7C5DF2] hover:bg-[#6B4BE1] text-white px-8 py-6 text-base font-medium rounded-lg transition-all duration-200"
              >
                {buttonText}
              </Button>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="px-8 py-6 text-base font-medium border-muted-foreground/20 hover:bg-secondary/80"
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
