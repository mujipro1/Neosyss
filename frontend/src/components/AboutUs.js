import { useEffect, useRef } from "react";
import "../styles/AboutUs.css"; // CSS file for transitions and custom styles

const AboutUs = () => {
  const leftDivRef = useRef(null);
  const headingRef = useRef(null);


  
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Div */}
        <div className="col-md-5 left-div" ref={leftDivRef}>
          <div className="left-content p-5">
            <h1 className="heading" ref={headingRef}>About Us </h1>
          </div>
        </div>

        {/* Right Div */}
        <div className="col-md-7 p-5 right-div">
          <section className="section">
            <h2 className="heading2">What makes Neosyss different</h2>
            <p className="text-justify">
              What makes Neosyss different is, we thrive on human-to-human
              connection and firmly believe in making partnerships for life. We
              believe in growing together & being your partners through the
              infancy to your dreams! <br></br><br></br> Following our client-centric approach, the
              term 'compromise on quality' is unknown to us. As a company, we
              firmly believe in the quality of work that we promise, and we
              don't just follow our values for clients, we are also very
              confident in the skills of our highly qualified technical
              professionals who specialize in crafting your dreams in various
              verticals that include AI & Machine Learning, Custom Enterprise
              Software, Web Development, Mobile App Development, and Blockchain
              Development. We are not only restricted to these domains, but we
              also believe in providing our clients with whatever they need.<br></br><br></br>
               We practice an agile approach to provide absolute ease and peace of
              mind for our clients because we believe in committing to
              constructive feedback cycles and continuous improvements to make
              our services more client-centric.
            </p>
          </section>
          <section className="section">
            <h2 className="heading2">Our Mission</h2>
            <p className="text-justify">
              In a world where disruptive technologies are reshaping industries,
              Neosyss empowers businesses to stay ahead with agile digital
              solutions. Our mission is to equip organizations with the tools
              and platforms needed to overcome the uncertainties of the digital
              age.<br></br><br></br> At Neosyss, we understand that business strategies must
              evolve rapidly to keep pace with change. Our comprehensive suite
              of digital services provides the flexibility and innovation
              required to help companies hit moving targets, adapt to emerging
              trends, and thrive in an increasingly dynamic environment.
            </p>
          </section>

          {/* Add more sections as needed */}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
