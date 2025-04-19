import React, { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/common/SectionHeading';
import FeatureCard from '@/components/common/FeatureCard';
import TestimonialCard from '@/components/common/TestimonialCard';
import CTASection from '@/components/common/CTASection';
import StyledBox from '@/components/common/StyledBox';
import { Link } from 'react-router-dom';
import { 
  MousePointer, 
  FileCode, 
  MessageSquareCode, 
  CloudCog, 
  Zap, 
  ShieldCheck, 
  Users, 
  Sparkles,
  BrainCircuit,
  ExternalLink,
  Code2,
  Cloud,
  Database
} from 'lucide-react';
import CloudTechnologies from '@/components/sections/CloudTechnologies';

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen pt-28">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] -z-10" />
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 animate-fade-up">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">AI-Powered Cloud Architecture</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-outfit tracking-tight mb-6 animate-fade-up animation-delay-100">
              Design Cloud Architectures<br />
              <span className="gradient-text">with AI in Seconds.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 animate-fade-up animation-delay-200">
              Generate, edit, and deploy cloud infrastructure with zero complexity.
            </p>
            
            <div className="flex items-center bg-[#E5DEFF] dark:bg-primary/5 rounded-full p-2 max-w-xl mx-auto mb-8 animate-fade-up animation-delay-300">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none px-6 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0 rounded-l-full"
              />
              <button className="px-8 py-3 bg-[#7C5DF2] hover:bg-[#6B4BE1] text-white rounded-full transition-all duration-200 flex items-center gap-2 font-medium shadow-lg shadow-primary/25 hover:translate-y-[-1px]">
                <span>Get started</span>
                <Sparkles className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-16 max-w-5xl mx-auto animate-fade-up animation-delay-400">
            <StyledBox>
              <div className="aspect-video bg-gradient-to-b from-background/50 to-background flex items-center justify-center rounded-[24px]">
                <BrainCircuit className="h-16 w-16 text-primary/50" />
              </div>
            </StyledBox>
          </div>
        </div>
      </section>

      {/* Cloud Technologies Section */}
      <CloudTechnologies />

      {/* How It Works */}
      <section className="section-padding animate-on-scroll relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/50" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(white,transparent_85%)] opacity-10" />
        
        <div className="container-custom relative z-10">
          <SectionHeading 
            title="How It Works"
            subtitle="Creating cloud architectures has never been easier. Just three simple steps."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <ProcessCard
              number={1}
              title="Describe your needs with a prompt"
              description="Tell Arch AI what you need in plain language, just like you'd explain it to a colleague."
            />
            
            <ProcessCard
              number={2}
              title="Arch AI instantly generates a cloud architecture"
              description="Watch as Arch AI creates a complete infrastructure diagram based on best practices."
            />
            
            <ProcessCard
              number={3}
              title="You edit and export to code or deploy"
              description="Fine-tune your diagram and export directly to Terraform, CloudFormation, or other formats."
            />
          </div>
          
          <div className="mt-16 max-w-5xl mx-auto animate-on-scroll">
            <div className="relative group rounded-xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-75 blur-lg group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <div className="aspect-video bg-card/60 backdrop-blur-sm flex items-center justify-center">
                  <BrainCircuit className="h-16 w-16 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="section-padding bg-secondary animate-on-scroll">
        <div className="container-custom">
          <SectionHeading 
            title="Core Features"
            subtitle="Powerful tools designed to streamline your cloud architecture workflow."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <FeatureCard 
              icon={MousePointer}
              title="Drag-and-Drop Editor"
              description="Easily customize your architecture with an intuitive drag-and-drop interface designed for technical and non-technical users."
            />
            <FeatureCard 
              icon={FileCode}
              title="Infrastructure as Code"
              description="Convert your diagrams directly to Terraform or CloudFormation with one click - no manual translation needed."
            />
            <FeatureCard 
              icon={Code2}
              title="Best Practice Templates"
              description="Start with industry-standard architecture patterns and customize to your needs."
            />
            <FeatureCard 
              icon={MessageSquareCode}
              title="AI Assistant Guide"
              description="Get expert suggestions and best practices while you work, with our AI assistant that understands cloud architecture."
            />
            <FeatureCard 
              icon={CloudCog}
              title="Multi-Cloud Support"
              description="Design for AWS, Azure, GCP, and more with native components and accurate relationships between services."
            />
            <FeatureCard 
              icon={Users}
              title="Real-time Collaboration"
              description="Work together with your team in real-time, share diagrams, and collect feedback all in one place."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding animate-on-scroll">
        <div className="container-custom">
          <SectionHeading 
            title="Benefits"
            subtitle="Arch AI doesn't just make pretty diagrams - it transforms how you build cloud infrastructure."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5 ring-1 ring-primary/30">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 font-outfit">Plan 10x faster</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Go from initial idea to detailed cloud architecture in minutes instead of days. Accelerate your planning cycle and delivery timelines.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5 ring-1 ring-primary/30">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 font-outfit">Reduce architecture errors</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Our AI ensures your architectures follow cloud best practices, security guidelines, and cost optimization principles automatically.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5 ring-1 ring-primary/30">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 font-outfit">Collaborate with teams</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">Share, edit, and discuss cloud architectures with stakeholders. Bridge the gap between technical and non-technical team members.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary animate-on-scroll">
        <div className="container-custom">
          <SectionHeading 
            title="What People Are Saying"
            subtitle="Don't just take our word for it. Here's what teams using Arch AI have to say."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            <TestimonialCard 
              quote="Arch AI saved our team 15+ hours per sprint. We went from whiteboarding for days to having a solid architecture in hours."
              author="Sarah Chen"
              role="DevOps Lead"
              company="TechStream"
            />
            <TestimonialCard 
              quote="This is like ChatGPT + AWS console combined. I can explain what I need and get not just a diagram but working infrastructure code."
              author="Michael Rodriguez"
              role="Solutions Architect"
              company="CloudNative Inc"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Try Arch AI – it's free to start"
        subtitle="Join thousands of developers and teams who are building better cloud infrastructure faster."
        buttonText="Start Building for Free"
        buttonLink="/signup"
        secondaryButtonText="View Pricing"
        secondaryButtonLink="/pricing"
      />
    </Layout>
  );
};

export default Index;
