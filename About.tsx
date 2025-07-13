import React from 'react';
import { GraduationCap, Target, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate Computer Science student with a deep interest in Artificial Intelligence and Machine Learning. 
                My journey in technology is driven by the desire to create solutions that make a meaningful impact on society.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Currently, I'm focused on developing AI-powered applications that bridge communication gaps, with my flagship 
                project being Unisign - an AI-based sign language translator that helps break down barriers for the deaf and 
                hard-of-hearing community.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-lg">
                <GraduationCap className="text-blue-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                  <p className="text-gray-600">Computer Science Student pursuing excellence in AI/ML and software development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-indigo-50 rounded-lg">
                <Target className="text-indigo-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Current Goal</h3>
                  <p className="text-gray-600">Preparing for GATE 2026 while building innovative AI solutions</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-lg">
                <BookOpen className="text-purple-600 mt-1" size={24} />
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Focus Areas</h3>
                  <p className="text-gray-600">Machine Learning, Computer Vision, Natural Language Processing, and Accessibility Technology</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
