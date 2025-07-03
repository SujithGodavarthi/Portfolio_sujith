
import React from 'react';

const DownloadCV = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Download my complete CV to learn more about my experience, skills, and accomplishments.
          </p>
          
          <a
            id="cv"
            href="/CV-Placeholder.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-2 hover:bg-gray-100 transition-all duration-200 hover:scale-105"
            aria-label="Download CV PDF file"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadCV;
