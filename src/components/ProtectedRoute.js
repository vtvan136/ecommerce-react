import { Navigate } from "react-router-dom";
import { UserAuth } from "../store/AuthContext";
import React from "react";
const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    alert("You need to login or sign in");
    return <Navigate to="/auth" />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
