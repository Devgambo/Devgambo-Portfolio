import React from 'react';
import { Calendar, Eye, Github, Globe } from 'lucide-react';

// Define a type for the project data object
export interface Project {
  imageSrc: string;
  title: string;
  year: number;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

// Define the props for the component, which includes the project object
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-black-900 rounded-2xl border border-gray-700 p-6 max-w-md w-full shadow-2xl hover:border-gray-500 transition-colors duration-300">
      {/* Header with Preview Image */}
      <div className="mb-6 relative overflow-hidden rounded-xl">
        <img 
          src={project.imageSrc} 
          alt={`${project.title} Preview`} 
          className="w-full h-48 object-cover bg-gray-800"
        />
      </div>

      {/* Project Info */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-tektur font-bold text-white">{project.title}</h2>
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar className="w-4 h-4 mr-1" />
            <span>{project.year}</span>
          </div>
        </div>
        
        <div className="font-tektur font-bold inline-block px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm font-medium border border-blue-600/30">
          {project.category}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="font-thin text-gray-300 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="font-serif flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs font-medium border border-gray-600 hover:border-gray-500 transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-700">
        <button className="flex items-center text-gray-400 hover:text-gray-200 text-sm transition-colors duration-200">
          <Eye className="w-4 h-4 mr-1" />
          <span>View details</span>
        </button>

        <div className="flex items-center space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors duration-200"
            title="View on GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 text-purple-400 hover:text-purple-300 hover:bg-purple-600/10 rounded-lg transition-colors duration-200"
            title="Live Demo"
          >
            <Globe className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;