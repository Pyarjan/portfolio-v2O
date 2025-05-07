import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './components/MainLayout';
import { MainProvider } from './context/MainContext';
import { LoadingScreen } from './components/LoadingScreen';

// Lazy load components
const Gallery = lazy(() => import('./pages/Gallery').then(module => ({ default: module.Gallery })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Projects = lazy(() => import('./pages/Projects').then(module => ({ default: module.Projects })));
const Blogs = lazy(() => import('./pages/Blogs').then(module => ({ default: module.Blogs })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(module => ({ default: module.BlogPost })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <MainProvider>
        {isLoading ? (
          <LoadingScreen />
        ) : (
          <Suspense fallback={
            <div className="min-h-screen bg-black flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
        )}
      </MainProvider>
    </Router>
  );
}

export default App;