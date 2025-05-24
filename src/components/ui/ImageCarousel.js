'use client';
import React from 'react';
import Image from 'next/image';

const ImageCarousel = ({ images, activeImage, setActiveImage }) => (
  <div className="relative rounded-xl overflow-hidden shadow-lg border-4 border-white">
    <div className="relative w-full aspect-video">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-800 ease-in-out ${
            index === activeImage ? 'opacity-100 z-20' : 'opacity-0 z-10'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-30"></div>
      {/* Caption & Carousel Dots */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-40">
        <p className="text-white text-sm">{images[activeImage].caption}</p>
        <div className="flex gap-2 mt-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === activeImage ? 'w-8 bg-white' : 'w-2 h-2 bg-white/50'
              }`}
              aria-label={`View image ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ImageCarousel;