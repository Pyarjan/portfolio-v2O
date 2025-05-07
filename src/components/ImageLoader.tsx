import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ src, alt, className = '' }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className={className}
      />
    </motion.div>
  );
};