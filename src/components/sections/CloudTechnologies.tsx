
import React from 'react';
import { Cloud, Database } from 'lucide-react';

const CloudTechnologies = () => {
  return (
    <section className="py-16 bg-white dark:bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4 bg-gradient-to-r from-primary/80 to-purple-600 bg-clip-text text-transparent">
            Powered By Modern Cloud Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Build scalable architectures with industry-leading cloud providers and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-white/5 shadow-md flex items-center justify-center mb-4">
              <Cloud className="w-8 h-8 text-[#4285F4]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Google Cloud Platform</h3>
            <p className="text-muted-foreground">Enterprise-scale cloud infrastructure</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-white/5 shadow-md flex items-center justify-center mb-4">
              <Database className="w-8 h-8 text-[#326CE5]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Kubernetes</h3>
            <p className="text-muted-foreground">Container orchestration platform</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-white dark:bg-white/5 shadow-md flex items-center justify-center mb-4">
              <Cloud className="w-8 h-8 text-[#008AD7]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Microsoft Azure</h3>
            <p className="text-muted-foreground">Cloud computing solutions</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-60">
            <img src="/microsoft.svg" alt="Microsoft" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/google.svg" alt="Google" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/meta.svg" alt="Meta" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/spotify.svg" alt="Spotify" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/dell.svg" alt="Dell" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
            <img src="/nvidia.svg" alt="NVIDIA" className="h-6 w-auto grayscale hover:grayscale-0 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;
