
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
  secondaryButtonLink,
}) => {
  return (
    <section className="bg-secondary section-padding">
      <div className="container-custom text-center">
        <h2 className="heading-lg max-w-3xl mx-auto mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">{subtitle}</p>}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={buttonLink}>
            <Button size="lg">{buttonText}</Button>
          </Link>
          {secondaryButtonText && secondaryButtonLink && (
            <Link to={secondaryButtonLink}>
              <Button variant="outline" size="lg">{secondaryButtonText}</Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
