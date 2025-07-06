
import React from 'react';
import { Linkedin, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/sujith-g-70b243232', 
      icon: Linkedin,
      color: 'hover:bg-blue-500'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/SujithGodavarthi', 
      icon: Github,
      color: 'hover:bg-gray-700'
    },
    { 
      name: 'Gmail', 
      href: 'mailto:gsuji018@gmail.com', 
      icon: Mail,
      color: 'hover:bg-red-500'
    }
  ];

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">S</span>
              </div>
              <span className="font-playfair font-bold text-2xl gradient-text">Sujith G</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              QA Engineer & Full Stack Developer crafting seamless digital experiences through 
              meticulous testing and innovative development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-foreground">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span className="text-sm">gsuji018@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9480112318</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 glass border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all duration-200 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-muted-foreground text-sm">
                © 2024 Sujith G. All rights reserved.
              </p>
              <p className="text-muted-foreground/70 text-xs mt-1">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
