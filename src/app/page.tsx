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
    <div className='bg-black relative'>
      <VerticalNavbar />
      <div className="relative">
        <div className="absolute inset-0 overflow-hidden">
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

      <div className='absolute inset-0 bottom-0' style={{ position: 'relative', height: '300px' }}>
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





