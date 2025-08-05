import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
  {
    title: 'Solo Sparks - Self-Discovery Web App',
    description:
      'A full-stack self-discovery platform developed using React.js and Django REST Framework. Features include personalized quests, multimedia reflections, gamified rewards, and secure JWT authentication.',
    image: 'https://images.pexels.com/photos/1181356/pexels-photo-1181356.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React.js', 'Django REST', 'PostgreSQL', 'JWT', 'Cloudinary'],
    github: 'https://github.com/samuelbaiju/solo-sparks-1', // Replace with actual Solo Sparks repo if available
    live: 'https://example.com', // Optional: Replace with actual live URL
    featured: true
  },
  {
    title: 'Billify – Canteen Management Website',
    description:
      'A complete canteen website that handles order management and billing, powered by Django and MySQL. It offers a responsive design and interactive UI using Tailwind CSS and JavaScript for an enhanced user experience.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Django', 'MySQL', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/samuelbaiju/BILLIFY', // Replace with actual link
    live: 'https://example.com',
    featured: true
  },
  {
    title: 'CEC-Bot – College Chatbot',
    description:
      'An intelligent chatbot integrated into the official college website using Dialogflow for NLP. Handles real-time student queries with secure Django-based authentication and backend.',
    image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Django', 'Dialogflow', 'Chatbot', 'Authentication'],
    github: 'https://github.com/samuelbaiju', // Replace with actual CEC-Bot repo if available
    live: 'https://example.com',
    featured: true
  },
   {
    title: 'Binance Futures Trading Bot',
    description:
      'A Python-based bot for automated futures trading using the Binance API. Includes real-time market data handling, Django backend for trade history, Celery for task scheduling, and Docker deployment.',
    image: 'https://images.pexels.com/photos/8370774/pexels-photo-8370774.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Binance API', 'Django', 'Celery', 'Docker'],
    github: 'https://github.com/samuelbaiju/samuel-binance-bot', // Replace with actual bot repo if available
    live: 'https://example.com',
    featured: true
  }
];


  // Remove TypeScript types for JSX
  const ProjectCard = ({ project, index }) => (
    <div className={`group bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 ${
      project.featured ? 'md:col-span-2' : ''
    }`}>
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/90 rounded-full hover:bg-gray-800 transition-colors duration-200 border border-gray-600"
          >
            <Github size={16} className="text-gray-300" />
             </a>
          <a 
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-900/90 rounded-full hover:bg-gray-800 transition-colors duration-200 border border-gray-600"
          >
            <ExternalLink size={16} className="text-gray-300" />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my Python development skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/samuelbaiju?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
    );
}
export default Projects;
// This code defines a React component that displays a list of projects with their details.