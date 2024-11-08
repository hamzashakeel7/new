import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  // Correct imports
import 'react-toastify/dist/ReactToastify.css';  // Ensure this is imported
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';

const Forgotpassword = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
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
      const response = await axios.post('/api/forgot-password', { emailOrPhone });

      if (response.status === 200) {
        notifySuccess('Password reset link sent to your email/phone!');
        navigate('/otp');
      } else {
        notifyError('Error: Unable to initiate password reset. Please try again.');
      }
    } catch (error) {
      console.error('Failed to send request:', error);
      notifyError('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-10">
      {/* Logo in top-right corner */}
      <div className="absolute top-3 right-3">
        <img src={logo} alt="Logo" className="w-20 h-auto hidden lg:block" />
      </div>

      {/* Left side - Image with overlay text */}
      <div className="relative w-full lg:w-1/2 -ml-40">
        <img src={loginimage} alt="login" className="w-full h-64 lg:h-[592px] rounded-lg object-cover" />
        <div className="absolute bottom-5 left-1/3 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
          <h2 className="text-2xl font-bold m-0">Your Health, Our Priority</h2>
          <p className="text-lg m-0">Caring for You, Every Step</p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10 bg-white rounded-lg mt-5 lg:mt-0 mr-0 lg:mr-5">
        <h2 className="text-center text-gray-800 mb-5 text-2xl font-bold">Welcome to SilverTLC</h2>

        <form onSubmit={handleForgotPassword}>
          <div className="mb-4">
            <label htmlFor="emailOrPhone" className="block text-gray-700 mb-2 font-medium">
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
            className="w-full lg:w-1/3 px-4 py-2 rounded-2xl bg-purple-600 text-white font-bold cursor-pointer text-lg mt-2 lg:float-right"
          >
            Confirm
          </button>
        </form>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </div>
  );
};

export default Forgotpassword;
