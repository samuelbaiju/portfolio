import React from 'react';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable Python code with best practices'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Database Design',
      description: 'Designing efficient database schemas and optimizing queries'
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: 'API Development',
      description: 'Building robust REST APIs using Django REST Framework'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Performance',
      description: 'Optimizing applications for speed and scalability'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Aspiring Full-Stack Developer | 3rd Year Computer Science Student | Exploring Python, Django, and Frontend Technologies
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed">
               I'm Samuel Baiju, a full-stack Python developer with a strong focus on building scalable web applications and RESTful APIs using Django and Django REST Framework. My journey into tech was driven by a love for logical thinking and problem-solving, and I’ve since grown passionate about building clean, efficient, and secure backend systems.
               I'm currently expanding my skill set by learning modern frontend technologies like React and JavaScript, aiming to build seamless and intuitive user experiences that complement my backend work.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
               I'm currently expanding my skill set by learning modern frontend technologies like React and JavaScript, aiming to build seamless and intuitive user experiences that complement my backend work.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Outside of coding, I'm a passionate football enthusiast. Whether it's playing on the field or following the global game, football has taught me the value of strategy, teamwork, and perseverance — qualities I carry into every project I work on.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
             <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
  Problem Solver
</span>
<span className="px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
  Open Source Contributor
</span>
<span className="px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30">
  Continuous Learner
</span>
<span className="px-4 py-2 bg-red-500/20 text-red-300 rounded-full text-sm font-medium border border-red-500/30">
  Backend Developer
</span>
<span className="px-4 py-2 bg-yellow-500/20 text-yellow-300 rounded-full text-sm font-medium border border-yellow-500/30">
  Football Enthusiast
</span>

            </div>
          </div>

          {/* Profile image placeholder with gradient */}
          <div className="flex justify-center lg:justify-end">
          <div className="relative">
          <div className="w-80 h-80 bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 rounded-2xl shadow-2xl"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 rounded-xl opacity-80"></div>
          <div className="absolute inset-0 flex items-center justify-center">
        <img
        src="/profile.jpeg" // Place your image in the public folder
        alt="Profile"
        className="w-72 h-72 object-cover rounded-xl shadow-lg"
      />
              </div>
            </div>
          </div>
        </div>




        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gray-900 rounded-xl hover:bg-gray-700 hover:shadow-lg transition-all duration-300 group border border-gray-700"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;