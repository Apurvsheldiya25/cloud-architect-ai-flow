
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingFeature {
  included: boolean;
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: PricingFeature[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}) => {
  return (
    <div 
      className={`bg-card rounded-xl p-8 border ${
        highlighted 
          ? 'border-primary shadow-lg relative' 
          : 'border-border shadow-sm'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium py-1 px-3 rounded-full">
          Popular
        </div>
      )}
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold">{price}</span>
          {price !== '$0' && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            {feature.included ? (
              <Check className="h-5 w-5 text-primary shrink-0 mr-2 mt-0.5" />
            ) : (
              <svg className="h-5 w-5 text-muted-foreground shrink-0 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={feature.included ? 'text-foreground' : 'text-muted-foreground'}>
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
      <Link to={buttonLink} className="block w-full">
        <Button 
          className="w-full" 
          variant={highlighted ? "default" : "outline"}
        >
          {buttonText}
        </Button>
      </Link>
    </div>
  );
};

export default PricingCard;
