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
  Code2
} from 'lucide-react';

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
            
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-full p-1.5 max-w-xl mx-auto mb-8 animate-fade-up animation-delay-300">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent border-none px-4 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-0"
              />
              <button className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors duration-200 flex items-center gap-2">
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

      {/* Trusted By */}
      <section className="py-16 bg-gradient-to-b from-secondary/50 to-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary mb-2">Trusted By Industry Leaders</p>
            <h3 className="text-2xl font-semibold font-outfit">Powering Cloud Infrastructure Worldwide</h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center max-w-4xl mx-auto">
            <StyledBox className="aspect-[3/2] flex items-center justify-center p-4">
              <div className="h-8 text-muted-foreground/70 hover:text-foreground transition-colors">
                <svg className="h-full" viewBox="0 0 126 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.53 31.43c-5.184 3.787-13.08 5.813-19.76 5.813-9.338 0-17.76-3.413-24.134-9.12-.518-.453-.066-1.08.547-.733 7 4.227 15.64 6.667 24.534 6.667 6.013 0 12.667-1.254 18.76-3.813.92-.4 1.694.613.853 1.187z" fill="currentColor"/>
                <path d="M20.693 28.667c-.667-.853-4.4-.4-6.093-.2-.507.066-.587-.387-.133-.72 3-.2 7.93-1.413 7.333-2.667-.613-1.347-7.333-3.467-13.44-.187-.96.453-1.907.667-1.64.067 1.8-1.547 7.813-5.387 15.44-3.787.8.187 1.453.827.96 1.56-1.24 1.84-3.8 9.333-2.427 5.933z" fill="currentColor"/>
                </svg>
              </div>
            </StyledBox>
            
            <StyledBox className="aspect-[3/2] flex items-center justify-center p-4">
              <div className="h-8 text-muted-foreground/70 hover:text-foreground transition-colors">
                <svg className="h-full" viewBox="0 0 150 31" xmlns="http://www.w3.org/2000/svg">
                  <path d="M43.2 3.5h11.4a1 1 0 011 .9V27a1 1 0 01-.8 1H43.4a1.1 1.1 0 01-1-1.1V4.6c0-.6.4-1.1 1-1.1zm3.5 3.7v16h4.5V7.2h-4.5zM83.6 24.5a16.5 16.5 0 01-1.4.5 6 6 0 01-1.9.3 6.5 6.5 0 01-5-2 7.4 7.4 0 01-2-5.4 8 8 0 012-5.3 7 7 0 015.3-2.2c.7 0 1.3 0 1.8.2.6.1 1 .3 1.4.4V7.2h-4.5v-3h8v18.9c0 .3-.1.5-.3.7-.2.2-.5.3-.8.3h-2.7l.1-1a.8.8 0 000-.1v-.7l.1.2zm0-10.8l-.8-.3a4 4 0 00-1-.1 3.6 3.6 0 00-2.8 1.2 4.5 4.5 0 00-1 3.2c0 1.3.3 2.3 1 3a3.7 3.7 0 002.9 1.1c.3 0 .7 0 1-.2.3 0 .5-.2.7-.3v-7.6zM21.7 17.7a8.4 8.4 0 01-1.6 5.2 8 8 0 01-4.2 2.8 11 11 0 01-3 .4H3.2c-.3 0-.6-.1-.8-.3a1 1 0 01-.3-.7V4.6c0-.3.1-.6.3-.7.2-.2.5-.3.8-.3h9.6c1 0 2 .1 3 .3a7.9 7.9 0 014.3 2.8 8 8 0 011.6 5v6zm-3.8-6.3c0-1.3-.5-2.3-1.3-3A5 5 0 0013 7.3H7v14h6c1.4 0 2.6-.5 3.5-1.3a4.4 4.4 0 001.3-3v-5.5zM134.8 18c0 1.4-.2 2.8-.8 4a8.7 8.7 0 01-5.6 4.8c-1.2.4-2.6.5-4 .5a14 14 0 01-4.2-.6 9.2 9.2 0 01-3.5-1.9 1 1 0 01-.2-1.4l1.6-1.9c.3-.4.7-.5 1.2-.3.2.1.5.3.8.5l1 .5 1.3.4a7.8 7.8 0 003.2 0c.5-.1 1-.4 1.4-.7.4-.3.7-.7 1-1.2.2-.5.3-1.1.3-1.8 0-.6-.2-1.2-.5-1.7a4 4 0 00-1.3-1.2l-1.3-.8-1.1-.5-1.2-.5-1.4-.6a14 14 0 01-3.2-2 7 7 0 01-1.8-2.3 7.5 7.5 0 01-.6-3.3 8 8 0 011.6-4.8c1-1.3 2.5-2.2 4.2-2.7a9.6 9.6 0 013.3-.3c1.2 0 2.5.2 3.7.5 1 .4 2 .9 3 1.4a1 1 0 01.4 1.3l-1.2 2a1 1 0 01-1.5.5l-1.7-.9c-.8-.3-1.7-.5-2.6-.5a6 6 0 00-1.9.3 3.5 3.5 0 00-2.2 1.7c-.3.5-.4 1-.4 1.7 0 .5.1 1 .3 1.3l.8 1 1.2.7 1.5.7 1.5.6 1.4.7a12 12 0 12.3 1.3c.7.5 1.3 1 1.8 1.7.6.7 1 1.3 1.2 2 .3.8.5 1.7.5 2.6zm-30.5-3.3a8 8 0 01-2 5.4 6.4 6.4 0 01-9.5 0 8 8 0 01-2-5.3 8 8 0 012-5.3 6.9 6.9 0 019.6 0 8 8 0 012 5.2zm-3.6 0c0-1.3-.4-2.3-1-3.2a3.5 3.5 0 00-5.4 0 4.8 4.8 0 00-1 3.2c0 1.3.3 2.3 1 3.1a3.5 3.5 0 005.4 0c.6-.8 1-1.8 1-3zm26.4 0a8 8 0 01-2 5.4 6.4 6.4 0 01-9.6 0 8 8 0 01-2-5.3 8 8 0 012-5.3 6.4 6.4 0 019.6 0 8 8 0 012 5.2zm-3.7 0c0-1.3-.3-2.3-1-3.2a3.5 3.5 0 00-5.3 0 4.8 4.8 0 00-1 3.2c0 1.3.3 2.3 1 3.1a3.5 3.5 0 005.4 0c.6-.8 1-1.8 1-3zm15.1-7.7h-4.5v14h3.5V15h1c.3 0 .7 0 1-.2.3 0 .5-.2.8-.3l.9.8.8.8.7.8 1.3 1.5.7 1a1 1 0 001.6 0l2.2-2.8-1-1.2-1.4-1.6-.8-1a5.8 5.8 0 00-1.4-1.2 4.3 4.3 0 002.7-1.6c.7-.9 1-1.9 1-3 0-1.6-.5-2.8-1.6-3.8a6.5 6.5 0 00-4.1-1.4H132V7zm1.2 3.2c.8 0 1.4.2 1.8.6.4.3.6.8.6 1.4 0 .6-.2 1.1-.6 1.4-.4.4-1 .6-1.8.6h-1.7v-4h1.7zM67.4 7h-9.2a1 1 0 00-1 1V27a1 1 0 001 1.1h9.1a1 1 0 001-1v-2.3c0-.3-.1-.5-.3-.7a1 1 0 00-.7-.3h-4.6v-3.6h4.6c.3 0 .5 0 .7-.2a1 1 0 00.3-.8v-2.2a1 1 0 00-.3-.8 1 1 0 00-.7-.2h-4.6v-3.6h4.6c.3 0 .5 0 .7-.3a1 1 0 00.3-.7V8a1 1 0 00-1-1.1z" fill="currentColor"/>
                </svg>
              </div>
            </StyledBox>
            
            <StyledBox className="aspect-[3/2] flex items-center justify-center p-4">
              <div className="h-7 text-muted-foreground/70 hover:text-foreground transition-colors">
                <svg className="h-full" viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 50h38.8v-6.43H50V50zm134.7-30.71L175 30 50 50H0v50h50l125 20 10 -10.7V19.29zM149.99 62.85l-24.98 -3.2V40.37l24.97 -3.22v25.7z" fill="currentColor"/>
                <path d="M600 62.5L550 87.5 362.5 100l-12.5 -12.5V12.5L362.5 0 550 12.5 600 37.5zm-70.8 -7.5l17.8 -10 -17.8 -10V55zm-16.7 -15H450V60h62.5v-20z" fill="currentColor"/>
                </svg>
              </div>
            </StyledBox>
            
            <StyledBox className="aspect-[3/2] flex items-center justify-center p-4">
              <div className="h-5 text-muted-foreground/70 hover:text-foreground transition-colors">
                <svg className="h-full" viewBox="0 0 115 25" xmlns="http://www.w3.org/2000/svg">
                  <path d="M99.5 3.7h-9.8v2h3.9v11.6h2V5.6h3.9v-2zm-32.6 8.1c0-2.2 1.4-3.7 3.3-3.7 1.9 0 3.3 1.5 3.3 3.7 0 2.2-1.4 3.7-3.3 3.7-2 0-3.3-1.5-3.3-3.7zm8.4 0c0-3.2-2.3-5.5-5-5.5-2.8 0-5 2.3-5 5.5s2.2 5.5 5 5.5c2.7 0 5-2.3 5-5.5zm42.4 0c0-2.2 1.4-3.7 3.3-3.7 1.9 0 3.3 1.5 3.3 3.7 0 2.2-1.4 3.7-3.3 3.7-2 0-3.3-1.5-3.3-3.7zm8.4 0c0-3.2-2.3-5.5-5-5.5-2.8 0-5 2.3-5 5.5s2.2 5.5 5 5.5c2.7 0 5-2.3 5-5.5zM47.8 7.5h-4.9v-2h11.6v2h-4.9v9.8h-1.8V7.5zm11-2h1.9l5.2 11.8h-2l-1.2-2.7h-6l-1.2 2.7h-2L58.8 5.6zm3 7.3l-2.1-4.8-2.1 4.8h4.2zm40.2-5.5v8h-1.7v-1.4c-.6 1-1.7 1.6-3.1 1.6 2.4 0-4.3-1.8-4.3-4.2 0-2.4 2-4.3-4.2-4.3 1.5 0 2.5.6 3.1 1.6V7.3h1.8zm-1.8 4c0-1.5-1.2-2.6-2.8-2.6-1.5 0-2.7 1.1-2.7 2.6 0 1.4 1.2 2.5 2.7 2.5 1.6 0 2.8-1 2.8-2.5zm-84 0c0-1.5-1.2-2.6-2.7-2.6-1.6 0-2.8 1.1-2.8 2.6 0 1.4 1.2 2.5 2.8 2.5 1.5 0 2.7-1 2.7-2.5zm1.8 4H19V7.3h1.7v1.4c.6-1 1.7-1.6 3.1-1.6 2.3 0 4.2 1.9 4.2 4.3 0 2.4-2 4.2-4.3 4.2-1.4 0-2.5-.6-3-1.6v1.4zm41.5-3.5v-4.4H61v-1.8h-1.5v-3h-1.8v3h-1.4v1.8h1.4v5c0 1.5 1.2 2.3 2.5 2.3.7 0 1.2-.1 1.5-.3v-1.7H60c-.6 0-1-.3-1-.9zm-29.8-1H25c.2-1.2 1.3-2 2.8-2 1.5 0 2.4.8 2.7 2h4.7c-.5-3-2.7-5-7.4-5-4.5 0-7 2.2-7 5.5 0 3.2 2.4 5.5 7 5.5 4.7 0 7-2 7.4-5h-4.7c-.3 1.2-1.2 2-2.7 2-1.6 0-2.7-.8-2.8-2zm67.5-2.3h1.8v8.3h-1.8V7.3zm-.9-3.1c0-.7.5-1.2 1.3-1.2.7 0 1.3.6 1.3 1.2 0 .7-.6 1.3-1.3 1.3-.8 0-1.3-.6-1.3-1.3zm-9.5.6h1.9L95.5 17h-3.6l-2.5-6.2L86.8 17h-3.6l6.2-12.2h1.9l-3.2 6.3 3.2 6.3 3.2-6.3-3.2-6.3z" fill="currentColor"/>
                </svg>
              </div>
            </StyledBox>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding animate-on-scroll">
        <div className="container-custom">
          <SectionHeading 
            title="How It Works"
            subtitle="Creating cloud architectures has never been easier. Just three simple steps."
            centered={true}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center transform transition-all duration-500 hover:translate-y-[-8px]">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                <div className="relative bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                  <span className="text-primary font-bold text-2xl">1</span>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3 font-outfit">Describe your needs with a prompt</h3>
              <p className="text-muted-foreground">Tell Arch AI what you need in plain language, just like you'd explain it to a colleague.</p>
            </div>
            
            <div className="text-center transform transition-all duration-500 hover:translate-y-[-8px]">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                <div className="relative bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                  <span className="text-primary font-bold text-2xl">2</span>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3 font-outfit">Arch AI instantly generates a cloud architecture</h3>
              <p className="text-muted-foreground">Watch as Arch AI creates a complete infrastructure diagram based on best practices.</p>
            </div>
            
            <div className="text-center transform transition-all duration-500 hover:translate-y-[-8px]">
              <div className="relative mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-md"></div>
                <div className="relative bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto border border-primary/30">
                  <span className="text-primary font-bold text-2xl">3</span>
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-3 font-outfit">You edit and export to code or deploy</h3>
              <p className="text-muted-foreground">Fine-tune your diagram and export directly to Terraform, CloudFormation, or other formats.</p>
            </div>
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
              <p className="text-muted-foreground">Go from initial idea to detailed cloud architecture in minutes instead of days. Accelerate your planning cycle and delivery timelines.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5 ring-1 ring-primary/30">
                <ShieldCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 font-outfit">Reduce architecture errors</h3>
              <p className="text-muted-foreground">Our AI ensures your architectures follow cloud best practices, security guidelines, and cost optimization principles automatically.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-4px]">
              <div className="bg-primary/10 p-3 rounded-lg w-fit mb-5 ring-1 ring-primary/30">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-xl mb-4 font-outfit">Collaborate with teams</h3>
              <p className="text-muted-foreground">Share, edit, and discuss cloud architectures with stakeholders. Bridge the gap between technical and non-technical team members.</p>
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
