import React, { useState, useEffect } from 'react';
import '../../styles/ContactForm.css'; 
import HoverButtonStatic from '../Utilities/HoverButtonStatic';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission

  // Close the panel when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.panel-content')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setIsSubmitted(true); // Set submission state to true
        setFormData({
          service: '',
          name: '',
          email: '',
          phone: '',
          message: '',
        });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending your message.');
    }
  };

  const handleAnotherResponse = () => {
    setIsSubmitted(false); // Reset submission state to false
    setFormData({
      service: '',
      name: '',
      email: '',
      phone: '',
      message: '',
    }); // Reset form data
  };

  return (
    <div className={`sliding-panel ${isOpen ? 'open' : ''}`}>
      <div className="panel-content mx-3">
        <button className="close-btn" onClick={onClose}>×</button>

        {/* Conditionally show the thank-you message or form */}
        {isSubmitted ? (
          <div className="thank-you-message">
            <h1 className='head-highlight fw-bold'>Thank You!</h1>
            <p className='text-grey-sec'>Your message has been received. We will reach out to you shortly.</p>
              <div className="mx-2 mt-5">
                Submit Another Response
              </div>
            <HoverButtonStatic text={'Submit'} clickEvent={handleAnotherResponse} mode={'light'}/>
          </div>
        ) : (
          <>
            <h1 className='fw-bold'>Send us a <span className='head-highlight'>Message</span>!</h1>
            <p className='text-grey my-3'>
              Share the details of your project – like scope, timeframes, or business challenges.
              Our team will thoroughly review the materials and respond to you promptly.
            </p>

            <p > Contact us at : +1 (321) 350-0558 </p>

            <form onSubmit={handleSubmit}> {/* Add onSubmit handler to the form */}
              <div className="row">
                <div className="col-md-12 mt-4">
                  <div className='input-form div-select'>
                    <select name="service" className='input-form select' value={formData.service}
                      onChange={handleInputChange} required>
                      <option value="" disabled>Select a Service</option>
                      <option value="AI & Machine Learning">AI & Machine Learning</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="GIS">GIS</option>
                      <option value="Web Development">Web Development</option>
                      <option value="UI/UX">UI/UX</option>
                      <option value="Blockchain">Blockchain</option>
                      <option value="Custom Software">Custom Software</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-md-12 mt-3">
                  <input required className='input-form' type="text" name="name" placeholder="Name"
                    value={formData.name} onChange={handleInputChange}/>
                </div>

                <div className="col-md-6 mt-3">
                  <input required className='input-form' type="email" name="email"
                    placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                </div>

                <div className="col-md-6 mt-3">
                  <input required className='input-form' type="phone" name="phone"
                    placeholder="Phone" value={formData.phone} onChange={handleInputChange}/>
                </div>

                <div className="col-md-12 mt-3">
                  <textarea required className='input-form rad' name="message" placeholder="Message"
                    rows={4} value={formData.message} onChange={handleInputChange}/>
                </div>
              </div>

              <div className="justify-content-center d-flex my-3">
                <HoverButtonStatic text={'Send'} mode={'light'} clickEvent={handleSubmit} />
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
