'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './SpecialThanks.module.css';

const SpecialThanks = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const supporters = [
    {
      name: "Makzia & Wali Hassan",
      image: "/images/wali.jpeg"
    },
    {
      name: "Balal & Saba",
      image: "/images/bilal.jpeg"
    },
    {
      name: "Sadaf, Saleha & Friends",
      image: "/images/sadaf.jpeg"
    },
    {
      name: "Dawood Hamayun",
      image: "/images/dawood.jpeg"
    }
  ];

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
    <section ref={sectionRef} className={styles.thanksSection} id="special-thanks">
      <div className={styles.backgroundElements}>
        <div className={styles.bgCircle}></div>
        <div className={styles.dotPattern}></div>
      </div>
      
      <div className={styles.container}>
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={0}
          className={styles.header}
        >
          <div className={styles.badge}>Special Thanks</div>
          <h2 className={styles.title}>
            To our amazing <span className={styles.highlight}>supporters</span>
          </h2>
          <p className={styles.subtitle}>
            These incredible individuals have been instrumental in making SILA School's mission possible
          </p>
        </motion.div>
        
        <div className={styles.supportersGrid}>
          {supporters.map((supporter, index) => (
            <motion.div 
              key={index}
              className={styles.supporterCard}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              variants={fadeInUpVariant}
              custom={2 + index}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={supporter.image}
                  alt={supporter.name}
                  width={200}
                  height={200}
                  className={styles.supporterImage}
                />
              </div>
              <h3 className={styles.supporterName}>{supporter.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariant}
          custom={7}  
          className={styles.gratitudeMessage}
        >
          <div className={styles.messageCard}>
            <svg className={styles.heartIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <p className={styles.gratitudeText}>
              Your unwavering support and belief in our mission continues to transform young lives every day. Thank you for being part of the SILA family.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialThanks;