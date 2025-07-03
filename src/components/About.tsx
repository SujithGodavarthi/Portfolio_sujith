
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text */}
          <div className="animate-fade-in">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              About Me
            </h2>
            <div className="space-y-6">
              <div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Detail-oriented MCA graduate with hands-on experience in manual and automation testing, 
                  test case design, and defect tracking using tools like Selenium and JIRA. Eager to contribute 
                  to innovative QA teams by ensuring robust, scalable, and compliant software systems.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Core Expertise</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Quality Assurance & Testing
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Full Stack Development
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    Test Automation & Selenium
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-black rounded-full mr-3"></div>
                    SDLC & Agile Methodologies
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
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
                  alt="Sujith G - QA Engineer & Full Stack Developer"
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
