
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { CircleDot } from 'lucide-react';

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
  const componentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: componentRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={componentRef} className="relative max-w-5xl mx-auto">
      {/* Animated progress line - Fix for non-static position warning */}
      <motion.div 
        className="absolute left-8 md:left-1/2 top-0 w-1 h-full origin-top bg-primary/30"
        style={{
          scaleY,
          backgroundImage: 'linear-gradient(180deg, var(--primary) 0%, var(--primary) 100%)'
        }}
      />
      
      <div className="relative space-y-24">
        {items.map((item, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            key={index}
            className={cn(
              "relative flex items-center gap-8",
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
          >
            {/* Timeline node */}
            <div className={cn(
              "absolute md:static left-8 md:left-auto transform -translate-x-1/2 md:translate-x-0",
              "z-20 flex items-center justify-center",
              index % 2 === 0 ? "md:text-right" : "md:text-left"
            )}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 
                             flex items-center justify-center shadow-lg shadow-primary/25">
                  <span className="text-primary-foreground font-semibold text-xl">{item.number}</span>
                </div>
              </motion.div>
            </div>

            {/* Content card */}
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: (index * 0.2) + 0.3 }}
              className={cn(
                "ml-24 md:ml-0 p-8 rounded-2xl",
                "bg-gradient-to-br from-card/80 to-card/40",
                "backdrop-blur-lg border border-border/50 shadow-xl",
                "flex-1 md:w-[calc(50%-4rem)]"
              )}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium 
                           bg-primary/10 text-primary mb-4">
                {item.date}
              </span>
              <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-foreground 
                          to-foreground/80 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
