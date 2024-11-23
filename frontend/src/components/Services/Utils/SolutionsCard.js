import React, { useState, useRef, useEffect } from "react";
import "../styles/SolutionsCard.css";

const SolutionsCard = ({ heading, content }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [direction, setDirection] = useState(""); // Track entry direction
    const cardRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Determine the direction of entry
                    if (entry.boundingClientRect.top > 0) {
                        setDirection("from-below");
                    } else {
                        setDirection("from-above");
                    }
                } else {
                    setIsVisible(false); // Reset effect when out of view
                }
            },
            { threshold: 0.1 } // Trigger when 10% of the component is visible
        );

        if (cardRef.current) {
            observer.observe(cardRef.current);
        }

        return () => {
            if (cardRef.current) {
                observer.unobserve(cardRef.current);
            }
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className={`m-3 SolutionsCard ${
                isVisible ? `visible ${direction}` : ""
            }`}
        >
            <h3>{heading}</h3>
            {/* Render HTML content safely */}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
        </div>
    );
};

export default SolutionsCard;
