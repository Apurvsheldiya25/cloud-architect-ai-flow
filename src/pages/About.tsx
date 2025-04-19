import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import CTASection from '@/components/common/CTASection';
import RoadmapTimeline from '@/components/timeline/RoadmapTimeline';

const About = () => {
  const timelineItems = [
    {
      date: "Q2 2025",
      number: "01",
      title: "Multi-cloud optimization",
      description: "We're building advanced AI models to optimize architectures across different cloud providers, helping you choose the best provider for each component of your infrastructure and enabling true multi-cloud deployments."
    },
    {
      date: "Q3 2025",
      number: "02",
      title: "Real-time deployment",
      description: "Soon you'll be able to deploy your architecture directly from Arch AI to your cloud provider of choice. Design, test, and deploy without ever leaving the platform."
    },
    {
      date: "Q4 2025",
      number: "03",
      title: "AI agent infrastructure consultant",
      description: "Our AI will evolve beyond diagram generation to become a full infrastructure consultant, monitoring your deployments, suggesting optimizations, and helping you troubleshoot issues in real-time."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight mb-6">
              Simplifying Cloud Architecture with <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We're on a mission to revolutionize how cloud architectures are designed and deployed.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Founder Section */}
      <section className="relative pb-32 pt-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="aspect-[4/3] relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800" 
                alt="Founder working on code" 
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-3">Meet the Founder</h2>
                <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Apurv, the solo founder of Arch AI, created this product after years in SaaS and cloud architecture design. With a background in both software development and infrastructure engineering, he experienced firsthand the inefficiencies in cloud architecture planning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                After spending countless hours designing and redesigning cloud architectures manually, Apurv decided to build Arch AI - a tool that leverages AI to make cloud infrastructure planning as simple as having a conversation.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Arch AI is bootstrapped, AI-powered, and built to scale with the needs of developers, architects, and teams of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-24 bg-gray-50/50 dark:bg-gray-950/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-[320px,1fr] gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-3">Our Values</h2>
              <div className="h-1 w-16 bg-primary rounded-full mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in simplicity, excellence, and continuous innovation in everything we do.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Simplicity First",
                  description: "We believe complex cloud infrastructure shouldn't require complex tools. Everything we build aims to simplify the process."
                },
                {
                  title: "Best Practices by Default",
                  description: "Our AI is designed to incorporate security, reliability, and cost optimization best practices automatically."
                },
                {
                  title: "Continuous Learning",
                  description: "Our AI models improve with each architecture created, learning from the collective wisdom of our users."
                },
                {
                  title: "User-Centric Design",
                  description: "Every feature we build starts with understanding the real needs of cloud builders."
                }
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{value.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-32 relative">
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-3xl font-bold mb-6">
              Our Journey Ahead
            </h2>
            <p className="text-lg text-muted-foreground">
              Building the future of cloud architecture, one milestone at a time
            </p>
          </div>
          
          <RoadmapTimeline items={timelineItems} />
        </div>
      </section>

      {/* CTA Section */}
      <CTASection 
        title="Join us on our journey"
        subtitle="Be part of the future of cloud architecture design."
        buttonText="Start Building for Free"
        buttonLink="/signup"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default About;
