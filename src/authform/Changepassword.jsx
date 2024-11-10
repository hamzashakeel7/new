import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';
import axios from 'axios';

function Changepassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    if (!password || !confirmPassword) {
      toast.error('Please fill in all fields.');
      return false;
    }
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://silvertlcbackend.vercel.app/api/v1/auth/changepassword', {
          password,
        });
        toast.success('Password reset successfully!');
        navigate('/completion');
      } catch (error) {
        console.error('Password reset failed:', error);
        toast.error('Password reset failed! Please try again.');
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row lg:h-[90vh] overflow-hidden">
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

        {/* Right Section - Password Reset Form */}
        <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12 flex flex-col items-center justify-center relative">
          <div className="absolute top-4 right-0 z-10">
            <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
          </div>

          <h2 className="text-gray-800 text-center text-xl lg:text-2xl font-bold mb-6">Reset Your Password</h2>

          <form onSubmit={handlePasswordReset} className="w-full max-w-lg space-y-4">
            <div>
              <label className="block mb-1 text-gray-600">New Password</label>
              <input
                type="password"
                placeholder="Enter your new password"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-600">Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your new password"
                className="w-full px-4 py-2 rounded-full border border-gray-300"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="w-32 px-4 py-2 rounded-full bg-purple-600 text-white font-bold text-lg"
              >
                Reset Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Changepassword;
