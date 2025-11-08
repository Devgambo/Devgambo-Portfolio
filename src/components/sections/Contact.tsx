import { MessageCircle, MessageSquare } from 'lucide-react';
import LetsConnect from '@/components/sections/LetsConnect';
import TextPressure from '../ui/TextPressure';

export default function Contact() {
  return (
    <div id="contact" className='relative z-10 w-full flex-col justify-center items-center px-4 pt-20'>
      <div className='max-w-6xl mx-auto w-full'>
        <div className='text-center mb-16'>
          <h2 className='py-2 px-4 flex items-center justify-center gap-2 font-yesteryear text-3xl md:text-4xl lg:text-5xl font-bold mb-4' style={{
            backgroundImage: 'linear-gradient(to right, #ec4899, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
          }}>
            | Let&apos;s Connect |
          </h2>
        </div>
      </div>
      <div>
        <LetsConnect />
      </div>
      <div>
        <p className='font-monsieurladoulaise text-6xl text-pink-900 absolute bottom-25 left-150 rotate-[-10deg] '>Priyanshu</p>
      </div>
    </div>
  );
}

