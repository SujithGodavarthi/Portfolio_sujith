
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'PayToll Web Application',
      role: 'Frontend Developer and QA',
      technologies: 'HTML, CSS, JavaScript, MySQL',
      summary: 'Designed test scenarios to validate business logic and user interface. Executed functional, regression, and database testing using SQL queries. Automated 10+ test cases using Selenium to improve testing efficiency by 30%.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=320&h=220&fit=crop'
    },
    {
      title: 'GYM Exercises Web Application',
      role: 'MERN Stack Developer',
      technologies: 'MongoDB, Express.js, React.js, Node.js, REST APIs',
      summary: 'Developed a full-stack application for fitness enthusiasts to generate personalized exercise plans. Implemented REST APIs and automated repetitive test scripts using Selenium for efficiency.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=320&h=220&fit=crop'
    },
    {
      title: 'Web Development Internship',
      role: 'QA & Frontend Developer',
      technologies: 'HTML, CSS, JavaScript, Material-UI, Git',
      summary: 'Developed and optimized web applications at Octanet Services Pvt Ltd. Conducted manual and automated testing for cross-browser compatibility and improved front-end functionalities.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=320&h=220&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Projects & Experience
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
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                <div className="text-sm text-gray-500 mb-2">{project.role}</div>
                <div className="text-xs text-gray-400 mb-3">{project.technologies}</div>
                <p className="text-sm text-gray-600 line-clamp-3">{project.summary}</p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{project.title}</h3>
                  <div className="text-sm text-gray-200 mb-2">{project.role}</div>
                  <div className="text-xs text-gray-300 mb-3">{project.technologies}</div>
                  <p className="text-sm text-gray-200">{project.summary}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Internship Section */}
        <div className="mt-16">
          <h3 className="font-playfair text-3xl font-bold text-center mb-8">Professional Experience</h3>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2 border border-gray-100">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h4 className="font-playfair text-2xl font-semibold">Web Development Internship</h4>
                <span className="text-gray-500 text-sm">September 2024 - November 2024</span>
              </div>
              <div className="text-gray-600 font-medium mb-4">Octanet Services Pvt Ltd.</div>
              <p className="text-gray-600 leading-relaxed">
                Developed and optimized web applications using HTML, CSS, JavaScript. Assisted in designing 
                and implementing responsive user interfaces using Material-UI. Conducted manual and automated 
                testing of web applications to ensure cross-browser compatibility. Gained hands-on experience 
                with version control systems like Git and GitHub. Worked on API integration and improved 
                front-end functionalities based on user feedback.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
