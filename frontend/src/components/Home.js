import React, { useRef } from 'react';
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
  // your slides here
];

const Home = () => {
  const devProcessRef = useRef(null);

  return (
    <>
      <div className="loading-home">
        <Loading />
      </div>

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
  );
};

export default Home;
