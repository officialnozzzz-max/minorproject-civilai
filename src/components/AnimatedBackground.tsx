import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes with royal blue theme */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-300/20 rounded-lg backdrop-blur-sm border border-blue-300/30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-400/30"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12 bg-indigo-300/20 rounded-lg backdrop-blur-sm border border-indigo-300/30"
        animate={{
          rotate: [0, -90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/3 w-8 h-24 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-500/30"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Engineering-themed floating elements */}
      <motion.div
        className="absolute top-60 left-1/3 w-6 h-6 bg-cyan-300/20 rounded-sm backdrop-blur-sm border border-cyan-300/30"
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-60 right-10 w-10 h-10 bg-blue-400/20 rounded-full backdrop-blur-sm border border-blue-400/30"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Grid pattern overlay with royal blue theme */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-32 h-32 opacity-20"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-blue-300"/>
        </svg>
      </motion.div>

      {/* Floating particles with royal blue colors */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-blue-300/30 rounded-full backdrop-blur-sm"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 4 + (i * 0.5),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.3,
          }}
        />
      ))}

      {/* Larger background elements with royal blue gradient */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-indigo-600/10 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-black/20 rounded-full backdrop-blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -45, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Additional royal blue accent elements */}
      <motion.div
        className="absolute top-1/2 left-3/4 w-14 h-14 bg-blue-600/20 rounded-lg backdrop-blur-sm border border-blue-500/30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
