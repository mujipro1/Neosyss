import React, { useEffect, useRef } from "react";
import "../../styles/IndustriesWeServe.css";

function IndustriesWeServe() {
  const industries = [
    {
      title: "SMEs",
      description:
        "Tailored solutions for small and medium-sized enterprises to grow and thrive.",
      features: [
        "CRM",
        "Inventory Management",
        "Sales Tracking",
        "Marketing Automation",
      ],
    },
    {
      title: "Healthcare",
      description:
        "Innovative healthcare solutions that streamline patient care and medical processes.",
      features: ["Telemedicine", "Patient Management", "EHR", "Scheduling"],
    },
    {
      title: "Education",
      description:
        "Enhancing learning experiences through modern education technologies.",
      features: [
        "Learning Management",
        "Student Portals",
        "E-learning",
        "Analytics",
      ],
    },
    {
      title: "Hospitality",
      description:
        "Streamlining hotel and restaurant operations to enhance customer experience.",
      features: ["Booking Systems", "CRM", "Inventory Management", "Analytics"],
    },
    {
      title: "FinTech",
      description:
        "Secure and scalable solutions for the financial technology sector.",
      features: [
        "Payment Gateways",
        "Fraud Detection",
        "Loan Management",
        "Mobile Banking",
      ],
    },
  ];

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

  const industriesdouble = [...industries, ...industries];

  return (
    <div className="idws-main-cont my-5">
      <h1 className="idws-head  mx-4 ">
        <span className="head-highlight">Industries</span> we serve
        <span className="head-highlight">.</span>
      </h1>
      <div className="d-flex justify-content-end text-end px-5">
        <p className="text-ind">
          Leverage our extensive expertise across diverse sectors, empowering
          businesses in finance, healthcare, education, and more, to drive
          innovation and achieve their strategic goals with cutting-edge
          solutions.
        </p>
      </div>
      <div className="scrolling-container-idws" ref={scrollRef}>
        {industriesdouble.map((industry, index) => (
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

export default IndustriesWeServe;
