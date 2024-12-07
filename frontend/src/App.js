import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Loading from './components/Utilities/Loading';
import BlogForm from './components/BlogForm';
import Footer from './components/Utilities/Footer';
import ProtectedRoute from './components/Utilities/ProtectedRoute';
import './styles/App.css';
import BlogPageSep from './components/BlogPageSep'
import BlogCardDetails from './components/BlogCardDetails';
import CookiePolicy from './components/Policies/CookiePolicy';
import TermsAndConditions from './components/Policies/TermsAndConditions';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';
import SecondNavbar from './components/Utilities/SecondNavbar';
import GIS from './components/Services/GIS';
import WebDev from './components/Services/WebDev';
import AI from './components/Services/AI';
import MobileApp from './components/Services/MobileApp';
import BlockChain from './components/Services/BlockChain';
import ServicesMain from './components/Services/ServicesMain';

const App = () => {

  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App"><Home /></div>} />
        <Route path="/home" element={<div className="App"><Home /></div>} />

        <Route path="/login" element={
          <>
            <SecondNavbar />
            <Login/>
            <Footer />
          </>
          } />

        <Route path="/blogform" element={
          <ProtectedRoute>
            <SecondNavbar/>
            <BlogForm/>
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/blogs/:id" element={
            <>
              <SecondNavbar />
              <BlogCardDetails/>
              <Footer />
            </>
        } />

        <Route path="/blogs/all" element={
            <>
              <SecondNavbar />
              <BlogPageSep/>
              <Footer />
            </>
        } />

        <Route path="/services" element={<ServicesMain />} />
        <Route path="/services/GIS" element={<GIS />} />
        <Route path="/services/AI" element={<AI />} />
        <Route path="/services/WebDev" element={<WebDev />} />
        <Route path="/services/MobileApp" element={<MobileApp />} />
        <Route path="/services/Blockchain" element={<BlockChain />} />
        
        <Route path="/policy/cookies" element={<CookiePolicy />} />
        <Route path="/policy/TAS" element={<TermsAndConditions />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
