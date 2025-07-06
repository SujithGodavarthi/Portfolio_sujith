
import React from 'react';
import { Download, FileText, Award, Target } from 'lucide-react';

const DownloadCV = () => {
  const highlights = [
    {
      icon: Award,
      text: "MCA Graduate with QA Expertise"
    },
    {
      icon: Target,
      text: "Full Stack Development Skills"
    },
    {
      icon: FileText,
      text: "Real-world Project Experience"
    }
  ];

  return (
    <section className="py-20 bg-background geometric-bg relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-20 w-24 h-24 border border-primary/20 rotate-45"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="font-playfair text-4xl lg:text-6xl font-bold gradient-text mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Download my comprehensive CV to explore my complete professional journey, 
              technical skills, and project accomplishments.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="flex items-center justify-center space-x-3 glass p-4 rounded-lg border border-border/30">
                  <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.text}</span>
                </div>
              );
            })}
          </div>
          
          {/* Download Button */}
          <div className="relative inline-block">
            <a
              href="/CV-Placeholder.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 futuristic-btn"
            >
              <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
              <span className="text-lg">Download CV</span>
            </a>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-primary rounded-lg blur-xl opacity-25 -z-10"></div>
          </div>
          
          <p className="text-muted-foreground text-sm mt-6">
            PDF format • Updated December 2024 • 2 pages
          </p>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
