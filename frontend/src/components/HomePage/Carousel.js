import React, { useState, useEffect, useRef } from 'react';
import ContactForm from './ContactForm';
import '../../styles/Carousel.css';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [buttonPos, setButtonPos] = useState({ top: '50%', left: '50%' });
  const initialPos = { top: '20%', left: '40%' };

  const boundaryRef = useRef(null); // Reference to boundary container
  const buttonRef = useRef(null); // Reference to button

  const openPanel = () => setIsPanelOpen(true);
  const closePanel = () => setIsPanelOpen(false);

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('prev');
    setPrevIndex(currentIndex);
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection('next');
    setPrevIndex(currentIndex);
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Reset animation after it's done
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Handle mouse movement inside the boundary
  useEffect(() => {
    const handleMouseMove = (event) => {
      const boundary = boundaryRef.current.getBoundingClientRect();
      const button = buttonRef.current.getBoundingClientRect();
      const circleRadius = 140; // 140px diameter / 2

      // Calculate the distance from the mouse to the center of the boundary
      const distance = Math.hypot(
        event.clientX - (boundary.left + boundary.width / 2),
        event.clientY - (boundary.top + boundary.height / 2)
      );

      // If the mouse is inside the 140px diameter, move the button
      if (distance <= circleRadius) {
        setIsFollowing(true);
        setButtonPos({
          top: `${event.clientY - boundary.top - button.height / 2}px`,
          left: `${event.clientX - boundary.left - button.width / 2}px`,
        });
      } else {
        // If the mouse leaves the boundary, reset the button position
        setIsFollowing(false);
        setButtonPos(initialPos); // Reset to initial position
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [initialPos]);


  return (
    <>
      <div className="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex
                  ? direction === 'next'
                    ? 'slide-in-right'
                    : 'slide-in-left'
                  : index === prevIndex
                  ? direction === 'next'
                    ? 'slide-out-left'
                    : 'slide-out-right'
                  : ''
              }`}
            >
              <div className="carousel-content">
                {image.type === 'video' ? (
                  <video autoPlay loop muted>
                    <source src={image.image} type="video/webm" />
                  </video>
                ) : (
                  <img src={image.image} alt={`Slide ${index + 1}`} />
                )}
                <div className="carousel-blur"></div>
                <div className="carousel-text">
                  <h1>{image.headline}</h1>
                  <h2>{image.subHeadline}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <div className="arrow left-arrow" onClick={goToPrevious}>
          ❮
        </div>

        {/* Right Arrow */}
        <div className="arrow right-arrow" onClick={goToNext}>
          ❯
        </div>

        {/* Floating Contact Button */}
        <div
          className="boundary"
          ref={boundaryRef}
       
        >
          <div
            ref={buttonRef}
            onClick={openPanel}
            className={`floating-contact-button ${isFollowing ? 'following' : ''}`}
            style={{
              top: buttonPos.top,
              left: buttonPos.left,
            }}
          >
            Let's talk!
          </div>
        </div>
      </div>

      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
    </>
  );
};

export default Carousel;
