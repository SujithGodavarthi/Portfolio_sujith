
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      summary: 'Modern shopping experience with seamless checkout',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=220&fit=crop'
    },
    {
      title: 'Portfolio Website',
      summary: 'Minimalist design showcase for creative professionals',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=320&h=220&fit=crop'
    },
    {
      title: 'Dashboard Analytics',
      summary: 'Real-time data visualization and insights',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=320&h=220&fit=crop'
    },
    {
      title: 'Mobile App UI',
      summary: 'Intuitive interface for travel booking platform',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=320&h=220&fit=crop'
    },
    {
      title: 'Brand Identity',
      summary: 'Complete visual identity for tech startup',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=320&h=220&fit=crop'
    },
    {
      title: 'Web Application',
      summary: 'Complex workflow management system',
      image: 'https://images.unsplash.com/photo-1466442929976-97f336a657be?w=320&h=220&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Projects Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2 overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[320/220] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-200">{project.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
