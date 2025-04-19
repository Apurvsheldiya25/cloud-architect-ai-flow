
import React from 'react';
import { Cloud, Database } from 'lucide-react';

const CloudTechnologies = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-secondary/20 dark:from-background dark:to-background/80">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight mb-6 bg-gradient-to-r from-primary/80 to-purple-600 bg-clip-text text-transparent">
            Powered By Modern Cloud Technologies
          </h2>
          <p className="text-xl text-muted-foreground">
            Build scalable architectures with industry-leading cloud providers and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 max-w-5xl mx-auto mb-24">
          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-white/5 shadow-xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-primary/25">
              <Cloud className="w-12 h-12 text-[#4285F4] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Google Cloud Platform</h3>
            <p className="text-muted-foreground text-lg">Enterprise-scale cloud infrastructure</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-white/5 shadow-xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-primary/25">
              <Database className="w-12 h-12 text-[#326CE5] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Kubernetes</h3>
            <p className="text-muted-foreground text-lg">Container orchestration platform</p>
          </div>

          <div className="flex flex-col items-center text-center group">
            <div className="w-24 h-24 rounded-full bg-white dark:bg-white/5 shadow-xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:shadow-primary/25">
              <Cloud className="w-12 h-12 text-[#008AD7] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-semibold mb-3">Microsoft Azure</h3>
            <p className="text-muted-foreground text-lg">Cloud computing solutions</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-70">
            <img src="/microsoft.svg" alt="Microsoft" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/google.svg" alt="Google" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/meta.svg" alt="Meta" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/spotify.svg" alt="Spotify" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/dell.svg" alt="Dell" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/nvidia.svg" alt="NVIDIA" className="h-8 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;
