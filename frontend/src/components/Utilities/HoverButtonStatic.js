import React from "react";
import '../../styles/HoverButtonStatic.css';

const HoverButtonStatic = ({ text, mode, clickEvent=null }) => {
    return (
        <button className={`hover-button-static ${mode}-static`}  onClick={clickEvent}>             
            <span className="text-static text-btn-center-static">
                {text}
            </span>
            <span className="text-static text-top-static">
                {text}
            </span>
        </button>
    );
}

export default HoverButtonStatic;