import React from "react";
import MyNav from "../Utilities/Navbar";
import Footer from "../Utilities/Footer";
import "./Policies.css";

const TermsAndConditions = () => {
  return (
    <>
      <MyNav isAtTopComp={true} />

      <div
        className="row d-flex policy justify-content-center">
        <div className="px-4 col-md-8">
          <h1 className="text-center mb-5  fw-bold head-highlight">
            Neosyss Terms & Conditions <br/>End User Policy
          </h1>
          <p className="pt-5">
            <strong>Effective Date: October 1st, 2024</strong>
          </p>
          <p className="my-5">
            Welcome to <a href="/">neosyss.com</a> (referred to as "the
            Website"), provided by Neosyss ("we," "our," or "us"). By accessing
            or using the Website, you ("user" or "you") agree to comply with and
            be bound by the following terms and conditions. If you do not agree
            to these terms, please do not use the Website.
          </p>

          <h4 className="head-highlight mt-5 fw-bold">1. Acceptance of Terms</h4>
          <p>
            By using the Website, you acknowledge that you have read,
            understood, and agree to these terms and conditions.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">2. Modification of Terms</h4>
          <p>
            Neosyss reserves the right to modify these terms at any time without
            prior notice. Continued use of the Website after any such changes
            shall constitute your consent to such changes.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">3. Use of the Website</h4>
          <p>
            You agree to use the Website in compliance with all applicable laws
            and regulations. You must not misuse or abuse the platform,
            including but not limited to engaging in fraudulent activities,
            spreading malware, or any actions that may harm other users or the
            integrity of the Website.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">4. Fair Use</h4>
          <p>
            Your use of the Website must be fair and not excessive relative to
            typical usage by other users. We reserve the right to impose limits
            or terminate services if your use disrupts or negatively affects the
            experience of other users or the overall functionality of the
            Website.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">5. User Conduct</h4>
          <p>
            You are responsible for maintaining the confidentiality of your
            account information and for all activities that occur under your
            account. You agree to notify us immediately of any unauthorized use
            of your account.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">6. Indemnification</h4>
          <p>
            You agree to indemnify, defend, and hold harmless Neosyss, its
            affiliates, officers, directors, employees, consultants, and agents
            from any and all claims, liability, damages, and/or costs (including
            but not limited to legal fees) arising from your use of the Website,
            your violation of these terms and conditions, or your infringement,
            or infringement by any other user of your account, of any
            intellectual property or other right of any person or entity.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">7. Limitation of Liability</h4>
          <p>
            To the extent permitted by law, Neosyss shall not be liable for any
            indirect, incidental, consequential, or punitive damages, or any
            loss of profits or revenues, whether incurred directly or
            indirectly, or any loss of data, use, goodwill, or other intangible
            losses resulting from (i) your use of or inability to use the
            Website (ii) any unauthorized access to or use of our servers
            and/or any personal information stored therein.
          </p>
          <h4 className="head-highlight mt-5 fw-bold">8. Governing Law</h4>
          <p>
            These terms and conditions are governed by the laws of the United
            States, without respect to its conflict of laws principles. You
            agree to submit to the personal jurisdiction of the state and
            federal courts located in the United States for any actions related
            to these terms.
          </p>
          <p className="my-5 text-start py-5">
          If you have any questions regarding these terms and conditions, please contact us at:
          <br/><br/><strong>Email:</strong> info@neosyss.com
            <br/><strong>Call:</strong> (415) 599 0916
            <br/><strong>Whatsapp:</strong> 0339-0-636797 (NEOSYSS)
            <br/><br/>Thank you for using Neosyss!
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
