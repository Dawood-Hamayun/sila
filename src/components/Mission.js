'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Mission.module.css';

const Mission = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // For parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  // Standard animation variants for consistency
  const fadeInUpVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({ 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.5, 
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
        delay: 0.2,
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

  // Core principles with impactful descriptions
  const principles = [
    {
      title: "Quality Education",
      description: "Delivering excellent teaching using innovative methods that engage children regardless of prior education.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.principleIcon}>
          <path d="M11.7 2.805a.75.75 0 01.6 0A60.65 60.65 0 0122.83 8.72a.75.75 0 01-.231 1.337 49.949 49.949 0 00-9.902 3.912l-.003.002-.34.18a.75.75 0 01-.707 0A50.009 50.009 0 007.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 014.653-2.52.75.75 0 00-.65-1.352 56.129 56.129 0 00-4.78 2.589 1.858 1.858 0 00-.859 1.228 49.803 49.803 0 00-4.634-1.527.75.75 0 01-.231-1.337A60.653 60.653 0 0111.7 2.805z" />
          <path d="M13.06 15.473a48.45 48.45 0 017.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 01-.46.71 47.878 47.878 0 00-8.105 4.342.75.75 0 01-.832 0 47.877 47.877 0 00-8.104-4.342.75.75 0 01-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 016 13.18v1.27a1.5 1.5 0 00-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 00.551-1.608 1.5 1.5 0 00.14-2.67v-.645a48.549 48.549 0 013.44 1.668 2.25 2.25 0 002.12 0z" />
        </svg>
      )
    },
    {
      title: "Equality & Inclusion",
      description: "Creating equal opportunities for every child regardless of gender, background, or economic circumstance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.principleIcon}>
          <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
      )
    },
    {
      title: "Holistic Development",
      description: "Nurturing not just academic skills but emotional intelligence, creativity, and resilience that last a lifetime.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.principleIcon}>
          <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section ref={sectionRef} className={styles.missionSection} id="mission" aria-label="Our Mission">
      {/* Background elements */}
      <div className={styles.backgroundElements} aria-hidden="true">
        <motion.div style={{ y: y1 }} className={styles.bgShape1}></motion.div>
        <motion.div style={{ y: y2 }} className={styles.bgShape2}></motion.div>
        <div className={styles.dotPattern}></div>
      </div>
      
      <div className={styles.container}>
        {/* Mission Statement Header */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={0}
          className={styles.missionHeader}
        >
          <div className={styles.badge}>Our Mission</div>
          
          <h2 className={styles.missionTitle}>
            Creating <span className={styles.highlight}>pathways</span> to opportunity through education
          </h2>
        </motion.div>
        
        <div className={styles.missionGrid}>
          {/* Left column: Image */}
          <motion.div 
            className={styles.imageColumn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInLeftVariant}
          >
            <div className={styles.imageWrapper}>
              <Image 
                src="/images/ropstam-sila.jpg" 
                alt="SILA School students learning in classroom" 
                width={540} 
                height={500}
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className={styles.missionImage}
              />
              
              <div className={styles.partnerOverlay}>
                <div className={styles.partnerLogo}>
                  <Image 
                    src="/images/ropstam.svg" 
                    alt="Ropstam Solutions" 
                    width={120} 
                    height={36} 
                  />
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right column: Text content */}
          <motion.div 
            className={styles.textColumn}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInRightVariant}
          >
            <p className={styles.missionText}>
              At SILA School, we believe that education is a fundamental right, not a privilege. Our mission is to 
              provide free, quality primary education to underprivileged children in Pakistan, breaking the cycle of 
              poverty and empowering the next generation to build brighter futures.
            </p>
            
            <div className={styles.principlesList}>
              {principles.map((principle, index) => (
                <motion.div 
                  key={index}
                  className={styles.principleItem}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={fadeInUpVariant}
                  custom={index + 3}
                >
                  <div className={styles.principleIcon} aria-hidden="true">
                    {principle.icon}
                  </div>
                  <div className={styles.principleContent}>
                    <h4>{principle.title}</h4>
                    <p>{principle.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUpVariant}
              custom={6}
              className={styles.missionCta}
            >
              <Link href="/get-involved" className={styles.ctaButton}>
                <span>Support Our Mission</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.ctaIcon} aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Founder Section with improved quote styling */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={7}
          className={styles.founderSection}
        >
          <div className={styles.founderCard}>
            <div className={styles.founderImageContainer}>
              <Image 
                src="/images/dodo.jpeg" 
                alt="Jibran Khalil, Founder of SILA School" 
                width={64} 
                height={64}
                quality={90}
                className={styles.founderImage}
              />
            </div>
            
            <div className={styles.founderContent}>
              <div className={styles.quoteMarks} aria-hidden="true">
                <span className={styles.openQuote}>"</span>
                <span className={styles.closeQuote}>"</span>
              </div>
              <blockquote className={styles.founderQuote}>
                Education is the most powerful tool we can use to change the world. At SILA School, we're committed to ensuring every child has access to quality education regardless of their circumstances. When we invest in a child's education, we're investing in the future of our entire community.
              </blockquote>
              
              <div className={styles.founderInfo}>
                <h3 className={styles.founderName}>Jibran Khalil</h3>
                <p className={styles.founderTitle}>FOUNDER & EXECUTIVE DIRECTOR</p>
              </div>
            </div>
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

export default Mission;