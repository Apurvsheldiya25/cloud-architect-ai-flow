import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import CTASection from '@/components/common/CTASection';
import ComparisonTable from '@/components/features/ComparisonTable';
import HeroFeatures from '@/components/features/HeroFeatures';
import { BrainCircuit, MousePointer, FileCode, MessageSquareCode, CloudCog, Users, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  return (
    <Layout>
      <HeroFeatures />

      {/* Main Features */}
      <section className="py-20 bg-secondary/50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <div className="inline-block bg-primary/10 p-3 rounded-lg">
                <BrainCircuit className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-outfit">AI Architecture Generation</h2>
              <p className="text-muted-foreground text-lg">
                Simply describe what you need, and our AI will generate a complete cloud architecture diagram in seconds.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                  <span>Supports natural language prompts in multiple languages</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                  <span>Optimizes for cost, performance, and security automatically</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-1" />
                  <span>Includes service sizing recommendations based on your requirements</span>
                </li>
              </ul>
            </div>
            <Card className="overflow-hidden border-border/50 bg-card/50">
              <CardContent className="p-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=1200&h=800" 
                    alt="AI Architecture Generation" 
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <section className="relative py-24 overflow-hidden">
            {/* Add decorative background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background" />
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-purple-500 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
            </div>
            
            <div className="container-custom relative">
              <div className="mx-auto max-w-2xl text-center mb-16">
                <SectionHeading 
                  title="Powerful Features"
                  subtitle="Everything you need for your cloud architecture workflow, designed with best practices and real-world use cases in mind."
                  centered={true}
                  className="animate-fade-in"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                <FeatureCard 
                  icon={MessageSquareCode}
                  title="Guide AI Assistant"
                  description="Get real-time recommendations and security advice as you design your architecture."
                />
                <FeatureCard 
                  icon={FileCode}
                  title="IaC Export"
                  description="Export your visual diagrams directly to infrastructure as code in multiple formats."
                />
                <FeatureCard 
                  icon={Users}
                  title="Real-time Sharing"
                  description="Collaborate with your team in real-time with public and private sharing options."
                />
                <FeatureCard 
                  icon={CloudCog}
                  title="Multi-Cloud Support"
                  description="Design for AWS, Azure, GCP, and more with native components and accurate service relationships."
                />
                <FeatureCard 
                  icon={MousePointer}
                  title="Intuitive Interface"
                  description="Drag-and-drop interface designed for both technical and non-technical users."
                />
                <FeatureCard 
                  icon={BrainCircuit}
                  title="Smart Templates"
                  description="Start with industry-standard architecture patterns and customize to your needs."
                />
              </div>
            </div>
          </section>

          {/* Comparison Section */}
          <section className="py-20">
            <div className="container-custom">
              <SectionHeading 
                title="How Arch AI Compares"
                subtitle="See how our platform stacks up against traditional solutions"
                centered={true}
              />
              
              <div className="mt-12">
                <ComparisonTable />
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
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeading 
            title="How Arch AI Compares"
            subtitle="See how our platform stacks up against traditional solutions"
            centered={true}
          />
          
          <div className="mt-12">
            <ComparisonTable />
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
