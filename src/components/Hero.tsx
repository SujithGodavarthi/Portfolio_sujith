
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
    <section id="hero" className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-100 rounded-full opacity-40"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-red-100 rounded-full opacity-35"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-green-100 rounded-full opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 h-screen flex items-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - QA Engineer */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <Bug className="w-6 h-6 text-white" />
              </div>
              <span className="text-blue-600 font-semibold text-lg">QA Engineer</span>
            </div>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Quality
              <br />
              <span className="text-blue-500">Assurance</span>
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-md">
              Meticulous testing and quality control to ensure robust, scalable software systems.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Selenium</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">JIRA</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">TestNG</span>
            </div>
          </div>

          {/* Right Side - Full Stack Developer */}
          <div className="text-center lg:text-right animate-slide-up">
            <div className="flex items-center justify-center lg:justify-end mb-6">
              <span className="text-green-600 font-semibold text-lg mr-4">Full Stack Developer</span>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
            </div>
            <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="text-green-500">Development</span>
              <br />
              Innovation
            </h1>
            <p className="text-gray-600 text-lg mb-6 max-w-md lg:ml-auto">
              Crafting seamless digital experiences through innovative development solutions.
            </p>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-end">
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">React.js</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      {/* Center Profile */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="w-32 h-32 lg:w-40 lg:h-40 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
              alt="Sujith G"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
            Sujith G
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <span className="text-sm font-medium mb-2">Scroll</span>
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
