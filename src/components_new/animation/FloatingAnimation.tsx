'use client';

import { motion } from 'framer-motion';
import React from 'react';

interface FloatingAnimationProps {
  children: React.ReactNode;
  duration?: number;
  yDelta?: number;
  delay?: number;
  className?: string;
}

const FloatingAnimation = ({
  children,
  duration = 3,
  yDelta = 20,
  delay = 0,
  className = '',
}: FloatingAnimationProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yDelta, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: 'easeInOut',
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingAnimation;
