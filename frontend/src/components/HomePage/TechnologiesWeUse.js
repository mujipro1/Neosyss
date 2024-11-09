import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "../../styles/TechnologiesWeUse.css";
import IconButton from "../Utilities/IconButton";

const content = {
  "Mobile Apps": {
    heading: "Mobile Apps",
    subOptions: {
      iOS: [
        { name: "Flutter", iconClass: "fab fa-flutter" },
        { name: "Swift", iconClass: "fab fa-swift" },
        { name: "React Native", iconClass: "fab fa-react" },
      ],
      Android: [
        { name: "Kotlin", iconClass: "fab fa-android" },
        { name: "Java", iconClass: "fab fa-java" },
        { name: "Flutter", iconClass: "fab fa-flutter" },
        { name: "RxJava", iconClass: "fas fa-sync-alt" },
        { name: "React Native", iconClass: "fab fa-react" },
      ],
    },
  },
  "Web Platforms": {
    heading: "Web Platforms",
    subOptions: {
      Frontend: [
        { name: "React js", iconClass: "fab fa-react" },
        { name: "Next.Js", iconClass: "fas fa-code" },
        { name: "Angular", iconClass: "fab fa-angular" },
        { name: "Vue", iconClass: "fab fa-vuejs" },
        { name: "Typescript", iconClass: "fab fa-js" },
        { name: "Html5", iconClass: "fab fa-html5" },
        { name: "CSS", iconClass: "fab fa-css3-alt" },
        { name: "Javascript", iconClass: "fab fa-js" },
        { name: "GraphQL", iconClass: "fas fa-project-diagram" },
        { name: "Apollo", iconClass: "fas fa-space-shuttle" },
        { name: "MaterialUI", iconClass: "fas fa-layer-group" },
        { name: "Rest API", iconClass: "fas fa-server" },
      ],
      Backend: [
        { name: "Node.js", iconClass: "fab fa-node-js" },
        { name: "Python", iconClass: "fab fa-python" },
        { name: "Scala", iconClass: "fas fa-code" },
        { name: "Php", iconClass: "fab fa-php" },
        { name: "Java", iconClass: "fab fa-java" },
        { name: "Spring", iconClass: "fas fa-leaf" },
        { name: ".Net", iconClass: "fab fa-windows" },
        { name: "Laravel", iconClass: "fab fa-laravel" },
      ],
      CMS: [
        { name: "Wordpress", iconClass: "fab fa-wordpress" },
        { name: "Shopify", iconClass: "fab fa-shopify" },
        { name: "Wix", iconClass: "fab fa-wix" },
      ],
    },
  },
  "Artificial Intelligence": {
    heading: "Artificial Intelligence",
    subOptions: {
      Tools: [
        { name: "AI Development", iconClass: "fas fa-robot" },
        { name: "GPT Integration", iconClass: "fas fa-brain" },
        { name: "Model Training", iconClass: "fas fa-cogs" },
        { name: "Model Tuning", iconClass: "fas fa-sliders-h" },
        { name: "Forecast Models", iconClass: "fas fa-chart-line" },
        { name: "Machine Learning", iconClass: "fas fa-brain" },
        { name: "Deep Learning", iconClass: "fas fa-layer-group" },
        { name: "Big Data Analytics", iconClass: "fas fa-database" },
        { name: "OpenCV", iconClass: "fas fa-camera" },
        { name: "LLMs", iconClass: "fas fa-server" },
        { name: "Predictive Modeling", iconClass: "fas fa-chart-pie" },
        { name: "NLPs", iconClass: "fas fa-language" },
      ],
    },
  },
  "GIS / Cartography": {
    heading: "GIS / Cartography",
    subOptions: {
      Tools: [
        { name: "WebGis", iconClass: "fas fa-globe" },
        { name: "Postgresql", iconClass: "fas fa-database" },
        { name: "JS", iconClass: "fab fa-js" },
        { name: "React", iconClass: "fab fa-react" },
        { name: "Django", iconClass: "fab fa-python" },
        { name: "QGIS", iconClass: "fas fa-map" },
        { name: "ArcGIS", iconClass: "fas fa-map-marked" },
        { name: "GeoAI", iconClass: "fas fa-brain" },
        { name: "CartoDB", iconClass: "fas fa-database" },
        { name: "Mapbox", iconClass: "fas fa-map-signs" },
        { name: "Google Earth Engine", iconClass: "fab fa-google" },
      ],
    },
  },
  Database: {
    heading: "Database",
    subOptions: {
      Technologies: [
        { name: "MySQL", iconClass: "fas fa-database" },
        { name: "PostgreSQL", iconClass: "fas fa-database" },
        { name: "MongoDB", iconClass: "fas fa-leaf" },
      ],
    },
  },
  "UI / UX": {
    heading: "UI / UX",
    subOptions: {
      Tools: [
        { name: "Figma", iconClass: "fab fa-figma" },
        { name: "Adobe Photoshop", iconClass: "fab fa-photoshop" },
        { name: "Canva", iconClass: "fas fa-paint-brush" },
        { name: "Adobe Illustrator", iconClass: "fab fa-illustrator" },
      ],
    },
  },
};

const TechnologiesWeUse = () => {
  // State to track selected option
  const [selectedOption, setSelectedOption] = useState("Mobile Apps");

  const isMobile = useMediaQuery({ maxWidth: 900 });
  const isDesktop = useMediaQuery({ minWidth: 901 });

  return (
    <div className="my-component">
      <div className="head-div-services mt-5 px-5 pt-5">
        <h1 className="mt-5">
          <span className="head-highlight">Technologies</span> we use
        </h1>
      </div>
      <p className="tech-para pb-5 pt-3 px-5">
        Equipped to meet your needs with scalable web application, a robust
        mobile app, or a cutting-edge AI solution, our developers possess the
        skills and experience to bring your vision to life. With expertise in
        multiple technologies, we're confident in our ability to deliver
        exceptional results that exceed your expectations.
      </p>
      {isDesktop && (
        <div className="row w-100 my-5 px-5">
          <div className="col-md-4 py-4 borderA">
            {Object.keys(content).map((option) => (
              <div
                key={option}
                className={`option ${
                  selectedOption === option
                    ? "leftBarOption active"
                    : "leftBarOption"
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Right Sidebar - Content */}
          <div className="col-md-8 rightSideBar p-5 borderB">
            {Object.keys(content[selectedOption].subOptions).map(
              (subHeading) => (
                <div className="" key={subHeading}>
                  <h4>{subHeading}</h4>
                  <div className="mb-4">
                    {content[selectedOption].subOptions[subHeading].map(
                      (tech) => (
                        <IconButton
                          text={tech.name}
                          iconClass={tech.iconClass}
                          key={tech.name}
                        />
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
      {isMobile && (
        <div className="mobile-view">
          {/* Horizontal Scrollable Section Names */}
          <div className="horizontal-scrollbar">
            {Object.keys(content).map((option) => (
              <div
                key={option}
                className={`option-horizontal ${
                  selectedOption === option ? "active-horizontal" : ""
                }`}
                onClick={() => setSelectedOption(option)}
              >
                {option}
              </div>
            ))}
          </div>

          {/* Bottom Div Content */}
          <div className="content-mobile p-4">
            {Object.keys(content[selectedOption].subOptions).map(
              (subHeading) => (
                <div key={subHeading}>
                  <h4>{subHeading}</h4>
                  <div className="mb-4">
                    {content[selectedOption].subOptions[subHeading].map(
                      (tech) => (
                        <IconButton
                          text={tech.name}
                          iconClass={tech.iconClass}
                          key={tech.name}
                        />
                      )
                    )}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TechnologiesWeUse;
