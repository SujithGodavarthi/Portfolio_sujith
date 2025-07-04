
import React from 'react';
import { ExternalLink, Github, Code, TestTube } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'PayToll Web Application',
      role: 'Frontend Developer and QA',
      technologies: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      description: 'Designed test scenarios to validate business logic and user interface. Executed functional, regression, and database testing using SQL queries. Automated 10+ test cases using Selenium to improve testing efficiency by 30%.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      type: 'QA & Frontend',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'GYM Exercises Web Application',
      role: 'MERN Stack Developer',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      description: 'Developed a full-stack application for fitness enthusiasts to generate personalized exercise plans. Implemented REST APIs and automated repetitive test scripts using Selenium for efficiency.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop',
      type: 'Full Stack',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Projects & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications showcasing both QA expertise and development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}>
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{project.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {project.type === 'QA & Frontend' ? (
                      <TestTube className="w-4 h-4 text-blue-500" />
                    ) : (
                      <Code className="w-4 h-4 text-green-500" />
                    )}
                    <span className="text-sm text-gray-500">
                      {project.type === 'QA & Frontend' ? 'Testing Focus' : 'Development Focus'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold text-gray-900 mb-4">
              Professional Experience
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 lg:p-8 shadow-lg">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h4 className="font-playfair text-2xl font-bold text-gray-900">
                    Web Development Internship
                  </h4>
                  <p className="text-lg text-gray-600 font-medium">Octanet Services Pvt Ltd</p>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-green-100 text-gray-700 rounded-full text-sm font-medium">
                    September 2024 - November 2024
                  </span>
                </div>
              </div>
              
              <div className="prose max-w-none">
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
      </div>
    </section>
  );
};

export default Projects;
