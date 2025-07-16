
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [webhookResponse, setWebhookResponse] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gsuji018@gmail.com',
      href: 'mailto:gsuji018@gmail.com',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9480112318',
      href: 'tel:+919480112318',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sujith-g-70b243232',
      href: 'https://www.linkedin.com/in/sujith-g-70b243232',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'SujithGodavarthi',
      href: 'https://github.com/SujithGodavarthi',
      color: 'from-gray-600 to-gray-700'
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('http://localhost:5678/webhook-test/e2f8f241-7e20-4a7a-9ccb-b1c705f66baa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify(formData),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (response.ok) {
        const responseText = await response.text();
        console.log('Response text:', responseText);
        
        let responseData;
        let outputMessage = '';
        
        try {
          if (responseText.trim()) {
            // Try to parse as JSON if there's content
            responseData = JSON.parse(responseText);
            // Handle nested response structure from n8n.io
            outputMessage = responseData.response?.generations?.[0]?.text || 
                          responseData.output || 
                          responseData.text || 
                          responseText;
          } else {
            // Handle empty response with default message
            outputMessage = "Thank you for reaching out! Your message has been received and I'll get back to you soon.";
          }
        } catch (parseError) {
          // If it's not JSON, use the text directly or default message
          outputMessage = responseText.trim() || "Thank you for reaching out! Your message has been received and I'll get back to you soon.";
        }
        
        setWebhookResponse(outputMessage);
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! I\'ll get back to you soon.');
      } else {
        console.error('Response not ok:', response.status, response.statusText);
        alert(`Error: ${response.status} - ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert(`Network error: ${error.message}. Please check if the webhook URL is accessible.`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-background particles">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-6xl font-bold gradient-text mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-lg border border-border/50">
            <h3 className="font-playfair text-2xl font-bold gradient-text mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border border-border/50 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-transparent text-foreground"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass border border-border/50 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 bg-transparent text-foreground"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass border border-border/50 rounded-lg focus:border-primary focus:outline-none transition-colors duration-200 resize-none bg-transparent text-foreground"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-4 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 futuristic-btn"
              >
                <Send className="w-5 h-5" />
                <span>Offer Me</span>
              </button>
            </form>
            
            {webhookResponse && (
              <div className="mt-6 p-4 glass border border-border/50 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Here is my Quick response</h4>
                <div className="text-muted-foreground whitespace-pre-wrap">{webhookResponse}</div>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-lg border border-border/50">
              <h3 className="font-playfair text-2xl font-bold gradient-text mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="flex items-center space-x-4 p-4 rounded-lg hover:bg-secondary/20 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 bg-primary/20 border border-primary/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground">{item.label}</div>
                        <div className="text-muted-foreground">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="glass p-8 rounded-lg border border-border/50">
              <h3 className="font-playfair text-xl font-bold gradient-text mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on challenging projects and contribute to innovative teams. 
                Let's discuss how my QA expertise and full-stack development skills can benefit your organization.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Available for remote and hybrid opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
