import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import CTASection from '@/components/common/CTASection';
import { BrainCircuit, MousePointer, FileCode, MessageSquareCode, CloudCog, Users, Check, X } from 'lucide-react';

const Features = () => {
  return (
    <Layout>
      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Features that power modern cloud workflows.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built for speed, clarity, and automation.
          </p>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="pb-20">
        <div className="container-custom">
          {/* AI Architecture Generation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 p-3 rounded-lg mb-6">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h2 className="heading-md mb-4">AI Architecture Generation</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Simply describe what you need, and our AI will generate a complete cloud architecture diagram in seconds. From simple web apps to complex microservices architectures, Arch AI understands cloud patterns and best practices.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Supports natural language prompts in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Optimizes for cost, performance, and security automatically</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Includes service sizing recommendations based on your requirements</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-10 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800" 
                    alt="AI Architecture Generation" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Smart Service Connection */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-10 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&h=800" 
                    alt="Smart Service Connection" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="inline-block bg-primary/10 p-3 rounded-lg mb-6">
                <CloudCog className="h-8 w-8 text-primary" />
              </div>
              <h2 className="heading-md mb-4">Smart Service Connection Auto-Wiring</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Forget manual connecting of services. Arch AI understands how cloud services should interact and automatically creates valid, best-practice connections between components.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Automatic security group and IAM role configuration</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Smart detection of necessary intermediary services</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Visualization of data flow and service dependencies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Drag & Drop Canvas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <div className="inline-block bg-primary/10 p-3 rounded-lg mb-6">
                <MousePointer className="h-8 w-8 text-primary" />
              </div>
              <h2 className="heading-md mb-4">Drag & Drop Canvas</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our intuitive canvas makes it easy to modify AI-generated designs or create your own from scratch. The interface is designed for both technical and non-technical users.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Snap-to-grid for precise alignment</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Smart connectors that automatically route</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                  <span>Library of all major cloud provider components</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-10 blur-sm"></div>
                <div className="relative rounded-xl overflow-hidden border border-border">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&h=800" 
                    alt="Drag & Drop Canvas" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* More Features */}
          <div className="pt-12">
            <SectionHeading 
              title="More Powerful Features"
              subtitle="Everything you need for your cloud architecture workflow."
              centered={true}
            />
            
            <div className="grid-feature">
              <FeatureCard 
                icon={MessageSquareCode}
                title="Guide AI (Assistant Panel)"
                description="Get real-time recommendations, cost estimates, and security advice as you design your architecture."
              />
              <FeatureCard 
                icon={FileCode}
                title="Terraform + CloudFormation Export"
                description="Export your visual diagrams directly to infrastructure as code in multiple formats."
              />
              <FeatureCard 
                icon={Users}
                title="Real-time Sharing"
                description="Collaborate with your team in real-time with public and private sharing options."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <SectionHeading 
            title="Use Cases"
            subtitle="Arch AI helps different roles solve unique cloud infrastructure challenges."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-xl mb-4">DevOps Engineers</h3>
              <p className="text-muted-foreground mb-5">
                Speed up architecture planning and streamline the path from design to deployment with automatic IaC generation.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Accelerate infrastructure planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Reduce configuration errors</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Implement best practices automatically</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-xl mb-4">SaaS Founders</h3>
              <p className="text-muted-foreground mb-5">
                Quickly validate ideas and understand infrastructure requirements for your MVP or growing product.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Visualize infrastructure needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Estimate cloud costs accurately</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Communicate technical details to investors</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold text-xl mb-4">Cloud Architects</h3>
              <p className="text-muted-foreground mb-5">
                Standardize workflows across teams and ensure consistency in your cloud infrastructure designs.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Create reusable architecture templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Document designs automatically</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                  <span>Evaluate multiple design approaches</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="How Arch AI Compares"
            subtitle="See how Arch AI stacks up against manual tools and general-purpose diagramming solutions."
            centered={true}
          />
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-border">Feature</th>
                  <th className="p-4 border-b border-border text-primary font-semibold">Arch AI</th>
                  <th className="p-4 border-b border-border">Miro</th>
                  <th className="p-4 border-b border-border">Manual Tools</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">AI Diagram Generation</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">IaC Export</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      <span className="text-sm text-muted-foreground ml-1">(manual)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">Cloud Templates</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">Multi-Cloud Support</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      <span className="text-sm text-muted-foreground ml-1">(limited)</span>
                    </div>
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      <span className="text-sm text-muted-foreground ml-1">(varies)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">Collaboration</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      <span className="text-sm text-muted-foreground ml-1">(limited)</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border font-medium">Technical Documentation</td>
                  <td className="p-4 border-b border-border text-center">
                    <Check className="h-5 w-5 text-primary mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <X className="h-5 w-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="p-4 border-b border-border text-center">
                    <div className="flex items-center justify-center">
                      <Check className="h-5 w-5 text-muted-foreground mx-auto" />
                      <span className="text-sm text-muted-foreground ml-1">(manual)</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Experience Arch AI in action"
        subtitle="Get started with a free account and see how Arch AI can transform your cloud architecture workflow."
        buttonText="Start Building for Free"
        buttonLink="/signup"
      />
    </Layout>
  );
};

export default Features;
