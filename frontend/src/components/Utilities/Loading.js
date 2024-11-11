import React from 'react';
import '../../styles/Loading.css'; // Custom CSS for centering the logo
import { useMediaQuery } from "react-responsive";


const Loading = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
    {isDesktop && (
      <div className="loading-container">
        <img src="/LoadingPage.png" alt="Logo" className="loading-logo" />
      </div>
    )
  }
    {isMobile && (
      <div className="loading-container">
        <img src="/mobile-loading.jpg" alt="Logo" className="loading-logo" />
      </div>
    )}
  </>
  );
};

export default Loading;
