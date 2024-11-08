import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import loginimage from '../assets/login.png';
import logo from '../assets/image.png';
import axios from 'axios';

function Login() {
  const [activeTab, setActiveTab] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();

  // Email validation
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email.');
      return false;
    }
    setEmailError('');
    return true;
  };

  // Form validation
  const validateForm = () => {
    if (!email || !password || !role) {
      toast.error('Please fill in all fields.');
      return false;
    }
    if (!validateEmail(email)) {
      return false;
    }
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post('https://yourapiurl.com/login', {
          email,
          password,
          role,
        });
        toast.success('Login successful!');
        navigate('/Dashboard/');
      } catch (error) {
        console.error('Login failed:', error);
        toast.error('Login failed! Please check your credentials and try again.');
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-10 bg-gray-100 pl-8 lg:pl-16">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar />

      {/* Logo in top-right corner */}
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


      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10  mt-5 lg:mt-0">
        <h2 className="text-center text-gray-800 mb-5 text-2xl font-bold">Welcome to SilverTLC</h2>

        {/* Login/Register Toggle with Outline */}
        <div className="flex justify-center gap-4 mb-8 p-2 rounded-full">
          <button
            onClick={() => setActiveTab('login')}
            className={`px-6 py-2 rounded-full font-semibold text-lg ${activeTab === 'login' ? 'bg-purple-600 text-white' : 'bg-transparent text-black border-2 border-black'}`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setActiveTab('register');
              navigate('/Register');
            }}
            className={`px-6 py-2 rounded-full font-semibold text-lg ${activeTab === 'register' ? 'bg-purple-600 text-white' : 'bg-transparent text-black border-2 border-black'}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* User Role Dropdown */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">User Role</label>
            <select
              className="w-full px-3 py-2 rounded-full border border-gray-300 bg-gray-100"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="">Select Role</option>
              <option>Corporate User</option>
              <option>Individual</option>
              <option>Service Provider</option>
              <option>Insurance Company</option>
            </select>
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-full border border-gray-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => validateEmail(email)}
            />
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 rounded-full border border-gray-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex justify-between items-center mb-5">
            <label className="text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <a href="/Forgotpassword" className="text-purple-600 no-underline text-sm">Forgot Password?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full lg:w-1/3 px-4 py-2 rounded-2xl border-none bg-purple-600 text-white font-bold cursor-pointer text-lg mt-2 lg:float-right"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
