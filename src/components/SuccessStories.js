'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './SuccessStories.module.css';

const SuccessStories = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(0);
  
  // Success stories data
  const successStories = [
    {
      id: 0,
      name: "Rubab",
      grade: "Grade 10",
      image: "/images/rubab.jpeg",
      quote: "SILA School gave me the foundation I needed. Now in 10th grade, I'm excelling in sciences and dream of becoming a doctor to serve my community.",
      achievement: "Top scorer in district science competition",
      skill: "Science & Biology",
      aspiration: "To become a doctor"
    },
    {
      id: 1,
      name: "Abu Bakr",
      grade: "Grade 10",
      image: "/images/abu-bakr.jpeg",
      quote: "With SILA's continued support, I've been able to pursue my education beyond primary school. Math is my favorite subject, and I hope to become an engineer.",
      achievement: "Mathematics club president",
      skill: "Mathematics & Problem Solving",
      aspiration: "To become an engineer"
    },
    {
      id: 2,
      name: "Mukhtar",
      grade: "Grade 10",
      image: "/images/mukhtar.jpeg",
      quote: "SILA believed in me when no one else did. Their support helped me overcome challenges and continue my studies. I want to become a teacher and give back.",
      achievement: "School leadership award recipient",
      skill: "Leadership & Communication",
      aspiration: "To become a teacher"
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

  // Auto-rotate active stories for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth < 768) {
        setActiveStory(prev => (prev + 1) % successStories.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [successStories.length]);

  // Image error handling
  const handleImageError = (e) => {
    console.error("Image failed to load:", e.target.src);
    e.target.src = "https://via.placeholder.com/400x500?text=Student+Photo";
  };

  return (
    <section ref={sectionRef} className={styles.successSection} id="success-stories">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.badge}>Success Stories</div>
          
          <h2 className={styles.sectionTitle}>
            Our students continue to <span className={styles.highlight}>thrive</span> beyond primary education
          </h2>
          
          <p className={styles.sectionDescription}>
            SILA School supports the continued education of promising students who wish to pursue higher studies.
            Meet some of our graduates who are excelling in their academic journeys.
          </p>
        </div>
        
        {/* Success Stories Cards - Basic Version */}
        <div className={styles.storiesWrapper}>
          <div className={styles.storiesGrid}>
            {successStories.map((story) => (
              <div 
                key={story.id}
                className={`${styles.storyCard} ${activeStory === story.id ? styles.activeMobile : ''}`}
              >
                <div className={styles.cardInner}>
                  {/* Simple card with image */}
                  <div className={styles.simpleFront}>
                    <div className={styles.imageContainer}>
                      {/* First try with regular img tag for troubleshooting */}
                      <img 
                        src={story.image}
                        alt={`${story.name}, ${story.grade} student`}
                        className={styles.studentImage}
                        onError={handleImageError}
                      />
                      <div className={styles.gradeBadge}>{story.grade}</div>
                    </div>
                    
                    <div className={styles.cardContent}>
                      <h3 className={styles.studentName}>{story.name}</h3>
                      <p className={styles.studentSkill}>{story.skill}</p>
                      <p className={styles.studentQuote}>"{story.quote}"</p>
                      <div className={styles.achievementTag}>
                        <span>{story.achievement}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Mobile Nav Dots */}
          <div className={styles.mobileNav}>
            {successStories.map((story) => (
              <button 
                key={story.id}
                className={`${styles.mobileNavDot} ${activeStory === story.id ? styles.activeNavDot : ''}`}
                onClick={() => setActiveStory(story.id)}
                aria-label={`View ${story.name}'s story`}
              />
            ))}
          </div>
        </div>
        
        {/* Simple CTA Section */}
        <div className={styles.ctaContainer}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaHeading}>Help more students continue their education</h3>
              <p className={styles.ctaText}>
                Your support can help us expand our scholarship program and enable more students to pursue their dreams through continued education.
              </p>
            </div>
            
            <Link href="/donate" className={styles.ctaButton}>
              <span>Support Their Journey</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;