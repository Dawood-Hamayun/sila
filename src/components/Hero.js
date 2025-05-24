'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = () => {
  // State for image carousel
  const [activeImage, setActiveImage] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [statValues, setStatValues] = useState([0, 0, 0, 0]);
  
  const heroRef = useRef(null);
  const statsRef = useRef(null);

  // Image gallery data showing real SILA School environments
  const galleryImages = [
    {
      src: "/images/hero-1.jpg",
      alt: "SILA School students lined up in their uniforms",
      caption: "Our students ready for a new day of learning"
    },
    {
      src: "/images/hero-2.jpg",
      alt: "SILA School students studying outdoors",
      caption: "Creating learning spaces in all environments"
    },
    {
      src: "/images/hero-3.jpg",
      alt: "SILA School students in a colorful classroom",
      caption: "Inspiring creativity through engaging spaces"
    }
  ];

  // Education impact stats
  const impactStats = [
    { number: 780, label: "Students educated", icon: "graduates" },
    { number: 14, label: "Years of service", icon: "calendar" },
    { number: 92, label: "% continuing education", icon: "growth" },
    { number: 28, label: "Community teachers", icon: "teacher" }
  ];

  // Standard animation variants for consistency
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: custom * 0.1,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const scaleInVariant = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.7, 
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  // Auto-advance image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  // Intersection Observer for stats
  useEffect(() => {
    if (!statsRef.current || typeof window === 'undefined') return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    observer.observe(statsRef.current);
    
    return () => {
      if (statsRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  // Animate stats counter when visible
  useEffect(() => {
    if (!statsVisible) return;
    
    // Set up counters for each stat
    const endValues = impactStats.map(stat => stat.number);
    const duration = 2000; // 2 seconds
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      
      // Calculate current value for each stat
      const progress = frame / totalFrames;
      const newValues = endValues.map(value => Math.floor(value * Math.min(progress, 1)));
      
      setStatValues(newValues);
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [statsVisible]);

  return (
    <section ref={heroRef} className={styles.heroSection} aria-label="Hero">
      {/* Background elements */}
      <div className={styles.backgroundPattern} aria-hidden="true"></div>
      <div className={styles.backgroundGradient} aria-hidden="true"></div>
      
      {/* Main content container */}
      <div className={styles.container}>
        <div className={styles.heroContent}>
          {/* Left column - Text content */}
          <div className={styles.textContent}>
            <motion.div 
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeInUpVariant}
              className={styles.impactTag}
            >
              <span className={styles.dot} aria-hidden="true"></span>
              Empowering through education since 2010
            </motion.div>
            
            <motion.h1 
              className={styles.heading}
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeInUpVariant}
            >
              Giving every child a <span className={styles.highlight}>pathway</span> to a brighter future
            </motion.h1>
            
            <motion.p 
              className={styles.description}
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeInUpVariant}
            >
              SILA School provides free, quality education to underserved communities in Pakistan, 
              helping children develop the skills, knowledge, and confidence to transform their lives.
            </motion.p>
            
            <motion.div 
              className={styles.ctaButtons}
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeInUpVariant}
            >
              <Link href="#mission" className={styles.primaryButton}>
                <span>Our Mission</span>
                <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="#impact" className={styles.secondaryButton}>
                <span>See Our Impact</span>
              </Link>
            </motion.div>
          </div>
          
          {/* Right column - Images */}
          <motion.div 
            className={styles.imageContent}
            initial="hidden"
            animate="visible"
            variants={scaleInVariant}
          >
            <div className={styles.mainImageContainer}>
              {/* Image carousel */}
              <div className={styles.imageCarousel} aria-label="Photo gallery of SILA School students">
                {galleryImages.map((image, index) => (
                  <div 
                    key={index} 
                    className={`${styles.carouselItem} ${index === activeImage ? styles.active : ''}`}
                    aria-hidden={index !== activeImage}
                  >
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                        quality={90}
                        className={styles.carouselImage}
                      />
                    </div>
                    <div className={styles.captionOverlay}>
                      <p className={styles.imageCaption}>{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Navigation dots */}
              <div className={styles.carouselDots} role="tablist" aria-label="Image gallery navigation">
                {galleryImages.map((_, index) => (
                  <button 
                    key={index}
                    className={`${styles.dot} ${index === activeImage ? styles.activeDot : ''}`}
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    aria-selected={index === activeImage}
                    role="tab"
                  />
                ))}
              </div>
              
              {/* SILA Logo badge */}
              <div className={styles.logoBadge} aria-hidden="true">
                <div className={styles.logoBadgeInner}>
                  <span className={styles.logoText}>SILA</span>
                  <span className={styles.logoTagline}>School</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Stats section */}
        <motion.div 
          ref={statsRef}
          className={styles.statsContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={statsVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ 
            duration: 0.6, 
            delay: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          <div className={styles.statsGrid}>
            {impactStats.map((stat, index) => (
              <div key={index} className={styles.statItem} role="presentation">
                <div className={styles.statIcon} aria-hidden="true">
                  {getStatIcon(stat.icon)}
                </div>
                <div className={styles.statNumber} aria-label={`${statValues[index]}${stat.icon === 'growth' ? '%' : ''} ${stat.label}`}>
                  {statValues[index]}
                  {stat.icon === 'growth' && '%'}
                </div>
                <div className={styles.statLabel}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Wave divider */}
      <div className={styles.waveDivider} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

// Helper function to get SVG icons for stats
const getStatIcon = (iconType: string) => {
  switch (iconType) {
    case 'graduates':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-8.753-8.036L12 10.5l8.753-4.536A9.75 9.75 0 0012 1.5a9.75 9.75 0 00-8.753 4.464z" />
        </svg>
      );
    case 'calendar':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" />
        </svg>
      );
    case 'growth':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
        </svg>
      );
    case 'teacher':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      );
    default:
      return null;
  }
};

export default Hero;