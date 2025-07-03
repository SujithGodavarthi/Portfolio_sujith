
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              About & Company
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We craft digital experiences that bridge the gap between innovative technology 
                  and human-centered design. Every project is an opportunity to create meaningful 
                  connections between brands and their audiences.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Web Development & Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    User Experience Design
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Digital Strategy Consulting
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Brand Identity Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right column - Profile photo */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-2 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=500&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black rounded-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
