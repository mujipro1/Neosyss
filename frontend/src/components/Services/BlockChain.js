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

const BlockChain = () => {

  const tagline = "Our blockchain development process includes solution design, smart contract programming, DApp development, testing, and deployment, ensuring your solution is secure, scalable, and ready for the digital economy."

  const BlockChainDevelopmentData = SolutionsData.find(data => data.category === "Block Chain");
    const BlockChainDevelopmentFAQ = FAQData.find(data => data.category === "BlockChain");
  
  const BlockchainFrData = frameworksData.find(data => data.category === "Blockchain");
  const BCDevData = devProcessData.find(data => data.category === "Blockchain");


    return (
        <div className="service-body">
        <MyNav />        
        <div className=" pb-5">
        <ServiceHome
          image="/Services/Block chain.png"
          mobImage="/Services/Block chain 2.png"
        />

          <div className="row top-sec">
            <div className="col-lg-6">
              <div className="top-sec-head"><div>Block Chain Solutions</div></div>
            </div>
            <div className="col-lg-6">
              <div className="service-tag-top">{BlockChainDevelopmentData.tagline}</div>
            </div>
          </div>
            <SpecializedSolutions data={BlockChainDevelopmentData.solutions}
            heading={'Specialized Solutions for Blockchain Applications'} />
            <TechWeUseSingle field={"Block Chain"}/>
            
            <Revolve data={BCDevData.data} tagline={tagline} />

            <Frameworks heading={"Technology Stack"} 
            subheading={"Neosyss leverages a modern technology stack to ensure reliability, security, and performance across all blockchain applications. Our solutions are designed to be flexible, integrating seamlessly with client systems and workflows."}
            frameworks={BlockchainFrData.frameworks}/>
            
            <FAQ data={BlockChainDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default BlockChain;