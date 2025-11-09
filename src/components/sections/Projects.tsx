'use client';

import { useState } from 'react';
import { SparklesIcon, ChevronDown, ChevronUp } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';





export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <div id="projects" className='relative z-10 flex flex-col justify-center items-center px-4 py-12 md:py-20'>
      <div className='max-w-6xl mx-auto w-full'>
        {/* Section Header */}
        <div className='text-center mb-8 md:mb-16'>
          <h2 className='py-4 md:py-6 px-2 font-yesteryear text-2xl md:text-4xl lg:text-5xl font-bold mb-4' style={{
            backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}>
            | Featured Projects |
          </h2>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <SparklesIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-pink-500/60 animate-pulse' />
            <p className='text-white/60 font-audiowide text-xs md:text-sm lg:text-base'>
              Showcasing my latest work and innovations
            </p>
            <SparklesIcon className='w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 text-purple-500/60 animate-pulse' />
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 auto-rows-fr'>
          {displayedProjects.map((project) => (
            <div key={project.id} className='w-full max-w-md mx-auto flex'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreProjects && (
          <div className='flex justify-center mt-8 md:mt-12'>
            <button
              onClick={() => setShowAll(!showAll)}
              className='flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 font-audiowide text-xs md:text-sm lg:text-base bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 text-pink-300 hover:text-pink-200 rounded-lg border border-pink-500/30 hover:border-pink-500/50 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-pink-500/20'
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className='w-3 h-3 md:w-4 md:h-4' />
                </>
              ) : (
                <>
                  <span>Show More</span>
                  <ChevronDown className='w-3 h-3 md:w-4 md:h-4' />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

