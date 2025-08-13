'use client'

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
// import TextPressure from '@/components/ui/TextPressure';
import { ChevronDown, ExternalLink, Link, Mail, MapPin, PenLine, SparklesIcon } from 'lucide-react';
import Image from 'next/image';
import Aurora from '../components/ui/Arora';
import DarkVeil from '@/components/ui/DarkVeil';
import ProjectCard, { Project } from '@/components/ProjectCard';
import LetsConnect from '@/components/LetsConnect';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <Loading />
      </div>
    );
  }

  // The 'Project' interface must be imported or defined in the same file
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



  const socialLinks = [
    { icon: "/githubIcon.svg", href: "https://Github.com/Devgambo", label: "GitHub" },
    { icon: "linkedinIcon.svg", href: "https://www.linkedin.com/in/devgambo/", label: "LinkedIn" },
    { icon: "/X.png", href: "https://x.com/Priyyanshuu", label: "X" },
    { icon: "/instagram-logo-svgrepo-com.svg", href: "https://www.instagram.com/priyyyansshu/", label: "Instagram" },
  ];

  return (
    <div className='bg-black relative'>
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        {/* Intro */}
        <div className='relative z-10 flex flex-col justify-center items-center min-h-screen px-4'>
          <div className='grid lg:grid-cols-12 md:grid-cols-8 gap-8 grid-cols-1 max-w-6xl mx-auto w-full'>

            {/* Profile Image + Links */}
            <div className='lg:col-span-4 md:col-span-3 flex flex-col items-center justify-center space-y-6'>
              <div className='group'>
                <div className='w-64 h-64 rounded-full overflow-hidden border-2 border-primary shadow-[0_0_30px_10px_rgba(1,1,1,0.5)] transition-all duration-500 group-hover:shadow-primary/40 group-hover:border-primary-light relative'>
                  <Image
                    width={256}
                    height={256}
                    src="/profile.jpg"
                    alt="Priyanshu Kumar Rai"
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                </div>
              </div>

              {/* Social Links */}
              <div className='flex space-x-4'>
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className='p-3 rounded-full bg-background/80 border border-border text-copy hover:text-primary hover:bg-primary/50 hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20'
                    aria-label={link.label}
                  >
                    <Image
                      width={20}
                      height={20}
                      src={link.icon}
                      className='w-5 h-5'
                      alt=""
                    />
                  </a>
                ))}
                <a
                  href="mailto:priyanshukrai626@gmail.com" aria-label="Email Priyanshu"
                  className='p-3 rounded-full bg-background/80 border border-border text-copy hover:text-primary hover:bg-primary/50 hover:border-primary transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-primary/20'
                >
                  <Mail className='w-5 h-5' />
                </a>
              </div>
            </div>

            <div className='hidden md:flex lg:col-span-1 md:col-span-1 justify-center items-center'>
              <div className='w-px h-96 bg-gradient-to-b from-transparent via-white/70 to-transparent'></div>
            </div>

            {/* About Section */}
            <div className='lg:col-span-7 md:col-span-4 flex flex-col justify-center space-y-6'>
              <div className='bg-background/60 backdrop-blur-md p-8 rounded-3xl border border-border/50 shadow-2xl hover:shadow-primary/10 transition-all duration-500'>
                <div className='space-y-6'>
                  <div>
                    <h1 className='font-tektur text-3xl md:text-4xl lg:text-5xl font-bold bg-primary-content bg-clip-text text-transparent leading-tight'>
                      PRIYANSHU KUMAR RAI
                    </h1>
                    <h2 className='mt-2 font-noto text-xl md:text-2xl text-black/50'>
                      Full Stack Web Developer | AI Enthusiast
                    </h2>
                    <h3 className=' flex gap-2 mt-1 font-tektur text-xs md:text-xl text-black/40'>
                      <MapPin /> <span className='f'>NITK, Manglore, karnataka</span>
                    </h3>
                  </div>

                                      <p className='font-noto text-lg md:text-xl text-copy-light leading-relaxed'>
                      I&apos;m a passionate and curious third-year Civil Engineering student with a growing love for full stack development and design. While my roots lie in structures and blueprints, my true excitement comes from building end-to-end digital experiences that solve real-world problems. I&apos;m currently diving deep into the world of LLMs and Generative AI.
                    </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Down Indicator */}
          <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 text-copy-lighter'>
            <span className='text-sm font-medium'>Scroll Down</span>
            <div className='animate-bounce'>
              <ChevronDown className='w-6 h-6 text-primary' />
            </div>
          </div>
        </div>
      </div>

      <div className='mt-2' style={{ width: '100%', height: '300px', position: 'absolute' }}>
        <DarkVeil />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120px',
            background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)', // Safari
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Experience */}
      <div className='relative z-10 flex flex-col justify-center items-center px-4 py-20'>
        <div className='max-w-6xl mx-auto w-full'>
          {/* Section Header */}

          <div className='text-center mb-16'>
            <h2 className='flex items-center gap-2 font-tektur text-3xl md:text-4xl lg:text-5xl font-bold bg-black mb-4 ' style={{
              backgroundImage: 'linear-gradient(to left, white, gray)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}>
              <PenLine className='font-bold size-10 text-white/60' /> EXPERIENCE
            </h2>
          </div>

          {/* Experience Items */}
          <div className='flex flex-col gap-10 top-10'>
            <div>
              <div className="backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-4xl mx-auto shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10">
                      <Image
                        src="/onQuest.png"
                        alt="onQuest Logo"
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Frontend Developer</h2>
                      <p className="text-white/70 font-medium">onQuest</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-white/60 text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      Remote
                    </div>
                    <p className="text-white font-medium">Jan 2025 - Present</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Developing the frontend with a team for a travel suggestion platform. The platform allows users to input their budget and desired location to receive personalized travel plans. Contributing to an actively developing product, gaining experience in the full software development lifecycle.
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-3">Technologies I work on</h3>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/20 text-white backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-colors hover:bg-black/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="https://onquest.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    <span>Visit onquest.in</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="backdrop-blur-md rounded-xl border border-white/20 p-6 max-w-4xl mx-auto shadow-2xl">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-black/20 rounded-lg flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10">
                      <Image
                        src="/nrl.png"
                        alt="nrl Logo"
                        width={32} // w-8 in Tailwind = 32px
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-white">Web Lead</h2>
                      <p className="text-white/70 font-medium">NITK Rocket League</p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-white/60 text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      On site
                    </div>
                    <p className="text-white font-medium">April 2025 - Present</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-white/80 leading-relaxed">
                    Developed and deployed the official website for NITK Rocket League using React, Tailwind CSS, and Shadcn UI, hosted on Vercel. Created a platform to showcase the clubs projects and achievements, enhancing its online presence.
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wide mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Tailwind CSS", "Shadcn UI", "Vercel"].map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-black/20 text-white backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:border-white/40 transition-colors hover:bg-black/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link */}
                <div className="pt-4 border-t border-white/20">
                  <a
                    href="https://nrl-seven.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-300 hover:text-blue-200 transition-colors font-medium"
                  >
                    <span>Visit rocketleague.nitk.ac.in </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className='mt-2' style={{ width: '100%', height: '300px', position: 'absolute' }}>
        <DarkVeil />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120px', // adjust as needed
            background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)', // Safari
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Projects */}
      <div className='relative z-10 w-full flex-col justify-center items-center px-4 py-20'>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='text-center mb-16'>
            <h2 className='flex items-center gap-2 font-tektur text-3xl md:text-4xl lg:text-5xl font-bold bg-black mb-4 ' style={{
              backgroundImage: 'linear-gradient(to left, white, gray)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}>
              <SparklesIcon className='font-bold size-10 text-white/60' />
              Featured Projects
            </h2>
          </div>
        </div>

        <div className='flex justify-center gap-20 mx-auto'>
          {/* List of all the projects */}
          <div>
            <ProjectCard project={codeSyncProject} />
          </div>
          <div>
            <ProjectCard project={hackVerseProject} />
          </div>
        </div>
        {/*         
        <div className=' mt-10 flex justify-center gap-20 mx-auto'>
          <div>
            <ProjectCard project={codeSyncProject} />
          </div>
          <div>
            <ProjectCard project={hackVerseProject} />
          </div>
        </div> */}

      </div>


      {/* Tech Stack */}
      {/* <div className='relative z-10 w-full h-screen flex flex-col items-center justify-center'>
      </div> */}


      <div className='mt-2' style={{ width: '100%', height: '300px', position: 'absolute' }}>
        <DarkVeil />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '120px', // adjust as needed
            background: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))',
            backdropFilter: 'blur(5px)',
            WebkitBackdropFilter: 'blur(5px)', // Safari
            pointerEvents: 'none',
          }}
        />
      </div>
      {/* Contact Me */}
      <div className='relative z-10 w-full flex-col justify-center items-center px-4 py-20'>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='text-center mb-16'>
            <h2 className='flex items-center gap-2 font-tektur text-3xl md:text-4xl lg:text-5xl font-bold bg-black mb-4 ' style={{
              backgroundImage: 'linear-gradient(to left, white, gray)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}>
              <Link className='font-bold size-10 text-white/60' />
              Let&apos;s Connect
            </h2>
          </div>
        </div>

        <div>
          <LetsConnect />
        </div>
      </div>
      {/* 
      <TextPressure
      text="Devgambo"
      flex={true}
      alpha={false}
      stroke={false}
      width={true}
      weight={true}
      italic={true}
      textColor="#ffffff"
      strokeColor="#ff0000"
      minFontSize={100}
    /> */}

    </div>
  );
}





