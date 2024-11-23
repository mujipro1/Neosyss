import React, { useState, useEffect, useRef } from "react";
import "../../../styles/DevelopmentProcess.css"; // Importing CSS file for styling
import { useMediaQuery } from "react-responsive";
import StepsWArrow from "./StepsWArrow";

const StepsWArrow2 = ({ data }) => {
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

    // const handleScroll = (e) => {
    //     const scrollPosition = e.target.scrollLeft;
    //     const sectionWidth = e.target.scrollWidth / sections.length;
    //     const index = Math.round(scrollPosition / sectionWidth);
    //     if (index !== currentIndex) {
    //         setCurrentIndex(index);
    //     }
    // };

    return (
        <div className="my-component">
            {isDesktop && (
                <div>
                    <div className="head-div d-flex justify-content-between mt-5 p-3">
                        <h1 className="m-5 p-3">
                            Our <span className="head-highlight">Development</span> Process
                        </h1>
                    </div>

                    <StepsWArrow cardsInfo={data} />

                </div>
            )}
            {isMobile && (
                <div>
                    <div className="head-div mt-5 p-3">
                        <h1 className="mx-4 dev-process-title-mobile">
                            Our <span className="head-highlight">Development</span> Process
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

                    <StepsWArrow isMobile={isMobile} cardsInfo={data} />
                    {/* Dots for Section Indicators */}
                </div>
            )}
        </div>
    );
};

export default StepsWArrow2;