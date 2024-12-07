import React, { useState, useRef, useEffect } from "react";
import "../../styles/OurMission.css";
const ourMissionSections = [
  {
    title: "Client-Centricity",
    content:
      "We place client needs and satisfaction at the forefront, striving to exceed expectations with trust and responsibility in every interaction.",
  },
  {
    title: "Innovation",
    content:
      "We embrace new technologies and innovative solutions, ensuring our clients stay ahead with cutting-edge, user-friendly results.",
  },
  {
    title: "Quality",
    content:
      "Our commitment to excellence drives us to uphold the highest standards in every aspect, from design to delivery, achieving superior outcomes.",
  },
  {
    title: "Partnership",
    content:
      "We foster long-term, collaborative partnerships with our clients, building strong, lasting relationships based on mutual growth and respect.",
  },
  {
    title: "Integrity",
    content:
      "Integrity is at our core, where we adhere to ethical principles and protect data with full compliance, ensuring client trust.",
  },
  {
    title: "Realistic Approach",
    content:
      "We deliver realistic, reliable solutions that meet client expectations while being grounded in our commitment to clear, honest deliverables.",
  },
];

const OurMission = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (activeIndex === index) {
          ref.style.maxHeight = ref.scrollHeight + "px";
          ref.style.opacity = "1";
        } else {
          ref.style.maxHeight = "0";
          ref.style.opacity = "0";
        }
      }
    });
  }, [activeIndex]);

  const toggleSection = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mission-margin">
      <img
        className="mission-img"
        src="./elements1.png"
        alt="Mission Elements"
      />
      <div className="mission-small-sec">
        <div className="d-flex  justify-content-start">
          <h1 className="mission-head my-4 mt-5">
            Our <span className="head-highlight">Mission</span> & Values
            <span className="head-highlight"></span>
          </h1>
        </div>

        <div className="row mb-4 mission-p d-flex justify-content-start text-align-start">
          Our mission focuses on client-first approach, prioritizing
          satisfaction, trust, and ethical responsibility. We embrace new technoligies 
          along with giving value to innovation and excellence. Long-term partnerships 
          & collaboration are key, fostering powerful client relationships. 
          Integrity is essential, with a commitment to ethical principles and data protection.
        </div>
      </div>

      <div className="row mb-5 pb-5 my-4">
        <div className="col-md-6 order-md-1 d-flex justify-content-center order-2">
          <div className="accordion-container mt-5">
            {ourMissionSections.map((section, index) => (
              <div key={index} className="accordion-section">
                <div
                  className="accordion-header"
                  onClick={() => toggleSection(index)}
                >
                  <h4>{section.title}</h4>
                  <span
                    className={`arrow-x ${activeIndex === index ? "open" : ""}`}
                  >
                    <svg
                      width="30px"
                      id="svg-dropdown"
                      height="30px"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z" />
                    </svg>
                  </span>
                </div>
                <div
                  className={`accordion-content ${
                    activeIndex === index ? "show" : ""
                  }`}
                  ref={(el) => (contentRefs.current[index] = el)}
                >
                  {section.content}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6 order-md-2 d-flex justify-content-center align-items-center  order-1">
          <img
            src="/Core Values.png"
            alt="Our Mission"
            className="img-fluid missionimg"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;
