
import React from 'react';
import { Cloud, Database } from 'lucide-react';

const CloudTechnologies = () => {
  return (
    <section className="py-24 bg-white dark:bg-background">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-outfit tracking-tight mb-4">
            Powered By Modern Cloud Technologies
          </h2>
          <p className="text-lg text-muted-foreground">
            Build scalable architectures with industry-leading cloud providers and tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#E5DEFF] dark:bg-primary/10 flex items-center justify-center mb-6">
              <Cloud className="w-10 h-10 text-[#4285F4]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Google Cloud Platform</h3>
            <p className="text-muted-foreground">Enterprise-scale cloud infrastructure</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#E5DEFF] dark:bg-primary/10 flex items-center justify-center mb-6">
              <Database className="w-10 h-10 text-[#326CE5]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Kubernetes</h3>
            <p className="text-muted-foreground">Container orchestration platform</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-[#E5DEFF] dark:bg-primary/10 flex items-center justify-center mb-6">
              <Cloud className="w-10 h-10 text-[#008AD7]" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Microsoft Azure</h3>
            <p className="text-muted-foreground">Cloud computing solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;
