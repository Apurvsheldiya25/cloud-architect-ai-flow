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

      {/* About Content with enhanced visuals */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 mix-blend-overlay" />
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800" 
                    alt="Founder working on code" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold font-outfit tracking-tight">Meet the Founder</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Apurv, the solo founder of Arch AI, created this product after years in SaaS and cloud architecture design. With a background in both software development and infrastructure engineering, he experienced firsthand the inefficiencies in cloud architecture planning.
              </p>
              <p className="text-muted-foreground text-lg mb-6">
                After spending countless hours designing and redesigning cloud architectures manually, Apurv decided to build Arch AI - a tool that leverages AI to make cloud infrastructure planning as simple as having a conversation.
              </p>
              <p className="text-muted-foreground text-lg">
                Arch AI is bootstrapped, AI-powered, and built to scale with the needs of developers, architects, and teams of all sizes.
              </p>
            </div>
          </div>

          {/* Values Section with new card design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold font-outfit tracking-tight mb-8">Our Values</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Simplicity First</h3>
                    <p className="text-muted-foreground">
                      We believe complex cloud infrastructure shouldn't require complex tools. Everything we build aims to simplify the process.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Best Practices by Default</h3>
                    <p className="text-muted-foreground">
                      Our AI is designed to incorporate security, reliability, and cost optimization best practices automatically.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Continuous Learning</h3>
                    <p className="text-muted-foreground">
                      Our AI models improve with each architecture created, learning from the collective wisdom of our users.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">User-Centric Design</h3>
                    <p className="text-muted-foreground">
                      Every feature we build starts with understanding the real needs of cloud builders.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 mix-blend-overlay" />
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&h=800" 
                    alt="Cloud infrastructure visualization" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section with modern design */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold font-outfit tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
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
