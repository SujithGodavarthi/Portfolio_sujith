
import React from 'react';
import { Code, Bug, Database, Globe, Settings, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Manual Testing",
      icon: Bug,
      color: "from-blue-500 to-blue-600",
      skills: [
        "Functional & Non-Functional Testing",
        "Regression Testing",
        "Test Case Design & Execution",
        "Integration Testing",
        "Bug Tracking & Reporting",
        "SDLC & STLC"
      ]
    },
    {
      title: "Automation & Tools",
      icon: Settings,
      color: "from-green-500 to-green-600",
      skills: [
        "Selenium WebDriver",
        "JUnit / TestNG",
        "Postman (API Testing)",
        "SQL for Database Testing",
        "JIRA / Bugzilla",
        "Agile & DevOps"
      ]
    },
    {
      title: "Programming",
      icon: Code,
      color: "from-purple-500 to-purple-600",
      skills: [
        "Java / Core Java",
        "HTML, CSS, JavaScript",
        "React.js",
        "Node.js & Express.js",
        "MongoDB",
        "Version Control: Git/GitHub"
      ]
    }
  ];

  const techStack = [
    { name: 'Java', icon: '☕', color: 'bg-orange-100 text-orange-800' },
    { name: 'Selenium', icon: '🤖', color: 'bg-green-100 text-green-800' },
    { name: 'React', icon: '⚛️', color: 'bg-blue-100 text-blue-800' },
    { name: 'Node.js', icon: '🚀', color: 'bg-green-100 text-green-800' },
    { name: 'MongoDB', icon: '🍃', color: 'bg-green-100 text-green-800' },
    { name: 'JIRA', icon: '📋', color: 'bg-blue-100 text-blue-800' },
    { name: 'Postman', icon: '📮', color: 'bg-orange-100 text-orange-800' },
    { name: 'Git', icon: '📝', color: 'bg-gray-100 text-gray-800' },
  ];

  return (
    <section id="skills" className="py-20 bg-background particles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for quality assurance and full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="glass p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow"
              >
                <div className={`w-16 h-16 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="glass p-8 rounded-lg border border-border/50">
          <h3 className="font-playfair text-2xl font-bold gradient-text mb-6 text-center">
            Technology Stack
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-3 glass border border-border/30 rounded-full hover:border-primary/50 hover:scale-105 transition-all duration-200"
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="font-medium text-foreground">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
