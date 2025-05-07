
import React from 'react';
import { motion } from 'framer-motion';

export const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.6, delay: 2 }}
      onAnimationComplete={() => (document.body.style.overflow = 'unset')}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        {/* Name Fade + Scale */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl font-semibold tracking-wide"
        >
          Pyarjan Thapa
        </motion.h1>

        {/* Subtle Line Animation */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.5 }}
          className="h-[1px] bg-white mx-auto mt-4"
        />

        {/* Loading dots */}
        <motion.div
          className="mt-6 flex justify-center gap-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
                repeat: Infinity,
              },
            },
          }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              variants={{
                hidden: { opacity: 0.3, y: 0 },
                visible: {
                  opacity: [0.3, 1, 0.3],
                  y: [0, -6, 0],
                  transition: { duration: 0.8, repeat: Infinity },
                },
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
