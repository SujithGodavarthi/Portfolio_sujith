
import React from 'react';

const Footer = () => {
  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: 'in' },
    { name: 'GitHub', href: '#', icon: 'git' },
    { name: 'Twitter', href: '#', icon: 'tw' },
    { name: 'Dribbble', href: '#', icon: 'dr' }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                aria-label={`Navigate to ${link.name}`}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="w-10 h-10 bg-gray-800 rounded-2 flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
                aria-label={`Visit ${link.name} profile`}
              >
                <span className="text-white text-xs font-mono">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
