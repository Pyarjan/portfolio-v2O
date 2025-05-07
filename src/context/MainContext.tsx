import React, { createContext, useContext, useState, ReactNode } from 'react';

type MainContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const MainContext = createContext<MainContextType | undefined>(undefined);

export const MainProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <MainContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MainContext.Provider>
  );
};

export const useMain = (): MainContextType => {
  const context = useContext(MainContext);
  if (context === undefined) {
    throw new Error('useMain must be used within a MainProvider');
  }
  return context;
};