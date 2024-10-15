import React from 'react';
import '../../styles/Loading.css'; // Custom CSS for centering the logo

const Loading = () => {
  return (
    <div className="loading-container">
      <img src="/LoadingPage.png" alt="Logo" className="loading-logo" />
    </div>
  );
};

export default Loading;
