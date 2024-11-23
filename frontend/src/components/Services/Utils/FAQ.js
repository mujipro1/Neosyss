import React, { useState, useRef, useEffect } from "react";
import "../../../styles/OurMission.css";


const FAQ = ({data}) => {

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
        <>
        <div className="row my-5 py-5 spec-pad">
            <div className="techweuse-head pt-5 px-3">
                <h1><span className=" head-highlight">Frequently</span> Asked <span className=" head-highlight">Questions</span></h1>
            </div>
            <div className="col-md-6 order-md-1 d-flex justify-content-center align-items-center order-2">
            <div className="accordion-container mt-5">
                {data.map((section, index) => (
                <div key={index} className="accordion-section">
                    <div
                    className="accordion-header"
                    onClick={() => toggleSection(index)}
                    >
                    <h4>{section.question}</h4>
                    <span
                        className={`arrow ${activeIndex === index ? "open" : ""}`}
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
                    {section.answer}
                    </div>
                </div>
                ))}
            </div>
            </div>

            <div className="col-md-6 order-md-2 p-5  order-1">
            <img
                src="/Services/FAQs.png"
                alt="FAQs"
                className="img-fluid"
            />
            </div>
        </div>
        </>
    );
}

export default FAQ;