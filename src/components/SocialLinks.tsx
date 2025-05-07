import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Github } from 'lucide-react';
import { FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';

export const SocialLinks: React.FC = () => {
  const socialLinks = [
    { 
      name: 'Facebook', 
      icon: <Facebook size={20} />, 
      url: 'https://facebook.com/itspyarjanchhetri',
      hoverColor: 'hover:text-[#1877F2]'
    },
    { 
      name: 'Twitter', 
      icon: <FaXTwitter size={20} />, 
      url: 'https://twitter.com/pyarjanthapa',
      hoverColor: 'hover:text-[#181717]'
    },
    { 
      name: 'Instagram', 
      icon: <Instagram size={20} />, 
      url: 'https://www.instagram.com/itspyarjanchhetri/',
      hoverColor: 'hover:text-[#DC1AC0]'
    },
    { 
      name: 'YouTube', 
      icon: <Youtube size={20} />, 
      url: 'https://youtube.com/@pyaremon',
      hoverColor: 'hover:text-[#FF0000]'
    },
    { 
      name: 'Linkedin', 
      icon: <FiLinkedin size={20} />, 
      url: 'https://github.com/pyarjanthapa',
      hoverColor: 'hover:text-[#1877F2]'
    },
     {
    name: 'Github', 
    icon: <Github size={20} />, 
    url: 'https://github.com/pyarjanthapa',
    hoverColor: 'hover:text-[#181717]'
  },
  ];
  
  return (
    <div className="flex gap-6">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className={`text-white/70 transition-colors duration-300 ${link.hoverColor}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};