import React from "react";
import TechWeUseData from "../../data/TechWeUseData";
import { useMediaQuery } from "react-responsive";
import IconButton from "../../Utilities/IconButton";


const TechWeUseSingle = ({field}) => {
    
    const isMobile = useMediaQuery({ maxWidth: 900 });
    const isDesktop = useMediaQuery({ minWidth: 901 });
    return (
        <>
         <div className="techweuse-services">
            <div className="col-md-7 techweuse-head offset-md-2">
                <h1>Technologies <span className=" head-highlight">We</span> Use</h1>
                <p style={{fontSize:'large'}}className="py-3">{TechWeUseData[`${field}`].tagline}</p>
            </div>
            {/* tech we use */}
            {isDesktop && (
                <div className="col-md-8 offset-md-2  techweuse-col">
                    {Object.keys(TechWeUseData[`${field}`].subOptions).map(
                    (subHeading) => (
                        <div key={subHeading}>
                        {subHeading == "Tools" ? null : <h4 className="px-3 pt-3"><strong>{subHeading}</strong></h4>}
                        <div className="mb-4">
                            {TechWeUseData[`${field}`].subOptions[subHeading].map(
                            (tech) => (
                                <IconButton
                                text={tech.name}
                                iconClass={tech.iconClass}
                                key={`${subHeading}-${tech.name}`}
                                />
                            )
                            )}
                        </div>
                        </div>
                    )
                    )}
                </div>
            )}
            {isMobile && (
                <div className="p-4">
                {Object.keys(TechWeUseData["Artificial Intelligence"].subOptions).map(
                  (subHeading) => (
                    <div key={subHeading}>
                      <h4>{subHeading}</h4>
                      <div className="mb-4">
                        {TechWeUseData["Artificial Intelligence"].subOptions[subHeading].map(
                          (tech) => (
                            <IconButton
                              text={tech.name}
                              iconClass={tech.iconClass}
                              key={`${subHeading}-${tech.name}`} // Unique key for each technology
                            />
                          )
                        )}
                      </div>
                    </div>
                  )
                )}
              </div>
            )}
            </div>
            {/* tech we use ends */}
        </>
    );
}

export default TechWeUseSingle;