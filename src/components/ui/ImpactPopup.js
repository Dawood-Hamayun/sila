'use client';
import React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const ImpactPopup = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-xl p-8 max-w-lg w-full relative shadow-xl"
        >
          <button
            onClick={onClose}
            aria-label="Close Impact Popup"
            className="absolute top-4 right-4 text-neutral-500 text-2xl focus:outline-none"
          >
            &times;
          </button>
          <h3 className="text-2xl font-bold text-primary-600 text-center mb-4">
            Make a Difference Today
          </h3>
          <p className="text-base text-neutral-700 text-center mb-6">
            Your support directly impacts children's lives by providing:
          </p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {[
              { icon: '📚', text: 'Textbooks & learning materials' },
              { icon: '🏫', text: 'Safe learning environment' },
              { icon: '🍎', text: 'Nutritious daily meal' },
              { icon: '👩‍🏫', text: 'Trained, compassionate teachers' }
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 bg-primary-50 rounded-md"
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="text-sm text-neutral-800">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="#donate"
              onClick={onClose}
              className="inline-block bg-primary-400 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-600"
            >
              Sponsor a Child for $30/month
            </Link>
            <p className="text-xs text-neutral-500 mt-3">
              100% of your donation goes directly to supporting the children
            </p>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ImpactPopup;