import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';  // Correct import
import 'react-toastify/dist/ReactToastify.css';  // Import CSS for Toastify
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';

const Otp = () => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // Initializing an array of 6 empty strings
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Initialize Toastify
  const notifySuccess = (message) => toast.success(message);
  const notifyError = (message) => toast.error(message);

  const handleChange = (element, index) => {
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Automatically focus on the next input if the current input is filled
    if (element.nextSibling && element.value) {
      element.nextSibling.focus();
    }
    // Focus on the previous input if the current input is cleared
    if (element.previousSibling && !element.value) {
      element.previousSibling.focus();
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();

    const otpCode = otp.join(""); // Join the array elements to form the full OTP

    // Validate if OTP is completely filled
    if (otpCode.length !== 6) {
      notifyError("Please enter a valid 6-digit OTP.");
      return;
    }

    setLoading(true); // Set loading state to true

    try {
      const response = await axios.post('/api/verify-otp', { otp: otpCode });

      if (response.status === 200) {
        notifySuccess('OTP verified successfully!');

        // Set OTP verified flag in localStorage
        localStorage.setItem('otpVerified', 'true');

        // Navigate to Change Password page
        navigate('/changepassword');
      } else {
        notifyError('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error('Failed to verify OTP:', error);
      notifyError('An error occurred. Please try again later.');
    } finally {
      setLoading(false); // Set loading state back to false
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-10 bg-gray-100">
      {/* Logo */}
      <div className="absolute top-3 right-3">
        <img src={logo} alt="Logo" className="w-20 h-auto hidden lg:block" />
      </div>

      {/* Left side - Image with overlay text */}
   {/* Left side - Image with overlay text */}
<div className="relative w-full lg:w-1/2 lg:-ml-40">
  <img 
    src={loginimage} 
    alt="login" 
    className="w-full h-64 lg:h-[592px] rounded-lg object-cover" 
  />
  <div className="absolute bottom-5 left-1/3 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
    <h2 className="text-2xl font-bold m-0">Your Health, Our Priority</h2>
    <p className="text-lg m-0">Caring for You, Every Step</p>
  </div>
</div>

      {/* Right Side - OTP Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0 mr-0 lg:mr-5">
        <h2 className="text-center text-gray-800 mb-5 text-2xl font-bold">Verify OTP sent to your Email</h2>

        <form onSubmit={handleOtpSubmit} className="flex flex-col items-center">
          <div className="flex space-x-2 mb-4">
            {otp.map((data, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={data}
                onChange={(e) => handleChange(e.target, index)}
                className="w-12 h-12 border border-gray-300 rounded-lg text-center text-2xl focus:outline-none focus:border-purple-500"
                disabled={loading} // Disable OTP inputs during verification
              />
            ))}
          </div>

          {/* Button Wrapper to Align Right */}
          <div className="flex justify-end w-full">
            <button
              type="submit"
              className="w-1/3 px-4 py-2 rounded-2xl border-none bg-purple-600 text-white font-bold cursor-pointer text-lg mt-2"
              disabled={loading} // Disable button when loading
            >
              {loading ? 'Verifying...' : 'Verify'}
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default Otp;
