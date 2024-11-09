import React, { useLayoutEffect, useRef } from 'react';
import '../../styles/ScrollingWords.css'; // You can add your custom styles here

const ScrollingWords = () => {
  const wordList = [
    'AI & Machine Learning',
    'Mobile App Development',
    'Web Development',
    'GIS',
    'UI/UX',
    'Custom Software',
  ];

  const scrollRef = useRef(null);

  useLayoutEffect(() => {
    const scrollContainer = scrollRef.current;
    let animationFrameId;

    const scroll = () => {
      scrollContainer.scrollLeft += 2; // Adjust speed here

      // Reset scroll position to create a seamless loop
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameId); // Cleanup on unmount
    };
  }, []);

  // Duplicate the array to make it loop seamlessly
  const doubledWords = [...wordList, ...wordList];

  return (
    <div className="scrolling-container" ref={scrollRef}>
      {doubledWords.map((word, index) => (
        <div key={index} className="word-block">
          {word}
          <span className="dot">•</span>
        </div>
      ))}
    </div>
  );
};

export default ScrollingWords;
