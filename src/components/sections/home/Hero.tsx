'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Play, Star } from 'lucide-react';

interface HeroConfig {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  primaryCtaHref: string;
  secondaryCtaHref: string;
  backgroundImage: string;
  rating: string;
  reviewCount: string;
  features: string[];
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const config: HeroConfig = {
    title: 'Build the Future Dark Tech',
    subtitle: 'Revolutionary Platform',
    description:
      'Experience the next generation of technology with our cutting-edge platform. Built for developers, designed for the future.',
    primaryCta: 'Start Building',
    secondaryCta: 'Watch Demo',
    primaryCtaHref: '#pricing',
    secondaryCtaHref: '#demo',
    backgroundImage:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    rating: '4.9',
    reviewCount: '2,847',
    features: ['AI-Powered', 'Real-time Analytics', 'Enterprise Ready'],
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${config.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      <div
        className="fixed w-96 h-96 pointer-events-none z-20 opacity-30"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(var(--primary), 0.1) 0%, transparent 70%)',
          transition: 'all 0.1s ease-out',
        }}
      />

      {/* Main Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border mb-8">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-sm text-muted-foreground">
              <span data-editable="rating">{config.rating}</span> rating from{' '}
              <span data-editable="reviewCount">{config.reviewCount}</span> reviews
            </span>
          </div>

          {/* Subtitle */}
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
              <span data-editable="subtitle">{config.subtitle}</span>
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span
              data-editable="title"
              className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent animate-pulse"
            >
              {config.title}
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span data-editable="description">{config.description}</span>
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {config.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50"
              >
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span
                  className="text-sm text-foreground font-medium"
                  data-editable={`feature${index}`}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={() => handleScroll(config.primaryCtaHref)}
              data-editable-href="primaryCtaHref"
              data-href={config.primaryCtaHref}
              className="group relative px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 min-w-[200px]"
            >
              <span className="relative z-10" data-editable="primaryCta">
                {config.primaryCta}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={() => handleScroll(config.secondaryCtaHref)}
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
              className="group flex items-center gap-3 px-8 py-4 bg-card/50 backdrop-blur-sm text-foreground rounded-lg font-semibold text-lg border border-border transition-all duration-300 hover:bg-card hover:scale-105 hover:shadow-lg min-w-[200px]"
            >
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span data-editable="secondaryCta">{config.secondaryCta}</span>
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto" />
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background/50 to-transparent z-20" />
    </section>
  );
}
