import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../HomePage/ContactForm'; // Contact form component
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const MyNav = ({ devProcessRef }) => {
  const [isAtTop, setIsAtTop] = useState(true); // Track if at the top of the page
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  const [isInDevProcess, setIsInDevProcess] = useState(false); // Track if "dev-process" is in view
  const topSectionRef = useRef(null); // Reference to top section for intersection observer
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Track if contact form panel is open
  const timeoutRef = useRef(null); // Reference for timeout

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    const topSectionNode = topSectionRef.current;

    // Observer for detecting if at the top of the page
    const observer = new IntersectionObserver(([entry]) => {
      setIsAtTop(entry.isIntersecting);
    });
    if (topSectionNode) {
      observer.observe(topSectionNode);
    }

    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (isInDevProcess) {
        setIsNavbarVisible(false); // Navbar always hidden in dev-process
        return;
      }

      if (!isHovering) {
        const currentScrollY = window.pageYOffset;

        // If scrolling down, hide the navbar
        if (currentScrollY > lastScrollY) {
          setIsNavbarVisible(false);
        } else if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
        }

        // Clear any existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Hide the navbar after a timeout if not hovering
        timeoutRef.current = setTimeout(() => {
          if (!isHovering && currentScrollY === window.pageYOffset) {
            setIsNavbarVisible(false);
          }
          if (window.pageYOffset === 0) {
            setIsNavbarVisible(true);
          }
        }, 1500);
      } else {
        setIsNavbarVisible(true); // Ensure navbar stays visible while hovering
      }

      lastScrollY = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (topSectionNode) {
        observer.unobserve(topSectionNode);
      }
    };
  }, [isHovering, isInDevProcess]);

  useEffect(() => {
    // Observer for detecting if "dev-process" section is in view
    const devProcessNode = devProcessRef.current;

    if (devProcessNode) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInDevProcess(entry.isIntersecting),
        { threshold: 0.1 } // Adjust threshold as needed
      );

      observer.observe(devProcessNode);

      return () => {
        observer.unobserve(devProcessNode);
      };
    }
  }, [devProcessRef]);

  // Scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Toggle the menu visibility
  const handleToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Reset hover state and allow scroll behavior after clicking a link
  const handleLinkClick = () => {
    setIsHovering(false);
    setTimeout(() => {
      if (!isHovering) {
        setIsNavbarVisible(false);
      }
    }, 150);
  };

  return (
    <div ref={topSectionRef}>
      <nav
        className={`navbar navbar-expand-lg ${isAtTop ? 'navbar-transparent' : 'navbar-solid'} ${isNavbarVisible ? '' : 'navbar-hidden'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
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
              <li className="nav-item">
                <a className="nav-link" href="/home" onClick={handleLinkClick}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('mission'); handleLinkClick(); }}>Our Mission</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('services'); handleLinkClick(); }}>Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('technologies'); handleLinkClick(); }}>Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('industries'); handleLinkClick(); }}>Industries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { navigate('/blogs/all/') }}>Blogs</a>
              </li>
              <li className="nav-item">
                <a id="contact" className="nav-link" onClick={() => { openPanel(); handleLinkClick(); }} style={{ cursor: 'pointer' }}>Contact</a>
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
