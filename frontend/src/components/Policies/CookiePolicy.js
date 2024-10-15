import React from "react";
import Footer from "../Utilities/Footer";
import "./Policies.css";
import MyNav from "../Utilities/Navbar";

const CookiePolicy = () => {
  return (
    <>
      <MyNav isAtTopComp={true} />

      <div
        className="row d-flex policy justify-content-center">
        <div className="px-4 m-0 col-md-8">
          <h1 className="text-center mb-5  fw-bold head-highlight">
            Neosyss Cookies Policy
          </h1>
          <p className="pt-5">
            <strong>Effective Date: October 1st, 2024</strong>
          </p>
          <p className="my-5">
            Thank you for visiting <a href="/">neosyss.com</a> (“Website”). This
            Cookies Policy explains how we use cookies and similar technologies
            on our Website.
          </p>

          <h4 className="head-highlight mt-5 fw-bold">1. What Are Cookies?</h4>
          <p>
            Cookies are small text files that are stored on your device when you
            visit a website. They help improve your browsing experience by
            remembering your preferences and enabling certain functionalities.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">
            2. Type of Cookies We Use
          </h4>
          <p className="mx-5">
            <h4 className="head-highlight mt-5 fw-bold">
              2.1. Essential Cookies
            </h4>
            <p>
              Essential cookies are necessary for the basic functioning of our
              Website. They enable core features such as security, network
              management, and accessibility.
            </p>
            <h4 className="head-highlight mt-5 fw-bold">
              2.2. Performance and Functionality Cookies
            </h4>
            <p>
              These cookies enhance the performance and functionality of our
              Website but are not essential for its use. However, without these
              cookies, certain functionalities (like videos) may become
              unavailable or may not work as intended.
            </p>
            <h4 className="head-highlight mt-5 fw-bold">
              2.3. Analytics and Customization Cookies
            </h4>
            <p>
              These cookies collect information that is used to help us
              understand how our Website is being used or how effective our
              marketing campaigns are, to help us customize our Website for you.
            </p>

            <h4 className="head-highlight mt-5 fw-bold">
              2.4. Social Media Cookies
            </h4>
            <p>
              These cookies are used to enable you to share content from our
              Website on social networks and to provide you with social media
              features.
            </p>
          </p>
          <h4 className="head-highlight mt-5 fw-bold">3. Use of Cookies</h4>
          <p>
            We use cookies to improve your experience on our Website, including
            to:
            <ul>
              <li>Understand user preferences and improve user experience.</li>
              <li>
                Test and analyze data to understand Website traffic and usage.
              </li>
              <li>Enable social media functionalities.</li>
            </ul>
          </p>
          <h4 className="head-highlight mt-5 fw-bold">4. Managing Cookies</h4>
          <p>
            You have the option to accept or reject cookies. Most web browsers
            automatically accept cookies, but you can modify your browser
            settings to decline cookies if you prefer. However, rejecting
            cookies may prevent you from taking full advantage of our Website.
          </p>

          <h4 className="head-highlight mt-5 fw-bold">
            5. Updates to Cookies Policy
          </h4>
          <p>
            We may update this Cookies Policy from time to time to reflect
            changes in our practices or for other operational, legal, or
            regulatory reasons. Please revisit this page regularly to stay
            informed about our use of cookies.
          </p>

          <p className="my-5 text-start py-5">
            If you have any questions or concerns about our use of cookies,
            please contact us at:
            <br />
            <br />
            <strong>Email:</strong> info@neosyss.com
            <br />
            <strong>Call:</strong> (415) 599 0916
            <br />
            <strong>Whatsapp:</strong> 0339-0-636797 (NEOSYSS)
            <br />
            <br />
            Thank you for using Neosyss!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicy;
