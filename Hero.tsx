import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
              Hi, I'm <span className="text-blue-600">Priyanka Late</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              AI/ML Developer & Computer Science Student passionate about creating intelligent solutions that bridge technology and accessibility
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToAbout}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Learn More About Me
              </button>
            </div>
          </div>
          
          <div className="mt-16">
            <button
              onClick={scrollToAbout}
              className="animate-bounce text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
