import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check if user is authenticated

  if (!isAuthenticated) {
    // If not authenticated, redirect to login
    return <Navigate to="/login" replace />;
  }

  // If authenticated, allow access to the protected route
  return children;
};

export default ProtectedRoute;
