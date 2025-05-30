'use client';

import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main footer content */}
        <div className={styles.footerContent}>
          {/* Logo and description */}
          <div className={styles.brandSection}>
            <div className={styles.logo}>
              <Image 
                src="/images/sila-logo.png" 
                alt="SILA School Logo" 
                width={120} 
                height={48}
                className={styles.logoImage}
              />
            </div>
            <p className={styles.description}>
              Empowering children through education and breaking the cycle of poverty in Pakistan since 2010.
            </p>
          </div>
          
          {/* Quick links */}
          <div className={styles.linksSection}>
            <h4 className={styles.sectionTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              <li><a href="#mission" className={styles.link}>Our Mission</a></li>
              <li><a href="#do-something-good" className={styles.link}>Our Story</a></li>
              <li><a href="#success-stories" className={styles.link}>Success Stories</a></li>
              <li><a href="#special-thanks" className={styles.link}>Special Thanks</a></li>
            </ul>
          </div>
          
          {/* Contact info */}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Get In Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
                <span>Pakistan</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
                <span>SILA School</span>
              </div>
            </div>
          </div>
          
          {/* Social media - Facebook focus */}
          <div className={styles.socialSection}>
            <h4 className={styles.sectionTitle}>Follow Our Journey</h4>
            <p className={styles.socialDescription}>
              See our daily impact and connect with the SILA community
            </p>
            <div className={styles.socialLinks}>
              <a 
                href="https://www.facebook.com/silaschool" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.facebookLink}
                aria-label="Follow SILA School on Facebook"
              >
                <svg className={styles.facebookIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Follow on Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            <p>&copy; {currentYear} SILA School. Empowering lives through education.</p>
          </div>
          <div className={styles.founder}>
            <p>Founded by <span className={styles.founderName}>Jibran Khalil</span></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;