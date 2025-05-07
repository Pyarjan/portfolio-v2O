import React from 'react';
import { NepalClock } from './NepalClock';
import { AnimationTypingText } from './AnimationTypingText';
import { SocialLinks } from './SocialLinks';

export const ProfileSection: React.FC = () => {
  return (
    <section className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16">
      <div className="max-w-xl">
        {/* Name heading */}
        <h1 className="text-[3.5rem] md:text-[5rem] font-bold leading-none tracking-tight mb-5">
          Pyarjan
          <br />
          Thapa
        </h1>

        {/* Email Form */}
        <div className="mb-5">
          <AnimationTypingText />
        </div>
        
        {/* Nepal Clock */}
        <div className="mb-12">
          <NepalClock />
        </div>
        
        {/* Social Links */}
        <div className="mb-12">
          <SocialLinks />
        </div>
        
        {/* Footer text */}
        <p className="text-white/70 text-sm">
          Let's connect — @pyarjanthapa
        </p>
      </div>
    </section>
  );
};