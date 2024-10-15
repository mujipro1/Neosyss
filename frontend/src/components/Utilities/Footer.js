import React from "react";
import "../../styles/Footer.css";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const scrollToSection = async (sectionId) => {
        const section = document.getElementById(sectionId);
      
        if (section) {
          const offsetTop = section.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        } else {
          await navigate('/');
      
          setTimeout(() => {
            const newSection = document.getElementById(sectionId);
            if (newSection) {
              const offsetTop = newSection.getBoundingClientRect().top + window.scrollY;
              window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
          }, 500);
        }
      };
      

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' })
  };
  
    
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

    return (
        <footer className="footer p-5">
            <div className="row footer-top px-5 pt-3">
                <div className="col-md-4">
                    <div className="d-flex align-items-center my-3 justify-content-center">
                        <div className="dot-footer"></div>
                        <div className=" mx-3 footer-head">Company</div>
                    </div>
                    <div className="footer-content d-flex align-items-center my-3 justify-content-center text-start flex-column">
                        <div>
                            <div className="list-item">About Us</div>
                            <div className="list-item" onClick={() => scrollToSection('mission')}>Mission and Values</div>
                            <div className="list-item" onClick={() => scrollToSection('technologies')}>Technologies</div>
                            <div className="list-item" onClick={() => handleNavigate('/policy/privacy')}>Privacy Policy</div>
                            <div className="list-item" onClick={() => handleNavigate('/policy/cookies')}>Cookies Policy</div>
                            <div className="list-item" onClick={() => handleNavigate('/policy/TAS')}>Terms and Conditions</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center my-3 justify-content-center">
                        <div className="dot-footer"></div>
                        <div className=" mx-3 footer-head">Services</div>
                    </div>
                    <div className="footer-content d-flex align-items-center my-3 mx-2 justify-content-center text-start flex-column">
                        <div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>AI & Machine Learning</div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>Mobile App Development</div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>Web Development</div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>GIS</div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>UI/UX</div>
                            <div className="list-item" onClick={() => scrollToSection('services')}>Custom Software</div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex align-items-center my-3 justify-content-center">
                        <div className="dot-footer"></div>
                        <div className=" mx-3 footer-head">Contact</div>
                    </div>
                    <div className="footer-content d-flex align-items-center my-3 justify-content-center text-start flex-column">
                        <div>
                            <div className="list-item">info@neosyss.com</div>
                            <div className="list-item">Call us at: </div>
                            <div className="list-item"> (415) 599 0916</div>
                        </div>
                    </div>
                </div>
            </div>

      {isDesktop && (
            <>

            <div className="row footer-bottom">
                <div className="col-md-4 text-start d-flex align-items-end justify-content-start">
                    <div>
                        <div className="text-light"> (415) 599 0916</div>
                        <div className="text-light">info@neosyss.com</div>
                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-end">
                    <div>
                        <img 
                            src={`${process.env.PUBLIC_URL}/logowhite.png`} 
                            className='img-fluid footer-logo' 
                            alt="Company logo" // Added alt text here
                        />
                       <div className="list-item-small">
                            © {new Date().getFullYear()} Neosyss. All Rights Reserved
                        </div>

                    </div>
                </div>
                <div className="col-md-4 d-flex align-items-end flex-column justify-content-end">
                    <div>
                        <div className="footer-icon-circle">
                            <a href="https://www.linkedin.com/company/neosyss/" target="_blank" rel="noreferrer"> {/* Added rel="noreferrer" */}
                                <FaLinkedinIn className="icon linkedin-icon" />
                            </a>
                        </div>
                        <div className="footer-icon-circle">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> {/* Added rel="noreferrer" */}
                                <FaInstagram className="icon instagram-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="list-item-small hoverClick" onClick={() => handleNavigate('/policy/TAS')}>
                        Terms and Conditions
                    </div>
                    <div className="d-flex flex-row">
                        <div className="list-item-small pt-1 hoverClick" onClick={() => handleNavigate('/policy/privacy')}>
                            Privacy Policy
                        </div>
                        <div className="mx-2">|</div>
                        <div className="list-item-small pt-1 hoverClick" onClick={() => handleNavigate('/policy/cookies')}>
                            Cookies Policy
                        </div>
                    </div>
                </div>
            </div>
            </>
            )}

      {isMobile && (
        <>
           <div className="row footer-bottom">
                <div className="col-md-4 mb-2 text-start d-flex align-items-center justify-content-center ">
                    <div>
                        <div className="text-center">info@neosyss.com</div>
                        <div className="text-center"> (415) 599 0916</div>
                    </div>
                </div>
               
                <div className="col-md-4 my-5 d-flex align-items-center flex-column justify-content-center">
                    <div>
                        <div className="footer-icon-circle">
                            <a href="https://www.linkedin.com/company/neosyss/" target="_blank" rel="noreferrer"> {/* Added rel="noreferrer" */}
                                <FaLinkedinIn className="icon linkedin-icon" />
                            </a>
                        </div>
                        <div className="footer-icon-circle">
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer"> {/* Added rel="noreferrer" */}
                                <FaInstagram className="icon instagram-icon" />
                            </a>
                        </div>
                    </div>
                    <div className="list-item-small hoverClick" onClick={() => handleNavigate('/policy/TAS')}>
                        Terms and Conditions
                    </div>
                    <div className="d-flex flex-row">
                        <div className="list-item-small pt-1 hoverClick" onClick={() => handleNavigate('/policy/privacy')}>
                            Privacy Policy
                        </div>
                        <div className="mx-2">|</div>
                        <div className="list-item-small pt-1 hoverClick" onClick={() => handleNavigate('/policy/cookies')}>
                            Cookies Policy
                        </div>
                    </div>

                </div>

                <div className="col-md-4 my-2 d-flex align-items-center">
                    <div>
                        <img 
                            src={`${process.env.PUBLIC_URL}/logowhite.png`} 
                            className='img-fluid footer-logo' 
                            alt="Company logo" // Added alt text here
                        />
                       <div className="mt-3 list-item-small">
                            © {new Date().getFullYear()} Neosyss. All Rights Reserved
                        </div>

                    </div>
                </div>
            </div>

        </>
      )}
            
        </footer>
    );
};

export default Footer;
