import React from "react";
import { useMediaQuery } from "react-responsive";  // Importing the necessary hook
import SolutionsCard from "./SolutionsCard";
import "../styles/SolutionsCard.css";

const SpecializedSolutions = ({ data, heading }) => {
  // Check for mobile/tablet and desktop screen sizes
  const isMobile = useMediaQuery({ maxWidth: 768 });  // For mobile or tablet
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // For desktop

  return (
    <div className="row mb-5 py-5 spec-pad blue-body">
      {isMobile && (
        <h3 className="px-5 spec-head">{heading}</h3>
      )}

      {/* Left Column - Solution Cards */}
      <div className={isMobile ? "col-12" : "col-md-4"}>
        {data.slice(0, Math.ceil(data.length / 2)).map((item, index) => (
          <SolutionsCard key={index} heading={item.heading} content={item.content} />
        ))}
      </div>

      {/* Center Text Heading - Only show on desktop */}
      {isDesktop && (
        <div className="col-md-4">
          <div className="sticky-column">
            <p>{heading}</p>
          </div>
        </div>
      )}

      {/* Right Column - Solution Cards */}
      <div className={isMobile ? "col-12" : "col-md-4"}>
        {data.slice(Math.ceil(data.length / 2)).map((item, index) => (
          <SolutionsCard key={index} heading={item.heading} content={item.content} />
        ))}
      </div>
    </div>
  );
};

export default SpecializedSolutions;