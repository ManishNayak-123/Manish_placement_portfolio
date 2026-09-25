import React from "react";
import { Navigate, useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
  const location = useLocation();
  
  // Check if user is authenticated (e.g., JWT token stored in localStorage)
  const token = localStorage.getItem("token"); // or check your Redux / AuthContext state

  if (!token) {
    // Redirect unauthenticated user to signup, preserving the location they tried to access
    return <Navigate to="/signup" state={{ from: location }} replace />;
  }

  return children;
}