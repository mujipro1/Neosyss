import React, { useEffect, useRef } from "react";
import "../styles/Frameworks.css";

const Frameworks = ({heading, subheading, frameworks}) => {
  

  const scrollRef = useRef(null);
  const animationFrameIdRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    const scroll = () => {
      scrollContainer.scrollLeft += 2; // Adjust speed here

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      }

      animationFrameIdRef.current = requestAnimationFrame(scroll);
    };

    const startScroll = () => {
      animationFrameIdRef.current = requestAnimationFrame(scroll);
    };

    const stopScroll = () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };

    // Start scrolling on mount
    startScroll();

    // Attach event listeners to stop/start scrolling on hover
    scrollContainer.addEventListener("mouseenter", stopScroll);
    scrollContainer.addEventListener("mouseleave", startScroll);

    // Cleanup on unmount
    return () => {
      stopScroll();
      scrollContainer.removeEventListener("mouseenter", stopScroll);
      scrollContainer.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  const frameworksdouble = [...frameworks, ...frameworks, ...frameworks, ...frameworks];

  return (
    <div className="idws-main-cont ">
      <h1 className="idws-head  mx-4 ">
        {heading}
      </h1>
      <div className="d-flex justify-content-end text-end px-5">
        <p className="text-ind">
          {subheading}
        </p>
      </div>
      <div className="scrolling-container-idws" ref={scrollRef}>
        {frameworksdouble.map((industry, index) => (
          <div key={index} className=" p-3">
            <div className="card d-flex flex-column">
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
              <div className="features mt-auto">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="feature-tag">
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Frameworks;
