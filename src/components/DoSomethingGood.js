'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './DoSomethingGood.module.css';

const DoSomethingGood = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // For parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // What SILA provides today
  const provisions = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        </svg>
      ),
      title: "Free Primary Education",
      description: "Complete academic curriculum with qualified teachers"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3.375 3.375 0 01-3.375 3.375H7.502a3.375 3.375 0 01-3.375-3.375V9.375A3.375 3.375 0 017.502 6zM15 9.75a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75zm-.75 2.25a.75.75 0 000 1.5h-4.5a.75.75 0 000-1.5h4.5zm-.75 3a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h4.5a.75.75 0 00.75-.75z" clipRule="evenodd" />
        </svg>
      ),
      title: "Books & Supplies",
      description: "No charges for books, stationery, and uniforms"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clipRule="evenodd" />
          <path fillRule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5V3z" clipRule="evenodd" />
        </svg>
      ),
      title: "Higher Education Support",
      description: "Complete support for continuing education beyond primary"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M14.447 3.027a.75.75 0 01.527.92l-4.5 16.5a.75.75 0 01-1.448-.394l4.5-16.5a.75.75 0 01.921-.526zM16.72 6.22a.75.75 0 011.06 0l5.25 5.25a.75.75 0 010 1.06l-5.25 5.25a.75.75 0 11-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 010-1.06zm-9.44 0a.75.75 0 010 1.06L2.56 12l4.72 4.72a.75.75 0 11-1.06 1.06L.97 12.53a.75.75 0 010-1.06l5.25-5.25a.75.75 0 011.06 0z" clipRule="evenodd" />
        </svg>
      ),
      title: "Computer Literacy",
      description: "Digital skills and technology knowledge for the future"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clipRule="evenodd" />
        </svg>
      ),
      title: "Essential Support",
      description: "Regular food support and essential daily needs"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM8.547 4.505a8.25 8.25 0 1011.672 8.214l-.46-.46a2.252 2.252 0 01-.422-.586l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.211.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 01-1.458-1.137l1.279-2.132z" clipRule="evenodd" />
        </svg>
      ),
      title: "Holistic Care",
      description: "Winter clothing, protection guidance, and independence training"
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Standard animation variants for consistency
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        delay: custom * 0.1,
        ease: [0.4, 0, 0.2, 1]
      } 
    })
  };

  const fadeInLeftVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.3,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  const fadeInRightVariant = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.6, 
        delay: 0.2,
        ease: [0.4, 0, 0.2, 1]
      } 
    }
  };

  return (
    <section ref={sectionRef} className={styles.dosomethingSection} id="do-something-good" aria-label="Do Something Good Story">
      {/* Background elements */}
      <div className={styles.backgroundElements} aria-hidden="true">
        <motion.div style={{ y: y1 }} className={styles.bgShape1}></motion.div>
        <motion.div style={{ y: y2 }} className={styles.bgShape2}></motion.div>
        <div className={styles.patternOverlay}></div>
      </div>
      
      <div className={styles.container}>
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={0}
          className={styles.sectionHeader}
        >
          <div className={styles.badge}>Our Beginning</div>
          
          <h2 className={styles.sectionTitle}>
            From <span className={styles.highlight}>Sunday gifts</span> to transforming lives
          </h2>
        </motion.div>
        
        <div className={styles.storyGrid}>
          {/* Left column: Story content */}
          <motion.div 
            className={styles.storyColumn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInLeftVariant}
          >
            <div className={styles.storyContent}>
              <div className={styles.yearBadge}>2014</div>
              
              <h3 className={styles.storyTitle}>Do Something Good Every Sunday</h3>
              
              <p className={styles.storyText}>
                In 2014, I started an activity with my daughter and called it "Do Something Good Every Sunday". 
                We started by distributing small gifts in the nearby marginalized communities. There was a very 
                quick realization that a few candies and toys will not fix the problems of these beautiful children.
              </p>
              
              <p className={styles.storyText}>
                I brainstormed with some likeminded friends and came up with an idea that we should try and 
                educate some of these kids. What started off as a small gesture of giving back, soon turned 
                into a proper school that helps students from the most-affected segments of the society.
              </p>
              
              <div className={styles.transformationBox}>
                <div className={styles.transformIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className={styles.transformText}>
                  <span className={styles.transformFrom}>Small Sunday gifts</span>
                  <span className={styles.transformArrow}>→</span>
                  <span className={styles.transformTo}>Life-changing education</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column: Image */}
          <motion.div 
            className={styles.imageColumn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInRightVariant}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/story.jpeg" 
                alt="Early days of Do Something Good Every Sunday initiative with children" 
                width={500} 
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className={styles.storyImage}
              />
              
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <span className={styles.overlayText}>The beginning of our journey</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* What we provide today */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={3}
          className={styles.providesSection}
        >
          <div className={styles.providesHeader}>
            <h3 className={styles.providesTitle}>What SILA provides today</h3>
            <p className={styles.providesSubtitle}>
              From simple Sunday gifts to comprehensive support that transforms lives
            </p>
          </div>
          
          <div className={styles.provisionsGrid}>
            {provisions.map((provision, index) => (
              <motion.div 
                key={index}
                className={styles.provisionCard}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariant}
                custom={4 + index}
              >
                <div className={styles.provisionIcon} aria-hidden="true">
                  {provision.icon}
                </div>
                <h4 className={styles.provisionTitle}>{provision.title}</h4>
                <p className={styles.provisionDescription}>{provision.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Key message */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={12}
          className={styles.keyMessage}
        >
          <div className={styles.messageCard}>
            <div className={styles.messageIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </div>
            <p className={styles.messageText}>
              "Learning to be self-sufficient and independent of alms" - This is our ultimate goal: 
              empowering children to break free from the cycle of dependency and build dignified, independent lives.
            </p>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom wave divider */}
      <div className={styles.bottomWave} aria-hidden="true">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default DoSomethingGood;