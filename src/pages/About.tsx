
import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import CTASection from '@/components/common/CTASection';
import RoadmapTimeline from '@/components/timeline/RoadmapTimeline';
import SectionHeading from '@/components/common/SectionHeading';
import { Card, CardContent } from '@/components/ui/card';

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
      {/* Hero Section with simplified gradient */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-primary/3 to-transparent opacity-50" />
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

      {/* Meet the Founder Section - Clean and organized layout */}
      <section className="py-16 md:py-24 bg-white dark:bg-background/50 border-y border-border/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800" 
                  alt="Founder working on code" 
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block">
                <h2 className="text-3xl md:text-4xl font-bold font-outfit tracking-tight mb-3">
                  Meet the Founder
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
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
        </div>
      </section>

      {/* Values Section - Better organized grid */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-background border-b border-border/10">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <div className="inline-block">
                  <h2 className="text-3xl md:text-4xl font-bold font-outfit tracking-tight mb-3">
                    Our Values
                  </h2>
                  <div className="h-1 w-20 bg-primary rounded-full" />
                </div>
                <p className="text-lg text-muted-foreground mt-6">
                  We believe in simplicity, excellence, and continuous innovation in everything we do.
                </p>
              </div>
            </div>

            <div className="lg:col-span-8">
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
                  <Card key={index} className="bg-white dark:bg-card shadow-sm border border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">
                          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                          <p className="text-muted-foreground">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section with modern design */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90" />
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <SectionHeading 
              title="Our Journey Ahead"
              subtitle="Building the future of cloud architecture, one milestone at a time"
              centered={true}
            />
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
