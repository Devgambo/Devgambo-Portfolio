import React from 'react';
import { Calendar, Eye, Github, Globe } from 'lucide-react';
import Image from 'next/image';

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
    <div className="backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-md w-full shadow-2xl bg-black/20 hover:bg-black/30 transition-all duration-300 hover:border-pink-500/30 hover:shadow-pink-500/20">
      {/* Header with Preview Image */}
      <div className="mb-6 relative overflow-hidden rounded-xl group">
        <Image 
          src={project.imageSrc} 
          alt={`${project.title} Preview`} 
          width={400}
          height={192}
          className="w-full h-48 object-cover bg-gray-800 transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Project Info */}
      <div className="mb-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
          <h2 className="text-xl md:text-2xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {project.title}
          </h2>
          <div className="flex items-center text-white/60 text-sm font-audiowide">
            <Calendar className="w-4 h-4 mr-1 text-pink-500/60" />
            <span>{project.year}</span>
          </div>
        </div>
        
        <div className="font-audiowide inline-block px-3 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-pink-300 rounded-full text-xs md:text-sm font-medium border border-pink-500/30 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <p className="text-white/80 leading-relaxed text-sm md:text-base font-audiowide">
          {project.description}
        </p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-white/60 uppercase tracking-wide mb-3 font-audiowide">
          Technologies
        </h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-black/40 text-white backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-white/20 hover:border-pink-500/50 transition-colors hover:bg-black/50 font-audiowide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-white/20 gap-4">
        <div className="flex items-center text-white/60 text-sm font-audiowide">
          <Eye className="w-4 h-4 mr-1 text-pink-500/60" />
          <span>Project Details</span>
        </div>

        <div className="flex items-center space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-white/60 hover:text-white hover:bg-black/40 rounded-lg transition-all duration-300 border border-white/10 hover:border-pink-500/50 backdrop-blur-sm"
            title="View on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-purple-400 hover:text-purple-300 hover:bg-purple-600/20 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm"
            title="Live Demo"
          >
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;