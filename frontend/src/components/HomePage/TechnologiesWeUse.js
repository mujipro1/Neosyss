import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../styles/TechnologiesWeUse.css";
import IconButton from "../Utilities/IconButton";
import TechWeUseData from "../data/TechWeUseData";

const TechnologiesWeUse = () => {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState("Mobile Apps");

  const isMobile = useMediaQuery({ maxWidth: 900 });
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <div className="my-component">
      <div className="head-div-services mt-5 px-5 pt-5">
        <h1 className="mt-5">
          <span className="head-highlight">Technologies</span> we use
        </h1>
      </div>
      <p className="tech-para pb-5 pt-3 px-5">
        Equipped to meet your needs with scalable web applications, robust
        mobile apps, or cutting-edge AI solutions, our developers possess the
        skills and experience to bring your vision to life. With expertise in
        multiple technologies, we're confident in our ability to deliver
        exceptional results that exceed your expectations.
      </p>

      {isDesktop && (
        <div className="row w-100 my-5 px-5">
          <div className="col-md-4 py-4 borderA">
            {Object.keys(TechWeUseData).map((option) => (
              <div
                key={option}
                className={`option ${
                  selectedOption === option
                    ? "leftBarOption active"
                    : "leftBarOption"
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Right Sidebar - TechWeUseData */}
          <div className="col-md-8 rightSideBar p-5 borderB">
            {Object.keys(TechWeUseData[selectedOption].subOptions).map(
              (subHeading) => (
                <div key={subHeading}>
                  <h4>{subHeading}</h4>
                  <div className="mb-4">
                    {TechWeUseData[selectedOption].subOptions[subHeading].map(
                      (tech) => (
                        <IconButton
                          text={tech.name}
                          iconClass={tech.iconClass}
                          key={`${subHeading}-${tech.name}`} // Use a unique key combining subHeading and tech.name
                        />
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}

      {isMobile && (
        <div className="mobile-view">
          {/* Horizontal Scrollable Section Names */}
          <div className="horizontal-scrollbar">
            {Object.keys(TechWeUseData).map((option) => (
              <div
                key={option}
                className={`option-horizontal ${
                  selectedOption === option ? "active-horizontal" : ""
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Bottom Div TechWeUseData */}
          <div className="content-mobile p-4">
            {Object.keys(TechWeUseData[selectedOption].subOptions).map(
              (subHeading) => (
                <div key={subHeading}>
                  <h4>{subHeading}</h4>
                  <div className="mb-4">
                    {TechWeUseData[selectedOption].subOptions[subHeading].map(
                      (tech) => (
                        <IconButton
                          text={tech.name}
                          iconClass={tech.iconClass}
                          key={`${subHeading}-${tech.name}`} // Unique key for each technology
                        />
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologiesWeUse;
