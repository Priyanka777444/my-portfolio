import React from 'react';
import { Brain, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Unisign - AI Sign Language Translator",
      description: "An innovative AI-powered application that translates sign language into text and speech in real-time, breaking communication barriers for the deaf and hard-of-hearing community.",
      features: [
        "Real-time sign language recognition using computer vision",
        "Text-to-speech conversion for seamless communication",
        "Support for multiple sign language dialects",
        "Mobile-responsive web interface"
      ],
      technologies: ["Python", "TensorFlow", "OpenCV", "React", "Flask", "Machine Learning"],
      icon: <Brain className="text-blue-600" size={32} />,
      status: "Featured Project",
      impact: "Empowering accessibility and communication"
    },
    {
      title: "AI Project Portfolio",
      description: "A collection of machine learning and AI projects showcasing various algorithms and real-world applications.",
      features: [
        "Data analysis and visualization",
        "Predictive modeling",
        "Classification algorithms",
        "Deep learning implementations"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Jupyter"],
      icon: <Zap className="text-indigo-600" size={32} />,
      status: "In Development",
      impact: "Exploring AI potential across domains"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Featured Projects</h2>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    {project.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                      <span className="text-sm text-blue-600 font-semibold">{project.status}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <Users size={20} className="mr-2 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-600 flex items-start">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="text-sm text-gray-500 mb-4">
                        <strong>Impact:</strong> {project.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
