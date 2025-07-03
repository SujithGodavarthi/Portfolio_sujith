
import React from 'react';

const Education = () => {
  const educationData = [
    {
      year: '2021',
      title: 'B.Tech Computer Science & Engineering',
      institution: 'Technical University',
      description: 'Specialized in software engineering and data structures'
    },
    {
      year: '2023',
      title: 'UX Design Certificate',
      institution: 'Design Institute',
      description: 'Human-centered design and user research methodologies'
    },
    {
      year: '2024',
      title: 'React Masterclass',
      institution: 'Online Academy',
      description: 'Advanced React patterns and modern development practices'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Education Timeline
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical dotted line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-dotted bg-gray-300 transform md:-translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full transform md:-translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <div className="bg-white p-6 rounded-2 shadow-sm border border-gray-100">
                      <div className="text-sm font-medium text-gray-500 mb-2">{item.year}</div>
                      <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                      <div className="text-gray-600 font-medium mb-2">{item.institution}</div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
