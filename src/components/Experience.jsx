import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Increased application performance by 40% through optimization',
        'Led a team of 5 developers on multiple high-impact projects',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'StartupVenture Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple web applications from concept to deployment. Collaborated with design and product teams to deliver user-centered solutions.',
      achievements: [
        'Built 3 production applications serving 100k+ users',
        'Reduced bug reports by 50% through comprehensive testing',
        'Contributed to open-source projects with 1k+ GitHub stars'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Denver, CO',
      period: '2019 - 2020',
      description: 'Specialized in creating responsive, accessible web interfaces for diverse clients. Worked closely with designers to implement pixel-perfect designs.',
      achievements: [
        'Delivered 20+ client projects on time and within budget',
        'Improved website accessibility scores by 35% on average',
        'Implemented modern CSS techniques reducing code by 30%'
      ]
    }
  ];

  const ExperienceCard = ({ experience, index }: { experience: any, index: number }) => (
    <div className="relative">
      {/* Timeline line */}
      {index !== experiences.length - 1 && (
        <div className="absolute left-4 top-16 w-0.5 h-full bg-gradient-to-b from-blue-600 to-teal-600"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-2 top-6 w-4 h-4 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full border-4 border-white shadow-lg"></div>
      
      {/* Content */}
      <div className="ml-12 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 sm:mb-0">
              {experience.title}
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-1" />
              {experience.period}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-center mb-4 text-gray-600">
            <div className="flex items-center mb-2 sm:mb-0 sm:mr-4">
              <Briefcase size={16} className="mr-2 text-blue-600" />
              <span className="font-medium">{experience.company}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={16} className="mr-2 text-teal-600" />
              <span>{experience.location}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {experience.description}
          </p>
          
          <div className="space-y-2">
            <h4 className="font-medium text-gray-900">Key Achievements:</h4>
            <ul className="space-y-1">
              {experience.achievements.map((achievement: string, achIndex: number) => (
                <li key={achIndex} className="flex items-start">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and the experiences that have shaped my career
          </p>
        </div>

        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>

        {/* Education section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Education</h3>
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <h4 className="text-lg font-semibold text-gray-900">
                Bachelor of Science in Computer Science
              </h4>
              <span className="text-sm text-gray-500">2015 - 2019</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <MapPin size={16} className="mr-2 text-teal-600" />
              <span>University of Technology</span>
            </div>
            <p className="text-gray-600">
              Graduated Magna Cum Laude with focus on Software Engineering and Web Development
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;