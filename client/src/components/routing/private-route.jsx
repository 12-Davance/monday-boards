import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const { isAuthenticated } = auth;

  if (!isAuthenticated.status) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
