import React, { useState, useEffect, memo } from 'react';

export const NepalClock: React.FC = memo(() => {
  const [time, setTime] = useState<Date>(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Nepal is UTC+5:45
      const nepalTime = new Date();
      nepalTime.setHours(nepalTime.getUTCHours() + 5);
      nepalTime.setMinutes(nepalTime.getUTCMinutes() + 45);
      setTime(nepalTime);
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (num: number) => {
    return num.toString().padStart(2, '0');
  };
  
  const hours = time.getHours();
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHours = formatTime(hours % 12 || 12);
  
  return (
    <div className="flex items-center gap-4 font-mono">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-bold tracking-tight">{displayHours}</span>
        <span className="text-xs uppercase text-white/50 mt-1">Hours</span>
      </div>
      
      <span className="text-3xl md:text-5xl font-light">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-bold tracking-tight">{minutes}</span>
        <span className="text-xs uppercase text-white/50 mt-1">Minutes</span>
      </div>
      
      <span className="text-3xl md:text-5xl font-light">:</span>
      
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-bold tracking-tight">{seconds}</span>
        <span className="text-xs uppercase text-white/50 mt-1">Seconds</span>
      </div>
      
      <div className="flex flex-col items-center ml-2">
        <span className="text-2xl md:text-3xl font-bold tracking-tight">{period}</span>
        <span className="text-xs uppercase text-white/50 mt-1">Period</span>
      </div>
    </div>
  );
});