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
import ContactUsCard from "../Utilities/ContactUsCard";

const GIS = () => {

  const GISdevData = SolutionsData.find(data => data.category === "GIS");
  const GISFAQData = FAQData.find(data => data.category === "GIS");
  const GISDevPData = devProcessData.find(data => data.category === "GIS");

  const tagline = "Our GIS and cartography services are meticulously crafted to deliver precise, visually appealing, and actionable spatial solutions aligned with client objectives. From data collection to map creation and spatial analysis, we adhere to industry best practices to meet modern geospatial requirements."

  return (
    <div className="service-body">
      <MyNav />
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

        <TechWeUseSingle field={"GIS / Cartography"}/>
        <Revolve data={GISDevPData.data} tagline={tagline} />

        <FAQ data={GISFAQData.data} />
      </div>
      <ContactUsCard/>
      <Footer />
    </div>
  );
}

export default GIS;