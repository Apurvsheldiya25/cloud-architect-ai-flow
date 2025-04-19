
import React from 'react';
import { BrainCircuit } from 'lucide-react';

const HeroFeatures = () => {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] -z-10" />
      
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up">
            <BrainCircuit className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Features</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight mb-6">
            Features that power modern
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent"> cloud workflows.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built for speed, clarity, and automation with cutting-edge AI technology.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures;
