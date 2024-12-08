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
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isExtendedNavbarHovered, setIsExtendedNavbarHovered] = useState(false);
  const delayRef = useRef(null); // Reference for delay timer
  
  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  const navigate = useNavigate();

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (!isHovering && !isServicesHovered && !isExtendedNavbarHovered) {
        const currentScrollY = window.pageYOffset;
        setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY === 0); // Ensure navbar stays visible at top
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHovering, isServicesHovered, isExtendedNavbarHovered]);

  // Scroll to a section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  // Handle hover events for "Services" link
  const handleServicesMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    clearTimeout(delayRef.current);
    delayRef.current = setTimeout(() => {
      setIsServicesHovered(true);
    }, 100); // 0.2s delay before showing the extended navbar
  };

  const handleServicesMouseLeave = () => {
    clearTimeout(delayRef.current);
    timeoutRef.current = setTimeout(() => {
      if (!isExtendedNavbarHovered) {
        setIsServicesHovered(false);
      }
    }, 300); // Keep the existing 0.5s delay for hiding
  };

  // Handle hover events for the extended navbar
  const handleExtendedNavbarMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsExtendedNavbarHovered(true);
  };

  const handleMouseLeaveExpandedNavbar = (event) => {
    // Check if the mouse is leaving the expanded navbar area
    if (!event.relatedTarget || !event.relatedTarget.closest('.expanded-navbar')) {
      setIsExtendedNavbarHovered(false);  // Hide the extended navbar
      setIsServicesHovered(false);        // Hide the services hover state
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
            <li className="nav-item" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave} onClick={() => navigate('/services/')}>
              <a className="nav-link">Services</a>
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

      {/* Expanded Navbar Section */}
      {(isServicesHovered || isExtendedNavbarHovered) && (
        <div
          className={`expanded-navbar ${isServicesHovered || isExtendedNavbarHovered ? 'visible' : ''}`}
          onMouseEnter={handleExtendedNavbarMouseEnter}
          onMouseLeave={handleMouseLeaveExpandedNavbar} // Updated handler
        >
          <div className="expanded-content container">
            <div className="extended-column">
              <h3 style={{ color: 'var(--main)' }}>Our Services</h3>
              <p style={{ color: 'black' }}>
                Explore our wide range of services designed to meet your needs.
              </p>
              <button className="learn-more-btn" onClick={() => navigate('/services')}>
                Learn More<span style={{ marginLeft: '10px' }}>→</span>
              </button>
            </div>
            <div className="extended-column extended-column-1 pad-s">
              <ul>
                <li><a href="/services/AI"><span className="right-arrow-ex">→</span>  Artificial Intelligence</a></li>
                <li><a href="/services/WebDev"><span className="right-arrow-ex">→</span>  Website Development</a></li>
                <li><a href="/services/MobileApp"><span className="right-arrow-ex">→</span>  Mobile Applications</a></li>
              </ul>
            </div>
            <div className="extended-column extended-column-1">
              <ul>
                <li><a href="/services/GIS"><span className="right-arrow-ex">→</span>  GIS/Cartography</a></li>
                <li><a href="/services/Blockchain"><span className="right-arrow-ex">→</span>  Blockchain Solutions</a></li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
    </nav>
  );
};

export default SecondNavbar;
