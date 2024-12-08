import React, { useState, useRef, useEffect } from "react";
import FAQ from "./Utils/FAQ";
import SpecializedSolutions from "./Utils/SpecializedSolutions";
import MyNav from "../Utilities/Navbar";
import Footer from "../Utilities/Footer";
import TechWeUseSingle from "./Utils/TechWeUseSingle";
import SolutionsData from "../data/SolutionsData";
import FAQData from "../data/FAQData";
import ServiceHome from "./Utils/ServiceHome";
import Frameworks from "./Utils/Frameworks";
import frameworksData from "../data/FrameworksData";
import devProcessData from "../data/ServicesSteps";
import Revolve from "./Utils/Revolve";
import ContactUsCard from "../Utilities/ContactUsCard";

const WebDev = () => {

  const webDevelopmentData = SolutionsData.find(data => data.category === "Web Development");
  const webDevelopmentFAQ = FAQData.find(data => data.category === "Web");
  
  const WebFrData = frameworksData.find(data => data.category === "Web");
  const WebDevPData = devProcessData.find(data => data.category === "Web Development");
  
  const tagline = "Our web application development process includes comprehensive project planning, UI/UX design, frontend and backend development, quality assurance, and deployment, ensuring your solution is robust and ready for scale."
    return (
        <div className="service-body">
        <MyNav />        
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
          <Revolve data={WebDevPData.data} tagline={tagline} />
            
            <Frameworks heading={"Full Stack Frameworks"} 
            subheading={"Neosyss leverages a modern technology stack to ensure reliability, security, and performance across all web applications. Our solutions are designed to be flexible, integrating seamlessly with client systems and workflows."}
            frameworks={WebFrData.frameworks}/>

            <FAQ data={webDevelopmentFAQ.data}/>
        </div>
        <ContactUsCard/>
        <Footer />
        </div>
    );
}

export default WebDev;