import React, { useRef, useState, useEffect } from 'react';
import MyNav from './Utilities/Navbar';
import ScrollingWords from './HomePage/ScrollingWords';
import TechnologiesWeUse from './HomePage/TechnologiesWeUse';
import IndustriesWeServe from './HomePage/IndustriesWeServe';
import Blogs from './HomePage/Blogs';
import AboutUs from './AboutUs';
import Carousel from './HomePage/Carousel';
import DevelopmentProcess from './HomePage/DevelopmentProcess';
import OurMission from './HomePage/OurMission';
import Footer from './Utilities/Footer';
import Loading from './Utilities/Loading';

const slides = [
  {
    image: '/videos/code_your_future_today.mp4',
    type: 'video',
    headline: 'Code Your Future, Today',
    subHeadline: 'Your dedicated digital partners, from infancy to dreams!',
  },
  {
    image: '/videos/tired_of_finding_freelancers.webm',
    type: 'video',
    headline: 'Tired of Freelancing Platforms?',
    subHeadline: 'Schedule a Meeting Today',
  },
  {
    image: '/videos/your_software_our_creation.webm',
    type: 'video',
    headline: 'Your Software, Our Creation',
    subHeadline: 'Custom-built software, tailored to your needs',
  },
];

const Home = () => {
  const devProcessRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Run only on initial mount
    const handleLoading = () => {
      setTimeout(() => setIsLoading(false), 2000); // Adjust time as needed
    };

    handleLoading();
  }, []); // Empty dependency array ensures this only runs once

  return (
    <>
      {isLoading ? (
        <div className="loading-home">
          <Loading />
        </div>
      ) : (
        <>
          <MyNav isHomePage={true} devProcessRef={devProcessRef} />
          <Carousel images={slides} interval={2000} />
          <ScrollingWords />
          <div id="mission">
            <OurMission />
          </div>
          <div id="dev-process" ref={devProcessRef}>
            <DevelopmentProcess />
          </div>
          <div id="services">
            <ScrollingWords />
          </div>
          <div id="technologies">
            <TechnologiesWeUse />
          </div>
          <div id="industries">
            <IndustriesWeServe />
          </div>
          <div className="bloglines-img-cont my-5">
            <img src="/lines.png" alt="Blog" className="blog-lines" />
          </div>
          <Blogs />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
