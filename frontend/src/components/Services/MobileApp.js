import React, { useState, useRef, useEffect } from "react";
import FAQ from "./Utils/FAQ";
import SpecializedSolutions from "./Utils/SpecializedSolutions";
import SecondNavbar from "../Utilities/SecondNavbar";
import Footer from "../Utilities/Footer";
import TechWeUseSingle from "./Utils/TechWeUseSingle";
import SolutionsData from "../data/SolutionsData";
import FAQData from "../data/FAQData";
import ServiceHome from "./Utils/ServiceHome";
import DevelopmentProcess from "../HomePage/DevelopmentProcess";


const MobileApp = () => {

  const mobileDevelopmentData = SolutionsData.find(data => data.category === "Mobile App Development");
    const mobileDevelopmentFAQ = FAQData.find(data => data.category === "AI Development");
  
    return (
        <div className="service-body">
        <SecondNavbar />        
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
            <TechWeUseSingle field={"Mobile Apps"}/>
            <DevelopmentProcess />
            <FAQ data={mobileDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default MobileApp;