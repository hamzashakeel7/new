import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loginimage from "../assets/login.png";
import logo from "../assets/image.png";

const Forgotpassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const navigate = useNavigate();

  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    if (!emailOrPhone) {
      notifyError("Please enter your email or phone number.");
      return;
    }

    try {
      const response = await axios.post(
        "https://silvertlcbackend.vercel.app/api/v1/auth/forgotpassword",
        { emailOrPhone }
      );

      if (response.status === 200) {
        notifySuccess("Password reset link sent to your email/phone!");
        navigate("/otp");
      } else {
        notifyError(
          "Error: Unable to initiate password reset. Please try again."
        );
      }
    } catch (error) {
      console.error("Failed to send request:", error);
      notifyError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="w-full max-w-3xl lg:w-[60rem] bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden lg:h-[70vh] h-auto">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Left Section - Image with Overlay */}
        <div className="w-full lg:w-[30rem] relative">
          <img
            src={loginimage}
            alt="login"
            className="w-[40rem]  md:h-[42rem] object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
            <h2 className="text-2xl font-bold m-0 whitespace-nowrap">
              Your Health, Our Priority
            </h2>
            <p className="text-lg m-0 whitespace-nowrap">
              Caring for You, Every Step
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-[30rem] px-6 py-8 lg:py-12 flex flex-col items-center justify-center relative gap-10">
          <div className="absolute top-4 right-4 z-10">
            <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
          </div>

          <h2 className="text-gray-800 text-center text-xl lg:text-2xl font-bold mb-10">
            Welcome to SilverTLC
          </h2>

          <form
            onSubmit={handleForgotPassword}
            className="w-full max-w-sm space-y-20"
          >
            <div>
              <label
                htmlFor="emailOrPhone"
                className="block text-gray-700 mb-2 font-medium"
              >
                Email or Phone Number
              </label>
              <input
                type="text"
                id="emailOrPhone"
                placeholder="Enter your email or phone number"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-2 rounded-full bg-purple-600 text-white font-bold cursor-pointer text-lg"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
