
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS3', icon: '🎨' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'Git', icon: '📝' },
    { name: 'Figma', icon: '🎯' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'Next.js', icon: '▲' },
    { name: 'Tailwind', icon: '💨' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="flex overflow-x-auto skills-scroll space-x-6 pb-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-2 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 animate-slide-up min-w-[140px] text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <h3 className="font-medium text-sm text-gray-800">{skill.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
