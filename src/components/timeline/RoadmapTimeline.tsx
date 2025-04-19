
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

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
    <div className="max-w-5xl mx-auto">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-8 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-primary/50 via-primary/30 to-transparent" />
        
        <div className="space-y-20">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              key={index}
              className={cn(
                "relative flex items-start gap-8",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}
            >
              {/* Number and date container */}
              <div className={cn(
                "absolute md:static left-0 flex items-center gap-4",
                index % 2 === 0 ? "md:text-right" : "md:text-left",
                "min-w-[120px]"
              )}>
                <div className="flex flex-col items-center md:items-start gap-2">
                  <div className="z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                    <span className="text-primary-foreground font-semibold text-xl">{item.number}</span>
                  </div>
                  <div className="hidden md:block">
                    <span className="text-primary font-medium text-sm bg-primary/10 px-4 py-1.5 rounded-full">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content card */}
              <div className={cn(
                "ml-24 md:ml-0 p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 shadow-xl",
                index % 2 === 0 ? "md:w-[calc(50%-80px)]" : "md:w-[calc(50%-80px)]"
              )}>
                <div className="md:hidden mb-3">
                  <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full">
                    {item.date}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapTimeline;
