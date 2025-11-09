import { ExternalLink, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const experiences = [
  {
    type: 'Education',
    title: 'B.Tech in Civil Engineering',
    company: 'NITK Surathkal',
    location: 'On site',
    period: 'August 2023 - May 2027',
    description: 'I am currently pursuing my B.Tech in Civil Engineering at NITK Surathkal and I am in my third year of my degree.',
    technologies: ['Civil Engineering', 'Structural Analysis', 'GIS', 'Project Management'],
    link: 'https://www.nitk.ac.in/',
    logo: '/nitk.png',
    logoAlt: 'NITK Logo',
  },
  {
    type: 'Education',
    title: 'Minors Degree in Information Technology',
    company: 'NITK Surathkal',
    location: 'On site',
    period: 'July 2024 - May 2027',
    description: 'I am currently pursuing my Minors Degree in Information Technology at NITK Surathkal and I am in my first year of my degree.',
    technologies: ['Web Technologies', 'Programming', 'Data Structures', 'DBMS'],
    link: 'https://www.nitk.ac.in/',
    logo: '/nitk.png',
    logoAlt: 'NITK Logo',
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'onQuest',
    location: 'Remote',
    period: 'January 2025 - Present',
    description: 'I am currently working as a frontend developer at onQuest and I am responsible for developing the frontend of the platform.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    link: 'https://onquest.in/',
    logo: '/onQuest.png',
    logoAlt: 'onQuest Logo',
  }
];

export default function Experience() {
  return (
    <div id="experience" className='relative z-10 flex flex-col justify-center items-center px-4 py-12 md:py-20'>
      <div className='max-w-6xl mx-auto w-full'>
        {/* Section Header */}
        <div className='text-center mb-8 md:mb-16'>
          <h2 className='py-4 md:py-6 px-2 font-yesteryear text-2xl md:text-4xl lg:text-5xl font-bold mb-4' style={{
            backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}>
           | Experience & Education |
          </h2>
        </div>

        {/* Timeline Container */}
        <div className='relative max-w-5xl mx-auto'>
          {/* Vertical Timeline Line */}
          <div className='absolute left-4 md:left-8 lg:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-600 via-purple-600 to-pink-600'></div>

          {/* Experience Items */}
          <div className='flex flex-col gap-8 md:gap-12'>
            {experiences.map((exp, index) => (
              <div key={index} className='relative flex items-start gap-4 md:gap-8'>
                {/* Timeline Marker */}
                <div className='relative z-10 flex-shrink-0'>
                  <div className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full bg-black/40 backdrop-blur-sm border-2 border-pink-500/50 flex items-center justify-center shadow-lg'>
                    {exp.type === 'work' ? (
                      <Briefcase className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-pink-500' />
                    ) : (
                      <GraduationCap className='w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-pink-500' />
                    )}
                  </div>
                </div>

                {/* Experience Card */}
                <div className='flex-1 ml-2 md:ml-4 lg:ml-0'>
                  <div className='backdrop-blur-md rounded-xl border border-white/20 p-4 md:p-6 lg:p-8 shadow-2xl bg-black/20 hover:bg-black/30 transition-all duration-300 hover:border-pink-500/30'>
                    {/* Header */}
                    <div className='flex flex-col md:flex-row md:items-start md:justify-between mb-4 md:mb-6 gap-3 md:gap-4'>
                      <div className='flex items-start gap-3 md:gap-4'>
                        <div className='w-10 h-10 md:w-12 md:h-12 bg-black/40 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10 flex-shrink-0'>
                          <Image
                            src={exp.logo}
                            alt={exp.logoAlt}
                            width={32}
                            height={32}
                            className="object-contain w-6 h-6 md:w-8 md:h-8"
                          />
                        </div>
                        <div>
                          <h3 className='text-lg md:text-xl lg:text-2xl font-bold font-audiowide bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-1'>
                            {exp.title}
                          </h3>
                          <p className='text-white/80 font-audiowide text-xs md:text-sm lg:text-base'>{exp.company}</p>
                        </div>
                      </div>

                      <div className='text-left md:text-right'>
                        <div className='flex items-center text-white/60 text-xs md:text-sm mb-1 font-audiowide'>
                          <MapPin className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {exp.location}
                        </div>
                        <p className='text-white/80 font-audiowide text-xs md:text-sm lg:text-base'>{exp.period}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className='mb-4 md:mb-6'>
                      <p className='text-white/80 leading-relaxed font-audiowide text-xs md:text-sm lg:text-base'>
                        {exp.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className='mb-4 md:mb-6'>
                      <h4 className='text-xs font-semibold text-white/60 uppercase tracking-wide mb-2 md:mb-3 font-audiowide'>
                        Technologies
                      </h4>
                      <div className='flex flex-wrap gap-2'>
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-2 py-1 md:px-3 md:py-1 bg-black/40 text-white backdrop-blur-sm rounded-full text-xs md:text-sm font-medium border border-white/20 hover:border-pink-500/50 transition-colors hover:bg-black/50 font-audiowide'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link */}
                    <div className='pt-3 md:pt-4 border-t border-white/20'>
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors font-medium font-audiowide text-xs md:text-sm'
                      >
                        <span>Visit {exp.company.toLowerCase().replace(/\s+/g, '')}</span>
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

