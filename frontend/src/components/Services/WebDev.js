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


const WebDev = () => {

  const webDevelopmentData = SolutionsData.find(data => data.category === "Web Development");
  const webDevelopmentFAQ = FAQData.find(data => data.category === "AI Development");
  
    return (
        <div className="service-body">
        <SecondNavbar />        
        <div className=" pb-5">
        <ServiceHome
          image="/Services/Web development.png"
          mobImage="/Services/Web development 2.png"
        />

        
          <div className="row top-sec">
            <div className="col-lg-6">
              <div className="top-sec-head"><div>Website Development</div></div>
            </div>
            <div className="col-lg-6">
              <div className="service-tag-top">{webDevelopmentData.tagline}</div>
            </div>
          </div>


            <SpecializedSolutions data={webDevelopmentData.solutions} 
            heading="Specialized Solutions for Web Applications"/>
            <TechWeUseSingle field={"Web Platforms"}/>
            <DevelopmentProcess />
            <FAQ data={webDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default WebDev;