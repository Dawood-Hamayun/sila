'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './OurStory.module.css';

const OurStory = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeYear, setActiveYear] = useState(0);
  
  // For parallax effects
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  // Timeline milestone data
  const milestones = [
    {
      year: 2010,
      title: "The Beginning",
      description: "SILA School began with just 23 students in a small rented facility, founded by Jibran Khalil with a vision to provide education to children who had no access to schools.",
      image: "/images/story-beginning.jpg",
      imageAlt: "First SILA School class with founder Jibran Khalil"
    },
    {
      year: 2013,
      title: "First Permanent Campus",
      description: "Thanks to community support and initial donors, we established our first permanent campus, allowing us to provide a stable learning environment for 120 students.",
      image: "/images/story-campus.jpg",
      imageAlt: "SILA School's first permanent campus building"
    },
    {
      year: 2016,
      title: "Expanded Curriculum",
      description: "We expanded beyond basic literacy to include comprehensive STEM education, arts, and extracurricular activities to provide a more holistic education approach.",
      image: "/images/story-curriculum.jpg",
      imageAlt: "Students engaged in expanded curriculum activities at SILA School"
    },
    {
      year: 2019,
      title: "Teacher Training Program",
      description: "We launched our teacher training program to empower local community members to become qualified educators, creating sustainable employment while improving education quality.",
      image: "/images/story-teachers.jpg",
      imageAlt: "Teacher training session at SILA School"
    },
    {
      year: 2023,
      title: "Digital Learning Initiative",
      description: "With support from tech partners, we introduced our digital learning program, providing students access to computers, tablets, and online resources to prepare them for the digital future.",
      image: "/images/story-digital.jpg",
      imageAlt: "Students using digital learning tools at SILA School"
    }
  ];

  // Intersection Observer for section animations
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

  // Intersection Observer for timeline scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setActiveYear(index);
          }
        });
      },
      { 
        threshold: 0.7,
        rootMargin: "-20% 0px -20% 0px"
      }
    );
    
    const milestoneElements = document.querySelectorAll(`.${styles.milestoneCard}`);
    milestoneElements.forEach(el => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, [isVisible]);

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

  return (
    <section ref={sectionRef} className={styles.storySection} id="our-story" aria-label="Our Story">
      {/* Background elements */}
      <div className={styles.backgroundElements} aria-hidden="true">
        <motion.div style={{ y: y1 }} className={styles.bgCircle1}></motion.div>
        <motion.div style={{ y: y2 }} className={styles.bgCircle2}></motion.div>
        <div className={styles.dotPattern}></div>
      </div>
      
      <div className={styles.container}>
        {/* Story Header */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={0}
          className={styles.storyHeader}
        >
          <div className={styles.badge}>Our Journey</div>
          
          <h2 className={styles.storyTitle}>
            The evolution of a <span className={styles.highlight}>dream</span> to transform lives
          </h2>
          
          <p className={styles.storyIntro}>
            Since 2010, SILA School has been on a mission to bring quality education to underserved communities in Pakistan. 
            What began as a small initiative has grown into a beacon of hope and opportunity, 
            transforming the lives of hundreds of children and their families.
          </p>
        </motion.div>
        
        {/* Founder's Note */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={1}
          className={styles.founderNote}
        >
          <div className={styles.founderImageContainer}>
            <Image 
              src="/images/dodo.jpeg" 
              alt="Jibran Khalil, Founder of SILA School" 
              width={120} 
              height={120}
              className={styles.founderImage}
            />
            
            <div className={styles.founderSignature}>
              <Image 
                src="/images/signature.svg" 
                alt="Jibran Khalil's signature" 
                width={120} 
                height={60}
              />
            </div>
          </div>
          
          <div className={styles.founderMessage}>
            <div className={styles.quoteMarks} aria-hidden="true">"</div>
            <p>
              Our story began with a simple observation: too many children in our community lacked access to 
              even basic education. I believed then, as I do now, that education is the most powerful tool 
              for breaking the cycle of poverty. With determination and support from like-minded individuals, 
              what started as a single classroom has grown into something truly special.
            </p>
            <div className={styles.founderSignOff}>
              <span className={styles.founderName}>Jibran Khalil</span>
              <span className={styles.founderTitle}>Founder of SILA School</span>
            </div>
          </div>
        </motion.div>
        
        {/* Timeline */}
        <motion.div 
          ref={timelineRef}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={2}
          className={styles.timelineSection}
        >
          <div className={styles.timelineYears}>
            {milestones.map((milestone, index) => (
              <button 
                key={`year-${milestone.year}`}
                className={`${styles.yearMarker} ${activeYear === index ? styles.activeYear : ''}`}
                onClick={() => {
                  const element = document.getElementById(`milestone-${milestone.year}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                <span className={styles.yearDot}></span>
                <span className={styles.yearText}>{milestone.year}</span>
              </button>
            ))}
            <div className={styles.timelineLine}>
              <div 
                className={styles.timelineProgress} 
                style={{ height: `${(activeYear / (milestones.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <div className={styles.milestonesContainer}>
            {milestones.map((milestone, index) => (
              <div 
                id={`milestone-${milestone.year}`}
                data-index={index}
                key={`milestone-${milestone.year}`} 
                className={`${styles.milestoneCard} ${activeYear === index ? styles.activeMilestone : ''}`}
              >
                <div className={styles.milestoneContent}>
                  <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
                  <div className={styles.milestoneYear}>{milestone.year}</div>
                  <p className={styles.milestoneDescription}>{milestone.description}</p>
                </div>
                
                <div className={styles.milestoneImageWrapper}>
                  <Image 
                    src={milestone.image} 
                    alt={milestone.imageAlt} 
                    width={480} 
                    height={320}
                    className={styles.milestoneImage}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
        {/* Vision for the future */}
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={3}
          className={styles.visionSection}
        >
          <div className={styles.visionContainer}>
            <div className={styles.visionContent}>
              <h3 className={styles.visionTitle}>Looking to the future</h3>
              <p className={styles.visionText}>
                As we continue our journey, we envision expanding our reach to more communities, 
                enhancing our teaching methodologies, and equipping even more children with the skills 
                they need to succeed in an ever-changing world. With your support, we can turn this vision into reality.
              </p>
              <Link href="/get-involved" className={styles.ctaButton}>
                <span>Join Our Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={styles.ctaIcon} aria-hidden="true">
                  <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            
            <div className={styles.statContainer}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2,500+</div>
                <div className={styles.statLabel}>Lives impacted</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>14</div>
                <div className={styles.statLabel}>Years of service</div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>85%</div>
                <div className={styles.statLabel}>Students continue to secondary education</div>
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

export default OurStory;