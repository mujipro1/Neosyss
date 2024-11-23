import React from 'react';
import { useMediaQuery } from 'react-responsive';
import '../styles/ServiceHome.css';

const ServiceHome = ({ image, mobImage }) => {

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
    {isDesktop && (
      <div className="service-home">
        <div className="service-home-image">
          <img src={image} alt="Service Home" />
          <div className="service-home-overlay">
          </div>
        </div>
      </div>
    )}
    {isMobile && (
      <>
      <div className="service-home">
        <div className="service-home-image">
          <img src={mobImage} alt="Service Home" />
          <div className="service-home-overlay-mob">
          </div>
        </div>
      </div>
      </>
    )}
    </>
  );
};

export default ServiceHome;
