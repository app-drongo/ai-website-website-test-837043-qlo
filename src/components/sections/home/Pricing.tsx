'use client';

import React, { useState } from 'react';
import { Check, X, Star, Zap, Shield, Crown } from 'lucide-react';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  limitations: string[];
  popular: boolean;
  cta: string;
  icon: React.ReactNode;
}

interface PricingConfig {
  title: string;
  subtitle: string;
  billingToggle: {
    monthly: string;
    yearly: string;
    yearlyDiscount: string;
  };
  tiers: PricingTier[];
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const config: PricingConfig = {
    title: 'Choose Your Plan',
    subtitle: 'Select the perfect plan for your needs. Upgrade or downgrade at any time.',
    billingToggle: {
      monthly: 'Monthly',
      yearly: 'Yearly',
      yearlyDiscount: 'Save 20%',
    },
    tiers: [
      {
        id: 'starter',
        name: 'Starter',
        price: isYearly ? '$8' : '$10',
        period: isYearly ? '/month' : '/month',
        description: 'Perfect for individuals and small projects',
        features: [
          'Up to 5 projects',
          '10GB storage',
          'Basic support',
          'Standard templates',
          'Mobile app access',
        ],
        limitations: ['No custom domains', 'Limited integrations'],
        popular: false,
        cta: 'Get Started',
        icon: <Zap className="w-6 h-6" />,
      },
      {
        id: 'professional',
        name: 'Professional',
        price: isYearly ? '$24' : '$30',
        period: isYearly ? '/month' : '/month',
        description: 'Ideal for growing businesses and teams',
        features: [
          'Unlimited projects',
          '100GB storage',
          'Priority support',
          'Premium templates',
          'Advanced analytics',
          'Custom domains',
          'Team collaboration',
          'API access',
        ],
        limitations: [],
        popular: true,
        cta: 'Start Free Trial',
        icon: <Star className="w-6 h-6" />,
      },
      {
        id: 'enterprise',
        name: 'Enterprise',
        price: isYearly ? '$80' : '$100',
        period: isYearly ? '/month' : '/month',
        description: 'For large organizations with advanced needs',
        features: [
          'Everything in Professional',
          'Unlimited storage',
          '24/7 dedicated support',
          'Custom integrations',
          'Advanced security',
          'SLA guarantee',
          'White-label options',
          'Custom training',
        ],
        limitations: [],
        popular: false,
        cta: 'Contact Sales',
        icon: <Crown className="w-6 h-6" />,
      },
    ],
  };

  return (
    <section id="pricing" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-card border border-border rounded-full p-1 shadow-lg">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  !isYearly
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span data-editable="monthlyLabel">{config.billingToggle.monthly}</span>
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  isYearly
                    ? 'bg-primary text-primary-foreground shadow-md'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span data-editable="yearlyLabel">{config.billingToggle.yearly}</span>
                <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                  <span data-editable="yearlyDiscount">{config.billingToggle.yearlyDiscount}</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {config.tiers.map((tier, index) => (
            <div
              key={tier.id}
              className={`relative bg-card border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                tier.popular
                  ? 'border-primary ring-2 ring-primary/20 scale-105'
                  : 'border-border hover:border-primary/50'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                    tier.popular
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {tier.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  <span data-editable={`tier${index}Name`}>{tier.name}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable={`tier${index}Description`}>{tier.description}</span>
                </p>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">
                    <span data-editable={`tier${index}Price`}>{tier.price}</span>
                  </span>
                  <span className="text-muted-foreground ml-2">
                    <span data-editable={`tier${index}Period`}>{tier.period}</span>
                  </span>
                </div>
                {isYearly && <p className="text-sm text-muted-foreground mt-2">Billed annually</p>}
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">
                      <span data-editable={`tier${index}Feature${featureIndex}`}>{feature}</span>
                    </span>
                  </div>
                ))}

                {tier.limitations.map((limitation, limitIndex) => (
                  <div key={limitIndex} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-muted rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-muted-foreground" />
                    </div>
                    <span className="text-muted-foreground">
                      <span data-editable={`tier${index}Limitation${limitIndex}`}>
                        {limitation}
                      </span>
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  tier.popular
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl'
                    : 'bg-secondary text-secondary-foreground hover:bg-accent border border-border hover:border-primary/50'
                }`}
              >
                <span data-editable={`tier${index}Cta`}>{tier.cta}</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-lg">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              <span data-editable="bottomCtaTitle">30-Day Money-Back Guarantee</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              <span data-editable="bottomCtaDescription">
                Try any plan risk-free. If you're not completely satisfied, we'll refund your money
                within 30 days.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors">
                <span data-editable="bottomCtaPrimary">Start Free Trial</span>
              </button>
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-xl font-semibold hover:bg-accent border border-border transition-colors">
                <span data-editable="bottomCtaSecondary">Contact Sales</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
