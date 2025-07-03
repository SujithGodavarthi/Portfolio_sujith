
import React from 'react';

const Skills = () => {
  const skills = [
    { name: 'Manual Testing', icon: '🔍' },
    { name: 'Selenium', icon: '🤖' },
    { name: 'Java', icon: '☕' },
    { name: 'JIRA', icon: '📋' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'JavaScript', icon: '⚡' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🚀' },
    { name: 'Git/GitHub', icon: '📝' },
    { name: 'Postman', icon: '📮' },
    { name: 'TestNG', icon: '🧪' },
    { name: 'MongoDB', icon: '🍃' }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
          Skills & Technologies
        </h2>
        
        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl font-semibold mb-4">Manual Testing</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Functional & Non-Functional Testing</li>
                <li>• Regression Testing</li>
                <li>• Test Case Design & Execution</li>
                <li>• Integration Testing</li>
                <li>• Bug Tracking & Reporting</li>
                <li>• SDLC & STLC</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl font-semibold mb-4">Automation & Tools</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Selenium WebDriver</li>
                <li>• JUnit / TestNG</li>
                <li>• Postman (API Testing)</li>
                <li>• SQL for Database Testing</li>
                <li>• JIRA / Bugzilla</li>
                <li>• Agile & DevOps</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2 shadow-sm border border-gray-100">
              <h3 className="font-playfair text-xl font-semibold mb-4">Programming</h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Java / Core Java</li>
                <li>• HTML, CSS, JavaScript</li>
                <li>• React.js</li>
                <li>• Node.js & Express.js</li>
                <li>• MongoDB</li>
                <li>• Version Control: Git/GitHub</li>
              </ul>
            </div>
          </div>
          
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
