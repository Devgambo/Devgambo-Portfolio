import { SparklesIcon } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';





export default function Projects() {
  return (
    <div id="projects" className='relative z-10 flex flex-col justify-center items-center px-4 py-20'>
      <div className='max-w-6xl mx-auto w-full'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 className='font-yesteryear text-3xl md:text-4xl lg:text-5xl font-bold mb-4' style={{
            backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}>
            | Featured Projects |
          </h2>
          <div className='flex items-center justify-center gap-2 mt-4'>
            <SparklesIcon className='w-6 h-6 md:w-8 md:h-8 text-pink-500/60 animate-pulse' />
            <p className='text-white/60 font-audiowide text-sm md:text-base'>
              Showcasing my latest work and innovations
            </p>
            <SparklesIcon className='w-6 h-6 md:w-8 md:h-8 text-purple-500/60 animate-pulse' />
          </div>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 auto-rows-fr'>
          {projects.map((project) => (
            <div key={project.id} className='w-full max-w-md mx-auto flex'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

