'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const mobileMenuRef = useRef(null);

  // Track scroll position for navbar styling and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Handle window resize to close mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Success Stories', href: '#stories' },
    { name: 'Get Involved', href: '#volunteer' },
    { name: 'Contact', href: '#contact' },
  ];

  // Scroll to section smoothly
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: [0.4, 0.0, 0.2, 1]
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      x: -10,
    },
    open: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  return (
    <header 
      className="navbar-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: isScrolled ? '0.75rem 0' : '1.25rem 0',
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
        boxShadow: isScrolled ? '0 4px 20px -5px rgba(0, 0, 0, 0.1)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(69, 179, 229, 0.1)' : 'none',
      }}
    >
      <div 
        className="navbar-content"
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative'
        }}
      >
        {/* Logo */}
        <Link 
          href="#home"
          onClick={(e) => scrollToSection(e, '#home')}
          className="logo-link"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            zIndex: 20
          }}
        >
          <div 
            className="logo-container"
            style={{
              position: 'relative',
              height: isScrolled ? '40px' : '48px',
              width: isScrolled ? '120px' : '150px',
              transition: 'all 0.3s ease'
            }}
          >
            <Image
              src="/images/sila-logo.png"
              alt="SILA School"
              fill
              priority
              style={{
                objectFit: 'contain',
                objectPosition: 'left center'
              }}
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav 
          className="desktop-nav"
          style={{
            display: 'none',
            '@media (min-width: 1024px)': {
              display: 'flex'
            }
          }}
        >
          <ul 
            className="nav-links"
            style={{
              display: 'flex',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              gap: '1.5rem'
            }}
          >
            {navLinks.map(link => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  style={{
                    position: 'relative',
                    display: 'block',
                    padding: '0.5rem 0',
                    fontSize: '0.95rem',
                    fontWeight: activeSection === link.href.replace('#', '') ? 600 : 500,
                    color: activeSection === link.href.replace('#', '') ? 'var(--primary-600)' : 'var(--neutral-700)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {link.name}
                  <span 
                    className="link-indicator"
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '2px',
                      background: 'var(--primary-400)',
                      transform: activeSection === link.href.replace('#', '') ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'left',
                      transition: 'transform 0.3s ease',
                      borderRadius: '1px'
                    }}
                  ></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Buttons - Desktop */}
        <div 
          className="cta-buttons"
          style={{
            display: 'none',
            '@media (min-width: 1024px)': {
              display: 'flex'
            },
            gap: '0.75rem'
          }}
        >
          <Link 
            href="#donate"
            onClick={(e) => scrollToSection(e, '#donate')}
            className="donate-button"
            style={{
              backgroundColor: 'var(--primary-400)',
              color: 'white',
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '0.6rem 1.25rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              boxShadow: '0 4px 6px rgba(69, 179, 229, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            Donate
          </Link>

          <Link 
            href="#volunteer"
            onClick={(e) => scrollToSection(e, '#volunteer')}
            className="volunteer-button"
            style={{
              border: '1.5px solid var(--primary-400)',
              color: 'var(--primary-600)',
              backgroundColor: 'transparent',
              fontWeight: 600,
              fontSize: '0.95rem',
              padding: '0.6rem 1.25rem',
              borderRadius: '0.5rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Volunteer
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="mobile-menu-toggle"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '48px',
            height: '48px',
            border: 'none',
            backgroundColor: isMobileMenuOpen ? 'var(--primary-50)' : 'transparent',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            zIndex: 101,
            padding: 0,
            '@media (min-width: 1024px)': {
              display: 'none'
            }
          }}
        >
          <span 
            className={`menu-bar ${isMobileMenuOpen ? 'open' : ''}`}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: isMobileMenuOpen ? 'var(--primary-600)' : 'var(--neutral-800)',
              margin: '2px 0',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transformOrigin: 'center',
              transform: isMobileMenuOpen ? 'translateY(6px) rotate(45deg)' : 'none'
            }}
          ></span>
          <span 
            className={`menu-bar ${isMobileMenuOpen ? 'open' : ''}`}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: isMobileMenuOpen ? 'var(--primary-600)' : 'var(--neutral-800)',
              margin: '2px 0',
              transition: 'opacity 0.25s ease',
              opacity: isMobileMenuOpen ? 0 : 1
            }}
          ></span>
          <span 
            className={`menu-bar ${isMobileMenuOpen ? 'open' : ''}`}
            style={{
              display: 'block',
              width: '24px',
              height: '2px',
              backgroundColor: isMobileMenuOpen ? 'var(--primary-600)' : 'var(--neutral-800)',
              margin: '2px 0',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              transformOrigin: 'center',
              transform: isMobileMenuOpen ? 'translateY(-6px) rotate(-45deg)' : 'none'
            }}
          ></span>
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              ref={mobileMenuRef}
              className="mobile-menu"
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                paddingTop: '5rem',
                backgroundColor: 'white',
                zIndex: 100,
                display: 'flex',
                flexDirection: 'column',
                overflowY: 'auto',
                '@media (min-width: 1024px)': {
                  display: 'none'
                }
              }}
            >
              <div 
                className="mobile-menu-container"
                style={{
                  padding: '1rem 1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Brand panel in mobile menu */}
                <div 
                  className="brand-panel"
                  style={{
                    backgroundColor: 'var(--primary-50)',
                    borderRadius: '1rem',
                    padding: '1.25rem',
                    marginBottom: '2rem'
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      height: '60px',
                      width: '180px',
                      marginBottom: '1rem'
                    }}
                  >
                    <Image
                      src="/images/sila-logo.png"
                      alt="SILA School"
                      fill
                      style={{
                        objectFit: 'contain',
                        objectPosition: 'left center'
                      }}
                    />
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-indie-flower)',
                      fontSize: '1.125rem',
                      color: 'var(--primary-700)',
                      marginBottom: '0.5rem'
                    }}
                  >
                    Empowering children through education
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--neutral-600)',
                      lineHeight: '1.5',
                      margin: 0
                    }}
                  >
                    Breaking the cycle of poverty through quality education for underprivileged children.
                  </p>
                </div>

                {/* Mobile navigation links */}
                <nav className="mobile-nav">
                  <ul
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: '0 0 2rem 0'
                    }}
                  >
                    {navLinks.map((link, i) => (
                      <motion.li
                        key={link.name}
                        custom={i}
                        variants={linkVariants}
                        style={{
                          marginBottom: '0.5rem'
                        }}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => scrollToSection(e, link.href)}
                          className={`mobile-nav-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '0.875rem 1rem',
                            fontSize: '1.125rem',
                            fontWeight: activeSection === link.href.replace('#', '') ? 600 : 500,
                            color: activeSection === link.href.replace('#', '') ? 'var(--primary-600)' : 'var(--neutral-700)',
                            textDecoration: 'none',
                            borderRadius: '0.75rem',
                            backgroundColor: activeSection === link.href.replace('#', '') ? 'var(--primary-50)' : 'transparent',
                            transition: 'all 0.2s ease'
                          }}
                        >
                          <div
                            style={{
                              width: '6px',
                              height: '6px',
                              borderRadius: '50%',
                              backgroundColor: activeSection === link.href.replace('#', '') ? 'var(--primary-500)' : 'var(--neutral-300)',
                              marginRight: '0.75rem',
                              transition: 'background-color 0.2s ease'
                            }}
                          ></div>
                          {link.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile CTA Buttons */}
                <div
                  className="mobile-cta"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    marginTop: 'auto'
                  }}
                >
                  <Link
                    href="#donate"
                    onClick={(e) => scrollToSection(e, '#donate')}
                    className="mobile-donate-button"
                    style={{
                      backgroundColor: 'var(--primary-400)',
                      color: 'white',
                      fontWeight: 600,
                      fontSize: '1rem',
                      padding: '1rem',
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      boxShadow: '0 4px 10px rgba(69, 179, 229, 0.2)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Donate Now
                  </Link>

                  <Link
                    href="#volunteer"
                    onClick={(e) => scrollToSection(e, '#volunteer')}
                    className="mobile-volunteer-button"
                    style={{
                      border: '2px solid var(--primary-400)',
                      color: 'var(--primary-600)',
                      backgroundColor: 'transparent',
                      fontWeight: 600,
                      fontSize: '1rem',
                      padding: '0.9rem',
                      borderRadius: '0.75rem',
                      textAlign: 'center',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Volunteer
                  </Link>
                </div>

                {/* Social links */}
                <div
                  className="social-links"
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '1rem',
                    marginTop: '2rem',
                    paddingTop: '1.5rem',
                    borderTop: '1px solid var(--neutral-100)'
                  }}
                >
                  {[
                    { name: 'Facebook', icon: 'facebook' },
                    { name: 'Twitter', icon: 'twitter' },
                    { name: 'Instagram', icon: 'instagram' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      aria-label={social.name}
                      className="social-icon"
                      style={{
                        width: '2.5rem',
                        height: '2.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--primary-50)',
                        color: 'var(--primary-500)',
                        borderRadius: '50%',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{
                          fill: 'currentColor'
                        }}
                      >
                        {social.icon === 'facebook' && (
                          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
                        )}
                        {social.icon === 'twitter' && (
                          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23Z" />
                        )}
                        {social.icon === 'instagram' && (
                          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.671a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
                        )}
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        /* Make sure desktop nav and cta buttons are displayed on larger screens */
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          .cta-buttons {
            display: flex !important;
          }
          .mobile-menu-toggle {
            display: none !important;
          }
        }

        /* Hover effects for links */
        .nav-link:hover {
          color: var(--primary-600);
        }
        
        .nav-link:hover .link-indicator {
          transform: scaleX(0.5);
        }
        
        .nav-link.active:hover .link-indicator {
          transform: scaleX(1);
        }

        /* Hover effects for buttons */
        .donate-button:hover {
          background-color: var(--primary-500);
          transform: translateY(-2px);
          box-shadow: 0 6px 10px rgba(69, 179, 229, 0.25);
        }
        
        .volunteer-button:hover {
          background-color: var(--primary-50);
          border-color: var(--primary-500);
          color: var(--primary-700);
          transform: translateY(-2px);
        }

        /* Mobile menu interactions */
        .mobile-nav-link:hover {
          background-color: var(--primary-50);
          color: var(--primary-600);
        }
        
        .mobile-donate-button:hover {
          background-color: var(--primary-500);
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(69, 179, 229, 0.3);
        }
        
        .mobile-volunteer-button:hover {
          background-color: var(--primary-50);
          border-color: var(--primary-500);
          color: var(--primary-700);
          transform: translateY(-2px);
        }
        
        .social-icon:hover {
          background-color: var(--primary-400);
          color: white;
          transform: translateY(-3px);
        }
        
        /* Animation for mobile menu toggle */
        .mobile-menu-toggle:hover {
          background-color: var(--primary-50);
        }
      `}</style>
    </header>
  );
};

export default Navbar;