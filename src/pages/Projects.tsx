import React from 'react';
import { HeaderNav } from '../components/HeaderNav';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution built with React, Node.js, and PostgreSQL.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    year: '2023'
  },
  {
    title: 'Brand Identity System',
    description: 'Complete brand identity design including logo, guidelines, and marketing materials.',
    image: 'https://images.pexels.com/photos/1036848/pexels-photo-1036848.jpeg',
    tags: ['Branding', 'Logo Design', 'Identity'],
    year: '2023'
  },
  {
    title: 'Portfolio Website',
    description: 'Modern portfolio website with animations and responsive design.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
    tags: ['Web Design', 'React', 'Animation'],
    year: '2022'
  },
  {
    title: 'Restaurant Mobile App',
    description: 'Mobile app design for a local restaurant chain.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg',
    tags: ['UI/UX', 'Mobile Design', 'Prototyping'],
    year: '2022'
  }
];

export const Projects: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <Link to="/" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="text-white/70 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/50">{project.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};