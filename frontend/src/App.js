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
import MyNav from './components/Utilities/Navbar';
import BlogCardDetails from './components/BlogCardDetails';
import CookiePolicy from './components/Policies/CookiePolicy';
import Test from './Test';
import TermsAndConditions from './components/Policies/TermsAndConditions';
import PrivacyPolicy from './components/Policies/PrivacyPolicy';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="App"><Home /></div>} />
        <Route path="/home" element={<div className="App"><Home /></div>} />

        <Route path="/login" element={
          <>
            <MyNav isAtTopComp={true} />
            <Login/>
            <Footer />
          </>
          } />

        <Route path="/blogform" element={
          <ProtectedRoute>
            <MyNav isAtTopComp={true} />
            <BlogForm/>
            <Footer />
          </ProtectedRoute>
        } />

        <Route path="/blogs/:id" element={
            <>
              <MyNav isAtTopComp={true}/>
              <BlogCardDetails/>
              <Footer />
            </>
        } />

        <Route path="/blogs/all" element={
            <>
              <MyNav isAtTopComp={true}/>
              <BlogPageSep/>
              <Footer />
            </>
        } />
        <Route path="/test" element={<Test />} />

        <Route path="/policy/cookies" element={<CookiePolicy />} />
        <Route path="/policy/TAS" element={<TermsAndConditions />} />
        <Route path="/policy/privacy" element={<PrivacyPolicy />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
