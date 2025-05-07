import React from 'react';
import { Menu, X } from 'lucide-react';
import { useMain } from '../context/MainContext';
import { Link, useLocation } from 'react-router-dom';

export const HeaderNav: React.FC = () => {
  const { toggleMenu, isMenuOpen } = useMain();
  const location = useLocation();

  const navItems = [
    { name: 'About', href: '/about' },
    // { name: 'Logo Design', href: '/gallery' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="absolute top-0 right-0 md:p-8 p-4 z-20">
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-full border border-white/20 transition-all duration-300"
        >
          {isMenuOpen ? (
            <>
              <X size={18} />
              <span className="text-sm font-medium">Close</span>
            </>
          ) : (
            <>
              <Menu size={18} />
              <span className="text-sm font-medium">Menu</span>
            </>
          )}
        </button>

        {isMenuOpen && (
          <nav className="absolute top-full right-0 mt-2 bg-black/90 border border-white/20 rounded-lg py-2 min-w-[180px] backdrop-blur-sm transition-all duration-300 animate-fade-in">
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`block px-4 py-2 hover:bg-white/10 transition-colors duration-200 ${
                      location.pathname === item.href ? 'text-white' : 'text-white/70'
                    } hover:text-white`}
                    onClick={() => toggleMenu()}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};