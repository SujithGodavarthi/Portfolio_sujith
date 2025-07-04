
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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
      const response = await fetch('https://suji018.app.n8n.cloud/webhook-test/2add45d3-0a1c-41cc-ac78-c3efe74e6075', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: '', email: '', message: '' });
        alert('Thank you for your message! I\'ll get back to you soon.');
      } else {
        alert('There was an error sending your message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('There was an error sending your message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can contribute to your team's success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-green-500 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
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
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        <div className="text-gray-600">{item.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8">
              <h3 className="font-playfair text-xl font-bold text-gray-900 mb-4">
                Ready to Collaborate?
              </h3>
              <p className="text-gray-600 mb-6">
                I'm always excited to work on challenging projects and contribute to innovative teams. 
                Let's discuss how my QA expertise and full-stack development skills can benefit your organization.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
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
