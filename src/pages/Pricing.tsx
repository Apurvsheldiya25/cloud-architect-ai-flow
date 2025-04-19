
import React from 'react';
import Layout from '@/components/layout/Layout';
import SectionHeading from '@/components/common/SectionHeading';
import PricingCard from '@/components/common/PricingCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing = () => {
  return (
    <Layout>
      {/* Intro Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom text-center">
          <h1 className="heading-xl mb-6">Plans that scale with your infrastructure.</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for you and your team.
          </p>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="pb-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard 
              title="Free"
              price="$0"
              description="Perfect for trying out Arch AI or for occasional personal use."
              features={[
                { included: true, text: "1 Project" },
                { included: true, text: "Basic AI Diagram Generation" },
                { included: true, text: "Manual Export" },
                { included: true, text: "Community Support" },
                { included: false, text: "Team Collaboration" },
                { included: false, text: "IaC Export" },
                { included: false, text: "Priority Support" }
              ]}
              buttonText="Get Started"
              buttonLink="/signup"
            />
            
            <PricingCard 
              title="Pro"
              price="$12"
              description="For professional developers, architects, and small teams."
              features={[
                { included: true, text: "Unlimited Projects" },
                { included: true, text: "Full AI Diagram Generator" },
                { included: true, text: "IaC Export (Terraform & CloudFormation)" },
                { included: true, text: "Version History" },
                { included: true, text: "Email Support" },
                { included: false, text: "Team Collaboration" },
                { included: false, text: "Usage Analytics" }
              ]}
              buttonText="Go Pro"
              buttonLink="/signup?plan=pro"
              highlighted={true}
            />
            
            <PricingCard 
              title="Team"
              price="$29"
              description="For teams that need to collaborate and manage cloud infrastructure together."
              features={[
                { included: true, text: "Everything in Pro" },
                { included: true, text: "Team Collaboration" },
                { included: true, text: "Usage Analytics" },
                { included: true, text: "Custom Templates" },
                { included: true, text: "Private Sharing" },
                { included: true, text: "Priority Support" },
                { included: true, text: "Admin Controls" }
              ]}
              buttonText="Team Trial"
              buttonLink="/signup?plan=team"
            />
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <SectionHeading 
            title="Feature Breakdown"
            subtitle="Compare features across our different plans."
            centered={true}
          />
          
          <div className="overflow-x-auto mt-8 max-w-6xl mx-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-4 border-b border-border">Feature</th>
                  <th className="p-4 border-b border-border">Free</th>
                  <th className="p-4 border-b border-border">Pro</th>
                  <th className="p-4 border-b border-border">Team</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4} className="p-4 border-b border-border font-semibold bg-muted/40">Diagram Creation</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Projects</td>
                  <td className="p-4 border-b border-border text-center">1</td>
                  <td className="p-4 border-b border-border text-center">Unlimited</td>
                  <td className="p-4 border-b border-border text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">AI Generations / Month</td>
                  <td className="p-4 border-b border-border text-center">5</td>
                  <td className="p-4 border-b border-border text-center">100</td>
                  <td className="p-4 border-b border-border text-center">500</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">AI Assistant</td>
                  <td className="p-4 border-b border-border text-center">Basic</td>
                  <td className="p-4 border-b border-border text-center">Advanced</td>
                  <td className="p-4 border-b border-border text-center">Advanced</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Max Nodes</td>
                  <td className="p-4 border-b border-border text-center">25</td>
                  <td className="p-4 border-b border-border text-center">Unlimited</td>
                  <td className="p-4 border-b border-border text-center">Unlimited</td>
                </tr>
                <tr>
                  <td colSpan={4} className="p-4 border-b border-border font-semibold bg-muted/40">Export Options</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Image Export</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Terraform</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">CloudFormation</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Bicep/ARM (Azure)</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">✓</td>
                </tr>
                <tr>
                  <td colSpan={4} className="p-4 border-b border-border font-semibold bg-muted/40">Collaboration</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Sharing</td>
                  <td className="p-4 border-b border-border text-center">View Only</td>
                  <td className="p-4 border-b border-border text-center">View Only</td>
                  <td className="p-4 border-b border-border text-center">Edit + View</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Team Members</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">Up to 10</td>
                </tr>
                <tr>
                  <td className="text-left p-4 border-b border-border">Version History</td>
                  <td className="p-4 border-b border-border text-center">-</td>
                  <td className="p-4 border-b border-border text-center">30 days</td>
                  <td className="p-4 border-b border-border text-center">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <SectionHeading 
            title="Frequently Asked Questions"
            subtitle="Find answers to common questions about Arch AI's plans and features."
            centered={true}
          />
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What happens if I exceed my limit?</AccordionTrigger>
                <AccordionContent>
                  You'll receive a notification when you're approaching your plan's limits. 
                  If you exceed your AI generation limit, you can upgrade your plan at any time 
                  to continue using the AI generation features. Other features will remain available.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can cancel your subscription at any time. Your plan will remain active until 
                  the end of your current billing cycle. After that, you'll be downgraded to the Free plan.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger>Do you offer discounts for yearly subscriptions?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer a 20% discount when you choose annual billing. This option will be
                  available during the checkout process.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger>Is there a plan for larger teams or enterprises?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer custom enterprise plans for larger teams and organizations with specific needs.
                  Contact our sales team at sales@archai.app to discuss your requirements.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-5">
                <AccordionTrigger>Can I switch between plans?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately,
                  while downgrades will be applied at the end of your current billing cycle.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom text-center">
          <h2 className="heading-lg mb-6">Get started free – no credit card required</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Try Arch AI today and see how it can transform your cloud architecture workflow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/signup" className="btn-primary">Start Building for Free</a>
            <a href="/contact" className="btn-outline">Contact Sales</a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
