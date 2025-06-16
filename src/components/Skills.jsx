import React from 'react';
import { Code, Database, Server, Cloud, Terminal, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: 'Python', description: 'Core language for all development' },
        { name: 'Django', description: 'Full-featured web framework' },
        { name: 'Django REST Framework', description: 'Building RESTful APIs' },
        { name: 'PostgreSQL', description: 'Advanced database management' },
        { name: 'MySQL', description: 'Relational database management' },
      ]
    },
    {
      title: 'Frontend Development',
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'React', description: 'Component-based UI development' },
        { name: 'JavaScript', description: 'Dynamic web interactions' },
        { name: 'Tailwind CSS', description: 'Utility-first styling' },
        { name: 'HTML/CSS', description: 'Semantic markup & styling' },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Terminal className="w-6 h-6" />,
      skills: [
        { name: 'VSCode', description: 'Primary code editor' },
        { name: 'Git', description: 'Version control & collaboration' },
      ]
    }
  ];

  const SkillCard = ({ skill }) => (
    <div className="group p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all duration-300 border border-gray-600 hover:border-blue-400">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
          {skill.name}
        </h4>
        <Zap className="w-4 h-4 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {skill.description}
      </p>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build powerful applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-700"
            >
              <div className="flex items-center justify-center mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillCard key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional technologies */}
      </div>
    </section>
  );
};

export default Skills;