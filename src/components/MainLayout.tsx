import React from 'react';
import { HeaderNav } from './HeaderNav';
import { ProfileSection } from './ProfileSection';
import { backgroundImageUrl } from '../utils/constants';

export const MainLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background overlay */}
      <div 
        className="absolute inset-0 z-0 bg-black" 
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // filter: 'grayscale(100%)',
          opacity: '0.7',
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <HeaderNav />
        <main className="flex-1 flex">
          <ProfileSection />
        </main>
      </div>
    </div>
  );
};