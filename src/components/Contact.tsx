
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Formspree endpoint
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            Get In Touch
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-slide-up">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                    aria-label="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200"
                    aria-label="Enter your email address"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all duration-200 resize-none"
                    aria-label="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-2 font-semibold hover:bg-gray-800 transition-all duration-200 hover:scale-105"
                  aria-label="Send message"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="animate-slide-up lg:pl-8">
              <div className="space-y-8">
                <div>
                  <h3 className="font-playfair text-2xl font-semibold mb-4">Let's Connect</h3>
                  <p className="text-gray-600 leading-relaxed">
                    I'm always interested in new opportunities and exciting projects. 
                    Whether you have a question or just want to say hello, I'd love to hear from you.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-black rounded-2 flex items-center justify-center">
                      <span className="text-white text-sm">@</span>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-gray-600">sujithg@example.com</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-black rounded-2 flex items-center justify-center">
                      <span className="text-white text-sm">in</span>
                    </div>
                    <div>
                      <div className="font-medium">LinkedIn</div>
                      <div className="text-gray-600">/in/sujith-g</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
