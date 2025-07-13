import React from 'react';
import { Code, Wrench, Brain, Database } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={32} />,
      skills: ["Python", "JavaScript", "Java", "C++", "SQL"],
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "AI/ML & Data Science",
      icon: <Brain className="text-purple-600" size={32} />,
      skills: ["TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Matplotlib"],
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Development Tools",
      icon: <Wrench className="text-green-600" size={32} />,
      skills: ["Flask", "Git", "Docker", "VS Code", "Jupyter"],
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Core CS Subjects",
      icon: <Database className="text-indigo-600" size={32} />,
      skills: ["Data Structures", "Algorithms", "Database Systems", "Computer Networks", "Operating Systems", "Software Engineering"],
      color: "bg-indigo-50 border-indigo-200"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className={`p-6 rounded-xl border-2 ${category.color} hover:shadow-lg transition-shadow duration-300`}>
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-gray-800 ml-3">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span key={idx} className="bg-white px-3 py-2 rounded-lg text-gray-700 font-medium shadow-sm border">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Continuously learning and expanding my skillset with focus on cutting-edge AI technologies, 
              preparing for GATE 2026, and building practical solutions that make a positive impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
