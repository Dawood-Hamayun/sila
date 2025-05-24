import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--primary-900)',
      color: 'white',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      position: 'relative'
    }}>
      {/* Decorative top edge */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        overflow: 'hidden',
        height: '5px'
      }}>
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          style={{
            position: 'relative',
            display: 'block',
            width: '100%',
            height: '5px',
            transform: 'rotate(180deg)'
          }}
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="white"
          ></path>
        </svg>
      </div>
      
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem'
        }}>
          {/* Column 1 - About */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1.5rem' }}>
              <div style={{ position: 'relative', marginRight: '0.75rem' }}>
                <div style={{
                  width: '3rem',
                  height: '3rem',
                  borderRadius: '0.75rem',
                  backgroundColor: 'var(--primary-500)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-outfit)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'white'
                  }}>S</span>
                </div>
                <div style={{
                  position: 'absolute',
                  bottom: '-0.25rem',
                  right: '-0.25rem',
                  width: '1.75rem',
                  height: '1.75rem',
                  borderRadius: '0.5rem',
                  backgroundColor: 'var(--secondary-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-indie-flower)',
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'white'
                  }}>edu</span>
                </div>
              </div>
              <div style={{
                fontFamily: 'var(--font-outfit)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'white'
              }}>
                SILA <span style={{ color: 'var(--primary-300)' }}>School</span>
              </div>
            </div>
            
            <p style={{ fontSize: '0.875rem', color: 'var(--primary-100)' }}>
              SILA School is committed to providing free quality education to underprivileged children, empowering them to break free from the cycle of poverty and build brighter futures.
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
                <a 
                  key={social}
                  href="#"
                  style={{
                    color: 'var(--primary-200)',
                    transition: 'color 0.3s ease'
                  }}
                  className="social-link"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Programs */}
          <div>
            <h3 style={{
              color: 'white',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 600,
              fontSize: '1.25rem',
              marginBottom: '1.25rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Our Programs
              <span style={{
                position: 'absolute',
                bottom: '-0.5rem',
                left: 0,
                width: '2.5rem',
                height: '0.25rem',
                backgroundColor: 'var(--secondary-500)',
                borderRadius: '0.125rem'
              }}></span>
            </h3>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                'Primary Education', 
                'After-School Support', 
                'Nutrition Program', 
                'Computer Literacy', 
                'Higher Education Scholarships',
                'Teacher Training'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href="#" 
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      color: 'var(--primary-200)',
                      fontSize: '0.875rem',
                      transition: 'color 0.3s ease'
                    }}
                    className="program-link"
                  >
                    <span style={{
                      display: 'inline-block',
                      width: '0.5rem',
                      height: '0.5rem',
                      backgroundColor: 'var(--primary-400)',
                      borderRadius: '50%',
                      marginRight: '0.5rem'
                    }}></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h3 style={{
              color: 'white',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 600,
              fontSize: '1.25rem',
              marginBottom: '1.25rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Contact Us
              <span style={{
                position: 'absolute',
                bottom: '-0.5rem',
                left: 0,
                width: '2.5rem',
                height: '0.25rem',
                backgroundColor: 'var(--secondary-500)',
                borderRadius: '0.125rem'
              }}></span>
            </h3>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex' }}>
                <span style={{ 
                  color: 'var(--primary-300)',
                  marginRight: '0.75rem',
                  marginTop: '0.25rem'
                }}>📍</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-100)' }}>
                  123 Education Lane, Learning District<br />
                  New Delhi, 110001<br />
                  India
                </span>
              </li>
              
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  color: 'var(--primary-300)',
                  marginRight: '0.75rem'
                }}>📞</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-100)' }}>
                  +91 11 2345 6789
                </span>
              </li>
              
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ 
                  color: 'var(--primary-300)',
                  marginRight: '0.75rem'
                }}>✉️</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-100)' }}>
                  info@silaschool.org
                </span>
              </li>
              
              <li style={{ display: 'flex' }}>
                <span style={{ 
                  color: 'var(--primary-300)',
                  marginRight: '0.75rem',
                  marginTop: '0.25rem'
                }}>🕒</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--primary-100)' }}>
                  Monday-Friday: 8:00 AM - 4:00 PM<br />
                  Saturday: 9:00 AM - 12:00 PM<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 style={{
              color: 'white',
              fontFamily: 'var(--font-outfit)',
              fontWeight: 600,
              fontSize: '1.25rem',
              marginBottom: '1.25rem',
              position: 'relative',
              display: 'inline-block'
            }}>
              Stay Connected
              <span style={{
                position: 'absolute',
                bottom: '-0.5rem',
                left: 0,
                width: '2.5rem',
                height: '0.25rem',
                backgroundColor: 'var(--secondary-500)',
                borderRadius: '0.125rem'
              }}></span>
            </h3>
            
            <p style={{ fontSize: '0.875rem', color: 'var(--primary-100)', marginBottom: '1rem' }}>
              Subscribe to our newsletter to receive updates on our programs, success stories, and ways you can help.
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid var(--primary-700)',
                    borderRadius: '0.5rem',
                    color: 'white',
                    fontSize: '0.875rem'
                  }}
                  required
                />
              </div>
              
              <button 
                type="submit" 
                style={{
                  backgroundColor: 'var(--secondary-500)',
                  color: 'white',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
              >
                Subscribe
              </button>
            </form>
            
            <div style={{
              marginTop: '1.5rem',
              padding: '1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              borderRadius: '0.5rem',
              fontSize: '0.75rem'
            }}>
              <p style={{ color: 'var(--secondary-300)', marginBottom: '0.25rem', fontWeight: 500 }}>
                Tax Benefit Notice:
              </p>
              <p style={{ color: 'var(--primary-200)' }}>
                All donations to SILA School are tax-deductible under Section 80G of the Income Tax Act.
              </p>
            </div>
          </div>
        </div>

        <div style={{
          marginTop: '3.5rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--primary-800)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center',
            marginBottom: '0.75rem' 
          }}>
            <span style={{ 
              width: '1.5rem',
              height: '1.5rem',
              backgroundColor: 'var(--primary-700)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '0.5rem',
              fontSize: '0.75rem',
              color: 'var(--primary-300)'
            }}>✓</span>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary-300)' }}>
              Government Recognized NGO
            </span>
          </div>
          
          <p style={{ fontSize: '0.875rem', color: 'var(--primary-500)', marginBottom: '1.5rem' }}>
            &copy; {currentYear} SILA School. All rights reserved.
          </p>
          
          <div>
            <ul style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem' }}>
              <li>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-400)', transition: 'color 0.3s ease' }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-400)', transition: 'color 0.3s ease' }}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-400)', transition: 'color 0.3s ease' }}>
                  Child Protection Policy
                </a>
              </li>
              <li>
                <a href="#" style={{ fontSize: '0.75rem', color: 'var(--primary-400)', transition: 'color 0.3s ease' }}>
                  Financial Transparency
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Donation reminder floating button */}
      <div style={{
        position: 'fixed',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 50
      }} className="donate-button-container">
        <button 
          style={{
            width: '3.5rem',
            height: '3.5rem',
            backgroundColor: 'var(--secondary-500)',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(255, 134, 6, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, background-color 0.3s ease'
          }}
          aria-label="Donate Now"
        >
          <span style={{ fontSize: '1.5rem' }}>❤️</span>
        </button>
        
        <div style={{
          position: 'absolute',
          bottom: '100%',
          right: 0,
          width: '12rem',
          backgroundColor: 'white',
          borderRadius: '0.5rem',
          padding: '0.75rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          marginBottom: '0.5rem',
          opacity: 0,
          visibility: 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease',
          transform: 'translateY(0.5rem)'
        }} className="donate-tooltip">
          <p style={{ 
            fontWeight: 500, 
            fontSize: '0.875rem', 
            color: 'var(--neutral-800)',
            marginBottom: '0.25rem'
          }}>Support our mission</p>
          <p style={{ fontSize: '0.75rem', color: 'var(--neutral-600)' }}>
            Your donation can help educate a child for a year!
          </p>
        </div>
      </div>
      
      {/* Media queries and interactive styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
        
        .social-link:hover {
          color: var(--secondary-300);
        }
        
        .program-link:hover {
          color: var(--secondary-300);
        }
        
        .donate-button-container:hover .donate-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .donate-button-container:hover button {
          transform: scale(1.1);
          background-color: var(--secondary-600);
        }
        
        input:focus {
          outline: none;
          border-color: var(--secondary-400);
        }
        
        button[type="submit"]:hover {
          background-color: var(--secondary-600);
        }
      `}</style>
    </footer>
  );
};

export default Footer;