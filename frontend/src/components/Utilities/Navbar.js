import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../HomePage/ContactForm';
import '../../styles/Navbar.css';

const MyNav = ({ isAtTopComp = false, isHomePage = false }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false); // New state for hover
  const topSectionRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  useEffect(() => {
    const topSectionNode = topSectionRef.current;
  
    const observer = new IntersectionObserver(([entry]) => {
      if (!isAtTopComp) {
        setIsAtTop(entry.isIntersecting);
      } else {
        setIsAtTop(false);
      }
    });
  
    if (topSectionNode) {
      observer.observe(topSectionNode);
    }
  
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (isAtTopComp) return; // Exit if at top component is true
    
      const currentScrollY = window.pageYOffset;
    
      if (!isHovering) {
        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
          setTimeout(() => {
            if (currentScrollY === window.pageYOffset) {
              setIsNavbarVisible(false);
            }
            if (window.pageYOffset === 0) {
              setIsNavbarVisible(true);
            }
          }, 1500);
        }
      }
      
      lastScrollY = currentScrollY;
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (topSectionNode) {
        observer.unobserve(topSectionNode);
      }
    };
  }, [isAtTopComp, isHovering]); // Add isHovering to dependencies

  // Handle navigation to sections
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY; // Get the top position of the section
      window.scrollTo({ top: offsetTop, behavior: 'smooth' }); 
    }
  };

  // Toggle the menu open/close
  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div ref={topSectionRef}>
      <nav 
        className={`navbar navbar-expand-lg ${isAtTop ? 'navbar-transparent' : 'navbar-solid'} ${isNavbarVisible ? '' : 'navbar-hidden'}`}
        onMouseEnter={() => setIsHovering(true)} // Set hovering to true on mouse enter
        onMouseLeave={() => setIsHovering(false)} // Set hovering to false on mouse leave
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img src={isAtTop ? '/logowhite.png' : '/logo.png'} alt="Logo" className="navlogo" />
          </a>

          <button className="navbar-toggler" type="button" onClick={handleToggle} aria-expanded={isMenuOpen}>
            <div className="toggle-btn">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
              {!isHomePage && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/home">Home</a>
                  </li>
                </>
              )}
            
              {isHomePage && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => scrollToSection('mission')}>Our Mission</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => scrollToSection('services')}>Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => scrollToSection('technologies')}>Technologies</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" onClick={() => scrollToSection('industries')}>Industries</a>
                  </li>
                </>
              )}
                <li className="nav-item">
                  <a id='contact' className="nav-link" onClick={openPanel} style={{ marginRight: "35px", cursor: 'pointer' }}>Contact</a>
                </li>
            </ul>
          </div>
        </div>
      </nav>

      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
    </div>
  );
};

export default MyNav;
