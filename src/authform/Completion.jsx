import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';
import { FaCheckCircle } from 'react-icons/fa';

const Completion = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4 lg:p-8">
      <div className="relative w-full max-w-3xl lg:max-w-4xl bg-white rounded-lg shadow-lg flex flex-col lg:flex-row overflow-hidden lg:h-[90vh] h-auto">
        
        {/* Logo in Top Right within the Main Container */}
        <div className="absolute top-4 right-4 z-10">
          <img src={logo} alt="Logo" className="w-12 lg:w-16 h-auto" />
        </div>

        {/* Left Section - Image with Overlay Text */}
        <div className="w-full lg:w-2/5 relative">
          <img src={loginimage} alt="login" className="w-96 h-full object-cover" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
            <h2 className="text-2xl font-bold m-0 whitespace-nowrap">Your Health, Our Priority</h2>
            <p className="text-lg m-0 whitespace-nowrap">Caring for You, Every Step</p>
          </div>
        </div>
        {/* Right Section - Success Message */}
        <div className="w-full lg:w-1/2 px-6 py-8 lg:py-12 flex flex-col items-center justify-center">
          <button
            type="button"
            className="w-full bg-purple-600 mb-4 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300"
          >
            Congratulations
          </button>

          <div className="w-full max-w-sm p-6 rounded-lg text-center">
            <FaCheckCircle className="text-green-500 text-5xl mb-4 mx-auto" />
            <p className="text-lg font-medium text-gray-800">
              Your Password has been successfully reset
            </p>
            <p 
              className="text-blue-600 underline cursor-pointer mt-2" 
              onClick={handleLoginRedirect}
            >
              Click Here to Login
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Completion;
