import React, { useState, useEffect, useRef } from "react";
import "../../styles/DevelopmentProcess.css"; // Importing CSS file for styling
import { useMediaQuery } from "react-responsive";

const sections = [
  {
    id: "understanding",
    title: "Understanding",
    content:
      "As a company, we believe in diving deep in and taking our time to understand your goals, vision, and the challenges you face. We encourage open communication to ensure your vision is accurately captured. We believe in collecting detailed information about what you want to get done so we don’t miss any minor details.",
    image: "./DevProcess/1.jpeg",
  },
  {
    id: "research",
    title: "Research",
    content:
      "We believe in thorough research to identify what will make you stand out, which includes studying user behaviors, industry trends, and technological assessment. We want to make sure that the technologies we use are the best fit for your project.",
    image: "./DevProcess/2.jpeg",
  },
  {
    id: "conceptualization",
    title: "Conceptualization",
    content:
      "Our skilled and highly qualified team sits together and collaborates to make your enlightened vision more polished and add value to it. From creating interactive prototypes to mimicking your vision in the form of the software’s functionality and user experience.",
    image: "./DevProcess/3.jpeg",
  },
  {
    id: "design-planning",
    title: "Design & Planning",
    content:
      "We want you to be involved every step of the way, from design planning to implementation. We believe in comprehensive project plans and ensuring milestones and efficient delivery with a major focus on a user-centric design approach creating intuitive and visually appealing interfaces that stand out and leave an impression on the users.",
    image: "./DevProcess/4.jpeg",
  },
  {
    id: "build-develop",
    title: "Build and Develop",
    content:
      "We don’t just build end-to-end solutions for you; we also ensure that they meet the highest standards of quality, using complete agile processes.",
    image: "./DevProcess/5.jpeg",
  },
  {
    id: "validate-refine",
    title: "Validate and Refine",
    content:
      "Delivering the product to clients isn’t where we stop. Our quality assurance team meticulously validates each process, performing extensive QA and software testing at every user touchpoint to refine the product before final execution.",
    image: "./DevProcess/6.jpeg",
  },
  {
    id: "launch-deploy",
    title: "Launch and Deploy",
    content:
      "What matters most is the successful final deployment. Our dedicated team ensures your product goes live without any bugs, providing complete post-launch assistance as well.",
    image: "./DevProcess/7.jpeg",
  },
  {
    id: "maintenance-growth",
    title: "Maintenance and Growth",
    content:
      "We don’t just believe in delivering; we believe in providing ongoing, comprehensive support after deployment to ensure your product runs smoothly and continues to grow.",
    image: "/DevProcess/8.jpeg",
  },
];

const DevelopmentProcess = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const [currentIndex, setCurrentIndex] = useState(0); // Track current visible image index
  const sectionRefs = useRef([]); // Store references to each section for intersection observer

  useEffect(() => {
    if (isDesktop) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const index = sectionRefs.current.indexOf(entry.target);
              if (index !== currentIndex) {
                setCurrentIndex(index); // Update the visible image based on scroll position
              }
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the section is visible
        }
      );

      // Observe all sections for visibility
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      // Cleanup observer on unmount
      return () => {
        observer.disconnect(); // Disconnect the observer on unmount
      };
    }
  }, [isDesktop, currentIndex]); // Add currentIndex as a dependency to avoid stale closures

  const handleScroll = (e) => {
    const scrollPosition = e.target.scrollLeft;
    const sectionWidth = e.target.scrollWidth / sections.length;
    const index = Math.round(scrollPosition / sectionWidth);
    if (index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  return (
    <div className="my-component">
      {isDesktop && (
        <div>
          <div className="head-div d-flex justify-content-between mt-5 p-3">
            <h1 className="m-5 p-3">
              Our <span className="head-highlight">Development</span> Process.
            </h1>
          </div>

          <div className="container-fluid dev-cont d-flex">
            {/* Left Section */}
            <div className="left-section px-4 pt-5">
              {sections.map((section, index) => (
                <div
                  key={section.id}
                  className="section d-flex flex-column px-5 mx-4 justify-content-center"
                  ref={(el) => (sectionRefs.current[index] = el)}
                >
                  {/* number / total */}
                  <div className="section-number my-2">
                    {index + 1} / {sections.length}
                  </div>
                  <h2 className="my-2 dev-head mb-4">{section.title}</h2>
                  <p className="text-justify">{section.content}</p>
                </div>
              ))}
            </div>

            {/* Right Section */}
            <div className="right-section px-5">
              <div className="image-container">
                {sections.map((section, index) => (
                  <img
                    key={section.image}
                    src={section.image}
                    alt={section.title}
                    className={`section-image ${index === currentIndex ? "active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div>
          <div className="head-div mt-5 p-3">
            <h1 className="mx-4 dev-process-title-mobile">
              Our <span className="head-highlight">Development</span> Process.
            </h1>
            <div className="text-start px-4 mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                id="arrow-svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M19.5,0H10.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h8.379L.439,21.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439L21,5.121V13.5c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V4.5c0-2.481-2.019-4.5-4.5-4.5Z" />
              </svg>
            </div>
          </div>
          <div className="horizontal-scroll-container" onScroll={handleScroll}>
            {sections.map((section) => (
              <div key={section.id} className="mobile-section">
                <img
                  src={section.image}
                  alt={section.title}
                  className="mobile-image"
                />
                <h2 className="mobile-title">{section.title}</h2>
                <p className="mobile-content">{section.content}</p>
              </div>
            ))}
          </div>

          {/* Dots for Section Indicators */}
          <div className="dots-container">
            {sections.map((_, index) => (
              <span
                key={index}
                className={`dotdot ${index === currentIndex ? "active" : ""}`}
              ></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DevelopmentProcess;
