
import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen relative flex items-center justify-center bg-white ink-blot-divider">
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="w-full">
          {/* Logo and headline - top left */}
          <div className="absolute top-24 left-4 md:left-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-black rounded-2"></div>
              <span className="font-playfair font-semibold text-2xl">Portfolio</span>
            </div>
            <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-2xl">
              Architecting
              <br />
              <span className="italic">Digital</span>
              <br />
              Experiences
            </h1>
          </div>
          
          {/* Arrow indicator - bottom right */}
          <div className="absolute bottom-16 right-4 md:right-8 animate-slide-up">
            <button
              onClick={scrollToAbout}
              className="flex flex-col items-center space-y-2 text-gray-600 hover:text-black transition-colors duration-200 group"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Scroll</span>
              <ArrowDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Ink blot pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-black ink-blot-divider"></div>
    </section>
  );
};

export default Hero;
