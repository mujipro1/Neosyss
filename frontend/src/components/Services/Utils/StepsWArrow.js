import React, { useState, useRef, useEffect } from "react";
import "../styles/SolutionsCard.css";
import "./StepsWArrow.css";

const StepsCard = ({ heading, content, image, index, isMobile }) => {
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
            className={`m-3 stepsWCard SolutionsCard ${isMobile ? " mobile" : ""} ${isVisible ? `visible ${direction}` : ""
                }`}
                style={{
                    background: "none",
                }}
        >
            <div className="card-image" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                height: "250px",
                borderRadius: "15px",
                marginBottom: "20px"
            }}
            ></div>
            <h3>{heading}</h3>
            {/* Render HTML content safely */}
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            <img src="/curved_arrow.svg" alt="arrow" className={"arrow " + (index % 2 == 0 ? "rtl" : "ltr")} />
        </div>
    );
};

const StepsWArrow = ({ cardsInfo, isMobile }) => {
    return (
        <div className="row mb-5 py-5 spec-pad">
            <div className="col-12 stepsWArrow-container">
                {
                    cardsInfo.map((item, index) => (
                        <>
                        <StepsCard isMobile={isMobile} index={index} key={index} image={item.image} heading={item.heading} content={item.content} />
                        </>
                    ))
                }
            </div>
        </div>
    );
};

export default StepsWArrow;