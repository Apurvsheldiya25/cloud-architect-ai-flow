
import React from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
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
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Animated progress line */}
      <motion.div 
        className="fixed left-0 top-0 right-0 h-1 bg-primary origin-[0%] z-50"
        style={{ scaleX }}
      />

      <div className="space-y-32 relative">
        {/* Vertical connecting line */}
        <div className="absolute left-8 md:left-1/2 h-full w-[2px]">
          <motion.div
            className="h-full bg-primary/30"
            style={{
              scaleY: scrollYProgress,
              transformOrigin: "top"
            }}
          />
        </div>

        {items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8,
                delay: 0.3 
              }
            }}
            viewport={{ once: true, margin: "-100px" }}
            key={index}
            className={cn(
              "relative flex items-center gap-8",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Number and date container */}
            <div className={cn(
              "absolute md:static left-0 flex items-center gap-4",
              index % 2 === 0 ? "md:text-right" : "md:text-left",
              "min-w-[150px]"
            )}>
              <motion.div 
                className="flex flex-col items-center md:items-start gap-3"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-bold text-xl">{item.number}</span>
                </div>
                <div className="hidden md:block">
                  <span className="text-primary font-semibold text-sm bg-primary/10 px-4 py-1.5 rounded-full">
                    {item.date}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Content card */}
            <motion.div 
              className={cn(
                "ml-24 md:ml-0 p-8 rounded-2xl bg-card border border-border shadow-xl",
                "backdrop-blur-sm bg-opacity-50",
                index % 2 === 0 ? "md:w-[calc(50%-90px)]" : "md:w-[calc(50%-90px)]"
              )}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="md:hidden mb-3">
                <span className="text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full">
                  {item.date}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-muted-foreground/90 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
