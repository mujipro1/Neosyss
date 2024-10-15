import React from "react";
import MyNav from "../Utilities/Navbar";
import Footer from "../Utilities/Footer";
import "./Policies.css";

const PrivacyPolicy = () => {
  return (
    <>
      <MyNav isAtTopComp={true} />

      <div
        className="row d-flex policy justify-content-center">
        <div className=" px-4 col-md-8">
          <h1 className="text-center mb-5  fw-bold head-highlight">
            Neosyss Privacy Policy
          </h1>
          <p className="pt-5">
            <strong>Effective Date: October 1st, 2024</strong>
          </p>
          <p className="my-5">
            Neosyss ("we," "us," or "our") is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and
            disclose your personal information when you visit our website{" "}
            <a href="/">neosyss.com</a> ("Website") or interact with our
            services.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">
            Information We Collect
          </h4>
          <p>
            When you visit our Website or use our services, we may collect the
            following types of information:
          </p>
          <p className="mx-5">
            <h4 className="head-highlight mt-5 fw-bold">
              Personal Information
            </h4>
            <p>
              This includes information that can be used to identify you, such
              as your name, email address, phone number, and company
              information.
            </p>
            <h4 className="head-highlight mt-5 fw-bold">Usage Information</h4>
            <p>
              We may collect information about how you use our Website, such as
              the pages you visit, the links you click, and the time and date of
              your visits.
            </p>
            <h4 className="head-highlight mt-5 fw-bold">Device Information</h4>
            <p>
              We may collect information about your device, such as your IP
              address, browser type, and operating system.
            </p>
          </p>
          <h4 className="head-highlight mt-5 pt-5 fw-bold">
            How We Use Your Information?
          </h4>
          <p>
            We may use your information for the following purposes:
            <ul>
              <li>To provide you with the services you request. </li>
              <li>
                To communicate with you about our services, promotions, or other
                news.
              </li>
              <li>To improve our Website and services.</li>
              <li>To protect against fraud and abuse.</li>
              <li>To comply with legal requirements.</li>
            </ul>
          </p>
          <h4 className="head-highlight mt-5 fw-bold">
            Disclosure of Your Information
          </h4>
          <p>We may disclose your information to:</p>
          <ul>
            <li>
              Our service providers who help us operate our Website and
              services.
            </li>
            <li>
              Our business partners who offer complementary products or
              services.
            </li>
            <li>
              Law enforcement agencies or other government authorities as
              required by law.
            </li>
            <li>To protect against fraud and abuse.</li>
            <li>To comply with legal requirements.</li>
          </ul>
          <h4 className="head-highlight mt-5 fw-bold">Your Rights</h4>
          <p>
            You may have the following rights regarding your personal
            information:
          </p>
          <ul>
            <li>
              <strong>Access:</strong> You may request access to the personal
              information we hold about you.
            </li>
            <li>
              <strong>Rectification:</strong> You may request that we correct
              any inaccurate or incomplete personal information.{" "}
            </li>
            <li>
              <strong>Erasure:</strong> You may request that we delete your
              personal information.
            </li>
            <li>
              <strong>Restriction of Processing:</strong> You may request that
              we restrict the processing of your personal information.
            </li>
            <li>
              <strong>Data Portability:</strong> You may request that we
              transfer your personal information to another organization.
            </li>
            <li>
              <strong>Object to Processing:</strong> You may object to the
              processing of your personal information.
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us using the information
            provided below.
          </p>
          <h4 className="head-highlight mt-5 pt-3 fw-bold">
            Cookies and Tracking Technologies
          </h4>
          <p>
            We may use cookies and other tracking technologies to collect
            information about your use of our Website. You can manage your
            cookie preferences through your browser settings.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">Security</h4>
          <p>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission over the Internet or
            electronic storage is completely secure.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">
            Changes to This Privacy Policy
          </h4>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any significant changes by posting a notice on our Website.
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

export default PrivacyPolicy;
