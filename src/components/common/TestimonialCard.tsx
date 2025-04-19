
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
}) => {
  return (
    <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
      <div className="mb-6">
        <svg className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 11H6C4.89543 11 4 10.1046 4 9V6C4 4.89543 4.89543 4 6 4H9C10.1046 4 11 4.89543 11 6V14C11 17.3137 8.31371 20 5 20M20 11H16C14.8954 11 14 10.1046 14 9V6C14 4.89543 14.8954 4 16 4H19C20.1046 4 21 4.89543 21 6V14C21 17.3137 18.3137 20 15 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <p className="text-foreground mb-6 italic">{quote}</p>
      <div className="flex items-center">
        {avatarUrl ? (
          <img src={avatarUrl} alt={author} className="h-10 w-10 rounded-full mr-3" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-medium mr-3">
            {author.charAt(0)}
          </div>
        )}
        <div>
          <div className="font-semibold">{author}</div>
          <div className="text-sm text-muted-foreground">{role}, {company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
