
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
    <section className="relative py-32 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-12 shadow-2xl">
            <div className="relative">
              {/* Decorative Sparkle Icon */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 bg-primary/10 p-4 rounded-full animate-bounce">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              
              {/* Content Container */}
              <div className="text-center space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                  {title}
                </h2>
                
                {subtitle && (
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    {subtitle}
                  </p>
                )}
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link to={buttonLink} className="group">
                    <Button 
                      size="lg" 
                      className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-500 hover:opacity-90 transition-all duration-300 text-white font-semibold py-6 text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/35 hover:-translate-y-0.5"
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
                        className="w-full sm:w-auto border-primary/20 hover:border-primary/40 py-6 text-lg"
                      >
                        {secondaryButtonText}
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
