import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HeaderNav } from '../components/HeaderNav';
import { Link, useNavigate } from 'react-router-dom';
import { ImageLoader } from '../components/ImageLoader';
import { X } from 'lucide-react';

interface Logo {
  url: string;
  title: string;
  category: string;
  description: string;
  colors: string[];
  style: string;
}

const logos: Logo[] = [
  {
    url: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg',
    title: 'Mountain Vista',
    category: 'Nature',
    description: 'A minimalist logo design capturing the essence of mountain landscapes.',
    colors: ['#2C3E50', '#ECF0F1', '#3498DB'],
    style: 'Minimalist'
  },
  {
    url: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg',
    title: 'Urban Life',
    category: 'Urban',
    description: 'Modern and dynamic logo representing urban lifestyle and city energy.',
    colors: ['#E74C3C', '#2ECC71', '#F1C40F'],
    style: 'Modern'
  },
  {
    url: 'https://images.pexels.com/photos/2387871/pexels-photo-2387871.jpeg',
    title: 'Abstract Art',
    category: 'Art',
    description: 'Abstract logo design with bold shapes and vibrant colors.',
    colors: ['#9B59B6', '#1ABC9C', '#F39C12'],
    style: 'Abstract'
  },
  {
    url: 'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg',
    title: 'Nature\'s Beauty',
    category: 'Nature',
    description: 'Organic logo design inspired by natural elements and forms.',
    colors: ['#27AE60', '#D35400', '#2980B9'],
    style: 'Organic'
  },
  {
    url: 'https://images.pexels.com/photos/2387870/pexels-photo-2387870.jpeg',
    title: 'City Lights',
    category: 'Urban',
    description: 'Sleek and sophisticated logo design for urban businesses.',
    colors: ['#34495E', '#E67E22', '#16A085'],
    style: 'Corporate'
  },
  {
    url: 'https://images.pexels.com/photos/2387872/pexels-photo-2387872.jpeg',
    title: 'Serenity',
    category: 'Nature',
    description: 'Peaceful and harmonious logo design with natural elements.',
    colors: ['#2ECC71', '#3498DB', '#E74C3C'],
    style: 'Minimalist'
  }
];

export const Gallery: React.FC = () => {
  const [selectedLogo, setSelectedLogo] = useState<Logo | null>(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <HeaderNav />
      <Link to="/" className="inline-block mb-8 text-white/70 hover:text-white transition-colors">
        ← Back to Home
      </Link>
      
      <h1 className="text-4xl font-bold mb-8">Logo Design</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedLogo(logo)}
          >
            <ImageLoader
              src={logo.url}
              alt={logo.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <h3 className="text-xl font-bold">{logo.title}</h3>
              <p className="text-sm text-white/70">{logo.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedLogo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedLogo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 max-w-2xl w-full relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedLogo(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <img
                    src={selectedLogo.url}
                    alt={selectedLogo.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{selectedLogo.title}</h2>
                  <p className="text-white/70 mb-4">{selectedLogo.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-white/80 mb-2">Style</h3>
                      <p className="text-white">{selectedLogo.style}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-white/80 mb-2">Color Palette</h3>
                      <div className="flex gap-2">
                        {selectedLogo.colors.map((color, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full"
                            style={{ backgroundColor: color }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => navigate('/contact')}
                    className="mt-6 w-full bg-white text-black font-medium py-2 rounded-lg hover:bg-white/90 transition-colors"
                  >
                    Request Similar Design
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};