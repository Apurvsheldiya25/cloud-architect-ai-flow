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
      {/* Hero Section with gradient */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)]" />
        
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

      {/* About Content Section - Redesigned for better professionalism */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background to-background/95">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10" />
        
        <div className="container-custom relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 blur-2xl transform group-hover:scale-105 transition-transform duration-500" />
              <div className="relative">
                <div className="rounded-2xl overflow-hidden border border-border/50 shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800" 
                    alt="Founder working on code" 
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold font-outfit tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Meet the Founder
                </h2>
                <div className="h-1 w-20 bg-primary rounded mb-6" />
              </div>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Apurv, the solo founder of Arch AI, created this product after years in SaaS and cloud architecture design. With a background in both software development and infrastructure engineering, he experienced firsthand the inefficiencies in cloud architecture planning.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                After spending countless hours designing and redesigning cloud architectures manually, Apurv decided to build Arch AI - a tool that leverages AI to make cloud infrastructure planning as simple as having a conversation.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Arch AI is bootstrapped, AI-powered, and built to scale with the needs of developers, architects, and teams of all sizes.
              </p>
            </div>
          </div>

          {/* Values Section - Enhanced with cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl font-bold font-outfit tracking-tight mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Our Values
              </h2>
              <div className="h-1 w-20 bg-primary rounded mb-6" />
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                We believe in simplicity, excellence, and continuous innovation in everything we do.
              </p>
            </div>

            <div className="grid gap-6">
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
                  className="group relative p-8 rounded-2xl border border-border/50 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section with modern design */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h2 className="text-4xl font-bold font-outfit tracking-tight mb-6 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Our Journey Ahead
            </h2>
            <p className="text-lg text-muted-foreground">
              Building the future of cloud architecture, one milestone at a time
            </p>
          </div>
          
          <RoadmapTimeline items={timelineItems} />
        </div>
      </section>

      {/* Enhanced CTA Section */}
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
