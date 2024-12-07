import React from "react";
import { useNavigate } from "react-router-dom";
import SecondNavbar from "../Utilities/SecondNavbar";
import "../Services/styles/ServicesMain.css";
import Footer from "../Utilities/Footer";

const data = [
    { id: 1, title: "Artificial Intelligence", img: "/Services/AIcard.png", link: "/services/AI" },
    { id: 2, title: "Mobile App Development", img: "/Services/Mobilecard.png", link: "/services/mobileApp" },
    { id: 3, title: "Website Development", img: "/Services/Webcard.png", link: "/services/WebDev" },
    { id: 4, title: "Blockchain", img: "/Services/Blockchaincard.png", link: "/services/Blockchain" },
    { id: 5, title: "", img: "", link: "" },
    { id: 6, title: "GIS/ Cartography", img: "/Services/GIScard.png", link: "/services/GIS" },
];

const ServicesMain = () => {
    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    
    return (
        <div className="services_container">
            <SecondNavbar />
            <div className="row pt-5 mt-5">
                <div className="d-flex px-0 text-center flex-column align-items-center">
                    <h1 className="py-4 main-services-head">Neosyss - Your End-to-End
                        <span className="head-highlight"> Growth Partner</span></h1>
                    <p className="main-services-para">
                    At Neosyss, we provide comprehensive solutions tailored to drive your growth. From cutting-edge web development to customizable GIS and AI solutions, our team of expert professionals is dedicated to adding value to your products and projects.
                    <br/>
                    Explore our wide range of services designed to empower businesses with innovative technology.
                    </p>
                </div>
            </div>

            <div className="row mb-5">
                {data.map((item, index) => (
                    <>
                    {index == 4 ? <div className="col-lg-4"></div> : 
                    <div
                    key={item.id}
                    className={`col-lg-4 main-services-col ${
                        item.id === 2 || item.id === 5 ? "custom-card" : ""
                        }`}
                        >
                        <div className="main-services-card" onClick={() => handleNavigate(item.link)}>
                            <img src={item.img} className="img-fluid" alt={item.title}></img>
                            <h3 className="px-2 mt-3">{item.title}</h3>
                        </div>
                    </div>
                    }
                    </>
                ))}
            </div>

            <Footer />
        </div>
    );
};

export default ServicesMain;
