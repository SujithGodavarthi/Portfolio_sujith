
import React from 'react';
import { ArrowDown, Code, Bug } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden bg-background geometric-bg particles">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-1/4 w-64 h-64 border border-primary/30 rotate-45"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 border border-accent/20 rotate-12"></div>
        <div className="absolute top-1/2 right-20 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-20 w-40 h-40 bg-accent/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-10 pt-24 pb-12">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in">
            <h1 className="font-playfair text-6xl lg:text-8xl font-bold gradient-text mb-6">
              The QA Trinity
            </h1>
            <h2 className="text-2xl lg:text-4xl font-semibold text-foreground mb-4">
              Powering AI Automation & Quality
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground">
              AI Agents | Automation | QA Engineering
            </p>
          </div>

          {/* Professional Description */}
          <div className="mb-12 animate-slide-up">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
              Sujith G – AI Automation Specialist & QA Engineer
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Building intelligent automation solutions with AI-powered agents for marketing, onboarding, and quality assurance.
            </p>
          </div>

          {/* Profile Image with Geometric Frame */}
          <div className="mb-12 relative">
            <div className="relative inline-block">
              <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl shadow-primary/25">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
                  alt="Sujith G"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Geometric decorations around profile */}
              <div className="absolute -top-4 -right-4 w-8 h-8 border-2 border-primary rotate-45"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-2 border-accent rotate-12"></div>
            </div>
          </div>

          {/* Skills Tags */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <span className="px-6 py-3 glass border border-primary/30 text-primary font-medium rounded-lg futuristic-btn">
              <Bug className="w-4 h-4 inline mr-2" />
              Quality Assurance
            </span>
            <span className="px-6 py-3 glass border border-accent/30 text-accent font-medium rounded-lg futuristic-btn">
              <Code className="w-4 h-4 inline mr-2" />
              AI Agent Development
            </span>
          </div>

          {/* Download CV Button */}
          <div className="mb-20">
            <a
              href="/CV-Placeholder.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-bold text-base rounded-xl hover:from-primary/90 hover:to-accent/90 transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-primary/30 relative overflow-hidden group backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ArrowDown className="w-5 h-5 mr-3 relative z-10" />
              <span className="relative z-10">Download CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium mb-2">Explore</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
