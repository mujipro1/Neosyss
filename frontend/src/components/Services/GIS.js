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


const GIS = () => {

  const GISdevData = SolutionsData.find(data => data.category === "GIS");
    const GISFAQData = FAQData.find(data => data.category === "AI Development");
  
    return (
        <div className="service-body">
        <SecondNavbar />        
        <div className=" pb-5">
        <ServiceHome
          image="/Services/GIS.png"
          mobImage="/Services/GIS 2.png"
        />

          <div className="row top-sec">
            <div className="col-lg-6">
              <div className="top-sec-head"><div>GIS / Cartography Solutions</div></div>
            </div>
            <div className="col-lg-6">
              <div className="service-tag-top">{GISdevData.tagline}</div>
            </div>
          </div>
            <SpecializedSolutions data={GISdevData.solutions}
            heading="Specialized Solutions for Real-World Applications of GIS" />
            
            {/* <TechWeUseSingle field={"GIS / Cartography"}/> */}
            <DevelopmentProcess />
            <FAQ data={GISFAQData.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default GIS;