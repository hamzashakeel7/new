import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import registerimage from "../assets/register.png";
import logo from '../assets/image.png';

function Register() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [activeTab, setActiveTab] = useState('register'); // Active tab state
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

  // Full Name validation
  const validateFullName = (name) => {
    if (name.length < 3) {
      setFullNameError('Full name must be at least 3 characters.');
      return false;
    }
    setFullNameError('');
    return true;
  };

  // Phone Number validation
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setPhoneNumberError('Please enter a valid 10-digit phone number.');
      return false;
    }
    setPhoneNumberError('');
    return true;
  };

  // Password validation
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // At least 6 characters, one letter, one number
    if (!passwordRegex.test(password)) {
      setPasswordError('Password must be at least 6 characters long and include both letters and numbers.');
      return false;
    }
    setPasswordError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      validateEmail(email) &&
      validateFullName(fullName) &&
      validatePhoneNumber(phoneNumber) &&
      validatePassword(password)
    ) {
      try {
        const response = await axios.post('https://yourapiurl.com/register', {
          fullName,
          phoneNumber,
          email,
          password,
          role,
        });
        console.log(response.data);
        navigate('/login');
      } catch (error) {
        console.error('Registration failed:', error);
        alert('Registration failed! Please try again.');
      }
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
<div className="relative w-full lg:max-w-lg mt-[10px] lg:mt-0">
  <img src={registerimage} alt="login" className="w-full h-auto lg:w-[666px] lg:h-[592px] rounded-lg object-cover" />
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white p-2.5 rounded-lg text-center">
    <h2 className="text-2xl font-bold m-0">Welcome to Gapcure</h2>
  </div>
</div>




      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-10 mt-5 lg:mt-0">
        <h2 className="text-center text-gray-800 mb-5 text-2xl font-bold">Welcome to GapCure</h2>

        {/* Login/Register Toggle with Outline */}
        <div className="flex justify-center gap-4 mb-8 p-2 rounded-full">
          <button
            onClick={() => {setActiveTab('login')
                            navigate('/Login');
            }}
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === 'login' ? 'bg-purple-600 text-white' : 'bg-transparent text-black border-2 border-black'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => {
              setActiveTab('register');
              navigate('/Register');
            }}
            className={`px-6 py-2 rounded-full font-semibold text-lg ${
              activeTab === 'register' ? 'bg-purple-600 text-white' : 'bg-transparent text-black border-2 border-black'
            }`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleSubmit}>

        <div className="mb-4">
            <label className="block mb-1 text-gray-600">User Role</label>
            <select
              className="w-full px-3 py-2 rounded-full border border-gray-300 bg-gray-100"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option>Select Role</option>
              <option>Corporate User</option>
              <option>Individual</option>
              <option>Service Provider</option>
              <option>Insurance Company</option>
            </select>
          </div>
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-3 py-2 rounded-full border border-gray-300"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              onBlur={() => validateFullName(fullName)}
            />
            {fullNameError && <p className="text-red-500 text-sm">{fullNameError}</p>}
          </div>

          {/* Phone Number Field */}
          <div className="mb-4">
            <label className="block mb-1 text-gray-600">Phone Number</label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 rounded-full border border-gray-300"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onBlur={() => validatePhoneNumber(phoneNumber)}
            />
            {phoneNumberError && <p className="text-red-500 text-sm">{phoneNumberError}</p>}
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
              onBlur={() => validatePassword(password)}
            />
            {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          </div>

         
          

          <button
            type="submit"
            className="w-full lg:w-1/3 px-4 py-2  rounded-2xl border-none bg-purple-600 text-white font-bold cursor-pointer text-lg mt-2 lg:float-right"
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
