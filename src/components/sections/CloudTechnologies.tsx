
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cloud className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Google Cloud Platform</h3>
            <p className="text-muted-foreground">Enterprise-scale cloud infrastructure</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Database className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Kubernetes</h3>
            <p className="text-muted-foreground">Container orchestration platform</p>
          </div>

          <div className="group flex flex-col items-center text-center p-6 rounded-xl bg-card hover:bg-secondary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Cloud className="w-7 h-7 text-primary" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-medium mb-2">Microsoft Azure</h3>
            <p className="text-muted-foreground">Cloud computing solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudTechnologies;
