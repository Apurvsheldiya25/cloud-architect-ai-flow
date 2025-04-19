
import React from 'react';
import Layout from '@/components/layout/Layout';
import { CheckCircle } from 'lucide-react';
import CTASection from '@/components/common/CTASection';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Our Mission</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Arch AI exists to simplify how cloud architectures are created. We eliminate manual diagrams and enable AI-driven infrastructure planning.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-10 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&h=800" 
                    alt="Founder working on code" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <h2 className="heading-md mb-6">Meet the Founder</h2>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="heading-md mb-6">Our Values</h2>
              <ul className="space-y-4">
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
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-10 blur-sm"></div>
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

      {/* Roadmap Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-16">Roadmap</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              <div className="relative flex items-start pl-8 md:pl-0">
                <div className="hidden md:block w-20 text-right mr-8">
                  <span className="text-primary font-semibold">Q2 2025</span>
                </div>
                <div className="absolute top-0 left-0 md:static md:mr-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="md:hidden">1</span>
                  </div>
                  <div className="absolute top-8 bottom-0 left-4 w-px bg-border md:hidden"></div>
                </div>
                <div>
                  <div className="md:hidden text-primary font-semibold mb-2">Q2 2025</div>
                  <h3 className="font-semibold text-xl mb-3">Multi-cloud optimization</h3>
                  <p className="text-muted-foreground text-lg">
                    We're building advanced AI models to optimize architectures across different cloud providers, 
                    helping you choose the best provider for each component of your infrastructure and enabling 
                    true multi-cloud deployments.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start pl-8 md:pl-0">
                <div className="hidden md:block w-20 text-right mr-8">
                  <span className="text-primary font-semibold">Q3 2025</span>
                </div>
                <div className="absolute top-0 left-0 md:static md:mr-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="md:hidden">2</span>
                  </div>
                  <div className="absolute top-8 bottom-0 left-4 w-px bg-border md:hidden"></div>
                </div>
                <div>
                  <div className="md:hidden text-primary font-semibold mb-2">Q3 2025</div>
                  <h3 className="font-semibold text-xl mb-3">Real-time deployment</h3>
                  <p className="text-muted-foreground text-lg">
                    Soon you'll be able to deploy your architecture directly from Arch AI to your cloud provider 
                    of choice. Design, test, and deploy without ever leaving the platform.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start pl-8 md:pl-0">
                <div className="hidden md:block w-20 text-right mr-8">
                  <span className="text-primary font-semibold">Q4 2025</span>
                </div>
                <div className="absolute top-0 left-0 md:static md:mr-4">
                  <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    <span className="md:hidden">3</span>
                  </div>
                </div>
                <div>
                  <div className="md:hidden text-primary font-semibold mb-2">Q4 2025</div>
                  <h3 className="font-semibold text-xl mb-3">AI agent infrastructure consultant</h3>
                  <p className="text-muted-foreground text-lg">
                    Our AI will evolve beyond diagram generation to become a full infrastructure consultant, 
                    monitoring your deployments, suggesting optimizations, and helping you troubleshoot issues 
                    in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Join us on our journey"
        subtitle="Try Arch AI today and help shape the future of cloud architecture design."
        buttonText="Start Building for Free"
        buttonLink="/signup"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </Layout>
  );
};

export default About;
