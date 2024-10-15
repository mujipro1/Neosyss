// LoadingSkeleton.js
import React from 'react';
import '../../styles/LoadingSkeleton.css';
import { useMediaQuery } from 'react-responsive';

const LoadingSkeleton = () => {
    
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <>
    {isDesktop && (

    <div className="loading-skeleton">
        <div className="row">
            <div className="col-md-8">
                <div className="skeleton pic-large"></div>
                <div className="skeleton heading-large-sk"></div>
                <div className="skeleton desc-large-sk"></div>
            </div>
            <div className="col-md-4">
                <div className="skeleton pic-small"></div>  
                <div className="skeleton heading-small-sk"></div>
                <div className="skeleton desc-small-sk"></div>
            </div>
        </div>

        <div className="d-flex justify-content-center">
            <div className="skeleton sk-button"></div>
        </div>
    </div>
    )}
    {isMobile && (
        <>
        <div className="loading-skeleton">
        <div className="row">
            <div className="col-md-4">
                <div className="skeleton pic-small"></div>  
                <div className="skeleton heading-small-sk"></div>
                <div className="skeleton desc-small-sk"></div>
            </div>
            <div className="col-md-4 mt-2">
                <div className="skeleton pic-small"></div>  
                <div className="skeleton heading-small-sk"></div>
                <div className="skeleton desc-small-sk"></div>
            </div>

        </div>
        <div className="d-flex justify-content-center">
            <div className="skeleton sk-button"></div>
        </div>
    </div>
        </>
    )}
    </>
  );
};

export default LoadingSkeleton;
