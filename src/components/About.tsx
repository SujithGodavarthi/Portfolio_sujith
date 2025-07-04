
import React from 'react';
import { Award, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Quality First",
      description: "Detail-oriented approach to ensure robust, scalable software systems"
    },
    {
      icon: Zap,
      title: "Full Stack Skills",
      description: "End-to-end development capabilities with modern technologies"
    },
    {
      icon: Award,
      title: "MCA Graduate",
      description: "Strong foundation in computer science and application development"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Detail-oriented MCA graduate with hands-on experience in manual and automation testing, 
            test case design, and defect tracking using tools like Selenium and JIRA. Eager to contribute 
            to innovative QA teams by ensuring robust, scalable, and compliant software systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
                Core Expertise
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Quality Assurance & Testing Methodologies</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Full Stack Development with Modern Frameworks</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Test Automation with Selenium & TestNG</span>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-700">Agile Development & SDLC Methodologies</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Sujith G - Professional"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
