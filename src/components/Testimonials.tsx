
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Exceptional work quality and attention to detail. The project exceeded our expectations in every way.",
      client: "Sarah Johnson",
      position: "CEO, TechCorp",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b566?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Professional, creative, and delivered on time. I couldn't be happier with the final result.",
      client: "Michael Chen",
      position: "Creative Director",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      quote: "Amazing design thinking and technical execution. Highly recommend for any digital project.",
      client: "Emily Rodriguez",
      position: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
          Client Testimonials
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6">
                <div className="text-4xl text-gray-600 mb-4">"</div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
              </div>
              
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.client}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.client}</div>
                  <div className="text-sm text-gray-400">{testimonial.position}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
