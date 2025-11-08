import { SparklesIcon } from 'lucide-react';
import ProjectCard, { Project } from '@/components/ProjectCard';

const codeSyncProject: Project = {
  imageSrc: '/Projects/codeSync.png',
  title: 'CodeSync',
  year: 2025,
  category: 'Web Development',
  description: 'CODESYNC is a real-time collaborative coding environment with an integrated whiteboard and AI chat. The project focuses on enhancing developer productivity...',
  technologies: ['Next.js', 'Convex', 'Liveblocks', 'Gemini API'],
  githubUrl: 'https://github.com/Devgambo/CodeSync',
  liveUrl: 'https://code-sync-sepia.vercel.app',
};

const hackVerseProject: Project = {
  imageSrc: '/Projects/hackVerse.png',
  title: 'HackVerse',
  year: 2025,
  category: 'Web Development',
  description: 'Hackverse is a scalable and secure hackathon hosting platform that demonstrates my proficiency in full-stack development and adherence to SOLID principles...',
  technologies: ['Next.js', 'NestJs', 'PostgreSQL (Neon)', 'RTK Query'],
  githubUrl: 'https://github.com/adithya-adee/hackverse',
  liveUrl: 'https://hackverse-sandy.vercel.app',
};





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
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 justify-items-center'>
          <div className='w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]'>
            <ProjectCard project={codeSyncProject} />
          </div>
          <div className='w-full max-w-md transform transition-all duration-300 hover:scale-[1.02]'>
            <ProjectCard project={hackVerseProject} />
          </div>
        </div>
      </div>
    </div>
  );
}

