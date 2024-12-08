import React from "react";
import "../../styles/ContactUsCard.css";
import { useState } from "react";
import ContactForm from "../HomePage/ContactForm";

const ContactUsCard = () => {
    const [isPanelOpen, setIsPanelOpen] = useState(false); // Track if contact form panel is open

    const openPanel = () => setIsPanelOpen(true);
    const closePanel = () => setIsPanelOpen(false);
    return (
        <>
        <div className="row contac-margin">
            <div className="col-md-7 d-flex justify-content-center padding-contact flex-column">
                <h1 className="txt-lg-contact">Have a <span className="head-highlight">project</span> in mind?</h1>
                <p className="txt-sm-contact">Let's Get to work!</p>
                <button onClick={openPanel} class='custom-dark-button'>Get in Touch</button>
            </div>
            <div className="col-md-5 p-4">
                <img className="img-fluid" src='/contactus.jpg'></img>
            </div>
        </div>
      <ContactForm isOpen={isPanelOpen} onClose={closePanel} />
        
        </>
    );
}

export default ContactUsCard;