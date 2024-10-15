import React from "react";
import '../../styles/IconButton.css';

const IconButton = ({ text, iconClass=null, onclick=null }) => {
    return (
        <button className={iconClass == null ? "btn-centered hover-button" : "hover-button"} onClick={onclick}>             
                <i className={`icon-static ${iconClass}`}></i>
            <span className="text text-btn-center">
                {text}
            </span>
            <span className="text text-top">
                {text}
            </span>
        </button>
    );
}

export default IconButton;