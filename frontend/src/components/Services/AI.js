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
import Revolve from "./Utils/Revolve";


const AI = () => {

    const aiDevelopmentData = SolutionsData.find(data => data.category === "AI Development");
    const aiDevelopmentForecastData = SolutionsData.find(data => data.category === "AI Development Forecast");
       
    const aiDevelopmentFAQ = FAQData.find(data => data.category === "AI Development");
    
    const aiDevData = devProcessData.find(data => data.category === "AI");
    
    const tagline="Our AI development process is meticulously designed to ensure high-quality deliverables aligned with client goals. From data preparation to model deployment, we adopt industry best practices to meet modern requirements."
    return (    
        <div className="service-body">
        <MyNav />        
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

            <TechWeUseSingle field={"Artificial Intelligence"} />

            <Revolve data={aiDevData.data} tagline={tagline}/>

            <FAQ data={aiDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default AI;