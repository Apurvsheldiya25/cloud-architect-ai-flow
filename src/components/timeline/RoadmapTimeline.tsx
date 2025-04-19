
import React from 'react';

interface TimelineItem {
  date: string;
  number: string;
  title: string;
  description: string;
}

interface RoadmapTimelineProps {
  items: TimelineItem[];
}

const RoadmapTimeline: React.FC<RoadmapTimelineProps> = ({ items }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 h-full w-px bg-primary/20" />
        
        <div className="space-y-16">
          {items.map((item, index) => (
            <div key={index} className={`relative flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot and date */}
              <div className="absolute md:static left-0 flex items-center gap-4">
                <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-semibold text-sm">{item.number}</span>
                </div>
                <div className="hidden md:block bg-primary/10 px-4 py-1 rounded-full">
                  <span className="text-primary font-medium text-sm">{item.date}</span>
                </div>
              </div>

              {/* Content */}
              <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:w-[calc(50%-3rem)]' : 'md:w-[calc(50%-3rem)] md:text-right'}`}>
                <div className="md:hidden bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                  <span className="text-primary font-medium text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
