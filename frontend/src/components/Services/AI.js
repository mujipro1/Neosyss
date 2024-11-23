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


const AI = () => {

    const aiDevelopmentData = SolutionsData.find(data => data.category === "AI Development");
    const aiDevelopmentForecastData = SolutionsData.find(data => data.category === "AI Development Forecast");
    
    const aiDevelopmentFAQ = FAQData.find(data => data.category === "AI Development");
 
 
  
    return (
        <div className="service-body">
        <SecondNavbar />        
        <div className=" pb-5">
        <ServiceHome
          image="/Services/Ai Development.png"
          mobImage="/Services/Ai Development 2.png"
        />
          <div className="row top-sec">
            <div className="col-lg-6">
              <div className="top-sec-head"><div>Artificial Intelligence Development</div></div>
            </div>
            <div className="col-lg-6">
              <div className="service-tag-top">{aiDevelopmentData.tagline}</div>
            </div>
          </div>
            <SpecializedSolutions data={aiDevelopmentData.solutions}
            heading="Specialized Solutions for Real-World Applications of AI" />

            <SpecializedSolutions data={aiDevelopmentForecastData.solutions}
            heading="Predictive and Forecast Models" />

            <TechWeUseSingle field={"Artificial Intelligence"}/>
            <DevelopmentProcess />
            <FAQ data={aiDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default AI;