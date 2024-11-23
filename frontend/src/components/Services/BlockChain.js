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


const BlockChain = () => {

  const BlockChainDevelopmentData = SolutionsData.find(data => data.category === "Block Chain");
    const BlockChainDevelopmentFAQ = FAQData.find(data => data.category === "AI Development");
  
    return (
        <div className="service-body">
        <SecondNavbar />        
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
            <DevelopmentProcess />
            <FAQ data={BlockChainDevelopmentFAQ.data}/>
        </div>
        <Footer />
        </div>
    );
}

export default BlockChain;