import React from "react";
import { Navigate } from "react-router-dom";

const ChangepasswordProtected = ({ children }) => {
  // Check if OTP has been verified
  const isOtpVerified = localStorage.getItem("otpVerified") === "true";

  if (!isOtpVerified) {
    // Redirect to OTP page if OTP not verified
    return <Navigate to="/Otp" replace />;
  }

  return children;
};

export default ChangepasswordProtected;
//  trying to solve errors
