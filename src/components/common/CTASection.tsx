
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
    <section className="relative py-16 md:py-24 bg-[#F5F5FC] dark:bg-[#1A1F2C]">
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit tracking-tight mb-4 text-[#0A1128] dark:text-white">
            {title}
          </h2>
          
          {subtitle && (
            <p className="text-lg text-[#4A5568] dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={buttonLink} className="group">
              <Button 
                size="lg" 
                className="bg-[#9b87f5] hover:bg-[#8a6ff4] text-white px-8 py-3 rounded-lg transition-all duration-300 shadow-lg shadow-purple-500/30"
              >
                {buttonText}
              </Button>
            </Link>
            
            {secondaryButtonText && secondaryButtonLink && (
              <Link to={secondaryButtonLink} className="group">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-gray-300 hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
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
