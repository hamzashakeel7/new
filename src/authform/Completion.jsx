import React from 'react';
import { useNavigate } from 'react-router-dom';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';
import { FaCheckCircle } from 'react-icons/fa';

const Completion= () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login');
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

      

      {/* Right Side - Success Message */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0 mr-0 lg:mr-5 flex flex-col items-center">
        <button
          type="button"
          className="w-full bg-purple-600 mb-4 text-white py-2 rounded-full hover:bg-purple-700 transition duration-300"
        >
          Congratulations
        </button>

        <div className="w-full p-6   rounded-lg text-center">
          <FaCheckCircle className="text-green-500 text-5xl mb-4 mx-auto" />
          <p className="text-lg font-medium text-gray-800">
            Your Password has been successfully reset
          </p>
          <p className="text-blue-600 underline cursor-pointer mt-2" onClick={handleLoginRedirect}>
            Click Here to Login
          </p>
        </div>
      </div>
    </div>
  );
};

export default Completion;
