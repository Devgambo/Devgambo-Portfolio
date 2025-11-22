import { ChevronDown, Code, Database, Globe, Laptop2, Brain, Box, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiJavascript, SiPython, SiExpress, SiNodedotjs, SiMongodb, SiPostgresql, SiMysql, SiCplusplus, SiRust, SiNestjs, SiSocketdotio, SiSolidity } from 'react-icons/si';
import LogoLoop from '../ui/LogoLoop';
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import Typewriter from 'typewriter-effect';

const socialLinks = [
  { icon: FaGithub, href: "https://Github.com/Devgambo", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/devgambo/", label: "LinkedIn" },
  { icon: BsTwitterX, href: "https://x.com/Priyyanshuu", label: "X" },
  { icon: FaInstagram, href: "https://www.instagram.com/priyyyansshu/", label: "Instagram" },
  { icon: CiMail, href: "mailto:devgambo.work@gmail.com", label: "Email" }
];

const stats = [
  { icon: Laptop2, value: "10+", label: "Projects Built" },
  { icon: Database, value: "10+", label: "Technologies" },
  { icon: Code, value: "5+", label: "Languages" },
  { icon: Globe, value: "2+", label: "Years of Coding" },
];

const iaminto = [
  "Full Stack Development",
  "Generative AI",
  "React Native",
  "Backend Development",
  "Exploring Web 3",
  "Seamless AI Integration"
]

const techLogos = [
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
  { node: <SiRust />, title: "Rust", href: "https://www.rust-lang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiSocketdotio />, title: "Socket.io", href: "https://socket.io" },
  { node: <SiMongodb />, title: "MongoDB", href: "https://www.mongodb.com" },
  { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <Brain className="w-12 h-12" />, title: "LangChain", href: "https://www.langchain.com" },
  { node: <Box className="w-12 h-12" />, title: "Pinecone", href: "https://www.pinecone.io" },
  { node: <SiSolidity />, title: "Solidity", href: "https://soliditylang.org" },
];

export default function Intro() {
  return (
    <div id="about" className='relative z-10 flex flex-col justify-center items-center min-h-screen px-4 py-8 md:py-0'>
      <div className='grid lg:grid-cols-12 md:grid-cols-8 gap-8 grid-cols-1 max-w-7xl mx-auto w-full'>

        {/* Left Column - Profile & Stats */}
        <div className='lg:col-span-5 md:col-span-4 flex flex-col space-y-8'>

          {/* Profile Card */}
          <div className='p-4 md:p-8 mt-4 md:mt-10'>

            {/* Profile Image with Color Filter */}
            <div className='flex flex-col items-center space-y-6'>
              <div className='group relative'>
                <div className='w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-primary/30 shadow-[0_0_40px_15px_rgba(59,130,246,0.3)] transition-all duration-700 group-hover:shadow-primary/50 group-hover:border-primary relative'>
                  <Image
                    width={256}
                    height={256}
                    src="/profile.jpg"
                    alt="Priyanshu Kumar Rai"
                    className='w-full h-full object-cover transition-all duration-700 group-hover:scale-110'
                  />
                </div>

                {/* Floating badge */}
                <div className='flex items-center gap-2 absolute -bottom-3 -right-3 bg-green-500/10 backdrop-blur-xl text-green-100 px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold border border-green-400/20 shadow-lg'>
                  <div className='w-2 h-2 bg-green-400 rounded-full animate-pulse'></div>
                  <span>Available</span>
                </div>

              </div>

              {/* Social Links */}

              <div className='relative flex space-x-3'>
                <h2 className='absolute flex left-0 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent text-xs md:text-sm font-extrabold font-audiowide'>
                  Connect with me
                </h2>
                {socialLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={index}
                      href={link.href}
                      className='mt-6 p-2 md:p-3 rounded-xl bg-black/40 border border-white/10 text-white  transition-all duration-300 hover:scale-110 shadow-lg backdrop-blur-sm'
                      aria-label={link.label}
                    >
                      <IconComponent className='w-4 h-4 md:w-5 md:h-5' />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Tech Logos Section */}
          <div className='pt-4'>
            {/* <h4 className='font-tektur text-white text-lg mb-4'>Tech I Work With</h4> */}
            <div style={{ height: '80px', position: 'relative', overflow: 'hidden' }}>
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                className='text-white'
                scaleOnHover
                fadeOut
                fadeOutColor="#000000"
                ariaLabel="Technology partners"
              />
            </div>
          </div>

          {/* show resume button */}
          <div className='flex justify-center items-center'>
            <a href="https://drive.google.com/file/d/1x5KovFjn27ubtCUgwxO3PD8aNCQEFFQQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=' border-white rounded-2xl py-2 px-4 text-white/80 hover:text-white transition-colors flex gap-2 justify-center items-center font-audiowide text-sm md:text-base font-medium'>See Resume <ExternalLink className='w-3 h-3 md:w-4 md:h-4'/> </a>
          </div>


        </div>


        {/* Right Column - About Section */}
        <div className='lg:col-span-6 md:col-span-4 flex flex-col justify-center'>
          <div className='p-4 md:p-8 rounded-3xl'>

            {/* name  */}
            <div className='flex flex-col md:flex-row gap-2 items-center md:items-center justify-center md:justify-start text-white text-xl md:text-2xl text-center font-extrabold '>
              <span className='text-3xl md:text-5xl text-white font-audiowide'>
                Hi! I&apos;m
              </span>
              <span className='text-5xl md:text-8xl px-2 md:pl-4 py-2 md:py-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent font-yesteryear'>
                Priyanshu
              </span>
            </div>


            <div className='space-y-4 md:space-y-6 mt-2'>
              {/* Main Content */}
              <div className='space-y-4 md:space-y-6'>
                <p className='text-base md:text-2xl text-white/80 leading-relaxed font-audiowide'>
                  Passionate about turning ideas into seamless digital experiences that make an impact.
                </p>

                <div className='relative mt-4 md:mt-8 flex gap-2 items-start'>
                  <div className='text-base md:text-2xl font-audiowide text-white/90 font-medium min-h-[2rem]'>
                    <Typewriter
                      options={{
                        strings: iaminto,
                        autoStart: true,
                        loop: true,
                        delay: 50,
                        deleteSpeed: 30,
                      }}
                    />
                  </div>
                </div>



                {/* Quick Stats  */}
                <div className='p-4 md:p-6'>
                  <div className='grid grid-cols-2 gap-3 md:gap-4'>
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className='flex flex-col items-center p-3 md:p-4 rounded-2xl bg-gradient-to-br from-black/2 to-black/10 border-[3px] md:border-[5px] border-white/5 hover:border-primary/30 transition-all duration-300 group'
                      >
                        <stat.icon className='w-6 h-6 md:w-8 md:h-8 text-white mb-2 group-hover:scale-110 transition-transform duration-300' />
                        <div className='text-xl md:text-2xl font-bold text-white font-audiowide'>{stat.value}</div>
                        <div className='text-xs text-white/60 text-center font-audiowide'>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>


      </div>

      {/* Scroll Down Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2'>
        <div className='animate-bounce'>
          <ChevronDown className='w-6 h-6 text-white' />
        </div>
      </div>
    </div>
  );
}