
import React from 'react';
import { ExternalLink, Github, Code, TestTube, Bot, Mail } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Marketing & Onboarding Automation',
      role: 'AI Automation Specialist',
      technologies: ['ChatGPT API', 'Gemini AI', 'Python', 'Webhook Integration', 'Email Automation'],
      description: 'Built fully automated AI agents for marketing automation and client onboarding form submissions. Integrated multiple AI platforms including ChatGPT and Gemini to send personalized, intelligent emails to clients with better engagement rates.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop',
      type: 'AI Automation',
      color: 'from-purple-500 to-purple-600'
    },
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Projects & Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing both QA expertise and development skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-lg overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-3 py-1 glass border border-primary/30 text-primary text-sm font-medium rounded-full">
                  {project.type}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-playfair text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{project.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 glass border border-border/30 text-muted-foreground text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {project.type === 'AI Automation' ? (
                      <Bot className="w-4 h-4 text-purple-500" />
                    ) : project.type === 'QA & Frontend' ? (
                      <TestTube className="w-4 h-4 text-primary" />
                    ) : (
                      <Code className="w-4 h-4 text-accent" />
                    )}
                    <span className="text-sm text-muted-foreground">
                      {project.type === 'AI Automation' ? 'AI Focus' : 
                       project.type === 'QA & Frontend' ? 'Testing Focus' : 'Development Focus'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <div className="glass p-8 lg:p-12 rounded-lg border border-border/50">
          <div className="text-center mb-8">
            <h3 className="font-playfair text-3xl font-bold gradient-text mb-4">
              Professional Experience
            </h3>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass p-6 lg:p-8 rounded-lg border border-border/30">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h4 className="font-playfair text-2xl font-bold text-foreground">
                    Web Development Internship
                  </h4>
                  <p className="text-lg text-muted-foreground font-medium">Octanet Services Pvt Ltd</p>
                </div>
                <div className="mt-2 lg:mt-0">
                  <span className="inline-block px-4 py-2 glass border border-primary/30 text-primary rounded-full text-sm font-medium">
                    September 2024 - November 2024
                  </span>
                </div>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
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
