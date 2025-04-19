
import React from 'react';
import { QuoteIcon } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company?: string;
  imgSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  role, 
  company, 
  imgSrc 
}) => {
  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
      <div className="text-primary mb-4">
        <QuoteIcon className="h-6 w-6 text-primary/70" />
      </div>
      <p className="text-lg mb-6 font-medium">{quote}</p>
      <div className="flex items-center">
        {imgSrc ? (
          <img 
            src={imgSrc} 
            alt={author} 
            className="h-10 w-10 rounded-full mr-3 object-cover"
          />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
            <span className="text-primary font-medium text-sm">
              {author.split(' ').map(name => name[0]).join('')}
            </span>
          </div>
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">
            {role}{company ? `, ${company}` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
