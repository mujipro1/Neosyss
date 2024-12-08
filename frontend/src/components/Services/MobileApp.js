import React, { useState, useRef, useEffect } from "react";
import FAQ from "./Utils/FAQ";
import SpecializedSolutions from "./Utils/SpecializedSolutions";
import MyNav from "../Utilities/Navbar";
import Footer from "../Utilities/Footer";
import TechWeUseSingle from "./Utils/TechWeUseSingle";
import SolutionsData from "../data/SolutionsData";
import FAQData from "../data/FAQData";
import ServiceHome from "./Utils/ServiceHome";
import devProcessData from "../data/ServicesSteps";
import Frameworks from "./Utils/Frameworks";
import frameworksData from "../data/FrameworksData";
import Revolve from "./Utils/Revolve";
import ContactUsCard from "../Utilities/ContactUsCard";


const MobileApp = () => {

  const mobileDevelopmentData = SolutionsData.find(data => data.category === "Mobile App Development");
    const mobileDevelopmentFAQ = FAQData.find(data => data.category === "Mobile");
  
    const tagline = "Our mobile app development process includes ideation, design, development, testing, and deployment, with a focus on user-centered design and seamless integration across platforms."
    const MobileFrData = frameworksData.find(data => data.category === "Mobile");
    const mobileDevPData = devProcessData.find(data => data.category === "Mobile App");

    return (
        <div className="service-body">
        <MyNav />        
        <div className=" pb-5">
        <ServiceHome
          image="/Services/Mobile App development.png"
          mobImage="/Services/Mobile App development 2.png"
        />

          <div className="row top-sec">
            <div className="col-lg-6">
              <div className="top-sec-head"><div>Mobile Applications</div></div>
            </div>
            <div className="col-lg-6">
              <div className="service-tag-top">{mobileDevelopmentData.tagline}</div>
            </div>
          </div>

            <SpecializedSolutions data={mobileDevelopmentData.solutions}
            heading="Specialized Solutions for Mobile Applications" />
            <TechWeUseSingle field={"Mobile Apps"} />
          <Revolve data={mobileDevPData.data} tagline={tagline} />
            
            <Frameworks heading={"Technology Stack"} 
            subheading={"Neosyss leverages advanced mobile development tools and frameworks to ensure reliability, usability, and flexibility in all mobile applications. Our cross-platform approach enables cost-effective development with a focus on performance."}
            frameworks={MobileFrData.frameworks}/>
            
            <FAQ data={mobileDevelopmentFAQ.data}/>
        </div>
        <ContactUsCard/>
        <Footer />
        </div>
    );
}

export default MobileApp;