import React from 'react';
import { Calendar, Eye, Github, Globe, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Define a type for the project data object
export interface Project {
  id: string;
  imageSrc: string;
  title: string;
  year: number;
  category: string;
  description: string;
  fullDescription?: string;
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
    <div className="backdrop-blur-md rounded-xl border border-white/20 p-3 md:p-4 w-full h-full flex flex-col shadow-2xl bg-black/20 hover:bg-black/30 transition-all duration-300 hover:border-pink-500/30 hover:shadow-pink-500/20 cursor-pointer min-h-[350px] md:min-h-[400px]">
        {/* Header with Preview Image */}
        <Link href={`/project/${project.id}`} className="block mb-3 md:mb-4 relative overflow-hidden rounded-xl group flex-shrink-0">
          <Image 
            src={project.imageSrc} 
            alt={`${project.title} Preview`} 
            width={400}
            height={200}
            className="w-full h-32 md:h-40 object-cover bg-gray-800 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Project Info */}
        <Link href={`/project/${project.id}`} className="block mb-2 md:mb-3 flex-shrink-0">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-base md:text-lg font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {project.title}
            </h2>
            <div className="flex items-center text-white/60 text-xs font-audiowide">
              <Calendar className="w-3 h-3 mr-1 text-pink-500/60" />
              <span>{project.year}</span>
            </div>
          </div>
          
          <div className="font-audiowide inline-block px-2 py-1 bg-gradient-to-r from-pink-600/20 to-purple-600/20 text-pink-300 rounded-full text-xs font-medium border border-pink-500/30 backdrop-blur-sm">
            {project.category}
          </div>
        </Link>

        {/* One-line Description */}
        <Link href={`/project/${project.id}`} className="block mb-3 md:mb-4 flex-grow min-h-[48px]">
          <p className="text-white/70 leading-relaxed text-xs md:text-sm font-audiowide" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {project.description}
          </p>
        </Link>

        {/* Links and View Details */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-center mt-auto pt-2 md:pt-3 border-t border-white/10 flex-shrink-0 gap-2 md:gap-0">
          {/* GitHub and Live Demo Links */}
          {(project.githubUrl || (project.liveUrl && project.liveUrl !== project.githubUrl)) && (
            <div className="flex items-center justify-center gap-2 md:gap-3 mb-2 md:mb-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-white/60 hover:text-white hover:bg-black/40 rounded-lg transition-all duration-300 border border-white/10 hover:border-pink-500/50 backdrop-blur-sm z-10"
                  title="View on GitHub"
                >
                  <Github className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              )}
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-purple-400 hover:text-purple-300 hover:bg-purple-600/20 rounded-lg transition-all duration-300 border border-purple-500/30 hover:border-purple-400/50 backdrop-blur-sm z-10"
                  title="Live Demo"
                >
                  <Globe className="w-3 h-3 md:w-4 md:h-4" />
                </a>
              )}
            </div>
          )}
          
          {/* View Details Button */}
          <Link 
            href={`/project/${project.id}`}
            className="flex items-center justify-center gap-2 text-pink-400 hover:text-pink-300 transition-colors font-audiowide text-xs md:text-sm group"
          >
            <Eye className="w-3 h-3 md:w-4 md:h-4" />
            <span>View Details</span>
            <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
  );
};

export default ProjectCard;