import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../HomePage/ContactForm'; // Contact form component
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const SecondNavbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // Track navbar visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Track if the menu is open
  const [isHovering, setIsHovering] = useState(false); // Track hover state
  const [isPanelOpen, setIsPanelOpen] = useState(false); // Track if contact form panel is open
  const timeoutRef = useRef(null); // Reference to manage the timeout

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (!isHovering) {
        const currentScrollY = window.pageYOffset;

        // Hide navbar on scroll down, show on scroll up
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
    };
  }, [isHovering]);

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
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setTimeout(() => {
      if (!isHovering) {
        setIsNavbarVisible(false);
      }
    }, 150);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-solid ${isNavbarVisible ? '' : 'navbar-hidden'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => {
        setIsHovering(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current); // Reset timeout when hover ends
        }
        // Ensure navbar stays visible briefly after hover ends
        timeoutRef.current = setTimeout(() => {
          if (!isHovering) {
            setIsNavbarVisible(false);
          }
        }, 1500);
      }}
    >
      <div className="container">
        <a className="navbar-brand" href="/home">
          <img src="/logo.png" alt="Logo" className="navlogo" />
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
      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
    </nav>
  );
};

export default SecondNavbar;
