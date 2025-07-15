
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  isScrolled: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection, isScrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50 py-3' : 'bg-background/80 backdrop-blur-sm py-6'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center">
              <span className="text-primary font-bold text-lg">S</span>
            </div>
            <span className="font-playfair font-bold text-xl text-foreground">Sujith G</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-primary/10 ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/20' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden w-10 h-10 bg-background/90 border border-border/50 rounded-lg flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-200 z-[101] backdrop-blur-sm"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-foreground" />
            ) : (
              <Menu className="w-5 h-5 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-2xl z-[102] px-4 py-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeSection === item.id 
                      ? 'bg-primary/20 text-primary border border-primary/30' 
                      : 'text-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
