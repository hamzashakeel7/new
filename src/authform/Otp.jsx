import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';
import axios from 'axios';

function Otp() {
  const [otp, setOtp] = useState(new Array(6).fill("")); // 6 empty OTP fields
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize Toastify
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
    if (element.previousSibling && !element.value) {
      element.previousSibling.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const otpCode = otp.join(""); // Join OTP fields to create the full OTP

    if (otpCode.length !== 6) {
      notifyError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post('https://silvertlcbackend.vercel.app/api/v1/auth/otpcheck', { otp: otpCode });

      if (response.status === 200) {
        notifySuccess('OTP verified successfully!');
        localStorage.setItem('otpVerified', 'true');
        navigate('/changepassword');
      } else {
        notifyError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      notifyError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:h-[77vh] overflow-hidden">
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

        {/* Left Section - Image with Overlay Text */}
        <div className="w-full lg:w-2/5 relative">
          <img src={loginimage} alt="login" className="w-96 h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
            <h2 className="text-2xl font-bold m-0 whitespace-nowrap">Your Health, Our Priority</h2>
            <p className="text-lg m-0 whitespace-nowrap">Caring for You, Every Step</p>
          </div>
        </div>

        {/* Right Section - OTP Form */}
        <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12 flex flex-col items-center justify-center relative">
          <div className="absolute top-4 right-0 z-10">
            <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
          </div>

          <h2 className="text-gray-800 text-center text-xl lg:text-2xl font-bold mb-6">Verify OTP sent to your Email</h2>

          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
            <div className="flex justify-center gap-2 mb-4">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleChange(e.target, index)}
                  className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-purple-500"
                  disabled={loading}
                />
              ))}
            </div>

            <div className="flex justify-center w-full">
              <button
                type="submit"
                className="w-32 px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-lg"
                disabled={loading}
              >
                {loading ? 'Verifying...' : 'Verify'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Otp;
