
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
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Detail-oriented MCA graduate with hands-on experience in manual and automation testing, 
              test case design, and defect tracking using tools like Selenium and JIRA. Eager to contribute 
              to innovative QA teams by ensuring robust, scalable, and compliant software systems.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center glass p-6 rounded-lg border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">2+</div>
              <div className="text-muted-foreground text-sm">Years Experience</div>
            </div>
            <div className="text-center glass p-6 rounded-lg border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">10+</div>
              <div className="text-muted-foreground text-sm">Projects Completed</div>
            </div>
            <div className="text-center glass p-6 rounded-lg border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">5+</div>
              <div className="text-muted-foreground text-sm">Technologies</div>
            </div>
            <div className="text-center glass p-6 rounded-lg border border-border/50">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">100%</div>
              <div className="text-muted-foreground text-sm">Quality Focus</div>
            </div>
          </div>

          {/* Highlights Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="glass p-8 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover-glow"
                >
                  <div className="w-16 h-16 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              );
            })}
          </div>

          {/* Core Expertise Section */}
          <div className="glass p-8 lg:p-12 rounded-2xl border border-border/50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-bold gradient-text mb-8">
                  Core Expertise
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-foreground">Quality Assurance & Testing Methodologies</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-foreground">Full Stack Development with Modern Frameworks</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-foreground">Test Automation with Selenium & TestNG</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-foreground">Agile Development & SDLC Methodologies</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square glass rounded-2xl overflow-hidden border border-border/50">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Sujith G - Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 border border-primary/30 rounded-2xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-accent/30 rotate-45"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
