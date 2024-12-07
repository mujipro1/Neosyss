import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    // Function to show button when scrolled 30% down the page
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (scrollPosition > documentHeight * 0.3) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    // Scroll back to the top when the button is clicked
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Use useEffect to add scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className={`send-up-btn ${showButton ? 'visible' : ''}`}
            onClick={scrollToTop}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                width="16"
                height="16"
            >
                <path d="M12 19V6M5 12l7-7 7 7" />
            </svg>
        </div>
    );
};

export default ScrollToTopButton;
