import React, { useState, useEffect, useRef } from 'react';
import ContactForm from '../HomePage/ContactForm';
import '../../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';

const MyNav = ({ devProcessRef = null }) => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isInDevProcess, setIsInDevProcess] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isExtendedNavbarHovered, setIsExtendedNavbarHovered] = useState(false);
  const topSectionRef = useRef(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const timeoutRef = useRef(null); // To manage the timeout
  const delayRef = useRef(null); // Reference for delay timer

  const navigate = useNavigate();

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  useEffect(() => {
    const topSectionNode = topSectionRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      setIsAtTop(entry.isIntersecting);
    });
    if (topSectionNode) observer.observe(topSectionNode);

    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (isInDevProcess) {
        // Immediately hide navbar if in dev process
        setIsNavbarVisible(false);
        return;
      }

      if (!isHovering && !isServicesHovered && !isExtendedNavbarHovered) {
        const currentScrollY = window.pageYOffset;
        setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY === 0);
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (topSectionNode) observer.unobserve(topSectionNode);
    };
  }, [isHovering, isInDevProcess, isServicesHovered, isExtendedNavbarHovered]);
  
  useEffect(() => {
    if (!devProcessRef) return; // If devProcessRef is null, skip this effect

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

  const handleExtendedNavbarMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsExtendedNavbarHovered(false);
      setIsServicesHovered(false);
    }, 500);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offsetTop = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div ref={topSectionRef}>
      <nav
        className={`navbar navbar-expand-lg ${isAtTop && !isServicesHovered && !isExtendedNavbarHovered ? 'navbar-transparent' : 'navbar-solid'} ${isNavbarVisible ? '' : 'navbar-hidden'}`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="container">
          <a className="navbar-brand" href="/home">
            <img
              src={isAtTop && !isServicesHovered && !isExtendedNavbarHovered ? '/logowhite.png' : '/logo.png'}
              alt="Logo"
              className="navlogo"
            />
          </a>

          <button className="navbar-toggler" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen}>
            <div className="toggle-btn">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </button>

          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-4">
              <li className="nav-item">
                <a className="nav-link" href="/home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('mission'); }}>Our Mission</a>
              </li>
              <li className="nav-item" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave} onClick={() => navigate('/services/')}
              ><a className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('technologies'); }}>Technologies</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => { scrollToSection('industries'); }}>Industries</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => navigate('/blogs/all/')}>Blogs</a>
              </li>
              <li className="nav-item">
                <a id="contact" className="nav-link" onClick={openPanel} style={{ cursor: 'pointer' }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Expanded Navbar Section */}
        {(isServicesHovered || isExtendedNavbarHovered) && (
          <div
            className={`expanded-navbar ${isServicesHovered || isExtendedNavbarHovered ? 'visible' : ''}`}
            onMouseEnter={handleExtendedNavbarMouseEnter}
            onMouseLeave={handleExtendedNavbarMouseLeave}
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
      </nav>

      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
    </div>
  );
};

export default MyNav;
