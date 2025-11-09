'use client'

import { useEffect, useState } from 'react';
import Loading from '@/components/Loading';
import Aurora from '../components/ui/Arora';
import Intro from '@/components/sections/Intro';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import SectionDivider from '@/components/SectionDivider';
import VerticalNavbar from '@/components/vertical-navbar';
import TextPressure from '@/components/ui/TextPressure';

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

  return (
    <div className='bg-black relative min-h-screen'>
      <VerticalNavbar />
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden md:h-full h-[50%]">
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>
        <Intro />
      </div>

      <SectionDivider />
      <Experience />


      <SectionDivider />
      <Projects />


      <SectionDivider />
      <Contact />

      <div className='bg-black relative hidden md:block' style={{ height: '350px', marginTop: '-1px' }}>
        <TextPressure
          text="Devgambo!"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
      
    </div>
  );
}





