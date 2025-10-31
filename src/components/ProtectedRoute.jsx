import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import '../index.css';

/**
 * ProtectedRoute component
 * @param {ReactNode} children - The component to render if access is allowed
 * @param {Array} roles - Optional array of roles allowed to access this route
 */
export default function ProtectedRoute({ children, roles = [] }) {
  const { user } = useAuth();
  const location = useLocation();

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If roles are specified and user's role is not allowed, redirect to home/dashboard
  if (roles.length > 0 && !roles.includes(user.role)) {
    // You can redirect to a "Not Authorized" page if you create one
    return <Navigate to="/" replace />;
  }

  // User is authenticated and allowed, render children
  return children;
}
