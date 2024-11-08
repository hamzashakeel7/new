import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';

const Changepassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    try {
      const response = await axios.post('/api/reset-password', { password });
      if (response.status === 200) {
        alert('Password reset successfully!');
        localStorage.removeItem('otpVerified');

        navigate('/completion');
      } else {
        alert('Failed to reset password. Please try again.');
      }
    } catch (error) {
      console.error('Failed to reset password:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-10 bg-gray-100">
      {/* Logo */}
      <div className="absolute top-3 right-3">
        <img src={logo} alt="Logo" className="w-20 h-auto hidden lg:block" />
      </div>

      {/* Left side - Image with overlay text */}
      <div className="relative w-full lg:max-w-lg">
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

      {/* Right Side - Password Reset Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0 mr-0 lg:mr-5">
        <button
          type="button"
          className="w-full bg-purple-600 mb-4 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Enter New Password
        </button>

        <form onSubmit={handlePasswordReset} className="flex flex-col items-center">
          <div className="w-full mb-4">
            <label className="block text-gray-700 text-lg mb-2">Enter New Password</label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              />
              <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-purple-500">
                {/* Eye icon for showing password */}
              </span>
            </div>
          </div>

          <div className="w-full mb-6">
            <label className="block text-gray-700 text-lg mb-2">Re-enter Your Password</label>
            <div className="relative">
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:border-purple-500"
              />
              <span className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-purple-500">
                {/* Eye icon for showing password */}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full lg:w-1/3 px-4 py-2 rounded-2xl bg-purple-600 text-white font-bold cursor-pointer text-lg mt-2 lg:float-right"
          >
            Reset Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Changepassword;
