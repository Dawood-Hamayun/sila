'use client';
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const CTAButton = ({ href, text, tooltip, onMouseEnter, onMouseLeave }) => (
  <div className="relative inline-block">
    <Link
      href={href}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="inline-flex items-center bg-primary-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-600 relative overflow-hidden"
      aria-label={text}
    >
      {/* Icon */}
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="mr-2">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
      {text}
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-white opacity-20 transform rotate-45 animate-[shimmer_3s_infinite]"></div>
    </Link>
    {tooltip && (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-sm py-1 px-3 rounded shadow-md"
        >
          {tooltip}
        </motion.div>
      </AnimatePresence>
    )}
  </div>
);

export default CTAButton;